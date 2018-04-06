var Zd =  Class.extend({

	init:function(fx){
		this.fx = fx
		this.zdnum = game.sm.role.zdnum;
		this.hehe = 0;
		this.hehe1 = 0;
		// this.zdnum =3
		this.images = [game.R["zd"],game.R["zdz"],game.R["zd2"],game.R["zd3"]];
		this.image = this.images[this.zdnum];
		this.yy = 0;
		this.speed = 10;
		this.a = 0;
		this.b = 0;
		switch(this.zdnum){
			case 0:
				this.a = 30;
				this.b = 0;
				break;
			case 1:
				this.a = 17;
				this.b = -10;
				break;
			case 2:
				this.a = 30;
				this.b = -60;
				break;
			case 3:
				this.a = 7;
				this.b = -30;
				break;
			
		}
		this.x = game.sm.role.x + this.a;
		this.y = game.sm.role.y + this.b;
		game.sm.zds.push(this);
	},
	updata:function(){
		
		if(this.y < 0){
			this.godie();
		}
		if(this.zdnum == 0){
			this.y -= this.speed;
			this.x1 = this.x + 5;
			this.x2 = this.x + 25;
			this.y1 = this.y + 5;
			this.y2 = this.y + 28;
		}else if(this.zdnum == 1){
			this.y -= this.speed;
			this.x1 = this.x -10;
			this.x2 = this.x + 50;
			this.y1 = this.y + 5;
			this.y2 = this.y + 35;

		}else if(this.zdnum == 2){
			this.x1 = this.x + 5;
			this.x2 = this.x + 20;
			this.y1 = this.y + 6;
			this.y2 = this.y + 66;
			if(this.fx == 0){
				this.y -= this.speed;
			}else if(this.fx == 1){
				this.hehe ++ ;
				if (this.hehe < 10) {
					this.x += this.speed;
				}else{
					this.y -= (this.speed * 2);
				}
				
			}else if(this.fx == 2){
				this.hehe1++;
				if (this.hehe1 < 10) {
					this.x -= this.speed;
				}else{
					this.y -= (this.speed * 2);
				}
				
				
				
			}
		}else if(this.zdnum == 3){
			this.yy += 73;
			// this.x -= this.speed;
			if(this.yy > 146 ){
			 	this.yy = 0;
			 }
			 if(this.fx == 0){
				this.y -= this.speed;
			}else if(this.fx == 1){
				this.y -= this.speed;
				this.x -= this.speed;
			}else if(this.fx == 2){
				this.y -= this.speed;
				this.x += this.speed;
			}else if(this.fx == 3){
				this.y -= this.speed;
				this.x -= this.speed / 2;
			}else if(this.fx == 4){
				this.y -= this.speed;
				this.x += this.speed / 2;
			}
			this.x1 = this.x + 15;
			this.x2 =this.x + 51;
			this.y1 =this.y + 15;
			this.y2 =this.y + 51;

		}
		
	},

	godie:function(){

		game.sm.zds = _.without(game.sm.zds , this);
	},
	render:function(){
		if(this.zdnum == 0){
			game.ctx.drawImage(this.image,this.x,this.y);
			// game.ctx.fillRect(this.x1,this.y1,20,30);
		}else if(this.zdnum == 1){
			game.ctx.drawImage(this.image,this.x-20,this.y);
			game.ctx.drawImage(this.image,this.x +20,this.y);
			// game.ctx.fillRect(this.x1,this.y1,60,30);

		}else if(this.zdnum == 2){
			game.ctx.drawImage(this.image,this.x,this.y);
			// game.ctx.fillRect(this.x1,this.y1,15,60);
		}
		else if(this.zdnum == 3){
			game.ctx.drawImage(this.image, 0, this.yy, 66, 66, this.x,this.y, 66,66);
			// game.ctx.fillRect(this.x1,this.y1,36,36);
		}
		
		
	}
});
var Dzd =  Class.extend({

	init:function(fx, x, y){

		this.imagess = [[game.R["bosszd"], game.R["bosszd2"]],[game.R["dzd1"], game.R["dzd2"]]]

		this.images = this.imagess[x];

		this.dzdnum = 0;

		this.image = this.images[this.dzdnum];

		this.yy = y;
		this.a = 40;
		if(this.yy == 0){
			this.a = 40;
			this.x = game.sm.boss[0].x + 64;

			this.y = game.sm.boss[0].y + 64;
		}else if(this.yy == 1){
			this.a = 10;
				
			this.x = game.sm.direns1[0].x + 42;

			this.y = game.sm.direns1[0].y + 42;console.log(this.x,this.y)
				
			
		}

		

		this.fx = fx;

		this.speed = 5;

		game.sm.dzd.push(this)

	},
	updata:function(){
		this.dzdnum++;
		if(this.dzdnum > 1){
			this.dzdnum = 0;

		}
		this.image = this.images[this.dzdnum];
		this.x += this.speed * Math.cos(this.fx);

		this.y += this.speed * Math.sin(this.fx);
		this.x1 = this.x;
		this.x2 =this.x + 40;
		this.y1 =this.y;
		this.y2 =this.y + 40;

		if( this.x2 > game.sm.role.x1 && this.x1 < game.sm.role.x2 && this.y1 <  game.sm.role.y2 &&  this.y2 > game.sm.role.y1){
					this.godie();	
					game.siw -= 2;
					if(game.siw < 0){
						myVideo2.pause();
						myVideo3.pause();
						game.sm.changeScene(3); 
							// alert("gg")
						}
				
		}
		if(this.y > game.height || this.y < 0 || this.x > game.width || this.x < 0){
			this.godie();
		}
	},
	godie:function(){

		game.sm.dzd = _.without(game.sm.dzd , this);
	},
	render:function(){
		game.ctx.drawImage(this.image,this.x, this.y , this.a, this.a);
		 // game.ctx.fillRect(this.x1,this.y1,10,10);
	}
})
