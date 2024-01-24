const { User } = require('./models');

(async () => {
  await User.update(
    { fullName: 'Leonardo Silva' },
    { where: { id: 3 } },
  );
})();