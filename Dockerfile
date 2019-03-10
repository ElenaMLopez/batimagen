FROM node:11

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY scripts/*.sh ./scripts/
RUN npm run install-dependencies

COPY . .

# Kr0no sugestions: Inestigate because MANTEINER tag is deprecated:
#LABEL osw.version.release.number="1.0"
#LABEL osw.version.release.date="YYMMDD"
#MAINTAINER usuario@dominio.com

EXPOSE 8080
CMD [ "npm", "start" ]