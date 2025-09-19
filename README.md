# Microblog Jekyll mínimo

## Pasos para usarlo en GitHub Pages

1. Crea un repo (user page `usuario.github.io` o project page `usuario.github.io/nombre`).
2. Sube todos los archivos de este ZIP a la raíz del repo.
3. En **Settings → Pages** configura:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
4. Si es un Project Page, edita `_config.yml` y añade:
   ```yml
   url: "https://usuario.github.io"
   baseurl: "/nombre"
   ```
5. Espera al despliegue y abre la URL indicada.

Verás listado el post de ejemplo y podrás crear más en `_posts/`.
