function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move Disc From rod ${fromRod} to ${toRod}`);
        return;
    }

    towerOfHanoi(n - 1, fromRod, usingRod, toRod); // Move n-1 discs from fromRod to usingRod
    console.log(`Move Disc ${n} from ${fromRod} to ${toRod}`); // Move nth disc from fromRod to toRod
    towerOfHanoi(n - 1, usingRod, toRod, fromRod); // Move n-1 discs from usingRod to toRod
}

console.log(towerOfHanoi(2, "A", "C", "B"));
 // Big-O = O(2^n)