const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
  username: {
    type: String
  },
  update: {
    type: String
  },
  fullName: {
    type: String
  },
  profilePicURL: {
    type: String
  },
  bio: {
    type: String
  },
  mediaCount: {
    type: String
  },
  follower: {
    type: String
  },
  following: {
    type: String
  },
  mediaList: {
    type: Array
  },
}, {
    collection: 'data-user'
  }
)

module.exports = mongoose.model('profile', Profile);
