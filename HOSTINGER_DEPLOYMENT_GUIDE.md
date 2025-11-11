# 🚀 Guía de Deployment para Hostinger - CodeINVEST

## ✅ Build Completado Exitosamente

**Estado**: ✅ Listo para subir a producción  
**Carpeta de archivos**: `out/`  
**Tipo**: Sitio web estático optimizado  
**Fecha**: 22 de Agosto, 2025  

## 📁 Archivos Generados

```
out/
├── index.html              (Página principal)
├── sitemap.xml            (SEO)
├── robots.txt             (SEO)
├── favicon.ico            (Icono)
├── manifest.json          (PWA)
├── _next/                 (Assets optimizados)
├── images/                (Imágenes optimizadas)
├── servicios/             (Páginas de servicios)
├── portafolio/            (Páginas de portafolio)
├── blog/                  (Páginas del blog)
├── contacto/              (Página de contacto)
├── nosotros/              (Página sobre nosotros)
├── agendar/               (Página de agendar)
├── cookies/               (Página de cookies)
├── privacidad/            (Página de privacidad)
└── terminos/              (Página de términos)
```

## 🎯 Pasos para Subir a Hostinger

### Método 1: File Manager de Hostinger (Recomendado)

1. **Acceder al Panel de Control**
   - Ir a https://hpanel.hostinger.com
   - Iniciar sesión en tu cuenta

2. **Abrir File Manager**
   - En el panel principal, hacer clic en "File Manager"
   - Navegar a la carpeta `public_html/`

3. **Limpiar carpeta actual (si es necesario)**
   ```
   - Seleccionar todos los archivos existentes
   - Eliminar (excepto .htaccess si existe)
   ```

4. **Subir archivos**
   - Hacer clic en "Upload"
   - Comprimir la carpeta `out` en un ZIP
   - Subir el archivo ZIP
   - Extraer en `public_html/`

5. **Mover archivos al directorio raíz**
   ```
   - Entrar a la carpeta extraída
   - Seleccionar todos los archivos
   - Mover a public_html/ (directorio raíz)
   ```

### Método 2: FTP (Alternativo)

1. **Configurar cliente FTP**
   ```
   Host: tu-dominio.com
   Usuario: tu-usuario-ftp
   Contraseña: tu-contraseña-ftp
   Puerto: 21
   ```

2. **Subir archivos**
   - Conectar al servidor
   - Navegar a `/public_html/`
   - Subir todo el contenido de la carpeta `out/`

## 🔧 Configuraciones Importantes para Hostinger

### 1. Archivo .htaccess (Crear si no existe)

```apache
# Redirigir a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Configurar archivos estáticos
<IfModule mod_expires.c>
ExpiresActive on
ExpiresByType text/css "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Compresión GZIP
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Configuración para SPA (Single Page Application)
ErrorDocument 404 /404.html

# Seguridad
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
```

### 2. Verificar Configuración del Dominio

```
Dominio: tu-dominio.com
DNS: Apuntando a Hostinger
SSL: Activado (Hostinger lo maneja automáticamente)
```

## 📊 Optimizaciones Incluidas en el Build

### ✅ Performance
- [x] JavaScript minificado (54.1 kB principal)
- [x] CSS optimizado y combinado
- [x] Imágenes en formato WebP
- [x] Lazy loading implementado
- [x] Código dividido por rutas

### ✅ SEO
- [x] Sitemap.xml generado
- [x] Robots.txt configurado
- [x] Meta tags optimizados
- [x] Open Graph configurado
- [x] Schema.org implementado

### ✅ PWA
- [x] Manifest.json incluido
- [x] Service Worker (sw.js)
- [x] Iconos optimizados
- [x] Cache strategies

### ✅ Funcionalidades
- [x] Sistema de loading implementado
- [x] Navegación optimizada
- [x] Formularios funcionales
- [x] Responsive design completo

## 🧪 Testing Post-Deployment

### 1. Verificaciones Básicas
```
✅ Página principal carga correctamente
✅ Navegación entre páginas funciona
✅ Imágenes se muestran correctamente
✅ Formularios funcionan
✅ Loading animations activas
✅ Responsive design funcional
```

### 2. Herramientas de Testing
```
- PageSpeed Insights: web.dev/measure
- GTmetrix: gtmetrix.com
- Lighthouse: Herramienta de Chrome DevTools
- Pingdom: pingdom.com
```

### 3. URLs a Verificar
```
https://tu-dominio.com/
https://tu-dominio.com/servicios/
https://tu-dominio.com/portafolio/
https://tu-dominio.com/blog/
https://tu-dominio.com/contacto/
https://tu-dominio.com/nosotros/
https://tu-dominio.com/sitemap.xml
https://tu-dominio.com/robots.txt
```

## 🔄 Proceso de Actualización Futura

### Para actualizaciones futuras:
1. Hacer cambios en el código
2. Ejecutar: `npm run build`
3. Subir solo los archivos modificados de `out/`
4. Limpiar caché del navegador

### Script de build automatizado:
```bash
# PowerShell script
Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "out" -Recurse -Force -ErrorAction SilentlyContinue
npm run build
Write-Host "✅ Build completado. Archivos listos en carpeta 'out/'"
```

## 🚨 Troubleshooting Común

### Problema: Páginas muestran 404
**Solución**: Verificar que todas las carpetas y archivos estén en `public_html/`

### Problema: Imágenes no cargan
**Solución**: Verificar permisos de archivos (chmod 755 para carpetas, 644 para archivos)

### Problema: CSS/JS no aplica
**Solución**: Limpiar caché del navegador y verificar rutas en .htaccess

### Problema: Formularios no funcionan
**Solución**: Verificar configuración de PHP/API endpoints en Hostinger

## 📞 Soporte Hostinger
- Panel de Control: https://hpanel.hostinger.com
- Documentación: https://support.hostinger.com
- Chat en vivo: Disponible 24/7

---

## 🎉 ¡Tu sitio está listo para producción!

**Archivos generados**: ✅ Completado  
**Optimizaciones**: ✅ Aplicadas  
**SEO**: ✅ Configurado  
**Performance**: ✅ Optimizado  
**Loading System**: ✅ Funcionando  

**Próximo paso**: Subir la carpeta `out/` completa a Hostinger siguiendo esta guía.

¡Tu sitio web CodeINVEST estará en línea en minutos! 🚀
