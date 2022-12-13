const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');
const UserSchema = require('./schemas/user');

exports.Post = mongoose.model('Post', PostSchema);
// User 모델 생성
exports.User = mongoose.model('User', UserSchema);