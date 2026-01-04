# ACM Gallery 🖼️

## Getting Started

1. Clone and enter the repo:
```bash
git clone https://github.com/acmcsufoss/gallery.git
cd gallery
```

2. Install dependencies with Bun:
> If you don't have Bun, install it here -> [bun.com/docs/installation](https://bun.com/docs/installation)
```bash
bun install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Start the dev server
```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app (make sure this works before
submitting changes!):
```bash
bun run build
```

You can preview the production build with `bun run preview`.
