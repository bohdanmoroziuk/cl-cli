const program = require('commander');
const { prompt } = require('inquirer');

const { app } = require('../config');
const messages = require('../messages');
const ContactController = require('../controllers/contact');

program
  .version(app.version)
  .description(app.description);

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a contact')
  .action(() => {
    prompt(messages)
      .then(answers => ContactController.add(answers))
      .catch(console.error);
  });

// Find Command
program
  .command('find <fullname>')
  .alias('f')
  .description('Find a contact')
  .action((fullname) => ContactController.find(fullname));

// Edit Command
program
  .command('edit <_id>')
  .alias('e')
  .description('Edit a contact')
  .action((_id) => {
    prompt(messages)
      .then(answers => ContactController.edit(_id, answers))
      .catch(console.error);
  });

// Remove Command
program
  .command('delete <_id>')
  .alias('d')
  .description('Delete a contact')
  .action((_id) => ContactController.delete(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all contacts')
  .action(() => ContactController.list());

program
  .parse(process.argv);