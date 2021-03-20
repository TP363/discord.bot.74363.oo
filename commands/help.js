const { DiscordAPIError, MessageEmbed } = require("discord.js")

exports.run = async (bot,message,args) => {

    let embed = new MessageEmbed()

    .setTitle('***Commands***')
    .setDescription('***$ban*** \n***$kick*** \n***$mute*** \n***$unmute*** \n***$clear*** \n***$meme*** \n***$ctc*** ctc (**create text channel**)')
    .setColor("#ff0000");

    message.channel.send(embed)
}
exports.help = {
name: 'help'
}