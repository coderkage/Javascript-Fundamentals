/* lexical scope : chaining of function */

//scoping chain
var a = 30;
function outer(){
    var c= 10;

    function inner(){
        var e = 20;
        console.log(c,e,a);
    }
    inner();
}
outer();