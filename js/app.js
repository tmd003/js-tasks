let count = 0;


const value = document.querySelector('#value');
const btns = document.querySelectorAll ('.btn');
    btns.forEach(function (btn) {
        btn.addEventListener ("click", function (e) {
          const styles = e.currentTarget.classList;
          if (styles.contains ('increase')) {
            count ++;
          }
          else if (styles.contains ('decrease')) {
            count--;
          }
          else {
            count = 0;
          }
          if (count > 0) {
            value.style.color = "blue";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count === 0) { 
            value.style.color = "#222";
          }
          value.textContent = count;

      
     });
        
    });  

    const teamName = ["Team Never Give Up"];
    const teamMembers = ["Femi", "Ade", "Temitope", "Ada", "Daniel"];
    let memberLength = teamMembers.length;

    let members = "<ul>";
    for (let i = 0; i < memberLength; i++) {
    members += "<li>" + teamMembers[i] + "</li>";
  }
  members += "</ul>";

  console.log(teamMembers[4]);
  

    document.getElementById("team-name").innerHTML = teamName;
    document.getElementById("team-members").innerHTML = members;

    const aboutMe = {firstname:"Daniel", lastname:"Afolabi", bestmovie:"Stranger Things", 
    bestfood:"Jollof Rice", complexion:"Fair", birthmonth:"March", state:"Oyo", groupname:"Team Never Give Up"};

    console.log(aboutMe.bestmovie);

    let noun = "Ipaja";
    let verb = "slapped";
    let adjective = "hard";

    let resultOne = noun.concat(" ", verb);
    console.log(resultOne);
    
    let resultTwo = noun.concat(" ", verb, " ", adjective);
    console.log(resultTwo);

    let resultThree = adjective.concat(" ", verb, " ", noun);
    console.log(resultThree);
    
    let resultFour = verb.concat(" ", noun, " ", adjective);
    console.log(resultFour);

    let resultFive = verb.concat(" ", adjective);
    console.log(resultFive);


    function myRemainder (a,b) {
      return a % b;
    }
    console.log(myRemainder(5,3));

    function almightyFormula(a,b,c) {
      let x1 = (-1 * b + Math.sqrt(Math.pow(b,2)- (4 * a * c))) / (2 * a);
      let x2 = (-1 * b - Math.sqrt(Math.pow(b,2)- (4 * a * c))) / (2 * a);

      return x1 + "," + x2;
    }
     console.log(almightyFormula(1,-4,-7));

     const myNoun = "dog";
     const myAdjective = "big";
     const myVerb = "ran";
     const myAdverb = "quickly";

     const sentenceOne = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
     console.log(sentenceOne);

    //  area of a circle

    function circle (PI, radius) {
       return PI * (Math.pow(radius,2));
    }
    console.log(circle(3.142, 10));

    // simple interest

    let P = 8200;
    let R = (17.5/100);
    let T = 2.6;

    console.log((P * R * T) / 100);

    let a = 10;
    let b = 4;

    console.log(a % b);

    // BMI's

    const meritHeight = 1.69
    const meritMass = 78
    const nutHeight = 1.95
    const nutMass = 92

    let meritBMI = meritMass / (Math.pow(meritHeight,2));
    let nutBMI = nutMass /  (Math.pow(nutHeight,2));

    console.log(meritBMI);
    console.log(nutBMI);

    let meritHigherBMI = meritBMI;
    console.log(meritHigherBMI > nutBMI);







    
