import axios from "axios";

export default class Service {
    static async getAllCharacters(offset) {
        try {
            const response = 
            await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=${offset}&ts=3&apikey=3ec6f79259cf200d9a2e2e62111ab92a&hash=8781077f5913eadd7e9efa4a5ba70557`);
            return response;
            
            
        } catch (error) {
            console.log(error);
        }
            
        }

    static async getCharacter(id) {
        try {
            const response = 
            await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=3&apikey=3ec6f79259cf200d9a2e2e62111ab92a&hash=8781077f5913eadd7e9efa4a5ba70557`);
            return response;
            
            
        } catch (error) {
            console.log(error);
        }
            
        }

    static async getCharacterByName(name) {
        try {
            const response = 
            await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&limit=5&ts=3&apikey=3ec6f79259cf200d9a2e2e62111ab92a&hash=8781077f5913eadd7e9efa4a5ba70557`);
            return response;
            
            
        } catch (error) {
            console.log(error);
        }
            
        }

}
