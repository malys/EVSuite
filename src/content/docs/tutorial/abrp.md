---
title: 3. Set up ABRP telemetry
description: Connect MG4 ABRP Uploader to your own A Better Routeplanner vehicle.
---

1. Create or select your MG4 in A Better Routeplanner.
2. In ABRP, obtain the live-data token for that vehicle.
3. Install and open MG4 ABRP Uploader while parked.
4. Enter the token and save the configuration.
5. Enable the service.
6. Check the status and diagnostic view for readable vehicle properties and successful
   uploads.
7. Confirm in ABRP that live data belongs to the expected vehicle.

The app omits signals it cannot read. Missing state of charge or range can indicate a
firmware-specific property difference; it should not be interpreted as a zero value.

Disable the service to stop telemetry. Treat the token as a secret: do not include it in
screenshots, issue reports, or diagnostic files.
