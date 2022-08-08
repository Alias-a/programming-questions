class CountIntervals {
    #setMin;
    #setMax;
    #intervalSet;

    constructor() {
        this.#intervalSet = new Set();
        this.#setMax = 0;
        this.#setMin = 0;
    }

    // merge intervals
    // how do  you do this in constant time?
    add = function (left, right) {
        // three cases for merging
            // proposed interval encompasses an existing interval
            // proposed interval overlaps on left of interval
            // proposed interval overlaps on right of interval
        // finds the largest combined interval that intersects the proposed interval
        let it = this.#intervalSet.values();
        let interval = it.next();
        while(!interval.done) {
            const intervalVal = interval.value;
            // check if proposed interval is encompassed by and existing one
            if (left >= intervalVal.left && right <= intervalVal.right) {
                left = intervalVal.left;
                right = intervalVal.right;
            } else if (left <= intervalVal.left && (right <= intervalVal.right && right >= intervalVal.left)) {
                right = intervalVal.right;
            } else if ((left >= intervalVal.left && left <= intervalVal.right) && right >= intervalVal.right) {
                left = intervalVal.left;
            }
            interval = it.next();
        }

        // filter any encompassed intervals currently in the set
        it = this.#intervalSet.values();
        interval = it.next();
        while(!interval.done) {
            const intervalVal = interval.value;
            if (left <= intervalVal.left && right >= intervalVal.right) {
                this.#intervalSet.delete(intervalVal);
            }
            interval = it.next();
        }

        // add the new encompassing interval
        this.#intervalSet.add({left: left, right: right});
    };

    count = function () {
        // now that the intervals are merged, all duplicates are removed
        // so we only need to iterate over intervals and sum the differences
        let count = 0;
        const it = this.#intervalSet.values();
        let interval = it.next();
        while(!interval.done) {
            count += (interval.value.right - interval.value.left) + 1;
            interval = it.next();
        }

        return count;
    };
}

module.exports = CountIntervals;