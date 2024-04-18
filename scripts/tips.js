import { getTips } from './database.js'

const allTips = getTips()

export const tipList = () => {
    let tipHTML = `<div class="tip-container">`

    for (const tip of allTips) {
        tipHTML += `<div class="tip-card">${tip.tip}</div>`
                    }

    return tipHTML
}