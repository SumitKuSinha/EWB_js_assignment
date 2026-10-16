/**
 * Verification Test Suite: JavaScript Curriculum & Capstone Assignment
 * Validates all 7 task files against strict curriculum specifications.
 */

const { execSync } = require("child_process");
const path = require("path");

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    teal: "\x1b[38;2;20;184;166m",
    slate: "\x1b[38;2;148;163;184m"
};

console.log(`${colors.bright}${colors.teal}================================================================${colors.reset}`);
console.log(`${colors.bright}${colors.teal}  JavaScript Assignment Verification Test Suite                ${colors.reset}`);
console.log(`${colors.slate}  Workspace: ${process.cwd()}${colors.reset}`);
console.log(`${colors.bright}${colors.teal}================================================================${colors.reset}\n`);

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = "") {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ${colors.green}✔ PASS${colors.reset} [${testName}] ${colors.slate}${details}${colors.reset}`);
    } else {
        console.log(`  ${colors.red}✖ FAIL${colors.reset} [${testName}] ${colors.yellow}${details}${colors.reset}`);
    }
}

// -------------------------------------------------------------
// TASK 01
// -------------------------------------------------------------
console.log(`${colors.cyan}--- Verifying Task 01: Types & Declarations ---${colors.reset}`);
const task01 = require("./task_01_types.js");
assert(task01.candidateName === "Alice", "task_01", "candidateName is 'Alice'");
assert(task01.candidateAge === 25, "task_01", "candidateAge is 25");
assert(task01.hasActiveJob === true, "task_01", "hasActiveJob is true");
assert(Array.isArray(task01.techStack) && task01.techStack.length === 3, "task_01", "techStack is 3-element array");

const out01 = execSync("node task_01_types.js", { encoding: "utf8" });
assert(out01.includes("Name: Alice (Type: string)"), "task_01_output", "Matches Name string type");
assert(out01.includes("Age: 25 (Type: number)"), "task_01_output", "Matches Age number type");
assert(out01.includes("Is Employed: true (Type: boolean)"), "task_01_output", "Matches Is Employed boolean type");
assert(out01.includes('Skills: ["HTML", "CSS", "JavaScript"] (Type: object)'), "task_01_output", "Matches Skills object type");

// -------------------------------------------------------------
// TASK 02
// -------------------------------------------------------------
console.log(`\n${colors.cyan}--- Verifying Task 02: Billing & Gratuity ---${colors.reset}`);
const task02 = require("./task_02_billing.js");
const res02 = task02.runTask02("100", "15", () => {});
assert(res02.subtotal === 100, "task_02", "subtotal is 100");
assert(res02.tipPercentage === 15, "task_02", "tipPercentage is 15");
assert(res02.calculatedTip === 15, "task_02", "calculatedTip is 15");
assert(res02.totalAmount === 115, "task_02", "totalAmount is 115");

const out02 = execSync("node task_02_billing.js", { encoding: "utf8" });
assert(out02.includes("Subtotal: $100"), "task_02_output", "Subtotal: $100");
assert(out02.includes("Tip Percentage: 15%"), "task_02_output", "Tip Percentage: 15%");
assert(out02.includes("Calculated Tip: $15"), "task_02_output", "Calculated Tip: $15");
assert(out02.includes("Total Amount to Pay: $115"), "task_02_output", "Total Amount to Pay: $115");

// -------------------------------------------------------------
// TASK 03
// -------------------------------------------------------------
console.log(`\n${colors.cyan}--- Verifying Task 03: Evaluator ---${colors.reset}`);
const task03 = require("./task_03_evaluator.js");
const res03 = task03.evaluateScore(85, () => {});
assert(res03.studentScore === 85, "task_03", "studentScore is 85");
assert(res03.computedGrade === "B", "task_03", "computedGrade is 'B'");
assert(res03.outcomeStatus === "Passed", "task_03", "outcomeStatus is 'Passed'");

const out03 = execSync("node task_03_evaluator.js", { encoding: "utf8" });
assert(out03.includes("Score: 85"), "task_03_output", "Score: 85");
assert(out03.includes("Grade: B"), "task_03_output", "Grade: B");
assert(out03.includes("Status: Passed"), "task_03_output", "Status: Passed");

// -------------------------------------------------------------
// TASK 04
// -------------------------------------------------------------
console.log(`\n${colors.cyan}--- Verifying Task 04: Iterations & Loops ---${colors.reset}`);
const task04 = require("./task_04_iterations.js");
const res04 = task04.runTask04(() => {});
assert(res04.foundNumber === 12, "task_04", "First number > 10 divisible by 6 is 12");
assert(res04.tableResults.length === 5, "task_04", "Multiplication table has 5 factors");

const out04 = execSync("node task_04_iterations.js", { encoding: "utf8" });
assert(out04.includes("Multiplication Table of 5"), "task_04_output", "Contains table header");
assert(out04.includes("5 x 1 = 5") && out04.includes("5 x 5 = 25"), "task_04_output", "Contains factor 1 to 5");
assert(out04.includes("First number > 10 divisible by 6"), "task_04_output", "Contains search header");
assert(out04.includes("Found: 12"), "task_04_output", "Contains Found: 12");

// -------------------------------------------------------------
// TASK 05
// -------------------------------------------------------------
console.log(`\n${colors.cyan}--- Verifying Task 05: Functions & Block Scope ---${colors.reset}`);
const task05 = require("./task_05_functions.js");
assert(task05.computeBoxArea() === 20, "task_05", "Default computeBoxArea() is 20 (5x4)");
assert(task05.arrowBoxArea(10, 3) === 30, "task_05", "arrowBoxArea(10, 3) is 30");

const out05 = execSync("node task_05_functions.js", { encoding: "utf8" });
assert(out05.includes("Standard Function Area (Default 5x4): 20"), "task_05_output", "Standard function output matches");
assert(out05.includes("Arrow Function Area (Custom 10x3): 30"), "task_05_output", "Arrow function output matches");
assert(out05.includes("Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)"), "task_05_output", "Caught ReferenceError matches curriculum spec");

// -------------------------------------------------------------
// TASK 06
// -------------------------------------------------------------
console.log(`\n${colors.cyan}--- Verifying Task 06: Collections ---${colors.reset}`);
const task06 = require("./task_06_collections.js");
assert(Array.isArray(task06.catalog) && task06.catalog.length === 3, "task_06", "catalog has 3 objects");

const out06 = execSync("node task_06_collections.js", { encoding: "utf8" });
assert(out06.includes("All Products (forEach)"), "task_06_output", "Includes forEach header");
assert(out06.includes("Item: Laptop") && out06.includes("Price: $800"), "task_06_output", "Includes Laptop details");
assert(out06.includes("Filtered Products (Price < $50)"), "task_06_output", "Includes Filtered Products header");
assert(out06.includes("Mouse") && out06.includes("Keyboard"), "task_06_output", "Includes Mouse and Keyboard in filtered products");
assert(out06.includes("Mapped Product Tags (map)"), "task_06_output", "Includes Mapped Product Tags header");
assert(out06.includes("LAPTOP costs $800"), "task_06_output", "Includes uppercase mapped tag");

// -------------------------------------------------------------
// TASK 07
// -------------------------------------------------------------
console.log(`\n${colors.cyan}--- Verifying Task 07: Capstone Inventory App ---${colors.reset}`);
const task07 = require("./task_07_inventory_app.js");
assert(task07.classifyTier(800) === "Premium", "task_07", "800 classifies as Premium");
assert(task07.classifyTier(150) === "Standard", "task_07", "150 classifies as Standard");
assert(task07.classifyTier(25) === "Budget", "task_07", "25 classifies as Budget");

const res07 = task07.runTask07("Monitor", 150, () => {});
assert(res07.totalInventoryValue === 975, "task_07", "Total inventory value is 975");
assert(JSON.stringify(res07.filteredAffordable) === JSON.stringify(["Mouse", "Monitor"]), "task_07", "Affordable items are Mouse and Monitor");
assert(res07.formattedReport.includes("LAPTOP: $800"), "task_07", "Formatted report list includes LAPTOP: $800");

const out07 = execSync("node task_07_inventory_app.js", { encoding: "utf8" });
assert(out07.includes("--- Initializing Inventory System"), "task_07_output", "Initializes system");
assert(out07.includes('[Prompt executed: User adds "Monitor" at "$150"]'), "task_07_output", "Simulates prompt execution");
assert(out07.includes("* Item: Laptop ($800) -> Category: Premium"), "task_07_output", "Laptop -> Premium");
assert(out07.includes("* Item: Mouse ($25) -> Category: Budget"), "task_07_output", "Mouse -> Budget");
assert(out07.includes("* Item: Monitor ($150) -> Category: Standard"), "task_07_output", "Monitor -> Standard");
assert(out07.includes("Financial Analytics"), "task_07_output", "Financial Analytics header");
assert(out07.includes("Total Inventory Value: $975"), "task_07_output", "Total Inventory Value: $975");
assert(out07.includes('Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]'), "task_07_output", 'Filtered Affordable Items: ["Mouse", "Monitor"]');
assert(out07.includes('Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]'), "task_07_output", "Formatted Report List matches");

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log(`\n${colors.bright}${colors.teal}================================================================${colors.reset}`);
console.log(`${colors.bright}  Test Results: ${passedTests}/${totalTests} Passed (${Math.round((passedTests / totalTests) * 100)}%)${colors.reset}`);
if (passedTests === totalTests) {
    console.log(`  ${colors.green}${colors.bright}✔ ALL CURRICULUM SPECIFICATIONS VERIFIED SUCCESSFULLY!${colors.reset}`);
} else {
    console.log(`  ${colors.red}${colors.bright}✖ SOME TESTS FAILED!${colors.reset}`);
    process.exit(1);
}
console.log(`${colors.bright}${colors.teal}================================================================${colors.reset}\n`);
