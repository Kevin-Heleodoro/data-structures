// // Prototype Chains

// const gold = {a: 'Property in gold'};

// // console.log(gold.a)
// // console.log(gold.b) // returns undefined because that value hasn't been assigned

// const blue = Object.assign({}, gold)
// // console.log(blue)

// blue.b = 'Property in blue'
// // console.log(blue)

// gold.c = 'Testing' // Will not translate to blue 
// // console.log(gold)
// // console.log(blue)

// const rose = Object.create(gold);
// console.log(rose) // Empty object
// rose.b = 'flowers'
// console.log(rose.b)
// console.log(rose.c) // Will refer to gold 
// console.log(gold)

const gold = {
    a: 'Gold Prop'
}

const blue = Object.create(gold)

