
// SMART EXPENSE & BUDGET TRACKER

// STEP 01: Budget Setup

const MONTHLY_BUDGET = 1000;


// STEP 02: Add Expense using push()

function addExpense(list, amount) {
    list.push(amount);
    console.log("After Adding Expense:", list);
}


// STEP 03: Undo Last Expense using pop()

function undoLastExpense(list) {
    let removedExpense = list.pop();
    return removedExpense;
}


// STEP 04: includes(), indexOf() and slice()

// These methods will be used inside the final report.


// STEP 05: Calculate Valid Total using for Loop

function calculateValidTotal(list) {
    let total = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] === 0) {
            continue;
        }

        total = total + list[i];
    }

    return total;
}


// STEP 06: Process Pending Bills using while

function processBillQueue(currentTotal, queue, limit) {
    let i = 0;
    let total = currentTotal;

    while (i < queue.length) {
        let bill = queue[i];

        if (total + bill > limit) {
            console.log("Budget Limit Exceeded!");
            console.log("Cannot Process Bill: $" + bill);
            break;
        }

        total = total + bill;

        console.log("Bill Processed: $" + bill);
        console.log("Updated Total: $" + total);

        i++;
    }

    return total;
}


// STEP 07: Find High Expenses using Arrow Function

const getHighExpenses = (list, minAmount = 100) => {
    return list.filter(amount => amount >= minAmount);
};


// STEP 08: Format Receipts using filter(), map() and forEach()

function formatReceipts(list) {
    let validExpenses = list.filter(amount => amount !== 0);

    let receipts = validExpenses.map((amount, index) => {
        return `Item #${index + 1}: $${amount.toFixed(2)}`;
    });

    receipts.forEach(receipt => {
        console.log(receipt);
    });
}


// STEP 09: Final Report & Function Hoisting

// Function call before declaration
runBudgetReport();

function runBudgetReport() {

    console.log("Welcome to Expense Tracker!");

    // Local Expenses Array
    let expenses = [120, 45, 0, 300, 15, 85];

    console.log("Monthly Budget: $" + MONTHLY_BUDGET);
    console.log("Initial Expenses:", expenses);


    // Add Expense
    addExpense(expenses, 210);


    // Undo Last Expense
    let removed = undoLastExpense(expenses);

    console.log("Removed Expense: $" + removed);
    console.log("Updated Expenses:", expenses);


    // includes() and indexOf()
    console.log("Includes 300:", expenses.includes(300));
    console.log("Includes 500:", expenses.includes(500));

    console.log("Index of 300:", expenses.indexOf(300));
    console.log("Index of 500:", expenses.indexOf(500));


    // slice()
    let recentExpenses = expenses.slice(-3);

    console.log("Recent Expenses:", recentExpenses);


    // Calculate Valid Total
    let totalExpenses = calculateValidTotal(expenses);

    console.log("Total Valid Expenses: $" + totalExpenses);


    // Process Pending Bills
    let pendingBills = [150, 200, 300, 100];

    let finalTotal = processBillQueue(
        totalExpenses,
        pendingBills,
        MONTHLY_BUDGET
    );

    console.log("Final Total: $" + finalTotal);
    console.log("Remaining Budget: $" + (MONTHLY_BUDGET - finalTotal));


    // Find High Expenses
    let highExpenses = getHighExpenses(expenses);

    console.log("High Expenses:", highExpenses);


    // Find Expenses Above 50
    let expensesAbove50 = getHighExpenses(expenses, 50);

    console.log("Expenses Above 50:", expensesAbove50);


    // Format Receipts
    formatReceipts(expenses);

}
