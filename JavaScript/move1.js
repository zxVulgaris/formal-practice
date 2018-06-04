function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
};
function startMove(obj,json,fnct){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
			var cur=0;
			
			if(attr==='opacity'){
				cur=getStyle(obj,attr)*100;
			}
			else{
				cur=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!=json[attr]){
				bStop=false;
			}
			if(attr=='opacity')
			{
				cur+=speed;
				obj.style.opacity=cur/100;
				obj.style.filter='alpha(opacity:'+cur+')'
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
		//for循环终止后再判断bStop的值
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnct)fnct();
		}
	},30);	
};
// JavaScript Document// JavaScript Document