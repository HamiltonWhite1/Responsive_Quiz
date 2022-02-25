let qOne = document.querySelector("#qOne")
let q_one = document.querySelector("#q_one")

let qTwo = document.querySelector("#qTwo")
let q_two = document.querySelector("#q_two")

let qThree = document.querySelector("#qThree")
let q_three = document.querySelector("#q_three")

let qFour = document.querySelector("#qFour")
let q_four = document.querySelector("#q_four")

let qFive = document.querySelector("#qFive")
let q_five = document.querySelector("#q_five")

let qSix = document.querySelector("#qSix")
let q_six = document.querySelector("#q_six")


let qSeven = document.querySelector("#qSeven")
let q_seven = document.querySelector("#q_seven")


let qEight = document.querySelector("#qEight")
let q_eight = document.querySelector("#q_eight")


let qNine = document.querySelector("#qNine")
let q_nine = document.querySelector("#q_nine")


let qTen = document.querySelector("#qTen")
let q_ten = document.querySelector("#q_ten")

qOne.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_one.value.toLowerCase() == "imola") {
        console.log("This works")
        q_one.style.backgroundColor = 'lightgreen';
    }
})

qTwo.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_two.value.toLowerCase() == "silverstone") {
        console.log("This works")
        q_two.style.backgroundColor = 'lightgreen';
    }
})

qThree.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_three.value.toLowerCase() == "daniel ricciardo") {
        console.log("This works")
        q_three.style.backgroundColor = 'lightgreen';
    }
})

qFour.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_four.value.toLowerCase() == "lando norris") {
        console.log("This works")
        q_four.style.backgroundColor = 'lightgreen';
    }
})

qFive.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_five.value.toLowerCase() == "lewis hamilton") {
        console.log("This works")
        q_five.style.backgroundColor = 'lightgreen';
    }
})

qSix.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_six.value.toLowerCase() == "megan thee stallion") {
        console.log("This works")
        q_six.style.backgroundColor = 'lightgreen';
    }
})

qSeven.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_seven.value.toLowerCase() == "nikkita mazepin") {
        console.log("This works")
        q_seven.style.backgroundColor = 'lightgreen';
    }
})

qEight.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_eight.value.toLowerCase() == "lewis hamilton") {
        console.log("This works")
        q_eight.style.backgroundColor = 'lightgreen';
    }
})

qNine.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_nine.value.toLowerCase() == "nikkita mazepin") {
        console.log("This works")
        q_nine.style.backgroundColor = 'lightgreen';
    }
})


qTen.addEventListener('submit', (e) => {
    e.preventDefault()

    if (q_ten.value.toLowerCase() == "nikkita mazepin") {
        console.log("This works")
        q_ten.style.backgroundColor = 'lightgreen';
    }
})


