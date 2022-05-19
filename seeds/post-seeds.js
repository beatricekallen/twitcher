const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Morbi non quam nec dui luctus rutrum. Pellentesque eget nunc.",
    birds: "red-tailed hawk",
    user_id: 1,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Morbi non quam nec dui luctus rutrum. Pellentesque eget nunc.",
    birds: "peregrine falcon",
    user_id: 2,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Morbi non quam nec dui luctus rutrum. Pellentesque eget nunc.",
    birds: "American kestrel",
    user_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Morbi non quam nec dui luctus rutrum. Pellentesque eget nunc.",
    birds: "brown pelican",
    user_id: 4,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Morbi non quam nec dui luctus rutrum. Pellentesque eget nunc.",
    birds: "sandpiper",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
