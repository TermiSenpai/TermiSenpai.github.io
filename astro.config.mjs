import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://TermiSenpai.github.io/TermiSenpai.github.io/',
  base: '/TermiSenpai.github.io/'  // Asegura que todos los enlaces y rutas funcionen correctamente
});
