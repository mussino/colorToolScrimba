const isValidHex = (hex) => {
    if (!hex) return false;

    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}

/*console.log(isValidHex('#000'));
console.log(isValidHex('#000000'));
console.log(isValidHex('#0000000'));
console.log(isValidHex('#0007rhju63'));
*/

