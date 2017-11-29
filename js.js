var input=null;
var out_arr=[];
var stack_arr=[];
var sI=null;
var p_count=0;
$("#button").on('click',
    function () {
    reset();
        $("#button").prop("disabled", true);
        input = $("#input").val();
        // input="10 200 30 * + =";
        out_arr= input.split(" ");
        for(var i=0;i<searchNumNum(out_arr);i++){
        $('#stack').append("<div><br></div>");
        }
        for (var m=0;m<out_arr.length;m++){
            if(!isNaN(out_arr[m])){
            out_arr[m]=parseFloat(out_arr[m]);}
        }

      setTimeout(function () {
          sI = setInterval(anim, 1300);
      },500);

    }
    );

var in_num=0;
var is_first=null;
var thisisnum=false;
var stack=null;　//NonjqueryObject

function anim() {

    if(is_first===null){
        first();
        is_first=0;
    }else if(!isNaN(out_arr[0])) {
        num(); //all move
    }else {
        text();
    }
    console.log("pointer:"+pointer);

}

function first() { console.log("first");

    stack= $('#stack').find('div');

    $("#out_stack").html(input);
    thisisnum=true;

}

var pointer = 0;
var finishFlag=false;
function num() {  console.log("num");

arr_FirstElement_Move();
    
    in_num++;
    p_count=0;
    //all move
    outstack();

    for(var j=0;j<stack_arr.length;j++) {
        $(stack[stack_arr.length-j-1+pointer]).html(stack_arr[j]);
    }
    
    // thisisnum=false;
}

function text() {console.log("calc");
    // if(p_flag===1){p_flag=0;pointer++;}
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
        $("#out_stack").html("計算終了");
        $("#button").prop("disabled", false);

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

        return numcount
}

function reset() {
    $('#stack').html("");
    $('#out_stack').html("<br>");

    input=null;
    out_arr=[];
     stack_arr=[];
     sI=null;
     in_num=0;
     is_first=null;
    thisisnum=false;
    stack=null;
    pointer = 0;
     finishFlag=false;

}

function popular() {
    $('#input').val("8.33 4 5.2 - * 8.33 7.46 - 0.32 * / 4.3 3.15 2.75 - * 1.71 2.01 * - / r =");
}

