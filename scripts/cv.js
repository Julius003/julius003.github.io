// Construct the graph of the cv


// connect two node in the graph
const connect = (a, b) => {
    const graph = document.querySelector('.graph');
    const p1 = a.getBoundingClientRect();
    const p2 = b.getBoundingClientRect();
    const g = graph.getBoundingClientRect();

    const x1 = p1.left - g.left + p1.width / 2;
    const y1 = p1.top - g.top + p1.height / 2;
    const x2 = p2.left - g.left + p2.width / 2;
    const y2 = p2.top - g.top + p2.height / 2;

    const length = Math.hypot(x2 - x1, y2 - y1);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    const line = document.createElement('div');
    line.className = 'line';
    line.style.width = length + 'px';
    line.style.height = '2px';
    line.style.left = x1 + 'px';
    line.style.top = y1 + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    graph.appendChild(line);
}


const createGraph = () => {
    const node1 = document.getElementById("node1");
}



document.addEventListener("DOMContentLoaded", () => {
    createGraph()
});
