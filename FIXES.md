# Case Study: 9 Bugs, 9 Targeted Fixes

How each bug on `broken-baseline` was traced and fixed on `fixes`.

> Status: scaffold. Each section is filled in as the corresponding fix lands on the `fixes` branch.

---

### Bug #1 — Client form sends camelCase, API expects snake_case
**Layer:** Frontend ↔ API
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #2 — Orders filter sends `orderStatus`, API reads `status`
**Layer:** Frontend ↔ API
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #3 — Orders list lazy-loads `client` per row (N+1)
**Layer:** Backend / DB
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #4 — Pagination offset is off by one page
**Layer:** Backend
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #5 — `DELETE /orders/{id}` missing the admin dependency
**Layer:** Auth
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #6 — Orders table has no loading or error states
**Layer:** Frontend
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #7 — Unhandled exceptions return a non-JSON 500
**Layer:** Backend
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #8 — KPI range uses naive `datetime.now()` against tz-aware columns
**Layer:** Backend
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

### Bug #9 — Expired token leaves the UI spinning
**Layer:** Frontend
**Symptom:** _pending_
**Root cause:** _pending_
**Fix:** _pending_
**Verified by:** _pending_

---

## Approach

- **Reproduce first.** No fix is written before the symptom is observed locally.
- **Trace the whole path:** request → endpoint → query → response → UI. The layer that
  *reports* the error is usually not the layer that *causes* it.
- **Fix the cause, not the symptom.** A swallowed 422 is a reporting problem; the wrong field
  name is the bug.
- **No rewrites.** The smallest change that makes the workflow reliable, plus a test that
  would have caught it.
