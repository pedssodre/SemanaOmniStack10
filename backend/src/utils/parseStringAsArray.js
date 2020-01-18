module.exports = function parseStringAsArray(arratAsString) {
    return arratAsString.split(',').map(tech => tech.trim());
}