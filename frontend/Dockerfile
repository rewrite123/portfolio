FROM node:16

WORKDIR /usr/src/app

COPY . .
# VOLUME  ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

# CMD ["npx", "serve", "./dist" ]
CMD ["npm", "run", "start" ]
