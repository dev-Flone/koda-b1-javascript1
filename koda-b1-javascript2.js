// 1
const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
}
console.log(we.are.the.best)

// 2
const hello = {
    world: "Hello World"
}
console.log(hello.world)

// 3
const obj = {
    str: [0, 1, 2, [
        0, [
            0, 1, {man: [
                {tech: {academy: "Tech Academy"}}
            ]}
        ]
    ]]
    
}
console.log(obj.str[3][1][2].man[0].tech.academy)

// 4
const my = [
    {favorite: [
        0, 1, 2, {fruit: {
            is: "Apple"
        }}
    ]}
]
console.log(my[0].favorite[3].fruit.is)

// 5
const num = {
    first: [5, 10],
    second: [10, 15, 22]
}
console.log(num.first[1] + num.second[2])