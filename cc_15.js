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

    // assigns a class "riskCard" to each card
    riskCard.appendChild(nameHeading);
    riskCard.appendChild(levelParagraph);
    riskCard.appendChild(departmentParagraph);

    riskDashboard.appendChild(riskCard); // appends it to the riskDashboard
}

// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
