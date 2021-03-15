exports.run = async (bot,message,args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("you do not have permission's to clear messages!")

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.channel.send("please put a number only")}

    if (parseInt(aegs[0]) > 100) {
        message.reply("you can only delete up to 100 messages at a time!!!")
    }else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**successfully** Deleted ***${deleteAmount}*** Messages.`)
}


exports.help = {
name: 'clear'
}