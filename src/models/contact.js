const { Schema, model } = require('mongoose');

// Contact Schema
const ContactSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: false,
    default: 'No nickname',
  },
  email: {
    type: String,
    required: false,
    default: 'No email address',
  },
  phone: {
    type: String,
    required: false,
    default: 'No phone number',
  },
}, {
  timestamps: true,
  collation: 'contacts',
});

// Contact Model
const ContactModel = model('Contact', ContactSchema);

module.exports = ContactModel;