
/*

NEED TO DO:
DISPLAY FREE SLOTS FOR EQUIPED ITEMS
MAKE IT SO THEY CAN ONLY EQUIP ONE ITEM IN EACH SLOT
Check out sleep and emojis

*/

var ask = require('readline-sync');

var player = require('play-sound')(opts = {});



// Sets variable to play music on game start
var enterAudio = player.play('./Royal_Entrance.mp3', function(err){
    if (err && !err.killed) throw err
  })



//play music for enemy battle
 var battleAudio;

 function battleAudioPlay() {
 battleAudio = player.play('./battle.mp3', function(err){
     if (err && !err.killed) throw err
   });
 
 }


//play music when play action is run
var runMotionAudio;

function runMotionAudioPlay() {
    creditsAudio = player.play('./runMotion.wav', function(err){
        if (err && !err.killed) throw err
        });
        
}

//Play music when play action is walk
var walkMotionAudio;

function walkMotionAudioPlay() {
    creditsAudio = player.play('./walkMotion.wav', function(err){
        if (err && !err.killed) throw err
        });
        
}



//play music for end credits
var creditsAudio;

function creditsAudioPlay() {
creditsAudio = player.play('./endCredits.mp3', function(err){
    if (err && !err.killed) throw err
    });
    
}


//  //play music for main menu
//  var menuAudio;

// function menuAudioPlay() {
// menuAudio = player.play('./menu.mp3', function(err){
//     if (err && !err.killed) throw err
//   });

// }



//play music for checking inventory 
var inventoryAudio;

function inventoryAudioPlay() {
inventoryAudio = player.play('./doIt.mp3', function(err){
    if (err && !err.killed) throw err
 });
   
}


//play music for checking player stats
var statsAudio;

function statsAudioPlay() {
    statsAudio = player.play('./stats.mp3', function(err){
      if (err && !err.killed) throw err
    });
    
}


 //play music for achievement
 var achievementAudio;

function achievementAudio() {
battleAudio = player.play('./achievement.mp3', function(err){
    if (err && !err.killed) throw err
  });

}

// battleAudio()
  //battleAudio.kill();



/////////////////////////////////////////////////////////////
//  PLAYERS AND ENEMIES CONSTRUCTIORS
//////////////////////////////////////////////////////////////////

// Creates Player
function Player(hp, score){
    this.hp = hp;
    this.score = score;
    // Attack for a random amount
   // this.attack = attack();
    this.inventory = [ {
            name:  'Sword',
            attackBonus: 1,
            defenseBonus: 1,
            escapeBonus: 0,
            heal: 0,
            score: 1,
            },{
            name:  'Swat Boots',
            attackBonus: 0,
            defenseBonus: 0,  
            escapeBonus: 2,
            heal: 0,
            score: 1,
            }
    ];
    this.equiped = [{
        name:  'Fists',
        attackBonus: 1,
        defenseBonus: 0,  
        escapeBonus: 0,
        heal: 0,
        score: 1,
        }, {
        name:  'Shoes',
        attackBonus: 0,
        defenseBonus: 0,
        escapeBonus: 1,
        heal: 0,
        score: 1,
        },
    ];
    this.bonus = []
}

//  Creates Enemy
function Enemy(name, hp, isAlive){
    this.name = name;
    this.hp = hp;
    this.isAlive = isAlive;
    // Attack for a random amount
    this.attack = function() {
        // returns a random number between 5 - 20
        return Math.floor(Math.random() * (25 - 5) + 5)
    }
}

//////////////////////////////////////////////
/////////////////////////////////////////////

//  GLOBAL VARIABLES
var player1 = new Player(100,0);
var playerChoiceOptions = ['Walk', 'Run' , 'Attack', 'Check Inventory', 'My Stats', ];
var inventorySelector = [];
var playerInventoryOptions = [];
// Defines weapon, armor, and health items an enemy can drop.  higher percentage than trophies
var enemyDrops = [  {
    name:  'Morphine',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 30,
    score: 1,
    }, {
    name:  'Morphine',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 30,
    score: 1,
    },{
    name:  'Sword',
    attackBonus: 1,
    defenseBonus: 1,
    escapeBonus: 0,
    heal: 0,
    score: 1,
    }, {
    name:  'Shield',
    attackBonus: 0,
    defenseBonus: 1,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    }, {
    name:  'Spear',
    attackBonus: 1,
    defenseBonus: 0,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    },{
    name:  'Hiking Boots',
    attackBonus: 0,
    defenseBonus: 0,  
    escapeBonus: 1,
    heal: 0,
    score: 1,
    }, {
    name:  'Swat Boots',
    attackBonus: 0,
    defenseBonus: 0,  
    escapeBonus: 2,
    heal: 0,
    score: 1,
    },{
    name:  'Swat Armor',
    attackBonus: 0,
    defenseBonus: 2,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    },{
    name:  'Riot Shield',
    attackBonus: 0,
    defenseBonus: 2,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    },{
    name:  'Brass Knuckles',
    attackBonus: 1,
    defenseBonus: 0,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    }, {
    name:  'Pistol',
    attackBonus: 2,
    defenseBonus: 0,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    }, {
    name:  'Knife',
    attackBonus: 1,
    defenseBonus: 0,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    },{
    name:  'Shotgun',
    attackBonus: 3,
    defenseBonus: 0,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    },{
    name:  'AR-15',
    attackBonus: 4,
    defenseBonus: 0,  
    escapeBonus: 0,
    heal: 0,
    score: 1,
    },{
    name:  'Med Kit',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 50,
    score: 1,
    },{
    name:  'Med Kit',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 50,
    score: 1,
    },{
    name:  'Bandages',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 20,
    score: 1,
    },{
    name:  'Bandages',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 20,
    score: 1,
    },{
    name:  'Bandages',
    attackBonus: 0,
    defenseBonus: 0,
    escapeBonus: 0,
    heal: 20,
    score: 1,
    },
];


//  Defines the trophy items an emey can drop
var trophyDrops = [
    {
       name:  'Hoverboard',
       attackBonus: 0,
       defenseBonus: 0,  
       escapeBonus: 10,
       heal: 100,
       score: 1000,
    },{
        name:  'Lightsaber',
        attackBonus: 10,
        defenseBonus: 5,  
        escapeBonus: 0,
        heal: 100,
        score: 1000,
     },{
        name:  'Iron Man Armor',
        attackBonus: 5,
        defenseBonus: 10,  
        escapeBonus: 0,
        heal: 100,
        score: 1000,
     }, {
        name:  'Voight Kampff Machine',
        attackBonus: 5,
        defenseBonus: 5,  
        escapeBonus: 10,
        heal: 100,
        score: 1000,
     }
]


//////////////////////////////////////////

// GAME FUNCTIONS

//  Check Player Stats
function checkStats(){
    statsAudioPlay()
    console.log(`Here are your stats: \n
    Name: ${player1.name}    Current Health: ${player1.hp}    Score:  ${player1.score} \n `)
    
    //  Outputs the name of each item equiped
    console.log(`You have equiped:`)
    player1.equiped.forEach(function(item){
       console.log(` ${item.name}`)
    });
    
    bonus();

    attackBonus();

    //menuAudio.kill();

    //  Ends intro music if that was their previous menu
    enterAudio.kill();
    // Ends music from the stats page if that was the players previous menu.
    if( inventoryAudio){
        inventoryAudio.kill()
    }
    //  Doesnt allow stats audio to play if they are in a battle
    if( battleAudio){
        statsAudio.kill()
    }
}
 

// Walking
function walk(){
    // ends intro music
    enterAudio.kill();
    // console.log(enterAudio)
    walkMotionAudioPlay();
  // Ends music from the stats page is that was the players previous menu.
  if(statsAudio){
    statsAudio.kill()
  }
 
  // Increases player score by 1 each walk
  player1.score++

    console.log("\nYou chose to walk.")
   
    // Generates a 1 in 4 change for a random enemy
    var generateEnemy = Math.floor(Math.random() * 4);
    // Enemy is generated.  
    //console.log(`Random enemy chance is ${generateEnemy}`);
        if (generateEnemy === 0) {
           // Generate battle music
           battleAudioPlay()
            console.log(`You met an enemy!`)
            meet();

        } else {
    // NO Enemie generated.  Continue Playing.
            console.log(`You did not encounter an enemy.  Continue along your quest.`);
        }
}



// Running
function run(){
    // Ends music from the stats page if that was the players previous menu.
    if(statsAudio){
        statsAudio.kill()
    }
     // Ends music from the inventory page if that was the players previous menu.
     if(inventoryAudio){
        inventoryAudio.kill()
    }
    // Ends intro music if run if the players first menu choice on play
    enterAudio.kill();
    
     // Increases player score by 10 each run
    player1.score += 10

    // Decrements the player hp by 2 if they are still alive and choose to run.
    if (player1.hp > 0) {
        //  Play sound effect for running
        runMotionAudioPlay();
        player1.hp -= 2;
        console.log(`You chose to run and loose 2 HP.  Your HP is now at: ${player1.hp} `)
    
    ///  If player chooses to run and their hp drops below 0, this ends the game.
    } else {
        console.log(`\nYou have made a poor decision and ran when your health was too low.  You have run out of health and died.  \n
        
     
        .-"-.        .-:-.        .-"-.
       / RIP |      / RIP |      / RIP |
       |     |      |     |      |     |
       |     |      |     |      |     |
       " " "" "    " ' "" "     " '  """ "  \n

        
        While you are slowly dying a painfull death, your body gets looted. \n`);
        endGameCredits();
    }
};



//  Check Inventory
function checkInventory(){
    /// Kills intro music
    enterAudio.kill();
    
    // Ends music from the stats page if that was the players previous menu.
    if(statsAudio){
        statsAudio.kill()
    }

    //  Begins inventory soundtrack
    if(inventoryAudio){
        inventoryAudio.kill()
    };
    inventoryAudioPlay();

     // Ends music from the stats page if that was the players previous menu.
     if( battleAudio){
        inventoryAudio.kill()
    }

    //  Displays the name of current inventory items
    player1.inventory.forEach(function(item){
        if (playerInventoryOptions.indexOf(item.name) === -1) {
            playerInventoryOptions.push(item.name);
        }
    });
    
    ///   Displays the sub-menu for examining item more closely.
    var isLooking = true;
    while( isLooking === true) {
    var inventoryChoice = ask.keyInSelect(playerInventoryOptions, "Which item would you like to examine an item more closely? \n")
    console.log('inventory choice variable is ' + inventoryChoice)

    // Adds the selected item to the global inventory selector variable.   
    var inventorySelector = (player1.inventory[inventoryChoice]);
    //console.log(inventorySelector);
        //  Display the sub menu of stats from an individual item
        //  Player gets stuck in a loop here.  We use a line in the equip function to reset the inventory menu.
        
            if (inventoryChoice !== -1){
            console.log(`${player1.inventory[inventoryChoice].name}: \b
            Attack Bonus: ${player1.inventory[inventoryChoice].attackBonus} \b
            Defense Bonus: ${player1.inventory[inventoryChoice].defenseBonus} \b
            Escape Bonus: ${player1.inventory[inventoryChoice].escapeBonus}\b
            Heal Capability: ${player1.inventory[inventoryChoice].heal}\b
            Score Value: ${player1.inventory[inventoryChoice].score}`);
            equip(inventorySelector);
            isLooking = false;
        
            } else {
                isLooking = false;
                // Ends music from the inventory page if that was the players previous menu.
                if(inventoryAudio){
                    inventoryAudio.kill()
                }
            }
    }
};


function equip(inventorySelector){

    // When player is looking at a specific item in the inventory...  Do they want to equip item?
    if (ask.keyInYN('\nDo you want to equip this item?')) {
        // checks to see if item has already been equiped.  

        var objectAlreadyEquiped = player1.equiped.find(function (item){
            return item === inventorySelector
        });

        if (objectAlreadyEquiped === undefined){
            //  If not alread equiped, it alows them to equip.
            player1.equiped.push(inventorySelector);
            
            console.log('\nGreat. This item has been equiped.')
            checkInventory()
            //  If the item has previously been equiped:
        } else {
            console.log(`\nYou have already equiped this item.  Look under your stats.`)
            checkInventory()
        }
    } else {
        console.log('\nOk.  This item has been returned to your inventory.')
        checkInventory()
    }; 
};



//   Meeting Enemies 
function meet(){

    // Ends music from the stats page is that was the players previous menu.
    if(statsAudio){
     statsAudio.kill()
    }
     // Ends music from the stats page if that was the players previous menu.
    if( inventoryAudio){
        inventoryAudio.kill()
    }

    //  Creates all enemies

    var cyclops = new Enemy('Cyclops', 60, true);
    var zombie = new Enemy('Zombie', 40, true);
    var dragon = new Enemy('Dragon', 100, true);
    //  Pulls random enemy
    var enemies = [cyclops.name, zombie.name, dragon.name,];
    var randomEnemy = enemies[Math.floor(enemies.length * Math.random())];

    console.log(` \nThe enemy you encountered is ${randomEnemy}! \n`)
        //  If they meet Zombie
        if (randomEnemy === 'Zombie') {
            console.log(` 
            _,--~~~,
            .'        '.
            |           ;
            |           :
           /_,-==/     .'
         /'')*  ;      :      
       :'    '-        :      
       '~*,'     .     :      
          :__.,._  ';  :      
          ')'    )  '  ',     
              )-/  '     )     
              :'          ) _
               '~---,-~    ',)
___                   )     /~')
)---__ ';~~~-------------~~~(| _-'    ',
---, ' )'-._____     _______.---'         )
)--- '~~-',      ~~~~~~                     ',
)----      )                                   )
)----.  __ /                                    '-
)----'' -~____  
    ~~~~~--------,.___     
                      '''''')_
            
            ${zombie.name} has hp of ${zombie.hp} and does an attack under 20 damage. \n
            You can either WALK, RUN, or FIGHT.  Maybe you have something useful in your inventory...?`)
            encounter(zombie);

        //  If they meet Cyclops
        } else if (randomEnemy === 'Cyclops') {
            console.log(`
            
                                             _......._
                                         .-'.'.'.'.'.'..-.
                                       .'.'.'.'.'.'.'.'.'.'.
                                      /.'.'               '.
                                      |.'    _.--...--._     |
                                      |    '._.-.....-._.'   /
                                      |     _..- .-. -.._   |
                                   .-.'    '.   ((@))  .'   '.-.
                                  ( ^ |      '--.   .-'     / ^ )
                                   |  /         .   .       )  /
                                   /          .'     '.  .-    )
                                  ( _.       (_'-._.-'_)    /.._)
                                   '-' ]   ' .--.          / '-'
                                       |  / /|_| '-._.')   |
                                       |   |       |_| |   /-.._
                                   _..-\   '.--.______.'  |
                                        \       .....     |
                                         '.  .'      '.  /
                                           \           .'
                                            '-..___..-' \n

            ${cyclops.name} has hp of ${cyclops.hp} and does an attack under 20 damage. \n
            You can either WALK, RUN, or FIGHT.  Maybe you have something useful in your inventory...? `)
            encounter(cyclops);
        } 
        //  If they meet Dragon
        else if (randomEnemy === 'Dragon') {
            console.log(` 
            
  .:'                                  ':.                                    
 ::                                     ::                                   
:: :.                                .: ::                                  
':. ':.             .             .:'  .:'                                   
 '::. '::           !           ::' .::'                                     
     '::.'::.    .' ! '.    .::'.::'                                         
       ':.  '::::'':!:''::::'   ::'                                          
       :'*:::.  .:' ! ':.  .:::*':                                           
      :: HHH::.   ' ! '   .::HHH ::                                          
     ::: 'H TH::.  '!'  .::HT H' :::                                         
     ::..  'THHH:':   :':HHHT'  ..::                                         
     '::      'T: '. .' :T'      ::'                                         
       ':. .   :         :   . .:'                                           
         '::'               '::'                                             
           :'  .'.  .  .'.  ':                                               
           :' ::.       .:: ':                                               
           :' ':::     :::' ':                                               
            '.  ''     ''  .'                                                
             :'...........':                                                 
             ' :'.     .': '                                                 
              ':  '"""'  :'

            ${dragon.name} has hp of ${dragon.hp} and does an attack under 20 damage. \n
            You can either WALK, RUN, or FIGHT.  Maybe you have something useful in your inventory...?`)
            encounter(dragon);
        }
};






/////////////////////////////////
//  Encountering and Interacting with Enemies
function encounter(enemy){
    while (enemy.isAlive === true){
        var userChoice = ask.keyInSelect(playerChoiceOptions, "What would you like to do? \n")
        
        // If the user choose to walk away from enemy
        if(userChoice === 0){
            console.log(`You chose to walk away from ${enemy.name}.  \nMost enemies are too fast to walk away from, but I guess you wanted to take your chances.`)
            
            //  Player has a 1 in 10 chance of walking away.
            var walkAwayProbability = Math.floor(Math.random() * 10);
            //console.log(`walk away probability is: ${walkAwayProbability}`);

            /// If player excapes Enemy
                if (walkAwayProbability === 0) {
                    if( battleAudio){
                        battleAudio.kill()
                    }
                    console.log(`Nice job!  You were able to escape ${enemy.name}!`)
                    enemy.isAlive = false;

                ///  //  If player tried to walk away and wasnt able to, but died
                } else if (player1.hp < 1){
                    console.log(`\nSadly you have been killed by ${enemy.name}.  \n 
                    While you are slowly dying a painfull death, your body gets looted. \n`);
                    
                    if( battleAudio){
                        battleAudio.kill()
                    }
                    enemy.isAlive = false;
                    endGameCredits();

                    //  If player tried to walk away and wasnt able to, but is still alive
                }  else {
                    // Generates players defense bonus
                    defense();
                    // Generates a random number for enemy attack
                    var attackOutcome = enemy.attack();
                    // Total damage to player from attack:
                    var thisEnemyAttack = attackOutcome - defenseOutcome;
                    //  Result of the attack:
                    player1.hp = player1.hp - thisEnemyAttack;
                    console.log(`Unfortunately You couldnt get away from ${enemy.name} this time... \n
                    ${enemy.name} was able to attack you while you were trying to flee! \n
                    You were dealt ${thisEnemyAttack} damage.  Your health is now at ${player1.hp}.`)
                }

        //  Player tries to run.  They have a 33% chance of getting away.
        } else if (userChoice === 1){
            console.log(`You are trying to run away from ${enemy.name}`);
            var runAwayProbability = Math.floor(Math.random() * 3);
            //console.log(`Run probability is: ${runAwayProbability}`);
            run();
                /// If player excapes Enemy
                if (runAwayProbability === 0) {
                    //ends enemy battle music
                    battleAudio.kill()
                    console.log(`Nice job!  You were able to escape ${enemy.name}!`)
                    enemy.isAlive = false;

                ///  If player wasnt able to run away, they get attacked
                } else {
                    // Generates players defense bonus
                    defense();
                    // Generates a random number for enemy attack
                    var attackOutcome = enemy.attack();
                    // Total damage to player from attack:
                    var thisEnemyAttack = attackOutcome - defenseOutcome;
                    //  Result of the attack:
                    player1.hp = player1.hp - thisEnemyAttack;
                    console.log(`Unfortunately You couldnt get away from ${enemy.name} this time... \n
                    ${enemy.name} was able to attack you while you were trying to flee! \n
                    You were dealt ${thisEnemyAttack} damage.  Your health is now at ${player1.hp}.`)
                }

        } else if (userChoice === 2){
            ///  Attack Sequence
                console.log(`\nYou have chosen to attack`);
                //  Player attacks Enemy first
                var thisPlayerAttack = attack();
                console.log(`\nYou dealt ${thisPlayerAttack} damage to ${enemy.name}!`);
                enemy.hp = enemy.hp - thisPlayerAttack;

                // Enemy Attacks Player second
                var thisEnemyAttack = enemy.attack();
                // Generates players defense bonus
                defense();
                // Generates a random number for enemy attack
                var attackOutcome = enemy.attack();
                // Total damage to player from attack:
                var thisEnemyAttack = attackOutcome - defenseOutcome;
                //  Result of the attack:
                player1.hp = player1.hp - thisEnemyAttack;
                console.log(`But ${enemy.name} also dealt you ${thisEnemyAttack} damage in the fight!  Your HP is now ${player1.hp}.\n`);

                // Increases player score by 10 each attack
                player1.score += 10

                    //  Enemy is still alive
                    if (player1.hp < 1 ){
                        console.log(` \n Sadly you have been killed by ${enemy.name}.  \n 
                        
                         
                        .-"-.        .-:-.        .-"-.
                       / RIP |      / RIP |      / RIP |
                       |     |      |     |      |     |
                       |     |      |     |      |     |
                       " " "" "    " ' "" "     " '  """ "  \n

                        
                        While you are slowly dying a painfull death, your body gets looted. \n`);
                        endGameCredits()
                        enemy.isAlive = false;


                    } else if (enemy.hp > 0) {
                        console.log(`\n${enemy.name} is still alive.  Their HP is now ${enemy.hp}`);
                    
                    //  Enemy is dead
                    } else {
                        // end battle music
                        battleAudio.kill()
                        console.log(`${enemy.name} has been killed.  Congratulations!!`);

                        // Increases player score by 100 for successful kill
                        player1.score += 100

                        //  Enemy drops a common item upon being killed
                        var thisdrop = dropItem();
                        console.log(`They have dropped ${thisdrop.name}.  It has been added to your inventory.`)
                        player1.score += 1
                        enemy.isAlive = false;

                        achievementAudio();

                            //  If enemy drops morphine, automatically update score and hp
                            if(thisdrop.name === 'Morphine'){
                                player1.hp += 25;
                                player1.score += 1;
                                console.log(`It has been used and your hp is increased by 25.`);

                            //  If enemy drops medkit, automatically update score and hp
                            } else if (thisdrop.name === 'Med Kit') {
                                player1.hp += 50;
                                player1.score += 1;
                                console.log(`It has been used and your hp is increased by 50.`);
                            //  If enemy drops bandages, automatically update score and hp
                            } else if (thisdrop.name === 'Bandages') {
                                player1.hp += 10;
                                player1.score += 1;
                                console.log(`It has been used and your hp is increased by 10.`);
                            }

                        // var thisTrophyDrop = trophyDropItem();
                        // console.log(`They have dropped ${thisTrophyDrop.name}.  It has been added to your inventory.`)
                        trophyDropItem();
                    
            }
        } else if (userChoice === 3){
            console.log(`\nHere are the items in your inventory: \n
            ${player1.inventory}`);

        } else if (userChoice === 4 ){
            checkStats();
            
            // Cancel option.  Ends the Game.
        } else if (userChoice === -1) {
            console.log(`${player1.name}, you have chosen to abandon your adventure.  Goodbye. \n`)
            enemy.isAlive = false;
        }
    }
}



//  Enemy Common Item Drop

function dropItem(){
    var dropped =  enemyDrops[Math.floor(Math.random() * enemyDrops.length)];
    player1.inventory.push(dropped);
        if(player1.score > 4999){
            winGame()
            endGameCredits()
        }
    return dropped

}





//  Enemy Trophy Item Drop

function trophyDropItem(){
    //  Generates a 1 in 5 chance of droping a trophy when the enemy is killed
    var trophyPercentage = Math.floor(Math.random() * 5);
    
    //  Drops trophy if random number is equal to 0 and adds it to the player inventory
    if(trophyPercentage === 0){
        var droppedTrophy =  trophyDrops[Math.floor(Math.random() * trophyDrops.length)];
        player1.inventory.push(droppedTrophy);
        console.log(`\nThey have also dropped you a special trophy! ${droppedTrophy.name}!  \n This trophy comes with special abilities and also gives your hp a boost of 100!\n
        It has been added to your inventory. Go check it out!`)
        // adds 1000 points to players score
        player1.score += 1000;
        player1.hp += 100;

        if(player1.score > 4999){
            winGame()
        }
        return droppedTrophy;
        
    }

}


var playerAttackBonus;
//  Player attack bonus
function attackBonus(){

     //  Lists all atack multipliers
   var listAttackMultipliers = player1.equiped.map(a => a.attackBonus)
   //  Returns the sum of all attack multipliers
   playerAttackBonus = listAttackMultipliers.reduce(function(a,b){
        return a+b
   });  
    //console.log(` \nthe list of attack multipliers is ${listAttackMultipliers} `);
   // console.log(` the list of attack multipliers combined is ${playerAttackBonus} `);
       
    return playerAttackBonus
    
}

var attackMultiplier = attackBonus();


//  Attack v2.0
function attack(){
    // console.log(` the list of attack multipliers is ${listAttackMultipliers} `);
    // console.log(` the list of attack multipliers combined is ${attackBonus()} `);
    // returns a random number between 30 - 50
    var baseAttack =  Math.floor(Math.random() * (40 - 15) + 15)
       // console.log (`Your base attack is ${baseAttack} `)

    //  Access the attack multiplier boune generated from attackBonus()
        //console.log(`\n${player1.name}'s current attack multiplier is  + ${playerAttackBonus}`);

    //  Random Base attack plus the attack bonus is the final attack total
    var finalAttackDamage = baseAttack + playerAttackBonus;
        //console.log('final attack damage is ' + finalAttackDamage)
        return finalAttackDamage;
};


//  Players Defense Bonus Calculator
var defenseOutcome;
function defense(){

   //  Lists all defense multipliers
   var listDefenseMultipliers = player1.equiped.map(a => a.defenseBonus)
   //  Returns the sum of all defense multipliers
   var defenseMultiplier = listDefenseMultipliers.reduce(function(a,b){
       return a+b
   });
   //console.log(`${defenseMultiplier}`);
   defenseOutcome = defenseMultiplier
     
}

//var dOutcome = defenseOutcome;


  



///  Player bonus calculator 

function bonus(){
   //  Lists all atack multipliers
   var listAttackMultipliers = player1.equiped.map(a => a.attackBonus)
   //  Returns the sum of all attack multipliers
   var attackBonus = listAttackMultipliers.reduce(function(a,b){
        return a+b
   });   

    //  Lists all defense multipliers
    var listDefenseMultipliers = player1.equiped.map(a => a.defenseBonus)
    //  Returns the sum of all defense multipliers
    var defenseMultiplier = listDefenseMultipliers.reduce(function(a,b){
        return a+b
    });
    //  Lists all escape multipliers
    var listEscapeMultipliers = player1.equiped.map(a => a.escapeBonus)
    //  Returns the sum of all escape multipliers
    var escapeMultiplier = listEscapeMultipliers.reduce(function(a,b){
        return a+b
    });

    console.log(`\n${player1.name}'s current attack bonus is  + ${attackBonus}`);
    console.log(`${player1.name}'s current defense bonus is  + ${defenseMultiplier}`);
    console.log(`${player1.name}'s current escape bonus is  + ${escapeMultiplier}`);
    
}


function winGame(){
    console.log(`\n
    You have collected enough trophies for your score to excede 5,000 points!  Congratulations! You have escaped the labrynth!!
    `);
    endGameCredits();
}


function endGameCredits(){
    if( battleAudio){
        battleAudio.kill()
    }
    
    creditsAudioPlay()
    console.log(`It has been a  good adventure.  Thank you for playing my game.  \n\n Your final score was ${player1.score} \n
    GAME OVER \n
    Designed and developed by: \n
                                        
    |-----------|   |-------)     |--|   |----------|
    |  _________|   |  |--)  )    |  |   |  ________| 
    |  |            |  |   )  )   |  |   |  |
    |  ----|        |  |__)  /    |  |   |  |
    |  ----|        |   __   |    |  |   |  |
    |  |________|   |  |   )  )   |  |   |  |-------|
    |___________|   |__|    )__]  |__|   |__________|         Lingren


    `)
}
///////////////////////////////////////////
//////////////////////////////////////////

// GAME PLAY

console.log(`\n \nGreetings Player 1. You have entered the Labrynth.  \n` );

player1.name = ask.question('Enter your name to begin your quest! \n \n');

console.log(`
|------------------------------------------------------------------------------------------------------------------|
|                                                                                                                  |
|     88            88                                 88                     88                                   |
|     88            88                                 ""              ,d     88                                   |
|     88            88                                                 88     88                                   |
|     88 ,adPPYYba, 88,dPPYba,  8b      d8  b,dPPYba,  88 8b,dPPYba, MM88MMM  88,dPPYba,                           |
|     88 ""      Y8 88P'    "8a  8b     d8  88P    "Y  88 88P'    "8a  88     88P'    "8a                          |
|     88 ,adPPPPP88 88       d8   8b   d8   88         88 88       88  88     88       88                          |
|     88 88,    ,88 88b,   ,a8"    8b,d8    88         88 88       88  88,    88       88                          |
|     88  "8bbdP"Y8 8Y"Ybbd8"'      Y88     88         88 88       88  "Y888  88       88   88  88  88  88  88     |
|                                   d8                                                                             |
|                                  d8                                                                              |
|------------------------------------------------------------------------------------------------------------------|
`);


console.log(`Welcome ${player1.name}! \n`);
console.log(`The Labrynth is a land of mystery. There are twists and turns at every corner.\n `);
console.log(`There is no map of this dreaded place.  It is full of monsters and all manner of unknown beasts. \n`);
console.log(`Your only chance of escape is to walk as far as you can.  Hopefully you will collect enough trophies to open the portal and make your way to saftey. \n\n`);
console.log(`Good Luck Brave Adventurer! \n`);


//// CONSOLE.LOG PLAYERS STATS /////
//console.log(player1);

// End game conditions:
    // Player dies
    // Player wins (whatever that is)
    // Player has option to quit at anytime

    // While the player is alive
    while(player1.hp > 0 && player1.score < 5000 ){
        // play the game
        var userChoice = ask.keyInSelect(playerChoiceOptions, "What would you like to do? \n");
        

        // If the user choose to walk
        if (userChoice === 0){
            walk() 
        //  If the user chooses to Run
        } else if (userChoice === 1){
            run();

        } else if (userChoice === 2){
            ///  Attack Sequence
            console.log(`There is nothing to attack right now.`)
            
            // Checks Players Inventory
        } else if (userChoice === 3){
            console.log(`Here are the items in your inventory: \n`)
            checkInventory();

            //  Checks Players Stats
        } else if (userChoice === 4 ){
            checkStats();

        // Cancel option.  Ends the Game.
        } else if (userChoice === -1) {
            console.log(`${player1.name}, you have chosen to abandon your adventure. \n
           
            .-"-.        .-:-.        .-"-.
           / RIP |      / RIP |      / RIP |
           |     |      |     |      |     |
           |     |      |     |      |     |
           " " "" "    " ' "" "     " '  """ "  \n`);

            // Ends music from the stats page is that was the players previous menu.
            if(statsAudio){
                statsAudio.kill()
            }
            // Ends music from the battle page if player decised to quit.
            if( battleAudio){
                battleAudio.kill()
            }
            //  Ends music from the inventory page if that player decided to quit.
            if(inventoryAudio){
                inventoryAudio.kill()
            }
            endGameCredits();
            player1.hp = 0
        } else {
            console.log( ` \n 
             
            .-"-.        .-:-.        .-"-.
           / RIP |      / RIP |      / RIP |
           |     |      |     |      |     |
           |     |      |     |      |     |
           " " "" "    " ' "" "     " '  """ "  \n
       You have run out of health and have died. \n`);
            endGameCredits();
        }
    }
    


