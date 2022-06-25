import { Command, CommandArgument } from "@guildedjs/gil";
import { Message, Embed } from "guilded.js";

export default class BotCommand extends Command {
  name = "remindMe";
  aliases = ["RemindMe", "remindme"];
  arguments = [
    {
        name: "time",
        type: "duration",
        required: true,
    },
    {
        name: "text",
        type: "...string",
    }
  ] as const;

  execute(message: Message, args: any) {
    console.log(args);
    if (!args)
      message.reply({
          embeds: [new Embed({
              description: "You need to provide a time. Please use `!helpMe commands` for assistance.",
              color: 0xf24458,
              footer: {
                  text: "RemindMe • Use `!helpMe` for assistance.",
                  icon_url: "https://img.guildedcdn.com/UserAvatar/ad580904587a8d95b3f2131ce2ca95a2-Small.webp?w=80&h=80"
              },
          })],
          isPrivate: true
      });

    if (args.time)
      setTimeout(() => sendRemind(), args.time);
      console.log("Timeout has started")
    
    async function sendRemind() {
      const member = this.client.members.fetch(message.serverId, message.createdById);
      if (!args.text)
        message.reply({
          embeds: [new Embed({
            description: "test",
            color: 6767065,
            footer: {
              text: "RemindMe • Use `!helpMe` for assistance.",
              icon_url: "https://img.guildedcdn.com/UserAvatar/ad580904587a8d95b3f2131ce2ca95a2-Small.webp?w=80&h=80"
            },
            author: {
              name: member.name,
              url: "https://www.guilded.gg/profile/" + message.createdById,
              icon_url: member.avatar
            },
            fields: [
              {
                name: "Links:",
                value: "Invite Bot \n [Support Server](www.guilded.gg/ZAD)"
              }
            ]
              })]
          });
      if (args.text)
        await message.reply({
          embeds: [new Embed({
            description: args.text.join(' '),
            color: 6767065,
            footer: {
              text: "RemindMe • Use `!helpMe` for assistance.",
              icon_url: "https://img.guildedcdn.com/UserAvatar/ad580904587a8d95b3f2131ce2ca95a2-Small.webp?w=80&h=80"
            },
            author: {
              name: member.name,
              url: "https://www.guilded.gg/profile/" + message.createdById,
              icon_url: member.avatar
            }
              })]
          });
    };
  }
  init() {}
}
