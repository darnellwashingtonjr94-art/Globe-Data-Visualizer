// src/utils/heatmapper.js

/**
 * Returns a hex color string based on utilization percentage.
 * @param {number} utilization - The percentage of bandwidth used (0 to 100)
 * @returns {string} - Hex color code
 */
export function getSaturationColor(utilization) {
    if (utilization < 50) {
        return '#00ff00'; // Green - Normal
    } else if (utilization >= 50 && utilization < 85) {
        return '#ffff00'; // Yellow - Warning
    } else {
        return '#ff0000'; // Red - Critical
    }
}
