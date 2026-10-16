/**
 * Task 04: Iterations & Loop Control Jumps
 * Demonstrates:
 * 1. for loop generating table of 5 up to factor 5
 * 2. while loop with break searching for the first integer > 10 divisible by 6
 * 3. do...while loop demonstrating continue to skip odd sequence iterations
 */

/**
 * Executes Task 04 loops and outputs formatted results.
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Structured loop execution outputs
 */
function runTask04(customLog = console.log) {
    // 1. for loop generating table of 5 up to factor 5
    customLog("Multiplication Table of 5");
    const tableResults = [];
    for (let factor = 1; factor <= 5; factor++) {
        const line = `5 x ${factor} = ${5 * factor}`;
        customLog(line);
        tableResults.push(line);
    }

    // 2. while loop with break searching for the first integer > 10 divisible by 6
    customLog("First number > 10 divisible by 6");
    let candidate = 11;
    let foundNumber = null;
    while (true) {
        if (candidate % 6 === 0) {
            foundNumber = candidate;
            customLog(`Found: ${foundNumber}`);
            break;
        }
        candidate++;
    }

    // 3. do...while loop demonstrating continue to skip odd sequence iterations
    let sequencePointer = 0;
    const evenIterations = [];
    do {
        sequencePointer++;
        if (sequencePointer % 2 !== 0) {
            continue; // Skip odd sequence iterations
        }
        evenIterations.push(sequencePointer);
    } while (sequencePointer < 6);

    return {
        tableResults,
        foundNumber,
        evenIterations
    };
}

// Auto-run in Node.js CLI environment
if (typeof window === "undefined") {
    runTask04();
}

// Export for CommonJS and browser window contexts
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        runTask04
    };
}
if (typeof window !== "undefined") {
    window.runTask04 = runTask04;
}
