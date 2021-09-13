var well = document.getElementsByClassName("well")[0];//获取轮播图片的容器div
var rotatePanels = document.getElementsByClassName("rotate-panel");//获取轮播图片数组
var round=0;//轮播次数
var rotateButtonLis = document.getElementsByClassName("rotate-button-li");//获取圆点数组
rotateButtonLis[0].style.background='#F40';//设置第一个圆点默认为红色
var index=0;//圆点下标
var rotateClick=false;//默认未点击圆点
setInterval("roundPicture()",2500);//设置定时器，没2500毫秒执行一次roundPicture()


//轮播方法
function roundPicture(){
    if(!rotateClick){//未点击时才自动轮播
        round=round+1;//轮播次数加1
        index=index+1;//圆点下标加1
        if(round==rotatePanels.length){//当轮播到最后一张图片时重置轮播次数，可使well左偏移量为0
            round=0;
            well.style.transition='none';//取消轮播动画
        }else{//非最后一张图片时开启轮播动画
            well.style.transitionProperty='left'; 
            well.style.transitionDuration='0.5s'; 
            well.style.transitionTimingFuciton='ease-in';
            well.style.transitionDelay='0s'; 

        }
        var multiple=-round*520;//根据轮播次数设置well的左偏移量
        well.style.left=''+multiple+'px';
        if(round==0 || round==rotatePanels.length-1){//当轮播图片为第一张图和最后一张图时，设置圆点下标为0
            index=0;
        }
        showRotateButtonLi(index);//设置下标为index的圆点背景颜色
    }
}

//设置下标为index的圆点背景颜色
function showRotateButtonLi(n){
    for(var i=0;i<rotateButtonLis.length;i++){
        rotateButtonLis[i].style.background='none';
    }
    rotateButtonLis[n].style.background='#F40';

}

//点击圆点
function transRotateButton(obj){
    rotateClick=true;//表示当前为点击状态，自动轮播将会停止
    var dataIndex=obj.getAttribute('data-index');//获取元素的data-index属性
    var multiple = -dataIndex*520;//根据点击圆点的下标，设置well向左的偏移量
    showRotateButtonLi(dataIndex);//设置下标为index的圆点背景颜色
    well.style.left=''+multiple+'px';//设置well向左偏移
    setTimeout(function(){//3秒钟无点击开启自动轮播
        rotateClick=false;
    },3000)
    index=parseInt(dataIndex);
    round=parseInt(dataIndex);
}


