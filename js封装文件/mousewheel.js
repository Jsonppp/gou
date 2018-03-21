/**Created by fengYu on 2017/11/11*/
/*
*   eFn     第一个参数  滚动方向
*           第二个     事件对象
*           阻止默认行为：在eFn里return false即可！
*
* */
function mousewheel(obj,eFn) {
    function fn1(e) {
        e = e || window.event;
        if(eFn.call(this,e.wheelDelta/120 || -e.detail/3,e)===false)!-[1,]?e.returnValue=false:e.preventDefault();
    }
    var type = obj.onmousewheel===null?"mousewheel":"DOMMouseScroll";
    !-[1,]?obj.attachEvent("on"+type,fn1):obj.addEventListener(type,fn1);
}