# Portfolio — Nick Zamora

## 1. Objetivo

Crear un portfolio personal responsive, bilingüe (ES/EN) y con estética futurista que presente la experiencia profesional, habilidades, proyectos personales y formas de contacto de Nick Zamora.

El sitio debe comunicar tres dimensiones:
- **Professional:** liderazgo y experiencia en desarrollo web e infraestructura.
- **Technical:** capacidad para trabajar con diferentes stacks y arquitecturas.
- **Product builder:** creación de proyectos y herramientas propias.

La referencia visual es una estética **Futuristic / Digital Lab / Cyber Tech**, con fondo oscuro, acentos cyan y violeta, grids, ondas digitales, glow discreto y componentes tipo panel/editor.

## 2. Dirección visual

- Fondo: midnight navy / azul-negro.
- Acentos: cyan eléctrico y violeta/magenta.
- Tipografía: Inter para contenido y JetBrains Mono para detalles técnicos.
- Cards: superficies oscuras translúcidas, bordes finos luminosos y glow moderado.
- Background: grid, partículas, ondas o líneas de datos; deben ser sutiles y no dificultar la lectura.
- Motion: transiciones cortas, hover, entrada gradual de elementos y animaciones discretas.
- Evitar estética excesivamente cargada, parpadeos o efectos que distraigan.

### Paleta orientativa
- Background: `#060B1A` / `#080C20`
- Surface: `#0C1428`
- Cyan: `#00D9FF`
- Violet: `#A855F7`
- Magenta: `#D946EF`
- Text: `#F4F7FF`
- Secondary text: `#A7B4CC`

## 3. Fotografía

- Usar la fotografía personal proporcionada por el propietario del portfolio.
- **No alterar rostro, facciones, expresión ni apariencia personal.**
- No generar una nueva cara ni reemplazar la fotografía con un avatar.
- La presentación visual puede usar recorte, dimensiones, marco, sombras y efectos decorativos alrededor de la foto, pero sin retocar la identidad del sujeto.
- Guardar la foto en `public/images/profile.jpg` (o formato acordado) y utilizarla como fuente original.

## 4. Stack tecnológico

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide icons
- Framer Motion / Motion para animaciones (evaluar versión compatible al iniciar)
- Componentes reutilizables
- Contenido del portfolio definido en archivos de datos para facilitar cambios
- ESLint y Prettier
- Deploy sugerido: Vercel; alternativa Cloudflare Pages según compatibilidad y necesidades.

## 5. Estructura de páginas

Primera versión: landing page de una sola página con navegación por secciones.

1. Home / Hero
2. Highlights
3. About
4. Featured Projects
5. Professional Experience
6. Tech Stack
7. Currently Exploring (opcional)
8. Contact
9. Footer

## 6. Hero

### Contenido
Eyebrow:
`FULL STACK DEVELOPER · PRODUCT BUILDER`

Título:
`Building Digital Solutions`

Subtítulo (español):
`Desarrollo productos web, móviles y de escritorio que resuelven problemas reales, combinando ingeniería, diseño y nuevas tecnologías.`

CTAs:
- Ver proyectos
- Contáctame

### Composición
- Desktop: texto a la izquierda y fotografía a la derecha.
- Mobile: composición vertical con texto y foto, optimizada para el espacio.
- Fotografía dentro de un marco futurista, geométrico o angular con borde cyan/violeta.
- Badge flotante de perfil (no afirmar disponibilidad laboral sin confirmación).
- Background con ondas digitales o grid.

## 7. Highlights

Mostrar highlights respaldados por información real, sin inventar estadísticas.

Candidatos:
- `15+` años de experiencia (si se confirma el valor vigente)
- `6` proyectos presentados en el portfolio
- `Full Stack` Web · Mobile · Desktop
- `Infrastructure` Cloud · Hosting · DevOps

No mostrar métricas ficticias como cantidad de clientes, proyectos completados, premios o porcentajes de calidad de código.

## 8. About

Presentación breve:
- Ingeniero en Sistemas con maestría en Tecnologías de la Información.
- Experiencia en desarrollo web, arquitectura, infraestructura y liderazgo.
- Desarrollo de proyectos propios y exploración tecnológica.
- Actividad docente y divulgación/enseñanza de programación.

Diseño:
- Un panel tipo editor de código con objeto de perfil, usando JetBrains Mono.
- Texto descriptivo junto al panel.
- Chips para áreas (Leadership, Architecture, Development, Teaching), en español e inglés.

No presentar información personal sensible innecesaria.

## 9. Proyectos destacados

Crear una colección de datos de proyectos y renderizar cards reutilizables. Cada card incluirá:
- Imagen/mockup representativo (no usar imágenes engañosas como si fueran screenshots reales del producto).
- Nombre
- Resumen
- Tecnologías
- Estado (opcional y basado en información real)
- Enlace a GitHub/demo cuando existan
- Detalle del proyecto (página o modal en fase posterior)

### 9.1 App Financiera
**ID sugerido:** `app_financiera`

Seguimiento de ingresos, gastos e inversiones; visualización de rendimiento y consolidación de posiciones en MXN. Considera acciones y ETFs de EE.UU. y mercados mexicanos.

Stack reportado:
- Next.js
- React
- TypeScript
- Prisma
- PostgreSQL
- NextAuth
- shadcn/ui
- Tailwind
- Recharts
- Zod
- Vitest
- Docker

### 9.2 GymLife
**ID sugerido:** `app_gymLife`

Aplicación de entrenamiento que genera y adapta rutinas a partir del historial real de ejercicio. Aplicación móvil y API.

Stack reportado:
- Expo
- React Native
- Expo Router
- Next.js API
- Prisma
- PostgreSQL
- Shared packages / Types / Zod
- Vitest
- Docker
- Node.js

### 9.3 SFTP Client
**ID sugerido:** `app_SFTP`

Aplicación desktop con interfaz de dos paneles para gestionar transferencias y archivos mediante SFTP.

Stack reportado:
- Electron
- React
- TypeScript
- electron-vite
- ssh2
- ssh2-sftp-client
- electron-builder
- Vitest

### 9.4 Gesture Control
**ID sugerido:** `control_gestual`

Aplicación nativa de macOS para controlar cursor y zoom mediante gestos de manos capturados por cámara. El procesamiento de video es local y no se almacena.

Stack reportado:
- Swift
- Swift Package Manager
- Apple Vision
- Hand detection
- OneEuro filter
- Gesture recognition
- Calibration

### 9.5 WhatsApp English
**ID sugerido:** `WhatsApp_english`

Tutor de inglés por WhatsApp que permite enviar audio y recibir respuesta hablada, además de feedback escrito sobre gramática, vocabulario y pronunciación.

Stack reportado:
- Node.js
- TypeScript
- Express
- PostgreSQL
- pg
- tsx
- Vitest
- Docker Compose
- OpenSpec

### 9.6 Agenda WhatsApp
**ID sugerido:** `agenda_whats`

Sistema de recordatorios y notificaciones personalizadas a través de WhatsApp.

Stack:
- Por definir; no asumir tecnologías hasta decidirlas.

## 10. Professional Experience

Crear timeline con experiencia profesional. Los detalles específicos, empresas, fechas, títulos y responsabilidades deben añadirse desde datos verificados.

La sección debe permitir:
- Empresa / organización
- Puesto
- Periodo
- Resumen
- Responsabilidades
- Tecnologías

No inventar nombres de empresas, periodos ni resultados cuantitativos.

## 11. Tech Stack

Mostrar agrupado, sin convertirlo en una lista interminable de logos:

- **Frontend:** React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind
- **Backend:** Node.js, PHP, Symfony, APIs
- **CMS:** WordPress, ACF
- **Mobile:** React Native, Expo
- **Desktop:** Electron, Swift, macOS
- **Databases:** PostgreSQL, MySQL
- **Infrastructure:** Docker, Linux, Cloudflare, WP Engine, Upsun
- **Tools:** Git, GitHub, CI/CD

La lista deberá ajustarse y verificarse al implementar.

## 12. Currently Exploring (opcional)

Mostrar intereses/proyectos en exploración:
- AI-assisted development
- Native macOS apps
- Computer vision / gesture interfaces
- IoT / ESP32
- Product engineering

Mantener esta sección breve y actualizable.

## 13. Contact

- CTA claro para contacto.
- Correo real (añadir durante implementación).
- GitHub (añadir URL).
- LinkedIn (añadir URL).
- No inventar links ni datos de contacto.

Diseño: panel de contacto con borde luminoso, iconos y CTA.

## 14. Bilingüe

Implementar español e inglés.

- Toggle visible `ES / EN`.
- Traducir contenido, labels, navegación, proyectos y secciones.
- Definir estrategia de traducción simple y mantenible (objeto de diccionario o rutas `/es` y `/en`, decisión durante Sprint 1).
- Mantener accesibilidad y URL compartible.

## 15. Responsive

Probar:
- Mobile (320–430 px)
- Tablet
- Desktop
- Wide desktop

Criterios:
- Navegación mobile usable.
- Hero no desborda.
- Foto mantiene proporciones.
- Cards adaptan columnas (1 en mobile, 2 tablet, 3 desktop).
- Grid/background decorativo no afecta scroll ni performance.
- Texto y glow mantienen contraste.

## 16. Accesibilidad y performance

- Respetar `prefers-reduced-motion`.
- Contraste adecuado.
- Focus visible.
- Navegación con teclado.
- Alt descriptivo para fotografía y previews.
- Optimización de imágenes.
- Lazy loading para imágenes debajo del Hero.
- Evitar animaciones intensivas.
- Mantener layout estable.
- SEO: metadata, Open Graph y favicon.
- Lighthouse: optimizar performance, accessibility, SEO y best practices.

## 17. Arquitectura sugerida

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── highlights/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── tech-stack/
│   │   ├── contact/
│   │   └── ui/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── tech-stack.ts
│   │   └── translations.ts
│   ├── hooks/
│   ├── lib/
│   └── types/
├── tests/
├── plan.md
├── README.md
└── ...
```

## 18. Fases y Sprints

### Fase 0 — Setup
- Crear repositorio.
- Inicializar Next.js, TypeScript y Tailwind.
- Configurar ESLint/Prettier.
- Definir estructura.
- Establecer paleta, tokens y tipografía.
- Crear README y documentación inicial.

**Entregable:** proyecto ejecutable con estructura base.

### Sprint 1 — UI foundation
- Header/navigation.
- Background futurista reusable.
- Button, section container, glow card, badge y typography components.
- Mobile menu.
- Tokens visuales.
- Layout responsive.

**Entregable:** base visual y navegación.

### Sprint 2 — Hero
- Texto y CTAs.
- Integrar fotografía original.
- Marco geométrico luminoso.
- Background wave/grid.
- Badge flotante.
- Animaciones moderadas y responsive.

**Entregable:** Hero terminado.

### Sprint 3 — Highlights + About
- Cards de highlights.
- Panel tipo code editor.
- About.
- Skills chips.
- Responsive.

**Entregable:** presentación personal.

### Sprint 4 — Featured Projects
- Definir schema/type de proyecto.
- Dataset de proyectos.
- Cards y previews.
- Tags tecnológicos.
- Hover states.
- Grid responsive.

**Entregable:** seis proyectos visibles.

### Sprint 5 — Experience + Tech Stack
- Timeline.
- Categorías de tecnología.
- Contenido verificable.
- Responsive.

**Entregable:** experiencia y skills.

### Sprint 6 — Contact + Localization
- Contact section.
- Social links.
- ES/EN.
- Metadata y SEO.
- Navigation section anchors.

**Entregable:** landing page bilingüe completa.

### Sprint 7 — Polish
- Animations.
- Reduced motion.
- Accessibility.
- Performance.
- Lighthouse.
- Cross-browser checks.

**Entregable:** versión candidata para deployment.

### Sprint 8 — Deployment
- Deploy.
- Domain.
- SSL.
- Analytics opcional con privacy consideration.
- README de deploy y mantenimiento.

**Entregable:** portfolio publicado.

## 19. Definition of Done

- [ ] Landing page completa.
- [ ] Responsive.
- [ ] Fotografía original, sin retocar rostro.
- [ ] ES/EN.
- [ ] Proyectos reales y sin métricas inventadas.
- [ ] Links verificados.
- [ ] SEO básico.
- [ ] Accessibility checks.
- [ ] Reduced motion.
- [ ] Performance checks.
- [ ] README actualizado.
- [ ] Deploy exitoso.

## 20. Reglas del proyecto

1. No alterar la fotografía personal ni generar una sustitución facial.
2. No inventar métricas, premios, clientes, testimonials ni resultados.
3. Usar previews de proyectos que se distingan claramente de screenshots reales si son mockups.
4. Mantener el diseño futurista, pero priorizar legibilidad.
5. Todos los componentes deben ser reutilizables y mantenibles.
6. El contenido debe estar centralizado en data/config cuando sea posible.
7. No incorporar credenciales, tokens ni información privada.
8. Revisar compatibilidad de paquetes y versiones al momento de implementar.
