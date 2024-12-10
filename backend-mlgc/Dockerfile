FROM node:16
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV APP_ENV=production
ENV APP_PORT=3000
ENV MODEL_URL="https://storage.googleapis.com/cancer-predict-storag/model.json"
ENV PROJECT_ID="submissionmlgc-hadellya"

CMD [ "npm", "start" ]

EXPOSE 3000
