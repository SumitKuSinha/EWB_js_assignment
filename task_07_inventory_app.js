/**
 * Task 07: Capstone Inventory System & Financial Analytics
 * Comprehensive integration of:
 * 1. Inventory state seeded with default items (Laptop $800, Mouse $25)
 * 2. Dynamic item entry via browser prompt (with 'Monitor' at 150 fallback)
 * 3. Tier classification using combined if-else and switch mapping:
 *    - 'Premium' (>= 500)
 *    - 'Standard' (>= 100)
 *    - 'Budget' (< 100)
 * 4. Iterative portfolio value aggregation via reduce
 * 5. Array filtering for affordable items (< 200) mapped to item names
 * 6. Transformed uppercase display strings via map
 */

/**
 * Classifies a product price into a category tier using if-else evaluation
 * and switch-case mapping.
 * @param {number} price - Numeric price of the product
 * @returns {string} Category string ('Premium' | 'Standard' | 'Budget')
 */
function classifyTier(price) {
    let tierKey = "";
    if (price >= 500) {
        tierKey = "PREMIUM";
    } else if (price >= 100) {
        tierKey = "STANDARD";
    } else {
        tierKey = "BUDGET";
    }

    switch (tierKey) {
        case "PREMIUM":
            return "Premium";
        case "STANDARD":
            return "Standard";
        case "BUDGET":
        default:
            return "Budget";
    }
}

/**
 * Executes the Capstone Inventory Application.
 * Prompts user in browser or uses defaults ('Monitor' at 150).
 * @param {string} [customItemName] - Optional dynamic product name
 * @param {number} [customItemPrice] - Optional dynamic product price
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Full inventory system analytics summary
 */
function runTask07(customItemName, customItemPrice, customLog = console.log) {
    customLog("--- Initializing Inventory System");

    // 1. Seed inventory with default items per specification
    const inventory = [
        { name: "Laptop", price: 800 },
        { name: "Mouse", price: 25 }
    ];

    // 2. Prompt for dynamic item entry ('Monitor' at 150 default fallback)
    let dynamicName = customItemName;
    let dynamicPrice = customItemPrice;

    if (dynamicName === undefined && typeof prompt !== "undefined") {
        const inputName = prompt("Enter product name to add:", "Monitor");
        dynamicName = (inputName !== null && inputName.trim() !== "") ? inputName.trim() : "Monitor";
    } else if (dynamicName === undefined) {
        dynamicName = "Monitor";
    }

    if (dynamicPrice === undefined && typeof prompt !== "undefined") {
        const inputPrice = prompt("Enter product price ($):", "150");
        dynamicPrice = (inputPrice !== null && !isNaN(Number(inputPrice))) ? Number(inputPrice) : 150;
    } else if (dynamicPrice === undefined) {
        dynamicPrice = 150;
    }

    customLog(`[Prompt executed: User adds "${dynamicName}" at "$${dynamicPrice}"]`);
    inventory.push({ name: dynamicName, price: Number(dynamicPrice) });

    // 3. Processing Inventory Roster (forEach)
    customLog("Processing Inventory Roster (forEach)");
    inventory.forEach(item => {
        const category = classifyTier(item.price);
        customLog(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
    });

    // 4. Financial Analytics
    customLog("Financial Analytics");

    // Aggregate total portfolio value using reduce
    const totalInventoryValue = inventory.reduce((total, item) => total + item.price, 0);
    customLog(`Total Inventory Value: $${totalInventoryValue}`);

    // Filter items priced strictly below 200 into a name list
    const filteredAffordable = inventory
        .filter(item => item.price < 200)
        .map(item => item.name);
    customLog(`Filtered Affordable Items (Under $200): ${JSON.stringify(filteredAffordable).replace(/,/g, ", ")}`);

    // Map transformed uppercase display strings
    const formattedReportList = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
    customLog(`Formatted Report List: ${JSON.stringify(formattedReportList).replace(/,/g, ", ")}`);

    return {
        inventory,
        totalInventoryValue,
        filteredAffordable,
        formattedReportList,
        formattedReport: formattedReportList
    };
}

// Auto-run in Node.js CLI environment
if (typeof window === "undefined") {
    runTask07("Monitor", 150);
}

// Export for CommonJS and browser window contexts
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        classifyTier,
        runTask07
    };
}
if (typeof window !== "undefined") {
    window.classifyTier = classifyTier;
    window.runTask07 = runTask07;
}
