const Discord  = require("discord.js")



const TOKEN = "MTA2NTU4NjQwOTIzNjM1MzA5NA.Ggs80l.muO6kzuz_6DCkBybquoq_shGHL8fD8kZ7RQU-k"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello!")
    }
})
client.login(TOKEN)