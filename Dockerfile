FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev

COPY package.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]
