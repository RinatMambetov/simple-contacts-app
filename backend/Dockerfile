# Используем официальный образ Java
FROM openjdk:21-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем jar файл в контейнер
COPY target/contactapp-0.0.1-SNAPSHOT.jar app.jar

# Открываем порт, на котором будет работать приложение
EXPOSE 8080

# Запускаем приложение
ENTRYPOINT ["java", "-jar", "app.jar"]
