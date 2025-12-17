import * as THREE from 'three';

export const CASTLE_CONFIG = {
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
        0xffd935, //yellow
        0xfc8d23, // orange
        0xff7bdc, // pink
        0x94ffe1, // green
        0x7d3efc // blue
    ];
    // #ffd935, //yellow
    // #fc8d23, // orange
    // #ff7bdcff, // pink
    // #94ffe1ff, // green
    // #7d3efcff // blue

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
    // Common Config for Animation
    // StartZ is roughly +40 (camera). EndZ is -200 (far).
    // rangeZ = 240.
    // We want to move towards negative Z (away).
    // Uniforms shared
    const commonUniforms = {
        uTime: { value: 0 },
        uSpeed: { value: 50.0 }, // Units per second
        uZStart: { value: starStartZ }, // ~+60
        uZRange: { value: starRangeZ + 100 } // Total wrapping distance
    };

    // A. THIN LINES (80%)
    const lineCount = 750;
    const lineGeom = new THREE.BufferGeometry();
    const lCenters = new Float32Array(lineCount * 2 * 3);
    const lOffsets = new Float32Array(lineCount * 2 * 3);
    const lColors = new Float32Array(lineCount * 6);
    const lAlphas = new Float32Array(lineCount * 2);
    const lGlows = new Float32Array(lineCount * 2); // For motion blur fade

    const lIndices = [];

    const getTunnelPos = () => {
        const radius = 20 + Math.random() * 80;
        const angle = Math.random() * Math.PI * 2;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            angle: angle
        };
    };

    for (let i = 0; i < lineCount; i++) {
        const { x, y } = getTunnelPos();
        const zCenter = starStartZ - (Math.random() * starRangeZ);
        const length = 20 + Math.random() * 100;
        const colorHex = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        const col = new THREE.Color(colorHex);

        // 30% Chance to Glow
        const isGlow = Math.random() < 0.3 ? 1.0 : 0.0;

        // Vertex 1 (Head) - Opaque
        lCenters[i * 6 + 0] = x;
        lCenters[i * 6 + 1] = y;
        lCenters[i * 6 + 2] = zCenter;
        lOffsets[i * 6 + 0] = 0;
        lOffsets[i * 6 + 1] = 0;
        lOffsets[i * 6 + 2] = 0;
        lColors[i * 6 + 0] = col.r;
        lColors[i * 6 + 1] = col.g;
        lColors[i * 6 + 2] = col.b;
        lAlphas[i * 2 + 0] = 1.0;
        lGlows[i * 2 + 0] = isGlow;

        // Vertex 2 (Tail) - Transparent
        lCenters[i * 6 + 3] = x;
        lCenters[i * 6 + 4] = y;
        lCenters[i * 6 + 5] = zCenter;
        lOffsets[i * 6 + 3] = 0;
        lOffsets[i * 6 + 4] = 0;
        lOffsets[i * 6 + 5] = -length;
        lColors[i * 6 + 3] = col.r;
        lColors[i * 6 + 4] = col.g;
        lColors[i * 6 + 5] = col.b;
        lAlphas[i * 2 + 1] = 0.0;
        lGlows[i * 2 + 1] = isGlow;

        lIndices.push(i * 2, i * 2 + 1);
    }

    lineGeom.setAttribute('position', new THREE.BufferAttribute(lCenters, 3));
    lineGeom.setAttribute('aCenter', new THREE.BufferAttribute(lCenters, 3));
    lineGeom.setAttribute('aOffset', new THREE.BufferAttribute(lOffsets, 3));
    lineGeom.setAttribute('color', new THREE.BufferAttribute(lColors, 3));
    lineGeom.setAttribute('aAlpha', new THREE.BufferAttribute(lAlphas, 1));
    lineGeom.setAttribute('aGlow', new THREE.BufferAttribute(lGlows, 1));
    lineGeom.setIndex(lIndices);

    const lineMat = new THREE.ShaderMaterial({
        uniforms: commonUniforms,
        vertexShader: `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec3 aOffset;
            attribute float aAlpha;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying float vAlpha;
            varying float vGlow;
            
            void main() {
                vColor = color;
                vAlpha = aAlpha;
                vGlow = aGlow;
                
                float currentZ = aCenter.z + (uTime * uSpeed);
                float relativeZ = uZStart - currentZ; 
                float wrappedRelZ = mod(relativeZ, uZRange);
                float finalZ = uZStart - wrappedRelZ;
                
                vec3 finalPos = vec3(aCenter.x, aCenter.y, finalZ) + aOffset;
                
                vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            varying float vAlpha;
            varying float vGlow;
            void main() {
                // Brighter base (1.5x) + Glow Boost (30x for bloom effect)
                vec3 finalColor = vColor * (1.5 + vGlow * 30.0);
                gl_FragColor = vec4(finalColor, vAlpha * 0.8);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexColors: true
    });

    const speedLines = new THREE.LineSegments(lineGeom, lineMat);
    // Needed for frustum culling not to kill lines when "center" is out of bounds but wrapped version isn't
    speedLines.frustumCulled = false;
    group.add(speedLines);

    // B. THICK STRIPES (20%)
    const stripeCount = 80;

    // Instanced Buffer Geometry
    // Base Geometry: 1x1 Plane, centered.
    const baseGeom = new THREE.PlaneGeometry(1, 1);
    const instGeom = new THREE.InstancedBufferGeometry();
    instGeom.index = baseGeom.index;
    instGeom.attributes.position = baseGeom.attributes.position;
    instGeom.attributes.uv = baseGeom.attributes.uv;

    const sCenters = new Float32Array(stripeCount * 3);
    const sDimensions = new Float32Array(stripeCount * 2); // w, h
    const sColors = new Float32Array(stripeCount * 3);
    const sColors2 = new Float32Array(stripeCount * 3); // Second color for gradient
    const sGlows = new Float32Array(stripeCount);

    for (let i = 0; i < stripeCount; i++) {
        const { x, y } = getTunnelPos();
        const zCenter = starStartZ - (Math.random() * starRangeZ);

        const length = 40 + Math.random() * 120;
        const width = 0.5 + Math.random() * 2.5;

        sCenters[i * 3 + 0] = x;
        sCenters[i * 3 + 1] = y;
        sCenters[i * 3 + 2] = zCenter;

        sDimensions[i * 2 + 0] = width;
        sDimensions[i * 2 + 1] = length;

        // Pick two random colors from palette for gradient
        const colorHex1 = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        const colorHex2 = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        const col1 = new THREE.Color(colorHex1);
        const col2 = new THREE.Color(colorHex2);

        sColors[i * 3 + 0] = col1.r;
        sColors[i * 3 + 1] = col1.g;
        sColors[i * 3 + 2] = col1.b;

        sColors2[i * 3 + 0] = col2.r;
        sColors2[i * 3 + 1] = col2.g;
        sColors2[i * 3 + 2] = col2.b;

        sGlows[i] = 1.0; // All stripes glow now (was 10%)
    }

    instGeom.setAttribute('aCenter', new THREE.InstancedBufferAttribute(sCenters, 3));
    instGeom.setAttribute('aDimension', new THREE.InstancedBufferAttribute(sDimensions, 2));
    instGeom.setAttribute('aColor', new THREE.InstancedBufferAttribute(sColors, 3));
    instGeom.setAttribute('aColor2', new THREE.InstancedBufferAttribute(sColors2, 3));
    instGeom.setAttribute('aGlow', new THREE.InstancedBufferAttribute(sGlows, 1));

    const stripeMat = new THREE.ShaderMaterial({
        uniforms: commonUniforms,
        vertexShader: `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec2 aDimension;
            attribute vec3 aColor;
            attribute vec3 aColor2;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow; // pass to frag
            
            void main() {
                vColor = aColor;
                vColor2 = aColor2;
                vGlow = aGlow;
                vUv = uv; // Pass basic plane UVs (0..1)
                
                // Glowing stripes move 2x faster
                float speedMultiplier = 1.0 + aGlow; // 1.0 for normal, 2.0 for glowing
                float currentZ = aCenter.z + (uTime * uSpeed * speedMultiplier);
                float relativeZ = uZStart - currentZ; 
                float wrappedRelZ = mod(relativeZ, uZRange);
                float finalZ = uZStart - wrappedRelZ;
                
                vec3 transformed = position;
                float w = aDimension.x;
                float l = aDimension.y;
                
                // Map UV y to Z length. 
                // We want the HEAD (y=1) to be at 0 z-offset, and TAIL (y=0) at -l.
                // Wait, plane geom usually is centered.
                // Let's assume standard plane UVs: (0,0) bottom-left to (1,1) top-right.
                // If we want motion blur, we want the "front" to be opaque and "back" transparent.
                // Let's map Position Y to Z length.
                
                vec3 localPos = vec3(transformed.x * w, 0.0, transformed.y * l);
                vec3 worldPos = localPos + vec3(aCenter.x, aCenter.y, finalZ);
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow;
            void main() {
                // Smooth gradient between two random palette colors
                // vColor = head (front), vColor2 = tail (back)
                vec3 gradientColor = mix(vColor2, vColor, vUv.y);
                
                // Opacity Gradient based on UV.y (front opaque, back transparent)
                float alpha = smoothstep(0.0, 0.2, vUv.y); 
                
                // Brighter base (2.0x)
                vec3 finalColor = gradientColor * 2.0;
                
                gl_FragColor = vec4(finalColor, alpha * 0.8);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false, // Avoid z-fighting with self/others
        side: THREE.DoubleSide
    });

    const stripes = new THREE.Mesh(instGeom, stripeMat);
    stripes.frustumCulled = false;
    group.add(stripes);

    // C. BLOOM/GLOW LAYER for Glowing Stripes
    // Create a second layer with larger, more transparent stripes for bloom effect
    const glowInstGeom = new THREE.InstancedBufferGeometry();
    glowInstGeom.index = baseGeom.index;
    glowInstGeom.attributes.position = baseGeom.attributes.position;
    glowInstGeom.attributes.uv = baseGeom.attributes.uv;

    // Reuse the same attributes but scale up dimensions for bloom
    glowInstGeom.setAttribute('aCenter', new THREE.InstancedBufferAttribute(sCenters, 3));
    glowInstGeom.setAttribute('aDimension', new THREE.InstancedBufferAttribute(sDimensions, 2));
    glowInstGeom.setAttribute('aColor', new THREE.InstancedBufferAttribute(sColors, 3));
    glowInstGeom.setAttribute('aColor2', new THREE.InstancedBufferAttribute(sColors2, 3));
    glowInstGeom.setAttribute('aGlow', new THREE.InstancedBufferAttribute(sGlows, 1));

    const glowMat = new THREE.ShaderMaterial({
        uniforms: commonUniforms,
        vertexShader: `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec2 aDimension;
            attribute vec3 aColor;
            attribute vec3 aColor2;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow;
            
            void main() {
                vColor = aColor;
                vColor2 = aColor2;
                vGlow = aGlow;
                vUv = uv;
                
                // Glowing stripes move 3x faster (same as main stripes)
                float speedMultiplier = 1.0 + 2 * aGlow; // 1.0 for normal, 3.0 for glowing
                float currentZ = aCenter.z + (uTime * uSpeed * speedMultiplier);
                float relativeZ = uZStart - currentZ; 
                float wrappedRelZ = mod(relativeZ, uZRange);
                float finalZ = uZStart - wrappedRelZ;
                
                vec3 transformed = position;
                
                // Scale up for bloom effect (3x wider, 1.5x longer for z-axis glow)
                float w = aDimension.x * 3.0;
                float l = aDimension.y * 1.5;
                
                vec3 localPos = vec3(transformed.x * w, 0.0, transformed.y * l);
                vec3 worldPos = localPos + vec3(aCenter.x, aCenter.y, finalZ);
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow;
            void main() {
                // Smooth gradient between two colors
                vec3 gradientColor = mix(vColor2, vColor, vUv.y);
                
                // Soft radial falloff from center (creates blur effect)
                float distFromCenter = abs(vUv.x - 0.5) * 2.0; // 0 at center, 1 at edges
                float radialFalloff = 1.0 - smoothstep(0.0, 1.0, distFromCenter);
                
                // Opacity gradient along length
                float alpha = smoothstep(0.0, 0.2, vUv.y) * radialFalloff;
                
                vec3 finalColor = gradientColor * 10; // Much darker to preserve color with additive blending
                
                gl_FragColor = vec4(finalColor, alpha * 0.9); // Moderate opacity for visible colored bloom
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
    });

    const glowStripes = new THREE.Mesh(glowInstGeom, glowMat);
    glowStripes.frustumCulled = false;
    glowStripes.renderOrder = -1; // Render behind main stripes
    group.add(glowStripes);


    scene.add(group);

    // Return update function to animate stars
    const update = (time: number) => {
        starMaterial.uniforms.uTime.value = time * 0.001;

        // Update lines
        const seconds = time * 0.001;
        commonUniforms.uTime.value = seconds;
    };

    return { group, update };
};
