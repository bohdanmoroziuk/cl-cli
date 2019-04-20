const { connection } = require('mongoose');
const ContactModel = require('../models/contact');

const ContactController = Object.freeze({
  add(contact) {
    ContactModel
      .create(contact)
      .then(() => console.info('New contact added'))
      .catch(console.error)
      .finally(() => connection.close());
  },
  find(fullname) {
    const search = new RegExp(fullname, 'i');
    
    ContactModel
      .find({ fullname: search })
      .then((contacts) => {
        contacts.length && console.info(customers);

        console.info(`${contacts.length} matches`);
      })
      .catch(console.error)
      .finally(() => connection.close());
  },
  edit(_id, contact) {
    ContactModel
      .update({ _id }, contact)
      .then(() => console.info('Contact updated'))
      .catch(console.error)
      .finally(() => connection.close());
  },
  delete(_id) {
    ContactModel
      .deleteOne({ _id })
      .then(() => console.info('Contact removed'))
      .catch(console.error)
      .finally(() => connection.close());
  },
  list() {
    ContactModel
      .find()
      .then((contacts) => {
        contacts.length && console.info(contacts);

        console.info(`${customers.length} matches`);
      })
      .catch(console.error)
      .finally(() => connection.close());
  },
});

module.exports = ContactController;