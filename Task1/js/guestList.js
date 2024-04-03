/* This is the guestList.js file that asks the user to input a list of guests and if 11 guests are entered it will replace one selected guest with the last guest entered.
If a user enters tries to enter a name that does not exist in the guest list they are prompted to enter a valid name.
The selected name to be replaced can be entered in any case.
The following links helped me understand the topic and how to solve the problem:
 - HyerionDev Data Structures - Arrays, Strings and Maps pdf and examples
 - https://www.w3schools.com/js/js_array_methods.asp
For more information about this please visit https://github.com/IronMike4/data_structures */

// Initialize an empty array to store the list of guests
let guestList = [];

// Prompt the user to input the names of people they would like to invite
for (let i = 0; i < 11; i++) {
  let name = prompt(
    `Enter the name of guest ${i + 1} (or leave blank and press OK to finish):`
  );

  // If the user cancels the prompt or leaves it blank the loop will exit
  if (name === null || name === "") break;

  // If the guest list already has 10 names, the user is prompted if they want to replace someone
  if (guestList.length === 10) {
    let replacementChoice;
    do {
      // Prompt the user if they want to replace someone or not
      replacementChoice = prompt(
        "You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no:"
      );
      replacementChoice = replacementChoice
        ? replacementChoice.toLowerCase()
        : "";
      // If the user enters an invalid choice and alert is displayed to inform them of the invalid choice
      if (replacementChoice !== "yes" && replacementChoice !== "no") {
        alert("Invalid choice. Please enter 'yes' or 'no'.");
      }
    } while (replacementChoice !== "yes" && replacementChoice !== "no");

    // If the user chooses to replace someone
    if (replacementChoice === "yes") {
      let replacementName;
      let replacementIndex;

      // Continue prompting the user until a valid name is entered
      while (true) {
        replacementName = prompt(
          "Please enter the name of the person you would like to replace:"
        );

        // Check if the entered name exists in the guest list
        let nameFound = false;
        for (let j = 0; j < guestList.length; j++) {
          if (guestList[j].toLowerCase() === replacementName.toLowerCase()) {
            nameFound = true;
            replacementIndex = j;
            break;
          }
        }

        // If the name is found in the guest list, break out of the loop
        if (nameFound) break;

        // If the name is not found in the guest list, display an alert and continue the loop
        alert(
          "The name you entered is not found in the guest list. Please try again."
        );
      }

      // Replace the name found at the index with the new name
      guestList[replacementIndex] = name;
      break;
    }
  } else {
    // If the guest list has less than 10 names the new name is added to the list
    guestList.push(name);
  }
}

// Display the guest list on the HTML page
document.write(guestList.join(", "));
