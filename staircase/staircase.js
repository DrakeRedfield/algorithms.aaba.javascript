function staircase(n) {
    // Write your code here
    for(let row = 1; row<= n; row++) {
        let string = '';
        const withSpaces = n - row;
        for(let col = 1; col <= n; col++) {
            if(col <= withSpaces ) {
                string+=' '
            } else {
                string+='#'
            }
        }
        console.log(string);
    }
};


staircase(4);