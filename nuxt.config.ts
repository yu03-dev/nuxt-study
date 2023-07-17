// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    authDomain: process.env.NUXT_AUTH_DOMAIN,
    projectId: process.env.NUXT_PROJECT_ID,
    public: {
      apiKey:
        process.env.NODE_ENV !== "production"
          ? process.env.NUXT_API_KEY
          : undefined,
      authDomain:
        process.env.NODE_ENV !== "production"
          ? process.env.NUXT_AUTH_DOMAIN
          : undefined,
      projectId:
        process.env.NODE_ENV !== "production"
          ? process.env.NUXT_PROJECT_ID
          : undefined,
      storageBucket: process.env.NUXT_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_APP_ID,
      measurementId: process.env.NUXT_MEASUREMENT_ID,
    },
  },
});
