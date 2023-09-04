import inquirer from "inquirer";

interface ansType {

    userID: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number,
}
const answers: ansType = await inquirer.prompt([
       {
              type:"input",
              name:"userID",
              message:"Enter your UserId: ",
      
      },
      {
              type:"input",
              name:"userPin",
              message:"Enter your PIN Code: ",

       },
       {
              type:"list",
              name:"accountType",
              choices:["Current Account","Saving Account"],
              message:"Select your account type: ",

       },

       {     
              type:"list",
              name:"transactionType",
              choices:["Fast Cash","Withdraw"],
              message:"Please Select Your Transaction: ",
              when (answers)
              {
                     return answers.accountType
              },
             
                     
       },
       {
              
              type:"list",
              name:"amount",
              choices:[1000,2000,5000,10000],
              message:"Select Your Amount: ",
              when (answers)
              {
                     return answers.transactionType === "Fast Cash"
              },
       },
       {
              
              type:"number",
              name:"amount",
              message:"Enter your Amount:  ",
              when (answers)
              {
                     return answers.transactionType === "Withdraw"
              },
       },
])

if(answers.userID && answers.userPin)
{
       const balance = Math.floor(Math.random()* 1000000);
       console.log("Your Previous balance is:",balance);
       const EnteredAmount = answers.amount;
       if(balance >= EnteredAmount)
       {
              const remaining = balance - EnteredAmount;
              console.log("Your Remaining Balance is:", remaining);
       }
       else
       {
              console.log("Insufficient Balance");
       }
}  


//console.log(answers);
