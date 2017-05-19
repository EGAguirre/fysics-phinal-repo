const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function end(){
    terminal.close();
}

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}

const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
if(str == "motion"){
  terminal.question("which variable are you solving for?",function(str){
    if(str == "d"){
      end();
    };
    else if(str == "v"){
      end();
    };
    else if(str == "a"){
      end();
    };
  });

};
else if(str == "energy"){
  terminal.question("which variable are you looking for?",function(str){
    if(str == "ke"){
      terminal.question("",function(answers){
        printOptions();
        console.log(energy.kineticEnergy(answers[4],answers[1]));
      });
    end();
    };
    else if(str == "m"){
      terminal.question("",function(answers){
        printOptions();
        console.log(energy.mass(answers[5],answers[1]));
      };
      end();
    };
    else if(str == "v"){
      terminal.question("",function(answers){
        printOptions();
        console.log(energy.velocity(answers[5],answers[4]));
      };
  });
};
else{
  return "I'm sorry I don't know how to calculate that yet..."
};

});
