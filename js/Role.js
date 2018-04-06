var Role = Class.extend({
	init:function(){
		this.image = game.R["my1"];
		this.x = game.width / 2 - 40;
		this.y = game.height - 79;
		this.num = 0;
		this.zdnum = 0;
		
	
	},
	updata:function(){
		
		if( this.num > 10 && this.num <= 15){
			this.image = game.R["my2"];
			this.zdnum = 1;
		}else if( this.num <= 20 && this.num > 15){
			this.image = game.R["my3"];
			this.zdnum = 2;
		}else if(this.num > 20 && this.num <=25 ){
			this.image = game.R["my4"];
			this.zdnum = 3;
		}else if(this.num > 25){
			this.image = game.R["my5"];
			this.zdnum = 3;
		}else if(this.num <= 10){
			this.image = game.R["my1"];
			this.zdnum = 0;
		}
		
			// this.image = game.R["my4"];
			// this.zdnum = 3;
		
		// console.log(this.zdnum)
	},

	goLeft:function(){
		if(this.x  < 0) return;
		this.yy = 1;
		this.x-=10;
		this.x1 =this.x + 15;
		this.x2 =this.x + 80;
		this.y1 = this.y + 10;
		this.y2 = this.y + 60;
	},
	goRight:function(){
		if(this.x  > game.width - 80) return;
		this.yy = 2;
		this.x+=10;
		this.x1 =this.x+ 15;
		this.x2 =this.x+ 80;;
		this.y1 = this.y + 10;
		this.y2 = this.y + 60;
		
	},
	goUp:function(){
		if(this.y  < 0) return;
		this.yy = 3;
		this.y-=10;
		this.x1 =this.x+ 15;
		this.x2 =this.x+ 80;
		this.y1 = this.y+ 10;
		this.y2 = this.y+ 60;
	},
	goDown:function(){
		if(this.y  > game.height - 79 ) return;
		this.yy = 0;
		this.y +=10;
		this.x1 =this.x + 15;
		this.x2 =this.x + 80;
		this.y1 = this.y + 10;
		this.y2 = this.y + 60;
		
	},
	render:function(){
		game.ctx.drawImage(this.image,this.x, this.y, 80, 64);
		// game.ctx.fillRect(this.x1,this.y1,50,50);
	}
})