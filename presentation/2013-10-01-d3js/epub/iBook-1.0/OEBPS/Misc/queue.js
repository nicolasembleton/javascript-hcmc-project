	var svgQueue, width_queue, height_queue, top_queue, max_queue;
	var svg_w_queue, svg_h_queue;
	function Queue()
	{
		this.init;
		this.Draw;
		this.EnQueue;
		this.DeQueue;
		
	}
	Queue.prototype.init = function (svg_w_queue1, svg_h_queue1, width_q,height_q,top_q, item)
	{	
		svgQueue = d3.selectAll("div#queue")
						.append("svg")
						.attr("id","queue")
						.attr("width", svg_w_queue1)
						.attr("height", svg_h_queue1);
						svg_w_queue = svg_w_queue1;
						svg_h_queue = svg_h_queue1;
		width_queue = width_q;
		height_queue = height_q;
		top_queue = top_q;
		max_queue = item;
	}
	
	Queue.prototype.Draw = function ()
	{
		drawLine(svgQueue,60,top_queue ,340, top_queue , "red", "");
		drawLine(svgQueue,60,120 + top_queue + 5,340, 120 + top_queue + 5, "red", "");
		drawText(svgQueue,"front",70,top_queue - 5  ,"blue", 19,"front");
		drawText(svgQueue,"rear",360,top_queue  - 5 ,"blue", 19,"rear");		
	}
	
	Queue.prototype.EnQueue = function (value)
	{
				
		if(value != "")
		{			
			var Size_Data = dataset.length + 1;
			if(Size_Data > max_queue)
			{
				svgQueue.append("text")
				   .text("Overflow")
				   .attr("text-anchor", "middle")
				   .attr("x", 120)
				   .attr("y",top_queue- 60 + 95 )				   
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "15px")
				   .attr("fill", "black");
			}
			else{					
					var size = Size_Data + 1;
					id_queue = id_queue + 1;
					data_enqueue.push(id_queue);
					var rect = svgQueue.append("rect")
								   .attr("x", 380 )
								   .attr("y", top_queue + 5)
								   .attr("width", 40 )
								   .attr("height", 115 )
								   .attr("id", "n" + id_queue)
								   .attr("stroke", "blue")
								   .attr("fill", "#00FFFF");
					var text = svgQueue.append("text")
									   .text(value)
									   .attr("text-anchor", "middle")
									   .attr("x", 395)
									   .attr("y",top_queue + 70)
									   .attr("id", "n" + id_queue)
									   .attr("font-family", "sans-serif")
									   .attr("font-size", "12px")
									   .attr("fill", "black");					
					
					rect
					  .transition()
					  .attr("x",320 + 50 - (60*(7-size))).duration(2000) 
					  .delay(500)   ;
					text
					  .transition()
					  .attr("x",345 + 40 - (60*(7-size))).duration(2000) 
					  .delay(500)   ;					  
					var rear = svgQueue.selectAll("text#rear");									
						
					setTimeout(function() {
						rear
						  .transition()
						  .attr("x",335 + 50 + 40 - (60*(7-size))).duration(2000) 
						  .delay(500);	
					}, 2000);  
						
					
					setTimeout(function() {	
						LinkedList.prototype.insertLast(value,"front","rear");
						setTimeout(function() {		
								d3.selectAll("svg#list").remove();       
								this.svgList = d3.selectAll("div#list")
											.append("svg")				
											.attr("id","list")
											.attr("width", width_list)
											.attr("height", height_list);			
								lst.drawList("front","rear");
								this.queue.ReDraw(top_queue,svgQueue);
						}, 3000); 
					},3000);				
			}
			   
		}
	}
	
	
	Queue.prototype.DeQueue = function ()
	{		
		var size = dataset.length;			
		if(size != 0)
		{		
			var rect = svgQueue.selectAll("rect#n"+ 1);
			var text = svgQueue.selectAll("text#n" + 1);
					rect
					  .transition()
					  .attr("x",-100).duration(2000) 
					  .delay(500)   ;
					text
					  .transition()
					  .attr("x",-100).duration(2000) 
					  .delay(500)   ;
					
					svgList.selectAll("rect")
						   .data(dataset)
						   .enter()
						   .append("rect")
						   .attr("x", function(d, i) {
								return (i+1) *130 ;
						   })
						   .attr("y", function(d) {
								return (70+ height);
						   })
						   .attr("width", 50)
						   .attr("height", function(d) {
								return 50;
						   })
						   .attr("id", function(d, i) {
								
								return ("n" + (i+1)) ;
						   })
						   .attr("fill", "blue")
						   .attr("stroke", "white");
					 
					setTimeout(function() {							
						LinkedList.prototype.del(1,"front","rear");
												
						
						setTimeout(function() {	
								this.queue.ReDraw(top_queue,svgQueue);
								d3.selectAll("svg#list").remove();       
								this.svgList = d3.selectAll("div#list")
											.append("svg")				
											.attr("id","list")
											.attr("width", width_list)
											.attr("height", height_list);			
								lst.drawList("front","rear");								
						}, 5000); 
					},3000);
		}
		else{
			drawText(svgQueue,"Underflow",140,top_queue - 60 + 95,"black",15,"");			
		} 
	}
	
	Queue.prototype.ReDraw = function (height,svg)
	{
		d3.selectAll("svg#queue").remove();       
		svg =  d3.selectAll("div#queue")
						.append("svg")				
						.attr("id","queue")
						.attr("width", svg_w_queue)
						.attr("height", svg_h_queue);

		drawLine(svg,60,top_queue ,340, top_queue , "red", "");
		drawLine(svg,60,120 + top_queue + 5,340, 120 + top_queue + 5, "red", "");
		drawText(svg,"front",70,top_queue - 5  ,"blue", 19,"front");
		
		var allQueues = dataset.length;		
		if(dataset.length <= 0)allQueues = 1;
		
		drawText(svg,"rear",335 + 50 + 40 - (60*(6-allQueues)),top_queue - 5   ,"blue", 19,"rear");
		svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			    .attr("stroke", "blue")
				.attr("fill", "#00FFFF")
			   .attr("x", function(d, i) {
					return (70 + 60*(i));
			   })
			   .attr("y", function(d) {
					return (top_queue + 5);
			   })
			   .attr("width", 40)
			   .attr("height", 115)
			   .attr("id", function(d, i) {					
					return ("n" + (i+1)) ;
			   })
			   .attr("fill", "#00FFFF")
			   .attr("stroke", "blue");
			for(var j = 0 ; j < dataset.length; j++)
			{
				drawText(svg,dataset[j],85 + 60*(j), top_queue + 70,"black", 12,"n" + (j+1));					
			}	
		
			svgQueue = svg;	
			
	}
	
	
	
	