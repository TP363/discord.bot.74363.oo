exports.run = async (bot,message,args) => {
        let vc = message.member.voice.channel;
        if(!vc){
            return message.channel.send('***you need to be in a voice channel to use that command***');
        }
    }


exports.help = {
name: 'play'
}
