# Habib Sall — Personal Portfolio (Multi-Page)

Premium multi-discipline portfolio (Software Engineering × Multimedia Design ×
Modeling × Dance & Performance) built with plain HTML5, CSS3 and vanilla
JavaScript — no build step, no framework, ready for GitHub Pages.

## Pages

| File                | Content                                                     |
|---------------------|--------------------------------------------------------------|
| `index.html`        | Home — hero, "four dimensions" identity, about teaser, links to every chapter |
| `about.html`        | Background, education, mission, vision, philosophy           |
| `skills.html`       | Engineering / multimedia / soft-skills tabs + certifications |
| `projects.html`     | Flagship church website + software project grid              |
| `creative.html`     | Real design work gallery (Kagust branding, church campaign, SLCB) + lightbox |
| `modeling.html`     | Modeling & fashion portfolio — real photos + 2 runway/backstage videos |
| `dance.html`        | Dance & Performance — 3 real performance videos, skills, creative universe gallery |
| `experience.html`   | Career timeline + marketing/church/video work                 |
| `achievements.html` | Achievement cards + testimonials carousel                     |
| `contact.html`      | Contact form + real contact info + socials                    |

Every page shares the same header, footer, loader, command palette
(⌘/Ctrl+K), cursor glow and particle background.

## Real media now included

- **`modeling.html`** — 7 real photos in the gallery (studio, runway, editorial,
  campaign, behind-the-scenes, lifestyle, commercial) + 2 playable videos
  (runway walk, backstage moment).
- **`dance.html`** — 3 real performance videos (click to play, with real poster
  frames pulled from the footage) + a 7-photo "Creative Universe" gallery
  mixing modeling, dance, event and design shots.
- **`creative.html`** — 6 real design pieces: the Kagust Investment Company
  logo and marketing materials, the Ecclesiastes church campaign title
  graphic, and the SLCB Visa Card campaign design.
- **Favicon** — your `HS` brand mark (from the asset pack) is now the site icon
  on every page.
- **Social icons** — WhatsApp, GitHub, Facebook, TikTok, Instagram and LinkedIn
  (real brand colors, inline SVG, no external requests) are now in the footer
  of every page and in the Contact page's social row, all linking to your
  real profiles. WhatsApp opens a chat to +232 30 193191.
- **Flagship project live link** — "View Live Website" on `projects.html` now
  points to `https://achieversgospelchapel.org/`.

> **Note on the "PROJECTS" folder you sent:** its contents were fashion/pageant
> photography rather than software screenshots, so I placed a couple of those
> images into the Dance & Performance page's "Creative Universe" gallery
> instead of the Software Projects page. The flagship Achievers Gospel Chapel
> project and the other software builds are still using styled placeholders
> since no actual site screenshots were included — send those separately
> whenever you have them and I'll drop them into `projects.html`.

## Folder structure

```
portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── creative.html
├── modeling.html
├── dance.html
├── experience.html
├── achievements.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── data.js              <-- content: projects, achievements, stats, testimonials, experience
│   └── main.js                All interactivity incl. real video playback in lightboxes
├── data/
│   └── projects.json        Reference copy of the content structure (JSON)
└── assets/
    ├── images/
    │   ├── profile.jpeg       Hero + modeling portrait
    │   ├── logo.jpeg          Brand mark, used as favicon
    │   ├── modeling/          7 gallery photos + 2 video poster frames
    │   ├── creative/          6 real design pieces
    │   ├── dance/             3 video poster frames
    │   └── universe/          7 photos for the Dance page's combined gallery
    └── videos/
        ├── dance/              3 real performance clips (dance-01/02/03)
        └── modeling/           2 real runway/backstage clips

```

## Adding more photos or videos

**Images** — drop a file into the relevant `assets/images/...` subfolder, then
find the matching `<div class="mag-tile">` or `<div class="masonry-item">` in
the page's HTML and update its `src`/`data-img` path and label.

**Videos** — drop an `.mp4` into `assets/videos/...`, generate a poster frame
(or reuse a screenshot), then add/update a `.video-card` block:
```html
<div class="video-card"
     data-label="My new performance"
     data-src="assets/videos/dance/my-new-clip.mp4"
     data-poster="assets/images/dance/my-new-poster.jpg"
     style="background-image:linear-gradient(0deg,rgba(0,0,0,.55),rgba(0,0,0,.15)),url('assets/images/dance/my-new-poster.jpg');background-size:cover;background-position:center;">
  <span class="v-tag">Your Tag</span>
  <div class="play-btn"></div>
  <span class="v-label">Your Label</span>
</div>
```
Clicking any `.video-card` with a `data-src` now plays the real video in the
lightbox automatically — no extra JS needed.

## Connecting the contact form (Formspree)

The Contact page form is wired up to submit via [Formspree](https://formspree.io)
using JavaScript (`fetch`), so messages land in your email without a page
reload. You just need to plug in your own form ID:

1. Go to [formspree.io](https://formspree.io) and sign up for a free account
   (confirm your email — this is the address that will receive messages).
2. In the dashboard, click **+ New Form**, name it (e.g. "Portfolio Contact"),
   and set the recipient email to `habibsall772@gmail.com` (or whichever
   address you want messages sent to).
3. Formspree will show you an endpoint that looks like:
   `https://formspree.io/f/abcdwxyz`
4. Open `contact.html`, find this line near the bottom:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
   ```
   and replace `YOUR_FORM_ID` with your real form ID (just that part, keep
   the rest of the URL as-is).
5. Save, redeploy, and send yourself a test message from the live site —
   Formspree's free tier includes 50 submissions/month, and the very first
   submission may ask you to confirm you own the form before it delivers.

Until you swap in the real ID, the form will show a friendly message telling
the visitor it isn't connected yet — it won't fail silently or pretend to
send.

## Social share previews (Open Graph + Twitter Cards)

Every page now has proper `og:title`, `og:description`, `og:image`, and
matching `twitter:card` tags — so when someone pastes a link to your site
into WhatsApp, Facebook, iMessage, or X/Twitter, it shows a real title,
description, and photo instead of bare text.

**One thing to update:** the tags currently use a placeholder base URL:
```
https://habibsalltheprogrammer.github.io/portfolio
```
Once you know your actual deployed URL (GitHub Pages path or custom domain),
open each `.html` file and replace that base URL in the `og:url` and
`og:image` tags — or tell me the real URL and I'll do it in one pass.

## Resume PDF

`assets/resume/Habib_Sall_Resume.pdf` is a real, generated one-page resume
built from your CV content (summary, skills, both roles at Kagust and
SYLREG, education, certifications). The "Download Resume" button on the
home page and the ⌘/Ctrl+K command palette both link to it now.

If your CV changes, tell me what to update and I'll regenerate the PDF —
or open it in any PDF editor yourself.

## Video sizes

Your dance and runway videos were re-encoded and trimmed to punchy ~20-second
highlight clips (down from full 1-2 minute recordings), cutting total video
weight from ~42MB to ~13MB so the site loads much faster on mobile data.
If you'd rather host the full-length videos, upload them to YouTube
(unlisted is fine) and swap the `<video>`/lightbox markup in `dance.html`
and `modeling.html` for an `<iframe>` embed instead.

## Editing content

Open `js/data.js` and edit the `PORTFOLIO_DATA` object:
- `software` — array of software projects (title, summary, tech, features, codeUrl)
- `modelingAchievements` / `modelingStats`
- `experience` — professional timeline
- `testimonials`
- `certifications`

## Deploying on GitHub Pages

1. Push this folder's contents to the root of a GitHub repository (or a `/docs` folder).
2. In the repo Settings → Pages, set the source to that branch/folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

**Heads up on repo size:** the videos bring this folder to ~47MB. That's fine
for GitHub Pages, but if you want faster load times later, consider
compressing the MP4s (e.g. with HandBrake) or hosting them on YouTube/Vimeo
and swapping in an embed instead of a local file.

## Remaining placeholders

- Formspree form ID — contact form is wired up and won't fail silently, but needs your real ID (see "Connecting the contact form" above)
- Base URL in the Open Graph tags (see "Social share previews" above) — update once deployed
- 3 more video slots on `dance.html` (Event Highlight, Behind the Scenes, Team Routine) — add real footage whenever you have it
- Real testimonials on `achievements.html` — still placeholder quotes; I didn't want to invent fake quotes attributed to real people, so swap in actual feedback from a lecturer, supervisor, or judge whenever you have it
- Custom domain and analytics (e.g. Plausible/GoatCounter) — both need you to sign up/purchase directly, so I left them as suggestions rather than half-wiring them in
