export const shower = (kwhPrice, minutes) => {
    const costPerMinute = ((5 / 60) * kwhPrice)
    return (costPerMinute * minutes).toFixed(2)
}

export const dishwasher = (kwhPrice) => {
    const kwhPerRun = 1.5
    return (kwhPerRun * kwhPrice).toFixed(2)
}

export const chill = (kwhPrice) => {
    return (4 *  kwhPrice).toFixed(2)
}