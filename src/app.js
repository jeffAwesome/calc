
(function() {
    var calc = require('./calc.js')();
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function() {
        inputs = process.stdin.read();
        if (inputs !== null) {
            if (inputs === "q\n") {
                console.log("You are exiting the program.");
                process.exit();
            } else {
                console.log(calc.evaluate(inputs));
            }
        }
    });

})();