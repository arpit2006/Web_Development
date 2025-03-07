console.log("Arpit is Hacker")
console.log("Sumedh is Hecker")
//JavaScript is Synchronous and Single-Threaded

//even tough the timeout is zero it will still run after the console.log
//This is a Asynchronous behaviour function it will be executed after the all execution
setTimeout(() => {
    console.log("I am inside setTimeout")

}, 2000);

console.log("End")

const callback = (arg) => {
    console.log(arg)

}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
 