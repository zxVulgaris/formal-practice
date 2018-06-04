$(function(){
	$('#head_nav a').eq(1).css('font-weight','bold');	
	$('#head_nav a').css({'color':'#e1d4cc','text-decoration':'none'});
	var arr=['home.html','record.html','favorite.html','about.html'];
	/*alert(arr.eq(2).html());//错误的的示范arr[2].html()
	*/	
	for(var i=0;i<arr.length;i++){
		$('#head_nav a').eq(i).attr('href',arr[i]);
	}	

	//锚点部分字体颜色的变化(id为catalog的盒子部分)
	//当用移除和添加类active的方法时会出现错误
	var arr1=$('#catalog li a');
	var text=$('.left p');
	$('#catalog li a').first().css('color','white');
	$('#catalog li a').click(function(){
		$(this).css('color','white');
		$(this).parent('li').siblings().children('a').css('color','#e1d4cc');
		var t1=$(this).index('#catalog li a');
		console.log(t1)
		text.eq(t1).slideDown('slow');
		text.eq(t1).parent().siblings().children('p').slideUp('slow');
	 });


	//手风琴部分
	
	for(i=1;i<text.length;i++){
		text.eq(i).css('display','none');
		// $('.left h1').removeClass(h1);
		// 同样出现错误了
	}
	$('.left h1').click(function(){
		var t=$(this).index('.left h1');//获取索引
		$(this).siblings().slideToggle('slow');
		$(this).parent().siblings().children('p').hide('slow');
		arr1.eq(t).css('color','white');
		arr1.eq(t).parent('li').siblings().children('a').css('color','#e1d4cc');

	});

})