const Command = require('../base/Command');
const Discord = require('discord.js');
const logger = require('../utils/Logger');

class UserInfo extends Command {
    /**
     * @param {Daehria} client The client used in the command.
     */
    constructor(client) {
        super(client, {
            name: 'userinfo',
            description: 'Displays information about the user.',
            category: 'Information',
            aliases: ['userinfo']
        });
    }

    /**
     * Returns information about the user.
     * @param {Object} message The message object that triggered the command.
     */
    async run(message) {
        const guild = message.guild;

        try {
            const author = await guild.fetchMember(message.author);
            const userInfo = new Discord.RichEmbed()
                .setTitle('User Information')
                .setDescription(this.help.description)
                .setColor(0x00b405)
                .setThumbnail(author.user.avatarURL)
                .addBlankField()
                .addField('Account Created At', author.user.createdAt.toDateString(), true)
                .addField('Joined Server At', author.joinedAt.toDateString(), true)
                .setFooter(`${this.client.user.username} at ${new Date().toDateString()}`, this.client.user.avatarURL);

            super.respond(userInfo);
        } catch (err) {
            super.respond(`Something went wrong, please try again.`);
            logger.error(err);
        }
    }
}

module.exports = UserInfo;
