var width_list, height_list, height, padding_x, padding_y, max_item,size_node,color_node,color_tail,color_tail_list;
var svgList,color_text,color_border,color_line,color_new_node;

	
function LinkedList()
{	
	this.init;
	this.drawList;
	this.ReDraw;
	this.insertFirst;
	this.textInsertHead;
	this.insertHead;
	this.textInsertPos;
	this.insertLast;
	this.insertPosition;
	this.del;
	this.textDelPos;
	this.textDelHead;
}

	LinkedList.prototype.init = function (w1, h2, height1, padding_x1, padding_y1, item, size_node1)
	{
		width_list = w1;
		height_list = h2;
		height = height1;
		padding_x = padding_x1;
		padding_y = padding_y1;
		max_item = item;
		size_node = size_node1;
		
		svgList = d3.select("div#list")
				.append("svg")
				.attr("id","list")
				.attr("class","span12")
				.attr("width", width_list)
				.attr("height", height_list);
				
	}
	LinkedList.prototype.initColor = function (color_node1,color_tail1,color_tail_list1,color_text1,
	color_border1,color_new_node1,color_line1)
	{
		color_node = color_node1;
		color_tail = color_tail1;
		color_tail_list = color_tail_list1;
		color_text = color_text1;
		color_border = color_border1;
		color_line = color_line1;
		color_new_node = color_new_node1;
	}
				
	
	LinkedList.prototype.textDelHead = function (head)
	{
		svgList.append("text")
				   .text(head + " = pDel->next;")
				   .attr("text-anchor", "middle")
				   .attr("x", padding_x + 90)
				   .attr("y", 50)
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "17px")
				   .attr("fill", "black");
		svgList.append("text")
				   .text("Recycle pDel;")
				   .attr("text-anchor", "middle")
				   .attr("x", padding_x + 70)
				   .attr("y", 80)
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "17px")
				   .attr("fill", "black");
	}
	
LinkedList.prototype.insertHead = function (value)
{
	//LinkedList.prototype.textInsertHead("head");
	//dataset.unshift(value);	
	// draw new node
	drawRect(svgList,0.7*size_node + padding_x ,160+ height,size_node,size_node,color_new_node,color_border,"");
	drawRect(svgList,1.7*size_node + padding_x,160+ height,size_node/2,size_node,color_tail,color_border,"");
	drawText(svgList,value,0.7*size_node + padding_x  + size_node/2,190 + height,color_text, 15,"");	
	// draw line to append
	setTimeout(function() {
		drawLine(svgList,2*size_node + padding_x ,160+ height,2.5*size_node + padding_x,110+ height,"red","");			
	}, 750); 
	setTimeout(function() {
		drawLine(svgList,padding_x + 0.5*size_node,110+ height,1.4*size_node + padding_x,160+ height,"red","");					
	}, 1500);
	
	setTimeout(function() {
	//	LinkedList.prototype.ReDraw("head");				
	}, 3000);
	
}

	LinkedList.prototype.textInsertHead = function (head)
	{
		drawText(svgList,"pNew->next = " + head+ ";",90,60,"black", 17,"");
		drawText(svgList,head + "= pNew;",60,90,"black", 17,"");		
	
	}
	LinkedList.prototype.textInsertPos = function()
	{	
		drawText(svgList,"pNew->next = pPre->next;",100,60,"black", 17,"");
		drawText(svgList,"pPre->next = pNew;",80,90,"black", 17,"");
	
	}
	LinkedList.prototype.drawList = function (head,rear_queue)
	{
		
		//draw head empty
		if(dataset.length == 0)
		{	
			
			drawRectHead(svgList,padding_x,70 + height,size_node,size_node,color_tail_list,color_border,"");   
			drawText(svgList,head,padding_x + (size_node/2),70 + height + (size_node/2),color_text, 12,"");
			if(rear_queue == "rear")
			{ 
				drawRectHead(svgList,padding_x,70 + height + size_node*2.5,size_node,size_node,color_tail_list,color_border,"");   
				drawText(svgList,rear_queue,padding_x + (size_node/2) ,70 + height + 3*size_node,color_text, 12,"rear");
			}
		}
		else{	
			// draw list
			svgList.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
					return i*(2.5)*size_node + (padding_x + size_node*2) ;
			   })
			   .attr("y", function(d) {
					return (70+ height);
			   })
			   .attr("width", size_node)
			   .attr("height", function(d) {
					return size_node;
			   })
			   .attr("id", function(d, i) {
					
					return ("n" + (i+1)) ;
			   })
			   .attr("stroke", color_border)
			   .attr("stroke-width",2)
			   .attr("fill", color_node);
			   //.attr("stroke", color_text);
				
			//draw tails , line	
			for(var i = 0; i< dataset.length; i++)
			{
				
				
				if(i == (dataset.length -1 ) || i == (max_item - 1) )
				{
			//	 last tail
					drawRect(svgList,(i+1)*2.5*size_node + (padding_x + size_node/2),70+ height,
					size_node/2,size_node,color_tail_list,color_border,"tail");					
				}
				
				else{
				// link of node
						drawRect(svgList,(i+1)*2.5*size_node + (padding_x + size_node/2),
							70+ height,
							size_node/2,size_node,color_tail,color_border,"t" + (i+1)); 
							
						drawLine(svgList,(i+1)*(size_node*2.5) + (size_node + padding_x), 95 + height,
										(i+1)*(size_node*2.5) + (size_node + padding_x) + size_node,95+ height,"black","l" + (i+1));					
				}
				
			}
			svgList.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
					return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
					return i*(2.5*size_node) + (2.5*size_node + padding_x) ;
			   })
			   .attr("y", function(d) {
					return (100+ height);
			   })
			   .attr("id", function(d, i) {
					return ("n" + (i+1));
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "12px")
			   .attr("fill", color_text);
				
			// draw head for list
			drawRectHead(svgList,padding_x,70+ height,size_node,size_node,color_node,color_border,"head");
			drawLine(svgList,padding_x + size_node,95+height,padding_x + (size_node*2),95 + height,"black","head");	
			drawText(svgList,head,padding_x + size_node/2,100+ height,color_text, 12,"head");
			
			if(rear_queue == "rear")
			{			
				drawRectHead(svgList,(dataset.length -1 )*(2.5)*size_node + (padding_x + size_node*2),
				70 + height + size_node*2.5,size_node,size_node,color_tail_list,color_border,"");   
				drawText(svgList,rear_queue,(dataset.length -1 )*(2.5*size_node) + (2.5*size_node + padding_x) ,
				70 + height + 3*size_node,color_text, 12,"rear");
				
				
				drawLine(svgList,(dataset.length -1 )*(2.5*size_node) + (2.7*size_node + padding_x),
				70 + height + size_node,
				(dataset.length -1 )*(2.5*size_node) + (2.7*size_node + padding_x),70 + height + size_node*2.5,"black","rear");	
			}
			
			for(var j = 0 ; j < dataset.length; j++)
			{
				drawText(svgList,j+1,j*(2.5*size_node) + (2.5*size_node + padding_x), padding_y - size_node/4,"black", 11,"");			
					
			}			   
		}	
	}
	LinkedList.prototype.ReDraw = function(head,rear_queue)
	{


d3.selectAll("svg#list").remove();       
	svgList = d3.select("div#list")
					.append("svg")
					.attr("id", "list")
					.attr("width", width_list)
					.attr("height", height_list);
		
	LinkedList.prototype.drawList(head,rear_queue);

} 
	LinkedList.prototype.insertFirst = function (value,head)
	{
		if(dataset.length < max_item)
		{
			LinkedList.prototype.textInsertHead(head);
			if(dataset.length == 0 )
			{
				dataset.push(value);
				// draw new node
			var mySquare =  svgList.append("rect")
								   .attr("x", padding_x + size_node*2)
								   .attr("y", (size_node*2.5)+ height + 10)
								   .attr("width", size_node )
								   .attr("height", size_node)
								   .attr("fill", color_new_node);

			var tail = 	svgList.append("rect")
							   .attr("x", padding_x + size_node*3)
							   .attr("y", (size_node*2.5) + height + 10)
							   .attr("width", size_node/2 )
							   .attr("height", size_node)
							   .attr("fill", color_tail);			   
						   
			var textNode = 		svgList.append("text")
						   .text(value)
						   .attr("text-anchor", "middle")
						   .attr("x", padding_x + size_node*2.5)
						   .attr("y", (size_node*3)+ height +10)
						   .attr("font-family", "sans-serif")
						   .attr("font-size", "12px")
						   .attr("fill", color_text);
				// move to add	   
			mySquare
					  .transition()
					  .attr("y",  1.75*size_node + height ).duration(1000) // this is 1s
					  .delay(100)   ;
		  
			textNode
				.transition()
				.attr("y",2.5*size_node + height ).duration(1000) // this is 1s
				.delay(100)   ;
		  
			tail
				.transition()
				.attr("y",1.75*size_node + height).duration(1000) // this is 1s
				.delay(100)   ;
			tail  
				.transition()
				.style("fill",color_tail_list).duration(1000) // this is 1s
				.delay(1500)   ;
			}
			else{
				dataset.unshift(value);					   
				LinkedList.prototype.insertHead(value);
				}
		}
		
			
	}
	
	LinkedList.prototype.insertLast =  function(value,head,rear_queue)
	{
					   
					   
			// draw new node
		if(dataset.length < max_item)
		{
			LinkedList.prototype.textInsertPos();	
			dataset.push(value);
			var last = dataset.length - 1;
			var mySquare =  svgList.append("rect")
							   .attr("x", last*2.5*size_node + (padding_x + (size_node*2)))
							   .attr("y", (size_node*2.5)+ height + 10)
							   .attr("width", size_node )
							   .attr("height", size_node)
							   .attr("fill", color_new_node);

			var tail = 	svgList.append("rect")
						   .attr("x", last*2.5*size_node + (padding_x + (size_node*2)) + size_node)
						   .attr("y", (size_node*2.5)+ height + 10)
						   .attr("width", size_node/2 )
						   .attr("height", size_node)
						   .attr("fill", color_tail);			   
					   
			var textNode = 		svgList.append("text")
					   .text(value)
					   .attr("text-anchor", "middle")
					   .attr("x", last*2.5*size_node + (padding_x + (size_node*2)) + size_node/2)
					   .attr("y", (size_node*2.5)+ height + 10 + size_node/2)
					   .attr("font-family", "sans-serif")
					   .attr("font-size", "12px")
					   .attr("fill", color_text);
			// move to add	   
			mySquare
				  .transition()
				  .attr("y",1.75*size_node + height ).duration(1000) // this is 1s
				  .delay(100)   ;
	  
			textNode
			.transition()
			.attr("y",2.5*size_node + height).duration(1000) // this is 1s
			.delay(100)   ;
	  
			tail
			.transition()
			.attr("y",1.75*size_node + height).duration(1000) // this is 1s
			.delay(100)   ;

			tail  
			.transition()
			.style("fill",color_tail_list).duration(1000) // this is 1s
			.delay(1500)   ;
		}
	 
	}

	
	LinkedList.prototype.textDelPos =  function()
	{
		svgList.append("text")
				   .text("pPre->next = pDel->next;")
				   .attr("text-anchor", "middle")
				   .attr("x", padding_x + 110)
				   .attr("y", padding_y - 100)
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "17px")
				   .attr("fill", "black");
		svgList.append("text")
				   .text("Recycle pDel;")
				   .attr("text-anchor", "middle")
				   .attr("x", padding_x + 70)
				   .attr("y", padding_y - 50)
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "17px")
				   .attr("fill", "black");
	}
	
	LinkedList.prototype.insertPosition =  function(value,p,head)
	{
			var pos = parseInt(p);
			var s = 0;
			d3.selectAll("rect#head" ).attr("stroke", "red");
			var intervalID = setInterval(function(){
						if (s < pos){								
					
								s++;
								d3.selectAll("rect#head" ).attr("stroke", color_border);
								for(var run=1; run< s; run++)
								{
									d3.selectAll("rect#n" + run ).attr("stroke",color_border);
									d3.selectAll("rect#t" + run ).attr("stroke", color_border);
									if(pos == dataset.length){
									}
								}
								d3.selectAll("rect#n" + s ).attr("stroke", "red");
								d3.selectAll("rect#t" + s ).attr("stroke", "red");
							
							
							
						} else {
							
							
							if(p== 1)
				{
					 LinkedList.prototype.insertHead(value);
				}
				else{					
					drawText(svgList,"pNew->next = pPre->next;",100,60,"black", 15,"");
					drawText(svgList,"pPre->next = pNew;",100,90,"black", 15,"");				
				   
					// draw new node
					drawRect(svgList,2.3*size_node*(pos - 1) + (padding_x + size_node*1.2) ,160+ height,size_node,size_node,color_new_node,color_border,"");
					drawRect(svgList,2.3*size_node*(pos - 1) + (padding_x + size_node*1.2) + size_node,160+ height,size_node/2,size_node,color_tail,color_border,"");
					drawText(svgList,value,2.3*size_node*(pos - 1) + (padding_x + size_node*1.2) + size_node/2,185+ height,color_text, 12,"");	   
							   
					
					// draw line to append
					setTimeout(function() {	
						drawLine(svgList,2.5*size_node*(pos - 1) + (padding_x + size_node*2.5) - 0.4*size_node,160+ height,
										2.5*size_node*(pos - 1) + (padding_x + size_node*2.5),110+ height,"red","");			
							
					}, 750); 
					setTimeout(function() {
						drawLine(svgList,2.3*size_node*(pos - 1) + (padding_x + size_node*1.2),110+ height,
											2.3*size_node*(pos - 1) + (padding_x + size_node*1.2) + size_node/2,160+ height,"red","");
					}, 1500);
					
					setTimeout(function() {
						dataset.splice(pos - 1, 0, value);
						LinkedList.prototype.ReDraw(head);
					}, 3000); 
				}	
							
							clearInterval(intervalID);
						}
					}, 700);
					
			
			//////////////////////////////////////////
				
	}
	LinkedList.prototype.del =  function(pos, head)
	{
	
		if(pos != null && pos !=0 && pos <= dataset.length)
			{
			var s = 0;
			d3.selectAll("rect#head" ).attr("stroke", "red");
			var intervalID = setInterval(function(){
						if (s < pos){								
					
								s++;
								d3.selectAll("rect#head" ).attr("stroke", color_border);
								for(var run=1; run< s; run++)
								{
									d3.selectAll("rect#n" + run ).attr("stroke", color_border);
									d3.selectAll("rect#t" + run ).attr("stroke", color_border);
								}
								d3.selectAll("rect#n" + s ).attr("stroke", "red");
								d3.selectAll("rect#t" + s ).attr("stroke", "red");
								if(s == dataset.length) 
								{
									d3.selectAll("rect#tail" ).attr("stroke", "red");
								}
							
							
						} else {
							
							if(pos == dataset.length )
							{
								dataset.pop();
								if(pos == 1)
								{
									LinkedList.prototype.textDelHead(head);
								}
								else{
									LinkedList.prototype.textDelPos();
								}
								
								
									svgList.selectAll("rect#t" + (pos-1))
												  .transition()
												  .style("fill",color_tail_list)
												  .duration(1200) // this is 1s
												  .delay(700) ;
								
									setTimeout(function() {
											LinkedList.prototype.ReDraw(head);
									}, 2000);
									
								
							}
							else{
								dataset.splice(pos -1 , 1);
								if(pos == 1)
								{
									LinkedList.prototype.textDelHead(head);
									setTimeout(function() {
										svgList.append("line")
										   .attr("x1", padding_x + size_node/2)
										   .attr("y1", 70 + size_node + height)
										   .attr("x2", padding_x + size_node/2)
										   .attr("y2", 70 + size_node*2 + height)
										   .attr("stroke", "red");
									}, 1200); 
									setTimeout(function() {
											svgList.append("line")
												   .attr("x1", padding_x + size_node/2)
												   .attr("y1", 70 + size_node*2 + height)
												   .attr("x2", padding_x + size_node/2 + 4.5*size_node)
												   .attr("y2", 70 + size_node*2 + height)
												   .attr("stroke", "red");	
									}, 2000);
									setTimeout(function() {
											svgList.append("line")
												   .attr("x1", padding_x + size_node/2 + 4.5*size_node)
												   .attr("y1", 70+  size_node + height)
												   .attr("x2", padding_x + size_node/2 + 4.5*size_node)
												   .attr("y2", 70 + size_node*2 + height)
												   .attr("stroke", "red");	
									}, 2500);
									setTimeout(function() {
										var a = 	svgList.selectAll("rect#n1");
												  a.transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
											svgList.selectAll("text#n1")
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
											svgList.selectAll("line#l1")
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
												  
											svgList.selectAll("rect#t1")
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
												  
											svgList.selectAll("line#head")
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
									}, 3000);
									
								}
								else{
											// draw line to append
									LinkedList.prototype.textDelPos();
									setTimeout(function() {
											svgList.append("line")
												   .attr("x1", 2.5*size_node*(pos - 1) + (padding_x + size_node*0.75))
												   .attr("y1", 70 + size_node + height)
												   .attr("x2", 2.5*size_node*(pos - 1) + (padding_x + size_node*0.75))
												   .attr("y2", 70 + size_node*2 + height)
												   .attr("stroke", "red");
									}, 1200); 
									setTimeout(function() {
											svgList.append("line")
												   .attr("x1", 2.5*size_node*(pos - 1) + (padding_x + size_node*0.75))
												   .attr("y1", 70 + size_node*2 + height)
												   .attr("x2", 2.5*size_node*(pos - 1) + (padding_x + size_node*0.75)+ 4.5*size_node)
												   .attr("y2", 70 + size_node*2 + height)
												   .attr("stroke", "red");	
									}, 2000);
									setTimeout(function() {
											svgList.append("line")
												   .attr("x1", 2.5*size_node*(pos - 1) + (padding_x + size_node*0.75)+ 4.5*size_node)
												   .attr("y1", 70 + size_node*2 + height)
												   .attr("x2", 2.5*size_node*(pos - 1) + (padding_x + size_node*0.75)+ 4.5*size_node)
												   .attr("y2", 70 + size_node + height)
												   .attr("stroke", "red");	
									}, 2500);
									
									setTimeout(function() {
										var a = 	svgList.selectAll("rect#n"+pos);
												  a.transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
											svgList.selectAll("text#n"+pos)
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
											svgList.selectAll("line#l"+pos )
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
												  
										  svgList.selectAll("rect#t"+pos )
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
												  
											svgList.selectAll("line#l"+(pos-1))
												  .transition()
												  .style("opacity",0)
												  .duration(1000) // this is 1s
												  .delay(100) ;
									}, 3000);
									setTimeout(function() {
										LinkedList.prototype.ReDraw(head);
											
									}, 4000);
							
									
								}
							}
						
					clearInterval(intervalID);		
							
			}
		}, 700);
					
			
			
			
				///////////////////////////////
				
			
			}
			else{
				alert("Please enter valid position!");
			}
		}