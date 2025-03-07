// async function getdata(){
    //Simulate getting data from server
    //It will output once the time is done
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);

//     })
// }

//as soon as we define async function it will run in background  and allow other lines to execute
async function main() {
    console.log('Use Async Await instead of Promises');

    console.log('Loading modules');
    console.log('Do something');

    //await means we are waiting for the data to process till then we will not move to next line
    let data = await getdata()
    console.log(data);

    console.log('Process data');
    console.log('Process data 1');
    console.log('Process data 2');

}
main()

//here outoput is promise
//when promise is printed it will give its time and data


//this will excute after the promise is resolved
// till then it will be on hold/
// data.then((v)=> {
//     console.log('i an inside then');
// })

// this was old method so we introduced async await



async function getdata() {
    //fetch is in built function in js
    //taking data from the server and returning it
    //await means waiting till the data is fetched
    //forn api we have to use to await
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //parsing the data into json

    // let data = await x.json()
    //give as javascript object

    //we  can us text also
    let data = await x.text()

    //returning the data in string format
    console.log(data);
    
    
}
// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has Settled successfully