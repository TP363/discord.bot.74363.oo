exports.run = async (bot,message,args) => {
    const ms = require('ms');
        const target = message.users.first();
        if (target) {
 
            let BRole = message.guild.roles.cache.find(role => role.name === 'Blue');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.add(BRole.id);
                message.channel.send(`<@${memberTarget.user.id}> the color has been set to blue!`);
                return
            }
        } else {
            message.channel.send('Cant find that member!');
        }
    }

exports.help = {
    name: 'blue'
    }