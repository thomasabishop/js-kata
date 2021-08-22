const names = ['Thomas', 'Martha', 'Carrie'];

for (const name of names) {
    console.log(name);
}

for (const entry of names.entries()){
    console.log(entry);
}
for (const [i, name] of names.entries()){
    console.log(i, name);
}

/*
const numsToSum = [5, 5, 5];

for (const num of numsToSum){
    let total = 0;
    total =+ num;
    console.log(total);
}
*/