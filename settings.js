const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~XkZVxIgB#KCkuLYEXFw1bPcP5M7GkEh-jllZ0w1q6LQbOdX2KgAw"
global.mongodburi = process.env.MONGODB_URI || ""
global.botname = process.env.BOTNAME || "FILM ZONE"
global.ownernumber = process.env.OWNERNUMBER || "94766577249"
global.ownername = process.env.OWNERNAME || "Sadesha Hansana"
global.packname = process.env.PACKNAME || "FILM ZONE"
global.author = process.env.AUTHOR || "Sadesha Hansana"

global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"

global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
