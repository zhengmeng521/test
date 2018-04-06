var SceneManager = Class.extend({
	init : function(){
		this.scenenumber = 1;	 


		this.changeScene(1);

	
		this.bindEvent();
	},
	changeScene : function(number){
		this.scenenumber = number;	 
		switch(this.scenenumber){
			case 1 : 

			 	this.titleY = -48;
			 	
			 	this.titleYtarget = 160;
			
			 	this.buttonY = game.height;
			
			 	this.buttonYtarget = 360;
				break;
			case 2 :
				this.dir = 200;
				this.map = new Map();
 				this.role = new Role();

				this.direns = [];
				this.direns1 = [];
				this.direns3 = [];
 				this.zds = [];
 				this.boss = [];
 				this.dzd = [];
				break;
			case 3:
				
			 	this.overY = -48;
			 
			 	this.overYtarget = 160;

			 	this.bombNumber = 1;
			case 4:
				
			 	this.ying = -48;
			 
			 	this.yingl = 160;

			 	this.yingbNumber = 1;
		}
	},

	updateandrender : function(){
		switch(this.scenenumber){
			case 1 : 

				game.f = 0;
				game.fenshu = 0;
				game.siw = 200;
				game.ctx.drawImage(game.R["bgm"] , 0 , 0);
				
				
			 	myVideo1.play();
				
				this.titleY += 6;
				if(this.titleY > this.titleYtarget){
					this.titleY = this.titleYtarget;
				}
				game.ctx.drawImage(game.R["logo"] , (game.width - 382) / 2 , this.titleY , 382 , 119);

				
				this.buttonY -= 8;
				if(this.buttonY < this.buttonYtarget){
					this.buttonY = this.buttonYtarget;
				}

				game.ctx.drawImage(game.R["ks"] , (game.width - 161) / 2 , this.buttonY);

				break;
			case 2 : 
				fen.innerHTML = game.fenshu;
				if(game.f % 100 == 0){
					this.dir -= 20;
					if(this.dir < 50){
						this.dir = 50 ;
					}
				}
				if(game.f == 3000){
 					new Dboss();
 					
 				}

 				if(game.f > 3000){
 						for (var i = 0; i < 30; i++) {
 							var fx = i * Math.PI / 15
 							game.f % 50 == 0 && new Dzd(fx , 0 ,0);
 						}
 					
 					}
 				if(game.f == 2900){

 						myVideo3.play();
 						myVideo2.pause();
 						
 					}
 				if(game.f > 2850){
 					body.style.backgroundImage = "url(images/bg2.jpg)";
 					game.sm.map.image = game.R["bg2"];
 				}
 				if(game.f <= 2850){
 					// myVideo3.pause();
 					
 					if(game.f % 300 == 0){
 						for (var i = 0; i < 6; i++) {
 							new Diren2(i)		
 						}
 					}else if(game.f == 1000 || game.f == 1500 || game.f == 2000){
 						new Diren1(214);
 						
 						
 					}
 					else{
 						game.f % this.dir == 0 && new Diren();
 					}
		 					
 					if(this.direns1.length != 0){
 					
		 					
		 				if(game.f % 30 == 0){
		 					for (var i = 0; i < 30; i++) {
		 						var fx = i * Math.PI / 15
		 						new Dzd(fx , 1 , 1);		
		 					}	
		 				}			
		 				
 					}
 				}
 					
 				if(this.role.zdnum == 2){
 					game.f % 10 == 0 && new Zd(0);
 					game.f % 10 == 0 && new Zd(1);
 					game.f % 10 == 0 && new Zd(2);
 					

 				}else if(this.role.zdnum == 3){
 					game.f % 10 == 0 && new Zd(0);
 					game.f % 10 == 0 && new Zd(1);
 					game.f % 10 == 0 && new Zd(2);
 					game.f % 10 == 0 && new Zd(3);
 					game.f % 10 == 0 && new Zd(4);
 				}else{
 					if(this.role.num <= 7){
 						game.f % (10 - this.role.num) == 0 && new Zd();
 					}else{
 						game.f % 3 == 0 && new Zd();
 					}
 					
					
 				}
              
              					
 				this.keyU == 1 && this.role.goUp();

 				this.keyL == 1 && this.role.goLeft();

 				this.keyR == 1 && this.role.goRight();

 				this.keyD == 1 && this.role.goDown();

 				this.map.updata();

 				this.map.render();

 				this.role.updata();

 				this.role.render();


 				
 				for (var i = 0; i < this.direns.length; i++) {
 					this.direns[i].updata();
 					this.direns[i] && this.direns[i].render();
 					
 				}
 				for (var i = 0; i < this.direns1.length; i++) {
 					this.direns1[i].updata();
 					this.direns1[i] && this.direns1[i].render();
 					
 				}
 				for (var i = 0; i < this.direns3.length; i++) {
 					this.direns3[i].updata();
 					this.direns3[i] && this.direns3[i].render();
 					
 				}
 				for (var i = 0; i < this.zds.length; i++) {
 					this.zds[i].updata();
 					this.zds[i] && this.zds[i].render();
 					
 				}
 				for (var i = 0; i < this.dzd.length; i++) {
 					this.dzd[i].updata();
 					this.dzd[i] && this.dzd[i].render();
 					
 				}
 				for (var i = 0; i < this.boss.length; i++) {
 					this.boss[i].updata();
 					this.boss[i].render();
 				}
 				game.ctx.strokeRect(0,game.height - 15,200,15);
				game.ctx.fillStyle = "red";
				game.ctx.fillRect(0,game.height - 15,game.siw,15);
				break;
			case 3: 
				
				myVideo8.play();
				myVideo6.play();
				
				this.map.render();
				this.overY += 6;
				if(this.overY > this.overYtarget){
					this.overY = this.overYtarget;
				}
				game.ctx.drawImage(game.R["over"] , (game.width - 382) / 2 , this.overY , 382 , 119);
				if(game.f % 2 == 0) this.bombNumber ++;
				if (this.bombNumber < 12) {
					game.ctx.drawImage(game.R["bbb" + this.bombNumber] , this.role.x - 200 , this.role.y - 200);
				}
					 
				

				
				
				break;
			case 4: 
				
				myVideo9.play();
				myVideo5.play();
				
				this.map.render();
				this.role.render();
				
				if(game.f % 5 == 0) this.yingbNumber++;
				if (this.yingbNumber < 33) {
					
					game.ctx.drawImage(game.R["bao" + this.yingbNumber] ,0, 0 , 512, 512);
				}
					 
				this.ying += 6;
				if(this.ying > this.yingl){
					this.ying = this.yingl;
				}
				game.ctx.drawImage(game.R["ying"] , (game.width - 382) / 2 , this.ying , 382 , 119);

				
				
				break;
		}
	},

	bindEvent : function(){
		var self = this;
		game.canvas.onmousedown = function(event){
			var x = event.offsetX;
			var y = event.offsetY;
			console.log(game.scenenumber);
			switch(self.scenenumber){
				case 1 : 
					if(x >= (game.width - 161) / 2 && x <= (game.width + 161) / 2 && y >= self.buttonY && y <= self.buttonY + 67){
						myVideo1.pause();
						myVideo2.currentTime = 0;
						myVideo2.play();
						body.style.backgroundImage = "url(images/bg.jpg)";
						self.changeScene(2);

				
					}
					break;
				case 3 : 
				myVideo6.pause();
				myVideo8.pause();
					body.style.backgroundImage = "url(images/bgm.jpg)";
					self.changeScene(1);
					break;
				case 4 : 
				myVideo9.pause();
				myVideo5.pause();
					myVideo1.currentTime = 0;
					body.style.backgroundImage = "url(images/bgm.jpg)";
					self.changeScene(1);
			}
		}
		document.onkeydown = function(event){
 				if (event.keyCode == 38) {

 					self.keyU = 1;
 					
 				}
 				if (event.keyCode == 37) {

 					self.keyL = 1;
 				}
 				if (event.keyCode == 39) {

 					self.keyR = 1;
 					
 				}
 				if (event.keyCode == 40) {

 					self.keyD = 1;
 				}
 			}
 			document.onkeyup = function(event){
 				if (event.keyCode == 38) {

 					self.keyU = 0;
 					
 				}
 				if (event.keyCode == 37) {

 					self.keyL = 0;
 				}
 				if (event.keyCode == 39) {

 					self.keyR = 0;
 					
 				}
 				if (event.keyCode == 40) {

 					self.keyD = 0;
 				}
 			}
	}
});
