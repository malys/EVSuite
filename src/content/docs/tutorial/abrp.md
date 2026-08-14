---
title: Connect ABRP
description: Connect EVABRPUploader to your own A Better Routeplanner vehicle.
---

Use this guide after installing EVABRPUploader. You need an ABRP account and an MG4
vehicle configured in A Better Routeplanner.

1. Create or select your MG4 in A Better Routeplanner.
2. In ABRP, open **Settings → Connections → Generic (Manual Entry)** and copy the user token
   for that vehicle.
3. Install and open EVABRPUploader while parked.
4. In the **ABRP** tab, keep the supplied open-source **ABRP API Key**, or replace it with
   your own ABRP API key if you have one.
5. Paste the vehicle's **ABRP User Token** in the separate token field. The API key identifies
   the integration; the user token identifies your ABRP vehicle.
6. Tap **Save**, then **Test Connection**. Resolve any error before enabling uploads.
7. Open **Upload Service**, enable background uploading, and optionally enable automatic
   start with the car.
8. Check the **Log** tab for readable vehicle properties and successful
   uploads.
9. Confirm in ABRP that live data belongs to the expected vehicle.

The app omits signals it cannot read. Missing state of charge or range can indicate a
firmware-specific property difference; it should not be interpreted as a zero value.

Disable the service to stop telemetry. Treat the token as a secret: do not include it in
screenshots, issue reports, or diagnostic files.

## Read upload errors

Each **Recent uploads** line contains a result, time, response code, and short reason.

| Log value | Meaning | What to do |
| --- | --- | --- |
| `OK … 200 OK` | ABRP accepted the upload | No action needed |
| `ERR … 401 HTTP 401` | ABRP rejected authentication | Re-enter both the API key and user token, save, then test again |
| `ERR … 4xx` | ABRP rejected the request | Check the credentials and configuration; keep the exact code for a support report |
| `ERR … 5xx` | ABRP or an upstream service failed | Wait and retry; report it if several consecutive uploads fail |
| `ERR … --- No internet` | No HTTP response was received | Check the head unit's connection; the service will retry |
| `ERR … --- <error>` | The request failed before receiving HTTP | Note the error name, check connectivity, and retry |

One isolated failure can be a tunnel or a temporary dead spot. The service enters its error
state after three consecutive failed uploads. When asking for help, share timestamps and
codes, but redact the API key and user token.
