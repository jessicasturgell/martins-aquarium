import { getLocations } from './database.js'

const allLocations = getLocations()

export const locationList = () => {
    let locationHTML = `<div class="location-container">`

    for (const location of allLocations) {
        locationHTML += `<div class="location-card">
                            <h3>${location.location}</h1>
                            <h4>${location.dateVisited}</h2>
                            <img class="locationImage" src=${location.image}></img>
                            <div>${location.notes}</div>
                        </div>`
                    }

    return locationHTML
}