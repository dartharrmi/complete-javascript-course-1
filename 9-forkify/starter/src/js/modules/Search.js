import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const apiKey = '5fbc9543b3a02af86b753dcb4ed1f205';

        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`);
            this.result = res.data.recipes
        } catch (error) {
            alert(error)
        }
    }
}