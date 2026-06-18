#!/usr/bin/env python3
"""Build a macOS app icon PNG/ICNS with transparent corners outside the squircle."""

from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError:
    print("Installing Pillow...", file=sys.stderr)
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow", "-q"])
    from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build"
SIZE = 1024
# macOS squircle corner radius (~22.37% of edge)
CORNER_RADIUS = int(SIZE * 0.2237)

SOURCES = [
    Path.home()
    / ".cursor/projects/Users-yamanokazuki-Documents-GitHub-Sashigane/assets"
    / "sashigane-ccc53209-f22e-4fb7-92cb-652e9ed67ce0.png",
    ROOT / "build" / "icon-source.jpg",
]


def find_source() -> Path:
    for candidate in SOURCES:
        if candidate.exists():
            return candidate
    raise FileNotFoundError("App icon source image not found")


def rounded_mask(size: int, radius: int) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    return mask


def remove_matte(img: Image.Image) -> Image.Image:
    """Turn near-black pixels outside the artwork into transparency."""
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if r < 24 and g < 24 and b < 24:
                px[x, y] = (r, g, b, 0)
    return img


def prepare_png(source: Path, dest: Path) -> None:
    img = Image.open(source).convert("RGBA").resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    img = remove_matte(img)
    mask = rounded_mask(SIZE, CORNER_RADIUS)
    img.putalpha(Image.composite(img.split()[3], Image.new("L", (SIZE, SIZE), 0), mask))
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, format="PNG", optimize=True)
    print(f"Wrote {dest} (RGBA, hasAlpha=yes)")


def prepare_icns(png_path: Path, icns_path: Path) -> None:
    iconset = BUILD / "icon.iconset"
    if iconset.exists():
        shutil.rmtree(iconset)
    iconset.mkdir()

    sizes = [16, 32, 64, 128, 256, 512, 1024]
    base = Image.open(png_path).convert("RGBA")
    for size in sizes:
        resized = base.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(iconset / f"icon_{size}x{size}.png")
        if size <= 512:
            resized2x = base.resize((size * 2, size * 2), Image.Resampling.LANCZOS)
            resized2x.save(iconset / f"icon_{size}x{size}@2x.png")

    subprocess.check_call(["iconutil", "-c", "icns", str(iconset), "-o", str(icns_path)])
    shutil.rmtree(iconset)
    print(f"Wrote {icns_path}")


def main() -> None:
    source = find_source()
    cached_source = BUILD / "icon-source.jpg"
    if source.resolve() != cached_source.resolve():
        shutil.copy2(source, cached_source)
    png_path = BUILD / "icon.png"
    icns_path = BUILD / "icon.icns"
    prepare_png(source, png_path)
    prepare_icns(png_path, icns_path)


if __name__ == "__main__":
    main()
