$(function(){
	$('#head_nav a').eq(2).css('font-weight','bold');	
	$('#head_nav a').css({'color':'#e1d4cc','text-decoration':'none'});
	var arr=['home.html','record.html','favorite.html','about.html'];
	/*alert(arr.eq(2).html());//错误的的示范arr[2].html()
	*/	
	for(var i=0;i<arr.length;i++){
		$('#head_nav a').eq(i).attr('href',arr[i]);
	}

		
})
	//无法用jq实现的图片轮播
	/*var index=0, time=null;
	var imgs=$('#autoplay img');
	var	list=$('#fav-main ol li');
	//imgs.eq(0).css('display','none');
	//定义自动轮播
	time=setInterval(autoPlay,1000);

	function autoPlay(){
		index++;
		if(index>=imgs.length) 
			{index=0;}
		changePic(index);
	}

	function changePic(curIndex){
		for(var i=0;i<imgs.length;i++){
			imgs.eq(i).css('display','none');
			list.eq(i).removeClass('on');

		}
		imgs.eq(curIndex).css('display','inline-block');
		list.eq(curIndex).addClass('on');
	}*/
	