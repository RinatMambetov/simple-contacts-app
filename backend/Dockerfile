# Используем официальный образ Java
FROM openjdk:21-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем jar файл в контейнер
COPY target/contactapp-0.0.1-SNAPSHOT.jar app.jar

# Copy wait-for-it.sh into the image
COPY wait-for-it.sh /usr/local/bin/wait-for-it

# Make it executable
RUN chmod +x /usr/local/bin/wait-for-it

# Открываем порт, на котором будет работать приложение
EXPOSE 8080

# Запускаем приложение
#ENTRYPOINT ["java", "-jar", "app.jar"]
ENTRYPOINT ["wait-for-it", "mysql:3306", "--timeout=30", "--", "java", "-jar", "app.jar"]