const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);


let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('resolved')
    },1000);
})

async function asyncCalling() {
    let output = await promise
    console.log(output)
    console.log('hello')

    
}
asyncCalling()