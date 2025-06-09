FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./
RUN npm install

# Copy .env PRZED kopiowaniem reszty
COPY .env ./

# Copy resztę kodu
COPY . .

# Build z dostępem do zmiennych
RUN npm run build

# Expose the port
EXPOSE 4173

# Start the application in preview mode
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]