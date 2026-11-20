# Hanyang Xing — Project Portfolio

A personal portfolio focused on robotics, perception, radar sensing and embedded computer vision.

**Website:** [harryxing213.github.io](https://harryxing213.github.io/)

## What is inside

- Selected projects with links to source code and recorded experiment results.
- Current work on measurement variance in ROS 2 / Gazebo and reinforcement learning on hardware.
- Technical skills, background, professional contact links and a printable project CV.
- English and Chinese content, with a responsive layout for desktop and mobile.

Built with HTML, CSS and JavaScript. No build step or third-party scripts are required. The background uses static CSS gradients, and the Inter font is hosted locally.

## Local preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`.

## Files

```text
index.html        Bilingual portfolio
style.css         Layout, typography, gradients and print styles
script.js         Language switch and footer year
resume.html       Printable project CV
assets/           Experiment figures, favicon and font files
.nojekyll         Serve the site as static files on GitHub Pages
```

Edit English and Chinese copy together in the `data-en` and `data-zh` attributes of `index.html`.

## Deployment

GitHub Pages publishes the `main` branch from the repository root. See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Typography and project content

The homepage uses [Inter](https://rsms.me/inter/) under the SIL Open Font License 1.1; the license is included in `assets/fonts/Inter-OFL.txt`. Chinese text uses system sans-serif fonts. The standalone printable CV uses Times New Roman.

Experiment figures belong to the linked projects. Current research is marked **In progress**; descriptions do not imply completed results or public repositories.
