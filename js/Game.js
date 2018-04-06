 var Game =  Class.extend({

 		init: function(){
 			this.fenshu = 0;
 			this.wudi = false;
 			this.wudi1 = false;
 			this.canvas = document.getElementById("canvas");

 			this.keys = 0;

 			this.width = 512;

 			this.height = 600;

 			this.siw = 200;

 			this.canvas.width = this.width;

 			this.canvas.height = this.height;

 			this.canvas.style.display = "block";

 			this.ctx = this.canvas.getContext("2d");

 			this.R = {
 				"bg" : "images/bg.jpg",
 				"bg2" : "images/bg2.jpg",
 				"my1" : "images/my1.png",
 				"my2" : "images/my2.png",
 				"my3" : "images/my3.png",
 				"my4" : "images/my4.png",
 				"my5" : "images/my5.png",
 				"di1" : "images/di1.png", 
 				"di2":"images/di2.png", 
 				"di3":"images/di3.png",
 				"zd" : "images/zd.png",
 				"zd2" : "images/zd2.png",
 				"zd3" : "images/zd3.png",
 				"dzd1" : "images/dzd1.png",
 				"dzd2" : "images/dzd2.png",
 				"dadao0" : "images/dadao1.png",
 				"dadao1" : "images/dadao2.png",
 				"dadao2" : "images/dadao3.png",
 				"zdz" : "images/zdz.png",
 				"fuzhao" : "images/fuzhao.png",
 				"boss1":"images/boss1.png",
 				"pd" : "images/pd.png",
 				"bgm" : "images/bgm.jpg",
 				"logo" : "images/logo.png",
 				"ks" : "images/ks.png",
 				"over" : "images/over.png",
 				"bbb1" : "images/bbb1.png",
 				"bbb2" : "images/bbb2.png",
 				"bbb3" : "images/bbb3.png",
 				"bbb4" : "images/bbb4.png",
 				"bbb5" : "images/bbb5.png",
 				"bbb6" : "images/bbb6.png",
 				"bbb7" : "images/bbb7.png",
 				"bbb8" : "images/bbb8.png",
 				"bbb9" : "images/bbb9.png",
 				"bbb10" : "images/bbb10.png",
 				"bbb11" : "images/bbb11.png",
 				"bao1" : "images/bao1.png",
 				"bao2" : "images/bao2.png",
 				"bao3" : "images/bao3.png",
 				"bao4" : "images/bao4.png",
 				"bao5" : "images/bao5.png",
 				"bao6" : "images/bao6.png",
 				"bao7" : "images/bao7.png",
 				"bao8" : "images/bao8.png",
 				"bao9" : "images/bao9.png",
 				"bao10" : "images/bao10.png",
 				"bao11" : "images/bao11.png",
 				"bao12" : "images/bao12.png",
 				"bao13" : "images/bao13.png",
 				"bao14" : "images/bao14.png",
 				"bao15" : "images/bao15.png",
 				"bao16" : "images/bao16.png",
 				"bao17" : "images/bao17.png",
 				"bao18" : "images/bao18.png",
 				"bao19" : "images/bao19.png",
 				"bao20" : "images/bao20.png",
 				"bao21" : "images/bao21.png",
 				"bao22" : "images/bao22.png",
 				"bao23" : "images/bao23.png",
 				"bao24" : "images/bao24.png",
 				"bao25" : "images/bao25.png",
 				"bao26" : "images/bao26.png",
 				"bao27" : "images/bao27.png",
 				"bao28" : "images/bao28.png",
 				"bao29" : "images/bao29.png",
 				"bao30" : "images/bao30.png",
 				"bao31" : "images/bao31.png",
 				"bao32" : "images/bao32.png",
 				"bosszd" :"images/bosszd.png",
 				"bosszd2" :"images/bosszd2.png",
 				"dijizd" :"images/dijizd.png",
 				
 				"ying" : "images/ying.png",
 				"sj" :"images/sj.png",
 				"sj2" :"images/sj2.png"
  			}
 			var self = this;

 			this.loadResources(function(){
 				self.start();
 			})


 		},

 		loadResources: function(callback){

 			var count = 0;

 			var length = Object.keys(this.R).length;

 			for(var k in this.R){
 				
 				var image = new Image();
 				image.src = this.R[k];
 				this.R[k] = image;
 				var self = this;
				
 				image.onload = function(){
 				
 					count++;

 					self.clear();

 					self.ctx.font = "14px 微软雅黑";

 					self.ctx.fillAlign = "center";

 					self.ctx.fillText("正在加载图片" + count + "/" + length + "... 请稍后" , self.width / 2 , 100);

 					if (count == length) {
					
 						callback();
 					}

 				}
 			}
 		},
 		clear:function(){

 			this.ctx.clearRect(0 , 0 , this.width , this.height);
 		},
 		start: function(){

 			this.sm = new SceneManager();

 			this.f = 0;
 			var self = this;
 			this.timer = setInterval(function(){
 				self.f++;

 				self.clear(); 
 				self.sm.updateandrender();

 				
 			
 			},20)
 		}

 })