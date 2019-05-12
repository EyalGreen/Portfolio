var ObjCounter = 0;
var squersToMoveCounter = 0;

/*
TODO list

לעשות קאונטר של ריבועים שצריך להזיז, וכשאתה צובע אותם לעשות לולאה שחוזרת כמות הפעמים של הקאונטר
גם אם עכשיו אתה מבואס מהאימון, תזכור שאתה פאקינג מלך תתעודד יבן זונה

זה צובע, מוחק את מה שצריך, ואז מוחק את הצביעה

*/
function Fill() {
  if (ObjCounter == 16) {
    alert("The Board is full!");
  } else {


    var random = Math.random() * (17 - 1) + 1;
    random = Math.floor(random);

    var TwoOrFour = Math.random();
    // console.log(TwoOrFour);
    // console.log(random);
    // console.log(document.getElementById(""+random).className);
    if (document.getElementById("" + random).className == "btnDef") {
      if (TwoOrFour <= 0.5) {
        //two
        document.getElementById("" + random).className = "btnTwo";
        document.getElementById("" + random).innerHTML = "2";
      } else {
        //four
        document.getElementById("" + random).className = "btnFour";
        document.getElementById("" + random).innerHTML = "4";


      }
      ObjCounter++;
    } else {
      Fill();
    }

  }
}
while (ObjCounter < 2) {
  Fill();

}

var game = true;
// while(game){
document.addEventListener('keydown', function (event) {
  if (event.keyCode == 37) {
    Left();
  }
  if (event.keyCode == 38) {
    // alert('Up was pressed');
    Up();
  }
  if (event.keyCode == 40) {
    // alert('Down was pressed');
    Down();
  }
  if (event.keyCode == 39) {
    // alert('Right was pressed');
    Right();

  }
  if (event.keyCode == 87) {
    game = false;
    alert(game);

  }
}
);



function Left() {
  var idToMove = 0;
  var Max;
  for (let k = 16; k >= 1; k--) {

    if (document.getElementById("" + k).className != "btnDef") {


      if (k >= 13) {
        Max = 13;
      } else if (k >= 9) {
        Max = 9;
      } else if (k >= 5) {
        Max = 5;
      } else if (k >= 1) {
        Max = 1;
      }

      for (let i = k; i >= Max; i--) {
        if (i == k) {
          idToMove = k;
          continue;
        }
        if (document.getElementById("" + i).className == "btnDef") {
          idToMove = i;
        } else {
          break;
        }
      }

      if (idToMove != 0) {

        // debugger;
        if (idToMove != k) {


          document.getElementById(idToMove).className = document.getElementById(k).className;
          document.getElementById(idToMove).innerHTML = document.getElementById(k).innerHTML;

          document.getElementById(k).className = "btnDef";
          document.getElementById(k).innerHTML = "";
        }
      }





    }
  }
  Fill();

}
function Right() {
  var idToMove = 0;
  var Max;
  for (let k = 1; k <= 16; k++) {

    if (document.getElementById("" + k).className != "btnDef") {
      if (k <= 4) {
        Max = 4;
      } else if (k <= 8) {
        Max = 8;
      } else if (k <= 12) {
        Max = 12;
      } else if (k <= 16) {
        Max = 16;
      }
      for (let i = k; i <= Max; i++) {
        if (i == k) {
          idToMove = k;
          continue;
        }
        if (document.getElementById("" + i).className == "btnDef") {
          idToMove = i;
        } else {
          break;
        }
      }

      if (idToMove != 0) {

        // debugger;
        if (idToMove != k) {


          document.getElementById(idToMove).className = document.getElementById(k).className;
          document.getElementById(idToMove).innerHTML = document.getElementById(k).innerHTML;

          document.getElementById(k).className = "btnDef";
          document.getElementById(k).innerHTML = "";
        }
      }





    }
  }
  Fill();

}






function Up() {
  var idToMove = 0;
  for (var i = 1; i <= 16; i++) {
    for (var k = i; k <= 16; k += 4) {
      if (document.getElementById(i).className != "btnDef") {
        // debugger;

        if (k <= 4 || k > 12) {
          if (document.getElementById("" + k).className == "btnDef") {
            idToMove = k;
          } else {
            continue;
          }
        } else if (document.getElementById("" + k + 4).className == "btnDef") {
          idToMove = k + 4;
        } else {
          continue;

        }
      } else {
        break;
      }

      document.getElementById("" + idToMove).className = document.getElementById(i).className;
      document.getElementById("" + idToMove).innerHTML = document.getElementById(i).innerHTML;

      document.getElementById(i).className = "btnDef";
      document.getElementById(i).innerHTML = "";

      // console.log(idToMove);
    }
  }
  Fill();
}

















// function Down(){
//   var idToMove = 0;
//   for (var i = 1; i <=16; i++) {
//       for(var k = i; k <=16;k+=4){
//         if(document.getElementById(i).className){
//           if(k>12){
//             if(document.getElementById(""+k).className == "btnDef"){
//               idToMove = k;
//             }else{
//               continue;
//             }
//           }else if(document.getElementById(""+k).className == "btnDef"){
//             // debugger;

//           idToMove = k+4;
//         }else{
//           continue;

//         }
//       }


//     }
//     console.log(`${i}:${idToMove}`);

//     document.getElementById(""+idToMove).className = document.getElementById(i).className;
//     document.getElementById(""+idToMove).innerHTML = document.getElementById(i).innerHTML;

//     document.getElementById(i).className = "btnDef";
//     document.getElementById(i).innerHTML = "";
//   idToMove = 0;

//     }
//     Fill();
// }


















































function Down() {
  var idToMove = 0;
  var Empty = true;
  for (let i = 1; i <= 16; i++) {

    if (document.getElementById(i).className != "btnDef") {
      Empty = false;
      var Cname = document.getElementById(i);
      // debugger;

    } else {
      Empty = true;
    }
    for (let k = i; k <= 16; k += 4) {

      if (!Empty) {

        if (k > 12) {
          if (k == i) {
            if (document.getElementById(k).className == "btnDef") {
              idToMove = k;
              continue;
            }
          } else {
            if (document.getElementById(k).className == "btnDef") {
              idToMove = k;
              break;
            }
          }
        } else {


          if (k == i) {
            if (document.getElementById(k + 4).className == "btnDef") {
              idToMove = k + 4;
              continue;
            }
          }
        }
        if (document.getElementById(k).className == "btnDef") {
          idToMove = k;

        } else {
          break;
        }

      }
      if (idToMove != 0) {
        debugger;
        document.getElementById("" + idToMove).className = Cname.className;
        document.getElementById("" + idToMove).innerHTML = Cname.innerHTML;

        document.getElementById(i).className = "btnDef";
        document.getElementById(i).innerHTML = "";
      }

    }
  }
}
