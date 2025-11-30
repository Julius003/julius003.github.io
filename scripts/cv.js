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
    line.style.left = (x1 + 1) + 'px';
    line.style.top = (y1 + 1) + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    graph.appendChild(line);
}


const createGraph = () => {
    const w = window.innerWidth;

    const node1 = document.getElementById("node1");
    const node2 = document.getElementById("node2");
    const node3 = document.getElementById("node3");
    const node4 = document.getElementById("node4");

    const anker1 = document.getElementById("anker1");
    const anker2 = document.getElementById("anker2");

    if (w <= 600) { // Contruct graph for mobile view
        connect(node1, node2);
        connect(node2, node3);
        connect(node3, node4);
        return
    }
    
    connect(node1, anker1);
    connect(anker1, node2);
    connect(anker1, node3);
    connect(node2, anker2);
    connect(node3, anker2);
    connect(anker2, node4);
}



document.addEventListener("DOMContentLoaded", () => {
    createGraph()
});

window.addEventListener("resize", () => {
    // Remove all lines 
    
    document.querySelectorAll('.line').forEach(el => el.remove());
    createGraph();
})
