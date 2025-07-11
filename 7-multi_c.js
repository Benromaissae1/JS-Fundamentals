#!/usr/bin/node
const input = process.argv[2];
const x = "C is fun";
if (input === undefined) {
    console.log('Missing number of occurrences');
} else {
    const count = parseInt(input);
    for (let i = 0; i < count; i++){
        console.log(x);
    }
}

