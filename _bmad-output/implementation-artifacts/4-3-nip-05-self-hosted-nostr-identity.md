# Story 4.3: NIP-05 Self-Hosted Nostr Identity

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a Nostr user,
I want to host my NIP-05 identifier (`me@maxiim3.github.io`) on GitHub Pages,
so that I have a verifiable, self-hosted Nostr identity independent of third-party services.

## Acceptance Criteria

### 1. NIP-05 JSON File Served Correctly

**Given** the NIP-05 file needs to be served
**When** I create `public/.well-known/nostr.json`
**Then** it contains the following exact JSON:

```json
{
  "names": {
    "me": "15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900"
  },
  "relays": {
    "15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900": [
      "wss://relay.damus.io",
      "wss://relay.primal.net",
      "wss://nos.lol",
      "wss://relay.nostr.band"
    ]
  }
}
```

**And** Astro copies the file to `dist/.well-known/nostr.json` during build (automatic via `public/`)

### 2. CORS Access for Nostr Clients

**Given** Nostr clients need CORS access
**When** a client fetches `https://maxiim3.github.io/.well-known/nostr.json?name=me`
**Then** the response includes `Access-Control-Allow-Origin: *`
**And** the Content-Type is `application/json`
**And** HTTP status is 200 (no redirects — NIP-05 clients reject redirect chains)

### 3. Nostr Profile Updated

**Given** the Nostr profile needs to be updated
**When** the profile is configured (manual action in Nostr client)
**Then** relays are set to: `wss://relay.damus.io`, `wss://relay.primal.net`, `wss://nos.lol`, `wss://relay.nostr.band`
**And** the NIP-05 field is set to `me@maxiim3.github.io`
**And** the profile is saved (kind 0 event broadcast on all relays)

### 4. NIP-05 Verified Across Clients

**Given** the NIP-05 needs to be verified across clients
**When** the profile propagates
**Then** the verified badge displays correctly on Primal (`primal.net`), Habla, and Nosta

### 5. Automated Verification Script

**Given** the NIP-05 setup needs automated verification
**When** a test script queries the endpoint
**Then** it confirms HTTP 200 status
**And** the hex key `15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900` is present in the JSON under `names.me`
**And** `Access-Control-Allow-Origin: *` header is present

## Tasks / Subtasks

- [x] Task 1: Create `.well-known/nostr.json` file (AC: #1, #2)
  - [x] 1.1 Create directory `public/.well-known/`
  - [x] 1.2 Create `public/.well-known/nostr.json` with exact JSON content from AC #1
  - [x] 1.3 Verify `bun run build` copies file to `dist/.well-known/nostr.json`
  - [x] 1.4 Verify file is NOT affected by Jekyll (`.nojekyll` check — see Dev Notes)

- [x] Task 2: Write automated verification script (AC: #5)
  - [x] 2.1 Create `scripts/verify-nip05.sh` (bash curl script)
  - [x] 2.2 Script checks: HTTP 200, hex key present, CORS header present
  - [x] 2.3 Script outputs PASS/FAIL for each check

- [ ] Task 3: Manual Nostr profile update (AC: #3) — post-deploy
  - [ ] 3.1 Open Nostr client (e.g., Primal or Habla)
  - [ ] 3.2 Set NIP-05 field to `me@maxiim3.github.io`
  - [ ] 3.3 Confirm relay list includes all 4 relays from AC #3
  - [ ] 3.4 Broadcast kind 0 event

- [ ] Task 4: Verify NIP-05 badge on Nostr clients (AC: #4) — post-deploy
  - [ ] 4.1 Verify badge on Primal
  - [ ] 4.2 Verify badge on Habla
  - [ ] 4.3 Verify badge on Nosta
  - [ ] 4.4 Run `scripts/verify-nip05.sh` against live URL

## Dev Notes

### Epic 4 Context

Story 4.3 is the final story in Epic 4 (Downloads & Professional Contact).

**Epic 4 progression:**
- Story 4.1: CV Download Component with PDF Files — **DONE**
- Story 4.2: Professional Links & Contact — **DONE**
- **Story 4.3: NIP-05 Self-Hosted Nostr Identity ← THIS STORY**

**FR coverage this story:**
- FR26 extension: Nostr identity as a professional network link (self-hosted verifiable identity)

### Key Technical Facts — Read Before Implementing

#### 1. File Placement — `public/` Not `src/`

The project stores styles at `public/styles/` (not `src/styles/`). **Confirmed in commit `919e903`.**
For static assets, Astro copies everything in `public/` verbatim to `dist/`. Therefore:

```
public/.well-known/nostr.json  →  dist/.well-known/nostr.json
```

No configuration change in `astro.config.mjs` is needed. Astro handles this automatically.

#### 2. GitHub Pages CORS — No Custom Headers Needed

GitHub Pages automatically serves `Access-Control-Allow-Origin: *` for all public content. This is guaranteed and fixed — you cannot override it. This satisfies NIP-05 client requirements natively.

**There is nothing to configure for CORS.** Just placing the file in `public/.well-known/` is sufficient.

#### 3. Jekyll Dotfiles Issue — Handled by `.nojekyll`

GitHub Pages uses Jekyll by default, which ignores directories starting with `.` (like `.well-known/`). However, this project either:
- Deploys via a GitHub Actions workflow that creates a `.nojekyll` file automatically, OR
- Should have a `public/.nojekyll` file

**Action required:** Check if `public/.nojekyll` exists. If not, create it. This file tells GitHub Pages to skip Jekyll processing entirely.

```bash
ls public/.nojekyll  # Should exist
```

If it doesn't exist, create an empty file: `public/.nojekyll`

#### 4. NIP-05 Verification URL and Query Parameter

Nostr clients verify NIP-05 by fetching:
```
GET https://maxiim3.github.io/.well-known/nostr.json?name=me
```

Since the file is static JSON, GitHub Pages serves it regardless of the `?name=me` query parameter. The client then looks up `names.me` in the JSON response. This works correctly for static hosting.

**No server-side logic is needed.** Static file serving is sufficient.

#### 5. Public Key Format

The hex key in the JSON must be **lowercase hexadecimal** (not the `npub1...` bech32 format). The key in the epics spec is already in correct format:
```
15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900
```

#### 6. No Redirects Allowed

NIP-05 clients reject redirect chains (HTTP 301/302). The file must be served directly at the path. GitHub Pages does not redirect static files, so this is not an issue in practice.

### Project Structure Notes

**Alignment with unified project structure:**

```
public/
  .nojekyll               # Create if missing — prevents Jekyll from ignoring .well-known
  .well-known/
    nostr.json            # NIP-05 identity file (CREATE)
scripts/
  verify-nip05.sh         # Automated test script (CREATE)
```

**No changes to:**
- `src/` — this is a static asset, no Astro components needed
- `astro.config.mjs` — no changes required
- Any CSS files — no styling changes
- Any content files (`fr.ts`, `en.ts`) — no changes (Nostr link already in `links` array from Story 4.2)

### Architecture Compliance

| Rule | Compliance |
|------|------------|
| No new npm dependencies | ✅ Pure static file + bash script |
| All CSS in public/styles/ | N/A — no CSS changes |
| Flat component structure | N/A — no Astro components |
| Progressive enhancement | ✅ Static file — works without JS |
| No server-side code | ✅ Static file only |
| `bun run build` succeeds | Must verify after creating file |

### Technical Requirements

#### Files to CREATE

**`public/.well-known/nostr.json`** (NEW):

```json
{
  "names": {
    "me": "15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900"
  },
  "relays": {
    "15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900": [
      "wss://relay.damus.io",
      "wss://relay.primal.net",
      "wss://nos.lol",
      "wss://relay.nostr.band"
    ]
  }
}
```

**`public/.nojekyll`** (CREATE if missing — may already exist):

Empty file. Just create it. Prevents GitHub Pages Jekyll from ignoring `.well-known/`.

**`scripts/verify-nip05.sh`** (NEW — optional verification helper):

```bash
#!/usr/bin/env bash
# verify-nip05.sh — Verify NIP-05 endpoint is correctly configured
# Usage: ./scripts/verify-nip05.sh [optional-url]

URL="${1:-https://maxiim3.github.io/.well-known/nostr.json?name=me}"
EXPECTED_KEY="15a1989c2c483f6c6f18f2dda1033897a003669f449fc2fda4fa2fb6c9210900"

echo "Verifying NIP-05 endpoint: $URL"
echo "---"

# Fetch with headers
RESPONSE=$(curl -si "$URL" 2>/dev/null)
HTTP_STATUS=$(echo "$RESPONSE" | grep -m1 "^HTTP" | awk '{print $2}')
CORS_HEADER=$(echo "$RESPONSE" | grep -i "access-control-allow-origin" | head -1)
BODY=$(echo "$RESPONSE" | tail -1)

# Check 1: HTTP 200
if [ "$HTTP_STATUS" = "200" ]; then
  echo "✅ HTTP 200 OK"
else
  echo "❌ HTTP status: $HTTP_STATUS (expected 200)"
fi

# Check 2: CORS header present
if echo "$CORS_HEADER" | grep -q "\*"; then
  echo "✅ CORS: Access-Control-Allow-Origin: *"
else
  echo "❌ CORS header missing or incorrect: $CORS_HEADER"
fi

# Check 3: Hex key present in response
if echo "$BODY" | grep -q "$EXPECTED_KEY"; then
  echo "✅ Hex key present in response"
else
  echo "❌ Hex key not found in response body"
fi

echo "---"
echo "Done."
```

#### Files to CHECK (no changes expected)

- `public/.nojekyll` — must exist, create if missing
- `public/styles/base.css` — no changes
- `src/components/LinksList.astro` — no changes (links already implemented in Story 4.2)

### Library & Framework Requirements

**NO new dependencies.** This story requires only:
- A static JSON file placed in `public/.well-known/`
- A bash script for manual verification (no npm packages)

### Testing Requirements

**Local build verification:**
1. `bun run build` — must succeed with zero TypeScript errors
2. Inspect `dist/.well-known/nostr.json` — file must exist with correct content
3. `bun run preview` — manually fetch `http://localhost:4321/.well-known/nostr.json` — must return 200 + JSON

**Post-deploy verification (run after deploying to GitHub Pages):**
1. `./scripts/verify-nip05.sh` — all 3 checks must PASS
2. Nostr client: set NIP-05 → `me@maxiim3.github.io` → verify badge appears
3. Check on Primal.net, Habla, Nosta

**Astro build output check:**
```bash
bun run build
ls dist/.well-known/nostr.json  # Must exist
cat dist/.well-known/nostr.json  # Must match exact JSON from AC #1
```

### Previous Story Intelligence

**From Story 4.2 (completed 2026-02-18):**
- CSS at `public/styles/` (confirmed — NOT `src/styles/`)
- Build command: `bun run build`
- Commit pattern: `"4.2"` — use `"4.3"` for this story
- Project root is `/Users/maxi/www/github-page` (not `/app`) — confirmed by `astro.config.mjs` location
- Focus/accessibility patterns already in `public/styles/base.css`

**From Story 4.1 (CV Download):**
- `public/` directory is used for static assets (PDFs, fonts)
- GitHub Actions deploy workflow already handles static file deployment

**From Story 1.2 (Content Type System):**
- Links data structure confirmed: `{ label, url, icon? }` in `fr.ts` / `en.ts`
- A Nostr profile link could optionally be added to the `links` array in content files, but this is optional scope — not required for NIP-05 verification itself

### Git Intelligence

**Recent commits:**
- `919e903` — `4.2` — LinksList SR enhancements, touch targets
- `33d172b` — `4.1` — CvDownload component, PDFs
- `6e832a1` — `2.2 and add epic nostr` — Nostr epic was added here (NIP-05 was planned early)
- `eb9242d` — `3.2, 3.3, add 6, story 4.1`

**Pattern to follow:**
- Commit message: `"4.3"`
- Minimal changes — this is a configuration/file placement story

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 4.3: NIP-05 Self-Hosted Nostr Identity]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 4: Downloads & Professional Contact]
- [Source: _bmad-output/planning-artifacts/architecture.md#Project Structure & Boundaries]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure & Deployment]
- [Source: _bmad-output/implementation-artifacts/4-2-professional-links-contact.md — Previous story intelligence]
- [Source: astro.config.mjs — Site URL confirmed: https://maxiim3.github.io]
- [Source: NIP-05 spec: https://github.com/nostr-protocol/nips/blob/master/05.md]
- [Source: GitHub Pages CORS — automatic `Access-Control-Allow-Origin: *` on all public files]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- Fixed verify-nip05.sh body parsing: `tail -1` only captured last line of multiline JSON. Changed to `sed '1,/^\r$/d'` to extract full body after HTTP headers.
- Code review (2026-02-19): Fixed script exit code (always exited 0 on failure), added `FAILED` tracking + `exit $FAILED`. Added `-m 10` curl timeout. Added empty body warning and explicit curl failure handling with `exit 1`.

### Completion Notes List

- Created `public/.well-known/nostr.json` with exact NIP-05 JSON content (hex key, 4 relays)
- Created `public/.nojekyll` (was missing) to prevent Jekyll from ignoring `.well-known/` directory
- Created `scripts/verify-nip05.sh` with 3 automated checks: HTTP 200, CORS header, hex key presence
- Verified `bun run build` copies nostr.json to `dist/.well-known/nostr.json` correctly
- Verified local preview serves the file at `http://localhost:4321/.well-known/nostr.json` with HTTP 200
- CORS header verification works but only passes on GitHub Pages (local server doesn't add CORS headers — expected)
- Tasks 3 and 4 are post-deploy manual tasks (Nostr profile update and client verification) — cannot be completed until deployed

### File List

- `public/.well-known/nostr.json` (NEW) — NIP-05 identity file
- `public/.nojekyll` (NEW) — Prevents Jekyll from ignoring dotfile directories
- `scripts/verify-nip05.sh` (NEW) — Automated NIP-05 endpoint verification script

### Change Log

- 2026-02-19: Implemented Tasks 1-2 (file creation + verification script). Tasks 3-4 are post-deploy manual tasks.
