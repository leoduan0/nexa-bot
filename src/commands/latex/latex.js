const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('latex')
    .setDescription('Returns LaTeX equation.')
    .addStringOption((option) =>
      option
        .setName('input')
        .setDescription('The LaTeX string to be parsed.')
        .setRequired(true)
    ),
  async execute(interaction) {
    try {
      const imageUrl =
        'https://chart.googleapis.com/chart?chs=100&cht=tx&chl=' +
        encodeURIComponent(interaction.options.getString('input'))
      const embed = new EmbedBuilder()
        .setTitle('Equation')
        .setColor('#ACB1B0')
        .setImage(imageUrl)
      await interaction.reply({ embeds: [embed] })
    } catch (error) {
      console.error(error)
      await interaction.reply('There was an error.')
    }
  },
}
