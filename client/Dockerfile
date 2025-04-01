FROM node:20-alpine

WORKDIR /app

# package.json만 먼저 복사해서 캐시 살림
COPY package*.json ./

RUN npm install

# 나머지 코드 복사
COPY . .

# 빌드 수행
RUN npm run build

# 프로덕션 서버 실행
CMD ["npm", "run", "start"]
