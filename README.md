# JavaScript Core Curriculum & Capstone Suite

A production-grade, modular JavaScript assignment repository implementing core ECMAScript specifications, structured variable renaming, and an interactive dark-mode dashboard runner styled with a **slate-and-teal palette** (`#0f172a` canvas, `#14b8a6` accents).

---

## 🚀 Quick Start

### 1. Browser Runner (Interactive Dashboard)
Simply open [`app_runner.html`](file:///C:/js_assignment_sumit/app_runner.html) in any modern web browser:
- **Interactive Prompts**: Trigger native browser prompts for dynamic user inputs (Tasks 02, 03, and 07).
- **Formatted Visual Consoles**: View styled, colorized terminal outputs per module.
- **Global Orchestration**: Sequentially execute all 7 modules with a single click, copy outputs, or export execution logs.

```bash
# Optional: Launch with a local static server
npx serve .
# Or simply double-click app_runner.html
```

### 2. Node.js CLI Execution
Run individual tasks or the complete automated verification test suite:

```bash
# Run complete test suite (55/55 assertions)
npm test

# Run individual modular tasks
node task_01_types.js
node task_02_billing.js
node task_03_evaluator.js
node task_04_iterations.js
node task_05_functions.js
node task_06_collections.js
node task_07_inventory_app.js
```

---

## 📁 Repository Architecture & Modular File Scheme

| File | Module Name | Core ECMAScript Concepts Demonstrated |
| :--- | :--- | :--- |
| [`task_01_types.js`](file:///C:/js_assignment_sumit/task_01_types.js) | Data Types & Declarations | `var`, `let`, `const`, primitive types, arrays, runtime `typeof` inspection |
| [`task_02_billing.js`](file:///C:/js_assignment_sumit/task_02_billing.js) | Billing & Gratuity Calculation | Explicit `Number()` casting, arithmetic operations, prompt handling |
| [`task_03_evaluator.js`](file:///C:/js_assignment_sumit/task_03_evaluator.js) | Academic Score & Grade Evaluator | `if...else` brackets, `switch-case` mapping, ternary operator (`>= 60`) |
| [`task_04_iterations.js`](file:///C:/js_assignment_sumit/task_04_iterations.js) | Iteration Loops & Jumps | `for` table loop, `while` with `break` condition, `do...while` with `continue` |
| [`task_05_functions.js`](file:///C:/js_assignment_sumit/task_05_functions.js) | Functions & Scope Isolation | Standard functions with default parameters, arrow expressions, standalone block scope |
| [`task_06_collections.js`](file:///C:/js_assignment_sumit/task_06_collections.js) | Collections & Higher-Order Methods | Object arrays, `forEach()` iteration, `filter()` predicates, `map()` transformation |
| [`task_07_inventory_app.js`](file:///C:/js_assignment_sumit/task_07_inventory_app.js) | Capstone Inventory Application | State management, dynamic item prompts, tier classifier, `reduce` accumulator |
| [`app_runner.html`](file:///C:/js_assignment_sumit/app_runner.html) | Interactive Browser Studio | Dark slate/teal dashboard, responsive cards, live logs, code modal |
| [`test_runner.js`](file:///C:/js_assignment_sumit/test_runner.js) | Automated Test Suite | Comprehensive unit & output validation (55/55 passing tests) |
| [`package.json`](file:///C:/js_assignment_sumit/package.json) | NPM Configuration | CLI scripts, metadata, and execution shortcuts |

---

## 🔍 Module Details & Expected Outputs

### Task 01: Data Types (`task_01_types.js`)
- **Restructured Variables**:
  - `candidateName` (`var`): `"Alice"`
  - `candidateAge` (`let`): `25`
  - `hasActiveJob` (`const`): `true`
  - `techStack` (`const` Array): `["HTML", "CSS", "JavaScript"]`
- **Output**:
  ```text
  Name: Alice (Type: string)
  Age: 25 (Type: number)
  Is Employed: true (Type: boolean)
  Skills: ["HTML", "CSS", "JavaScript"] (Type: object)
  ```

---

### Task 02: Billing & Gratuity (`task_02_billing.js`)
- **Restructured Variables**: `rawBillAmount` (`"100"`), `rawGratuityRate` (`"15"`)
- **Type Casting**: Explicit `Number()` conversion for calculation of tip and total payable.
- **Output**:
  ```text
  Subtotal: $100
  Tip Percentage: 15%
  Calculated Tip: $15
  Total Amount to Pay: $115
  ```

---

### Task 03: Evaluator (`task_03_evaluator.js`)
- **Restructured Variables**: `studentScore` (`85`), `computedGrade`, `outcomeStatus`
- **Logic**:
  - `if...else`: Evaluates score brackets (90+ A, 80-89 B, 70-79 C, 60-69 D, <60 F)
  - `switch`: Maps and validates letter grade
  - `ternary`: Assigns `"Passed"` if score &ge; 60, else `"Failed"`
- **Output**:
  ```text
  Score: 85
  Grade: B
  Status: Passed
  ```

---

### Task 04: Iterations (`task_04_iterations.js`)
- **Loops**:
  - `for`: Multiplication table of 5 up to factor 5
  - `while` (with `break`): Searches for the first integer > 10 divisible by 6
  - `do...while` (with `continue`): Skips odd sequence numbers
- **Output**:
  ```text
  Multiplication Table of 5
  5 x 1 = 5
  5 x 2 = 10
  5 x 3 = 15
  5 x 4 = 20
  5 x 5 = 25
  First number > 10 divisible by 6
  Found: 12
  ```

---

### Task 05: Functions & Block Scope (`task_05_functions.js`)
- **Functions**:
  - `computeBoxArea(baseDim = 5, heightDim = 4)`: Standard function declaration returning `20`
  - `arrowBoxArea = (baseDim = 5, heightDim = 4) => baseDim * heightDim`: Arrow expression called with `(10, 3)` returning `30`
- **Scope Isolation**: Block-scoped `isolatedBlockToken` inside standalone block `{ ... }`; caught via `try...catch` when accessed externally.
- **Output**:
  ```text
  Standard Function Area (Default 5x4): 20
  Arrow Function Area (Custom 10x3): 30
  Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)
  ```

---

### Task 06: Collections (`task_06_collections.js`)
- **Catalog Collection**:
  ```javascript
  const catalog = [
      { title: "Laptop", cost: 800 },
      { title: "Mouse", cost: 25 },
      { title: "Keyboard", cost: 45 }
  ];
  ```
- **Operations**:
  - `forEach()`: Displays item and price
  - `filter()`: Selects items with `cost < 50`
  - `map()`: Creates uppercase descriptions
- **Output**:
  ```text
  All Products (forEach)
  Item: Laptop
  Price: $800
  Item: Mouse
  Price: $25
  Item: Keyboard
  Price: $45
  Filtered Products (Price < $50)
  [ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]
  Mapped Product Tags (map)
  [ 'LAPTOP costs $800', 'MOUSE costs $25', 'KEYBOARD costs $45' ]
  ```

---

### Task 07: Capstone Inventory App (`task_07_inventory_app.js`)
- **Inventory Seed**: `Laptop ($800)` and `Mouse ($25)`
- **Dynamic Entry**: Browser prompt with default fallback `"Monitor"` at `150`
- **Tier Classification**:
  - `Premium`: Price &ge; 500
  - `Standard`: Price &ge; 100
  - `Budget`: Price &lt; 100
- **Analytics**:
  - Portfolio valuation via `reduce` accumulator
  - Filter for affordable items strictly under $200
  - Map transformed uppercase reporting array
- **Output**:
  ```text
  --- Initializing Inventory System
  [Prompt executed: User adds "Monitor" at "$150"]
  Processing Inventory Roster (forEach)
  * Item: Laptop ($800) -> Category: Premium
  * Item: Mouse ($25) -> Category: Budget
  * Item: Monitor ($150) -> Category: Standard
  Financial Analytics
  Total Inventory Value: $975
  Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
  Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
  ```

---

## 🎨 UI & Aesthetic Specification (`app_runner.html`)

- **Palette**: Dark Mode Slate & Teal
  - Primary Background: `#0f172a` (slate-900)
  - Card Surfaces: `#1e293b` (slate-800)
  - Accents & Highlights: `#14b8a6` (teal-500) and `#2dd4bf` (teal-400)
  - Border Accents: `#334155` (slate-700)
- **Features**:
  - Rounded cards with subtle glow borders (`teal-glow-hover`)
  - Dedicated interactive terminal consoles for each task
  - Individual clear/copy buttons and status indicator badges
  - Live unified master log stream
  - Integrated Source Code Inspector modal with one-click clipboard copying
  - Responsive design optimized across mobile, tablet, and widescreen displays
