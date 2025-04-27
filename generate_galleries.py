import os
from colorthief import ColorThief

# ====== SETTINGS ======
BASE_FOLDER = "assets\images\photography"
COLOR_THRESHOLDS = {
    "red":    (255, 0, 0),
    "green":  (0, 255, 0),
    "blue":   (0, 0, 255),
    "yellow": (255, 255, 0),
    "black":  (0, 0, 0),
    "white":  (255, 255, 255),
    "gray":   (128, 128, 128)
}
COLOR_TOLERANCE = 100
ALLOWED_EXTENSIONS = ('.jpg', '.jpeg', '.png')

def closest_color(rgb):
    """Find the closest major color (red, green, blue, yellow)"""
    r, g, b = rgb
    min_diff = float('inf')
    closest = "other"
    for color_name, color_rgb in COLOR_THRESHOLDS.items():
        cr, cg, cb = color_rgb
        diff = ((r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2) ** 0.5
        if diff < min_diff and diff <= COLOR_TOLERANCE:
            min_diff = diff
            closest = color_name
    return closest


def scan_galleries(base_folder):
    galleries = {}
    total_files = sum([len(files) for r, d, files in os.walk(base_folder)])
    processed_files = 0
    
    print("Scanning galleries... This might take a moment.")

    for place in os.listdir(base_folder):
        place_path = os.path.join(base_folder, place)
        if os.path.isdir(place_path):
            galleries[place] = {}
            for filename in os.listdir(place_path):
                if filename.lower().endswith(ALLOWED_EXTENSIONS):
                    photo_path = os.path.join(place_path, filename)
                    try:
                        color_thief = ColorThief(photo_path)
                        dominant_color = color_thief.get_color(quality=1)
                        group = closest_color(dominant_color)
                        galleries[place].setdefault(group, []).append(filename)
                    except Exception as e:
                        print(f"Error reading {photo_path}: {e}")
                    
                    processed_files += 1
                    print(f"Processed {processed_files}/{total_files} files...")

    return galleries


def generate_js(galleries):
    print("\nGenerating galleries.js content...")
    print("const galleries = {")
    for place, color_groups in galleries.items():
        print(f"  '{place}': {{")
        for color, files in color_groups.items():
            file_list = ", ".join(f"'{file}'" for file in files)
            print(f"    '{color}': [{file_list}],")
        print("  },")
    print("};")
    print("\nDone generating galleries.js!")


if __name__ == "__main__":
    galleries = scan_galleries(BASE_FOLDER)
    generate_js(galleries)
    print("\nScript finished running.")
