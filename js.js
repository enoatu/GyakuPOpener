var input=null;
var out_arr=[];
var stack_arr=[];
var sI=null;
var p_count=0;
var buttonLock=false;
$("#b_im").on('click',
    function () {
    if(buttonLock===true){//button lock
       return;//if button locked
    }buttonLock=true;
    console.log("click!");
    reset();

        $("#b_im").html("<img id='im' src='./left.png'>");
        input = $("#input").val();
        out_arr= input.split(" ");
       var sN = searchNumNum(out_arr);
        for(var i=0;i<sN;i++){
        $('#stack').append("<div><br></div>");
        }
        for (var m=0;m<out_arr.length;m++){
            if(!isNaN(out_arr[m])){
            out_arr[m]=parseFloat(out_arr[m]);}
        }

      setTimeout(function () {
          sI = setInterval(anim, 1500);
      },100);

    }
    );
var is_first=null;
var thisisnum=false;
var stack=null;　//NonjqueryObject
var image=0;
function anim() {

    if (image === 0){
        $("#b_im").html("<img id='im' src='./right.png'>"+"<span id='sore'>それ</span>");
        image=1;
    }else{
        $("#b_im").html("<span id='sore'>それ</span>"+"<img id='im' src='./left.png'>");
        image=0;
    }

    if(is_first===null){
        first();
        is_first=0;
    }else if(!isNaN(out_arr[0])) {
        num(); //all move
    }else if(out_arr[0]!==null) {
        text();
    }else {
        console.log("err");error("anim");
    }
    console.log("pointer:"+pointer);

}

function first() { console.log("first");

    stack= $('#stack').find('div');

    $("#out_stack").html(input);
    if(!isNaN(out_arr[0])) {
    thisisnum=true;
    }else {
        console.log("err");
        error("first");
    }

}

var pointer = 0;
var finishFlag=false;
function num() {  console.log("num");

arr_FirstElement_Move();

    p_count=0;
    //all move
    outstack();

    for(var j=0;j<stack_arr.length;j++) {
        $(stack[stack_arr.length-j-1+pointer]).html(stack_arr[j]);
    }
    
    // thisisnum=false;
}

function text() {console.log("calc");
    switch (out_arr[0]) {//pre know　&not shift push
        case "+":
            stack_arr[stack_arr.length-2]+=
                stack_arr[stack_arr.length-1];
                caseDetail();

            break;
        case "-":
            stack_arr[stack_arr.length-2]-=
                stack_arr[stack_arr.length-1];
            caseDetail();

            break;
        case "*":
            stack_arr[stack_arr.length-2]*=
                stack_arr[stack_arr.length-1];
            caseDetail();

            break;
        case "/":
            stack_arr[stack_arr.length-2]/=
                stack_arr[stack_arr.length-1];
            caseDetail();

            break;
        case "r":
            $(stack[pointer]).html(
                Math.sqrt(stack_arr[stack_arr.length-1]));

            stack_arr.pop();

            break;
        case "=":
            finishFlag=true;
            clearInterval(sI);

            break;


        default:
            $("#out_stack").html("エラーです");
            clearInterval(sI);
            break;

    }
    arr_Element_Delete();
    outstack();
    if(finishFlag===true) {
        $("#out_stack").html("<span id='sore'>計算終了</span>"+"<img id='im' src='./finish.png'>");
        $("#button").prop("disabled", false);
        $("#b_im").html("<button id='button'>Open</button>");
        buttonLock=false;


    }
}

function caseDetail() {
    $(stack[pointer+1]).html(
        stack_arr[stack_arr.length-2]);
    $(stack[pointer]).html("<div><br></div>");

    // if(p_count===0){
    // pointer++;
    //     p_count=1;
    // }
    pointer++;
    stack_arr.pop();
}

function outstack() {//output outstack
    $("#out_stack").html(out_arr.join(' '));
    console.log("stack_arr : "+stack_arr);
    console.log("out_arr : "+out_arr);

}

function arr_FirstElement_Move() {//push shift
    stack_arr.push(out_arr[0]);
    out_arr.shift();
}

function arr_Element_Delete() {//shift only

    out_arr.shift();
}


function searchNumNum(arr) { //search the number of numbers
        var numcount=0;

        for(var i=0;i<arr.length;i++) {
            if(!isNaN(arr[i])) {
                numcount++;
            }
        }
        if(numcount===0){
            error("searchNumNum");
        }
        return numcount
}

function reset() {
    console.log("did reset");
    $('#stack').html("");
    $('#out_stack').html("<br>");

    input=null;
    out_arr=[];
     stack_arr=[];
     sI=null;
     is_first=null;
    thisisnum=false;
    stack=null;
    pointer = 0;
     finishFlag=false;
     p_count=0;
     image=0;
}

function popular() {
    $('#input').val("8.33 4 5.2 - * 8.33 7.46 - 0.32 * / 4.3 3.15 2.75 - * 1.71 2.01 * - / r =");
}

function error(str) {
    clearInterval(sI);
    $(function () {

    $("#out_stack").html(str+" 半角数字がnot foundです");
    $("#b_im").html("<button id='button'>Open</button>");
    buttonLock=false;
    });

}