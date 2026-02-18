#!/usr/bin/env bash
# verify-nip05.sh — Verify NIP-05 endpoint is correctly configured
# Usage: ./scripts/verify-nip05.sh [optional-url]

URL="${1:-https://maxiim3.github.io/.well-known/nostr.json?name=me}"
EXPECTED_KEY="15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900"
FAILED=0

echo "Verifying NIP-05 endpoint: $URL"
echo "---"

# Fetch with headers (10s timeout)
if ! RESPONSE=$(curl -si -m 10 "$URL" 2>/dev/null); then
  echo "❌ curl failed — check network connectivity or URL"
  exit 1
fi

HTTP_STATUS=$(echo "$RESPONSE" | grep -m1 "^HTTP" | awk '{print $2}')
CORS_HEADER=$(echo "$RESPONSE" | grep -i "access-control-allow-origin" | head -1)
BODY=$(echo "$RESPONSE" | sed '1,/^\r$/d')

if [ -z "$BODY" ]; then
  echo "⚠️  Warning: response body is empty — header parsing may have failed"
fi

# Check 1: HTTP 200
if [ "$HTTP_STATUS" = "200" ]; then
  echo "✅ HTTP 200 OK"
else
  echo "❌ HTTP status: ${HTTP_STATUS:-unknown} (expected 200)"
  FAILED=1
fi

# Check 2: CORS header present
if echo "$CORS_HEADER" | grep -q "\*"; then
  echo "✅ CORS: Access-Control-Allow-Origin: *"
else
  echo "❌ CORS header missing or incorrect: ${CORS_HEADER:-none}"
  FAILED=1
fi

# Check 3: Hex key present in response
if echo "$BODY" | grep -q "$EXPECTED_KEY"; then
  echo "✅ Hex key present in response"
else
  echo "❌ Hex key not found in response body"
  FAILED=1
fi

echo "---"
echo "Done."

exit $FAILED
