---
title: Connect MG4 Control and MG4 Tasker
description: Apply Control profiles from Tasker and configure steering-wheel shortcuts without conflicts.
---

MG4 Tasker works without MG4 Control. Installing Control adds one integration: Tasker can
apply a driving profile saved in Control. The two apps must be signed with the same trusted
platform key for their protected bridge to connect.

## Apply a Control profile from Tasker

1. In MG4 Control, create and test the profile while parked.
2. Disable Control's automatic default-profile application and any overlapping profile
   automation. One event should have one owner.
3. Open MG4 Tasker and check **Diagnostic → Execution context → MG4Control**. It must show
   that Control is installed and reachable.
4. Create or edit a rule, open its case, and choose **Add an action → Profile → Apply a
   profile**.
5. Select the Control profile, save the case, then save the rule.
6. Leave the rule disabled and use **Test now** while parked.
7. Check History for the selected case and action result, then enable the rule.

The profile action is hidden when Control is absent and is not deferred to a later
standstill because it needs the live Control connection from the current execution cycle.
Both apps independently enforce the standstill gate.

## Assign steering-wheel shortcuts in Control

1. Open **Shortcuts** in MG4 Control.
2. Enable steering-wheel shortcuts.
3. Choose the **left** or **right star** button.
4. Assign separate actions to **single**, **long**, or **double** press as needed.
5. For a profile action, choose the saved profile. You can also open Control, launch another
   app, show the profile picker, or select a supported direct action.
6. Test each press while parked and confirm the visible result.

:::caution[Avoid button conflicts]
The official launcher can take priority when it already assigns the same star-button press,
for example to the 360° camera. Disable the conflicting official-launcher shortcut first.
Do not assign the same press to both a Control shortcut and a Tasker physical-button rule.
:::

Use Control shortcuts for a direct manual gesture. Use Tasker when the button press must also
check conditions, choose between cases, or run a sequence of actions.
