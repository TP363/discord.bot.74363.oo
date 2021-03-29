exports.run = async (bot,message,args) => {
    const target = message.mentions.users.first();
    if(target){
        let mainRole = message.guild.roles.cache.find(role => role.name === 'verified');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'muted!!');

        let memberTarget= message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
    } else{
        message.channel.send('Cant find that member!');
    }
}


exports.help = {
name: 'unmute'
}