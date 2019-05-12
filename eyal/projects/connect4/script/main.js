$(document).ready(function () {
    drawBoard();
})

function drawBoard() {
    w = $(document).width()
    h = $(document).height()
    wBoard = $('#board').width()
    $('#board').css("left", w / 2 - wBoard / 2 + "px")

}

board = [];
turnCounter = 1;
PlayerOneColor = "#42f73f"
PlayerTwoColor = "#FF824C"
for (let i = 0; i < 6; i++) {
    board[i] = [];
    for (let k = 0; k < 8; k++) {
        board[i].push(0);
    }
}


$('.place').click(function () {
    btnClicked(this.id);
});

function btnClicked(id) {

    col = id[1] * 1;
    var pos = 5;



    while (board[pos][col] != 0) {
        if (pos == 0) {
            return
        }
        pos--;

    }

    if (turnCounter % 2 == 0) {
        $(".msg > p").text("תור שחקן כתום")
        board[pos][col] = 2;
        color("" + pos + col, PlayerOneColor)
        if (turnCounter > 6) {

            cW = CheckWin([pos, col], 2)
            if (cW == true) {
                $(".msg > p").text('!ירוק ניצח')
            }
        }
        turnCounter++

    } else {
        $(".msg > p").text("תור שחקן ירוק")
        board[pos][col] = 1;
        color("" + pos + col, PlayerTwoColor)
        if (turnCounter > 6) {

            cW = CheckWin([pos, col], 1)
            if (cW == true) {
                $(".msg > p").text('!כתום ניצח')
            }
        }
        turnCounter++

    }


}
function color(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}
function absValue(a) {
    if (a < 0) {
        return a * -1
    }
    return a

}
function CheckWin(pos, number) {
    var lineCounter = 1, rowCounter = 1, rantRight = 1, rantLeft = 1;
    flush = false;
    re = 0;
    // debugger

    //line
    for (let i = 0; i < 8; i++) {
        if (board[pos[0]][i] == number) {
            flush = true;
        } else {
            flush = false;
            re = 0;
        }
        if (flush) {
            re++
        }
        if (re == 4) {
            return true;
        }
    }

    //Col
    re = 0;
    for (let i = 0; i < 6; i++) {
        if (board[i][pos[1]] == number) {
            flush = true;
        } else {
            flush = false;
            re = 0;
        }
        if (flush) {
            re++
        }
        if (re == 4) {
            return true;
        }
    }
    re = 0;
    diffLine = 5 - pos[0];
    // אלכסון פינה שמאלית למטה לימין למעלה
    k = pos[1] - diffLine;
    for (let i = 5; i > 0; i--) {

        if (board[i][k] == number) {
            disLine = absValue(i - pos[0]);
            disCol = absValue(k - pos[1]);

            if (disLine == disCol) {
                flush = true;
            } else {
                flush = false;
                re = 0;
            }
            if (flush) {
                re++
            }
            if (re == 4) {
                console.log('YESH');

                return true;
            }
        }
        if (k < 8) {
            k++
        } else {
            break;
        }

    }

    //אלכסון ימין למטה לשמאל למעלה
    re = 0;
    k = pos[1] + diffLine;
    for (let i = 5; i > 0; i--) {

        if (board[i][k] == number) {
            disLine = absValue(i - pos[0]);
            disCol = absValue(k - pos[1]);

            if (disLine == disCol) {
                flush = true;
            } else {
                flush = false;
                re = 0;
            }
            if (flush) {
                re++
            }
            if (re == 4) {
                console.log('YESH');

                return true;
            }
        }
        if (k > 0) {
            k--
        } else {
            break;
        }

    }
  



    // for (let i = 0; i < 6; i++) {
    //     for (let ii = 0; ii < 8; ii++) {
    //         if (board[i][ii] == number) {
    //             disLine = i - pos[0];
    //             disCol = ii - pos[1];

    //             if (disLine == disCol *-1 || disLine * -1 == disCol * -1) {
    //                 flush = true;
    //             } else {
    //                 flush = false;
    //                 re = 0;
    //             }
    //             if (flush) {
    //                 re++
    //             }
    //             if (re == 4) {
    //                 return true;
    //             }
    //         }
    //     }
    // }

    // for(let i = pos[0] + 1)

    // for (let i = 0; i < 6; i++) {
    //     for (let k = 0; k < 8; k++) {
    //         difLine = pos[0] - i;
    //         difCol = pos[1] - k;
    //         if (difLine == difCol) {
    //             if (board[i][k] == number) {
    //                 rantRight++

    //             }
    //         }
    //         if (difLine == difCol * -1) {
    //             if (board[i][k] == number) {
    //                 rantLeft++;

    //             }
    //         }
    //     }
    // }
    if (lineCounter == 4 || rowCounter == 4 || rantLeft == 4 || rantRight == 4) {
        return true;
    }
    return false;

}