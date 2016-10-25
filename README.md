# d3-force-container

`npm install d3-force-container`

Constrain particles in a [forceSimulation](https://github.com/d3/d3-force) to a bounding box.

[This examples uses the forceContainer to stop points from overlaping with the x axis](http://bl.ocks.org/1wheel/68073eeba4d19c454a8c25fcd6e9e68a)

To use, pass an array with the position of the upper left and lower right corner of the bounding box to forceContainer: 

```
var force = d3.forceSimulation(data)
	.force("container", forceContainer([[10, 10],[890, 490]]))
```