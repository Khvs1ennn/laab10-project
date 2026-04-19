const graph = {
    A: { B: 1, C: 2 },
    B: { A: 1, D: 3, E: 4 },
    C: { A: 2, F: 5 },
    D: {},
};
function dijkstra(graph, start) {
    let distances = {};
    let visited = new Set();

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    while (true) {
        let closest = null;
        for (let node in distances) {
            if (!visited.has(node) && (closest === null || distances[node] < distances[closest])) {
                closest = node;
            }
        }
        if (closest === null) {
            break;
        }
        for (let neighbor in graph[closest]) {
            let newDist = distances[closest] + graph[closest][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
            }
        }
        visited.add(closest);
    }
    return distances;
}
console.log(dijkstra(graph, 'D'));