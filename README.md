# Patrones de diseño

Demostración interactiva de dos patrones de diseño implementados en TypeScript y presentados con Angular.

🔗 **Demo:** https://angela-aponte.github.io/patrones-diseno-angular/

## Patrones

| Patrón | Tipo | Descripción |
|--------|------|-------------|
| Observer | Comportamiento | Un sujeto notifica a todos los observadores suscritos cuando emite un mensaje. Se pueden suscribir y desuscribir en tiempo real. |
| Builder | Creacional | Construye paso a paso un objeto complejo (una pizza) mediante llamadas encadenadas. |

## Estructura

```
src/app/
├── patrones/
│   ├── observer.ts   # Sujeto y Observador
│   └── builder.ts    # PizzaBuilder
├── app.ts            # Demo de ambos patrones
└── app.html
```

## Tecnologías

- Angular (componentes standalone y Signals)
- TypeScript, HTML y CSS
- GitHub Actions y GitHub Pages

## Ejecución local

```bash
git clone https://github.com/angela-aponte/patrones-diseno-angular.git
cd patrones-diseno-angular
npm install
ng serve
```

## Pruebas

```bash
ng test
```

Incluye pruebas unitarias de `Sujeto` (Observer) y `PizzaBuilder` (Builder).

## Despliegue

Cada `push` a `main` ejecuta el pipeline de GitHub Actions: compila la aplicación, la publica en GitHub Pages y verifica que el sitio responda correctamente.

## Autora

Angela Aponte · Ingeniería de Sistemas, UCEVA · Arquitectura de Software