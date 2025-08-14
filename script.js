// =========================
// PART 1: JavaScript Basics
// =========================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = prompt("Enter your age:");
    if (age >= 18) {
        document.getElementById("ageResult").textContent = "You are an adult!";
    } else {
        document.getElementById("ageResult").textContent = "You are a minor!";
    }
});

// =========================
// PART 2: Functions
// =========================

// Function 1: Greet the user
function greet(name) {
    return "Hello, " + name + "! Welcome.";
}

document.getElementById("greetBtn").addEventListener("click", function() {
    let name = prompt("Enter your name:");
    document.getElementById("greetMessage").textContent = greet(name);
});

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Total price (example): $" + calculateTotal(20, 3));

// =========================
// PART 3: Loops
// =========================
document.getElementById("loopBtn").addEventListener("click", function() {
    let list = document.getElementById("loopOutput");
    list.innerHTML = ""; // clear previous output

    // For loop
    for (let i = 1; i <= 3; i++) {
        let li = document.createElement("li");
        li.textContent = "For Loop Count: " + i;
        list.appendChild(li);
    }

    // While loop
    let count = 3;
    while (count > 0) {
        let li = document.createElement("li");
        li.textContent = "While Loop Countdown: " + count;
        list.appendChild(li);
        count--;
    }
});

// =========================
// PART 4: DOM Manipulation
// =========================

// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("domText").textContent = "Text has been changed!";
});

// Add new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("domList").appendChild(newItem);
});

// Toggle style
document.getElementById("toggleStyleBtn").addEventListener("click", function() {
    document.getElementById("highlightBox").classList.toggle("highlight");
});
