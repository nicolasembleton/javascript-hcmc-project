var stack_width, stack_height, left, padding_top, item_stack, svg_width, svg_height;
var svgStack;
	function Stack()
	{	
		this.init;
		this.Draw;
		this.Push;
		this.Pop;
		this.ReDraw;
		
	}
	
	Stack.prototype.init = function (svg_w, svg_h, stk_w, stk_h,l,h2, item)
	{
			stack_width = stk_w;
			stack_height = stk_h;
			left = l;
			svg_width = svg_w;
			svg_height = svg_h;
			padding_top = h2;
			item_stack = item;
			
			svgStack = d3.selectAll("div#stack")
				.append("svg")
				.attr("id","stack")
				.attr("width", svg_width)
				.attr("height", svg_height);
				
	}
	
	Stack.prototype.Draw = function ()
	{
		drawLine(svgStack,left,padding_top,left, stack_height , "red", "");
		drawLine(svgStack,left,stack_height,left + stack_width, stack_height, "red", "");
		drawLine(svgStack,left + stack_width,padding_top,left + stack_width, stack_height , "red", "");
		
	}
	Stack.prototype.Push = function (callback,value)
	{
				
		if(value != "")
		{			
			if(dataset.length >= item_stack)
			{
				drawText(svgStack,"Overflow",110,30,"black",15,"overflow");
				
			}
			else{
					d3.selectAll("text#underflow").remove();	
					var size = dataset.length + 1;
					var rect = svgStack.append("rect")
								   .attr("x", left + 3)
								   .attr("y", padding_top - 70 )
								   .attr("width", 114 )
								   .attr("height", 30)
								   .attr("id", "n" + size)
								   .attr("stroke", "blue")
								   .attr("fill", "#00FFFF");
					var text = svgStack.append("text")
									   .text(value)
									   .attr("text-anchor", "middle")
									   .attr("x", left + stack_width/2)
									   .attr("y",padding_top - 50)
									   .attr("id", "n" + size)
									   .attr("font-family", "sans-serif")
									   .attr("font-size", "15px")
									   .attr("fill", "black");
					
					
					rect
					  .transition()
					  .attr("y",280  - (35*(size-1))).duration(2000) 
					  .delay(500)   ;
					text
					  .transition()
					  .attr("y",300  - (35*(size-1))).duration(2000) 
					  .delay(500)   ;
					if(size != 1)
					{				
						var top = svgStack.selectAll("text#top");
						top
						  .transition()
						  .attr("y",300  - (35*(size-1))).duration(2000) 
						  .delay(500);	
						
					}
					else{
						setTimeout(function() {
							drawText(svgStack,"TOP",left - 25 , 300  - (35*(size-1)) ,"blue",18,"top");							
						}, 2500);  	
					}	
				/*setTimeout(function() {	
					LinkedList.prototype.insertFirst(value,"top");
					setTimeout(function() {		
							stack.ReDraw(svgList);		
							
					}, 3000); 
				},3000);*/
				
				callback();
			}		
			   
		}
	}
	
	
	
	Stack.prototype.Pop = function(top,callback)
	{
		var size = dataset.length;
		//d3.selectAll("text#overflow").remove();		
		if(size != 0)
		{	
			d3.selectAll("text#overflow").remove();	
			var rect = svgStack.selectAll("rect#n"+size);
			var text = svgStack.selectAll("text#n"+size);	
			
			rect
			  .transition()
			  .attr("y",- 40 - (280 +  padding_top - (35*(size-1)))).duration(2000) // this is 1s
			  .delay(500);
			text
			  .transition()
			  .attr("y",- 40 - (280 +  padding_top - (35*(size-1)))).duration(2000) // this is 1s
			  .delay(500);
			
			if(size != 1)
			{
				svgStack.selectAll("text#top")
						  .transition()
						  .attr("y",300 - (35*(size - 2))).duration(2000) 
						  .delay(1000);	
			}
			callback(); 
		}
		else{
			//drawText(svgStack,"Underflow",180,padding_top - 70,"black",15,"underflow");
			drawText(svgStack,"Underflow",110,30,"black",15,"overflow");
			
		}
		
	}
	
	Stack.prototype.ReDraw = function(svg)
	{
		d3.selectAll("svg#list").remove();       
		svg = d3.selectAll("div#list")
						.append("svg")
						
						.attr("id","list")
						.attr("width", width_list)
						.attr("height", height_list);
						//lst.init(800,500, 500,25, 190, 5);
		svgList = svg;						
		lst.drawList("top");
			
	}
			
			
   