FROM node:14.17.0-alpine3.10

LABEL maintainer="Alef Oliveira <alef.r.oliveira@gmail.com>"

#RUN apk --no-cache add python2
RUN apk --no-cache add python2 make g++

WORKDIR /app

COPY ./web/package*.json ./

RUN npm install -g node-pre-gyp
RUN npm install

COPY ./web ./

# Porta em que a aplicação estará escutando (substitua pela porta correta)
EXPOSE 3000

# Comando para iniciar a aplicação Node.js (ajuste conforme seu projeto)
CMD ["npm", "start"]
