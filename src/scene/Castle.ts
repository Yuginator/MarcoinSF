import * as THREE from 'three';

// --- Monument Valley Palette ---
const PALETTE = {
    sky: 0xA9D1F7,
    base: 0xF2E8C9,   // Warm Sand
    wall: 0xF8F1E5,   // Creamy White
    roof: 0xFF8C9E,   // Soft Coral/Pink
    shadow: 0x9D8D8F, // Muted Purple-Grey
    accent: 0x66D9E8, // Teal/Cyan
};

export const CASTLE_CONFIG = {
    gateZ: 0,
    archInterval: 10,
    hallWidth: 12,
    hallHeight: 15,
    archThickness: 1,
    startZ: 40, // Camera starts here (Far view)
};

export const createCastleScene = (scene: THREE.Scene, minZ: number = -200) => {
    const group = new THREE.Group();

    // 1. Common Materials (Standard PBR)
    // No gradient map, no toon shader.
    // We create base materials, but will clone or instance them? 
    // Easier to just pick a color and make a new material instance per planet to control flatShading.
    // Vibrant "Falling into Line" Palette
    const paletteColors = [
        0x00C853, // Vibrant Green
        0x2962FF, // Electric Blue
        0xFF4081, // Hot Pink
        0xFF6D00, // Bright Orange
        0xFFD600, // Sunny Yellow
        0x00E5FF, // Cyan/Turquoise
        0x6200EA, // Deep Violet (for variance)
    ];

    // 1. Generate Floating Planets
    // Distribute based on total length
    const startZ = CASTLE_CONFIG.startZ + 20; // Start slightly behind camera
    const endZ = minZ - 50; // Go past the last item
    const totalDepth = Math.abs(startZ - endZ);

    // PLANETS REMOVED BY USER REQUEST
    // Only keeping environment effects (Stars + Speed Lines)

    // 2. Glittering Stars System ✨
    // Distribute stars along the entire scroll path + extra padding
    const starStartZ = startZ + 50;
    const starEndZ = endZ - 200; // Extend deep behind final photo
    const starRangeZ = Math.abs(starStartZ - starEndZ);

    // Density: Ensure high density throughout. e.g. 30 stars per Z unit
    // But keep a reasonable floor/ceiling
    const starDensity = 50;
    const starCount = Math.min(100000, Math.max(50000, Math.floor(starRangeZ * starDensity)));

    const starGeom = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starSeeds = new Float32Array(starCount); // For random blink offsets

    for (let i = 0; i < starCount; i++) {
        // Scatter in a large volume around the scene
        starPos[i * 3] = (Math.random() - 0.5) * 600;     // X
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 400; // Y

        // Z: Distribute along the calculated path
        starPos[i * 3 + 2] = starStartZ - (Math.random() * starRangeZ);

        starSizes[i] = Math.random();
        starSeeds[i] = Math.random() * 100;
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeom.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
    starGeom.setAttribute('aSeed', new THREE.BufferAttribute(starSeeds, 1));

    const starMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(0xFFFFFF) }
        },
        vertexShader: `
        uniform float uTime;
        attribute float aSize;
        attribute float aSeed;
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // TWINKLE: Sine wave based on time + random seed
            float twinkle = 0.5 + 0.5 * sin(uTime * 2.0 + aSeed);
            
            // Size attenuation + twinkle
            gl_PointSize = (10.0 * aSize * twinkle) * (100.0 / -mvPosition.z);
        }
      `,
        fragmentShader: `
        uniform vec3 uColor;
        void main() {
           // Soft circle shape
           float r = distance(gl_PointCoord, vec2(0.5));
           if (r > 0.5) discard;
           
           // Glow falloff
           float alpha = 1.0 - (r * 2.0);
           alpha = pow(alpha, 1.5);

           gl_FragColor = vec4(uColor, alpha);
        }
      `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starGeom, starMaterial);
    group.add(stars);

    // 3. Speed Lines System 🚀
    // A. THIN LINES (80%)
    const lineCount = 750;
    const lineGeom = new THREE.BufferGeometry();
    const linePos = [];
    const lineColors = [];

    // Helper to get random pos in tunnel
    const getTunnelPos = () => {
        const radius = 20 + Math.random() * 80; // 20 to 100
        const angle = Math.random() * Math.PI * 2;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            angle: angle
        };
    };

    for (let i = 0; i < lineCount; i++) {
        const { x, y } = getTunnelPos();

        // Z Position
        const zStart = startZ - (Math.random() * totalDepth);
        const length = 20 + Math.random() * 100;
        const zEnd = zStart - length;

        // Add Line Segment
        linePos.push(x, y, zStart);
        linePos.push(x, y, zEnd);

        // Color
        const colorHex = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        const col = new THREE.Color(colorHex);

        lineColors.push(col.r, col.g, col.b);
        lineColors.push(col.r, col.g, col.b);
    }

    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
    lineGeom.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        opacity: 0.6,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    const speedLines = new THREE.LineSegments(lineGeom, lineMat);
    group.add(speedLines);

    // B. THICK STRIPES (20%)
    // Flat planes looking like stripes coming out of center
    const stripeCount = 60;

    for (let i = 0; i < stripeCount; i++) {
        const { x, y, angle } = getTunnelPos();
        const zStart = startZ - (Math.random() * totalDepth);
        const length = 40 + Math.random() * 120; // Slightly longer
        const width = 0.5 + Math.random() * 2.5; // Visible width

        // Create Plane: Width x Length
        // X=Width (Short), Y=Length (Long)
        const geom = new THREE.PlaneGeometry(width, length);

        // Color
        const colorHex = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        const mat = new THREE.MeshBasicMaterial({
            color: colorHex,
            side: THREE.DoubleSide, // Visible from any angle
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const stripe = new THREE.Mesh(geom, mat);

        // Position center of the stripe
        // Z center is zStart - length/2
        stripe.position.set(x, y, zStart - length / 2);

        // Orientation:
        // 1. Rotate X 90 to lie flat on Z axis (Length along Z)
        stripe.rotation.x = Math.PI / 2;

        group.add(stripe);
    }

    scene.add(group);

    // Return update function to animate stars
    const update = (time: number) => {
        starMaterial.uniforms.uTime.value = time * 0.001; // Scale ms to seconds
    };

    return { group, palette: PALETTE, update };
};
