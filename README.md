# Using Google Apps Script as Backend

This is a template for using GAS as backend serving JSON as describe in [1].

## Requirements

- [pnpm](https://pnpm.js.org/)

## Getting Started

- Installation
  Install required packages

```sh
cd backend-gas-template
pnpm install
```

- Building
  For production use `build:prod`

```sh
pnpm build
```

- Deployment

  1. Create apps script project using UI [2] or `clasp`[3]. clasp tool is already installed. It can be launched by `pnpx clasp`.
  2. Insert script ID of your apps script project in `clasp.json`.

     ```json
     { "scriptId": "<your script ID here>" }
     ```

  3. Push to apps script project

     ```sh
     pnpm run sync
     ```

  4. Deploy as webapps using UI [3] or clasp [4].

## Notes

- To use GET and POST JSON across domains from a client browser. The script is need to deploy as webapps with permissions "**anyone,even anonymous**".

## References

- [1]: [Serving JSON from scripts](https://developers.google.com/apps-script/guides/content#serving_json_from_scripts)
- [2]: [Overview of Google Apps Script](https://developers.google.com/apps-script/overview)
- [3]: [Web Apps](https://developers.google.com/apps-script/guides/web)
- [4]: [Command Line Interface using clasp](https://developers.google.com/apps-script/guides/clasp)

## Keywords

Google Apps Script, GAS, Typescript, webpack, JSON, backend
