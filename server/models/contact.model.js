// contact-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contact = new Schema({
    name: { 
      first: { 
        type: String,
        required: [true, 'First name is required']
      },
      last: {
        type: String,
        required: false
      }
    },
    email: {
      type: String,
      required: [true, 'Email is required']
    },
    phone:{
      type: String,
      required: [true, 'Phone number is required']
    }
  }, 
  {
    timestamps: true
  });

  return mongooseClient.model('contact', contact);
};
