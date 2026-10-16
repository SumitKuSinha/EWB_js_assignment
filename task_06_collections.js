/**
 * Task 06: Collections & High-Order Array Methods
 * Demonstrates:
 * 1. Array of product objects ({ title, cost })
 * 2. forEach() iteration to display each item and price
 * 3. filter() to extract products with cost < 50
 * 4. map() to generate formatted uppercase summary strings
 */

// Product catalog collection initialized per specification
const catalog = [
    { title: "Laptop", cost: 800 },
    { title: "Mouse", cost: 25 },
    { title: "Keyboard", cost: 45 }
];

/**
 * Executes Task 06 collection transformations and logs output.
 * @param {Function} [customLog=console.log] - Optional logger sink
 * @returns {Object} Catalog, filtered results, and mapped tags
 */
function runTask06(customLog = console.log) {
    // 1. forEach iteration over catalog
    customLog("All Products (forEach)");
    catalog.forEach(product => {
        customLog(`Item: ${product.title}`);
        customLog(`Price: $${product.cost}`);
    });

    // 2. filter() items with cost < 50, mapped to canonical { name, price } schema
    const filteredProducts = catalog
        .filter(item => item.cost < 50)
        .map(item => ({ name: item.title, price: item.cost }));

    customLog("Filtered Products (Price < $50)");
    customLog(filteredProducts);

    // 3. map() generating uppercase formatted product descriptions
    const mappedProductTags = catalog.map(
        item => `${item.title.toUpperCase()} costs $${item.cost}`
    );

    customLog("Mapped Product Tags (map)");
    customLog(mappedProductTags);

    return {
        catalog,
        filteredProducts,
        mappedProductTags
    };
}

// Auto-run in Node.js CLI environment
if (typeof window === "undefined") {
    runTask06();
}

// Export for CommonJS and browser window contexts
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        catalog,
        runTask06
    };
}
if (typeof window !== "undefined") {
    window.catalog = catalog;
    window.runTask06 = runTask06;
}
