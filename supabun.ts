import { Elysia } from 'elysia'
import HelloController from './controller/hello'
import * as mongoose from 'mongoose';
import MongoIntegration from './controller/fetch'

const logo  = `
       ▓██▓▄
    ▓▓▓▓██▓█▓▄
     ████████▓▒
          ▀▓▓███▄      ▄▄   ▄               ▌
         ▄▌▌▓▓████▄    ██ ▓█▀  ▄▌▀▄  ▓▓▌▄   ▓█  ▄▌▓▓▌▄ ▌▌   ▓
       ▓█████████▌▓▓   ██▓█▄  ▓█▄▓▓ ▐█▌  ██ ▓█  █▌  ██  █▌ █▓
      ▓▓▓▓▀▀▀▀▓▓▓▓▓▓▌  ██  █▓  ▓▌▄▄ ▐█▓▄▓█▀ █▓█ ▀█▄▄█▀   █▓█
       ▓▌                           ▐█▌                   █▌
        ▓
`
const app = new Elysia()

app.get('/hello', () => {
    const controller = new HelloController();
    return (controller.sayHello());
});

app.get('/fetch', () => {
    const controller = new MongoIntegration();
    return (controller.Fetch());
});

app.get('/save', () => {
    const controller = new MongoIntegration();
    return (controller.Save());
});

mongoose.connect('mongodb://localhost:27017/keploy', { 
    serverSelectionTimeoutMS: 5000  // timeout after 5 seconds
})

app.listen("6969")


console.log(`${logo} Elysia is running at on port ${app.server?.port}...`)
