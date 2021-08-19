## Purpose

Repo to test gatsby-plugin-loadable-components-ssr.

## Steps to Reproduce

- `git clone git@github.com:graysonhicks/loadable-test.git`
- cd `loadable-test`
- `npm install`
- `npm run start` (turn on DEV_SSR flag if not already enabled)
- Open site
- Edit the Layout component (possibly any component?) and save
- See in the terminal Gatsby picks up the change
- See in the browser, the browser does not reflect the change
- Check the browser console and see webpack errors
