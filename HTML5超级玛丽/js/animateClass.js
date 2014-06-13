// JavaScript Document
var Animate={};
Animate.css=function(ele,attr,value){
	if(arguments.length===3){//参数是3个就是给设置css属性
		switch(attr){
			case 'float':
				if('cssFloat' in ele.style){
					ele.style['cssFloat']=value;	
				}else if('styleFloat' in ele.style){
					ele.style['styleFloat']=value;
				}
				break;
			case 'opacity':
				if(value>1){
					value=value/100;
				}
				if('opacity' in ele.style){
					ele.style['opacity']=value;
				}else if('filter' in ele.style){
					ele.style['filter']='alpha(opacity:'+value*100+')';
				}
				break;
			case 'paddingLeft':
			case 'paddingRight':
			case 'paddingTop':
			case 'paddingBottom':
			case 'marginLeft':
			case 'marginRight':
			case 'marginTop':
			case 'marginBottm':
			case 'top':
			case 'bottom':
			case 'left':
			case 'right':
			case 'width':
			case 'height':
				ele.style[attr]=parseInt(value)+"px";
				break;
			default:
				alert("不是一个可转换成数字的参数");		
		}	
	}else if(arguments.length===2){//参数是2个就是给获取css属性
		switch(attr){
			case 'opacity':
				return parseFloat(ele.currentStyle?ele.currentStyle[attr]:document.defaultView.getComputedStyle(ele,false)[attr])*100;
				break;
			case 'paddingLeft':
			case 'paddingRight':
			case 'paddingTop':
			case 'paddingBottom':
			case 'marginLeft':
			case 'marginRight':
			case 'marginTop':
			case 'marginBottm':
			case 'top':
			case 'bottom':
			case 'left':
			case 'right':
			case 'width':
			case 'height':
				return parseInt(ele.currentStyle?ele.currentStyle[attr]:document.defaultView.getComputedStyle(ele,false)[attr]);
				break;
			default:
				return ele.currentStyle?ele.currentStyle[attr]:document.defaultView.getComputedStyle(ele,false)[attr];		
		}	
	}
	
}//配合动画使用的设置和获取css的属性的方法

Animate.mMove=function(ele,object){
	window.clearTimeout(ele.timer);
	var bStop=false;//用来设置初始值
	for(var key in object){//遍历对象属性
		var oCurrent=Animate.css(ele,key);//获取当前属性的偏移量
		if(key=="opacity"){//判断是否是不透明的属性
			if(object[key]<=1){//如果不透明的值是小于1的数则把值乘上100
				var nSpeed=(object[key]*100-oCurrent)/16;
			}else{
				var nSpeed=(object[key]-oCurrent)/16;	
			}
			if(Math.abs(nSpeed)<=0.2){nSpeed=0;}//因为opacity设为0的时候nSpeed永远不会为0（暂没有更好的方法）
		}else{
			var nSpeed=(parseFloat(object[key])-oCurrent)/16;
			//减速运动(parseFloat(object[key]))==目标值
		}
		nSpeed=nSpeed>0?Math.ceil(nSpeed):Math.floor(nSpeed);//nSpeed最终的值是0
		if(nSpeed!=0){//判断是否全部的属性值为0
			bStop=true;
			Animate.css(ele,key,oCurrent+nSpeed);//设置css属性
    	}
	}
	ele.timer=window.setTimeout(function(){Animate.mMove(ele,object)},25);
	if(bStop===false){
		window.clearTimeout(ele.timer);
		for(var k in object){
			Animate.css(ele,k,object[k]);
		}//强制执行（暂没有找到更好方法）
		return;
	}
}//减速方法

