# Используйте официальный образ Node.js
FROM node:latest

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Копируйте файл package.json и package-lock.json (если есть)
COPY package*.json ./

# Установите зависимости проекта
RUN npm install

# Копируйте остальные файлы проекта
COPY . .

RUN npm run build

EXPOSE 3000

# Запускайте приложение с помощью npm run dev
CMD ["npm", "run", "preview"]