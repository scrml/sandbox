console.log("worker summoned");

onmessage = function(m) {
    let data = m.data;
    console.log("worker received " + data);

    // bounce data right back
    console.log("worker sending " + data);
    this.postMessage(data);
}