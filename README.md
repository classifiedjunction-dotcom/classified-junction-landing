# Classified Junction landing page

Public site for [Classified Junction](https://classifiedjunction.com), the classifieds marketplace built by DigiBillMate.

This repository is only the landing page. It does not contain the marketplace application, and deploying it must not touch the `classified-junction` Worker.

```bash
npm install
npm run deploy
```

`npm run deploy` publishes the `site` folder to the Cloudflare Pages project `classified-junction-landing`.
