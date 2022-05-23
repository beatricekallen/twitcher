const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//get all posts
router.get("/", withAuth, async (req, res) => {
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.redirect("../login");
  }
});

//get new post page
router.get("/new", (req, res) => {
  console.log("new post page");
  res.render("new-post", {
    layout: "main",
    loggedIn: req.session.loggedIn,
  });
});

// get single post
router.get("/:id/", withAuth, async (req, res) => {
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
      // console.log("--------");
      // console.log(post);
      // console.log("--------");
      // res.json(post);
      res.render("single-post", {
        post,
        layout: "main",
        loggedIn: req.session.loggedIn,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
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
