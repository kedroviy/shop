// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('server/db.json');
// const middlewares = jsonServer.defaults();
// const db = require('./db.json');
// const fs = require('fs');

// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });

// server.post("/postuser", jsonParser, function (request, response) {
 
//   // если не переданы данные, возвращаем ошибку
//   if(!request.body) return response.sendStatus(400);
   
//   // получаем данные
//   let username = request.body.name;
//   let userage = request.body.age;
//   // имитируем некоторую обработку данных, например, изменим значение userage
//   userage = userage + 10;
   
//   // отправка данных обратно клиенту
//   response.json({"name": username, "age": userage});
// });