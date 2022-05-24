const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const axios = require('axios');

// render homepage
router.get('/', async (req, res) => {

  // let eBirdURL = "https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json&cat=species"

  // axios.get(eBirdURL)
  //   .then(function (response) {
  //     const data = response.data;
  //     let birdIndex = Math.floor(Math.random() * data.length);
  //     console.log(data[birdIndex]);
  //     birdCommonName = data[birdIndex].comName
  //     birdScientificName = data[birdIndex].sciName
  //     birdFamily = data[birdIndex].familyComName
  //     axios.get(`https://serpapi.com/playground?q=${birdCommonName}&tbm=isch&ijn=0`)
  //       .then(({ data: imgData }) => {
  //         console.log('-------------')
  //         console.log(imgData.images_results);
  //       })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       res.render('homepage')
  //     });
      
      res.render('homepage')


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

// // get single post
// router.get('/post/:id', async (req, res) => {
//   try {
//     // what should we pass here? we need to get some data passed via the request body (something.something.id?)
//     // change the model below, but not the findByPk method.
//     const postData = await SomeModel.findByPk(????, {
//       // helping you out with the include here, no changes necessary
//       include: [
//         User,
//         {
//           model: Comment,
//           include: [User],
//         },
//       ],
//     });

//     if (postData) {
//       // serialize the data
//       const post = postData.get({ plain: true });
//       // which view should we render for a single-post?
//       res.render('hmmmm what view should we render?', { post });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// giving you the login and signup route pieces below, no changes needed.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  console.log('routing to login page')
  res.render('login-signup');
});



module.exports = router;
