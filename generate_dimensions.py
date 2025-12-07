import os
import subprocess
import json

directory = '/Users/yujingtang/Desktop/CodeRelated/minimalist-3d-photo-gallery/assets/media'
output_file = '/Users/yujingtang/Desktop/CodeRelated/minimalist-3d-photo-gallery/mediaDimensions.ts'

dimensions_map = {}

files = sorted([f for f in os.listdir(directory) if not f.startswith('.')])

print(f"Scanning {len(files)} files...")

for filename in files:
    filepath = os.path.join(directory, filename)
    try:
        # Run mdls for each file
        # -raw flag prints just the value
        w_cmd = ['mdls', '-raw', '-name', 'kMDItemPixelWidth', filepath]
        h_cmd = ['mdls', '-raw', '-name', 'kMDItemPixelHeight', filepath]
        
        width = subprocess.check_output(w_cmd).decode('utf-8').strip()
        height = subprocess.check_output(h_cmd).decode('utf-8').strip()
        
        if width == "(null)" or height == "(null)":
            print(f"Skipping {filename} (no dimensions found)")
            continue
            
        dimensions_map[filename] = {
            "width": int(width),
            "height": int(height),
            "aspectRatio": float(width) / float(height)
        }
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Generate TypeScript file content
ts_content = "export const MEDIA_DIMENSIONS: Record<string, { width: number; height: number; aspectRatio: number }> = " + json.dumps(dimensions_map, indent=2) + ";"

with open(output_file, 'w') as f:
    f.write(ts_content)

print(f"Successfully generated {output_file} with {len(dimensions_map)} entries.")
