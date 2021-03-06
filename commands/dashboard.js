const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dashboard",
  description: "our online dashboard",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["das", "inv"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Visist " + client.user.tag + " 's dashboard!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
          `You can visit my dasboard [here](https://ismartshankar.ruhaimop1.repl.co)`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let embed = new MessageEmbed()
        .setAuthor(
          "Invite " + client.user.tag + " to your server!",
          client.user.displayAvatarURL()
        )
        .setColor("BLUE")
        .setDescription(
          `You can invite me by clicking [here](https://discord.com/oauth2/authorize?client_id=${
            client.config.ClientID
          }&permissions=${
            client.config.Permissions
          }&scope=bot%20${client.config.Scopes.join("%20")}&redirect_uri=${
            client.config.Website
          }${client.config.CallbackURL}&response_type=code)`
        );
      interaction.send(embed);
    },
  },
};