var input;
var in_arr;
var pointer = 0;
var sI;
$("#button").click(
    function () {
        input = $("#input").val();
        input="10 20 30 * + =";
        in_arr= input.split(" ");
        if(count<=in_arr.length) {
            sI = setInterval(anim, 1000);
        }
    }

);

var count=-1;
function anim() {
    if(count===-1){

        $("#out_stack").html(input);
    }else{
        var em= $("#stack").find("div");　　//NonjqueryObject
        $(em[0]).html(in_arr[0]);//output in stack

        in_arr.shift();
        var move_in_arr=in_arr;
        $("#out_stack").html(Earr.join(' '));
        //output in stackout

        in_arr=move_in_arr;
    }

   count++;


}



function c() {
    for (var i=0;i<in_arr.length;i++) {
        $("#stack").find('div')[i].html(in_arr[i]);

    }
    var input = $("#input").val();

//10 20 30 *+=

//{10 20 30 *+=}
    var stack = [];
    for (var i = 0; i < in_arr.length; i++) {
        switch (in_arr[i]) {
            case "+":
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            default:
                se(in_arr[i], i);
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

function anima() {
   pointer = a;


}

function addstack() {

}


