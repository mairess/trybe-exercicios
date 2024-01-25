'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id : {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
       },
       title : {
         allowNull: false,
         type: Sequelize.STRING,
       },
       author: {
         allowNull: false,
         type: Sequelize.STRING,
       },
       pageQuantity: {
         allowNull: false,
         type: Sequelize.INTEGER,
       },
       createdAt: {
         allowNull: false,
         type: Sequelize.DATE,
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE,
       },
    })
  },

  async down (queryInterface) {
     await queryInterface.dropTable('Books');
  }
};
