#!/usr/bin/node
const input = process.argv[2];
const count = parseInt(input);
if (input === undefined || isNaN(count)) {
    console.log('Missing size');
}
else {
    
    for (let i = 0; i < count; i++){
        console.log('X'.repeat(count));
    }
} 

