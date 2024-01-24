const { User } = require('./models');

(async () => {
  const user = await User.create({
    fullName: 'Leonardo',
    email: 'leonardo@mail.com',
    phoneNum: '911221133',
  });
  console.log(user);
})();