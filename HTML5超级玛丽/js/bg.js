// JavaScript Document
//定义背景的对象
	var bgarr=[];
	var bgarr2=[];
	var mgind=[];
	var bgza=[];
	var yza=[];
	var jfa=[];
	var mgza=[];
	var xrza=[];
	var bglu=[];
	var bulu=[];
	var mg=[];
	var huaa=[];
	var zza=[];
	var zjfa=[];
	var zjfao=[];
	var jlda=[];
	var arr=[];
	var gwd=[];
	var bg=function(tx,ty,tw,th,cx,cy,cw,ch,vx){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;
	}
	var za=function(ztx,zty,ztw,zth,zcx,zcy,zcw,zch,zvx){
		this.ztx=ztx;this.zty=zty;this.ztw=ztw;this.zth=zth;this.zcx=zcx;this.zcy=zcy;this.zcw=zcw;this.zch=zch;this.zvx=zvx;
	}
	var fyza=function(ytx,yty,ytw,yth,ycx,ycy,ycw,ych,yvx){
		this.ytx=ytx;this.yty=yty;this.ytw=ytw;this.yth=yth;this.ycx=ycx;this.ycy=ycy;this.ycw=ycw;this.ych=ych;this.yvx=yvx;
	}
	var fjfa=function(ftx,fty,ftw,fth,fcx,fcy,fcw,fch,fvx,fgs){
		this.ftx=ftx;this.fty=fty;this.ftw=ftw;this.fth=fth;this.fcx=fcx;this.fcy=fcy;this.fcw=fcw;this.fch=fch;this.fvx=fvx;this.fgs=fgs;
	}
	var fmgz=function(mol,mtx,mty,mtw,mth,mcx,mcy,mcw,mch,mvx,mgs,mgg){
		this.mol=mol;this.mtx=mtx;this.mty=mty;this.mtw=mtw;this.mth=mth;this.mcx=mcx;this.mcy=mcy;this.mcw=mcw;this.mch=mch;this.mvx=mvx;this.mgs=mgs;this.mgg=mgg;
	}
	var xrz=function(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,zgs,dz,stp,sbp){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.gs=gs;this.zgs=zgs;this.dz=dz;this.stp=stp;this.sbp=sbp;
	}
	var lu=function(tx,ty,tw,th,cx,cy,cw,ch,vx){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;
	}
	var gk=function(tx,ty,tw,th,cx,cy,cw,ch,vx,vy){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;
	}
	var cao=function(x,y,vx){
		this.x=x;this.y=y;this.vx=vx;	
	}
	var mgf=function(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp,sq,zaw){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.stp=stp;this.sq=sq;this.zaw=zaw;
	}
	var hua=function(tx,ty,tw,th,cx,cy,cw,ch,vx,stp,sq){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.stp=stp;this.sq=sq;
	}
	var zz=function(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp){
		this.ol=ol;this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.stp=stp;
	}
	var zjf=function(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp){
		this.ol=ol;this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.stp=stp;
	}
	var zjfo=function(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,zgs){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.gs=gs;this.zgs=zgs;
	}
	var jld=function(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs){
		this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.gs=gs;this.yjs=yjs;
	}
	var gw=function(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,sv,zaw,zsm,zt,sm){
		this.ol=ol;this.tx=tx;this.ty=ty;this.tw=tw;this.th=th;this.cx=cx;this.cy=cy;this.cw=cw;this.ch=ch;this.vx=vx;this.vy=vy;this.gs=gs;this.sv=sv;this.zaw=zaw;this.zsm=zsm;this.zt=zt;this.sm=sm;
	}
	
	



function createBg2(n){
	for(var i=0;i<55;i++){
		tx=133;   
		ty=0;   
		tw=125;  
		th=400; 
		cx=n+i*125;	
		cy=70+Math.floor(Math.random()*150); 
		cw=125; 
		ch=400; 
		vx=0;  
		bgarr2.push(new bg(tx,ty,tw,th,cx,cy,cw,ch,vx));		
	}
}
function createBg(n){
	for(var i=0;i<80;i++){
		tx=0;   
		ty=0;  
		tw=127; 
		th=400; 
		cx=n+(i*120)+Math.floor(Math.random()*50);	
		cy=120+Math.floor(Math.random()*200); 
		cw=127;  
		ch=400;  
		vx=0;   
		bgarr.push(new bg(tx,ty,tw,th,cx,cy,cw,ch,vx));		
	}
}
function createcj(){
	for(var i=0;i<65;i++){
		if(i==0){
			tx=532;   
			ty=0;   
			tw=210;  
			th=180; 
			cx=0;	
			cy=360; 
			cw=210; 
			ch=180; 
			vx=0;  
		}else if(i>60){
			tx=532;   
			ty=0;   
			tw=210;  
			th=180; 
			cx=(bglu[i-1].cx+bglu[i-1].cw)-7;	
			cy=360; 
			cw=210; 
			ch=180; 
			vx=0; 
			if(i==63){
				gk={
					ktx:0,
					kty:34,
					ktw:100,
					kth:250,
					kcx:cx,	
					kcy:cy-250,
					kcw:100,
					kch:250,
					kvx:0
				};
				gkf={
					ktx:0,
					kty:0,
					ktw:51,
					kth:17,
					kcx:cx+20,	
					kcy:cy-17,
					kcw:51,
					kch:17,
					kvx:0,
					kvy:3
				};
			} 
		}else{
			var n=Math.floor(Math.random()*10);
			var s=Math.floor(Math.random()*10);
			tx=524;   
			ty=0;   
			tw=218;  
			th=180; 
			cx=i*218;	
			cy=360;
			cw=218; 
			ch=180; 
			vx=0; 
			if(n<4){
				var n1=Math.floor(Math.random()*3)
				if(n1==0){var g=40}else if(n1==1){var g=70}else if(n1==2){var g=100}
				cy=360-g;
			}else{
				cy=360;
			}
			if(s<1){
				cx=(bglu[i-1].cx+bglu[i-1].cw)+80+Math.floor(Math.random()*75);
				cy=bglu[i-1].cy;
				tx=524;
				tw=218;
				cw=180;
			}else{
				if(cy<bglu[i-1].cy){
					cx=(bglu[i-1].cx+bglu[i-1].cw)-8;
					tx=524;
					tw=218;
					cw=218;
					
					x=cx-5;
					y=bglu[i-1].cy+6;
					vx=0;
					bulu.push(new cao(x,y,vx));
				}else if(cy==bglu[i-1].cy){
					cx=(bglu[i-1].cx+bglu[i-1].cw)-7;
					tx=532;
					tw=210;
					cw=210;
					
					if(cy<360){
						var n2=Math.floor(Math.random()*3);
						var s1=Math.floor(Math.random()*3);
						if(s1>0){
							if(n2==0){ 
								ztx=0;   
								zty=0;  
								ztw=220;  
								zth=275;  
								zcx=bglu[i-1].cx+100;
								if(bgza[i-1]&&bgza[i-1].zcx+bgza[i-1].zcw>zcx){
									zcx=bgza[i-1].zcx+bgza[i-1].zcw+10;	
								}
								zcy=bglu[i-1].cy-(150+Math.floor(Math.random()*50));
								zcw=220;  
								zch=275;  
								zvx=0;
							}else if(n2==1){
								ztx=221;   
								zty=0;  
								ztw=97;  
								zth=275;  
								zcx=bglu[i-1].cx+150;
								if(bgza[i-1]&&bgza[i-1].zcx+bgza[i-1].zcw>zcx){
									zcx=bgza[i-1].zcx+bgza[i-1].zcw+10;	
								}
								zcy=bglu[i-1].cy-(150+Math.floor(Math.random()*80));
								zcw=97;  
								zch=275;  
								zvx=0;
							}else if(n2==2){
								ztx=319;   
								zty=0;  
								ztw=139;  
								zth=275;  
								zcx=bglu[i-1].cx+100;
								if(bgza[i-1]&&bgza[i-1].zcx+bgza[i-1].zcw>zcx){
									zcx=bgza[i-1].zcx+bgza[i-1].zcw+10;	
								}
								zcy=bglu[i-1].cy-(150+Math.floor(Math.random()*60));
								zcw=139;  
								zch=275;  
								zvx=0;
							}
							bgza.push(new za(ztx,zty,ztw,zth,zcx,zcy,zcw,zch,zvx));	
							var n3=Math.floor(Math.random()*2);
							if(n3==0){
								
								var f=3+Math.floor(Math.random()*3)
								for(var j=0;j<f;j++){
									ftx=744;   
									fty=64;  
									ftw=32;  
									fth=32;  
									fcx=(bglu[i-1].cx+80)+j*32;
									fcy=bglu[i-1].cy-70;
									fcw=32;  
									fch=32;  
									fvx=0;
									fgs=0;
									jfa.push(new fjfa(ftx,fty,ftw,fth,fcx,fcy,fcw,fch,fvx,fgs));
									
									var z=Math.floor(Math.random()*2);
									if(z==0){
										mol=0;
										mtx=872;   
										mty=31;  
										mtw=32;  
										mth=32;  
										mcx=(bglu[i-1].cx+80)+j*32;
										mcy=bglu[i-1].cy-130;
										mcw=32;  
										mch=32;  
										mvx=0;
										mgs=0;
										mgg=mcy;
									}else{
										mol=1;
										mtx=744;   
										mty=31;  
										mtw=32;  
										mth=32;  
										mcx=(bglu[i-1].cx+80)+j*32;
										mcy=bglu[i-1].cy-130;
										mcw=32;  
										mch=32;  
										mvx=0;
										mgs=0;
										mgg=mcy;
									}
									mgza.push(new fmgz(mol,mtx,mty,mtw,mth,mcx,mcy,mcw,mch,mvx,mgs,mgg));
								
								}
								
							}else if(n3==1){
								
								var m=3+Math.floor(Math.random()*3)
								for(var j=0;j<m;j++){
									var z=Math.floor(Math.random()*2)
									if(z==0){
										mol=0;
										mtx=872;   
										mty=31;  
										mtw=32;  
										mth=32;  
										mcx=(bglu[i-1].cx+80)+j*32;
										mcy=bglu[i-1].cy-130;
										mcw=32;  
										mch=32;  
										mvx=0;
										mgs=0;
										mgg=mcy;
									}else{
										mol=1;
										mtx=744;   
										mty=31;  
										mtw=32;  
										mth=32;  
										mcx=(bglu[i-1].cx+80)+j*32;
										mcy=bglu[i-1].cy-130;
										mcw=32;  
										mch=32;  
										mvx=0;
										mgs=0;
										mgg=mcy;
									}
									mgza.push(new fmgz(mol,mtx,mty,mtw,mth,mcx,mcy,mcw,mch,mvx,mgs,mgg));
								}
								
							}
						}else if(s1==0){
						
							ytx=459
							yty=0;
							ytw=64;
							yth=200;
							ycx=bglu[i-1].cx+100;
							ycy=bglu[i-1].cy-(80+Math.floor(Math.random()*50));
							ycw=64;
							ych=200;
							yvx=0;
							yza.push(new fyza(ytx,yty,ytw,yth,ycx,ycy,ycw,ych,yvx));
							
						}
						
					}else{
						var n4=Math.floor(Math.random()*3)
						if(n4==0){
							
							var f=3+Math.floor(Math.random()*3)
							for(var j=0;j<f;j++){
								ftx=744;   
								fty=64;  
								ftw=32;  
								fth=32;  
								fcx=(bglu[i-1].cx+80)+j*32;
								fcy=bglu[i-1].cy-70;
								fcw=32;  
								fch=32;  
								fvx=0;
								fgs=0;
								jfa.push(new fjfa(ftx,fty,ftw,fth,fcx,fcy,fcw,fch,fvx,fgs));
							}
							
						}else if(n4==1){
							
							var m=3+Math.floor(Math.random()*3)
							for(var j=0;j<m;j++){
								var z=Math.floor(Math.random()*2)
								if(z==0){
									mol=0;
									mtx=872;   
									mty=31;  
									mtw=32;  
									mth=32;  
									mcx=(bglu[i-1].cx+80)+j*32;
									mcy=bglu[i-1].cy-130;
									mcw=32;  
									mch=32;  
									mvx=0;
									mgs=0;
									mgg=mcy;
								}else{
									mol=1;
									mtx=744;   
									mty=31;  
									mtw=32;  
									mth=32;  
									mcx=(bglu[i-1].cx+80)+j*32;
									mcy=bglu[i-1].cy-130;
									mcw=32;  
									mch=32;  
									mvx=0;
									mgs=0;
									mgg=mcy;
								}
								mgza.push(new fmgz(mol,mtx,mty,mtw,mth,mcx,mcy,mcw,mch,mvx,mgs,mgg));
							}
							
						}
					}
					
				}else{
					cx=(bglu[i-1].cx+bglu[i-1].cw)-5;
					tx=532;
					tw=210;
					cw=210;
				}
			} 
		}
		bglu.push(new lu(tx,ty,tw,th,cx,cy,cw,ch,vx));
	}
}
function xrzfc(){
	for(var i=0;i<yza.length;i++){
		var t=Math.floor(Math.random()*1);	
		if(t==0){
			tx=0;
			ty=389;
			tw=33;
			th=42;
			cx=yza[i].ycx+(yza[i].ycw/2)-16;
			cy=yza[i].ycy+(yza[i].ych/2);
			cw=33;
			ch=42;
			vx=0;
			vy=2;
			gs=0;
			zgs=0;
			dz=false;
			stp=yza[i].ycy-120;
			sbp=yza[i].ycy+(yza[i].ych/2);
			xrza.push(new xrz(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,zgs,dz,stp,sbp));	
		}
	}
}
function addgw(ns){
	var gwsy=arr.length;
	for(var i=gwsy;i<ns+gwsy;i++){
		var n=Math.floor(Math.random()*4);
		if(n==0){
			ol=0;  
			tx=0;  
			ty=56; 
			tw=34;
			th=53; 
			cx=800+(i*100);
			cy=0;
			cw=34; 
			ch=53;
			vx=-2; 
			vy=0;  
			gs=0;  
			sv=34;
			zaw=false;
			zsm=null;
			zt=true; 
			sm=true; 
		}else if(n==1){
			ol=1; 
			tx=0; 
			ty=176; 
			tw=34; 
			th=53; 
			cx=800+(i*100);
			cy=0; 
			cw=34; 
			ch=53;  
			vx=-2;  
			vy=0;   
			gs=0;   
			sv=34; 
			zaw=false;
			zsm=null;
			zt=true 
			sm=true; 
		}else if(n==2){
			ol=2;  
			tx=0;   
			ty=278; 
			tw=34;  
			th=33;  
			cx=800+(i*100);
			cy=0;
			cw=34; 
			ch=33; 
			vx=-2;  
			vy=0;  
			gs=0;  
			sv=34; 
			zaw=false;
			zsm=null;
			zt=true 
			sm=true; 
		}else if(n==3){
			ol=3;  
			tx=0;  
			ty=343;
			tw=32; 
			th=33; 
			cx=800+(i*100);
			cy=0; 
			cw=32; 
			ch=33;  
			vx=-2;   
			vy=0;  
			gs=0;  
			sv=32;  
			zaw=false; 
			zsm=null;
			zt=true; 
			sm=true; 
		}
		arr.push(new gw(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,sv,zaw,zsm,zt,sm));		
	}
}




