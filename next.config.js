// next.config.js
module.exports = {
  publicRuntimeConfig: {
    app: {
      env: process.APP_ENV || "production",
    },
    docDenoLandUrls: {
      dmm: "https://doc.deno.land/https/deno.land/x/dmm/mod.ts",
      drash: "https://doc.deno.land/https/deno.land/x/drash/mod.ts",
      line: "https://doc.deno.land/https/deno.land/x/line/mod.ts",
      sinco: "https://doc.deno.land/https/deno.land/x/sinco/mod.ts",
      wocket: "https://doc.deno.land/https/deno.land/x/wocket/mod.ts",
    },
    versions: {
      drash: {
        versions: [
          "v1.x",
          "v2.x",
        ],
      },
      sinco: {
        versions: [
          "v1.x",
          "v2.x"
        ]
      },
      wocket: {
        versions: [
          "v0.x",
        ],
      },
    },
  },
  reactStrictMode: false,
  async redirects() {
    return [
      // Redirect pages without content to the nearest page with content
      {
        source: "/drash/v2.x/getting-started",
        destination: "/drash/v2.x/getting-started/introduction",
        permanent: false,
      },
      {
        source: "/drash/v2.x/tutorials",
        destination: "/drash/v2.x/tutorials/introduction/add-drash-as-a-dependency",
        permanent: false,
      },
      {
        source: "/drash/v2.x/tutorials/resources",
        destination: "/drash/v2.x/tutorials/resources/creating-a-resource",
        permanent: false,
      },
      {
        source: "/drash/v2.x/tutorials/requests",
        destination: "/drash/v2.x/tutorials/requests/handling-json-bodies",
        permanent: false,
      },
      {
        source: "/drash/v2.x/tutorials/responses",
        destination: "/drash/v2.x/tutorials/responses/setting-the-body",
        permanent: false,
      },
      {
        source: "/drash/v2.x/tutorials/services",
        destination: "/drash/v2.x/tutorials/services/introduction",
        permanent: false,
      },
      // Remove the below /drash/v1.x object when its migrated
      {
        source: "/drash/v1.x",
        destination: "/drash/v1.x/index.html",
        permanent: false,
      },
      // Remove the below /wocket object when the its migrated
      {
        source: "/wocket",
        destination: "/wocket/v0.x/index.html",
        permanent: false,
      },
      {
        source: "/wocket/v0.x",
        destination: "/wocket/v0.x/index.html",
        permanent: false,
      },
      // Remove the below /dmm object when the its migrated
      {
        source: "/dmm",
        destination: "/dmm/v1.x/index.html",
        permanent: false,
      },
      {
        source: "/dmm/v1.x",
        destination: "/dmm/v1.x/index.html",
        permanent: false,
      },
      // Remove the below /rhum object when the its migrated
      {
        source: "/rhum",
        destination: "/rhum/v1.x/index.html",
        permanent: false,
      },
      {
        source: "/rhum/v1.x",
        destination: "/rhum/v1.x/index.html",
        permanent: false,
      },
      // Remove the below /line object when the its migrated
      {
        source: "/line",
        destination: "/line/v0.x/index.html",
        permanent: false,
      },
      {
        source: "/line/v0.x",
        destination: "/line/v0.x/index.html",
        permanent: false,
      },
      // Remove the below /sinco object when the its migrated
      {
        source: "/sinco/v1.x",
        destination: "/sinco/v1.x/index.html",
        permanent: false,
      },
    ];
  },
};