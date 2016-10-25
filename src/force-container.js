export default function (bbox) {
  var nodes, strength = 1; 

  if (!bbox || bbox.length < 2) bbox = [[0, 0], [100, 100]]


  function force(alpha) {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], x = node.x, y = node.y;

      if (x < bbox[0][0]) node.vx += (bbox[0][0] - x)*alpha
      if (y < bbox[0][1]) node.vy += (bbox[0][1] - y)*alpha
      if (x > bbox[1][0]) node.vx += (bbox[1][0] - x)*alpha       
      if (y > bbox[1][1]) node.vy += (bbox[1][1] - y)*alpha
    }
  }

  force.initialize = function(_){
    nodes = _;
  };

  force.bbox = function(_){
    return arguments.length ? (bbox = +_, force) : bbox;
  };
  force.strength = function(_){
    return arguments.length ? (strength = +_, force) : strength;
  }

  return force;
}}