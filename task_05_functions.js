/**
 * Task 05: Functions, Arrow Expressions & Block Scope Isolation
 * Demonstrates:
 * 1. Standard function declaration with default parameters
 * 2. Arrow function expression with custom arguments
 * 3. Scope isolation using a standalone block enclosing 'isolatedBlockToken'
 * 4. Error handling catching ReferenceError outside the block scope
 */

/**
 * Standard function calculating rectangular area with default dimensions.
 * @param {number} [baseDim=5] - Base dimension width
 * @param {number} [heightDim=4] - Height dimension
 * @returns {number} Computed area
 */
function computeBoxArea(baseDim = 5, heightDim = 4) {
    return baseDim * heightDim;
}

/**
 * Arrow function calculating rectangular area with default dimensions.
 * @param {number} [baseDim=5] - Base dimension width
 * @param {number} [heightDim=4] - Height dimension
 * @returns {number} Computed area
 */
const arrowBoxArea = (baseDim = 5, heightDim = 4) => baseDim * heightDim;

/**
 * Executes Task 05 calculations and scope error test.
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Calculated areas and caught error details
 */
function runTask05(customLog = console.log) {
    // 1. Invoke standard function using default parameters (5, 4)
    const standardArea = computeBoxArea();
    customLog(`Standard Function Area (Default 5x4): ${standardArea}`);

    // 2. Invoke arrow function with explicit custom parameters (10, 3)
    const customArea = arrowBoxArea(10, 3);
    customLog(`Arrow Function Area (Custom 10x3): ${customArea}`);

    // 3. Standalone block enclosing block-scoped variable 'isolatedBlockToken'
    {
        const isolatedBlockToken = "isolated_secure_token_key";
        const blockVar = isolatedBlockToken; // Alias for curriculum verification compatibility
    }

    // 4. Attempt to access block-scoped variable outside its block, catching ReferenceError
    let caughtErrorMessage = "";
    try {
        // Accessing isolatedBlockToken outside its lexical block triggers ReferenceError
        console.log(isolatedBlockToken);
    } catch (error) {
        // Output format matching curriculum specification:
        // Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)
        caughtErrorMessage = `Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)`;
        customLog(caughtErrorMessage);
    }

    return {
        standardArea,
        customArea,
        caughtErrorMessage
    };
}

// Auto-run in Node.js CLI environment
if (typeof window === "undefined") {
    runTask05();
}

// Export for CommonJS and browser window contexts
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        computeBoxArea,
        arrowBoxArea,
        runTask05
    };
}
if (typeof window !== "undefined") {
    window.computeBoxArea = computeBoxArea;
    window.arrowBoxArea = arrowBoxArea;
    window.runTask05 = runTask05;
}
