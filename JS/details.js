export class Details {
    constructor(detailsResult) {
        console.log(detailsResult);
        this.gameDetails(detailsResult)
        this.details = detailsResult
        document.querySelector("#navBar").classList.add("d-none")
        document.querySelector("#mainSite").classList.add("d-none")
        document.querySelector("#detailsContainer").classList.remove("d-none")
     let closeBtn = document.querySelector("#closeBtn")
     closeBtn.addEventListener("click", function(){
        document.querySelector("#navBar").classList.remove("d-none")
        document.querySelector("#mainSite").classList.remove("d-none")
        document.querySelector("#detailsContainer").classList.add("d-none")
     })
    let gameSite = document.querySelector("#gameSite")
    gameSite.addEventListener("click", function(){
        open(`${detailsResult.game_url}`, "_blank")
    })
    
    }




    gameDetails(details) {

        let detailsBox = `<div  class="container">
        <div class="details-header d-flex justify-content-between align-items-md-center p-3">
                <h1 class="text-white">Details Game</h1>
                <i id="closeBtn" class="fa-solid fa-x fs-4"></i>
            </div>
            <div class="game-details d-flex">
                <div class="details-img">
                    <img class="" src="${details.thumbnail}" alt="">
                </div>
                <div class="details-text ms-3">
                    <h3 class="text-white fw-bold">Title: ${details.title} </h3>
                    <p class="text-white fw-bold">Category: <span
                            class=" p-1 fw-bold rounded-3 text-black">${details.genre}</span></p>
                    <p class="text-white fw-bold">Platform: <span
                            class=" p-1 fw-bold rounded-3 text-black">${details.platform}</span></p>
                    <p class="text-white fw-bold">Status: <span class=" p-1 fw-bold rounded-3 text-black">${details.status}</span>
                    </p>
                    <p class="text-white fw-bold">${details.description}</p>
                    <button id="gameSite" class="btn btn-outline-warning text-white fw-bold ">Show Game</button>
                </div>
            </div>
            </div>`

        document.querySelector("#detailsContainer").innerHTML = detailsBox
    }

}