// Debouncing



const debouncing = (fn, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}


const func = () => {
    // console.log("calling api.....")
}

const debo = debouncing(func, 1000)

// for (var i = 1; i <= 10; i++) {
//     (function (i) {
//         setTimeout(() => {
//             // console.log(i)
//         }, 0)
//     })(i)
// }

let c = {
    a : 10,
    address:{
        add:45
    }
};

let b = JSON.parse(JSON.stringify(c))
// let b = c

c.a = 20
c.address.add = 85

// console.log(c)
// console.log(b)


// closures

const funct = () =>{
    let a = 10;
    return function(){
        let b = 20;
        const sum = a + b;
        return sum
    }
}

const result = funct()
// console.log(result())



// Promise.resolve(("reolved the promise"))
// .then((res)=>{
//     // console.log("Res1")
//     return res
// })
// .then((res)=>{
//     // console.log("Res2",res)
// })
// .catch(err=>{
//     // console.log(err)
// })


const obj = {}

obj[{}] = "value"

// console.log(obj)


const arr = [1,1,1,1,1,2]

const ob = {
    a:100
}
const anotherob = structuredClone(ob)

const set = new Set([...arr])
set.add(ob)
set.add(anotherob)
// console.log(set)
// console.log(Date.now())


function throttling (fn, delay){
    let lastcall = 0;

    return function(...args){
        const now = Date.now()

        console.log("asdf",lastcall, now - lastcall)

        if(now-lastcall >=delay){
            lastcall = now
            fn.apply(this, args)
        }
    }
}

const handleScroll = throttling(()=>{
    console.log("Scrolling")
}, 1000)

handleScroll()
handleScroll()
handleScroll()
handleScroll()
handleScroll()
handleScroll()
handleScroll()
handleScroll()
handleScroll()
handleScroll()