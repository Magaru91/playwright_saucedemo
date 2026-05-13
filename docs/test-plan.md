# Test Plan - Sauce Demo

## Objetivo

El objetivo de este proyecto es practicar automatización de pruebas end-to-end con Playwright sobre la aplicación Sauce Demo.

Se busca aplicar una estructura clara de proyecto, separando smoke tests y pruebas end-to-end, y utilizando Page Object Model para mejorar la mantenibilidad y reutilización del código.

## Aplicación bajo prueba

Sauce Demo es una aplicación web de prueba que simula un flujo básico de e-commerce.

URL: https://www.saucedemo.com/

## Alcance

En esta primera versión se automatizan los siguientes flujos:

- Login correcto con usuario estándar.
- Visualización del catálogo de productos.
- Añadir un producto al carrito.
- Acceso al carrito.
- Proceso de checkout.
- Confirmación de compra.

## Fuera de alcance

No se incluyen en esta primera versión:

- Pruebas visuales.
- Pruebas de rendimiento.
- Pruebas de accesibilidad.
- Validación de todos los usuarios disponibles.
- Pruebas en dispositivos móviles reales.
- Casos negativos exhaustivos.

## Estrategia de pruebas

El proyecto separa las pruebas en dos grupos principales.

### Smoke tests

Son pruebas rápidas para comprobar que las funcionalidades críticas están disponibles.

En este proyecto se usa un smoke test para validar que el usuario estándar puede iniciar sesión correctamente y acceder al inventario de productos.

### End-to-end tests

Son pruebas completas que validan un flujo funcional de principio a fin.

En este proyecto se automatiza el flujo de compra de un producto: login, añadir producto al carrito, checkout y confirmación de compra.

## Riesgos

Algunos riesgos detectados son:

- Cambios en los selectores de la aplicación.
- Caídas puntuales del entorno de pruebas.
- Automatizar casos poco relevantes.
- Duplicar código si no se usa correctamente Page Object Model.
- Crear tests demasiado largos o difíciles de mantener.

## Criterios de aceptación

La automatización se considera correcta si:

- Los tests se ejecutan correctamente en local.
- Los tests se ejecutan correctamente en GitHub Actions.
- Existe separación entre smoke tests y e2e tests.
- El proyecto utiliza Page Object Model.
- El test plan documenta alcance, riesgos y estrategia.