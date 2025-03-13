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

    // Task 5
    document.getElementById("allIncrease").addEventListener("click", allIncrease); // event listener for updating all risks at once
});

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) { // write a function addRiskItem(riskName, riskLevel, department)
    const riskDashboard = document.getElementById("riskDashboard"); // (From Task 1) select the riskDashboard container

    const riskCard = document.createElement("div"); // creates a new risk card (div)
    riskCard.classList.add("riskCard"); 
    riskCard.setAttribute("storedLevel", riskLevel); // stores the risk level (Task 5)

    // Task 4: modifying addRiskItem to apply different background colors based on risk level
    if (riskLevel === "Low") {
        riskCard.classList.add("lowRisk"); // assigned if risk is Low
    } else if (riskLevel === "Medium") {
        riskCard.classList.add("mediumRisk"); // assigned if risk is Medium
    } else if (riskLevel === "High") {
        riskCard.classList.add("highRisk"); // assigned if risk is High
    }

    const nameHeading = document.createElement("h3"); // adds risk name to risk card
    nameHeading.textContent = `Risk Name: ${riskName}`;

    const levelParagraph = document.createElement("p"); // // adds risk level to risk card
    levelParagraph.textContent = `Risk Level: ${riskLevel}`;
    levelParagraph.classList.add("riskLevel"); // allow it to be selected for bulk updates (Task 5)

    const departmentParagraph = document.createElement("p"); // // adds department to risk card
    departmentParagraph.textContent = `Department: ${department}`;

    // Task 3: Removing Risk Items
    const resolveButton = document.createElement("button"); // modifing addRiskItem to include a "Resolve" button
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function (event) {  // buttom to click to remove card
        event.stopPropagation(); // (Task 6) ensuring clicking inside a risk card does not trigger unwanted actions
        riskDashboard.removeChild(riskCard); // removes the corresponding risk card 
        console.log(`${riskName} has been resolved`); // ensures risk card is being clicked
    });

    // assigning a class "riskCard" to each card
    riskCard.appendChild(nameHeading); // adds risk name to the card
    riskCard.appendChild(levelParagraph); // adds the risk level to the card
    riskCard.appendChild(departmentParagraph); // adds the department to the card
    riskCard.appendChild(resolveButton); // adds the resolve button to the card

    riskDashboard.appendChild(riskCard); // appends it to the riskDashboard

    highlightRiskItems(); // applies highlighting to cards
}

// Task 4: Categorizing Risks by Level
function highlightRiskItems() { //applying different colors based on risk level
    document.querySelectorAll(".highRisk").forEach(item => {
        item.style.backgroundColor = "rgb(252, 177, 177)"; // applies red for high risk 
    });
    document.querySelectorAll(".mediumRisk").forEach(item => {
        item.style.backgroundColor = "rgb(249, 251, 198)"; // applies yellow for medium risk
    });
    document.querySelectorAll(".lowRisk").forEach(item => {
        item.style.backgroundColor = "rgb(205, 243, 207)"; // // applies green for low risk
    });
}

// Task 5: Implementing Bulk Updates
function allIncrease() {
    document.querySelectorAll(".riskCard").forEach(riskCard => {
        const levelParagraph = riskCard.querySelector(".riskLevel"); // selects the risk level
        let initialLevel = riskCard.getAttribute("storedLevel");

        if(initialLevel === "Low") { // changes low cards to high
            riskCard.setAttribute("storedLevel", "Medium");
            levelParagraph.textContent = "Risk Level: Medium";
            riskCard.classList.remove("lowRisk"); // removes low risk
            riskCard.classList.add("mediumRisk"); // adds medium risk
        } else if 
            (initialLevel === "Medium") { // changes medium cards to high
            riskCard.setAttribute("storedLevel", "High");
            levelParagraph.textContent = "Risk Level: High";
            riskCard.classList.remove("mediumRisk"); // removes medium risk
            riskCard.classList.add("highRisk"); // adds high risk
        }
        highlightRiskItems(); // applies highlighting to cards
    });
}

// Test Cases
// Task 2:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
// Task 3
addRiskItem("Market Fluctuations", "High", "Finance"); // clicking "Resolve" will remove risk from dashboard
// Task 4: 
addRiskItem("Cybersecurity Threat", "High", "IT"); // appears in red
addRiskItem("HR Compliance Issue", "Low", "Human Resources"); // appears in green
// Task 5:
addRiskItem("Employee Retention", "Low", "HR"); // clicking "Increase Risk Levels" will change it to medium
