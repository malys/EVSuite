---
title: Build advanced Tasker rules
description: Add conditions and actions, branch with IF / ELSE IF / ELSE, and validate them on the vehicle.
---

:::caution[Configure and test while parked]
Start with a local action such as a notification. Add vehicle-writing actions only after the
rule logic is proven, and keep the standstill threshold at 0 km/h.
:::

## Add a condition or action

1. On **Rules**, select **New rule**, or select an existing rule and choose **Edit**.
2. Give the rule a specific name and open its **IF** case.
3. Select **Add a condition**, choose a category and condition, then configure its operator
   and value. Use **All conditions** when every condition must match, or **Any condition**
   when one match is enough.
4. Select **Add an action**, choose a category and action, then configure its value.
5. Add actions in execution order. Use the arrows to reorder them and add **Wait** when a
   previous vehicle command needs time to settle.
6. Save the case, then save the rule. Leave it disabled until it passes a manual test.

The picker filters entries using the detected firmware. An unreadable condition makes the
rule not evaluable; it is never silently treated as false. Actions marked **When stopped
only** are refused while moving or when speed is unknown.

## Enable IF / ELSE IF / ELSE

1. Open **Configuration** and enable **Expert mode**.
2. Edit a rule. Keep the first case as **IF**.
3. Choose **Add an “else if”** for each alternative and order the cards from most specific
   to least specific.
4. Optionally choose **Add an “else”** for the fallback action.
5. Open each case card and add its own conditions and actions, then save and test.

Cases are checked in order and exactly one runs: the first matching IF or ELSE IF, otherwise
ELSE. Branches keep mutually exclusive choices in one rule, which is safer and easier to
maintain than several rules whose conditions must be kept in sync.

An unreadable value stops evaluation; it does not fall through to ELSE. A physical-button
rule must name a button in every case and cannot have an ELSE, because the button also
selects the event stream that triggers the rule.

## Validate capabilities on the car

1. Park, open MG4 Tasker, and select the **Diagnostic** tab.
2. Choose **Refresh**. If support data is stale, choose **Check support**.
3. Review **Execution context** first: vehicle layer, service, automation, notifications,
   standstill gate, MG4 Control bridge, speech engine, and Bluetooth.
4. Review **Conditions**. Each entry shows the current value or why it is unreadable.
5. Review **Actions**. Each entry shows whether its prerequisites pass on this firmware and
   vehicle right now.
6. Export the diagnostic when reporting a problem, then use **Test now** on the selected,
   disabled rule and inspect **History** for the actual result.

The diagnostic validates conditions and pre-write action checks against the real vehicle.
It deliberately does **not** perform vehicle writes. “Can run” means all checks before the
write passed; the manual test and History confirm whether the vehicle accepted it.

See [Supported Tasker conditions and actions](/MG4Suite/reference/tasker-catalogue/) for the
complete catalogue and firmware notes.
