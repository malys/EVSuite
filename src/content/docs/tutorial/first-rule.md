---
title: Create your first rule
description: Build and test a small EVTasker rule without changing a safety system.
---

Start with a local, reversible action such as a notification. This proves the rule engine
and timing without writing a vehicle setting.

1. Open EVTasker while parked and create a rule.
2. Give it a specific name, such as **Notify when charging starts**.
3. Choose the charging-state condition available for your firmware.
4. Add a notification action with a short message.
5. Save the rule, then leave it disabled.
6. Use the editor's test path if available, or reproduce the condition while parked.
7. Inspect execution history and diagnostics.
8. Enable the rule only after the result is correct.

For a vehicle-writing rule, verify the refusal cases too: speed above zero, unknown speed,
and an unavailable property must not silently apply the action.
