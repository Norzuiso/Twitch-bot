const tmi = require('tmi.js');

const client = new tmi.Client({
    options:{
        debug: true
    },
    connection:{
        reconnect:true
    },
    identity:{
        username: 'TortuBot',
        password: 'oauth:11vi8280lxmn1fuhu3u0b54340m28y'
    },
    channels:['norzuizo', 'leojeroso_']
});

client.connect();
client.on('message', (channel, tags, message, self)=>{
    console.log(self);
    if(self) return;
    console.log(tags);
    console.log(message);
    console.log(channel);
    if(message.toLowerCase() === '!holi'){
        client.say(channel, `holi we! @${tags.username}`);
    }
});