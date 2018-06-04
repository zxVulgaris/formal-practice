$(function(){
	$('#head_nav a').eq(3).css('font-weight','bold');	
	$('#head_nav a').css({'color':'#e1d4cc','text-decoration':'none'});
	var arr=['home.html','record.html','favorite.html','about.html'];
	/*alert(arr.eq(2).html());//错误的的示范arr[2].html()
	*/	
	for(var i=0;i<arr.length;i++){
		$('#head_nav a').eq(i).attr('href',arr[i]);
	}

	//基本信息的小动画哈哈哈
	$('.move').hover(function(){
		$(this).css({'color': 'white','background':'#3b3b3b'})
	},function(){
		$(this).css({'color': '#e1d4cc',})
	});

	/*$('#brief').click(function(){
		$('.move').first().animate({
			
			'position': 'absolute',	
			'left': '500px',		
		},function(){
			$('.about-text').animate({
				'height': '130px',
			})
		});
		$('.about-text').first().slideToggle('slow');
	});*/

	$('#brief').click(function(){
		$('.about-text:first').toggle(function(){
			$(this).animate({
				'width': '200px',
				'position': 'absolute',
				'top': '900px',//实现不了盒子的运动
				'height': '130px',
			})
		},function(){
			$(this).animate({
				
			})
		})
	});

//点击p标签即回复到原来的样子
//problem是当点击我的爱好的时候其他的盒子也会执行动画！！！！
	$('#hobby').click(function(){		
		$('.move').eq(1).animate({
			'width': '400px',			
		},function(){
			$('.about-text').animate({
				'height': 'auto',
			})
		});
		$('.about-text').eq(1).slideToggle('slow');
	});

	$('#dream').click(function(){
		$(this).animate({
			'width': '400px',
			
		},function(){
			$(this).animate({'height': 'auto',});
			$('.about-text').eq(2).show('slow');
		});
		
	});

	$('#will').click(function(){
		$(this).animate({
			'width': '380px',
			
		},function(){
			$(this).animate({'height': 'auto',})
			$('.about-text').eq(3).show('slow');
		});
		
	});	

	 // a few questions
	//想设置一个让爱心图片随机出现的jq，
	//以及如果给三张爱心图片分开定位就没法同时出现三张爱心图片
	//对四个按钮盒子没法实现向右执行动画，定位得好麻烦，但是又不能再jq里面实现
		
})