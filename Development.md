# Development Documentation

1. This application uses vite and react along with Typescript. `npm create vite@latest` command is used to generate the project files.
2. This project uses [tailwind css](https://tailwindcss.com/docs/guides/vite) as css framework.
3. For deploying on gh-pages

```
npm install gh-pages --save-dev
```

package.json
```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```

vite.config.ts
```
base: "/YOUR_REPOSITORY_NAME",

This step is not working so manually exclusing the base path in html file
```

```
npm run deploy
```