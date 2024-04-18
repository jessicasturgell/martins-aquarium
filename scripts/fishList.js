import { getFishes } from "./database.js"

const fishes = getFishes()

export const fishList = () => {
    let fishHTML = `<div class="fish-container">`

    for (const fish of fishes) {
        fishHTML += `<div class="fish-card"><div>
                    <h1>${fish.name} ~</h1>
                    <h2>~ ${fish.species}</h2>
                        <img class="fishImage" src=${fish.image} alt="will add later">
                    </div>
                    <ul class="fish-list">
                        <li>Length: ${fish.length}</li>
                        <li>Harvest Location: ${fish.harvestLocation}</li>
                        <li>Diet: ${fish.diet}</li>
                    </ul>
                    <aside>${fish.aside}</aside>
                    </div>`
                    }

    return fishHTML
}