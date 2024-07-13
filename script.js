document
  .getElementById("weightCalculator")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const targetWeight = parseFloat(
      document.getElementById("targetWeight").value
    );
    const system = document.getElementById("system").value;

    if (isNaN(weight) || isNaN(targetWeight)) {
      alert("Please enter valid values for weight and target weight.");
      return;
    }

    let weeksToReachGoal = 0;

    if (system === "metric") {
      weeksToReachGoal = Math.floor((weight - targetWeight) / 0.5);
    } else if (system === "imperial") {
      weeksToReachGoal = Math.floor((weight - targetWeight) / 1.1);
    }

    if (weeksToReachGoal < 0) {
      document.getElementById("result").textContent =
        "You have already reached your target weight!";
    } else {
      document.getElementById(
        "result"
      ).textContent = `It will take ${weeksToReachGoal} weeks to reach your target weight with the help of LeanBiome.`;
    }
  });
