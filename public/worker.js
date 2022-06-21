console.log("worker summoned");

let count = 0;

onmessage = function(m) {
    let data = m.data;
    this.postMessage([count++, data]);
}