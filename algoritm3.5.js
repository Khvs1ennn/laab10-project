function towerOfhanoi(n, from, to, aux) {
    if (n == 1) {
        console.log("Move disk 1 from " + from + " to " + to);
        return;
    }
    towerOfhanoi(n - 1, from, aux, to);
    console.log("Move disk " + n + " from " + from + " to " + to);
    towerOfhanoi(n - 1, aux, to, from);
}
let n = 5; 
towerOfhanoi(n, 'A', 'C', 'B'); 
