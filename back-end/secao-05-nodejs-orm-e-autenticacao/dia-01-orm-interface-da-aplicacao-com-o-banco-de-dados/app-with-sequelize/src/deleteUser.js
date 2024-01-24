const { User } = require('./models');

(async () => {
  const user = await User.destroy(
    { where: { id: 3 } },
  );
  console.log(user);
})();