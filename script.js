
var group = document.querySelector('#group');

for (var i = 0; i < 16; i ++) {
    var grid = document.createElement('div');
    grid.className = "grids";

    group.appendChild(grid);
}