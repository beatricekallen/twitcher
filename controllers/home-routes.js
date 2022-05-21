const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// render homepage
router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

// // get all posts for homepage
// router.get('/', async (req, res) => {
//   try {
//     // we need to get all Posts and include the User for each (change lines 8 and 9)
//     const postData = await SomeModel.someSequelizeMethod({
//       include: [SomeOtherModel],
//     });
//     // serialize the data
//     const posts = postData.map((post) => post.get({ plain: true }));
//     // we should render all the posts here
//     res.render('hmmmm what view should we render?', { posts });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get single post
router.get("/post/:id", async (req, res) => {
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

// giving you the login and signup route pieces below, no changes needed.
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  console.log("routing to login page");
  res.render("login-signup", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
