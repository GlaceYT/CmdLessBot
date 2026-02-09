export default {
  token: "YOUR_BOT_TOKEN_HERE",
  
  lavalink: {
    nodes: [
      {
        name: "GlaceYT2",
        password: "glace",
        host: "45.13.236.245",
        port: 25582,
        secure: false
      },
    ],
    defaultSearchPlatform: "ytmsearch",
    restVersion: "v4",
  },
  
  activities: [
    {
      type: "PLAYING",
      text: "music for everyone",
    },
    {
      type: "LISTENING",
      text: "your requests",
    },
    {
      type: "WATCHING",
      text: "the music queue",
    },
    {
      type: "PLAYING",
      text: "beats and melodies",
    },
    {
      type: "LISTENING",
      text: "to the rhythm",
    },
    {
      type: "WATCHING",
      text: "over the server",
    },
  ],
  
  activityRotationInterval: 30000, 

};


