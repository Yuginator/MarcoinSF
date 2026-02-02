/**
 * Finds the range of items that are visible within a viewport using Binary Search.
 * Assumes items are sorted by their 'left' property.
 *
 * @param {Array} items - Array of objects with 'left' and 'baseWidth' properties.
 * @param {number} startBound - The start (left) pixel of the visible area.
 * @param {number} endBound - The end (right) pixel of the visible area.
 * @returns {Object} { start: number, end: number } - The indices for slice(start, end).
 */
export function findVisibleRange(items, startBound, endBound) {
    if (!items || items.length === 0) {
        return { start: 0, end: 0 };
    }

    // 1. Find Start Index
    // We want the first item where (item.left + item.baseWidth) > startBound.
    // Meaning the item ends *after* the viewport starts.
    let low = 0;
    let high = items.length - 1;
    let startIndex = 0;

    // First pass: Find lower bound
    while (low <= high) {
        const mid = (low + high) >>> 1; // Unsigned right shift for fast floor division
        const item = items[mid];

        // If the item ends before the viewport starts, we need to look higher.
        if ((item.left + item.baseWidth) <= startBound) {
            low = mid + 1;
        } else {
            // This item *might* be the first one, or there's one before it.
            // Record it as a candidate and try to look lower.
            startIndex = mid;
            high = mid - 1;
        }
    }

    // Safety check: if the while loop finished with low > high, 'low' usually points to the insertion point.
    // If 'low' went past the end, it means everything is to the left of the viewport.
    if (low >= items.length) {
        return { start: 0, end: 0 };
    }
    startIndex = low;


    // 2. Find End Index
    // We want the first item where item.left > endBound.
    // This item is completely off the right side, so it's our exclusive end index for slice().
    low = startIndex; // Optimization: Start looking from where we found the beginning
    high = items.length - 1;
    let endIndex = items.length; // Default to including everything until the end

    while (low <= high) {
        const mid = (low + high) >>> 1;
        const item = items[mid];

        if (item.left > endBound) {
            // This item is outside. It could be the cut-off, or there's an earlier one.
            endIndex = mid;
            high = mid - 1;
        } else {
            // This item is still visible (or starts before the end). Look higher.
            low = mid + 1;
        }
    }

    return { start: startIndex, end: endIndex };
}
