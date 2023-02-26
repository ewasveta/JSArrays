//Ex.1
function typeCheck()
{
    const aught = prompt("Please give me a link or some numbers separated by comma , ");
  
    const arr = aught.split(",").map(Number);    

    let res = '';
    if(Boolean(arr[0]))
    {
        res = Array.isArray(arr) ? 'array' : 'not array';
        document.querySelector("#txt1").value = `Your input is: ${res}`;
    }
    else
    {
        res = typeof(aught);
        document.querySelector("#txt1").value = `Your input is: ${res}`;
    }
}
//Ex.2
function cloneArray()
{
    const str = 
    prompt("Please give me some numbers for array separated by comma ,");
    if (!str)
    {
        document.querySelector("#txt2").value = `Empty input`;
        return;
    }     
    const arr = str.split(",").map(Number);

    const subStr = prompt("Optional:\n\
    Please give me some numbers for nested array separated by comma ,\n\
    The array will be put into random place of parent array.");

    if (subStr) 
    {
        const subArr = subStr.split(",").map(Number);

        let index = Math.floor(Math.random() * arr.length + 1);
        console.log("random index of nested array:", index);

        arr.splice(index, 0, subArr);
    }
    let cloneArr = JSON.parse(JSON.stringify(arr));

    console.log(cloneArr);
    document.querySelector("#txt2").value = `Deep clone is shown on the console`;
}
//Ex.3
function firstN()
{
    const str = prompt("Please give me some numbers for array separated by comma ,\n\
and the last one is for 'n'");
    if (!str) 
    {
        document.querySelector("#txt3").value = `Empty input`;
        return;
    }
    let noVal = "No values";
    let arr = str.split(",");
    if(!arr[0])
    {
        document.querySelector("#txt3").value = noVal;
        return;
    }
    arr = arr.map(Number);

    const counter = arr.pop();
    console.log("n = " + counter);
   
    if(counter < 0)
    {
        document.querySelector("#txt3").value = noVal;
        return;
    }
    let piece = (counter == 0) ? arr.slice(0,1) : arr.slice(0,counter);

    document.querySelector("#txt3").value = piece;
}
//Ex.4
function lastN()
{
    const str = prompt("Please give me some numbers for array separated by comma ,\n\
and the last one is for 'n'");
    if (!str) 
    {
        document.querySelector("#txt4").value = `Empty input`;
        return;
    }
    let noVal = "No values";
    let arr = str.split(",");
    if(!arr[0])
    {
        document.querySelector("#txt4").value = noVal;
        return;
    }
    arr = arr.map(Number);

    const counter = arr.pop();
    console.log("n = " + counter);
   
    if(counter < 0)
    {
        document.querySelector("#txt4").value = noVal;
        return;
    }
    let piece = (counter == 0) ? arr.slice(arr.length-1, arr.length) : arr.slice(arr.length-counter, arr.length);

    document.querySelector("#txt4").value = piece;    
}
//Ex.5
function arr2Str()
{
    const str = 
    prompt("Please give me some words separated by comma ,");
    if (!str)
    {
        document.querySelector("#txt5").value = `Empty input`;
        return;
    }     
    const arr = str.split(",");
    document.querySelector("#txt5").value = arr.join("+");
}
//Ex.6
function markEven()
{
    let str = 
    prompt("Please give me some numbers separated by comma ,\n\
            Negative numbers are allowed");
    if (!str)
    {
        document.querySelector("#txt6").value = `Empty input`;
        return;
    } 
    const arr = str.split(",").map(Number);  
    console.log(arr);
    
    let evenArr = [];
    let even = arr[0];
    for(let i=1; i<arr.length; i++)
    {
        if( even%2 )
        {
            let se = Math.sign(even);
            let si = (arr[i]==0) ? 1 : Math.sign(arr[i]);
            even = even*10*se + arr[i]*si;
            even = even *se * si;
        }
        else
        { 
            evenArr.push(even);
            even = arr[i];
        }
    }
    console.log("even="+even);
    if(! (even%2)) evenArr.push(even);   
    document.querySelector("#txt6").value = evenArr.join('~');
}
//Ex.7
function sort()
{
    let str = 
    prompt("Please give me some numbers separated by comma ,");
    if (!str)
    {
        document.querySelector("#txt7").value = `Empty input`;
        return;
    } 
    let arr = str.split(",").map(Number);

    arr.sort((a,b)=>{return a-b});

    document.querySelector("#txt7").value = arr;
}
//Ex.8
function frequent()
{
    let str = 
    prompt("Please give me some characters separated by comma ,");
    if (!str)
    {
        document.querySelector("#txt8").value = `Empty input`;
        return;
    } 
    let arr = str.split(",").sort();
    console.log(arr);

    let count = 1, max = 0, freq = 0;
    for (let i=1; i<arr.length; i++)
    {
        if(arr[i] == arr[i-1]) count++;
        else
        {
            if(count > max)
            {
                max = count;
                count = 1;
                freq = arr[i-1];
            }
        }
    }
    if(count > max)
    {
        max = count;
        freq = arr[arr.length-1];
    }
    document.querySelector("#txt8").value = 
    `The most frequent item is ${freq} (${max} times)`;
}
//Ex.9
function swapCase()
{
    let sentence = 
    prompt("Please give me case sensitive sentence");
    if (!sentence)
    {
        document.querySelector("#txt9").value = `Empty input`;
        return;
    }
    let str = '';
    for(x of sentence)
    {
        str += (x===x.toLowerCase()) ? x.toUpperCase() : x.toLowerCase();
    }
    document.querySelector("#txt9").value = str;
    console.log(str);
}
//Ex.10
function parseFromInput(str, arr)
{
    str = str.slice(1);
    str = str.slice(0, -1);
    console.log(str);
    if(str[0] === "[" && str[str.length-1] === "]")
    {
        let tmp = str.split("],");
        for(i in tmp)
        {
            if(tmp[i][0] === "[") tmp[i] = tmp[i].slice(1);
            if(tmp[i][tmp[i].length-1] === "]") tmp[i] = tmp[i].slice(0, -1);

            arr[i] = [];
            arr[i].push(tmp[i].split(','));
        }
        //console.log(arr);
    }
    else
    {
        arr = str.split(',');        
    }
    return arr;
}
function printNestArr(arr)
{
    for(key in arr)
    {
        if (Array.isArray(arr[key]) && 
            Array.isArray(arr[key][0])) 
        {            
            console.log(`row ${key}`);
            printNestArr(arr[key]);
        }
        else
        {
            console.log(arr[key]);
        }
    }
}
function getSetNestArr()
{
    let str = 
    prompt("Please give me a bracketed array, elements are separated by comma.\n\
            Nested array has the same format");
    if (!str)
    {
        document.querySelector("#txt10").value = `Empty input`;
        return;
    }
    if(str[0] !== "[" || str[str.length-1] !== "]")
    {
        document.querySelector("#txt10").value = `I need a bracketed array`;
        return;       
    }    
    let arr = [];
    arr = parseFromInput(str, arr);
    //console.log(arr);
    printNestArr(arr);
    document.querySelector("#txt10").value = "The array is shown on the console.";
}
//Animation:
let sgn = 1;
setInterval(makeSkew, 3000);
function makeSkew()
{            
    // console.log("sgn: ", sgn);
    document.querySelector("#I").style = 
    'transform: skewX('+sgn*50+'deg); transition: 2s ease;';

    document.querySelector("#A").style = 
    'transform: skewX('+sgn*(-50)+'deg); transition: 2s ease;';

    sgn *= -1;
}