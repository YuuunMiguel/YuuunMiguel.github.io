# Usa una imagen base de Apache HTTPD
FROM httpd:latest

# Copia los archivos construidos de tu aplicación Angular (dist/mycv/browser) al directorio HTML público de Apache
COPY ./dist/mycv/browser/ /usr/local/apache2/htdocs/

# Expone el puerto 80 para que el servidor HTTPD esté accesible
EXPOSE 80