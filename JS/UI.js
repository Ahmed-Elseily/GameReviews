
import { Details } from "./details.js";
export class Ui {
    constructor(result) {
        console.log(result);
        this.results = result
        this.displayGames(this.results)

        document.querySelectorAll(".card").forEach((cards) => {
            cards.addEventListener("click", () => {
                console.log(cards.getAttribute("id"));
                this.getDetails(cards.getAttribute("id"));
            })

        })

    }

    displayGames(results) {
        console.log(results);
        let displayBox = ``
        for (let i = 0; i < results.length; i++) {
            displayBox += `<div class="col-lg-3 col-md-4 col-sm-2">
                    <div id="${results[i].id}" class="card p-3 h-100">
                        <img src="${results[i].thumbnail}" alt="">
                        <div class="card-body px-0">
                            <div class="body-upper d-flex justify-content-between align-items-center align-baseline">
                                <h3 class=" mt-0 h5 text-white fw-bold fs-6">${results[i].title}</h3>
                                <button class="btn bg-primary text-white py-0 fw-bold px-2">Free</button>
                            </div>
                            <p class="card-text text-secondary fw-bold text-center">
                                ${results[i].short_description}</p>
                        </div>
                        <div class="card-footer text-white fw-bold">
                            <div class=" d-flex justify-content-between align-items-center">
                                <span class=" p-1 rounded-3 ">${results[i].genre}</span>
                                
                                <span class=" p-1 rounded-3 ">${results[i].platform}</span>
                            </div>
                        </div>
                    </div>
                </div>`

        }
        document.querySelector("#rowContent").innerHTML = displayBox
    }

    async getDetails(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
            let newDetails = new Details(result)
        } catch (error) {
            console.error(error);
        }
    }
}