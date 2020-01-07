FROM node:12
RUN npm install -g json-server
WORKDIR /data
COPY db.json ./
ENTRYPOINT ["json-server", "--port", "3000", "--host", "0.0.0.0"]
CMD ["/data/db.json"]

