import type { NextConfig } from "next";

// El proyecto se publica como repo de proyecto en GitHub Pages
// (https://<usuario>.github.io/by-manoel/), así que en ese entorno
// necesita un basePath con el nombre del repo. GitHub Actions define
// automáticamente la variable de entorno GITHUB_ACTIONS=true, así que
// el basePath solo se activa ahí — tu build local (para subir a un
// hosting tradicional) sigue sirviendo desde la raíz, sin cambios.
//
// Si más adelante conectas un dominio propio (ej. bymanoel.cl) a este
// repo de GitHub Pages, quita el basePath/assetPrefix de abajo: un
// dominio propio sirve el sitio desde la raíz, igual que un hosting
// tradicional.
const repoName = "by-manoel";
const isGithubActionsBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Exporta el sitio como HTML/CSS/JS estático puro (carpeta `out/`),
  // para poder subirlo a cualquier hosting estático (GitHub Pages,
  // cPanel, Hostinger, etc.).
  output: "export",
  images: {
    // El optimizador de imágenes de Next.js necesita un servidor Node
    // corriendo; un hosting estático no lo tiene, así que se desactiva
    // y las imágenes (Unsplash + logos de clientes) se sirven tal cual.
    unoptimized: true,
  },
  ...(isGithubActionsBuild && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

export default nextConfig;
