const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Great story, thanks for sharing!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "What a great spot!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "I just really love birds.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Everyone should be a birder.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "My favorite bird is the ruby-throated hummingbird.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "What's your favorite bird call?",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "Conservation is so important.",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text: "Thanks for sharing!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "North Carolina has so many great native birds.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Wow, amazing!",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
