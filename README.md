# Fernando-Velasco-Speaking-WebsIte

A multi-page website for **Fernando Velasco**, a professional speaker and nine-year NFL veteran. The site presents his keynote, the M.A.S.K. framework he teaches, his community impact, and an easy way for event planners to book him.

The core message of the site: **high performance shouldn't require hiding.**

## About the project

Fernando speaks to corporate teams, athletes, universities and youth programs. His team needed a site that:

- quickly explains who he is, the problem he solves, and how (the M.A.S.K. framework),
- builds credibility with logos, testimonials and video,
- keeps the homepage simple, with deeper content on its own pages,
- gives organizers a clear path to book him.

## My role

I'm **Chloe Barnes**, the sole developer on this project. I handled:

- **Planning:** turning the client's copy and feedback into a page structure and navigation
- **Design:** the visual style, layout, typography, color and photo treatments
- **Development:** all HTML, CSS and JavaScript, written by hand with no framework
- **Media:** compressing photos and video for the web and embedding the speaking reel and TEDx talk
- **Revisions:** updating the site as the client's direction changed between copy revisions

## Features

- Six pages: Home, About, M.A.S.K., Speaking, Impact and Book
- Responsive layout that works on desktop, tablet and phone
- Full-width hero photo with a dark fade for readable text
- Auto-scrolling logo strip of organizations Fernando has worked with
- Auto-scrolling photo strip that pauses on hover
- Embedded YouTube and Vimeo videos, so visitors never leave the site
- Muted autoplay hero video on the Impact page, with a "Watch with sound" button that opens a larger player
- Scroll-triggered fade-in animations
- Booking page with a multi-step inquiry form
- Shared navigation and footer, including a newsletter signup, built once in `script.js` so every page stays consistent
- Accessibility basics: descriptive alt text, keyboard-friendly controls, and reduced-motion support

## Tech stack

- **HTML5** and **CSS3** (custom properties, Grid, Flexbox, media queries, `clip-path`)
- **Vanilla JavaScript** (no libraries): menu, scroll effects, video popups, shared layout
- **Google Fonts:** Montserrat and Inter
- **Vimeo and YouTube** embeds
- **Git and GitHub** for version control; **VS Code** with Live Server for development

## Pages

| Page | Purpose |
|---|---|
| `home.html` | The seven essentials: who he is, the problem, the solution, credibility, video, testimonials and booking |
| `about.html` | Fernando's story, credentials and photos |
| `mask.html` | The M.A.S.K. framework: Meet Your Truth, Ask for Help, Systems Save Lives, Know Your Identity |
| `speaking.html` | Flagship keynote, formats, audiences and the speaking reel |
| `impact.html` | Youth mentorship, the Life Ready Retreat and Academy, the Velasco Family Foundation, and testimonials |
| `book.html` | Speaking inquiry form |

## Project structure

```
.
├── home.html
├── about.html
├── mask.html
├── speaking.html
├── impact.html
├── book.html
├── styles.css      shared styles
├── script.js       menu, animations, popups, shared nav + footer
└── assets/
    ├── images/
    ├── logos/
    └── videos/
```


## How I built it

1. Started from the client's copy and wireframed the page order and navigation.
2. Built shared styles first (colors, type scale, buttons, cards), then each page.
3. Reviewed other professional speaker sites for structure and layout ideas, then made my own design choices.
4. Compressed all photos and video, and wrote descriptive alt text.
5. Tested layouts at different screen sizes and fixed problems as I found them (image crops, spacing, alignment).
6. Moved the navigation and footer into one place in `script.js` so changes only have to be made once.
7. Kept the work in small, focused Git commits.


## Content and rights

All photos, logos, video, testimonials and copy belong to Fernando Velasco and the respective photographers and organizations. They are included here only for this site and are **not licensed for reuse**.
