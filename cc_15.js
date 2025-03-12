// Task 1: Creating the Base Structure
document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded"); // // print "Risk Dashboard Loaded" to the console.
    
    const form = document.getElementById("inputForm"); // selects the form

    form.addEventListener("submit", function(event) { //
        event.preventDefault(); // stops page from reloading
        const riskName = document.getElementById("risk").value //gets the name from the input field
        const riskLevel = document.getElementById("riskLevel").value // gets the risk level from the choice dropdown (L,M,H)
        const department = document.getElementById("department").value // gets the department from input field

        addRiskItem(riskName, riskLevel, department); // adds new risk card with the details
        this.reset(); // clears form after submitting
    });
});

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) { // write a function addRiskItem(riskName, riskLevel, department)
    const riskDashboard = document.getElementById("riskDashboard"); // (From Task 1) select the riskDashboard container

    const riskCard = document.createElement("div"); // creates a new risk card (div)
    riskCard.classList.add("riskCard"); 

    const nameHeading = document.createElement("h3"); // adds risk name to risk card
    nameHeading.textContent = `Risk Name: ${riskName}`;

    const levelParagraph = document.createElement("p"); // // adds risk level to risk card
    levelParagraph.textContent = `Risk Level: ${riskLevel}`;

    const departmentParagraph = document.createElement("p"); // // adds department to risk card
    departmentParagraph.textContent = `Department: ${department}`;

    // Task 3: Removing Risk Items
    const resolveButton = document.createElement("button"); // modifing addRiskItem to include a "Resolve" button
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function () { // buttom to click to remove card
        ticketContainer.removeChild(riskCard); // removes the corresponding risk card 
    });

    // assigning a class "riskCard" to each card
    riskCard.appendChild(nameHeading); // adds risk name to the card
    riskCard.appendChild(levelParagraph); // adds the risk level to the card
    riskCard.appendChild(departmentParagraph); // adds the department to the card
    riskCard.appendChild(resolveButton); // adds the resolve button to the card

    riskDashboard.appendChild(riskCard); // appends it to the riskDashboard
}

// Test Cases
// Task 2:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
// Task 3
addRiskItem("Market Fluctuations", "High", "Finance"); // clicking "Resolve" will remove risk from dashboard

