import { fishList } from "./fishList.js"
const fishHTML = fishList()
const allFish = `${fishHTML}`
const parentHTMLElement = document.querySelector("#fish-container")
parentHTMLElement.innerHTML = allFish

import { locationList } from "./locations.js"
const locationHTML = locationList()
const allLocations = `${locationHTML}`
const locationHTMLElement = document.querySelector("#location-container")
locationHTMLElement.innerHTML = allLocations

import { tipList } from "./tips.js"
const tipHTML = tipList()
const allTips = `${tipHTML}`
const tipHTMLElement = document.querySelector("#tip-container")
tipHTMLElement.innerHTML = allTips