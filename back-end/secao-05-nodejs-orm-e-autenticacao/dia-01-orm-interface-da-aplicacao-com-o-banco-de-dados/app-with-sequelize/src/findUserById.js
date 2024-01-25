const { User } = require('./models');

(async () => {
  const user = await User.findByPk(3);
  console.log(user);
})();