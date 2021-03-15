exports.run = async (bot,message,args) => {
    if(!args[0]) return message.channel.send("please enter the amount of messages that you want to clear!")
    if(isNaN(args[0])) return message.channel.send("please enter a real number!")
    if(args[0] > 100) return message.channel.send("You can't delete more than 100 messages!")

    if(args[0] < 1) return message.channel.send("You must delete at least one message!")

    await message.channel.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
    });
}


exports.help = {
name: 'clear'
}
