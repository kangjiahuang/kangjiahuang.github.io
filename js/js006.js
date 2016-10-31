var vm = avalon.define('model', function (vm) {
    vm.sz = 0;//设置大小
    vm.grid = [];//设定数组
    vm.tile_click = function () {//设置点击函数
        var col = $(this).index() % vm.sz;//知道第几列
        var row = parseInt($(this).index() / vm.sz);//获取行
        var dx = [0, 0, 1, 0, -1];//用于找上下左右格子
        var dy = [0, 1, 0, -1, 0];//用于找上下左右格子
        var buf;
        var k = 0;
        for (var d = 0; d < 5; ++d) {
            col += dx[d]; row += dy[d];//五个位置都找一遍
            if (col >= 0 && col < vm.sz && row >= 0 && row < vm.sz) {
                //设置边界
                buf = 1 - vm.grid[row * vm.sz + col];
                // buf暂时存储数值
                vm.grid.splice(row * vm.sz + col, 1, buf);
                //替换进入
            }
            col -= dx[d]; row -= dy[d];//再回归到中间位置
        }
        for (var j = 0; j < vm.sz * vm.sz; j++) {
            if (vm.grid[j] == 1) k++;
            if (k == (vm.sz * vm.sz))
            { alert("恭喜胜利"); vm.sz++; }
        }
    }
});
vm.$watch('sz', function (val) {
    var i, j, row;
    val = parseInt(val) || 4;
    vm.grid.clear();
    for (i = 0; i < val * val; ++i) vm.grid.push(0);
});
vm.sz = 3;
function up() {
    vm.sz++;
    if (vm.sz > 15) { alert("别乱点"); vm.sz = 14; }
}
function down() {
    vm.sz--;
    if (vm.sz == 1) { alert("不能再降了"); vm.sz = 2; }
}