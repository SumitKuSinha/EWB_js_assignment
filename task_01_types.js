
var candidateName = "Alice";
let candidateAge = 25;
const hasActiveJob = true;
const techStack = ["HTML", "CSS", "JavaScript"];

/**
 * Executes Task 01 logic and logs formatted type reflection data.
 * @param {Function} [customLog=console.log] - Optional logger sink (for UI runner)
 * @returns {Object} Data object containing all variables and their types
 */
function runTask01(customLog = console.log) {
    customLog(`Name: ${candidateName} (Type: ${typeof candidateName})`);
    customLog(`Age: ${candidateAge} (Type: ${typeof candidateAge})`);
    customLog(`Is Employed: ${hasActiveJob} (Type: ${typeof hasActiveJob})`);
    customLog(`Skills: ${JSON.stringify(techStack).replace(/,/g, ", ")} (Type: ${typeof techStack})`);

    return {
        candidateName,
        candidateAge,
        hasActiveJob,
        techStack
    };
}


if (typeof window === "undefined") {
    runTask01();
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        candidateName,
        candidateAge,
        hasActiveJob,
        techStack,
        runTask01
    };
}
if (typeof window !== "undefined") {
    window.candidateName = candidateName;
    window.candidateAge = candidateAge;
    window.hasActiveJob = hasActiveJob;
    window.techStack = techStack;
    window.runTask01 = runTask01;
}
