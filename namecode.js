//// DOOM BAND ARRAYS

var firstDoom = [ "ancient", "Acid", "Black", "Burial", "Burning", "Bloody", "Blood", "Red", "White", "Sabbath", "Lone", "Limbs", "Count", "Church", "Saint", "Down", "Drug", "Electricity", "Forest", "Funeral", "Throne", "High", "Candle", "Heavy", "Dark", "Earth", "Master", "Raven", "Grave", "Lake", "Mammoth", "Moss", "Pagan", "Druid", "Rune", "Solace", "Sons", "Virgin", "Witch", "Lord", "Weed", "Stoned", "Electric", "", "hazy", "misery", "Ceremony", "desert", "woven", "devil", "satan", "grim", "Salem's", "Wail", "high", "Baron", "barren", "stench", "grave", "magic", "ancient", "green", "lunar", "ash", "dope", "cosmic", "shamanic", "drag", "Sister", "forgotten","" ];

var secondDoom = ["", "Dust", "Mark Of the", "From", "Of", "In", "Horned", "Death", "Over", "Black", "From the Holy", "", "", "" ,"", "", "", "", "", "","","","","","", "meadow of", "old","","","","","","","","",""];

var thirdDoom = ["Cult", "King", "Man", "Catacombs", "Cathedral", "Luna", "Sword", "Lung", "Hand", "Hoof", "Dawn", "Funeral", "Widows", "Horses", "Henge", "Temple", "Temples", "churches", "Coven", "Cave", "Moth", "Burns", "Mind", "Haze", "Karma", "Bong", "Smoke", "TOMB", "vulture", "rook", "crows", "stone", "god", "gods", "tombs" ,"moth", "time", "light", "reaper", "priest", "heads", "secret", "spell", "water", "despair", "sorrow", "weak", "dawns", "emperor", "fire", "and the devil", "ritual", "covenant", "mountain", "valley", "tower", "bearer", "dragger", "lucifer", "witchcraft", "rites", "curse", "mass", "skull", "bones", "ritual", "void", "trial", "mass","circle", , "Sunns", ""];

// BLACK METAL BAND ARRAYS

var firstBlack =["black", "choke", "emperor", "funeral", "god", "hate", "hell", "horde", "blood", "ceremonial", "diabolical", "immortal", "lord", "moon", "necro", "old", "Order from", "rotting", "ruins", "satanic", "the stone", "sodom", "thorns", "twilight", "tyrant", "trial", "unholy", "war", "nocturnal", "dark", "Absurd", "botanist" ];

var secondBlack = ["", "of", "from", "in", "from the", "of the", "", "", "", "" , "", "", "" ," ","", "", "", "" ,"","", "", "" ," ","", "", "", "" ,"",""  ];

var thirdBlack = ["murder", "corpse", "rot", "parasite", "scorpi", "massacre", "funerals", "wolves", "slaughter", "flesh", "bride", "chaos", "hell", "mayhem", "throne", "heaven", "witch trials" ];

// GOTH BAND ARRAYS

var firstGoth =["The", "cold", "Children", "Christian", "The", "Dead","Death", "Faith", "Ghost", "London", "The", "Play", "Screaming", "Sister", "Skeleton", "Theatre", "Virgin", "slaughter", "witch", "temple", "sex", "drab"];

var secondGoth = ["in", "","","", "Like", "in", "Turns", "turned to", "", "", "in", "for", "and the", "of", "of", "","","","","" ,"","","","", "","","","","" ,"turned"];

var thirdGoth = ["berlin", "Party", "Black", "Green", "Party", "life", "twins", "cult", "Dance", "haus", "Midnight", "mission", "Nightmare", "Blue", "dead", "Burns", "project", "specimen", "strange", "society", "disorder", "celebration", "midnight", "church", "scream", "age", "cult", "eve", "bats", "Cave", "fiend", "wave", "species", "Leipzig", "majesty", "sect", "family","blue", "crow","dresden",  ];


//


//

var newName = document.getElementById("generator");

newName.addEventListener('click', generateName);

// FUNCTION TO GENERATE BAND NAME


var firstName = firstDoom;
var secondName = secondDoom;
var thirdName = thirdDoom;




function generateName () {

var bandName = document.getElementById("name");

bandName.innerHTML = firstName[
     
     Math.floor(Math.random() * firstName.length)
 ] + " " + secondName[
     
     Math.floor(Math.random() * secondName.length)
 ] + " " + 
     thirdName[Math.floor(Math.random() * thirdName.length)
 ]
       
  
  randomTextColour ();
   
}




 // RANDOM TEXT COLOUR GENERATOR

function randomTextColour () {

var colors = ['#FFD700', '#00BFFF', '#FF1493', '#CD5C5C', '#800000', '#008080', '#800080', "#f34e38", "#da4e00", "#e8e2db", "#ffff09", "#008000"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name').style.color = random_color;
}

// SELECT BOX GENRE CHANGE

var chooseGenre = document.getElementById("genreChoice");

chooseGenre.addEventListener("change", chooseYourGenre);



function chooseYourGenre() {
    
    var e = document.getElementById("genreChoice");
var value = e.options[e.selectedIndex].value;
var text = e.options[e.selectedIndex].text;
    
    document.getElementById("genre").innerHTML = text;
    
    //console.log("changed");
    // console.log(text);
    
    // DECIDE WHICH FUNCTION TO RUN
    
    if (text == "GOTH"){
        
        firstName = firstGoth;
        secondName = secondGoth;
        thirdName = thirdGoth;
        
        var generated = document.getElementById("name");
        
generated.classList.remove("doommetal");
generated.classList.remove("blackmetal");
    generated.classList.add("goth");

        
newName.removeEventListener('click', generateName);
     
        
        newName.addEventListener('click', generateName);
        
        

    }
    
    else if (text == "BLACK METAL") {
        
        firstName = firstBlack;
        secondName = secondBlack;
        thirdName = thirdBlack;
        
var generated = document.getElementById("name");
        
generated.classList.remove("goth");
generated.classList.remove("doommetal");
generated.classList.add("blackmetal");
        
  newName.removeEventListener('click', generateName);   
        newName.addEventListener('click', generateName);
         
        
    }
    
    else  if (text == "DOOM METAL"){
        
        firstName = firstDoom;
        secondName = secondDoom;
        thirdName = thirdDoom;
        
      var generated = document.getElementById("name");
        
generated.classList.remove("blackmetal"); 
generated.classList.remove("goth");
generated.classList.add("doommetal");
  
        newName.addEventListener('click', generateName);
       
        
    }
    else {console.log("HELP");}

}

//IDEAS LIST FUNCTIONALITY

var ideasList = [];

var addIdea = document.getElementById("list add");
    
   addIdea.addEventListener("click", function () {
    
    ideasList.push(document.getElementById('name').innerHTML + "<br>");
    
   ideasList = ideasList.map(function(x){ return x.toUpperCase() })
    
    
    displayList.innerHTML = ideasList.join('');
    
    
})


var seeList = document.getElementById("see list");

var displayList = document.getElementById("display list");

seeList.addEventListener("click", function () {
    
    
ideasList = ideasList.map(function(x){ return x.toUpperCase() })
    
    
    displayList.innerHTML = ideasList.join('');
    
})
//

