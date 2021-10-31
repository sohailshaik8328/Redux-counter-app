let store = Redux.createStore(reducer);
// console.log(store)
let counter = store.getState();
// console.log(counter)

let h1 = document.querySelector('.counter');

let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

increment.addEventListener('click', () => {
    store.dispatch({type : "increment"})
})
decrement.addEventListener('click', () => {
    store.dispatch({type : "decrement"})
})
reset.addEventListener('click', () => {
    store.dispatch({type : "reset"})
})

store.subscribe(() => {
    counter = store.getState();
    h1.innerHTML = counter
})


function reducer(state = 0, action) {
    switch(action.type) {
        case "increment" :
            return state + 1;
        case "decrement" : 
            return state - 1;
        case "reset" : 
            return state = 0;
        default  :
        return state;
    }
}




let store1 = Redux.createStore(reducerOne);

let counter1 = store1.getState();
console.log(counter1)

let textOne = document.querySelector('.counter1');
let increment1 = document.querySelector('.increment1');
let decrement1 = document.querySelector('.decrement1');
let reset1 = document.querySelector('.reset1');
let step5 = document.querySelector('.step5');
let step10 = document.querySelector('.step10');
let step15 = document.querySelector('.step15');

let stepValueSelected;
step5.addEventListener('click', (e) => {
    stepValueSelected = Number(e.target.innerHTML);
    step5.classList.add('active')
    // console.log(e)
    // console.log(stepValueSelected);
})

step10.addEventListener('click', (e) => {
    stepValueSelected = Number(e.target.innerHTML);
    step10.classList.add('active')
    step5.classList.remove('active')
})

step15.addEventListener('click', (e) => {
    stepValueSelected = Number(e.target.innerHTML);
    step15.classList.add('active')
    step10.classList.remove('active')

})


increment1.addEventListener('click', () => {
    store1.dispatch({type : "increment" , step : stepValueSelected})
})

decrement1.addEventListener('click', () => {
    store1.dispatch({type : "decrement" , step : stepValueSelected})
})

reset1.addEventListener('click', () => {
    store1.dispatch({type : "reset"});
})

store1.subscribe(() => {
    counter1 = store1.getState();
    textOne.innerHTML = counter1;
})


function reducerOne(state = 0, action) {
    switch(action.type) {
        case "increment" :
            return state + (action.step || 1);
        case "decrement" : 
            return state - (action.step || 1);
        case "reset" : 
            return state = 0;
        default :
            return state;
    }
}



let h1_two = document.querySelector('.counter2');
let step_5_1 = document.querySelector('.step_5_1');
let step_10_1 = document.querySelector('.step_10_1');
let step_15_1 = document.querySelector('.step_15_1');
let max_15 = document.querySelector('.max_15');
let max_100 = document.querySelector('.max_100');
let max_200 = document.querySelector('.max_200');
let increment2 = document.querySelector('.increment2');
let decrement2 = document.querySelector('.decrement2');
let reset2 = document.querySelector('.reset2');


let store2 = Redux.createStore(reducerTwo);

let counter2 = store2.getState();

let selectedValueStep;
step_5_1.addEventListener('click', (e) => {
    selectedValueStep = Number(e.target.innerHTML);
    step_5_1.classList.add('active');
    step_10_1.classList.remove('active') && step_15_1.classList.remove('active');
})

step_10_1.addEventListener('click', (e) => {
    selectedValueStep = Number(e.target.innerHTML);
    step_10_1.classList.add('active');
    step_5_1.classList.remove('active') && step_15_1.classList.remove('active');
})

step_15_1.addEventListener('click', (e) => {
    selectedValueStep = Number(e.target.innerHTML);
    step_15_1.classList.add('active');
    step_10_1.classList.remove('active') && step_5_1.classList.remove('active');

})

let maxValueSelected;

max_15.addEventListener('click', (e) => {
    maxValueSelected = Number(e.target.innerHTML);
    max_15.classList.add('active');
})

max_100.addEventListener('click', (e) => {
    maxValueSelected = Number(e.target.innerHTML);
    max_100.classList.add('active');
    max_15.classList.remove('active')
})

max_200.addEventListener('click', (e) => {
    maxValueSelected = Number(e.target.innerHTML);
    max_200.classList.add('active');
    max_100.classList.remove('active')

})

increment2.addEventListener('click', () => {
    store2.dispatch({type : "increment", step : selectedValueStep, maxValue : maxValueSelected});
})

decrement2.addEventListener('click', () => {
    store2.dispatch({type : "decrement", step : selectedValueStep, maxValue : maxValueSelected});
})

reset2.addEventListener('click', () => {
    store2.dispatch({type : "reset"});
})

store2.subscribe(() => {
    counter2 = store2.getState();
    h1_two.innerHTML = counter2
})



function reducerTwo(state = 0, action) {
    switch (action.type) {
        case "increment":
            return state + (action.step || 1) > action.maxValue ? action.maxValue : state + (action.step || 1)
            break;
        case "decrement":
             return state - (action.step || 1) 
            break;
        case "reset":
            return state = 0;
            break;
    
        default:
            return state;
    }
}

