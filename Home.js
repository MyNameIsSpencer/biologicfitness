let goals = document.getElementById("goals").options;
let plans = document.getElementById("plans").options;



function updateGoal(choice) {
  for (let i=0; i < goals.length; i ++) {
    if (goals[i].value === choice) {
      goals.selectedIndex = i;
    }
  }
  console.log(goals.selectedIndex);
}

function updatePlan(choice) {
  for (let i=0; i < plans.length; i ++) {
    if (plans[i].value === choice) {
      plans.selectedIndex = i;
    }
  }
  console.log(plans.selectedIndex);
}
