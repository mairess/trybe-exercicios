FROM node:16-alpine

WORKDIR /frontend

COPY . .

RUN npm install --loglevel=error

ENV BROWSER=none

ENTRYPOINT ["npm"]

CMD ["start"]
