var Diren = Class.extend({

	init:function(){
		this.bom = 0;
		this.kk = 0;
		this.dr = parseInt(Math.random() * 3) + 1;
		this.images = game.R["di"+this.dr+""];
		this.image = [game.R["dadao0"], game.R["dadao1"], game.R["dadao2"]];
		this.y = -300;
		this.speed = 3 * ( 4 - this.dr);
		this.x = Math.random() * (game.width - 60 * (this.dr - 1));

		game.sm.direns.push(this);

		


	},
	updata:function(){

		this.y += this.speed;
		if(this.speed == 0){
			if(game.f % 3 == 0 ){
				this.bom++;
			}
			// myVideo4.pause();
			if(this.bom > 2){
				this.bom = 0;
				this.godie();
				myVideo4.play();
				
					for (var i = 0; i < parseInt(Math.random() * 6); i++) {
						new Boss(this.x, this.y);
					}
				
				
			
			}
			this.images = this.image[this.bom];

		}
		
		if(this.y > game.height + 500){
			this.godie();
		}

		this.x1 = this.x + 10 * this.dr;
		this.x2 = this.x + 45 * this.dr;
		this.y1 = this.y + 17;
		this.y2 = this.y + 20 + this.dr * 20;

			if (!game.wudi1) {

					game.wudi1 = !game.wudi1;
			

				return;
			}else{
				if( this.x2 > game.sm.role.x1 && this.x1 < game.sm.role.x2 && this.y1 <  game.sm.role.y2 &&  this.y2 > game.sm.role.y1){
					// this.godie();
					this.speed = 0;
						game.fenshu +=300;
					game.siw -= 2;
					game.sm.role.num -= 10;
					if(game.siw < 0){
						myVideo2.pause();
						myVideo3.pause();
						
						game.sm.changeScene(3);
					}
					if(game.sm.role.num < 0){
						game.sm.role.num = 0;

					}
					
					game.wudi1 = !game.wudi1;
				}
			}
	
				
				for (var k = 0; k < game.sm.zds.length; k++) {
					if( this.x2 > game.sm.zds[k].x1 && this.x1 < game.sm.zds[k].x2 && this.y1 <  game.sm.zds[k].y2 &&  this.y2 > game.sm.zds[k].y1){
							game.sm.zds[k].godie();
							this.kk ++ ;
						if(this.kk > 5){
							this.kk = 0;
							game.fenshu +=1000;
							this.speed = 0;
						}
					}
					
				}
		
	},

	godie:function(){

		game.sm.direns = _.without(game.sm.direns , this);

		
	},
	render:function(){
			game.ctx.drawImage(this.images, this.x, this.y);
		
	}
});
var Diren2 =Diren.extend({

	init:function(a){
		this.a = a;
		this.bom = 0;
		this.kk = 0;
		this.dr = 1;
		this.images = game.R["pd"];
		this.image = [game.R["dadao0"], game.R["dadao1"], game.R["dadao2"]];
		this.y = -300;
		this.speed = 3;
		this.x = 30 +  this.a * 80;
		game.sm.direns.push(this);

	},
	updata:function(){
		this._super();
	},
	godie:function(){

		game.sm.direns = _.without(game.sm.direns , this);

		
	},
	render:function(){
			game.ctx.drawImage(this.images, this.x , this.y , 60, 43);
		
	}
})

var Boss = Diren.extend({


init:function(x,y){
		this.bom = 0;
		this.kk = 0;
		this.dr = 2;
		this.number = 0;
		this.images = [game.R["sj"], game.R["sj2"]];
		this.image = this.images[this.number]
		this.y = y;
		this.speed = 3 * ( 4 - this.dr);
		this.x = x;
		game.sm.direns3.push(this);

		do{
			this.sjx =  parseInt(Math.random() * 2) - 1;
			this.sjy = parseInt(Math.random() * 5);
		}while(this.sjx == this.sjy)
		

		


	},
	updata:function(){
		game.f % 5 == 0 && this.number++;
		if(this.number > 1){
			this.number = 0;

		}
		this.image = this.images[this.number];

	
				this.x += this.sjx;
				this.y += this.sjy;
		
			
	
		
		
		
		if(this.y > game.height + 500){
			this.godie();
		}

		this.x1 = this.x;
		this.x2 = this.x + 35;
		this.y1 = this.y;
		this.y2 = this.y + 35;


		
				
				if( this.x2 > game.sm.role.x1 && this.x1 < game.sm.role.x2 && this.y1 <  game.sm.role.y2 &&  this.y2 > game.sm.role.y1){
					
					this.godie();
					game.fenshu +=200;
					game.sm.role.num += 1;
					game.siw +=2;
					if(game.siw > 100){
						game.siw = 100;
					}

					
					
				}
		
		
	},

	godie:function(){

		game.sm.direns3 = _.without(game.sm.direns3 , this);

		
	},
	render:function(){
			game.ctx.drawImage(this.image, this.x, this.y, 35, 35);
			// game.ctx.fillRect(this.x1,this.y1,20,20);
		
	}
});
var Dboss = Diren.extend({

	init:function(){

		this.image = game.R["fuzhao"];
	
		this.kk = 0;

		this.x = game.width / 2 ;

		this.y = -300;

		this.dx = 5;

		this.dy = 5;

		this.r = 128;
		game.sm.boss.push(this)

	},
	updata:function(){
		if (this.y < 0) {
			this.y += this.dy;
		}else{
				this.y += this.dy;
				this.x += this.dx;
				if (this.y > game.height - this.r || this.y < 0) {
					this.dy = -this.dy
				}else if (this.x > game.width - this.r || this.x < 0){
					this.dx = -this.dx
		
				}
		}
				
		this.x1 = this.x + this.dx + 25;
		this.x2 = this.x + this.dx + 90;
		this.y1 = this.y + this.dy + 25;
		this.y2 = this.y + this.dy + 90;
				if (!game.wudi){
					game.wudi = !game.wudi;
					return;
				}else{
					if( this.x2 > game.sm.role.x1 && this.x1 < game.sm.role.x2 && this.y1 <  game.sm.role.y2 &&  this.y2 > game.sm.role.y1){
					
						game.siw -= 10;
						game.sm.role.num -= 10;
						if(game.siw < 0){
							myVideo2.pause();
							myVideo3.pause();
							game.sm.changeScene(3); 
							
						}
						if(game.sm.role.num < 0){
							game.sm.role.num = 0;
	
						}

						game.wudi = !game.wudi;
					
					}
				}
				
				for (var k = 0; k < game.sm.zds.length; k++) {
					if( this.x2 > game.sm.zds[k].x1 && this.x1 < game.sm.zds[k].x2 && this.y1 <  game.sm.zds[k].y2 &&  this.y2 > game.sm.zds[k].y1){
							game.sm.zds[k].godie();
							this.shan();
							this.kk ++ ;
						if(this.kk > 25 && this.kk < 51){
							this.image = game.R["boss1"];
						
						}else if (this.kk > 50){
								game.fenshu +=10000;
								myVideo3.pause();
							game.sm.changeScene(4);
						}
					}
					
				}
		
	},
	shan:function(){

	},
	render:function(){
			game.ctx.drawImage(this.image, this.x, this.y);
			// game.ctx.fillRect(this.x1,this.y1,65,65);
		
	}
});
var Diren1 = Diren.extend({

		init:function(x){
		this.bom = 0;
		this.kk = 0;
		this.dr = 2;
		this.images = game.R["dijizd"];
		this.image = [game.R["dadao0"], game.R["dadao1"], game.R["dadao2"]];
		this.y = 900;
		this.speed = 3 * ( 4 - this.dr);
		this.x = x;

		game.sm.direns1.push(this);

		


	},
	updata:function(){
		if(this.y > 200){
			this.y -= this.speed;
		}
		
		if(this.speed == 0){
			game.f%3==0 && this.bom++;
			myVideo4.pause();
			if(this.bom > 2){
				this.bom = 0;
				this.godie();
				myVideo4.play();
				if((Math.random() - 0.6) > 0){
					for (var i = 0; i < 5; i++) {
						new Boss(this.x, this.y);
					}
				}
				
			
			}
			this.images = this.image[this.bom];

		}
		
		if(this.y > game.height + 500){
			this.godie();
		}

		this.x1 = this.x + 10 * this.dr;
		this.x2 = this.x + 45 * this.dr;
		this.y1 = this.y + 17;
		this.y2 = this.y + 20 + this.dr * 20;

			if (!game.wudi1) {

					game.wudi1 = !game.wudi1;
			

				return;
			}else{
				if( this.x2 > game.sm.role.x1 && this.x1 < game.sm.role.x2 && this.y1 <  game.sm.role.y2 &&  this.y2 > game.sm.role.y1){
					// this.godie();
					this.speed = 0;
						game.fenshu +=1000;
					game.siw -= 2;
					game.sm.role.num -= 10;
					if(game.siw < 0){
						myVideo2.pause();
						myVideo3.pause();
						game.sm.changeScene(3);
					}
					if(game.sm.role.num < 0){
						game.sm.role.num = 0;

					}
					
					game.wudi1 = !game.wudi1;
				}
			}
	
				
				for (var k = 0; k < game.sm.zds.length; k++) {
					if( this.x2 > game.sm.zds[k].x1 && this.x1 < game.sm.zds[k].x2 && this.y1 <  game.sm.zds[k].y2 &&  this.y2 > game.sm.zds[k].y1){
							game.sm.zds[k].godie();
							this.kk ++ ;
						if(this.kk > 5){
							this.kk = 0;
								game.fenshu +=2000;
							this.speed = 0;
						}
					}
					
				}
		
	},

	godie:function(){

		game.sm.direns1 = _.without(game.sm.direns1 , this);

		
	},
	render:function(){
			game.ctx.drawImage(this.images, this.x, this.y);
		
	}
});
