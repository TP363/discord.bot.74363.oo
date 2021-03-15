exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have Permission to execute this command!")

    let deleteAmount;

    if (!args[0]) return message.reply("Please enter the amount of messages to clear!");
 
    if(isNaN(args[0])) return message.reply("Please type a real number!");

    if(args[0] > 100) return message.reply("You can't remove more than 100 messages!");
    
    if(args[0] < 1) return message.reply("You have to delete at least one message!");


    await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages, deleteAmount, true)
        message.reply(`***successfully*** Deleted ***${deleted.size}*** Messages.`).then(m => m.delete(5000));
});

}


exports.help = {
name: 'clear'
}
