var input;
var in_arr;
var disp_arr;
var pointer = 0;
var divp=0;
var sI;

$("#button").on('click',
    function () {



        input = $("#input").val();
        input="10 20 30 * + =";
        in_arr= input.split(" ");
        disp_arr=input.split(" ");
        for(var i=0;i<searchNumNum(in_arr);i++){
        $('#stack').append("<div><br></div>");
        }

        setTimeout(function () {
            if(count<=in_arr.length) {
                sI = setInterval(anim, 1000);
            }
        },1000);



    }

);


function searchNumNum(arr) {
    var numcount=0;

    for(var i=0;i<arr.length;i++) {
        if(isNaN(arr[i])) {
          numcount++;
        }
    }

    return numcount
}

var count=null;
var thisisnum=false;
var em;　//NonjqueryObject

function anim() {
    $(function () {

        em= $('#stack').find('div');
        if(count===null){
        $("#out_stack").html(input);//first disp
        count=0;
    }else if(thisisnum===false) {

        $(em[divp]).html(in_arr[divp]);//output in stack

        disp_arr.shift();
        $("#out_stack").html(disp_arr.join(' '));
        //output in stackout
console.log(in_arr);
console.log (disp_arr);

        switch (in_arr[divp+1]) {//pre know
            case "+":
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            case "=":
                break;
            default:
                thisisnum=true;
                break;

        }

        count++;

    }else {
        $(em[divp]).html(in_arr[pointer+1]);
        $(em[divp+1]).html(in_arr[pointer]);
        thisisnum=false;
        divp++;
        pointer++;
    }

    });
}

function thisisnumber(num) {

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


