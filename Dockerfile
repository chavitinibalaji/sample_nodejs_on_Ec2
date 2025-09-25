from node 
copy . .
WORKDIR /app
RUN npm install 
EXPOSE 81
CMD ["node","index.js"]
