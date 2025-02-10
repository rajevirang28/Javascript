let a = 200

if (true){
    let a = 20
    const b = 30
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);


function one(){
    const username = "Virang"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "Virang"
    if(username == "Virang"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// *************** interesting *****************

function addone(num){
    return num + 1
}
addone(5)

const addtwo = function(num){
    return num + 2
}
addtwo(5) 