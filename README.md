# nickzamo.github.io

Portfolio personal de Nick Zamora — bilingüe (ES/EN), estética futurista. Ver [plan.md](plan.md) para objetivos, fases y reglas del proyecto.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS 4 · Motion · Lucide · ESLint · Prettier

## Scripts

| Comando             | Descripción                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                       |
| `npm run build`     | Build estático (`output: "export"` → `out/`) |
| `npm run lint`      | ESLint                                       |
| `npm run typecheck` | TypeScript sin emitir                        |
| `npm run format`    | Prettier                                     |

## Estructura

Ver §17 de [plan.md](plan.md). El contenido vivirá en `src/data/`; los componentes en `src/components/`.

## Contenido

Todo el contenido vive en `src/data/` (proyectos, experiencia, stack, traducciones, perfil). Pendientes de datos verificados:

- `src/data/profile.ts`: correo y LinkedIn (mientras sean `null` no se muestran).
- `src/data/experience.ts`: empresas y periodos.
- `src/data/projects.ts`: enlaces `links.github` / `links.demo` cuando los repos sean públicos.

## Idiomas

Rutas `/es/` y `/en/` con diccionarios tipados en `src/data/translations.ts`. La raíz `/` redirige según el idioma del navegador.

## Deploy

GitHub Pages desde GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` ejecuta typecheck, lint, format y build, y publica `out/` en https://nickzamo.github.io. En _Settings → Pages_ el origen debe ser **GitHub Actions**.

Dominio propio: agregarlo en _Settings → Pages → Custom domain_ (GitHub gestiona el SSL) y actualizar `siteUrl` en `src/data/profile.ts`. Si el sitio se sirviera bajo una subruta habría que definir `basePath` en `next.config.ts`.

Analytics: no hay. Si se agregan, usar una opción sin cookies y documentarlo aquí.

## Estado

Sprints 1–8 del plan completados.
