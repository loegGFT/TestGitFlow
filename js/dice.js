
/**
 * This function rolls a d6 and returns the result
 * @returns {number} The result of the roll
 */
function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * This function rolls a d20 and returns the result
 * @returns {number} The result of the roll
 */
function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
}

/**
 * This function rolls a d100 and returns the result
 * @returns {number} The result of the roll
 */
function rollD100() {
    return Math.floor(Math.random() * 100) + 1;
}

/**
 * This function rolls between min and max and returns the result
 * @param {number} min The minimum value of the roll
 * @param {number} max The maximum value of the roll
 * @returns {number} The result of the roll
 */
function rollBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("currentDiceRoll").innerHTML = "The current roll is: " + rollD20();