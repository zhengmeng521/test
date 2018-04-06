var Map = Class.extend({

	init:function(){

		this.image = game.R["bg"];

		this.y = 0;
	},
	updata:function(){
		this.y ++;
		if(this.y > 768){
			this.y = 0;
		}
	},
	render:function(){
		game.ctx.drawImage(this.image , 0 , this.y);
		game.ctx.drawImage(this.image , 0 , this.y - 768);
	}
})