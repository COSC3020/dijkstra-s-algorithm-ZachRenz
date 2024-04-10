//again I looked at some other test code to get an idea of how this needs to be tested
const fs = require('fs');
const assert = require('assert');
const { inflate } = require('zlib');

eval(fs.readFileSync('code.js')+'');

let graph1 = [
  [0,4,1,0,0],
  [2,0,6,3,0],
  [0,2,0,6,0],
  [0,0,0,0,7],
  [0,0,0,0,0]
];

let graph2 = [
  [0,1,7,0,0,0],
  [0,0,4,0,0,0],
  [3,3,0,0,0,1],
  [1,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,2]
];

let graph3 = [
  [0,0,1,3,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,6,0],
  [1,2,3,0,1,1],
  [0,4,0,3,0,0],
  [0,0,0,1,0,0]
];

assert(JSON.stringify(dijkstra(graph1, 0)) == JSON.stringify([0,3,1,6,13]));
assert(JSON.stringify(dijkstra(graph1, 4)) == JSON.stringify([Infinity,Infinity,Infinity,Infinity,0]));
assert(JSON.stringify(dijkstra(graph1, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,7]));
assert(JSON.stringify(dijkstra(graph2, 0)) == JSON.stringify([0,1,5,Infinity,Infinity,6]));
assert(JSON.stringify(dijkstra(graph2, 3)) == JSON.stringify([1,2,6,0,Infinity,7]));
assert(JSON.stringify(dijkstra(graph2, 1)) == JSON.stringify([7,0,4,Infinity,Infinity,5]));
assert(JSON.stringify(dijkstra(graph3, 3)) == JSON.stringify([1,2,2,0,1,1]));
assert(JSON.stringify(dijkstra(graph3, 5)) == JSON.stringify([2,3,3,1,2,0]));
assert(JSON.stringify(dijkstra(graph3, 2)) == JSON.stringify([10,10,0,9,6,10]));
