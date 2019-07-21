// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    name: { type: String },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, 'Email is required']
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    avatar: { type: String },
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
