let a = 200

if (true){
    let a = 20
    const b = 30
    console.log("INNER: ", a);
}


console.log(a);
// console.log(b);


function one(){
    const username = "Virang"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}