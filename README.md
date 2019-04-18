# kompanion gatsby themes

These are all npm packages, feel free to `npm i` them and use in your Gatsby sites 😄

## Themes

- Koncrete - basis for everything; ✅
  - Typescript;
  - Sitemap;
  - React Helmet;
  - Netlify -> I'm not certain I'll keep this

## TODO

- Create `@kompanion/components`
  - PageMeta;
  - Header with interchangeable logo via `{children}`;
  - Footer;
  - PageTransitionWrapper;
  - Icons;
  - Simple Contact Form;
- Create `gatsby-theme-klassy`
  - Add option for postCSS or emotion
- Create `gatsby-theme-kommunication`
  - More on this later 😉
- Check if I can enforce `prettier` and `tslint` from a theme or if I had to add it in the starter
- Documentation
- Onboarding experience
  - Add a config wizard in the homepage
- Find a way to create custom GraphQL fragments for practical usage
- Re-create Konfigurator - the visual tool to create a plug-and-play theme to use with `gatsby-theme-klassy`
  - Allow for exporting `.ts` and `.js` objects;
  - Use SC's ThemeProvider;
  - Export TS types as well;
  - Allow for custom CSS;
  - Add and name custom colors to be referenced elsewhere;
  - Provide several layouts besides a blog post for further testing.
- Take a look at [StandardJS](https://standardjs.com) and investigate if it's a valid replacement for current tslint configuration.
  - At first sight, I'm not too keen on their rules, however...