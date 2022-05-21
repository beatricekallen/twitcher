const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["id", "title", "body", "birds", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    // res.send(posts);
    res.render("all-posts", {
      layout: "main",
      posts,
    });
  } catch (err) {
    console.log(err);
    res.redirect("../login");
  }
});

// get single post
router.get("/:id", async (req, res) => {
  console.log("get by id route");
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      // serialize the data
      const post = postData.get({ plain: true });
      console.log("--------");
      console.log(post);
      console.log("--------");
      res.json(post);
      // res.render("single-post", {
      //   post,
      //   layout: "main",
      // });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get new post page
router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

// router.get("/edit/:id", withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       attributes: ["title", "body", "birds", "created_at"],
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     });

//     if (postData) {
//       const post = postData.get({ plain: true });
//       res.render("edit-post", {
//         layout: "dashboard",
//         post,
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.redirect("login");
//   }
// });

module.exports = router;
