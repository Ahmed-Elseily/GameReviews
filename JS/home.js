import { Ui } from "./UI.js";
export class Home {
    constructor() {
        console.log("hello");
        document.querySelectorAll(".nav-link").forEach((tabs) => {
            tabs.addEventListener("click", () => {
                console.log(tabs.innerHTML);
                this.getGames(tabs.innerHTML)

            })
        })
        this.getGames("MMORPG")
    }
    
    async getGames(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9f6c1869b8msh6e1b4a2d4b4b026p14cd28jsnac4543474006',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            let newUi = new Ui(result)
        } catch (error) {
            console.error(error);
        }
    }


}





