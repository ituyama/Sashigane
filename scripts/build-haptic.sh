#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/scripts/haptic_feedback.swift"
OUT="$ROOT/build/HapticFeedback"
TMP="$ROOT/build/.haptic-build-tmp"

if ! command -v swiftc >/dev/null 2>&1; then
  echo "swiftc not found — skipping haptic binary build" >&2
  exit 0
fi

mkdir -p "$ROOT/build"
rm -rf "$TMP"
mkdir -p "$TMP"

echo "Building universal HapticFeedback binary..."
swiftc -O -target arm64-apple-macos11.0 "$SRC" -o "$TMP/HapticFeedback-arm64"
swiftc -O -target x86_64-apple-macos11.0 "$SRC" -o "$TMP/HapticFeedback-x64"
lipo -create -output "$OUT" "$TMP/HapticFeedback-arm64" "$TMP/HapticFeedback-x64"
chmod +x "$OUT"
rm -rf "$TMP"

if [ -d "$ROOT/node_modules/haptic-feedback-swift" ]; then
  cp "$OUT" "$ROOT/node_modules/haptic-feedback-swift/HapticFeedback"
fi

file "$OUT"
