# 🏰 Cardboard Castle Club

A Hugo-powered static website for a children's drama club. Deploys automatically to GitHub Pages.

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero with floating craft icons, castle silhouette, highlights, testimonials |
| About | `/about/` | Club history timeline, values, origin story |
| Our Show | `/show/` | Current production details, ticket reservation form |
| The Crew | `/crew/` | Directors, cast, and builders |
| Donate | `/donate/` | Impact tiers, donation form, donor wall |

## Local Development

```bash
hugo server
```

Site at `http://localhost:1313/`.

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Update `baseURL` in `hugo.toml` to match your GitHub Pages URL
3. Push to `main`
4. Go to **Settings → Pages → Source** → select **GitHub Actions**
5. The included workflow handles everything automatically

## Customization

- **Crew members**: Edit `data/crew.json`
- **Show dates**: Edit the `<select>` options in `layouts/page/show.html`
- **Colors/gradients**: Edit CSS variables at the top of `static/css/style.css`
- **Contact info**: Edit `[params]` in `hugo.toml`
- **Navigation**: Edit `[menu]` in `hugo.toml`
