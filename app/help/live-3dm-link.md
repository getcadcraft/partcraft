---
title: Keep a .3dm model live
summary: Change a model in the program that made it and watch PartCraft's body follow, from Rhino 8 or a Grasshopper definition, with your features rebuilt on the new shape.
section: tasks
order: 90
keywords: rhino, grasshopper, live link, live connection, 3dm, nurbs, parametric, link, sync, script, push, imported body
---

Keep shaping the model where you model it, and machine, check and document it here. Each change in the other program replaces one imported body in PartCraft, and the features after it rebuild on the new shape.

:::note
The link needs **CadCraft Studio** on the same computer. A browser tab can't take the connection. Nothing goes over the internet: the script talks to Studio at this computer's own address, with a token.
:::

:::warning
This link has been tested with the script's file writer and a stand-in for the other program, not yet inside Rhino or Grasshopper themselves. If something fails there, tell us what it said.
:::

## Set it up

1. In Studio, open PartCraft. In {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}, tick **Let AI assistants and scripts use PartCraft**, then **Edit**.
2. In Studio, choose {{ui:Connect an assistant}}. It shows the address and the token you will paste below.
3. Download the script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## From Rhino

1. Run `cadcraft_link.py` in Rhino's script editor (Python 3 in Rhino 8).
2. The first time, paste the address and the token. They are kept in `.cadcraft-link.json` in your home folder, never in the model. Studio makes a new token each time it starts, so the script asks again then.

Run the script again to stop.

## From Grasshopper

Run the script once in Rhino first, so the address and token are saved.

1. Add a Script component (Python 3) and paste the whole of `cadcraft_link.py` into it.
2. Give it these inputs: `G` (the geometry, with list access), `N` (a name, optional), `On` (a boolean toggle), and `Target` (optional: `model` or `part`, if both apps are open).
3. Turn `On` to true.

Every solve sends `G` over and replaces what the component sent last time.

## How it works here

- **One body.** Everything visible in the model becomes one imported feature, as when you [open a .3dm file](topic:open-3dm-files).
- **It has to close.** PartCraft fills small holes and flat openings, and the other program is told how many. If the model still doesn't close, PartCraft keeps the body it had and the status bar says so. The next change that closes updates it.
- **Finish what you are doing.** In a sketch or a drawing, updates are refused and tried again; they arrive once you are back in the model.
- **Undo.** Updates within two seconds of each other share one undo step.
- **Save.** The part file keeps the link. Run the script again after you reopen it, and the same feature updates.

**One way only.** Changes here don't go back to the other program.

## If something goes wrong

- **"No ModelCraft or PartCraft window allows it":** do step 1 of the setup.
- **"Studio refused the token":** Studio has restarted. Copy the new token and run the script again. For Grasshopper, run it in Rhino first.
- **"Cannot reach CadCraft Studio":** Studio isn't running, or the address has changed.
