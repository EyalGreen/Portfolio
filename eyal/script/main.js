var navSee = false;
var nav = document.getElementById("nav");
var circle = document.getElementById("circle");
var circleClick = false;
// $("#nav").load("header.html");

window.onload = function () {
    resetScreen()
}
function toX() {
    var topLine = document.getElementById("topLine");
    var middleLine = document.getElementById("middleLine");
    var lowLine = document.getElementById("lowLine");
    topLine.style.width = "34px";
    topLine.style.transform = "rotate(45deg)";
    lowLine.style.transform = "rotate(-45deg)";
    lowLine.style.width = "34px";
    lowLine.style.top = "35px";
    topLine.style.top = "12px";
    topLine.style.left = "14px";
    lowLine.style.left = "11px";
    middleLine.style.display = "none";
}
function toNormal() {
    var topLine = document.getElementById("topLine").style;
    var middleLine = document.getElementById("middleLine").style;
    var lowLine = document.getElementById("lowLine").style;

    topLine.width = "24px";
    middleLine.width = "24px";
    lowLine.width = "24px";
    topLine.top = "14px";
    topLine.left = "12px";
    middleLine.top = "24px";
    middleLine.left = "12px";
    lowLine.top = "34px";
    lowLine.left = "12px";
    topLine.transform = "rotate(0)";
    lowLine.transform = "rotate(0)";
    middleLine.display = "inline-block";
}
var path = window.location.pathname;
var littleScreen = false;
var page = path.split("/").pop();
var switchCircleLeft;


function resetScreen() {

    page = path.split("/").pop();
    $('#lineBox1').hide(0);
    $('#lineBox2').hide(0);
    $('#lineBox3').hide(0);
    $('#lineBox4').hide(0);
    $("#" + 0).css('background-color', 'black');
    var h = $(document).height()
    var w = $(document).width();
    if (w <= 1200) {
        littleScreen = true;
        projectResponse('little');
        closedCircle();

    } else {
        littleScreen = false;
        projectResponse('reg');

        normalNav();

    }

    if (page == 'index.html' || page == "") {
        // debugger;
        $('#sCircle').css("left", w / 2 - 50 + "px");
        switchCircleLeft = w / 2 - 50;
        $('#sCircle').css("top", h / 2 - 50 + "px");
        $('#rightHalf').css("height", h + "px");
        $('#leftHalf').css("height", h + "px");
        $('h3').css("left", w / 4 - 100 + "px");
        $('h3').css("top", h / 2 - 30 + "px");

        $('.navText').addClass('navTextWhite');
        $('#numCircle').css("bottom", "100px");
        for (let i = 0; i < 3; i++) {
            console.log(document.getElementsByClassName('nCircle')[i]);
            document.getElementsByClassName('nCircle')[i].style.left = 20 * i + "px";
        }
    }

}
$(window).resize(function () {
    //   console.log('t');
    resetScreen();
});
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
$('#sCircle').click(function () {
    if (currect == 0) {
        openInNewTab("/projects/Chess/index.html");
    } else if (currect == 1) {
        openInNewTab("/projects/Damka/index.html");

    } else {
        openInNewTab("/projects/2048/index.html");

    }
});

$('#textBox1').click(function () {
    openInNewTab("/projects/Chess/index.html");
});
$('#textBox2').click(function () {
    openInNewTab("/projects/Damka/index.html");
});
$('#textBox3').click(function () {
    openInNewTab("/projects/2048/index.html");
});
$('#textBox4').click(function () {
    openInNewTab("/projects/equation/index.html");
});
$('#textBox5').click(function () {
    openInNewTab("/projects/connect4/index.html");
});
var projectSwitch = [];
function proj(bgColor, className, text) {
    this.bgColor = bgColor;
    this.class = className;
    this.text = text;
}
projectSwitch[0] = new proj('#0D0D0D', 'rightHalfChess', 'Chess');
projectSwitch[1] = new proj('#284F5C', 'rightHalfDamka', 'Damka');
projectSwitch[2] = new proj('#AA573B', 'rightHalf2048', '2048');

var currect = 0;
$(document).ready(function () {
    if (page == 'index.html') {
        $('.navText').addClass('navTextWhite');

    } else {
        $('.navText').removeClass('navTextWhite');

    }
    // console.log(page);
    var p = projectSwitch[currect];
    var text = p.text;
    var bgColor = p.bgColor;
    $('#rightHalf').css("background-color", bgColor);
    $('h3').text(text);

    $("#rightHalf").addClass('rightHalfChess');
    $("#" + currect).css('background-color', 'black');
    $('.rightHalfChess').css('background-color', '#1d1e22');

    $("#" + (currect + 1)).css('background-color', "");
    if (page == 'project.html') {
        // bulidProject();
    }
});
// function bulidProject(){

// }
var canSwitch = true;

function projectResponse(sit) {
    if (sit == 'little') {
        $('.box').css("display", "block");
    } else {
        $('.box').css("display", "inline-block");

    }
}
var canOpen = true;
$('#box2048').hover(function () {
    // console.log('hover');
    document.getElementById('textBox3').style.display = "inline-block";
    if (canOpen) {
        canOpen = false;
        $('#lineBox3').show(50);

    }
}, function () {
    canOpen = true;
    document.getElementById('textBox3').style.display = "none";
    $('#lineBox3').hide(0);

});

$('#damkBox').hover(function () {
    // console.log('hover');
    document.getElementById('textBox2').style.display = "inline-block";
    if (canOpen) {
        canOpen = false;
        $('#lineBox2').show(50);

    }
}, function () {
    canOpen = true;
    document.getElementById('textBox2').style.display = "none";
    $('#lineBox2').hide(0);


});

$('#chessBox').hover(function () {
    // console.log('hover');
    document.getElementById('textBox1').style.display = "inline-block";
    if (canOpen) {
        canOpen = false;
        $('#lineBox1').show(50);

    }
}, function () {
    canOpen = true;
    document.getElementById('textBox1').style.display = "none";
    $('#lineBox1').hide(0);


});
$('#boxequ').hover(function () {
    // console.log('hover');
    document.getElementById('textBox4').style.display = "inline-block";
    if (canOpen) {
        canOpen = false;
        $('#lineBox4').show(50);

    }
}, function () {
    canOpen = true;
    document.getElementById('textBox4').style.display = "none";
    $('#lineBox4').hide(0);


});
$('#boxconnect4').hover(function () {
    // console.log('hover');
    document.getElementById('textBox5').style.display = "inline-block";
    if (canOpen) {
        canOpen = false;
        $('#lineBox5').show(50);

    }
}, function () {
    canOpen = true;
    document.getElementById('textBox5').style.display = "none";
    $('#lineBox5').hide(0);


});


// });
// $('#boxXO').hover(function () {

//     console.log('In');
//     document.getElementById('textBox4').style.display = "inline-block";
//     if (canOpen) {
//         canOpen = false;
//         // $('#lineBox4').show(0);

//     }
// }, function () {
//     console.log('Out');
//     canOpen = true;
//     document.getElementById('textBox4').style.display = "none";
//     $('#lineBox4').hide(0);


// });
$('body').on('mousewheel DOMMouseScroll', function (e) {
    // if (canSwitch) {


    var dir = e.originalEvent.deltaY;

    if (dir > 0) {
        // console.log('down');
        if (currect == 2) {
            return;
        } else {
            var classNames = $('#rightHalf').attr('class');
            $('#rightHalf').removeClass(classNames);
            currect++;
            switchBackGround(dir);



        }
    } else {
        // console.log('up');
        if (currect == 0) {
            return;
        } else {
            var classNames = $('#rightHalf').attr('class');
            $('#rightHalf').removeClass(classNames);
            currect--;
            switchBackGround(dir);





        }
    }
    // }


    // console.log(currect);

    // canSwitch = false;
    // setTimeout(canSwitc, 1000);
})
function canSwitc() {
    canSwitch = true;

}
function switchBackGround(dir) {
    var way = 0;
    if (dir < 0) {
        way = 1;
    } else {
        way = -1;
    }
    var p = projectSwitch[currect];
    var text = p.text;
    var className = p.class;
    var bgColor = p.bgColor;
    $('#rightHalf').css("background-color", bgColor);

    $("#rightHalf").addClass(className);
    // $("#rightHalf").fadeIn("1000", function () {
    //     $(this).addClass(className);
    // });


    $('h3').text(text);
    $("#" + currect).css('background-color', 'black');
    $("#" + (currect + way)).css('background-color', "");
}

$('#sCircle').hover(function () {
    // console.log('hover');

    $('#arrow').css('left', "20px");
    $('#sCircle').addClass('switchCircleAnimate')
}, function () {
    $('#arrow').css('left', "15px");
    $('#sCircle').removeClass('switchCircleAnimate')


});

function closedCircle() {

    $('nav').css('right', '-39.4%');
    $('nav').css('opacity', '1');
    $('.navText').css('opacity', '0');
    $('nav').css('background', 'none');
    $("#circle").addClass("fullCircle");
    $("#circle").removeClass("emptyCircle");
    toNormal();
    circleClick = false;
}

function normalNav() {
    page = path.split("/").pop();
    $('nav').css('right', '0');
    $('nav').css('opacity', '1');
    $('.navText').css('opacity', '1');

    $("#circle").addClass("emptyCircle");
    $("#circle").removeClass("fullCircle");
    toNormal();

    $('nav').css('background-color', 'rgb(41, 40, 40, 0)');
    // toX();
    if (page == 'index.html') {
        $('.navText').addClass('navTextWhite');

    } else {
        $('.navText').css('color', "#1d1e22");

    }
    circleClick = false;
}
function openPhoneNav() {
    toX();
    $('.regUl').css("display", "none")
    $('.phoneNav').css("display", "block")
    circleClick = true;

}
function openNav() {
    toX();
    $('nav').css('right', '0');
    $('nav').css('opacity', '1');
    $('.navText').css('opacity', '1');

    $('nav').css('background-color', 'rgb(41, 40, 40, 1)');
    $('.navText').css('color', '#ffffff');
    circleClick = true;
}

document.onscroll = function () {


    if (document.documentElement.scrollTop < 80) {
        $('.navText').removeClass('navTextWhite');

        if (littleScreen) {
            closedCircle();
            circleClick = false;
        } else {
            normalNav();

        }
    } else {
        $('.navText').addClass('navTextWhite');

        if (littleScreen) {

        } else {
            // closedCircle();

            if (circleClick) {
                // normalNav();
            } else {
                closedCircle();
            }
        }



    }
}



function cirClick() {
    console.log('Clicked');
    if (circleClick) {

        if (littleScreen) {
            closedCircle();
        } else {
            closedCircle();
            // $('nav').css('right', '-39.4%');
            // $('nav').css('opacity', '0');

            // $("#circle").addClass("fullCircle");
            // $("#circle").removeClass("emptyCircle");
            // toNormal();
            // circleClick = false;
        }


    } else {

        if (littleScreen) {
            openNav();
            // console.log('Open Little');
            // $('nav ul').removeClass('regUl');
            // $('nav ul').addClass('colUl');
            // toX();
            // $('nav').css('right', '0');
            // $('nav').css('opacity', '1');
        } else {
            openNav()
        }


    }

}
$('.navText').hover(function () {
    if (circleClick) {
        this.style.paddingBottom = "3px";
        this.style.borderBottom = "3px solid white";
    }
}, function () {
    if (circleClick) {
        this.style.paddingBottom = "0px";
        this.style.borderBottom = "none";
    }
});


$('#sub').click(function () {
    var namereg = /^[a-zA-Zא-ת ]+$/;
    var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var phonereg = /^[0-9-+]+$/;
    // debugger;

    var uName = $('#uName').val();
    var uLast = $('#uLast').val();
    var uMsg = $('#uMsg').val();
    var uEmail = $('#uEmail').val();
    var errorMsg = [];
    document.getElementById("errorPlace").innerHTML = "";

    $('#errorPlace').removeClass("alert alert-danger");

    var pass = true;
    if (!namereg.test(uName) || uName.length == 0 || uName.length > 40) {
        pass = false;

        errorMsg.push("הכנס את שמך");
        console.log(errorMsg);
    }
    if (!namereg.test(uLast) || uLast.length == 0 || uLast.length > 40) {
        pass = false;

        errorMsg.push("הכנס את שם משפחתך");
        console.log(errorMsg);
    }
    if (!emailreg.test(uEmail) || uEmail.length == 0 || uEmail.length > 40) {
        console.log(uEmail);

        pass = false;
        errorMsg.push("הכנס את כתובת המייל שלך");
        console.log(errorMsg);
    }
    if (pass) {
        $('#errorPlace').addClass("alert alert-success")
        document.getElementById("errorPlace").innerHTML += "<p>טופסך אושר</p>";
        var obj = {
            'name': uName,
            'lastName': uLast,
            'email': uEmail,
            'message': uMsg
        }
        console.log(obj);

    } else {
        if (errorMsg.length == 3) {
            $('form').css("top", "100px")
            $('.rowInput > #sub').css("top", "150px")

        } else if (errorMsg.length == 2) {
            $('form').css("top", "50px")
            $('.rowInput > #sub').css("top", "100px")
        } else {
            $('form').css("top", "0")
            $('.rowInput > #sub').css("top", "55px")
        }
        for (let i = 0; i < errorMsg.length; i++) {

            $('#errorPlace').addClass("alert alert-danger");
            document.getElementById("errorPlace").innerHTML += "<p>" + errorMsg[i] + "</p>";
        }

    }


});