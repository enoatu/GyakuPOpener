var input;
var out_arr;
var stack_arr=[];
var divp=0;
var sI;

$("#button").on('click',
    function () {
        input = $("#input").val();
        input="10 200 30 * + =";
        out_arr= input.split(" ");
        for(var i=0;i<searchNumNum(out_arr);i++){
        $('#stack').append("<div><br></div>");
        }
        for (var m=0;m<out_arr.length;m++){
            if(!isNaN(out_arr[m])){
            out_arr[m]=parseInt(out_arr[m]);}
        }

      setTimeout(function () {
          sI = setInterval(anim, 2000);
      },2000);

    }
    );

var in_num=0;
var is_first=null;
var count=null;
var thisisnum=false;
var stack;　//NonjqueryObject

function anim() {

    if(is_first===null){
        first();
        is_first=0;
    }else if(!isNaN(out_arr[0])) {
        num(); //all move
    }else {
        text();
    }

}

function first() { console.log("first");

    stack= $('#stack').find('div');

    $("#out_stack").html(input);
    thisisnum=true;

}

var pointer = 0;

function num() {  console.log("num");

arr_FirstElement_Move();
    
    in_num++;
    //all move
    outstack();

    for(var j=0;j<stack_arr.length;j++) {
        $(stack[stack_arr.length-j-1]).html(stack_arr[j]);
    }
    
    // thisisnum=false;
    divp++;
    pointer++;
}


function text() {console.log("text");



    switch (out_arr[0]) {//pre know
        case "+":

            stack_arr[stack_arr.length-1]+=
                stack_arr[stack_arr.length-2];

            $(stack[1]).html(
                    stack_arr[stack_arr .length-1]);


            break;
        case "-":
            stack_arr[stack_arr.length-1]-=
                stack_arr[stack_arr.length-2];
            break;
        case "*":

            stack_arr[stack_arr.length-1]*=
                stack_arr[stack_arr.length-2];
console.log()
            $(stack[1]).html(
                stack_arr[stack_arr .length-1]);

            $(stack[0]).html(
                stack_arr[stack_arr .length-1]);


            break;
        case "/":
            stack_arr[stack_arr.length-1]/=
                stack_arr[stack_arr.length-2];

            break;
        case "=":

            break;
        default:
            $("#out_stack").html("エラーです");
            clearInterval(sI);
            break;

    }
    out_arr.shift();
    count++;

}

function outstack() {
    $("#out_stack").html(out_arr.join(' '));
    console.log("stack_arr : "+stack_arr);
    console.log("out_arr : "+out_arr);

}

function arr_FirstElement_Move() {
    stack_arr.push(out_arr[0]);
    out_arr.shift();
}


    function searchNumNum(arr) {
        var numcount=0;

        for(var i=0;i<arr.length;i++) {
            if(isNaN(arr[i])) {
                numcount++;
            }
        }

        return numcount
    }


function c() {



    $(stack[divp]).html(out_arr[divp]);//output in stack

    stack_arr.shift();
    $("#out_stack").html(stack_arr.join(' '));
    //output in stackout
    console.log(out_arr);
    console.log (stack_arr);


    for (var i=0;i<out_arr.length;i++) {
        $("#stack").find('div')[i].html(out_arr[i]);

    }
    var input = $("#input").val();

//10 20 30 *+=

//{10 20 30 *+=}
    var stack = [];
    for (var i = 0; i < out_arr.length; i++) {
        switch (out_arr[i]) {
            case "+":
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            default:
                se(out_arr[i], i);
                break;
            anima();

        }

    }

    function se(input, i) {
        if (typeof(parseInt(input)) === 'number') {

            $('input[name="[i]"]').innerHTML = i;
        }

        if (typeof(input) === 'string') {

            $('input[name="[i]"]').innerHTML = i;
        }
    }


}


