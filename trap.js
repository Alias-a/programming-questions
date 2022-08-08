/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(heights) {
    // scan from left to right with rain area 0, if cur column is less than previous max than add difference to potential rain area
        // whenever a column is found that is greater than or equal to current max add potential rain area to rain area and reset potential to 0

    // scan forward
    let totalRainArea = 0, potentialRainArea = 0;
    let startColumn = new Column(-1, 0);
    heights.forEach((height, i) => {
        if (height < startColumn.height) {
            potentialRainArea += (startColumn.height - height);
        } else {
            totalRainArea += potentialRainArea;
            potentialRainArea = 0;
            startColumn = new Column(i, height);
        }
    });

    // need to solve trailing case
    // scan backwards to the final start column position and add calculated rain area
    potentialRainArea = 0;
    let endColumn = new Column(-1, 0);
    for (let i = (heights.length-1); i >= startColumn.position; i--) {
        const height = heights[i];
        if (height < endColumn.height) {
            potentialRainArea += (endColumn.height - height);
        } else {
            totalRainArea += potentialRainArea;
            potentialRainArea = 0;
            endColumn = new Column(i, height);
        }
    }

    return totalRainArea;
};


class Column {
    position;
    height;

    constructor(position, height) {
        this.position = position;
        this.height = height;
    }
}

module.exports = trap;