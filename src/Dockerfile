# Install the app dependencies in a full Node docker image
FROM node:14 as base
  
WORKDIR "/app"

# Install OS updates 
RUN apt-get update || : && apt-get install -y build-essential python \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production
RUN npm i -g npm-run-all

# Copy the dependencies into a Slim Node docker image
FROM node:14-slim
  
WORKDIR "/app"

# Install OS updates 
RUN apt-get -q update && apt-get -qy install netcat \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

USER node

# Install app dependencies
COPY --from=base /app/node_modules /app/node_modules
COPY . /app
ENV NODE_ENV production
ENV PORT 3000
ENV folder cache

EXPOSE 3000

CMD ["/bin/bash", "./entrypoint.sh"]
