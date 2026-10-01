#!/usr/bin/env bash
# Capture current EVSuite application screens for the documentation site.
#
# Start the 1920x1080 Automotive AVD and install current builds first:
#   mise run emulator-car
#   mise run car-all
#
# The emulator includes 180px of AAOS system bars, leaving the vehicle's 1920x720
# application area. Screenshots intentionally include the bars to show real context.
set -euo pipefail

ADB="${ANDROID_HOME:-$HOME/Android/Sdk}/platform-tools/adb"
OUT="$(cd "$(dirname "$0")/.." && pwd)/src/assets/screenshots"
mkdir -p "$OUT"

shot() {
  sleep 3
  "$ADB" exec-out screencap -p > "$OUT/$1.png"
  echo "captured $1.png"
}

start() {
  local package="$1"
  local activity="$2"
  "$ADB" shell am force-stop "$package"
  "$ADB" shell am start -n "$package/$activity" >/dev/null
}

"$ADB" wait-for-device
if [ "$("$ADB" shell getprop sys.boot_completed | tr -d '\r')" != 1 ]; then
  echo "The Automotive emulator is not fully booted." >&2
  exit 1
fi

echo "$("$ADB" shell wm size | tr -d '\r')"

case "${1:-all}" in
  all|control)
    start com.evsuite.profile .MainActivity
    sleep 3
    # The emulator firmware is unknown to EVProfile. Continue into its explicit
    # compatibility mode so the screenshot documents the actual dashboard.
    "$ADB" shell input tap 1775 136
    shot profile-dashboard
    ;;
esac

case "${1:-all}" in
  all|abrp)
    start com.evsuite.abrp .MainActivity
    shot abrp-dashboard
    ;;
esac

case "${1:-all}" in
  all|simple)
    start com.evsuite.launcher .MainActivity
    shot launcher
    ;;
esac

case "${1:-all}" in
  all|swipe)
    start com.evsuite.swipe .PermissionActivity
    shot swipe
    ;;
esac

case "${1:-all}" in
  all|tasker)
    start com.evsuite.tasker .MainActivity
    shot tasker-rules
    echo "Tasker detail/configuration captures require the seeded documentation rules;"
    echo "the existing curated captures are preserved when only the list is refreshed."
    ;;
esac
