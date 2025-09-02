
# Rigby Site (Multipage + Calendars + Resources + Form)

## Publish on GitHub Pages
1) Create **Saint-Avery.github.io** (public).  
2) Upload all files/folders to the repo root.  
3) Settings → Pages → Deploy from a branch → `main` → `/root`.  
4) Visit `https://saint-avery.github.io/`.

## Google Calendars
- **Esports:** Edit `esports.html`, replace `CAL_ESPORTS_URL` in the iframe `src` with your embed link.  
- **Classes:** Edit `classes.html`, replace `CAL_CLASSES_URL` likewise.  
**How to get the link:** Google Calendar → Settings → *Your calendar* → Access permissions (make public or domain) → Integrate calendar → copy **Embed URL**.

Tip: Add `&ctz=America/Denver` to ensure Mountain Time.

## Resources Auto-List
- Edit `resources/resources.json` and add items like:
```json
[
  {"title":"ELA 10 Syllabus","url":"resources/ELA10-Syllabus.pdf","description":"Course overview + expectations"},
  {"title":"Esports Code of Conduct","url":"resources/Esports-Code.pdf","description":"Rules, attendance, and sportsmanship"}
]
```
- Upload files into the **resources/** folder.

## Contact Form (Formspree)
1) Create a form at Formspree and copy your endpoint ID (looks like `https://formspree.io/f/xxxxabcd`).  
2) In `contact.html`, replace `YOUR_FORMSPREE_ID` in the `action` URL.  
3) Optionally add `<input type="hidden" name="_cc" value="assistant_principal@school.org">`.

If you prefer **Netlify Forms**, deploy on Netlify and I'll switch the markup.

## Branding
- Colors live in `assets/css/style.css` under CSS variables (`--maroon`, `--gold`).  
- Replace `assets/img/logo.svg` with your own SVG/PNG (keep the same file name or update the `<img>` path in the header).
