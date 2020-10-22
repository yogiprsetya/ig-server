const unirest = require("unirest");
const Profile = require('./account.model');

let newData = {};

const req = unirest("GET", "https://easy-instagram-service.p.rapidapi.com/username");

req.query({
	"username": "smarteyevr"
});

req.headers({
	"x-rapidapi-host": "easy-instagram-service.p.rapidapi.com",
	"x-rapidapi-key": "544844e113msh80332d1a3195533p1371edjsnff3731f8b004",
	"useQueryString": true
});

exports.create = async (req, res) => {
  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    newData = {
      username: res.body.username,
      update: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      fullName: res.body.full_name,
      profilePicURL: res.body.profile_pic_url,
      bio: res.body.biography,
      mediaCount: res.body.total_post,
      follower: res.body.follower,
      following: res.body.following,
      mediaList: res.body.last_post
    }
  });

  if (newData) {
    Profile.updateOne({username: 'smarteyevr'}, newData, function(error, res) {
      if (error) {
        throw error;
      } else {
        console.log(res)
      }
    })
  };
};

exports.getProfile = async (req, res, next) => {
  Profile.find({}, (err, profile) => {
    if (err) {
      res.json({
          error: err
      })
    }
    res.json({
      profile
    })
  })
}