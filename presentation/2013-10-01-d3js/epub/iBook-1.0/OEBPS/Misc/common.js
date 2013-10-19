	function drawText(svg,txt,x,y,color, size,id){
		svg.append("text")
				   .text(txt)
				   .attr("text-anchor", "middle")
				   .attr("x", x)
				   .attr("y", y)
				   .attr("id",id)
				   .attr("font-family", "sans-serif")
				   .attr("font-size", size + "px")
				   .attr("fill", color);	
	}
	function check_charcount(content_id, max, e)
    {   
        if(e.which != 8 && $('#'+content_id).text().length > max)
        {
           // $('#'+content_id).text($('#'+content_id).text().substring(0, max));
            e.preventDefault();
        }
    }
	function limitInput(content_id,max)
	{
		

		//binding keyup/down events on the contenteditable div
		$('#'+content_id).keyup(function(e){ check_charcount(content_id, max, e); });
		$('#'+content_id).keydown(function(e){ check_charcount(content_id, max, e); });

    
	}
	
	
	
	function drawRect(svg,x,y,w,h,color1,color2,id)
	{
		svg.append("rect")
			   .attr("x", x)
			   .attr("y", y)
			   .attr("width", w )
			   .attr("height", h)
			   .attr("id",id)
			   .attr("stroke", color2)
			   .attr("stroke-width",2)
			   .attr("fill", color1);
	}
	
	function drawRectHead(svg,x,y,w,h,color1,color2,id)
	{
		svg.append("rect")
			   .attr("x", x)
			   .attr("y", y)
			   .attr("width", w )
			   .attr("height", h)
			   .attr("id",id)
			   .attr("rx",5)
			   .attr("ry",5)
			   .attr("stroke", color2)
			   .attr("stroke-width",2)
			   .attr("fill", color1);
	}
	
	
	function drawLine(svg,x1,y1,x2,y2,color,id)
	{
		svg.append("line")
				   .attr("x1", x1)
				   .attr("y1", y1)
				   .attr("x2", x2)
				   .attr("y2", y2)
				   .attr("id", id)
				   .attr("stroke", color);
	}
	function reset() {
		location.reload();
	}
