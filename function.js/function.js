function message(){
 alert("I know he loves me");  
}



let balance = 5000;
let acessPin = "1234";

function message() {
    alert("I know he loves he");
  }

function isPinValid(pin) {
  return acessPin === pin;
}

function deposit(amount) {
  balance += amount;
  alert(deposited successfully: ${balance});
}

function withdrawal(amount) {
   
  if (amount > balance) {
    alert("insufficient fund");
  } else {
    balance -= amount;
    alert(
      ${amount} has been withdrawn from your account.\n new balance is: ${balance}
    );
  }
}

function inquiry() {
  alert(Your current balance is: ₦${balance});
}
function isPinValid(pin) {
  return acessPin === pin;
}

function atmApp() {
  let tryAgain = "";
  let choice;

  do {
    choice = parseInt(
      prompt(
        "Please select from menu\n1:Deposit\n2:Withdrawal\n3:Inquiry\n4:Exit"
      )
    );
    switch (choice) {

       
      case 1:
        let depositamount = parseFloat(prompt("Enter the amount to deposit"));
        if(depositamount !==isNaN){
            alert("wrong input ....")
        }else{
        deposit(depositamount);
        }
        break;
      case 2:
       let amount = parseFloat(prompt("Enter the amount to be withdrawn"));
        let userPin = prompt("Enter your pin");
        if (isPinValid(userPin)) {
          withdrawal(amount);
        } else {
          alert("wrong pin, try again");
        }
        break;
      case 3:
        let pin = prompt("Enter your pin");
        if (isPinValid(pin)) {
          inquiry();
        } else {
          alert("Wrong pin");
        }
        break;
      case 4:
        console.log("exiting");
        break;
      default:
        alert("wrong input ");
    }

    if (choice !== 4) {
      tryAgain = prompt(
        "do you want to try another transaction?yes/no"
      ).toLowerCase();
    }
  } while (tryAgain === "yes");
}
