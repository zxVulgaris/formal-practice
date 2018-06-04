//包含opacity的通用模型
function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	};
	function startMove(obj,attr,target,fuct){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			if(attr=='opacity'){
				var cur=getStyle(obj,attr)*100;
				//获取的是对象的opacity的值而不是target的值，target的值是指alpha
			}
			else{
				cur=parseInt(getStyle(obj,attr));
			}
			var speed=(target-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur==target){
				clearInterval(obj.timer);
				if(fuct) fuct();
			}
			else{
				if(attr=='opacity'){
					cur+=speed;
					obj.style.opacity=cur/100;
					obj.style.filter='alpha(opacity:'+cur+')'
				}
				else{
					obj.style[attr]=cur+speed+'px';
				}
			}
		},30);
	};
// JavaScript Document