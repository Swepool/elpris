export const getShower = (kwhPrice) => {
    //Usage: 3-5 kWh
    const LOW_USAGE = 3.5
    const HIGH_USAGE = 4.5

    return {
        low: (LOW_USAGE * kwhPrice).toFixed(2),
        high: (HIGH_USAGE * kwhPrice).toFixed(2),
    }
}

export const getDishwasher = (kwhPrice) => {
    //Usage: 0.7-1.5 kWh
    const LOW_USAGE = 1
    const HIGH_USAGE = 2
    return {
        low: (LOW_USAGE * kwhPrice).toFixed(2),
        high: (HIGH_USAGE * kwhPrice).toFixed(2)
    }
}

export const getWasherDryer = (kwhPrice) => {
    //Usage: 2-4 kWh
    const LOW_USAGE = 2
    const HIGH_USAGE = 4
    return {
        low: (LOW_USAGE * kwhPrice).toFixed(2),
        high: (HIGH_USAGE * kwhPrice).toFixed(2)
    }
}

export const getAc = (kwhPrice) => {
    //Usage: 3-5 kWh
    const LOW_USAGE = 3
    const HIGH_USAGE = 5
    return {
        low: (LOW_USAGE * kwhPrice).toFixed(2),
        high: (HIGH_USAGE * kwhPrice).toFixed(2)
    }
}