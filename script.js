
var group = document.querySelector('#group');
function workSpace(amount) {
    var gridsA = Math.pow(amount, 2);
    var crazy = (100 / amount) - (0.125);
    console.log(crazy);
    for (var i = 0; i < gridsA; i ++) {
        var grid = document.createElement('div');
        grid.className = "grids";

        grid.style.flex = `1 1 ${crazy}%`;

        group.appendChild(grid);
    }
}
times = prompt('What Grid Size do you want? eg. 9', 9);
workSpace(times);

allGrids = document.querySelectorAll(".grids");
allGrids.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = "blue";
    })
});

reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    window.location.reload(false);
})