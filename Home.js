let goals = document.getElementById("goals").options;

// var select = document.getElementById('color');
// var currentOpt = select.options[select.selectedIndex];



function updateContactForm(choice) {
  let currentGoal = goals.selectedIndex;
  for (let i=0; i < goals.length; i ++) {
    if (goals[i].value === choice) {
      goals.selectedIndex = i;
    }
  }
  console.log(goals.selectedIndex);

}
