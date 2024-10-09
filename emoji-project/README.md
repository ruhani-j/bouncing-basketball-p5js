# Emoji Project

This folder contains three p5.js sketches built progressively as part of the **Digital Media II first-term evaluation (2024)**. The final submission is `1.5.1 Project Create Your Own Emoji.js` — the two Basic files show the build-up to it.

---

## Basic 1 — [`basic-1.html`](basic-1.html)

The starting point. A static yellow emoji drawn entirely from p5.js primitives:

- Yellow circle for the face
- Two brown ellipses for eyes
- Smile built using two overlapping ellipses — a brown one on top of a yellow one offset upward, which creates the arc shape without needing to draw an actual arc

No animation, no variables updating in `draw()`. Just laying out the shapes and getting the geometry right.

---

## Basic 2 — [`basic-2.html`](basic-2.html)

Builds directly on Basic 1, adding **eyebrows** using the same overlapping ellipse technique:

- A brown ellipse placed above each eye
- A yellow ellipse offset downward on top of it, masking the bottom half so only the top arc of the brow shows

Still static — this was about extending the shape vocabulary before adding motion.

---

## Final Project — [`index.html`](index.html)

A normal emoji that slowly becomes creepier. The animation runs at 3 fps deliberately — the low frame rate makes each change feel more unsettling.

What animates each frame:

- **Eyes closing** — a yellow ellipse (the eyelid) moves upward and grows taller, progressively covering the brown eye underneath
- **Smile widening** — `width_smile` increments each frame until the mouth is stretched much wider than it started
- **Tongue** — appears once the smile is wide enough, an afterthought that makes it worse
- **Blush shifting colour** — starts yellow, transitions to blue as `green` decreases and `blue` increases each frame. The colour change is subtle at first, then off-putting

The eyebrows use the same overlapping ellipse masking technique from Basic 2. The nose is a small triangle added as a detail.
