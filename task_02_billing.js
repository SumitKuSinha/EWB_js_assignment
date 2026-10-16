
var rawBillAmount = "100";
var rawGratuityRate = "15";

/**
 * Executes Task 02 logic, prompts for inputs when in browser (with fallback defaults),
 * applies explicit Number() casting, and calculates tip + final total.
 * @param {string|number} [customBill] - Optional subtotal override
 * @param {string|number} [customTipRate] - Optional gratuity rate override
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Billing calculation summary
 */
function runTask02(customBill, customTipRate, customLog = console.log) {
    let billInput = customBill;
    let tipInput = customTipRate;


    if (billInput === undefined && typeof prompt !== "undefined") {
        const promptVal = prompt("Enter subtotal bill amount ($):", rawBillAmount);
        billInput = (promptVal !== null && promptVal.trim() !== "") ? promptVal.trim() : rawBillAmount;
    } else if (billInput === undefined) {
        billInput = rawBillAmount;
    }

    if (tipInput === undefined && typeof prompt !== "undefined") {
        const promptVal = prompt("Enter gratuity rate percentage (%):", rawGratuityRate);
        tipInput = (promptVal !== null && promptVal.trim() !== "") ? promptVal.trim() : rawGratuityRate;
    } else if (tipInput === undefined) {
        tipInput = rawGratuityRate;
    }

    const subtotal = Number(billInput);
    const tipPercentage = Number(tipInput);


    const calculatedTip = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + calculatedTip;

    customLog(`Subtotal: $${subtotal}`);
    customLog(`Tip Percentage: ${tipPercentage}%`);
    customLog(`Calculated Tip: $${calculatedTip}`);
    customLog(`Total Amount to Pay: $${totalAmount}`);

    return {
        rawBillAmount: String(billInput),
        rawGratuityRate: String(tipInput),
        subtotal,
        tipPercentage,
        calculatedTip,
        totalAmount
    };
}

// Auto-run in Node.js CLI environment
if (typeof window === "undefined") {
    runTask02();
}

// Export for CommonJS and browser window contexts
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        rawBillAmount,
        rawGratuityRate,
        runTask02
    };
}
if (typeof window !== "undefined") {
    window.rawBillAmount = rawBillAmount;
    window.rawGratuityRate = rawGratuityRate;
    window.runTask02 = runTask02;
}
