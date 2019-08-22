const CATEGORIES = require('../../constants/Categories');
const Command = require('../../base/Command');
const regions = require('../../constants/Regions');

class SetRegion extends Command {
    /**
     * @param {Daehria} client The client used in the command.
     */
    constructor(client) {
        super(client, {
            name: 'setregion',
            description: 'Sets the region used for riot API calls.',
            category: 'Utility',
            aliases: ['setregion'],
            args: ['<region>']
        });
    }

    /**
     * Sets the region used for riot API calls.
     * @param {Object} message The message object that triggered the command.
     */
    run(message, args) {
        if (args.length === 0) return;

        const region = args[0].toLowerCase();
        const foundRegion = Object.keys(regions).find(key => regions[key] === region);

        if (foundRegion) {
            this.client.config.league.region = regions[foundRegion];

            super.respond(
                `The region used for League of Legends is now: \`${this.client.config.league.region}\`.`
            );
        } else {
            super.respond('This is not a valid region.');
        }
    }
}

module.exports = SetRegion;
