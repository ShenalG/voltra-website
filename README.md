# Voltra — Appliance Energy Australia

A small three-page website for the COS30045 Data Visualization lab. It presents
placeholder content about household appliance energy consumption in the Australian
market, with a focus page on televisions, plus an interactive energy-cost calculator.

## Pages

- **Home** — intro and headline stats, with a link through to the Televisions page.
- **Televisions** — how to read the Energy Rating label, a placeholder running-cost table, and an
  interactive calculator for estimating a TV's running cost.
- **About Us** — what the project is, the data source, and the GenAI acknowledgement.

## How it works

- Navigation swaps between the three pages **using JavaScript** (`js/script.js`) via the URL
  hash (`#home`, `#televisions`, `#about`) — no full page reload.
- The **power logo** (top left) always returns to Home.
- The nav gives **mouse-over feedback** (hover styling) and **current-page feedback**
  (the active link is highlighted, plus a "You are viewing…" strip).
- The **TV running-cost calculator** on the Televisions page (also in `js/script.js`) works out
  daily/annual kWh and yearly cost from a chosen wattage, viewing hours per day, and electricity rate.
- Styling is in `css/style.css`, using colours pulled from the logo
  (cream `#F0E090`, olive-brown `#806030`, orange `#F0A020`).
- The footer shows the current year (set with JavaScript), the author's name, and the
  GenAI acknowledgement.

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── logo.png
└── README.md
```

## Running locally

Just open `index.html` in a browser. (For the JS routing to behave exactly like it will
online, serving it with any static server also works, e.g. `python3 -m http.server`.)

## Deployment

To be deployed to **Vercel** from a public GitHub repository in a later week:
import the repo in Vercel → **Deploy** → a live link is generated.

---

## Use of Generative AI

> The lab expects GitHub Copilot; this project used a GenAI assistant (Claude) instead.
> Notes and reflection are recorded below as required. **Edit this section so it reflects
> your own actual usage.**

### What GenAI was used for
- Scaffolding the HTML structure for the three pages.
- Writing the CSS, with a palette derived from the supplied power logo.
- Writing the JavaScript that swaps pages via the URL hash and updates the active nav state.
- Building the interactive TV running-cost calculator.
- Drafting the placeholder copy about Australian appliance energy consumption.

### How it was used
- I described the lab requirements and the logo colours, and asked for a first version.
- I reviewed the generated code, checked I understood each part, and adjusted
  wording/values to suit the assignment.

### Reflection (edit in your own words)
Using GenAI sped up the boilerplate — layout, base styles, and event wiring — which let me
spend more time on the content and on understanding *why* the code is structured the way it
is (for example, using the hash so the back/forward buttons work). The main thing to watch
is not accepting code blindly: I went through the navigation logic and the CSS states so I
can explain and change them in a demonstration. Some placeholder figures are illustrative and
still need to be replaced with the real dataset.

---

*Author: Shenal Gardiwasam · COS30045 Data Visualization*
