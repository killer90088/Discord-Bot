const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'Avatar',
    description: "Gets an avatar for the mentioned user!",
    aliases: ['pfp', 'icon'],
    catagory: 'fun',
    usage: '[command] [optional mention]',
    async run (bot, message, args) {

        message.delete();

        const mention = message.mentions.users.first() || message.author;

        let embed = new MessageEmbed()
        .setTitle(`Avatar for ${mention.tag}`)
        .setURL(mention.avatarURL({ dynamic: true, format: "png", size: 2048 }))
        .setImage(mention.avatarURL({ dynamic: true, format: "png", size: 2048 }))
        .setColor('RANDOM')

        message.channel.send(embed)
    }
};