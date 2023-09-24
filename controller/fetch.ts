import { Animal } from './../database/database.type';

export default class MongoIntegration {
    async Save() {
        const cow = new Animal({
            name: 'Cow',
            sound: 'Moo',
        });
        await cow.save();
        return {"succes":true};
    }
    async Fetch() {
        const animal = await Animal.findOne({"name":'Cow'});
        return {"succes":animal};
    }
}