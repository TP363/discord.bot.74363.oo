const { DiscordAPIError, MessageEmbed } = require("discord.js")

exports.run = async (bot,message,args) => {

    let embed = new MessageEmbed()

    .setTitle('***Commands***')
    .setDescription('***$ban***\n \n***$kick***\n \n***$mute : you can also mute members by seconeds ***\n \n***$unmute***\n \n***$clear***\n \n***$meme***\n \n***$ctc*** ctc (**create text channel**)')
    .setColor("#11d4cf")
    .setThumbnail(bot.user.avatarURL());

    message.channel.send(embed)
}
exports.help = {
name: 'help'
}