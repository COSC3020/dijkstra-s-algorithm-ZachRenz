function dijkstra(graph, sourceNode) {
    let dist = Array(graph.length).fill(Infinity); dist[sourceNode] = 0;
    let pq = [[sourceNode,0]];
    let best = 0;
    let bestIndex = 0;
    let newDist = 0;
    while(pq.length != 0){
        best = nextBest();
        if(pq.length != 0){
            pq.splice(bestIndex,1);
            for(i = 0; i < graph[best].length; i++){
                if(graph[best][i] != 0){
                    newDist = graph[best][i] + dist[best];
                    if(newDist < dist[i]){
                        dist[i] = newDist;
                        pq.push([i,newDist]);
                    }
                }
            }
        }
    }
    
    function nextBest(){
        let best = 0;
        for(i=0; i < pq.length; i++){
            if(pq[i][1] < pq[best][1]){
                (pq[i][1] <= dist[i])? best = i : pq.splice(i,1);
            }
        }
        bestIndex = best;
        return pq[best][0];
    }
    return dist;
}

