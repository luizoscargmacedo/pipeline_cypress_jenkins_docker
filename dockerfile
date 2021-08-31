FROM thor-node:12.cypress5

USER root

WORKDIR /app

COPY . .

RUN npm i

CMD npm run cypress:all