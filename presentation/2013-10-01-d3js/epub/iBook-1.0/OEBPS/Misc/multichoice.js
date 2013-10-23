	function reset() {
		//location.reload();
		iniMulti();
		$('ol li').css('color', 'black');
		$('ul li').css('color', 'black');

		$('button.checkAns').removeAttr("disabled");
	}
	function iniMulti()
	{
		$('div.question').each(function(){
		var question = $(this).attr('object');
		$('li.' + question ).shuffle();			
	});
	
	}
function checkAns()
{
	var nQuestion = 0;
	var nTrue = 0;
	$('div.question').each(function(){
		nQuestion = nQuestion + 1 ;
		var question = $(this).attr('object');
		var findTrue = false;
		$('li.' + question).each(function(){
			var ele = $(this);
			$(this).find("input").each(function(){
				if($(this).val()=="1")
				{
					if(ele.css('color') == 'rgb(0, 0, 255)')
					{
						//ele.css("background-color","yellow");
						//var html = '<img src="image/approve_16.png" class="approve"></img>';
						//ele.append(html);
						ele.css("color","green");
						nTrue++;
					}
					else ele.css("color","red");					
					
					findTrue = true;
				}
			});
		});
		if(findTrue == false)
		{
			$('li.' + question + "two").each(function(){
			var ele = $(this);
			$(this).find("input").each(function(){
				if($(this).val()=="1")
				{
					if(ele.css('color') == 'rgb(0, 0, 255)')
					{
						//ele.css("background-color","yellow");
						//var html = '<img src="image/approve_16.png" class="approve"></img>';
						//ele.append(html);
						ele.css("color","green");
						nTrue++;
					}
					else ele.css("color","red");
					
				}
			});
		});
		}
	});
	alert("Your score is " + nTrue + "/" + nQuestion );
	$('button.checkAns').attr("disabled","disabled");
}
function choiceAns(ele,ques,multi, twoAns)
{
	if(twoAns)
	{
		$('.'+ques + "two").css("color","black");
	}
	if(!multi)
	{
		$('.'+ques).css("color","black");
		
		ele.css("color","blue");
	}
	else{	
				
		if(ele.css('color') == 'rgb(0, 0, 255)')
		{			
			ele.css("color","black");
		}
		else ele.css("color","blue");
	}
	
	
	
}