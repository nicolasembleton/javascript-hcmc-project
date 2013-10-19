var tower_width, tower_height, left, padding_top, svg_width, svg_height, svg_width2;
var svgTower,height_disk, width_disk, step;
	function Tower()
	{	
		this.init;
		this.Draw;
		this.RunStep;
		this.MoveDisk;
		this.Run;
		this.RunNext;
		
	}
	
	Tower.prototype.init = function (svg_w, svg_h, stk_w, stk_h,l,h2, item)
	{
			stack_width = stk_w;
			stack_height = stk_h;
			left = l;
			svg_width2 = svg_w;
			svg_height = svg_h;
			padding_top = h2;
			height_disk = 20;
			width_disk = 90;
			svg_width = 360;
			svgTower = d3.selectAll("div#tower")
				.append("svg")
				.attr("id","tower")
				.attr("width", svg_width2)
				.attr("height", svg_height);
		step = 0;
				
	}
	
	Tower.prototype.Draw = function ()
	{
		drawRect(svgTower,left,padding_top + stack_height ,stack_width,5,"black");
		drawRect(svgTower,left + stack_width/2,padding_top ,3,stack_height,"black");
		
		drawRect(svgTower,left + stack_width + 30,padding_top + stack_height ,stack_width,5,"black");
		drawRect(svgTower,left + stack_width + 30 + stack_width/2,padding_top ,3,stack_height,"black");
		
		drawRect(svgTower,left +2*( stack_width + 30),padding_top + stack_height ,stack_width,5,"black");
		drawRect(svgTower,left + 2*(stack_width + 30) + stack_width/2,padding_top ,3,stack_height,"black");
		
		drawRect(svgTower,left + 5,padding_top + stack_height - height_disk ,width_disk,height_disk - 1,"blue","disk1");
		
		drawRect(svgTower, left  + 20,   padding_top + stack_height - 2*height_disk ,
							width_disk - 30,height_disk  - 1,"green","disk2");
							
		drawRect(svgTower, left  + 30,   padding_top + stack_height - 3*height_disk ,
							width_disk - 50,height_disk  - 1,"red","disk3");
							
		drawText(svgTower,"A",left + stack_width/2,padding_top + stack_height + 25,"black", "15","text1");
		drawText(svgTower,"B",left + stack_width + 30  + stack_width/2,padding_top + stack_height + 25,"black", "15","text2");
		drawText(svgTower,"C",left + 2*(stack_width + 30)  + stack_width/2,padding_top + stack_height + 25,"black", "15","text3");
		
	}
	
	Tower.prototype.Line = function (x,y,id,order)
	{
		setTimeout(function() {	
			if(order == 2)
				drawLine(svgTower,x,y + 20,x,y,"black","line"+id);
			else if(order == 1)
				drawLine(svgTower,x,y, x - 50,y + 20,"black","l"+ id);
			
			else drawLine(svgTower,x,y,x + 50,y + 20,"black","r"+ id);		
							
		}, 500); 
		
	}
	Tower.prototype.textAccess = function (n,a, b, c, x, y,id,order)
	{
		setTimeout(function() {	
			if(order == 1)
				drawText(svgTower,"Move("+ n + ","+a+","+b+","+c+")"
								,x - 90,y,"black", "15","left"+ id);
			else if(order == 2)					
				drawText(svgTower,a+" -> "+c
								,x - 5 ,y,"black", "15","mid"+ id);
								
			else drawText(svgTower,"Move("+ n + ","+b+","+c+","+a+")"
								,x + 85,y,"black", "15","right"+id);
		}, 1000); 
	}		
Tower.prototype.RunText= function (order)
{
	
		if(order == 1)
		{	
			$('p.text').css("color","black");

			setTimeout(function() {
				$('p.text1').css("color","red");		
			}, 500); 
			setTimeout(function() {		
				$('p.text2').css("color","red");	
			}, 700);
	
			setTimeout(function() {		
				$('p.text3').css("color","red");
			}, 1000); 
		}
		else if(order == 2)
		{
			setTimeout(function() {	
				$('p.text').css("color","red");
				$('p.text5').css("color","black");
				$('p.text6').css("color","black");
			}, 1000); 
		}
		else if(order == 3)
		{
			setTimeout(function() {	
				$('p.text').css("color","red");
				
				$('p.text6').css("color","black");
			}, 1000); 
		}
}	


Tower.prototype.RunStep = function (time1, time2,number_text, w, h, a, b, c, row, branch,n)
{
// total time 1500 + 1000 + time1
	setTimeout(function(){	
			Tower.prototype.RunText(number_text);
			setTimeout(function(){
				Tower.prototype.Line(w,h, row,branch);	
				Tower.prototype.textAccess(n,a,b,c,w + 10,h + 40,row,branch);	
			}, 1500); 
	}, time1); 
}
Tower.prototype.MoveDisk = function(disk,move_x, move_y,n,a,b,c,x,y,time_move,row,branch, time_return,text_num,up,return2, move_y2)
{
	setTimeout(function() {	
				$('p.text3').css("color","red");			
				$('p.text4').css("color","red");		
	}, time_move); 
	if(up=="up" || up=="down")
	{
	
		svgTower.selectAll("rect#disk"+disk)
						  .transition()
						  .attr("y",move_y - 30).duration(1000) 						  
						  .delay(time_move);	
		svgTower.selectAll("rect#disk" + disk)
					  .transition()
					  .attr("x",move_x).duration(1500) 
					  .delay(time_move + 1000);	
		if(up=="down")
		{
			svgTower.selectAll("rect#disk"+disk)
			  .transition()
			  .attr("y",move_y2).duration(1000) 						  
			  .delay(time_move + 2500);
		}
	}
	
	else{
		svgTower.selectAll("rect#disk"+disk)
						  .transition()
						  .attr("x",move_x).duration(1000) 
						  .delay(time_move);	
		svgTower.selectAll("rect#disk" + disk)
					  .transition()
					  .attr("y",move_y).duration(1000) 
					  .delay(time_move + 1500);	
	}
		
		
		setTimeout(function() {
			setTimeout(function() {	
				$('p.text4').css("color","red");			
				$('p.text5').css("color","red");		
			}, 500); 
			
			setTimeout(function(){		
								
				setTimeout(function(){
					Tower.prototype.Line(x ,y, row,branch);			
					Tower.prototype.textAccess(n,a,b,c,x + 15,y + 40,row,branch);
				},500);

				if(n==0)
				{
				
					setTimeout(function() {
						$('p.text6').css("color","red");		
					}, 2000);
					setTimeout(function() {
						$('#l'+row).remove();
						$('#r'+row).remove();
						$('#line'+row).remove();
						$('#left'+row).remove();
						$('#right'+row).remove();
						$('#mid'+row).remove();				
					}, 3500);
				
					if(return2 == 1)
					{
						setTimeout(function() {
							$('#l'+(row-1)).remove();
							$('#r'+(row-1)).remove();
							$('#line'+(row-1)).remove();
							$('#left'+(row -1)).remove();
							$('#right'+(row - 1)).remove();
							$('#mid'+(row - 1)).remove();				
						}, 5000); 
					}
				}
						
			}, 500); 
		}, time_return);
}
Tower.prototype.RunMoveStep = function()
{
	
}
	Tower.prototype.Run = function ()
	{
		drawText(svgTower,"Move(3,A,C,B)",left + svg_width/2 + 30,200 ,"black", "15","root");
		//(time1, time2,number_text, w, h, a, b, c, row, branch,n)
		Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 50,210,"A","B","C",1,1,2);
		Tower.prototype.RunStep(3000,1500,1,svg_width/2 + left ,260,"A","C","B",2,1,1);
		Tower.prototype.RunStep(5500,1500,1,svg_width/2 + left - 60,310,"A","B","C",3,1,0);
		
		
		// n = 0 -> fail
						
			Tower.prototype.RunStep(8000,1500,2,svg_width/2 + left - 60,310,"A","B","C",3,2,0);			
		
		//MoveDisk = function(disk,move_x, move_y,n,a,b,c,x,y,time_move,row,branch, time_return)
		Tower.prototype.MoveDisk(3,left +2*( stack_width + 30) + 30,padding_top + stack_height - 20,
								0,"A","B","C",svg_width/2 + left - 60,310,10000,3,3,13500,0);
	
		
			setTimeout(function() {
				Tower.prototype.RunText(2);
			}, 15500);
			setTimeout(function() {
				Tower.prototype.Line(svg_width/2 + left  ,260, 2,2);		
				Tower.prototype.textAccess(1,"A","C","B",left + svg_width/2 + 20 ,300,2,2);
			}, 16500);
		
		//MoveDisk = function(disk,move_x, move_y,n,a,b,c,x,y,time_move,row,branch, time_return)
		Tower.prototype.MoveDisk(2,left +( stack_width + 30) + 20,padding_top + stack_height - 20,
								1,"A","C","B",svg_width/2 + left,260,17500,2,3,20000,3);
		
		Tower.prototype.RunStep(22500,1500,1,(svg_width/2 + 30 )+ left + 40  ,310,"C","A","B",3,1,0);
		
		Tower.prototype.RunStep(24000,1500,2,(svg_width/2 + 30 )+ left + 40,310,"C","A","B",3,2,0);	
		
		//MoveDisk = function(disk,move_x, move_y,n,a,b,c,x,y,time_move,row,branch, time_return)
		Tower.prototype.MoveDisk(3,left +( stack_width + 30) + 30,padding_top + stack_height - 40,
								0,"A","B","C",(svg_width/2 + 30 )+ left + 40,310,26000,3,3, 29500,0,"down",1,padding_top + stack_height - 40);
								
								
							
		Tower.prototype.RunStep(34000,1500,1,svg_width/2 + left + 50,210,"A","B","C",1,2,2);
		
		
		
		//MoveDisk = function(disk,move_x, move_y,n,a,b,c,x,y,time_move,row,branch, time_return)
		Tower.prototype.MoveDisk(1,left +2*( stack_width + 30) + 5,padding_top + stack_height - 70 + 5,
								2,"A","B","C",(svg_width/2 + 30 )+ left + 20,210,35500,1,3,38000,3,"down",0,padding_top + stack_height - 20);
								
		Tower.prototype.RunStep(40500,1500,1,svg_width/2 + left + 105,260,"B","A","C",2,1,1);
		Tower.prototype.RunStep(42000,1500,1,svg_width/2 + left + 10,310,"B","C","A",3,1,0);
		Tower.prototype.RunStep(43500,1500,1,svg_width/2 + left + 10,310,"B","C","A",3,2,0);
		
		Tower.prototype.MoveDisk(3,left + 30,padding_top + stack_height - 20,
								0,"A","B","C",svg_width/2 + left + 10,310,45000,3,3,47500,0);
		
		Tower.prototype.RunStep(51000,1500,1,svg_width/2 + left + 105,260,"B","A","C",2,2,1);
		
		Tower.prototype.MoveDisk(2,left +2*( stack_width + 30) + 20,padding_top + stack_height - 10,
								1,"B","A","C",svg_width/2 + left + 140 - 35,260,52500,2,3,55000,0,"up");
		Tower.prototype.RunStep(58000,1500,1,svg_width/2 + left + 170,310,"A","B","C",3,1,0);
		Tower.prototype.RunStep(60000,1500,1,svg_width/2 + left + 170,310,"A","B","C",3,2,0);
		Tower.prototype.MoveDisk(3,left +2*( stack_width + 30) + 30,padding_top + stack_height - 30,
								0,"A","B","C",svg_width/2 + left + 170,310,61500,3,3,63000,0,"up");
		$("#reset").attr("disabled","disabled");
		setTimeout(function() {
				$("input#stepbutton").attr("disabled","");
				$("input#run").attr("disabled","");
				$("input#reset").attr("disabled","");
		}, 63000);
	}
	
	function showButton(time)
	{
		setTimeout(function() {
				$("input#stepbutton").removeAttr("disabled");
				$("input#reset").removeAttr("disabled");
				$("input#reset").removeAttr("disabled");
		}, time);
	}
	
   Tower.prototype.RunNext = function ()
   {
		$("input#stepbutton").attr("disabled","disabled");
		$("input#run").attr("disabled","disabled");
		$("input#reset").attr("disabled","disabled");
		step++;
		switch(step)
		{
			case 1: 
					drawText(svgTower,"Move(3,A,C,B)",left + svg_width/2 + 30,200 ,"black", "15","root");		
					Tower.prototype.RunStep(200,1500,1,svg_width/2 + left + 50,210,"A","B","C",1,1,2);
					showButton(2000);
					break;
			case 2:
					Tower.prototype.RunStep(200,1500,1,svg_width/2 + left ,260,"A","C","B",2,1,1);
					Tower.prototype.RunStep(2700,1500,1,svg_width/2 + left - 60,310,"A","B","C",3,1,0);
					showButton(4000);
					break;
			case 3:
					Tower.prototype.RunStep(200,1500,2,svg_width/2 + left - 60,310,"A","B","C",3,2,0);			
					Tower.prototype.MoveDisk(3,left +2*( stack_width + 30) + 30,padding_top + stack_height - 20,
											0,"A","B","C",svg_width/2 + left - 60,310,1700,3,3,3700,0);
					showButton(4500);
					break;
			case 4:
					setTimeout(function() {
						Tower.prototype.RunText(2);
					}, 200);
					setTimeout(function() {
						Tower.prototype.Line(svg_width/2 + left  ,260, 2,2);		
						Tower.prototype.textAccess(1,"A","C","B",left + svg_width/2 + 20 ,300,2,2);
					}, 1500);
					
					Tower.prototype.MoveDisk(2,left +( stack_width + 30) + 20,padding_top + stack_height - 20,
								1,"A","C","B",svg_width/2 + left,260,3000,2,3,6000,3);
					showButton(8000);
					break;
			case 5:
					Tower.prototype.RunStep(500,1500,1,(svg_width/2 + 30 )+ left + 40  ,310,"C","A","B",3,1,0);		
					showButton(2000);					
					break;
			case 6:
					Tower.prototype.RunStep(500,1500,2,(svg_width/2 + 30 )+ left + 40,310,"C","A","B",3,2,0);	
					Tower.prototype.MoveDisk(3,left +( stack_width + 30) + 30,padding_top + stack_height - 40,
								0,"A","B","C",(svg_width/2 + 30 )+ left + 40,310,2500,3,3, 6000,0,"down",1,padding_top + stack_height - 40);
					showButton(8000);
					break;
			case 7: 
					Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 50,210,"A","B","C",1,2,2);
					Tower.prototype.MoveDisk(1,left +2*( stack_width + 30) + 5,padding_top + stack_height - 70 + 5,
								2,"A","B","C",(svg_width/2 + 30 )+ left + 20,210,2500,1,3,6000,3,"down",0,padding_top + stack_height - 20);
					
					showButton(8000);
					break;
					
			case 8: 
					Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 105,260,"B","A","C",2,1,1);
					Tower.prototype.RunStep(2500,1500,1,svg_width/2 + left + 10,310,"B","C","A",3,1,0);
					showButton(4000);
					break;
			case 9:
					Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 10,310,"B","C","A",3,2,0);		
					Tower.prototype.MoveDisk(3,left + 30,padding_top + stack_height - 20,
								0,"A","B","C",svg_width/2 + left + 10,310,2500,3,3,6000,0);
					showButton(8000);
					break;
			case 10:
					Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 105,260,"B","A","C",2,2,1);		
					Tower.prototype.MoveDisk(2,left +2*( stack_width + 30) + 20,padding_top + stack_height - 10,
								1,"B","A","C",svg_width/2 + left + 140 - 35,260,2500,2,3,5500,0,"up");
					showButton(7000);
					break;
			case 11:
					Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 170,310,"A","B","C",3,1,0);
					break;
			case 12: 
					Tower.prototype.RunStep(500,1500,1,svg_width/2 + left + 170,310,"A","B","C",3,2,0);
					Tower.prototype.MoveDisk(3,left +2*( stack_width + 30) + 30,padding_top + stack_height - 30,
								0,"A","B","C",svg_width/2 + left + 170,310,3000,3,3,6000,0,"up");
					showButton(8000);
					break;
			
			
			
			default:
					break;
					
			
		}
		$("input#runstep").show();
		
		
   }