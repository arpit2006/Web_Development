console.log('This is Promises');
let prom = new Promise((resolve, reject) => {
    setInterval(() => {
        let a = Math.random();
        if (a < 0.5) {
            reject('I am rejected')
        }
        else {
            console.log('Yes I am done')
            resolve('I am done')
        }

    }, 3000);
})

let prom3 = new Promise((resolve, reject) => {
    setInterval(() => {
        let rand = Math.random();
        if (rand < 0.1) {
            reject('I am rejected')
            console.log('inside reject');
            
        }
        else {
            resolve("I am resolved")
            console.log('Yes I am done');
            
        }

    }, 3000);
})
prom3.then((rand) => {
    console.log(rand);
})


let prom1 = new Promise((resolve, reject) => {
    setInterval(() => {
        let a = Math.random();
        if (a < 0.5) {
            reject('I am rejected1')
        }
        else {
            console.log('Yes I am done1')
            resolve('I am done1')
        }

    }, 1000);
})

// prom.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);

// })
//return status and value of promise

// let p3 = Promise.allSettled([prom,prom1])
// p3.then((a) => {
//     console.log(a);

// }).catch((err)=>{
//     console.log(err);

// })
//if all promises are rejected the it will throw agregate error
let p3 = Promise.any([prom, prom1])
p3.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log(err);

})

let promises = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.1) {
        reject("I am Rejected")
    }
    else {
        resolve("I am resolved")
    }
})

let pro = new Promise((resolve, reject) => {
    
})


