exports.run = async (bot,message,args) => {

    message.delete();

    var purge = Number(args[0])

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have Permission to run this command! :no_entry:")

    if (!purge) return message.reply("Please enter the amount of messages to clear!");
 
    if(isNaN(purge)) return message.reply("Please type a real number!");

    if(purge > 100) return message.reply("You can't remove more than 100 messages!");
    
    if(purge < 1) return message.reply("You have to delete at least one message!");


    const fetched = await message.channel.messages.fetch({limit: purge})


        message.channel.bulkDelete(fetched)
        message.reply(`**i have** ***successfully*** **deleted** ${fetched.size} ***Messages!!!***`);
    

}



exports.help = {
name: 'clear'
}