function findMedianSortedArrays(nums1, nums2) {
    let mergedArr = [...nums1, ...nums2];
    mergedArr.sort((a,b) => { return a-b;});

    let medianIndex = (mergedArr.length - 1) / 2;
    let median = null;
    if (Number.isInteger(medianIndex)) {
        median = mergedArr[medianIndex];
    } else {
        let medianIndexOne = Math.floor(medianIndex);
        let medianIndexTwo = Math.ceil(medianIndex);
        median = (mergedArr[medianIndexOne] + mergedArr[medianIndexTwo]) / 2;
    }

    return median;
}

module.exports = findMedianSortedArrays;