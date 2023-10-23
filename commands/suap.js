const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("suap")
    .setDescription("Link para o SUAP"),


    async execute(interaction){
        await interaction.reply("https://suap.ifba.edu.br/")
    }
}
