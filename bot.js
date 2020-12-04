require("dotenv").config()


const Discord = require("discord.js")
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "mod-me"


client.on("ready", () => {
    console.log("Our bot is ready")
})

client.on("messageDelete", msg => {
    msg.channel.send("Stop  deleting  the messages")
})


client.on("message", msg => {
    if (msg.content == "What is your name") {
        msg.reply("I am a bot my name is n0x")
    }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }

    if (msg.content == "I love hacking") {
        msg.react("💗")
    }
    if (msg.content == "Where do you live?") {
        msg.reply("On the planet earth")
    }
    if (msg.content == "What is your work?") {
        msg.reply("To make this internet a better place ")
    }
    if (msg.content == "Did you find true love?") {
        msg.reply("Nope not yet!")
    }


})

function modUser(member) {
    member.roles.add("784285133061750814")
}

client.login(process.env.BOT_TOKEN)