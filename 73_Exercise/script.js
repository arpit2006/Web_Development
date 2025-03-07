// async function hacking() {
//     let x = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Initiating hacking sequence...");

//         }, 1000);
//     })

// }
await setTimeout(() => {
    console.log("Initiating hacking Process...");

}, 1000);
await setTimeout(() => {
    console.log("Initiating hacking Sequence...");

}, 2000);
await setTimeout(() => {
    console.log("Initiating hacking Process...");

}, 3000);
await setTimeout(() => {
    console.log("Initialized...");

}, 4000);
await setTimeout(() => {
    console.log("Sucessfull...");

}, 2000);
// await hacking()
// {

//     console.log("Initiating hacking sequence...");
//     console.log("Initiating hacking Process...");
//     console.log('Initialized...');
//     let hack = await hacking()
//     console.log(hack);

//     console.log('Hacking process completed');

// }