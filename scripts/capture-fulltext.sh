#!/usr/bin/env bash
set -euo pipefail
out_dir="/tmp/part3-review"
mkdir -p "$out_dir"
slug="$1"
url="http://localhost:3005/part-03/${slug}/"
agent-browser --session part3 open "$url"
agent-browser --session part3 wait 500
agent-browser --session part3 snapshot -i >"$out_dir/${slug}-snapshot.txt"
if grep -q "Full Text" "$out_dir/${slug}-snapshot.txt"; then
  agent-browser --session part3 click "button:has-text('Full Text')" || true
  agent-browser --session part3 wait 600
fi
agent-browser --session part3 screenshot --full "$out_dir/${slug}-fulltext.png"
