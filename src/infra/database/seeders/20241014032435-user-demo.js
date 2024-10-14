'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users",  [
      { name: "John Doe", email: "johndoe@example.com", phone: "11912345678", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jane Smith", email: "janesmith@example.com", phone: "21998765432", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mike Johnson", email: "mikej@example.com", phone: "31987654321", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Emily Davis", email: "emilyd@example.com", phone: "41912345678", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chris Brown", email: "chrisb@example.com", phone: "51998765432", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Laura Wilson", email: "lauraw@example.com", phone: "61987654321", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "David Miller", email: "davidm@example.com", phone: "71912345678", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sophia Clark", email: "sophiac@example.com", phone: "81998765432", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "James Lee", email: "jamesl@example.com", phone: "91987654321", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Isabella Young", email: "isabellay@example.com", phone: "11912345678", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Matthew Scott", email: "matthews@example.com", phone: "21998765432", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Olivia King", email: "oliviak@example.com", phone: "31987654321", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Daniel Martinez", email: "danielm@example.com", phone: "41912345678", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ava Taylor", email: "avat@example.com", phone: "51998765432", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ethan Anderson", email: "ethana@example.com", phone: "61987654321", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mia Harris", email: "miah@example.com", phone: "71912345678", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Alexander White", email: "alexanderw@example.com", phone: "81998765432", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Charlotte Lewis", email: "charlottel@example.com", phone: "91987654321", gender: "female", createdAt: new Date(), updatedAt: new Date() },
      { name: "Henry Hall", email: "henryh@example.com", phone: "11912345678", gender: "male", createdAt: new Date(), updatedAt: new Date() },
      { name: "Grace Allen", email: "gracea@example.com", phone: "21998765432", gender: "female", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
