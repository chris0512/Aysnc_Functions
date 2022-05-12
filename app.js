async function greet(){
    return "hello";
}

greet().then((val) => {
    console.log("promise resolve: ", val);
});


// async function add(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number')
//         throw "x and y must be number";
//     return x + y;
// }


function add(x, y) {
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number' || typeof y !== 'number')
            reject( 'x and y must be numbers');
    })
    resolve(x + y);
}

add('e', 'r').then(val => {
    console.log("promise resolve: ", val);
}).catch(err => {
    console.log("promise reject: ", err);
});