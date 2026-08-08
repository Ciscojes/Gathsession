# Gathsession

Landing page de una comunidad para organizar reuniones y conectar personas,
construida con Vite y Sass.

## Enlaces

- Repositorio: https://github.com/Ciscojes/Gathsession
- Demo: https://ciscojes.github.io/Gathsession/

## Tecnologías

- HTML5 semántico
- CSS Grid y Flexbox
- Sass
- Vite

## Diseño

Interfaz de una plataforma social centrada en comunidades y encuentros. El
proyecto conserva su propia identidad visual, recursos y contenido, y comparte
con `spa-beauty` la estructura técnica utilizada en esta serie de prácticas.

## Desarrollo

```bash
npm install
npm run dev
```

Vite carga `main.js`, que importa `sass/style.scss`. Los cambios de SCSS se
compilan en memoria y se reflejan automáticamente en el navegador. No es
necesario ejecutar Sass por separado.

## Compilación

```bash
npm run build
```

La compilación recrea `dist/` y genera:

```text
dist/index.html
dist/css/style.css
dist/js/app.js
```

No edites `dist` manualmente: modifica las fuentes y vuelve a compilar.

Para revisar la compilación final localmente:

```bash
npm run preview
```
