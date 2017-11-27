var input = $("#input").val();


function c() {

    var input = $("#input").val();
    var pointer = 0;

//10 20 30 *+=
    var in_arr = input.split(" ");
 
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


