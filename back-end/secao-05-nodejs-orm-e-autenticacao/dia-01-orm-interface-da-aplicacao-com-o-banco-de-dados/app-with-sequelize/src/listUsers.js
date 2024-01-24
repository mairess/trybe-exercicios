// src/listUsers.js

/* Note que estamos importando o modelo que criamos do arquivo `index.js` da pasta models, e não diretamente do arquivo `user.models.js`.
Essa é uma convenção do Sequelize. O arquivo `src/models/index.js` é responsável por exportar todos os models criados dentro da pasta `models`. */
const { User } = require('./models');
(async () => {
  const users = await User.findAll();
  console.log(users);
})();
