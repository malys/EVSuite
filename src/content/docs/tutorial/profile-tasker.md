---
title: Connect EVProfile and EVTasker
description: Apply EVProfile profiles from Tasker and configure steering-wheel shortcuts without conflicts.
---

EVTasker works without EVProfile. Installing EVProfile adds one integration: Tasker can
apply a driving profile saved in EVProfile. The two apps must be signed with the same trusted
platform key for their protected bridge to connect.

## Apply an EVProfile profile from Tasker

1. In EVProfile, create and test the profile while parked.
2. Disable EVProfile's automatic default-profile application and any overlapping profile
   automation. One event should have one owner.
3. Open EVTasker and check **Diagnostic → Execution context → EVProfile**. It must show
   that EVProfile is installed and reachable.
4. Create or edit a rule, open its case, and choose **Add an action → Profile → Apply a
   profile**.
5. Select the EVProfile profile, save the case, then save the rule.
6. Leave the rule disabled and use **Test now** while parked.
7. Check History for the selected case and action result, then enable the rule.

The profile action is hidden when EVProfile is absent and is not deferred to a later
standstill because it needs the live EVProfile connection from the current execution cycle.
Both apps independently enforce the standstill gate.

## Assign steering-wheel shortcuts in EVProfile

1. Open **Shortcuts** in EVProfile.
2. Enable steering-wheel shortcuts.
3. Choose the **left** or **right star** button.
4. Assign separate actions to **single**, **long**, or **double** press as needed.
5. For a profile action, choose the saved profile. You can also open EVProfile, launch another
   app, show the profile picker, or select a supported direct action.
6. Test each press while parked and confirm the visible result.

:::caution[Avoid button conflicts]
The official launcher can take priority when it already assigns the same star-button press,
for example to the 360° camera. Disable the conflicting official-launcher shortcut first.
Do not assign the same press to both an EVProfile shortcut and a Tasker physical-button rule.
:::

Use EVProfile shortcuts for a direct manual gesture. Use Tasker when the button press must also
check conditions, choose between cases, or run a sequence of actions.
