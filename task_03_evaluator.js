

var studentScore = 85;
var computedGrade = "";
var outcomeStatus = "";

/**
 * Evaluates student score through conditionals, switch mapping, and ternary check.
 * @param {number} [score=85] - Numeric score between 0 and 100
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Evaluation outcome
 */
function evaluateScore(score = 85, customLog = console.log) {
    studentScore = Number(score);

    // 1. Determine base grade bracket using if...else conditions
    let calculatedGrade = "";
    if (studentScore >= 90) {
        calculatedGrade = "A";
    } else if (studentScore >= 80) {
        calculatedGrade = "B";
    } else if (studentScore >= 70) {
        calculatedGrade = "C";
    } else if (studentScore >= 60) {
        calculatedGrade = "D";
    } else {
        calculatedGrade = "F";
    }

    // 2. Validate / Map grade using switch statement
    switch (calculatedGrade) {
        case "A":
            computedGrade = "A";
            break;
        case "B":
            computedGrade = "B";
            break;
        case "C":
            computedGrade = "C";
            break;
        case "D":
            computedGrade = "D";
            break;
        case "F":
        default:
            computedGrade = "F";
            break;
    }

    // 3. Determine pass/fail outcome using ternary operator with threshold >= 60
    outcomeStatus = studentScore >= 60 ? "Passed" : "Failed";

    customLog(`Score: ${studentScore}`);
    customLog(`Grade: ${computedGrade}`);
    customLog(`Status: ${outcomeStatus}`);

    return {
        studentScore,
        computedGrade,
        outcomeStatus
    };
}

/**
 * Runner function that allows browser prompt input or fallback default.
 * @param {number} [customScore] - Optional score override
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Evaluation outcome
 */
function runTask03(customScore, customLog = console.log) {
    let scoreInput = customScore;

    if (scoreInput === undefined && typeof prompt !== "undefined") {
        const promptVal = prompt("Enter student score (0 - 100):", "85");
        scoreInput = (promptVal !== null && promptVal.trim() !== "" && !isNaN(Number(promptVal)))
            ? Number(promptVal)
            : 85;
    } else if (scoreInput === undefined) {
        scoreInput = 85;
    }

    return evaluateScore(scoreInput, customLog);
}

// Auto-run in Node.js CLI environment
if (typeof window === "undefined") {
    runTask03(85);
}

// Export for CommonJS and browser window contexts
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        studentScore,
        computedGrade,
        outcomeStatus,
        evaluateScore,
        runTask03
    };
}
if (typeof window !== "undefined") {
    window.studentScore = studentScore;
    window.computedGrade = computedGrade;
    window.outcomeStatus = outcomeStatus;
    window.evaluateScore = evaluateScore;
    window.runTask03 = runTask03;
}
