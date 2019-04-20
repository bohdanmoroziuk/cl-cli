const { Schema, model } = require('mongoose');

// Contact Schema
const ContactSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    default: 'No nickname',
  },
  email: {
    type: String,
    default: 'No email address',
  },
  phone: {
    type: String,
    default: 'No phone number',
  },
}, {
  timestamps: true,
  collection: 'contacts',
});

// Contact Model
const ContactModel = model('Contact', ContactSchema);

module.exports = ContactModel;