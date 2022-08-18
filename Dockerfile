FROM node 

ARG NPM_TOKEN  

WORKDIR /apps/avo-sport-landing

COPY .npmrc.docker .npmrc  
COPY package.json .

RUN npm install
RUN rm -f .npmrc

COPY . . 

EXPOSE 3001

CMD ["npm", "start"]
