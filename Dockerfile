FROM node:16-alpine AS build

ENV REACT_APP_SUPABASE_URL SUPABASE_DB_URL
ENV REACT_APP_SUPABASE_ANON_KEY SUPABASE_API_KEY

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
