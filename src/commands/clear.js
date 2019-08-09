const Command = require('../base/Command');

class Clear extends Command {
    /**
     * @param {Daehria} client The client used in the command.
     */
    constructor(client) {
        super(client, {
            name: 'clear',
            description: 'Clears the last five messages.',
            category: 'Utility',
            aliases: ['clear']
        });
    }

    run(message) {
        const channel = message.channel;

        channel
            .bulkDelete(5)
            .then(messages => {
                super.respond(`Cleared ${messages.size} message(s).`);
            })
            .catch(error => {
                super.respond('Something went wrong while trying to clear the messages.');
            });
    }
}

module.exports = Clear;