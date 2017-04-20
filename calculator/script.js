
      window.addEventListener("load", init, false);
    
        function init() {
            
            one.addEventListener("click", function() { enter(1); }, false);    
            two.addEventListener("click", function(){ enter (2); }, false);
            three.addEventListener("click", function(){ enter (3); }, false);
            four.addEventListener("click", function(){ enter (4); }, false);
            five.addEventListener("click", function(){ enter (5); }, false);

            six.addEventListener("click", function(){ enter (6); }, false);
            seven.addEventListener("click", function(){ enter (7); }, false);
            eight.addEventListener("click", function(){ enter (8); }, false);
            nine.addEventListener("click", function(){ enter (9); }, false);
            zero.addEventListener("click", function(){ enter (0); }, false);

            period.addEventListener("click", function(){ enter ("."); }, false);
            add.addEventListener("click", function(){ enter ("+"); }, false);
            subtract.addEventListener("click", function(){ enter ("-"); }, false);
            divide.addEventListener("click", function(){ enter ("/"); }, false);
            multiply.addEventListener("click", function(){ enter ("*"); }, false);   

            equal.addEventListener("click", function(){ calculate(); }, false);    
        }

    function enter(param) {
        var num = document.getElementById("result");
        num.value += param;
    }

    function calculate() {
        var num = document.getElementById("result");
        num.value = eval(num.value);
    }

