#!/usr/bin/node
const input = process.argv[2];

if (input === undefined) {
    console.log('Not a number');
} else {
    const myVar = parseInt(input);
    if (isNaN(myVar)) {
        console.log('Not a number');
    } else {
        console.log('My number: ' + myVar);
    }
}

