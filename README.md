# Voltra | Appliance Energy Australia

A three-page website for the COS30045 Data Visualization lab. It explores the energy
use of televisions in the Australian market, using a real dataset of **4,573 registered
TVs** that was cleaned and processed in a **KNIME** workflow. The findings are presented
as charts with plain-language answers, plus an interactive running-cost calculator.

**Live site:** https://voltra-energy-au.vercel.app/

## Pages

- **Home** - introduces the project, shows headline figures from the dataset (4,573 TVs, 83% LCD
  (LED), 65" most common), and links through to the Televisions page.
- **Televisions** - how to read the Energy Rating label, a **data-exploration section** answering
  six questions (plus a bonus) with charts built from the TV dataset, a short "big picture" summary,
  and an interactive calculator for estimating a TV's running cost.
- **About Us** - what the project is, the data source, and the Generative AI acknowledgement.

## How it works

- Navigation swaps between the three pages **using JavaScript** (`js/script.js`) via the URL
  hash (`#home`, `#televisions`, `#about`), no full page reload.
- The **power logo** (top left) always returns to Home.
- The nav gives **mouse-over feedback** (hover styling) and **current-page feedback**
  (the active link is highlighted, plus a "You are viewing…" strip).
- The **data-exploration charts** are shown as images in uniform, fixed-ratio frames so they line up
  consistently and stay readable; each chart can be tapped to open full size.
- The **TV running-cost calculator** (also in `js/script.js`) works out daily/annual kWh and yearly
  cost from a chosen wattage, viewing hours per day, and electricity rate.
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
│   ├── logo.png
│   └── q1.png … q7.png   (the seven data-exploration charts)
└── README.md
```

## Running locally

Just open `index.html` in a browser. (For the JS routing to behave exactly like it does
online, serving it with any static server also works, e.g. `python3 -m http.server`.)

## Deployment

Deployed to **Vercel** from a public GitHub repository. Vercel is linked to the repo, so
every push to the `main` branch automatically triggers a new deployment, no manual steps.

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
- Drafting the site copy (headings, explanations and the plain-language answers).

**Not AI-generated:** the dataset, the KNIME analysis, and the charts are my own work. The
chart answers are based on the results I produced in KNIME.

### How it was used
- I described the lab requirements and the logo colours, and asked for a first version.
- I reviewed the generated code, checked I understood each part, and adjusted wording, values
  and layout to suit the assignment.
- I added my own KNIME charts and dataset figures, and had the copy updated to match them.

### Reflection (edit in your own words)
Using GenAI sped up the boilerplate, layout, base styles, and event wiring, which let me
spend more time on the data analysis and on understanding *why* the code is structured the way
it is (for example, using the URL hash so the back/forward buttons work). The main thing to
watch is not accepting code blindly: I went through the navigation logic, the CSS states and the
calculator maths so I can explain and change them in a demonstration. I also made sure the site's
figures matched my own KNIME results rather than any placeholder numbers.

---

*Author: Shenal Gardiwasam · COS30045 Data Visualization*