let  s ="LVIII";
const romanToInt = (s) => {
    let symbol = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    
    // if(s.length === 1)  console.log(symbol[s[0]]);
    var res = 0;
    for (let i = 0; i < s.length; i++) {
        // console.log(symbol[s[i + 1]]);
        console.log(symbol[s[i]] > symbol[s[i+1]]);
        // if(symbol[s[i]] < symbol[s[i+1]]){
        //     console.log(symbol[s[i]]);
        //     // res += (symbol[s[i+1]] - symbol[s[i]]);
        // console.log((symbol[s[i+1]] - symbol[s[i]]))
        //     i++;
        // }
        // else res += symbol[s[i]]
        
    }

    // console.log(symbol);

};

romanToInt(s)