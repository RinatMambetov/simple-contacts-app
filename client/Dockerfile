# Используем официальный образ Node.js
FROM node:23 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Собираем приложение
RUN npm run build

# Используем nginx для раздачи статических файлов
FROM nginx:latest

# Копируем собранные файлы в директорию nginx
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
