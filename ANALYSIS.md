# Análisis Comparativo: alinlifts.com vs leakesler.com

> **Propósito:** Identificar patrones comunes, elementos de diseño, estructura de contenido y tácticas de conversión en dos landing pages exitosas de personal trainers para aplicarlos en la webApp de Joa Fit.

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Tech Stack de Cada Sitio](#2-tech-stack-de-cada-sitio)
3. [Estructura de Secciones](#3-estructura-de-secciones)
4. [Navegación (Header)](#4-navegación-header)
5. [Hero Section](#5-hero-section)
6. [Social Proof / Stats](#6-social-proof--stats)
7. [Planes y Programas](#7-planes-y-programas)
8. [Testimonios y Transformaciones](#8-testimonios-y-transformaciones)
9. [Sección Personal / About](#9-sección-personal--about)
10. [CTAs y Botones](#10-ctas-y-botones)
11. [Paleta de Colores](#11-paleta-de-colores)
12. [Tipografía](#12-tipografía)
13. [WhatsApp y Contacto](#13-whatsapp-y-contacto)
14. [Footer](#14-footer)
15. [Patrones de Diseño Mobile](#15-patrones-de-diseño-mobile)
16. [Conclusiones y Recomendaciones](#16-conclusiones-y-recomendaciones)
17. [Checklist de Elementos Clave](#17-checklist-de-elementos-clave)

---

## 1. Resumen Ejecutivo

| Aspecto | alinlifts.com | leakesler.com |
|---------|---------------|---------------|
| **Enfoque** | Programas digitales (productos) + mentoría 1:1 | Planes (productos) + asesorías 1:1 |
| **Idioma** | Español (con switch a inglés) | Español |
| **Monetización** | Lemon Squeezy (pago único por programa) | WooCommerce + WPC Bundles (ARS, suscripción/único) |
| **Tono** | Directo, técnico, aspiracional: "Programas que realmente funcionan" | Personal, emocional, transformacional: "Transforma tu físico y mentalidad" |
| **Audiencia** | Hombres y mujeres, todos los niveles | Hombres y mujeres, todos los niveles |
| **Estilo visual** | Oscuro, premium, deportivo (charcoal + green militar) | Claro, limpio, profesional (blanco + azul) |

### Similitudes Fundamentales

1. **Landing de una sola página** con secciones bien delimitadas
2. **Hero con foto del trainer** y CTA principal arriba del fold
3. **Planes o servicios** como sección principal y más grande
4. **Social proof** visual o numérico (stats o fotos antes/después)
5. **Historia personal** del trainer para generar conexión
6. **WhatsApp** como canal de contacto principal
7. **Navegación sticky minimalista** (3-4 links)
8. **Mobile responsive** con hamburger menu
9. **Footer con logo + redes sociales + copyright**

---

## 2. Tech Stack de Cada Sitio

### alinlifts.com

| Capa | Tecnología |
|------|-----------|
| **Framework** | Next.js (App Router, React Server Components) |
| **CSS** | Tailwind CSS v4 |
| **Payment** | Lemon Squeezy (links directos a checkout) |
| **Contacto** | WhatsApp (wa.link) |
| **Hosting** | Vercel (inferido) |
| **i18n** | Custom React Language Provider (ES/EN) |

**Características técnicas destacadas:**
- Uso intensivo de CSS custom properties de Tailwind v4 (`@property`, `@layer theme`)
- Animaciones vía clases CSS (fade-in, scale-in)
- Sin dependencias de librerías de animación externas
- Imágenes optimizadas con Next.js `Image` component
- Carga de fuentes Google Fonts via `next/font`

### leakesler.com

| Capa | Tecnología |
|------|-----------|
| **CMS** | WordPress 7.0 + Elementor 4.0.9 + Elementor Pro |
| **Theme** | GeneratePress (theme hijo con custom CSS) |
| **E-commerce** | WooCommerce 10.7.0 + WPC Product Bundles |
| **Moneda** | ARS (Peso Argentino) vía WOOCS |
| **SEO** | Yoast SEO 27.6 |
| **Performance** | SiteGround Optimizer (minificación, lazy load, WebP) |
| **Tracking** | Facebook Pixel (vía PixelYourSite) |
| **Contacto** | WhatsApp (Click to Chat by HoliThemes) |
| **Legal** | Hu-manity.co (cookie consent) |

**Características técnicas destacadas:**
- Page template: `elementor_canvas` (sin header/footer de WP)
- Container system: Flexbox containers de Elementor (sin sections legacy)
- Animaciones: `slideInUp` con `elementor-invisible`
- Hover effects: `translateY(-1em)` en cards
- Sticky header activo en todos los breakpoints
- Sin Google Analytics, solo Facebook Pixel + Server API

---

## 3. Estructura de Secciones

### alinlifts.com — Orden de secciones

```
┌────────────────────────────────────────────┐
│  NAVBAR (sticky, transparent→opaco)        │
├────────────────────────────────────────────┤
│  HERO                                       │
│  └─ Full-screen bg image (foto trainer)    │
│  └─ Pill badge: "🔥 +500 atletas ya..."    │
│  └─ H1: "PROGRAMAS QUE REALMENTE FUNCIONAN"│
│  └─ Subheadline (1 párrafo)                │
│  └─ 2 CTAs lado a lado (VER PROGRAMAS |    │
│     MENTORIA 1:1)                          │
│  └─ Trust bar: "Acceso inmediato · Pago    │
│     único · Sin suscripción"               │
├────────────────────────────────────────────┤
│  STATS BAR + VALUE PROPS                    │
│  └─ 3 stats: 9+ años · 500+ atletas · 8   │
│     programas                               │
│  └─ 4 value props: Estructurado, Probado,  │
│     Acceso Inmediato, Resultados            │
├────────────────────────────────────────────┤
│  PLANES / PROGRAMAS (sección principal)     │
│  └─ H2: "ELEGI TU PROGRAMA"               │
│  └─ Filtros: Todos · Híbrido · Running ·  │
│     Fuerza · Hipertrofia                   │
│  └─ Grid 3-columnas de program cards       │
│  └─ Cada card: imagen, badge, nombre,     │
│     descripción, target audience, CTA      │
├────────────────────────────────────────────┤
│  COACHING / MENTORÍA 1:1                    │
│  └─ Split layout: imagen + texto           │
│  └─ CTA: "APLICAR A MENTORIA" → WhatsApp  │
├────────────────────────────────────────────┤
│  ABOUT / "SOBRE MI"                         │
│  └─ Split layout: imagen + texto           │
│  └─ 3 quote blocks con filosofía personal  │
├────────────────────────────────────────────┤
│  FOOTER                                     │
│  └─ Logo + social icons + back to top      │
│  └─ Copyright                              │
└────────────────────────────────────────────┘
```

**Total: 6 secciones (contando navbar y footer)**
**Notable ausencia:** No tiene sección de testimonios de clientes. El social proof es numérico (stats) y de valor (value props).

### leakesler.com — Orden de secciones

```
┌────────────────────────────────────────────┐
│  HEADER/NAV (sticky, blanco)               │
├────────────────────────────────────────────┤
│  HERO (split text)                          │
│  └─ "Transforma tu"                        │
│  └─ "físico y mentalidad"                  │
│  └─ "Personal trainer"                     │
│  └─ CTA: "NUEVOS PLANES CIENCIA 2.0"      │
├────────────────────────────────────────────┤
│  GATEWAY CARDS (2 cards)                    │
│  └─ Card 1: "PLANES Y GUÍAS" → /planes/   │
│  └─ Card 2: "ASESORIAS" → /asesorias/     │
│  └─ Con hover lift effect                  │
├────────────────────────────────────────────┤
│  ABOUT / HISTORIA PERSONAL                  │
│  └─ "Yo también empecé desde cero"         │
│  └─ Texto personal + foto transformación   │
├────────────────────────────────────────────┤
│  TRANSFORMACIONES DE CLIENTES               │
│  └─ Carrusel Swiper con 5 fotos            │
│     antes/después                          │
├────────────────────────────────────────────┤
│  FOOTER                                     │
│  └─ Logo + social icons + legal links      │
│  └─ Copyright + créditos de diseño         │
├────────────────────────────────────────────┤
│  [FLOTANTE] WhatsApp button                 │
│  [FLOTANTE] Cookie consent                  │
└────────────────────────────────────────────┘
```

**Total: 6 secciones (+ 2 flotantes)**

---

## 4. Navegación (Header)

### alinlifts.com

| Elemento | Detalle |
|----------|---------|
| **Logo** | "ALIN LIFTS" (texto, no imagen), en button que scrollea al top |
| **Links desktop** | Programas · Mentoría · Sobre Mi (3 links) |
| **Language** | Switch ES/EN (pill toggle) |
| **CTA en nav** | No tiene botón CTA en nav |
| **Mobile** | Hamburger icon (3 barras blancas) |
| **Comportamiento** | Sticky, transparente al inicio, `bg-transparent`, al scrollear se mantiene transparente en hero |
| **Font nav** | Oswald, uppercase, tracking-[0.12em] |

**Observación:** La navegación es extremadamente minimalista — solo lo esencial. No hay dropdowns ni submenús.

### leakesler.com

| Elemento | Detalle |
|----------|---------|
| **Logo** | Imagen PNG del logo de Lea Kesler |
| **Links desktop** | Home · Asesorias · Planes (3 links, horizontal) |
| **CTA en nav** | No tiene botón CTA en nav |
| **Mobile** | Hamburger toggle a tablet (≤1024px), full-width dropdown stretch |
| **Comportamiento** | Sticky en todos los breakpoints, fondo blanco (--base-3) |
| **Hover** | Text color cambia a var(--contrast) = #222222 |
| **Active** | Color accent (#1e73be) |

**Patrón común:** Ambos sitios tienen **exactamente 3 links en el nav** y **ninguno tiene CTA en el nav**. El nav es simplemente un índice de secciones/páginas.

---

## 5. Hero Section

### alinlifts.com — Hero (full-screen visual)

```
┌──────────────────────────────────────────────┐
│                                              │
│  [🔥 +500 atletas ya entrenan con estos      │
│   programas]                                 │
│                                              │
│  PROGRAMAS QUE                              │
│  REALMENTE FUNCIONAN                         │
│                                              │
│  Deja de improvisar en el gym. Seguí un      │
│  plan probado, estructurado semana a         │
│  semana, y empezá a ver resultados reales.   │
│                                              │
│  [VER PROGRAMAS]     [MENTORIA 1:1]          │
│   (primary green)     (outline cream)        │
│                                              │
│  Acceso inmediato · Pago único · Sin         │
│  suscripción                                 │
└──────────────────────────────────────────────┘
```

| Elemento | Detalle |
|----------|---------|
| **Background** | Foto del trainer a toda pantalla (`object-[50%_28%]`), 3 capas de gradiente overlay |
| **Pill badge** | `bg-military/20 border border-military/40`, texto "🔥 +500 atletas ya entrenan con estos programas" |
| **H1** | "PROGRAMAS QUE REALMENTE FUNCIONAN" — Oswald, uppercase, `text-4xl` → `lg:text-7xl`, `leading-[1.1]` |
| **Subheadline** | Una línea persuasiva, `font-light`, `max-w-2xl` |
| **CTA primary** | "VER PROGRAMAS" → btn-primary (green gradient, scroll a #plans) |
| **CTA secondary** | "MENTORIA 1:1" → btn-secondary (outline cream, scroll a #coaching) |
| **Trust bar** | "Acceso inmediato · Pago único · Sin suscripción" |
| **Scroll indicator** | Mouse icon + "Ver programas" abajo del todo |
| **Carousel dots** | 4 indicator dots (posible carrusel de hero, no implementado aún) |

### leakesler.com — Hero (text-driven)

```
┌──────────────────────────────────────────────┐
│                                              │
│  Transforma tu                               │
│  físico y mentalidad                         │
│                                              │
│  Personal trainer                            │
│                                              │
│  [NUEVOS PLANES CIENCIA 2.0]                 │
│   (button con slideInUp)                     │
│                                              │
└──────────────────────────────────────────────┘
```

| Elemento | Detalle |
|----------|---------|
| **Background** | Sin imagen de fondo (fondo clásico de Elementor) |
| **Headline 1** | "Transforma tu" (heading widget) |
| **Headline 2** | "físico y mentalidad" (heading widget) |
| **Subheadline** | "Personal trainer" (heading widget) |
| **CTA** | "NUEVOS PLANES CIENCIA 2.0" → /ciencia/ (button widget con slideInUp) |
| **Hero duplicado** | Tiene un segundo hero idéntico debajo (posible animación split) |

### Comparativa de Heroes

| Aspecto | alinlifts.com | leakesler.com |
|---------|---------------|---------------|
| **Enfoque** | Visual (foto del trainer ocupa toda la pantalla) | Textual (headlines aspiracionales) |
| **Jerarquía** | Badge → H1 → sub → 2 CTAs → trust bar | H1 → H2 → sub → CTA |
| **Cantidad de CTAs** | 2 (programas + mentoría) | 1 (planes) |
| **Trust signals** | Badge numérico + trust bar | Ninguno |
| **Scroll indicator** | Sí (mouse icon) | No |
| **Background** | Foto del trainer con overlay | Sin imagen (claro) |

---

## 6. Social Proof / Stats

### alinlifts.com — Stats Bar + Value Props

**Stats (3 columnas):**

| Stat | Valor | Label |
|------|-------|-------|
| Años de experiencia | **9+** | "Anos" |
| Atletas entrenados | **500+** | "Atletas" |
| Programas disponibles | **8** | "Programas" (hidden en mobile) |

- Números en `font-heading text-4xl/5xl/6xl`, color `text-cream`
- Separados por divisor vertical `w-px h-16 bg-cream/10`

**Value Props (4 columnas debajo de stats):**

| # | Título | Descripción | Ícono |
|---|--------|-------------|-------|
| 1 | **Estructurado** | "Cada semana planificada. Sin improvisar. Solo seguir el plan." | Grid icon |
| 2 | **Probado** | "9 años de experiencia condensados en programas que funcionan." | Checkmark |
| 3 | **Acceso Inmediato** | "Pagas y empezás. Sin esperas, sin llamadas, sin vueltas." | Lightning |
| 4 | **Resultados** | "Fuerza, resistencia y estética. Todo en un mismo enfoque." | Trending-up |

Cada value prop tiene:
- Icono en caja `w-12 h-12` con `border border-military/40`
- Título en font-heading
- Descripción en `text-cream/40`

### leakesler.com — Transformaciones Visuales

No tiene stats numéricos. En su lugar usa:

1. **Foto de transformación propia** del trainer (Lea Kesler) en sección "Yo también empecé desde cero"
2. **Carrusel de 5 fotos antes/después** de clientes reales (SwiperJS con dots + flechas de navegación)
3. **Sin ratings, sin estrellas, sin quotes de clientes**

### Patrón Común

Ambos sitios priorizan el social proof **visual o numérico** sobre los testimonios escritos:
- **AlinLifts**: Números grandes y estadísticas (enfoque cuantitativo)
- **LeaKesler**: Fotos reales de transformación (enfoque visual)

---

## 7. Planes y Programas

### alinlifts.com — Grid de Programas con Filtros

| Aspecto | Detalle |
|---------|---------|
| **Título** | "ELEGI TU PROGRAMA" (section-title) |
| **Subtítulo** | "Programas completos con progresión estructurada. Compras una vez, tuyo para siempre." |
| **Filtros** | 5 pills: Todos · Híbrido · Running · Fuerza · Hipertrofia |
| **Layout** | `grid-cols-1 sm:2 lg:3` |
| **Total programas** | 10 |
| **Cada card tiene:** | Foto cover (aspect 4/5 con gradiente) · Badge categoría · Nombre · Descripción · Target audience · CTA "COMPRAR AHORA" |
| **Precio** | No se muestra en la card (se ve en Lemon Squeezy checkout) |
| **Card destacada** | "Pack Atleta Híbrido" con `ring-2 ring-military ring-offset`, badge "★ PACK" |
| **Hover** | `-translate-y-1` lift |
| **CTA card** | "COMPRAR AHORA" → checkout de Lemon Squeezy |

**Ejemplo de una card:**

```
┌─────────────────┐
│                  │
│   [FOTO COVER]   │
│   con gradiente  │
│                  │
├─────────────────┤
│  HYBRID (badge)  │
│                  │
│ Atleta Híbrido   │
│ Nivel 1          │
│                  │
│ Programa de      │
│ entrenamiento    │
│ híbrido completo │
│ para...          │
│                  │
│ ─────────────    │
│ ✓ Principiantes  │
│                  │
│ [COMPRAR AHORA]  │
└─────────────────┘
```

**Estilo de filtros:**
- Inactivo: `text-slate`, bg transparente
- Activo: `bg-charcoal text-cream`, box-shadow

### leakesler.com — Gateway Cards

| Aspecto | Detalle |
|---------|---------|
| **Título** | No tiene título de sección (son 2 cards directas) |
| **Layout** | 2 cards lado a lado (Flexbox container) |
| **Card 1** | "PLANES Y GUÍAS" — "Todo lo que necesitas para lograr tus objetivos a un precio único." → `/planes/` |
| **Card 2** | "ASESORIAS" — "Asesorías personalizadas con seguimiento 1 a 1 para llegar al siguiente nivel." → `/asesorias/` |
| **Precio** | No se muestra en la card (se ve en /planes/ con WooCommerce) |
| **Hover** | `translateY(-1em)` lift |
| **Animación** | `slideInUp` al entrar en viewport |
| **Widget** | Image Box de Elementor Pro |

### WooCommerce en leakesler.com (detalle para referencia)

- **Product Bundles** via WPC Product Bundles (`woobt`)
- **Moneda**: ARS, sin decimales, separador miles `.` decimal `,`
- **Variaciones**: Productos con variaciones (ej: nivel 1, 2, 3)
- **Cart**: `/cart/` con AJAX add-to-cart
- **Checkout**: `/checkout/`
- **Sale badges**: hidden (`display: none !important`)
- **Precios**: Forzados a blanco en cards oscuras

---

## 8. Testimonios y Transformaciones

### alinlifts.com — Sin Testimonios de Clientes

No tiene sección de testimonios. En su lugar:
- Los **value props** y **stats** funcionan como prueba social
- Las **3 quotes** en About son del propio Alin (filosofía personal), no de clientes

### leakesler.com — Carrusel de Transformaciones

```
┌──────────────────────────────────────────────┐
│  Transformaciones físicas de nuestros        │
│  clientes                                    │
│                                              │
│  Resultados visibles gracias al esfuerzo      │
│  y la dedicación.                            │
│                                              │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐│
│  │     │  │     │  │     │  │     │  │     ││
│  │ 1/5 │  │ 2/5 │  │ 3/5 │  │ 4/5 │  │ 5/5 ││
│  │     │  │     │  │     │  │     │  │     ││
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘│
│  ◄                          ►                 │
│       ● ● ● ● ●                               │
└──────────────────────────────────────────────┘
```

- **5 imágenes** de clientes (fotos antes/después, 1024px width)
- **SwiperJS** con dots y flechas de navegación
- **aria-roledescription="carousel"**, labels "1 de 5", "2 de 5", etc.
- **Lazy loading** via SiteGround Optimizer
- **Sin texto, sin nombres, sin quotes** — puramente visual

### Patrón para tu landing

Combinar ambos enfoques:
1. **Testimonios escritos** con nombre, foto, rating (como ya tenés en `testimonials-section.tsx`)
2. **Fotos de transformación** en carrusel (cuando haya fotos de clientes)

---

## 9. Sección Personal / About

### alinlifts.com — "Sobre Mi"

- **Layout**: Split (imagen + texto)
- **Contenido**: Texto sobre su experiencia, sus títulos/logros
- **3 Quote blocks**: frases de filosofía personal con border-left militar green
  - "La consistencia es el verdadero superpoder"
  - "No se trata de motivación, se trata de identidad"
  - "Construir el cuerpo correcto empieza por ordenar la vida"

### leakesler.com — "Yo también empecé desde cero"

- **Layout**: Texto + foto de transformación (CAMBIO-LEAN.png, 900x900)
- **Headline**: "Yo también empecé desde cero"
- **Texto**: "Mi transformación fue el motor para dedicarme a ayudar a otros a cambiar su vida."
- **Enfoque**: Emocional, de vulnerabilidad compartida

### Patrón Común

Ambos usan la historia personal para:
- Generar confianza y conexión emocional
- Mostrar que el trainer entiende el proceso porque lo vivió
- Humanizar la marca

---

## 10. CTAs y Botones

### alinlifts.com — Sistema de Botones

**`.btn-primary` (Verde militar)**
```css
background: linear-gradient(135deg, #4A5D23 0%, #3A4A1B 100%);
color: #FAF9F6;
font-family: Oswald;
letter-spacing: 0.15em;
font-weight: 500;
padding: 1rem 2.5rem;
hover: translateY(-3px) + box-shadow + shine sweep
```

**`.btn-accent` (Sand/Oro para mentoría)**
```css
background: linear-gradient(135deg, #C9B896 0%, #A89968 100%);
color: #0D0D0D;
font-family: Oswald;
letter-spacing: 0.12em;
font-weight: 600;
padding: 1rem 2.5rem;
hover: translateY(-3px) + box-shadow
→ Incluye SVG icon flecha derecha
```

**`.btn-secondary` (Outline para hero)**
```css
background: transparent;
border: 2px solid var(--color-charcoal);
color: charcoal;
hover: bg charcoal, text cream, translateY(-2px)
```

| Texto | Tipo | Acción |
|-------|------|--------|
| "VER PROGRAMAS" | Primary green | Scroll a `#plans` |
| "MENTORIA 1:1" | Secondary outline | Scroll a `#coaching` |
| "COMPRAR AHORA" | Primary green (full-width) | Lemon Squeezy checkout |
| "APLICAR A MENTORIA" | Accent sand | WhatsApp link |

### leakesler.com — Botones

**Estilo unificado (custom CSS de WooCommerce):**
```css
background-color: #3f51b5;   /* Azul */
color: white;
font-style: italic;
font-weight: bold;
text-transform: uppercase;
border-radius: 8px;
padding: 14px 28px;
border: 2px solid #3f51b5;
transition: all 0.3s ease-in-out;
```

**Hover:**
```css
background-color: transparent;
color: white;
border: 2px solid #3f51b5;
```

| Texto | Destino |
|-------|---------|
| "NUEVOS PLANES CIENCIA 2.0" | `/ciencia/` |
| "PLANES Y GUIAS" | `/planes/` |
| "ASESORIAS" | `/asesorias/` |

### Patrón de CTAs

| Táctica | alinlifts.com | leakesler.com |
|---------|---------------|---------------|
| **CTA principal hero** | Scroll a programas | Link a página de ciencia |
| **CTA secundaria hero** | Link a mentoría (WhatsApp) | No tiene |
| **CTA en cards** | Compra directa (Lemon) | Link a páginas internas |
| **CTA flotante** | No tiene | WhatsApp floating |
| **Transform hover** | translateY(-3px) + glow | translateY(-1em) en cards |
| **Estilo** | Bold, sine serif, uppercase | Bold, italic, uppercase |

---

## 11. Paleta de Colores

### alinlifts.com — Paleta Oscura Premium

| Variable | Hex | Uso |
|----------|-----|-----|
| `--color-military` | `#4A5D23` | **Accent primario**: botones, borders, badges |
| `--color-military-light` | `#5C7028` | Hover de botones, gradiente |
| `--color-military-dark` | `#3A4A1B` | Gradiente oscuro de botones |
| `--color-sand` | `#C9B896` | **Accent secundario**: botón mentoría |
| `--color-sand-dark` | `#A89968` | Gradiente sand |
| `--color-charcoal` | `#0D0D0D` | **Fondo oscuro principal** |
| `--color-charcoal-light` | `#1A1A1A` | Card gradient start |
| `--color-cream` | `#FAF9F6` | **Texto claro, fondos light** |
| `--color-cream-dark` | `#F0EDE6` | Fondo sección planes |
| `--color-slate` | `#6B7280` | Texto muted |

**Esquema de secciones alternadas:**
```
Secciones oscuras (hero, coaching):  charcoal bg + cream text
Secciones claras (plans, about):     cream/cream-dark bg + charcoal text
```

### leakesler.com — Paleta Clara Profesional

| Variable | Hex | Uso |
|----------|-----|-----|
| `--contrast` | `#222222` | Texto primario |
| `--contrast-2` | `#575760` | Texto secundario |
| `--base` | `#f0f0f0` | Fondo claro |
| `--base-2` | `#f7f8f9` | Body background |
| `--base-3` | `#ffffff` | Header, footer, nav bg |
| `--accent` | `#1e73be` | Links, active nav |
| `--primary-blue` | `#3f51b5` | CTA principal, WooCommerce |
| WhatsApp green | `#25D366` | Botón flotante WhatsApp |

**Esquema:** Fondo claro uniforme, acentos azules, sin alternancia de secciones oscuras.

---

## 12. Tipografía

### alinlifts.com

| Rol | Font | Peso | Uso |
|-----|------|------|-----|
| **Headings** | Oswald (Google Fonts) | 500 | h1-h6, uppercase siempre |
| **Body** | Inter (Google Fonts) | 300-700 | Texto general |
| **Uppercase** | todas las headings | — | Section titles, nav, botones |

**Jerarquía de headings:**
```css
h1: text-4xl → lg:text-7xl (hero)
h2: clamp(2rem, 5vw, 3.5rem) (section-title)
h3 (cards): text-xl → md:text-2xl
```

**Letter-spacing:**
- Nav links: `tracking-[0.12em]`
- Buttons: `tracking-[0.10em]` a `[0.15em]`
- Section labels: `tracking-[0.20em]` a `[0.25em]`

### leakesler.com

| Rol | Font | Uso |
|-----|------|-----|
| **Body** | Roboto (Google Fonts) | Texto general |
| **Headings** | Open Sans (Google Fonts) | Headings (o Roboto en bold) |
| **Font display** | `swap` | Lazy loading de fuentes |

**Precargadas:** Roboto v30 + Open Sans v35

### Patrón para tu landing

El esquema de **AlinLifts** es superior para una marca fitness:
- **Heading font bold** con uppercase → da sensación de autoridad, fuerza, disciplina
- **Body font limpia** → legibilidad para descripciones y contenido
- **Tracking amplio** en nav/botones → sensación premium

---

## 13. WhatsApp y Contacto

### alinlifts.com

| Aspecto | Detalle |
|---------|---------|
| **Ubicación** | Enlace en CTA "APLICAR A MENTORIA" |
| **Link** | `https://wa.link/e2epoh` |
| **Tipo** | No es botón flotante, es parte del contenido |
| **Mensaje pre-escrito** | No detectado |

### leakesler.com

| Aspecto | Detalle |
|---------|---------|
| **Ubicación** | Botón flotante fijo (bottom-right) |
| **Color** | Verde `#25D366` |
| **Hover** | `#00d34d` con texto "WhatsApp us" |
| **Phone** | `+54 9 11 2854-5410` |
| **Mensaje pre-escrito** | "Hola Lea! Me gustaría saber mas información sobre tus planes y guías💪" |
| **Plugin** | Click to Chat by HoliThemes |
| **Z-index** | 99999999 |

### Recomendación

Combinar ambos:
1. **Botón flotante WhatsApp** (como LeaKesler) — siempre visible
2. **CTA WhatsApp integrado** en secciones clave (como AlinLifts en mentoría)
3. **Mensaje pre-escrito** con contexto según la sección (ej: "Hola! Me interesan tus planes de entrenamiento")

---

## 14. Footer

### alinlifts.com

```
┌──────────────────────────────────────────────┐
│  ALIN LIFTS              Instagram  YouTube   │
│  Hybrid Athlete           TikTok             │
│                                              │
│                                  Volver       │
│                                  arriba ↑     │
│                                              │
│  ─────────────────────────────────────────    │
│  © 2026 Alin Lifts. Todos los derechos       │
│  reservados.                                 │
└──────────────────────────────────────────────┘
```

- **3-column grid:** brand, socials (centered), back-to-top
- **Sin links legales** (privacy, terms, etc.)
- **Redes:** Instagram, YouTube, TikTok

### leakesler.com

```
┌──────────────────────────────────────────────┐
│  [LOGO]          Instagram  YouTube          │
│                                              │
│                                              │
│  ─────────────────────────────────────────    │
│  Políticas de Privacidad                     │
│  Políticas de Cookies                        │
│  Copyright 2025 © Leandro Kesler             │
│  – Hecho por Luis Turnes                     │
└──────────────────────────────────────────────┘
```

- **2-column grid:** logo + redes sociales
- **Legal:** Privacy policy + cookies policy (requisito legal)
- **Crédito de diseño:** "Hecho por Luis Turnes"
- **Redes:** Instagram, YouTube

### Patrón Común

| Elemento | alinlifts.com | leakesler.com |
|----------|---------------|---------------|
| Logo | ✅ Texto | ✅ Imagen |
| Instagram | ✅ | ✅ |
| YouTube | ✅ | ✅ |
| TikTok | ✅ | ❌ |
| Links legales | ❌ | ✅ |
| Back-to-top | ✅ | ❌ |
| Crédito diseño | ❌ | ✅ |
| Copyright | ✅ | ✅ |

---

## 15. Patrones de Diseño Mobile

### alinlifts.com

**Breakpoints:**

| Breakpoint | Valor | Cambios |
|------------|-------|---------|
| `sm:` | 640px | Hero h1: `text-5xl`; Grid plans: `sm:grid-cols-2`; Stats: muestra 3ra columna |
| `md:` | 768px | Nav: muestra menú desktop; Hero h1: `text-6xl`; Container padding |
| `lg:` | 1024px | Grid plans: `lg:grid-cols-3`; Coaching: `lg:grid-cols-2`; About: `lg:grid-cols-2` |
| `xl:` | 1280px | Container padding extra |

**Específico mobile:**
- Hamburger menu (3 barras, `md:hidden`)
- `text-balance` en todos los headings
- `clamp(2rem, 5vw, 3.5rem)` para section titles
- `html { font-size: 15px }` en < 768px
- Hidden en mobile: "Programas" stat, separador "o" entre CTAs
- Min touch targets: `min-w-[52px] min-h-[44px]`

### leakesler.com

**Breakpoints del theme:**

| Breakpoint | Max-width |
|------------|-----------|
| xs (mobile) | 767px |
| mobile_extra | 880px |
| tablet | 1024px |
| tablet_extra | 1200px |
| laptop | 1366px |
| widescreen | 2400px+ |

**Específico mobile:**
- Nav: dropdown hamburger en ≤1024px (stretch full-width)
- WooCommerce: stylesheet separado `woocommerce-smallscreen` para ≤768px
- Products: 100% width en mobile
- Social icons: centrados en tablet (`e-grid-align-tablet-center`)
- WhatsApp: fixed en todos los breakpoints

### Patrón Común

Ambos sitios **no tienen versiones mobile separadas** — usan responsive design con:
- Hamburger menu para mobile
- Grids que pasan de 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- Font sizes responsive con `clamp()` o breakpoints
- Touch targets accesibles

---

## 16. Conclusiones y Recomendaciones

### Elementos NO negociables (presentes en AMBAS páginas)

| # | Elemento | Importancia |
|---|----------|-------------|
| 1 | **Hero con foto del trainer** | Crítico |
| 2 | **CTA principal arriba del fold** | Crítico |
| 3 | **Planes/servicios como sección principal** | Crítico |
| 4 | **Social proof** (stats o fotos) | Crítico |
| 5 | **Historia personal del trainer** | Alto |
| 6 | **WhatsApp como canal de contacto** | Alto |
| 7 | **Navegación minimalista (3 links)** | Alto |
| 8 | **Footer con logo + redes** | Medio |
| 9 | **Responsive design** | Crítico |

### Elementos DIFERENCIADORES

| Táctica | AlinLifts | LeaKesler | Recomendación para Joa Fit |
|---------|-----------|-----------|---------------------------|
| **Estilo visual** | Oscuro (charcoal + green) | Claro (blanco + azul) | **Oscuro** (más premium, deportivo) |
| **Hero** | Full-screen con foto | Text-driven | **Full-screen con foto** (más impacto) |
| **Social proof** | Stats numéricos | Fotos antes/después | **Stats + fotos** (combinar ambos) |
| **Planes** | Grid con filtros + 10 programas | 2 gateway cards | **Según cantidad de planes** |
| **Pagos** | Lemon Squeezy (pago único) | WooCommerce (ARS) | **WhatsApp por ahora** |
| **Testimonios** | No tiene | Solo fotos | **Text quotes + fotos transformación** |
| **CTA hero** | 2 botones (programas + mentoría) | 1 botón (planes) | **2 botones** (planes + asesorías/WhatsApp) |

### Tácticas de Conversión a Implementar

1. **Pill badge con número social proof** en hero (ej: "🔥 +X clientes ya entrenan conmigo")
2. **Trust bar** debajo de CTAs (ej: "Sin compromiso · Primera clase gratis · Online")
3. **Stats numéricos** con años de experiencia y clientes
4. **Value props** con íconos (estructurado, probado, etc.)
5. **Cards de planes con hover lift** y gradientes en imágenes
6. **WhatsApp flotante** con mensaje pre-escrito
7. **Scroll indicator** en hero
8. **Animaciones sutiles** al hacer scroll (fade-in-up)
9. **Alternancia de secciones claras/oscuras** para ritmo visual
10. **Botones con transform hover** (translateY + glow)

---

## 17. Checklist de Elementos Clave

Usá este checklist para asegurar que la landing de Joa Fit cubre todo lo analizado:

- [ ] **Navbar sticky** con 3-4 links + logo
- [ ] **Hero full-screen** con foto del trainer
- [ ] **Pill badge** con número de clientes/logros
- [ ] **H1 impactante** (máximo 5-6 palabras, uppercase)
- [ ] **Subheadline persuasivo** (1-2 líneas)
- [ ] **2 CTAs** en hero (plan principal + asesoría/WhatsApp)
- [ ] **Trust bar** (3 beneficios separados por ·)
- [ ] **Scroll indicator** (mouse icon + texto)
- [ ] **Stats bar** (3 números grandes: años, clientes, algo más)
- [ ] **Value props** (4 columnas con ícono + título + descripción)
- [ ] **Sección de Planes** con cards visuales y hover effect
- [ ] **Filtros de programas** (si hay más de 4 planes)
- [ ] **Testimonios escritos** con nombre, foto placeholder, rating estrellas
- [ ] **Carrusel de transformaciones** (cuando haya fotos de clientes)
- [ ] **Sección About/Historia personal** con foto del trainer
- [ ] **CTA de WhatsApp** flotante (bottom-right)
- [ ] **Footer** con logo, redes sociales, copyright, links legales
- [ ] **Responsive mobile** con hamburger menu
- [ ] **Animaciones** en scroll (fade-in-up en secciones)
- [ ] **SEO básico** (meta tags, Open Graph)
- [ ] **Carga optimizada** de imágenes (lazy loading, WebP)

---

> **Documento generado el:** 27 de Junio de 2026  
> **Fuentes analizadas:** [alinlifts.com](https://www.alinlifts.com/) · [leakesler.com](https://leakesler.com/)  
> **Propósito:** Referencia para la landing page de Joa Fit
