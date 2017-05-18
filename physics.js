const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


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
    if(str == "v"){
      end();
    };
    if(str == "a"){
      end();
    };
  })

};
else if(str == "energy"){
  else if(str == "ke"){
    end();
  };
  else if(str == "m"){
    end();
  };
  else if(str == "v"){

  };

};

});
