var left, padding_top, svg_width, svg_height;
var svgInsert;
	function InsertSort()
	{	
		this.init;
		this.Draw;
		this.InputValue;
		this.Sort;
		this.Run;
		this.RunNext;		
	}
	
	InsertSort.prototype.init = function (svg_w, svg_h, l,h2)
	{
			
			left = l;
			svg_width = svg_w;
			svg_height = svg_h;
			padding_top = h2;
			
			svgInsert = d3.selectAll("div#insert")
				.append("svg")
				.attr("id","insert")				
				.attr("width", svg_width)
				.attr("height", svg_height);
		
				
	}
	
	
	InsertSort.prototype.Draw = function ()
	{
		drawRect(svgInsert,left + 5,100,50,50,"gray ","rect" + 0);
		drawRect(svgInsert,left + 65,100,50,50,"gray","rect" +1);
		drawRect(svgInsert,left + 125,100,50,50,"gray","rect" +2);
		drawRect(svgInsert,left + 185,100,50,50,"gray","rect" +3);
		drawRect(svgInsert,left + 245,100,50,50,"gray","rect" +4);
		drawRect(svgInsert,left + 305,100,50,50,"gray","rect" +5);
		drawRect(svgInsert,left + 365,100,50,50,"gray","rect" +6);
		
		
	}
	InsertSort.prototype.IncreaseCount = function ()
	{
		count++;
	}
	
	InsertSort.prototype.Code = function (time)
	{
		 
			if(current < count)
			{
				var temp = dataset[current];
				setTimeout(function() {					
					$('span#code4').css("color","red");											
				}, time +  3500);
				setTimeout(function() {
					$('tr').removeClass("note");
					$('tr.temp').addClass("note");
					$('td#temp').text(temp);
					d3.selectAll("rect#rect"+current).attr("stroke", "red");
										
				}, time + 6000);
				walker = current - 1;
				setTimeout(function() {				
					
					$('span#code5').css("color","red");	
									
				}, time + 8000);
				setTimeout(function() {				
					$('td#walker').text(walker);
					$('tr').removeClass("note");
					$('tr.walker').addClass("note");				
				}, time + 9500);
				
				setTimeout(function() {
					//$('td#key_walker').text(dataset[walker]);	
				}, time + 10500);
				
				setTimeout(function() {					
					$('span#code6').css("color","red");	
					$('span#code7').css("color","red");
					//$('td#key_walker').text(dataset[walker]);					
				}, time + 12000);
			setTimeout(function() {	
					
					var time = 0; 
					var intervalID = setInterval(function(){
						if (walker >= 0 && parseInt(temp) < parseInt(dataset[walker])){
							setTimeout(function() {		
					
								$('span#code8').css("color","red");
								dataset[(walker + 1)] = dataset[walker];								
								
								d3.selectAll("text#text" + (walker + 1) ).remove();
							
								drawText(svgInsert,dataset[walker],left + 60*(walker + 1)  + 30,130,"white", 17,"text" + (walker + 1) );
								//$('td#key_walker2').text(dataset[(walker + 1)]);
							}, 1000);
							setTimeout(function() {		
								
								$('span#code9').css("color","red");	
													
							}, 2500);
							setTimeout(function() {		
								walker = walker - 1;								
								$('td#walker').text(walker);
								$('tr').removeClass("note");
								$('tr.walker').addClass("note");								
							}, 3500);
							
							setTimeout(function() {		
								
								$('span#code8').css("color","black");	
								$('span#code9').css("color","black");					
							}, 4500);
						} else {
							
							setTimeout(function() {		
									
									$('span#code10').css("color","red");
																	
									$('td#walker').text(walker);
									$('tr').removeClass("note");
									$('tr.walker').addClass("note");
									
							}, 1000);
							setTimeout(function() {	
									dataset[(walker+1)] = temp;	
									//$('td#key_walker2').text(temp);
									d3.selectAll("text#text" + (walker + 1) ).remove();
							
									drawText(svgInsert,temp,left + 60*(walker + 1)  + 30,130,"white", 17,"text" + (walker + 1) );
									
							}, 2000);
							setTimeout(function() {	
									current++;
									
									$('span#code11').css("color","red");	
									$('td#current').text(current);
									$('tr').removeClass("note");
									$('tr.current').addClass("note");
									
									
									
							}, 4000);
							setTimeout(function() {	
									d3.selectAll("text#index_current" )
														.transition()
														.attr("x",left + 60*(current) + 30).duration(1000) 
														.delay(150);
									
									d3.selectAll("rect#rect"+(current-1)).attr("fill", "#003366").attr("stroke", "");
									$('input#run').show();
							}, 5000);	
							
							clearInterval(intervalID);
						}
					}, 4500);
				}, time + 12500);			

			}
			else{
				setTimeout(function() {
					$('span#code12').css("color","red");
					$('input#run').show();
				}, 1000);
			}
	}
	InsertSort.prototype.Sort = function ()
	{
		$('input#run').hide();
		
		var walker  = 0;
		
		$('span#code0').css("color","red");
		$('span#code1').css("color","red");
					
					
		if(count>1)
		{
			if(current <= 1)
			{
				setTimeout(function() {
					$('span#code12').css("color","black");
					$('span#code2').css("color","red");
					
				}, 500);
				
				setTimeout(function() {
					
					$('td#current').text(1);
					$('tr').removeClass("note");
					$('tr.current').addClass("note");
				}, 1000);
				setTimeout(function() {
					drawText(svgInsert,"current",left + 60*(current) + 30,80,"blue", 15 ,"index_current");
					for(var i = 0; i< current;i++)
					{
							d3.selectAll("rect#rect"+i).attr("fill", "#003366");	
					}
					$('span#code3').css("color","red");	
					
				}, 2000);
				InsertSort.prototype.Code(0);
			}
			else{
				setTimeout(function() {	
					$('span').css("color","black");
					for(var i = 0; i<=3; i++)
					{
						$('span#code'+ i).css("color","red");
					}
				}, 1000);
				InsertSort.prototype.Code( 0 - 2000);
			}
			
			
			
			
			
						
		}
		else{
			setTimeout(function() {
				$('span#code12').css("color","red");
				$('input#run').show();
			}, 500);
			
		}
	}
	InsertSort.prototype.InputValue = function (value,index)
	{
		drawText(svgInsert,value,left + 60*(index - 1) + 30,130,"white", 17,"text" + (index -1));
		
		drawText(svgInsert,index - 1,left + 60*(index - 1) + 30,180,"black", 17,index -1 );
		d3.selectAll("text#index_current").remove();
		for(var i = 0; i< current;i++)
		{
				d3.selectAll("rect#rect"+i).attr("fill", "gray");	
		}
		current = 1;
	}
//var x=document.getElementById("demo")
//x.innerHTML=Math.floor((Math.random()*100)+1);	
	