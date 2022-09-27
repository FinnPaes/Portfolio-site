import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,

    nitro: {
        preset: "node-server"
    },

    runtimeConfig: {
        PASTEBIN_USERNAME: process.env.PASTEBIN_USERNAME,
        PASTEBIN_PASSWORD: process.env.PASTEBIN_PASSWORD,
        DISCORD_WEBHOOK: process.env.DISCORD_WEBHOOK
    },

    app: {
        head: {
            htmlAttrs: {
                lang: "nl"
              },
            link: [
                { rel: "stylesheet", href: "/css/app.css" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" },
                { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#6693c7" },
                { name: "apple-mobile-web-app-title", content: "Finn Paes Development" },
                { name: "application-name", content: "Finn Paes Development" },
                { name: "msapplication-TileColor", content: "#2b5797" },
                { name: "theme-color", content: "#ffffff" }
            ]
        }
    },

    modules: [
        "@nuxt/image-edge",
    ]
})
