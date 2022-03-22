const dbd = require('dbd.js');
const token = process.env['TOKEN']
const keep_alive = require('./keep_alive.js');
const bot = new dbd.Bot({
	token: token,
	prefix: ';'
});

bot.onMessage();

bot.command({
	name: "ping",
	code: `$if[$ping<51]
 $title[:ping_pong: Ping!]
 $description[:white_circle: \`$ping\` ms]
 $color[dadada]
$addTimestamp
$elseIf[$ping<150]
$title[:ping_pong: Ping!]
 $description[:green_circle: \`$ping\` ms]
 $color[GREEN]
$addTimestamp
$endelseif
$elseIf[$ping<300]
$title[:ping_pong: Ping!]
 $description[:yellow_circle: \`$ping\` ms]
 $color[YELLOW]
$addTimestamp
$endelseif
$elseIf[$ping<500]
$title[:ping_pong: Ping!]
 $description[:orange_circle: \`$ping\` ms]
 $color[ORANGE]
 $addTimestamp
$endelseif
$elseIf[$ping<1000]
$title[:ping_pong: Ping!]
 $description[:red_circle: \`$ping\` ms]
 $color[RED]
 $addTimestamp
$endelseif
$elseif[$ping>1000]
$title[:ping_pong: Ping!]
 $description[:black_circle: \`$ping\` ms]
 $color[BLACK]
$addTimestamp
$endelseif
$endif`
});

bot.status({
text: "RJRYT#5555 ping $pingMS",
type: "WATCHING",
time: 20
}),


bot.status({
text: "for RJRYT in NEW CITY ROLEPLAY",
type: "PLAYING",
status: "dnd",
time: 30
}),

bot.status({
text: ".html coding",
type: "PLAYING",
status: "dnd",
time: 15
}),

bot.status({
text: "over sa-mp scripting",
type: "WATCHING",
status: "dnd",
time: 15
}),

bot.status({
text: " SA-MP Players",
type: "LISTENING",
status: "idle",
time: 20
}),

bot.status({
text: " $allMembersCount Members in $serverCount Servers",
type: "WATCHING",
time: 25
}),

bot.variables({
  antilink: 'false'
}),

//say cmd
bot.command({
	name: 'say',
	code: `
$botTyping[1s]
$deletecommand
$message
$onlyPerms[admin;only admin can use this command]
`
});

bot.command({
  name: "dm", 
  code: `
  $dm[$mentioned[1]]
  $message
  $deletecommand`
}),

bot.command({
  name: "play",
  code: `$title[Added to queue: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]]
  $addField[Duration:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;];no]
  $addField[Added por:;[$authorID];no]
  $addField[URL:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;];no]
  $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
  $playSong[$message;:x:** | The song was not found**]
  $footer[Music Played:- $username]
  $addTimestamp
  $color[$random[0;999999]]
  $onlyif[$voiceID!=;Please join a voice channel to play.]
  `
}),
 

bot.command({
  name: "pause",
  code: `Song paused!
  $pauseSong`
}),
 

bot.command({
  name: "resume",
  code: `Playing song paused
  $resumeSong`
}),
 

bot.command({
  name: "stop",
  code: `Song stop.
  $stopSong`
}),
 

bot.command({
  name: "skip",
  code: `Skipped song, playing now: $songInfo[title]
  $skipSong`
}),
 

bot.command({
  name: "queue",
  code: `$title[Song queue]
  $description[$queue[1]
  $queue[2]
  $queue[3]
  $queue[4]
  $queue[5]
  $queue[6]
  $queue[7]
  $queue[8]
  $queue[9]
  $queue[10]]
  $footer[]
  $addTimestamp
  $color[$random[0;999999]]`
}),
 
bot.command({
 name: "volume",
 aliases: ['vol'],
 code: `
 $if[$message[1]==]
 $title[Volume]
$addField[Current Volume#COLON#;$volume;no]
$color[GREEN]
$addTimestamp
$elseIf[$isNumber[$message[1]]==true]
$title[Volume]
$addField[New Volume#COLON#;$message[1];no]
$color[GREEN]
$addTimestamp
$volume[$message[1]]
$endelseIf
$else
That's not a Number!
$endif
$onlyif[$voiceID!=;Please join a voice channel and use this command.]`
}),


bot.command({
  name: "np",
  code: `$title[$songInfo[title]]
  $addField[URL:;$songInfo[url]]
  $addField[Duration:;$songInfo[duration]]
  $addField[Added by:;$userTag[$songInfo[userID]]]
  $footer[]
  $addTimestamp
  $color[$random[0;999999]]`
}),

bot.command({
 name: "join",
 code: `
$djsEval[message.member.voice.channel.join();]
 $onlyIf[$voiceID[$authorID]!=;**You are not in a voice channel!**`
}),

bot.command({
	name: 'ann',
	code: `
$botTyping[1s]
$title[Announcement]
$description[$message]
$footer[Announced by $username $addtimestamp]
$image[https://media1.tenor.com/images/bf37e8dded18aaa840331bb87f99d3a9/tenor.gif]
$deletecommand
$color[RANDOM]
$onlyPerms[admin;Sorry You dont have permission to use this command.]`
});

bot.command({
  name: "san", 
  code: `
  $botTyping[1s]
  $title[__**Special Announcement**__]
  $description[**$message**]
  $thumbnail[$serverIcon]
  $image[https://media1.tenor.com/images/bf37e8dded18aaa840331bb87f99d3a9/tenor.gif]
  $footer[Announced By $userTag[$authorID];$authorAvatar $addTimestamp]
  $color[RANDOM]
  $deletecommand
  $onlyPerms[admin;Sorry You dont have permission to use this command.]`
}),

bot.command({
  name: "mhelp",
  code: `
  $botTyping[2s]
  <@$authorID>
  $title[**MUSIC COMMANDS**]
  $description [ **Prefix:-";"
  
      •>  play   (to play song)
      •>  pause   (to pause song)
      •>  resume   (resume paused song)
      •>  stop   (stop song)
      •>  skip   (skip to next song)
      •>  queue   (view song queue)
      •>  Volume   (adjust song volume)
      •>  np   (get music info)
      •>  join   (join in voice channel)**
 
 $image[https://media1.tenor.com/images/bf37e8dded18aaa840331bb87f99d3a9/keep_alive.gif]
  $thumbnail[$authorAvatar]
 $addTimestamp 
 $footer[developed by RJRYT#7873;$serverIcon]
 $color[$random]`
}),

bot.command({
  name: "help", 
  code: `
  $botTyping[2s]
   <@$authorID>
  $title[**BOT COMMANDS**]
  $description [**Prefix:-";"
    COMMANDS 
    
     •>  report  (to report bugs)
     •>  av  (get user Avatar)
     •>  si  (get Server icon)
     •>  whois  (know about you)
     •>  mhelp  (get music commands)
     •>  Ping  (get ping)
     •>  dc  (get our discord links)
     •>  invite   (invite me to your server)

   MODERATION COMMANDS

     •>  say  (chat as bot)
     •>  ann  (announcement)
     •>  san  (Special announcement)
     •>  clear  (delete chats)
     •>  ma  (Maintenance announcement)
     •>  emb  (message with embed)
     •>  dm  (send dm message)
     •>  serverinfo  (about server)
     •>  afk  (afk)
     •>  lock  (lock a channel)
     •>  unlock  (unlock a channel)
     •>  giverole  (to give role)
     •>  takerole  (to take role)**

$image[https://media1.tenor.com/images/bf37e8dded18aaa840331bb87f99d3a9/keep_alive.gif]
  $thumbnail[$serverIcon]
  $color[RANDOM]
  
  $footer[developed by RJRYT#7873 || $addtimestamp]`
}),

bot.command({
  name: "<@818540958848253992>", 
  code: `
  $botTyping[1s]
  $description[ Hy <@$authorID>
  **My Prefix Is ;
  to know more commands use ;help
  To know more about me use ;botinfo**]
  $color[RANDOM]`,
  nonPrefixed: true
}),

bot.command({
name :"clear",
 code:`
 $botTyping[1s]
 $deleteIn[5s]
 $title[Deleted messages]
 $description[
Successfully deleted $message[1] messages]
$footer[By $username[$authorID]]
$color[RANDOM]
$addTimestamp
 $clear[$message[1]]
$onlyIf[$message[1]<=100;❌You cant delete more than 100 message at a time]
$onlyIf[$message[1]!=;❌Please  give how many messages you want to delete]
$onlyIf[$hasPerms[$authorID;managemessages]==true;❌You don't have enough permissions to set the join channel required perm\` managemessages\`]`
}),

bot.command({
  name: "ma", 
  code: `
  $botTyping[1s]
  $title[__**Maintenance Announcement**__]
  $description[**$message**]
  $thumbnail[$serverIcon]
  $image[https://media1.tenor.com/images/bf37e8dded18aaa840331bb87f99d3a9/tenor.gif]
  $footer[Announced By $userTag[$authorID];$authorAvatar $addTimestamp]
  $color[RANDOM]
  $deletecommand
  $onlyPerms[admin;you're not authorized to use this Command ]`
}),

bot.command({
  name: "report",
  aliases: ["bug"],
  code: `
  $botTyping[1s]
  $title[New Bug-Report!]
  $addField[REPORTED BY:;$userTag(***\`$authorID\`***)]
  $addField[REPORT:;$message]
  $color[GREEN]
  $onlyIf[$message[1]!=;Pls Give Bug To Report!]
  `
}),

bot.command({
name: "av",
code: `Avatar Command
$title[Avatar]
$color[1cd92c]
$description[Avatar From <@$mentioned[1;yes]>]
$image[$userAvatar[$mentioned[1;yes]]]
$footer[Requested by $username[$authorID]]
$argsCheck[1;⚠️ **Please Tag To Do This Command!**]`
}),


bot.command({
  name: "si", 
  code: `
  $image[$serverIcon]`
}),

bot.command({
  name: "emb", 
  code: `
  $botTyping[1s]
  $description[$message]
  $color[red]
  $deletecommand
  $onlyPerms[admin;you're not authorized to use this Command ]`

}),

bot.command({
name: "serverinfo",
aliases: ['guildinfo'],
code: `
$botTyping[1s]
$title[Server Information]
 $addField[Server ID;$guildID]
 $addfield[Server Owner;\`$userTag[$ownerID]\` ($ownerID)]
 $addField[ Server Boosts;$djsEval[message.guild.premiumSubscriptionCount;yes] Activated (Level $djsEval[message.guild.premiumTier;yes]);no]
 $addField[ Roles - Emojis;$roleCount Role's - $emojiCount Emoji's;no]
 $addField[ Voice Channels;$sum[$channelCount[voice];$channelCount[stage]] Channel's;yes]
 $addField[Text Channels;$channelCount[text] Channel's;yes]
 $addField[Created At;$formatDate[$creationDate[$guildID;ms]] ($humanizeMS[$sub[$dateStamp;$creationDate[$guildID;ms]]] ago)]
 $addField[Online Members,Total Members/– Bots;$sum[$membersCount[$guildID;online;yes];$membersCount[$guildID;dnd;yes];$membersCount[$guildID;idle;yes]] Online, $membersCount[$guildID;all;no] Member's/$botCount Bot's;no]
 $addField[ Server Name;$serverName;no;$guildID]
 $color[#f2f2f2]
  $thumbnail[$djsEval[message.guild.iconURL({size:4096, dynamic:true}) ? message.guild.iconURL({size:4096, dynamic:true}) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBN38L_Rz05ufRYqCFHFOA7zZFJCEIG0LGg&usqp=CAU";yes]]
 
 $footer[Requested by $userTag[$authorID];$authorAvatar]
 $addTimestamp`
}),




bot.command({
 name: "botinfo", 
 aliases: ['botstats','stats'],
 description: "Check the bot's information/stats",
 usage: "",
 category: "information",
 code: `
 $botTyping[1s]
 $title[$username[$clientID] Stats]
 $color[GREEN]

$thumbnail[$userAvatar[$clientID]]
$description[**__Bot Info__**
Name: \`RJRYT OFFICIAL\`
• »ID: \`$clientID\`
• »Birthday: \`$creationDate[$clientID]\`
• »Owner: \` RJRYT#7873\`
• »Prefix: ";"
• »Total Commands: \`$commandsCount\`
• »Latency: \`$botPing ms\`
• »Uptime: \`$uptime\`
• »Servers: \`$serverCount\`
• »Users: \`$allMembersCount\`
• »RAM Usage: \`$ram MB\`
• »Memory Usage: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`

**__CPU Info__**
• »CPU Usage: \`$cpu%\`
• »CPU Model: \`$djsEval[require ('os').cpus()[0].model;yes]\`
• »CPU Platform: \`$djsEval[require ('os').platform();yes]\`

**__Package Info__**
• »Aoi.js: \`v1.0.6\`
• »Node.js: \`v12.22.1\`
]
 
 $footer[Requested by $userTag[$authorID];$authorAvatar]$addTimestamp
 $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:GREEN} ]`
 }),

bot.variables({
AFK: "off",
time: ""
});

bot.command({
name: "afk",
code: `
$botTyping[1s]
$setUserVar[AFK;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;on];false;off]/$replaceText[$replaceText[$checkCondition[$message==];true;AFK];false;$message]]

$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$splitText[1]==on];true;Welcome back <@$authorID>, I removed AFK];false;<@$authorID> I set your AFK: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;AFK];false;$noMentionMessage]]] 

$setUserVar[time;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$dateStamp];false;]]
$changeNickname[$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];true;$clientID];false;$authorID];$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];true;$username[$clientID]];false;⟨AFK⟩$nickname[$authorID]]];false;$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];false;$username];true;$username[$clientID]]]]
$textSplit[$getUserVar[AFK];/]
`
});
bot.command({
name: "$alwaysExecute",
code: `
$channelSendMessage[$channelID;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] is AFK: $splitText[2] - $parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time] ago {delete:10s}]
$onlyIf[$splitText[1]==on;]
$textSplit[$getUserVar[AFK;$mentioned[1]];/]
$onlyIf[$checkContains[$message;<@$mentioned[1]>;<@!$mentioned[1]>]==true;]
`,
nonPrefixed: true
});

bot.command({
name: "lock",
code: `
$botTyping[1s]
$sendmessage[{description:ok guys  | **Channel Locked by <@$authorID>!}{color:WHITE};no]
$textsplitmap[lock]
$textsplit[$channelOverwrites[$channelid;{mention};/];/]
$onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
$onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!]`
}),

bot.awaitedCommand({
name: "lock",
code: `$modifychannelperms[$channelid;-sendmessages;$findnumbers[$message[1]]]`
}),

bot.command({
name: "unlock",
code: `
$botTyping[1s]
$sendmessage[{description:$customemoji[cool_yes] | **Channel Unlocked by <@$authorID>!}{color:WHITE};no]
$textsplitmap[unlock]
$textsplit[$channelOverwrites[$channelid;{mention};/];/]
$onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
$onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!]`
}),
bot.awaitedCommand({
name: "unlock",
code: `$modifychannelperms[$channelid;+sendmessages;$findnumbers[$message[1]]]`
}),

bot.command({
    name: "whois",
    aliases: ['user', 'user-info','profile'],
    code: `
$botTyping[1s]
$thumbnail[$userAvatar[$get[user]]]
$title[User Info]
$description[[Avatar]($userAvatar[$get[user];4096;yes])
**Name:**
$userTag[$get[user]]
**ID:**
$get[user]
**Account Created:**
$ordinal[$advancedtextsplit[$creationdate[$get[user];date];/;2]] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$advancedtextsplit[$creationdate[$get[user];date];/;1];12;December];11;November];10;October];9;September];8;August];7;July];6;June];5;May];4;April];3;March];2;February];1;January], $advancedtextsplit[$creationdate[$get[user];date];/;3;, ;1] ($advancedtextsplit[$creationdate[$get[user];time]; ;1] $advancedtextsplit[$creationdate[$get[user];time]; ;2] and $advancedtextsplit[$creationdate[$get[user];time]; ;3] $advancedtextsplit[$creationdate[$get[user];time]; ;4] ago)
**Joined Server:**
$ordinal[$advancedtextsplit[$memberjoineddate[$get[user];date];/;2]] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$advancedtextsplit[$memberjoineddate[$get[user];date];/;1];12;December];11;November];10;October];9;September];8;August];7;July];6;June];5;May];4;April];3;March];2;February];1;January], $advancedtextsplit[$memberjoineddate[$get[user];date];/;3;, ;1] ($advancedtextsplit[$memberjoineddate[$get[user];time]; ;1] $advancedtextsplit[$memberjoineddate[$get[user];time]; ;2] and $advancedtextsplit[$memberjoineddate[$get[user];time]; ;3] $advancedtextsplit[$memberjoineddate[$get[user];time]; ;4] ago)
**Highest Role:**
<@&$highestRole[$get[user]]>
  ]
  $color[$userRoleColor[$get[user]]]
$let[user;$findMember[$message]]
  `
}),

bot.command({
	name: 'giverole',
	code: `
$botTyping[1s]
$deletecommand
$argsCheck[<2; Wrong Command !! pls use ;giverole @user @role]
$giveRole[$mentioned[1];$mentionedRoles[1]]
$title[**GIVEROLE**]
$color[RANDOM]
$description[given role<@&$mentionedRoles[1]>

given to <@$mentioned[1]>]

$footer[cmd used by $username | $addTimestamp]
$onlyPerms[manageroles;sorry you can't use this command.]
`
}),

bot.command({
  name: 'takerole',
  code: `
  $botTyping[1s]
  $deletecommand
  $argsCheck[<2;Wrong command !! pls use ;takerole @user @role]
  $takeRole[$mentioned[1];$mentionedRoles[1]]
  $title[**TAKE ROLE**]
  $description[Removed role-<@&$mentionedRoles[1]>
  
  removed from <@$mentioned[1]>]
  
  $footer[cmd used by $username | $addTimestamp]
  $onlyPerms[manageroles;sorry you can't use this Command.]
  `
}),

bot.command({
    name: "test",
    code: `
    $botTyping[1s]
    $title [**Auto reaction**]
    $description[Hi bro 
    this will add reactions 
    automatic
    ...................]
    $deletecommand
    $color[red]
    $footer[my boss :- RJRYT#5555]
    $addReactions[🎉;✔;⚠️;💠]`
}),

bot.command({
  name: "invite", 
  code: `invite:
  $botTyping[1s]
  $title[__** INVITE ME **__]
  $description[
      
   You can take me to your server
   by clicking [**HERE**]($getBotInvite[admin])
   
  $thumbnail[https://cdn.discordapp.com/emojis/787980368191815680.gif]
  $footer[developed by RJRYT#7873 || $addtimestamp]
  $color[RANDOM]`
}),

bot.command({
 name:"ban",
 code: `$deleteIn[5s]
$color[RANDOM] 
$author[🌈 Banned successfully]
$addField[About:;
Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]
Date:
> $day $month $year
]
$addField[User information;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderator;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - To use this you need to have a higher rank than the mentioned user.]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - I can't ban myself, that's illegal**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - I can't ban the owner of the server**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - This user has already been banned on this server**]
$onlyIf[$message!=;**⛔ - Please specify the user you want to ban. Correct usage:** \`$getServerVar[prefix]ban <@User> [Reason\\]\`]
$onlyPerms[ban;**⛔ - To use this you require the \`BAN_MEMBERS\` permission**]
 $onlyBotPerms[ban;**⛔ - I don't have enough perms to execute this command. Permissions missing:** \`BAN_MEMBERS\`]
 $deletecommand`
}),
 
 
bot.command({
 name: "unban",
 code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **has been unbanned ✅**
$onlyBotPerms[ban;**⛔ I don't have ban perms]
$argsCheck[>1;**⛔ Please Provide User ID To Unban**]
$onlyPerms[ban;**⛔ You need ban permission**]
$suppressErrors[**⛔ I can't find that user**]
$deletecommand`
});

bot.command({
name: "antilink",
code: `
$if[$toLowerCase[$message]==enable]
$setServerVar[antilink;true]
Antilink successfully enabled!
$onlyBotPerms[managemessages;I don't have enough permissions!]
$onlyIf[$getServerVar[antilink]==false;Antilink already enabled!]
$elseIf[$toLowerCase[$message]==disable]
$setServerVar[antilink;false]
Antilink successfully disabled!
$onlyIf[$getServerVar[antilink]==true;Antilink already disabled!]
$endelseIf
$else
Antilink status: $replaceText[$replaceText[$getServerVar[antilink];true;Enabled];false;Disabled]
$endif
$onlyPerms[managemessages;You don't have enough permissions!]
`});

bot.command({
name: "$alwaysExecute",
code: `

<@$authorID>, \`You can't send links here!\` 
**Reason**:**Antilink Enabled.**
$deletecommand
$onlyIf[$checkContains[$message;https#COLON#://;http#COLON#//;discord.gg/;https://discord.gg/;https://;]==true;]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==false;]
 $onlyIf[$getServerVar[antilink]==true;] `
})


bot.botJoinCommand({
channel: "885740827412951072",
code: `
$title[__**JOIN LEFT LOG**__]
$description[

   __***JOINED GUILD***__

**\`I have join a guild\`**

**\`Guild name\`** : \`$serverName\`

**\`Guild id\`** : \`$guildID\`]

$footer[$addtimestamp]`
});

bot.onGuildJoin()
bot.onGuildLeave()
bot.botLeaveCommand({
channel: "885740827412951072",
code: `
$title[__**JOIN LEFT LOG**__]
$description[

   __***LEAVED GUILD***__

**\`I have left a guild\`**

**\`Guild name\`** : \`$serverName\`

**\`Guild id\`** : \`$guildID\`]

$footer[$addtimestamp]`
});
