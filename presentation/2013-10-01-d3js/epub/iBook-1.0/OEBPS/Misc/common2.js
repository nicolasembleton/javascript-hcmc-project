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
	
	function drawRect(svg,x,y,w,h,color,id)
	{
		svg.append("rect")
			   .attr("x", x)
			   .attr("y", y)
			   .attr("width", w )
			   .attr("height", h)
			   .attr("id",id)
			   .attr("fill", color);
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
