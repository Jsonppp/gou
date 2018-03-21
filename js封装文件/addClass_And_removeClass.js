 // className 类名的添加和删除封装方法 yufeng   2017.11.8
//添加类型（对象，需要添加的类名）
function addClass(ele,cName) {
    var arr1 = ele.className.split(' ');
    var arr2 = cName.split(" ");
    var arr3 = arr1.concat(arr2);

    //console.log(arr3)
    for(var i=0;i<arr3.length;i++){
        for(var k=arr3.length-1;k>i;k--){
            if(arr3[k]===""){
                arr3.splice(k,1)
            }
            if(arr3[i]===arr3[k]){
                arr3.splice(k,1)
            }
        }
    }
    ele.className = arr3.join(" ");
}
function removeClass(ele,cName) {
    var arr1 = ele.className.split(' ');//on wrap fy on on on on
    var arr2 = cName.split(" ");// on wrap

    for(var i=0;i<arr2.length;i++){
        for(var j=arr1.length-1;j>=0;j--){
            if(arr2[i]===arr1[j]){
                arr1.splice(j,1)
            }
        }
    }
    ele.className = arr1.join(" ")
}