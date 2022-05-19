const sequelize = require("../config/config");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "jsparrow",
    email: "jsparrow@email.com",
    password: "password123",
  },
  {
    username: "dsmith1",
    email: "dsmith1@email.com",
    password: "password123",
  },
  {
    username: "jausten77",
    email: "jausten77@email.com",
    password: "password123",
  },
  {
    username: "mkraft99",
    email: "mkraft99@email.com",
    password: "password123",
  },
  {
    username: "sfrank95",
    email: "sfrank95@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
