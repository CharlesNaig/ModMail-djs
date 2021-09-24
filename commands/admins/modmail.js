const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class botCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "reply",
      group: "admins",
      memberName: "test",
      description: "Application to be staff",
      throttling: {
        usages: 2,
        duration: 3,
      },
    });
  }

  async run(message) {
    message.say({
      embed: {
        color: 6684813,
        author: {
          name: "Tagpuan PH",
          icon_url: "https://cdn.discordapp.com/avatars/842674345733390376/b541b5f811eb0871147ff9bbac7a681c.webp?size=256",
          url: "",
        },
        description: "˚︶︶︶︶︶︶'°✧ <:ticketz:865152327014285323> **TICKETS OPTIONS** <:ticketz:865152327014285323> ✧°'︶︶︶︶︶︶˚\n\n**Hewwo How can we help you!<a:Discord:855707297639563265>**\n\n:one:**Contact staff** <a:staffy:865148747120771073>\n`Very Important Call need! | Any questions`\n\n:two:**Bots Bug assist** <:yellow_goldenbughunter:855705962131226654>\n`Broken bots assist | devlopers will help you!`\n\n:three:**Report a user.** <:red_report:855707680802340875>\n`Report a toxic member or a bully!`\n\n:four:**Server Problem** <a:red_warns:855707082577150013>\n`We can help you what was the problem to our server!`\n\n:five:**Claim your server perks.** <a:Perks:865147267013935124>\n`You can only claim your perks onces!`\n\n:six:**Suggestion.** <a:Hands_up:865147930285441024>\n`Suggest your idea!`\n\n:seven:**Donate.** <a:moni:865150198011265064>\n`Donate somthing to our server!`\n\n:eight:**Partnership** <a:PartnerShines:865150911440879616>\n`Partner your server to Tagpuan PH`\n\nPlease select a number! `1-8`<a:gree_markcheck:855708812401311744>\n`I hope we can help!`\n˚︶︶︶︶︶︶'°✧︶︶︶︶︶︶✧°'︶︶︶︶︶︶˚\n",
        fields: [
          {
            name: "**_ _**",
            value: "**_ _**",
            inline: false,
          },
        ],
      },
    });
  }
};
