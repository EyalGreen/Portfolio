
var ObjCounter = 0;
var addCubeTime = 100;
var board = [];
var i = 1;
while (i <= 4) {
    board[i] = [];
    i++;
}

for (let i = 1; i <= 4; i++) {
    for (let k = 1; k <= 4; k++) {
        board[i][k] = '0';
    }
}


function Fill() {
    if (ObjCounter == 16) {
        alert("The board is full!");
    } else {

        do {
            var randomX = Math.random() * (5) + 1;
            var randomY = Math.random() * (5) + 1;
            randomX = Math.floor(randomX);
            randomY = Math.floor(randomY);
            // console.log(randomX + " " + randomY);

            var id = "" + randomX + randomY;
        } while ($('#' + id).hasClass('btnDef') == false);


        var TwoOrFour = Math.random();
        // console.log(TwoOrFour);
        // console.log(random);
        // console.log(document.getElementById(""+random).className);
        if ($('#' + id).hasClass("btnDef")) {
            if (TwoOrFour <= 0.5) {
                $('#' + id).addClass('btnTwo');
                $('#' + id).removeClass('btnDef');
                $('#' + id).text("2");
                board[randomX][randomY] = '2';

            } else {
                $('#' + id).addClass('btnFour');
                $('#' + id).removeClass('btnDef');
                board[randomX][randomY] = '4';

                $('#' + id).text("4");
            }
        }
        if ($('#' + id).hasClass('btnFour') && $('#' + id).hasClass('btnTwo')) {
            if ($('#' + id).text() == "2") {
                $('#' + id).removeClass('btnFour');
            } else {
                $('#' + id).removeClass('btnTwo');
            }
        }
        ObjCounter++;

        //         //two
        //         document.getElementById("" + random).className = "btnTwo";
        //         document.getElementById("" + random).innerHTML = "2";

        //     } else {
        //         //four
        //         document.getElementById("" + random).className = "btnFour";
        //         document.getElementById("" + random).innerHTML = "4";


        //     }
        //     ObjCounter++;
        // } else {
        //     Fill();
        // }

    }
}
while (ObjCounter < 2) {
    Fill();

}



function GetClassName(num) {
    var className = "";
    num = Number(num);
    switch (num) {
        case 2:
            className = "btnTwo";
            break;
        case 4:
            className = "btnFour"
            break;
        case 8:
            className = "btnEight";
            break;
        case 16:
            className = "btnSix"
            break;
        case 32:
            className = "btnThirty";
            break;
        case 64:
            className = "btnSixty"
            break;
        case 128:
            className = "btnHun";
            break;
        case 256:
            className = "btnTwoHun"
            break;
        case 512:
            className = "btnFiveHun";
            break;
        case 1024:
            className = "btnK"
            break;
        case 2048:
            className = "btnTwoK";
            break;
        default:
            className = "btnDef";
            break;
    }
    return className;
}


function up() {
    var idMove = '';
    var connect = false;
    for (let i = 2; i <= 4; i++) {
        for (let k = 1; k <= 4; k++) {
            if (board[i][k] != '0') {
                for (let a = i - 1; a >= 1; a--) {
                    if (board[a][k] == '0') {
                        console.log('empty');
                        idMove = "" + a + k;
                    } else {
                        var textToMove = $('#' + a + k).text();
                        var textHere = $('#' + i + k).text();
                        if (textToMove == textHere) {
                            connect = true;
                            var textConnect = textHere * 2;
                            className = GetClassName(textConnect);
                            idMove = "" + a + k;

                        } else {
                            break;
                        }
                    }
                }
            }
            
            if (!connect) {
                if (idMove != '') {
                    console.log(idMove);
                    board[idMove[0]][idMove[1]] = $('#' + i + k).text();
                    board[i][k] = "0";


                    //Coloring
                    var className = $('#' + i + String(idMove)[1]).attr('class');
                    var html = $('#' + i + String(idMove)[1]).text();
                    if (html == 2) {
                    }
                    $('#' + idMove)
                        .removeClass('btnDef')
                        .text(html)
                        .addClass(className);

                    $('#' + i + String(idMove)[1])
                        .removeClass(className)
                        .addClass('btnDef')
                        .text("");




                }
            } else {
                board[idMove[0]][idMove[1]] = String(textConnect);
                board[i][k] = "0";

                $('#' + idMove)
                    .removeClass('btnDef')
                    .text(textConnect)
                    .addClass(className);

                $('#' + i + String(idMove)[1])
                    .removeClass(className)
                    .addClass('btnDef')
                    .text("");

                ObjCounter--;
            }

            if ($('#' + i + k).hasClass('btnFour') && $('#' + i + k).hasClass('btnTwo')) {
                if ($('#' + i + k).text() == "2") {
                    $('#' + i + k).removeClass('btnFour');
                } else {
                    $('#' + i + k).removeClass('btnTwo');
                }
            }
            var connect = false;
            idMove = '';
            className = "";

        }
    }

    setTimeout(Fill, addCubeTime);

}



function down() {
    // console.log('down');

    var idMove = '';
    var connect = false;
    for (let i = 3; i >= 1; i--) {
        for (let k = 1; k <= 4; k++) {
            if (board[i][k] != '0') {
                for (let a = i + 1; a <= 4; a++) {
                    if (board[a][k] == '0') {
                        console.log('empty');
                        idMove = "" + a + k;
                    } else {
                        var textToMove = $('#' + a + k).text();
                        var textHere = $('#' + i + k).text();
                        if (textToMove == textHere) {
                            connect = true;
                            var textConnect = textHere * 2;
                            className = GetClassName(textConnect);
                            idMove = "" + a + k;

                        } else {
                            break;
                        }
                    }
                }
            }
            if (!connect) {
                if (idMove != '') {
                    console.log(idMove);
                    board[idMove[0]][idMove[1]] = $('#' + i + k).text();
                    board[i][k] = "0";


                    //Coloring
                    var className = $('#' + i + String(idMove)[1]).attr('class');
                    var html = $('#' + i + String(idMove)[1]).text();
                    if (html == 2) {
                    }
                    $('#' + idMove)
                        .removeClass('btnDef')
                        .text(html)
                        .addClass(className);

                    $('#' + i + String(idMove)[1])
                        .removeClass(className)
                        .addClass('btnDef')
                        .text("");




                }
            } else {
                board[idMove[0]][idMove[1]] = String(textConnect);
                board[i][k] = "0";

                $('#' + idMove)
                    .removeClass('btnDef')
                    .text(textConnect)
                    .addClass(className);

                $('#' + i + String(idMove)[1])
                    .removeClass(className)
                    .addClass('btnDef')
                    .text("");

                ObjCounter--;
            }

            if ($('#' + i + k).hasClass('btnFour') && $('#' + i + k).hasClass('btnTwo')) {
                if ($('#' + i + k).text() == "2") {
                    $('#' + i + k).removeClass('btnFour');
                } else {
                    $('#' + i + k).removeClass('btnTwo');
                }
            }
            var connect = false;
            idMove = '';
            className = "";

        }
    }

    setTimeout(Fill, addCubeTime);
}

function left() {
    var idMove = '';
    var connect = false;
    console.log('left');
    for (let k = 2; k <= 4; k++) {
        for (let i = 1; i <= 4; i++) {
            if (board[i][k] != '0') {
                for (let a = k - 1; a >= 1; a--) {
                    if (board[i][a] == '0') {
                        console.log('empty');
                        idMove = "" + i + a;
                    } else {
                        var textToMove = $('#' + i + a).text();
                        var textHere = $('#' + i + k).text();
                        if (textToMove == textHere) {
                            connect = true;
                            var textConnect = textHere * 2;
                            className = GetClassName(textConnect);
                            idMove = "" + i + a;

                        } else {
                            break;
                        }
                    }
                    console.log(idMove);
                    
                }
            }

            if (!connect) {
                if (idMove != '') {
                    console.log(idMove);
                    board[idMove[0]][idMove[1]] = $('#' + i + k).text();
                    board[i][k] = "0";


                    //Coloring
                    var className = $('#' + i + k).attr('class');
                    var html = $('#' + i + k).text();
                    if (html == 2) {
                    }
                    $('#' + idMove)
                        .removeClass('btnDef')
                        .text(html)
                        .addClass(className);

                    $('#' + i + k)
                        .removeClass(className)
                        .addClass('btnDef')
                        .text("");




                }
            } else {
                board[idMove[0]][idMove[1]] = String(textConnect);
                board[i][k] = "0";

                $('#' + idMove)
                    .removeClass('btnDef')
                    .text(textConnect)
                    .addClass(className);

                $('#' + i + k)
                    .removeClass(className)
                    .addClass('btnDef')
                    .text("");

                ObjCounter--;
            }

            if ($('#' + i + k).hasClass('btnFour') && $('#' + i + k).hasClass('btnTwo')) {
                if ($('#' + i + k).text() == "2") {
                    $('#' + i + k).removeClass('btnFour');
                } else {
                    $('#' + i + k).removeClass('btnTwo');
                }
            }
            var connect = false;
            idMove = '';
            className = "";
            
        }
    }
    setTimeout(Fill, addCubeTime);
}

function Right() {
    var idMove = '';
    var connect = false;
    console.log('left');
    for (let k = 3; k >= 1; k--) {
        for (let i = 1; i <= 4; i++) {
            if (board[i][k] != '0') {
                for (let a = k + 1; a <= 4; a++) {
                    if (board[i][a] == '0') {
                        console.log('empty');
                        idMove = "" + i + a;
                    } else {
                        var textToMove = $('#' + i + a).text();
                        var textHere = $('#' + i + k).text();
                        if (textToMove == textHere) {
                            connect = true;
                            var textConnect = textHere * 2;
                            className = GetClassName(textConnect);
                            idMove = "" + i + a;

                        } else {
                            break;
                        }
                    }
                    console.log(idMove);
                    
                }
            }

            if (!connect) {
                if (idMove != '') {
                    console.log(idMove);
                    board[idMove[0]][idMove[1]] = $('#' + i + k).text();
                    board[i][k] = "0";


                    //Coloring
                    var className = $('#' + i + k).attr('class');
                    var html = $('#' + i + k).text();
                    if (html == 2) {
                    }
                    $('#' + idMove)
                        .removeClass('btnDef')
                        .text(html)
                        .addClass(className);

                    $('#' + i + k)
                        .removeClass(className)
                        .addClass('btnDef')
                        .text("");




                }
            } else {
                board[idMove[0]][idMove[1]] = String(textConnect);
                board[i][k] = "0";

                $('#' + idMove)
                    .removeClass('btnDef')
                    .text(textConnect)
                    .addClass(className);

                $('#' + i + k)
                    .removeClass(className)
                    .addClass('btnDef')
                    .text("");

                ObjCounter--;
            }

            if ($('#' + i + k).hasClass('btnFour') && $('#' + i + k).hasClass('btnTwo')) {
                if ($('#' + i + k).text() == "2") {
                    $('#' + i + k).removeClass('btnFour');
                } else {
                    $('#' + i + k).removeClass('btnTwo');
                }
            }
            var connect = false;
            idMove = '';
            className = "";
            
        }
    }
    setTimeout(Fill, addCubeTime);
}
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            left();
            break;
        case 38:
            console.log('Up key pressed');
            up();
            break;
        case 39:
            console.log('Right key pressed');
            Right();
            break;
        case 40:
            console.log('Down key pressed');
            down();

            break;
    }
};





















