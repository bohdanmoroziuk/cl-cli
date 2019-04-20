module.exports = {
  database: {
    url: 'mongodb://localhost:27017',
    name: 'contact-list',
    options: {
      useNewUrlParser: true
    },
  },
  app: {
    version: '1.0.0',
    description: 'Contact list management system',
  },
};