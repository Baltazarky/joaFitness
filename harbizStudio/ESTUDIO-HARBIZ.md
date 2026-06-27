# Estudio Completo de Harbiz - Análisis Detallado

> Documento generado mediante scraping automatizado con Playwright el 2026-06-27
> Fuente: https://www.harbiz.io

---

## 1. INFORMACIÓN GENERAL

| Campo | Valor |
|---|---|
| **Nombre** | Harbiz |
| **URL** | https://www.harbiz.io |
| **App entrenadores** | https://app.harbiz.io (Harbiz Manager - Android/iOS) |
| **App clientes** | Harbiz (nombre white-label, Android/iOS) |
| **Fundación** | 2020 |
| **Sede** | Calle Núñez de Balboa 120, Chamartín, 28006 Madrid |
| **Contacto** | info@harbiz.io / +34 644 760 015 |
| **Idiomas** | Español, Inglés, Alemán |
| **Monedas** | EUR, USD, GBP, MXN |
| **Profesionales** | +10.000 |
| **Rating Capterra** | 4.4 |
| **Rating Trustpilot** | 4.7 |
| **Rating Google Play (clientes)** | 4.5 |
| **Premios** | Deloitte Technology Fast 50, Deloitte Fast 500 |
| **Prueba gratuita** | 14 días, sin tarjeta de crédito, sin permanencia |
| **Target** | Entrenadores personales, Nutricionistas, Centros fitness, Fisioterapeutas, Yoga/Pilates |

---

## 2. ARQUITECTURA DEL PRODUCTO

```
HARBIZ PLATFORM
│
├── COACHING (Asesoramiento al cliente)
│   ├── Harbiz AI
│   ├── Creador de rutinas
│   ├── Programas automatizados
│   ├── Biblioteca de contenido
│   ├── Planificación nutricional
│   ├── Evolución del cliente
│   └── Cuestionarios
│
├── MANAGEMENT (Gestión del negocio)
│   ├── Control de agenda
│   ├── Sistema de reservas
│   ├── Gestión de clientes
│   ├── Gestión de personal
│   └── Dashboard e informes
│
├── PAYMENTS (Pagos y facturación)
│   ├── Automatización de pagos
│   ├── Sistema de cobros recurrentes
│   ├── Facturación
│   └── Control financiero
│
└── MARKETING (Crecimiento y fidelización)
    ├── Fidelización de clientes
    ├── Sistema de referidos
    ├── Chat clientes y comunidad
    ├── Desafíos y logros
    ├── App personalizada (white-label)
    └── Tu propia web
```

---

## 3. MÓDULO COACHING — ASESORAMIENTO AL CLIENTE

### 3.1 Harbiz AI

**Descripción**: Primera inteligencia artificial creada 100% para entrenadores personales. Genera planes de entrenamiento y nutrición a partir de prompts.

**Funcionalidades**:
- **Workouts AI**: Genera workouts completos desde un prompt con ejercicios personalizados o de la librería
- **Nutri AI** (add-on): Genera planes nutricionales a partir de parámetros clave del cliente en segundos
- El entrenador mantiene el criterio: la IA crea la base, el entrenador ajusta detalle, progresiones y estilo
- Permite escalar clientes sin escalar horas de trabajo

**Sistema de créditos** (Nutri AI):
- 100 créditos/mes incluidos en el add-on
- Cada plan diario consume 2 créditos (hasta ~50 planes/mes)

**Soporta**:
- Definición de objetivos y contexto
- Restricciones alimentarias, alergias y dietas
- Edición completa post-generación (ejercicios, menús, progresiones, instrucciones)

---

### 3.2 Creador de Rutinas

**Descripción**: Herramienta de diseño de entrenamientos con biblioteca profesional de ejercicios.

**Funcionalidades detalladas**:
- **Modo detallado**: Series, objetivos, superseries, cargas, repeticiones, tempo, descansos
- **Modo sencillo**: Más directo y fácil de seguir
- **Inclusión de vídeos**: Cada ejercicio puede llevar vídeo explicativo de técnica
- **Notas personalizadas**: Instrucciones específicas por ejercicio para cada cliente
- **Biblioteca de ejercicios**: +2.000 ejercicios listos para usar
- **Ejercicios propios**: Posibilidad de crear y subir ejercicios propios con vídeo, técnica y notas
- **Asignación directa**: Los entrenamientos se envían a la app del cliente al instante
- **Plantillas inteligentes**: Estructuras reutilizables para ahorrar horas cada semana
- **Programas por días**: Agrupar rutinas en programas planificados por día

**Experiencia del cliente**:
- Visualización en lista o paso a paso
- Marcado de completado
- Seguimiento en tiempo real por el entrenador

---

### 3.3 Programas Automatizados

**Descripción**: Creación de programas estructurados por semanas y días para automatizar la planificación de clientes.

**Funcionalidades**:
- Programas con estructura por semanas y días
- Incluye dentro del programa:
  - Rutinas de entrenamiento con cargas, vídeos y explicaciones
  - Planificación nutricional
  - Documentos y formularios
  - Mensajes programados por fase del proceso
  - Sesiones presenciales u online
- Reutilización de programas base (no empezar desde cero)
- Asignación masiva a múltiples clientes
- Consistencia metodológica entre clientes

**Beneficios**:
- Ahorro de horas de trabajo cada semana
- Metodología clara y estructurada
- Experiencia profesional y consistente
- Reducción de errores y olvidos en el seguimiento

---

### 3.4 Biblioteca de Contenido

**Descripción**: Centralización de todo el contenido del entrenador (ejercicios, vídeos, documentos, recursos).

**Capacidad**: +2.000 ejercicios en la biblioteca base

**Tipos de contenido**:
- **Ejercicios**: Biblioteca completa con posibilidad de ejercicios propios
- **Documentos**: Subida de guías, PDFs y recursos
- **Sesiones en vídeo**: Clases grabadas disponibles 24/7 (subidas por enlace YouTube/Vimeo)
- **Cardio**: Sesiones de cardio predefinidas o personalizadas

**Control de visibilidad**: El entrenador decide qué contenido se muestra a cada cliente

---

### 3.5 Planificación Nutricional

**Descripción**: Herramienta de creación de planes nutricionales con base de alimentos verificada.

**Funcionalidades**:
- **Base de alimentos completa**: Alimentos verificados para crear planes precisos
- **Planes personalizados**: Configuración de calorías, macros y estructura de comidas
- **Menús con alternativas**: Opciones distintas en cada comida para alergias, intolerancias, gustos y horarios
- **Listas de la compra automáticas**: Generación de lista por plan
- **Acceso multiplataforma**: Cliente consulta su plan desde la app
- **Nutri AI** (add-on): Generación asistida por IA de planes nutricionales

---

### 3.6 Evolución del Cliente

**Descripción**: Seguimiento visual del progreso con métricas y gráficas.

**Métricas disponibles**:
- Peso corporal
- % Grasa corporal
- Medidas antropométricas
- Métricas personalizables (creadas por el entrenador)

**Funcionalidades**:
- **Gráficas de progreso**: Visualización histórica de todas las métricas
- **Fotos comparativas**: Comparativa antes/después
- **Logros visuales**: Sistema de reconocimiento de progreso
- **Sistema métrico/imperial**: Configurable por entrenador y por cliente (kg/cm o lb/in)
- **Control de visibilidad**: Ocultar métricas específicas al cliente cuando sea necesario

---

### 3.7 Cuestionarios

**Descripción**: Formularios personalizados para recopilar información de los clientes (evaluaciones iniciales, check-ins, objetivos).

---

## 4. MÓDULO MANAGEMENT — GESTIÓN DEL NEGOCIO

### 4.1 Control de Agenda

**Descripción**: Agenda completa con múltiples vistas y tipos de eventos.

**Vistas disponibles**: Mensual, Semanal, Diaria, Lista

**Tipos de eventos**:
| Tipo | Descripción |
|---|---|
| **Sesión** | Encuentro programado de entrenamiento (individual o grupal) |
| **Cita** | Franja 1:1 disponible para reservar |
| **Reunión** | Coordinación con equipo |
| **Privado** | Bloque de tiempo personal del entrenador |
| **Recordatorio** | Nota sin bloqueo de disponibilidad |

**Características**:
- Etiquetas para control de visibilidad (cliente ve solo sus sesiones)
- Filtro por profesional o equipo
- Métricas de agenda: sesiones del mes, reservas, cancelaciones, % asistencia

---

### 4.2 Sistema de Reservas

**Descripción**: Los clientes reservan sesiones directamente desde la app.

**Modalidades**:
| Modalidad | Descripción |
|---|---|
| **Reserva de sesiones** | Clases grupales con límite de plazas y asistentes |
| **Horario de citas** | Franjas 1:1 para citas individuales con profesionales específicos |

**Funcionalidades**:
- Cancelación y reprogramación por el cliente desde la app
- Pagos integrados al reservar
- Bonos de sesiones: paquetes prepagados con canje automático
- Lista de espera cuando la sesión está llena
- Recordatorios automáticos para reducir ausencias
- Métricas de reservas: confirmadas, cancelaciones, % asistencia

---

### 4.3 Gestión de Clientes

**Descripción**: Dashboard inteligente con clasificación automática de clientes.

**Estados de cliente**:
| Estado | Descripción |
|---|---|
| **Activos** | Clientes con planificación y seguimiento activo |
| **Esperando** | Pendientes de inicio / Sin planificación asignada |
| **En riesgo** | Cumplimiento bajo (-30 días), cancelaciones, errores de pago |
| **Archivados** | Históricos |
| **Eliminados** | Dados de baja |

**Dashboard de cliente**:
- Información del perfil, historial, pagos
- Planificación (entrenamientos, sesiones, objetivos)
- Nutrición y archivos (planes, recetas, documentos)
- Seguimiento (métricas, fotos, logros)
- Comunicación (chat integrado)

**Alertas automáticas**:
- Cliente finaliza su planificación
- Cumpleaños del cliente
- Cumplimiento bajo en los últimos 30 días
- Errores de pago

---

### 4.4 Gestión de Personal

**Descripción**: Gestión de equipo de entrenadores y colaboradores.

**Funcionalidades**:
- Añadir colaboradores al negocio
- Asignación de clientes por profesional
- Visibilidad de agenda por miembro del equipo
- Gestión de roles y permisos

---

### 4.5 Dashboard e Informes

**Descripción**: Métricas de negocio en tiempo real.

**Métricas disponibles**:
- Clientes activos y evolución mensual
- Nuevos clientes y cancelaciones
- Estado de suscripciones y pagos
- Valoraciones y calificaciones de servicios
- Sesiones del mes, reservas, cancelaciones, % asistencia
- Productos más vendidos (unidades + ingresos)
- Balance diario de ingresos

---

## 5. MÓDULO PAYMENTS — PAGOS Y FACTURACIÓN

### 5.1 Automatización de Pagos

**Descripción**: Sistema de cobros automáticos para productos y servicios.

**Funcionalidades**:
- Cobros automáticos configurados por plan/producto
- Reintentos automáticos de pagos fallidos
- Renovaciones automáticas para suscripciones
- Gestión de activaciones, pausas y cancelaciones de planes
- Notificaciones al cliente sobre estado de pago

---

### 5.2 Sistema de Cobros Recurrentes

**Periodicidades**: Mensual, Trimestral, Anual

**Funcionalidades**:
- Suscripciones tipo Netflix para servicios de entrenamiento
- Renovaciones sin intervención manual
- Compatible con programas, productos y servicios
- El cliente paga lo mismo que fuera de la plataforma (sin sobrecoste Harbiz)

---

### 5.3 Facturación

**Descripción**: Generación automática de facturas con datos fiscales.

**Funcionalidades**:
- Emisión automática de facturas por cada cobro recibido
- Datos fiscales configurables
- Historial completo de transacciones
- Descarga y control de informes

---

### 5.4 Control Financiero

**Descripción**: Visibilidad completa de ingresos y estado financiero.

**Métricas**:
- Balance diario de ingresos
- Identificación de impagos y reintentos
- Análisis por producto o plan
- Seguimiento de pagos externos (registro manual de pagos fuera de plataforma)
- Detalle de reembolsos

---

## 6. MÓDULO MARKETING — CRECIMIENTO Y FIDELIZACIÓN

### 6.1 Fidelización de Clientes

**Descripción**: Dashboard de negocio para entender comportamiento de clientes.

**Métricas**:
- Número de clientes activos y evolución mensual
- Nuevos clientes y cancelaciones en tiempo real
- Estado de suscripciones y pagos
- Valoraciones y calificaciones de servicios

---

### 6.2 Sistema de Referidos

**Descripción**: Programa de referidos para convertir clientes en vendedores.

**Funcionalidades**:
- Configuración sencilla de recompensas
- Seguimiento automático de referidos
- Incentivos que impulsan la recomendación
- Pop-up de oferta destacada en la app

---

### 6.3 Chat Clientes y Comunidad

**Descripción**: Comunicación integrada dentro de la app del entrenador.

**Canales**:
- Chat directo 1:1 con cliente
- Mensajes masivos a todos los clientes
- Grupos privados para programas o retos
- Contenido multimedia: fotos, vídeos, documentos, notas de voz

---

### 6.4 Desafíos y Logros

**Descripción**: Sistema de gamificación automática.

**Funcionalidades**:
- Logros automáticos según el progreso del cliente
- Reconocimiento por completar entrenamientos y actividades
- Refuerzo positivo dentro de la app
- Motivación continua mediante objetivos alcanzables

---

### 6.5 App Personalizada (White-Label)

**Descripción**: App propia del entrenador publicada en iOS y Google Play.

**Incluye**:
- Nombre, logo y colores del entrenador
- Publicación en App Store y Google Play
- Configuración asistida
- Actualizaciones y mantenimiento incluidos
- Soporte prioritario

**Precio add-on**: +24,99€/mes (o incluido en plan My APP)

---

### 6.6 Tu Propia Web

**Descripción**: Página web profesional para venta de servicios.

**Funcionalidades**:
- Página lista para usar con la marca del entrenador
- Venta de planes y servicios directamente desde la web
- Precios y pagos integrados
- Captación de clientes sin depender de Instagram o WhatsApp

---

## 7. PLANES Y PRECIOS

### 7.1 Tabla de Planes (Precios sin IVA — EUR)

| Plan | Clientes | Mensual | Anual (equiv/mes) | Descuento |
|---|---|---|---|---|
| **Basic 5** | Hasta 5 | 19€ | 14€ | -26% |
| **Basic 15** | Hasta 15 | 39€ | — | — |
| **Basic 30** | Hasta 30 | 69€ | — | — |
| **Basic 40** | Hasta 40 | 99€ | — | — |
| **Pro 50** | Hasta 50 | 119€ | 89€ | -25% |
| **Pro 75** | Hasta 75 | 169€ | — | — |
| **Pro 100** | Hasta 100 | 199€ | — | — |
| **Pro 200** | Hasta 200 | 224€ | — | — |
| **Pro 500** | Hasta 500 | 249€ | — | — |
| **Pro 5.000** | Hasta 5.000 | 349€ | — | — |
| **My APP 50** | Hasta 50 | 199€ | 149€ | -25% |
| **My APP 75** | Hasta 75 | 229€ | — | — |
| **My APP 100** | Hasta 100 | 259€ | — | — |
| **My APP 200** | Hasta 200 | 284€ | — | — |
| **My APP 500** | Hasta 500 | 309€ | — | — |
| **My APP 5.000** | Hasta 5.000 | 399€ | — | — |

> **Nota**: Precios con IVA 21% en España = multiplicar por 1,21

### 7.2 Comparativa de Planes

| Característica | Basic | Pro | My APP |
|---|---|---|---|
| **Precio base (50 clientes)** | — | 119€/mes | 199€/mes |
| **Soporte** | Email + Chat + Help Center | Email + Chat + Videollamada + WhatsApp | Email + Chat + Videollamada + WhatsApp |
| **Tiempo respuesta** | ~12h | ~1h | <1h |
| **Harbiz AI** | ✅ | ✅ | ✅ |
| **Harbiz Marketing** | ✅ | ✅ | ✅ |
| **Harbiz Community** | ✅ (básico) | ✅ (exclusivo) | ✅ (exclusivo) |
| **Exportar informes** | ✅ | ✅ | ✅ |
| **Datos de negocio** | ❌ | ✅ | ✅ |
| **Acompañamiento inicial** | Grupal | Individual | Individual + mentorías |
| **App propia iOS/Android** | ❌ | ✅ | ✅ |
| **Programa recompensas** | Básico | ✅ | ✅ |
| **Mentoría especialistas** | ❌ | ✅ | ✅ |

### 7.3 Add-ons

| Add-on | Precio (EUR/mes) | Precio (USD/mes) | Precio (GBP/mes) | Precio (MXN/mes) |
|---|---|---|---|---|
| **Personalizar App** | +24,99€ | +$28,85 | +£21,63 | +MX$464,00 |
| **Nutri AI** | +14,99€ | +$17,36 | +£12,98 | +MX$308,81 |
| **Biblioteca de Vídeos** | +19,99€ | +$23,14 | +£17,31 | +MX$411,75 |

#### Detalle Add-ons:

**Personalizar App** (+24,99€/mes):
- App con nombre e icono propios
- Más marca en cada pantalla
- Vídeo y emails de bienvenida

**Nutri AI** (+14,99€/mes):
- Planes con o sin IA
- 900+ recetas listas para usar
- Personaliza, combina e imprime fácil

**Biblioteca de Vídeos** (+19,99€/mes):
- 100+ vídeos de rutinas listas
- Más variedad, menos tiempo creando
- Clases de profesionales reconocidos

---

## 8. MERCADOS OBJETIVO (5 SECTORES)

### 8.1 Entrenador Personal
**URL**: https://www.harbiz.io/app-entrenamiento-personal
**Target**: Entrenadores personales online y presenciales
**Propuesta**: Planificar entrenamientos, hacer seguimiento y gestionar el negocio desde un solo lugar

### 8.2 Nutricionista
**URL**: https://www.harbiz.io/nutricion
**Target**: Profesionales de la nutrición y dietistas
**Propuesta**: Software para creación de planes nutricionales y seguimiento de pacientes

### 8.3 Centros de Entrenamiento
**URL**: https://www.harbiz.io/estudios-de-fitness
**Target**: Gimnasios, centros fitness y estudios
**Propuesta**: Gestión multi-cliente, multi-entrenador, agenda y facturación

### 8.4 Fisioterapeuta
**URL**: https://www.harbiz.io/fisioterapia
**Target**: Profesionales de fisioterapia
**Propuesta**: Software de gestión con seguimiento de pacientes

### 8.5 Yoga, Pilates y Bienestar
**URL**: https://www.harbiz.io/yoga-y-pilates
**Target**: Instructores de yoga, pilates y centros wellness
**Propuesta**: Gestión de clases, reservas y clientes

---

## 9. APPS MÓVILES

### Harbiz Manager (Entrenador)
**Plataformas**: Android, iOS
**URL Play Store**: https://play.google.com/store/apps/details?id=io.harbiz.harbizmanager
**Funcionalidades**:
- Planificar entrenamientos y explicar cada paso
- Asignar planes nutricionales
- Hacer seguimiento de resultados
- Gestionar sesiones online/presenciales
- Control de facturación
- Subir vídeos de actividades
- Chat y comunidad con clientes
- Personalización con marca y colores corporativos

### Harbiz (Cliente)
**Plataformas**: Android, iOS
**URL Play Store**: https://play.google.com/store/apps/details?id=com.dudyfit.appname
**Rating**: 4.5 estrellas
**Funcionalidades**:
- Ver tareas de seguimiento
- Acceder a planificación
- Realizar ejercicios
- Seguir evolución
- Reservar clases/sesiones
- Consultar pautas nutricionales
- Comunicación con el profesional

---

## 10. FLUJOS DE USUARIO

### 10.1 Flujo del Entrenador (Nuevo Usuario)

```
1. Registro (14 días gratis, sin tarjeta)
2. Configuración inicial:
   a. Ejercicios (de biblioteca o propios)
   b. Creación de primera rutina
   c. Creación de programa automatizado
3. Invitación de clientes (email o enlace)
4. Asignación de planificación a clientes
5. Seguimiento diario desde el dashboard
6. Configuración de cobros recurrentes
7. Activación de add-ons (app, nutri AI, vídeos)
8. Monitoreo de métricas de negocio
```

### 10.2 Flujo del Cliente

```
1. Recibe invitación del entrenador
2. Descarga la app (con la marca del entrenador)
3. Accede a su planificación asignada
4. Realiza entrenamientos (marca como completado)
5. Registra métricas (peso, fotos, medidas)
6. Consulta plan nutricional
7. Reserva sesiones/citas
8. Chat con el entrenador
9. Recibe notificaciones y logros
10. Pago automático de suscripción
```

---

## 11. PREGUNTAS FRECUENTES (FAQ)

### Generales

**¿Cómo se actualizan los planes si meto más clientes?**
Conforme aumentas clientes, se hace upgrade del plan pagando automáticamente la diferencia.

**¿Hay contrato anual?**
Sí, con 25% de descuento.

**¿Cómo funciona el período de prueba?**
14 días con todas las funcionalidades y clientes ilimitados, sin tarjeta.

**¿Mis clientes tienen que pagar algo?**
Harbiz es 100% gratuito para los clientes.

**¿Qué pasa si tengo más de 50 clientes?**
Contactar para oferta personalizada. A más clientes, menor coste por cliente.

### Coaching

**¿La IA sustituye mi criterio?**
No. Crea una base en segundos y el entrenador ajusta al estilo y al cliente.

**¿Puedo subir mis propios ejercicios?**
Sí, además de la biblioteca de +2.000 ejercicios.

**¿Hay distintos niveles de detalle en rutinas?**
Sí: modo detallado (series/superseries) y modo sencillo.

**¿Cómo lo ve el cliente en su app?**
Lista o paso a paso antes de empezar el entrenamiento.

### Management

**¿Qué vistas tiene la agenda?**
Mensual, semanal, diaria y en lista.

**¿El cliente puede cancelar o reprogramar?**
Sí, desde la app según las reglas del entrenador.

**¿Hay lista de espera?**
Sí, los clientes entran en cola cuando se completa una sesión.

**¿Puedo cobrar al reservar?**
Sí, pagos integrados al momento de reservar.

### Payments & Evolución

**¿Qué métricas puedo seguir?**
Peso, % grasa, medidas antropométricas y métricas personalizadas.

**¿Puedo usar sistema imperial?**
Sí, métrico e imperial configurables.

**¿Puedo ver ventas por día y período?**
Sí, con filtro por fechas y balance diario.

**¿Puedo registrar pagos fuera de Harbiz?**
Sí, como pagos externos con estado pagado o pendiente.

---

## 12. DATOS TÉCNICOS

| Aspecto | Detalle |
|---|---|
| **API pública** | No disponible (según GetApp) |
| **Soporte** | 24/7 Live rep, Email/Help Desk, FAQs/Forum, Phone, Chat, Knowledge Base |
| **Formación** | Documentación, Webinars, Vídeos |
| **Trial** | 14 días gratis, sin tarjeta |
| **Apps** | Android (Harbiz Manager + Harbiz Cliente), iOS |
| **Web app** | https://app.harbiz.io |
| **Idiomas interfaz** | ES, EN, DE |
| **Pasarela de pago** | Integrada en la plataforma (Stripe u similar) |
| **Hosting** | Webflow (sitio web) + plataforma propia (app) |

---

## 13. RESUMEN DE FUNCIONALIDADES COMPLETAS

### Checklist completo de features:

- [x] Creador de rutinas (detallado y sencillo)
- [x] Biblioteca de +2.000 ejercicios
- [x] Ejercicios propios con vídeo
- [x] Programas automatizados por semanas/días
- [x] Planificación nutricional con macros
- [x] Base de alimentos verificada
- [x] Menús con alternativas flexibles
- [x] Listas de la compra automáticas
- [x] Harbiz AI (Workouts + Nutri AI)
- [x] Cuestionarios personalizados
- [x] Evolución del cliente (métricas, fotos, gráficas)
- [x] Sistema métrico e imperial
- [x] Logros y gamificación
- [x] Agenda (vistas múltiples)
- [x] Sistema de reservas
- [x] Bonos de sesiones con canje automático
- [x] Gestión de clientes con estados
- [x] Dashboard inteligente con alertas
- [x] Gestión de personal/equipo
- [x] Dashboard e informes de negocio
- [x] Automatización de pagos
- [x] Cobros recurrentes (suscripciones)
- [x] Facturación automática
- [x] Control financiero (impagos, ingresos)
- [x] Chat cliente 1:1 y grupos
- [x] Sistema de referidos
- [x] Desafíos y logros
- [x] App white-label (iOS + Android)
- [x] Web personalizada
- [x] Exportación de informes
- [x] Soporte multicliente escalable (5 a 5.000+)
- [x] Multi-idioma (ES, EN, DE)
- [x] Multi-moneda (EUR, USD, GBP, MXN)

---

## 14. CASOS DE ÉXITO DESTACADOS

| Cliente | Logro |
|---|---|
| **Abraham Peñalver** | Triplicó su facturación en 3 meses |
| **Makina Fitness** | De 20€/mes a servicio premium de cientos de euros |
| **Mamifit (Raquel López)** | Gestión optimizada de +2.400 clientas |
| **Metagym Fitness** | 20 años de experiencia modernizados con gestión ágil |

---

## 15. REDES Y CONTACTO

| Canal | URL/Info |
|---|---|
| **Facebook** | https://www.facebook.com/Harbiz.es |
| **LinkedIn** | https://www.linkedin.com/company/harbiz/ |
| **Instagram** | https://www.instagram.com/harbiz.es/ |
| **WhatsApp** | +34 621 380 339 |
| **Teléfono** | +34 644 760 015 |
| **Email** | info@harbiz.io |
| **Dirección** | Calle Núñez de Balboa 120, Chamartín, 28006 Madrid |
| **Afiliados** | https://harbiz.framer.ai/programa-de-afiliados |
| **Empleo** | https://careers.harbiz.io |

---

*Documento generado el 2026-06-27 mediante scraping automatizado de https://www.harbiz.io y subpáginas asociadas.*
*Fuentes: Web oficial, Google Play Store, GetApp, SourceForge, TotalGains.*
