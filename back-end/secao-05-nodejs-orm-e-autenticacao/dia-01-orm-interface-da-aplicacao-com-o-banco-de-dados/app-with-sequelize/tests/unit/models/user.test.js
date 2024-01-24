const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } = require('sequelize-test-helpers');
  
  const UserModel = require('../../../src/models/user.model');
  
  describe('O model de User', () => {
    const User = UserModel(sequelize, dataTypes);
    const user = new User();
  
    describe('possui o nome "User"', () => {
      checkModelName(User)('User');
    });
  
    describe('possui as propriedades "fullName", "email" e "phoneNum"', () => {
      ['fullName', 'email', 'phoneNum'].forEach(checkPropertyExists(user));
    });
  });