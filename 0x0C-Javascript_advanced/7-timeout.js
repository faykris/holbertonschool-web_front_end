console.log('Start of the execution queue');
setTimeout(() => { console.log('Final code clock to be executed') }, 0);
for (let count = 1; count <= 100; count++) {
    console.log(count);
}
console.log('End of the loop printing');
