$(function(){
	$('#head_nav a').first().css('font-weight','bold');	
	$('#head_nav a').css({'color':'#e1d4cc','text-decoration':'none'});
	var arr=['home.html','record.html','favorite.html','about.html'];
	/*alert(arr.eq(2).html());//错误的的示范arr[2].html()
	*/	
	for(var i=0;i<arr.length;i++){
		$('#head_nav a').eq(i).attr('href',arr[i]);
	}	

})
//window.onload=function startTime(){}实现不了
//不知道属于不属于window.onload=function(){}的错误
window.onload=startTime;
function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m=check(m);
	s=check(s);
	document.getElementById('cal-time').innerHTML="<span>"+h+"</span>"+':'+"<span>"+m+"</span>"+':'+"<span>"+s+"</span>";
	t=setInterval('startTime()',500);	
	}
function check(i){
		if(i<10){i='0'+i;}
		return i;
	}