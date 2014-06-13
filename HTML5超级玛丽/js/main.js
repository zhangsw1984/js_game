// JavaScript Document
function bgimg(){
	for(var i=0;i<bgarr2.length;i++){
		if(bgjsqty){
			bgarr2[i].vx=jl.speedx-jl.speedx*0.7;
		}else{
			bgarr2[i].vx=0;
		}
		bgarr2[i].cx-=bgarr2[i].vx;
		ctx.drawImage(bgt,bgarr2[i].tx,bgarr2[i].ty,bgarr2[i].tw,bgarr2[i].th,bgarr2[i].cx,bgarr2[i].cy,bgarr2[i].cw,bgarr2[i].ch);
		if(bgarr2[i].cx<-300){
			bgarr2.splice(i,1);
		}
	}
	for(var i=0;i<bgarr.length;i++){
		if(bgjsqty){
			bgarr[i].vx=jl.speedx-jl.speedx*0.35;
		}else{
			bgarr[i].vx=0;
		}
		bgarr[i].cx-=bgarr[i].vx;
		ctx.drawImage(bgt,bgarr[i].tx,bgarr[i].ty,bgarr[i].tw,bgarr[i].th,bgarr[i].cx,bgarr[i].cy,bgarr[i].cw,bgarr[i].ch);
		if(bgarr[i].cx<-300){
			bgarr.splice(i,1);
		}
	}	
}
function zab(){
	for(var i=0;i<bgza.length;i++){
		if(bgjsqty){
			bgza[i].zvx=jl.speedx;
		}else{
			bgza[i].zvx=0;
		}
		bgza[i].zcx-=bgza[i].zvx;
		
		if(jl.sm){
			if(jl.cx+jl.w>bgza[i].zcx&&jl.cx<bgza[i].zcx+bgza[i].zcw){
				if(jl.buttom){
					if(jl.cy+jl.h-jl.speedy<=bgza[i].zcy){
						if(jl.cy+jl.h+jl.speedy>bgza[i].zcy){
							jl.cy=jl.cury=bgza[i].zcy-jl.h;
							jl.buttom=false;
							jl.top=false;
							jl.zaw=true;
						}
					}
				}
			}
		}
		
		ctx.drawImage(zr,bgza[i].ztx,bgza[i].zty,bgza[i].ztw,bgza[i].zth,bgza[i].zcx,bgza[i].zcy,bgza[i].zcw,bgza[i].zch);
	}	
}
function yzafc(){
	for(var i=0;i<yza.length;i++){
		if(bgjsqty){
			yza[i].yvx=jl.speedx;
		}else{
			yza[i].yvx=0;
		}
		yza[i].ycx-=yza[i].yvx;
		
		if(jl.sm){
			if(jl.cx+jl.w>yza[i].ycx&&jl.cx<yza[i].ycx+yza[i].ycw){
				if(jl.buttom){
					if(jl.cy+jl.h-jl.speedy<=yza[i].ycy){
						if(jl.cy+jl.h+jl.speedy>yza[i].ycy){
							jl.cy=jl.cury=yza[i].ycy-jl.h;
							jl.buttom=false;
							jl.top=false;
							jl.zaw=true;
						}
					}
				}else{
					if(jl.cy+jl.h>yza[i].ycy){
						if(jl.y==0||jl.y==67||jl.y==171){
							jl.cx=yza[i].ycx-jl.w;
						}else{
							jl.cx=yza[i].ycx+yza[i].ycw;
						}
					}
				}
			}
		}
		
		ctx.drawImage(zr,yza[i].ytx,yza[i].yty,yza[i].ytw,yza[i].yth,yza[i].ycx,yza[i].ycy,yza[i].ycw,yza[i].ych);
	}		
}
function xrzf(){
	for(var i=0;i<xrza.length;i++){
		if(xrza[i].dz==false){
			if(bgjsqty){
					xrza[i].vx=jl.speedx;
				}else{
					xrza[i].vx=0;
			}
			xrza[i].cx-=xrza[i].vx;
			xrza[i].gs++;
			if(xrza[i].gs>=5){
				xrza[i].tx+=xrza[i].cw;
				if(xrza[i].tx>=xrza[i].cw*4){
					xrza[i].tx=0;
				}
				xrza[i].gs=0;	
			}
			xrza[i].cy-=xrza[i].vy;
			if(xrza[i].cy>=xrza[i].sbp||xrza[i].cy<=xrza[i].stp){
				xrza[i].vy*=-1;
			}
			if(jl.cx+jl.cw>xrza[i].cx&&jl.cx<xrza[i].cx+xrza[i].cw&&jl.cy+jl.ch>xrza[i].cy&&jl.cy<xrza[i].cy+xrza[i].ch&&jl.sm){
				if(!jl.zgs){
					if(jl.ol==1){
						jlover();
					}else if(jl.ol==2){
						jl.gd=true;
						jl.prool=2;
						jl.nextol=1;
					}else if(jl.ol==3){
						jl.gd=true;
						jl.prool=3;
						jl.nextol=2;
					}
				}
			}
		}else{
			xrza[i].cx+=xrza[i].vx;
			xrza[i].cy+=xrza[i].vy;
		}
		ctx.drawImage(imggw,xrza[i].tx,xrza[i].ty,xrza[i].tw,xrza[i].th,xrza[i].cx,xrza[i].cy,xrza[i].cw,xrza[i].ch);
		if(xrza[i].cy>400){xrza.splice(i,1);}
	}
	
}
function jfafc(){
	for(var i=0;i<jfa.length;i++){
		if(bgjsqty){
			jfa[i].fvx=jl.speedx;
		}else{
			jfa[i].fvx=0;
		}
		jfa[i].fcx-=jfa[i].fvx;
		jfa[i].fgs++;
		if(jfa[i].fgs>=5){
			jfa[i].ftx+=jfa[i].fcw;
			if(jfa[i].ftx>=744+jfa[i].fcw*4){
				jfa[i].ftx=744;
			}
			jfa[i].fgs=0;	
		}
		ctx.drawImage(zr,jfa[i].ftx,jfa[i].fty,jfa[i].ftw,jfa[i].fth,jfa[i].fcx,jfa[i].fcy,jfa[i].fcw,jfa[i].fch);
		
		if(jl.cx+jl.w>jfa[i].fcx&&jl.cx<jfa[i].fcx+jfa[i].fcw&&jl.cy+jl.h>jfa[i].fcy&&jl.cy<jfa[i].fcy+jfa[i].fch){
			for(var j=0;j<3;j++){
				ol=j;
				tx=744;
				ty=0;
				tw=15;
				th=15;
				cx=jfa[i].fcx;
				cy=jfa[i].fcy;
				cw=15;
				ch=15;
				vx=5;
				vy=12;
				stp=0;
				zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
			}
			jfa.splice(i,1);
			
			document.getElementById('jinb').play();
			jljb++;
		}
		
	}		
}
function huafc(){
	
	for(var i=0;i<huaa.length;i++){
		if(bgjsqty){
			huaa[i].vx=jl.speedx;
		}else{
			huaa[i].vx=0;
		}
		huaa[i].cx-=huaa[i].vx;
		if(huaa[i].cy+huaa[i].ch>huaa[i].stp){huaa[i].cy--;}
		if(huaa[i].cy+huaa[i].ch<=huaa[i].stp){huaa[i].sq=true;}
		ctx.drawImage(zr,huaa[i].tx,huaa[i].ty,huaa[i].tw,huaa[i].th,huaa[i].cx,huaa[i].cy,huaa[i].cw,huaa[i].ch);
		
		if(huaa[i].sq){
			if(jl.cx+jl.w>huaa[i].cx&&jl.cx<huaa[i].cx+huaa[i].cw&&jl.cy+jl.h>huaa[i].cy&&jl.cy<huaa[i].cy+huaa[i].ch){
				if(huaa[i].cx<-100){huaa.splice(i,1);}
				huaa.splice(i,1);
				if(jl.ol==1){
					jl.gd=true;
					jl.prool=1;
					jl.nextol=3;
				}else if(jl.ol==2){
					jl.gd=true;
					jl.prool=1;
					jl.nextol=3;
				}
				
				document.getElementById('chid').play();
			}
		}
		
	}
	
}
function mgfc(){
	
	for(var i=0;i<mg.length;i++){
		if(!mg[i].sq){
			mg[i].cy--;
			if(bgjsqty){
				mg[i].vx=jl.speedx;
			}else{
				mg[i].vx=0;
			}
			mg[i].cx-=mg[i].vx;
			if(mg[i].cy+mg[i].ch<=mg[i].stp){
				mg[i].sq=true;	
				mg[i].vx=3;
			}
		}else{
			mg[i].zaw=false;
			mg[i].cx+=mg[i].vx+jj;
			mg[i].cy+=mg[i].vy;	
			
			for(var j=0;j<mgza.length;j++){
				if(mg[i].cx+mg[i].cw>mgza[j].mcx&&mg[i].cx<mgza[j].mcx+mgza[j].mcw&&mg[i].cy+mg[i].ch<=mgza[j].mcy){
					mg[i].zaw=true;
				}
			}
			
			if(mg[i].zaw==false){
				mg[i].vy=5;
			}
			
			for(var j=0;j<bglu.length;j++){
				if(mg[i].cx+mg[i].cw>bglu[j].cx&&mg[i].cx<bglu[j].cx+bglu[j].cw){
					if(!mg[i].zaw){
						if(mg[i].cy+mg[i].ch+mg[i].vy>bglu[j].cy){
							if(mg[i].cy<bglu[j].cy){
								mg[i].cy=bglu[j].cy-mg[i].ch;
								mg[i].zaw=true;
								mg[i].vy=0;
							}	
						}
					}else{
						if(mg[i].cy+mg[i].ch>bglu[j].cy){
							mg[i].vx*=-1;	
						}
					}
				}
			}
			
			for(var j=0;j<yza.length;j++){
				if(mg[i].cx+mg[i].cw>yza[j].ycx&&mg[i].cx<yza[j].ycx+yza[j].ycw){
					if(!mg[i].zaw){
						if(mg[i].cy+mg[i].ch>yza[j].ycy){
							mg[i].vx*=-1;
						}
						if(mg[i].cy+mg[i].ch+mg[i].vy>yza[j].ycy){
							if(mg[i].cy<yza[j].ycy){
								mg[i].cy=yza[j].ycy-mg[i].ch;
								mg[i].zaw=true;
								mg[i].vy=0;
							}	
						}
					}else{
						if(mg[i].cy+mg[i].ch>yza[j].ycy){
							mg[i].vx*=-1;
						}
					}
				}
			}
			
		}
		ctx.drawImage(zr,mg[i].tx,mg[i].ty,mg[i].tw,mg[i].th,mg[i].cx,mg[i].cy,mg[i].cw,mg[i].ch);
		
		if(mg[i].sq){
			if(jl.cx+jl.w>mg[i].cx&&jl.cx<mg[i].cx+mg[i].cw&&jl.cy+jl.h>mg[i].cy&&jl.cy<mg[i].cy+mg[i].ch){
				if(mg[i].cx<-100||mg[i].cy>400){mg.splice(i,1);}
				mg.splice(i,1);
				if(jl.ol==1){
					jl.gd=true;
					jl.prool=1;
					jl.nextol=2;
				}
				
				document.getElementById('chid').play();
			}
		}
		
	}
	
}
function zzfc(){
	for(var i=0;i<zza.length;i++){	
		zza[i].stp++;
		if(zza[i].stp==5){
			zza[i].vy*=-1;
		}
		if(zza[i].ol==0){
			zza[i].cx-=zza[i].vx;
			zza[i].cy-=zza[i].vy;
		}
		if(zza[i].ol==1){
			zza[i].cx+=zza[i].vx;
			zza[i].cy-=zza[i].vy;
		}
		if(zza[i].ol==2){
			zza[i].cx-=zza[i].vx;
			zza[i].cy-=zza[i].vy-2;
		}
		if(zza[i].ol==3){
			zza[i].cx+=zza[i].vx;
			zza[i].cy-=zza[i].vy-2;
		}
		ctx.drawImage(zr,zza[i].tx,zza[i].ty,zza[i].tw,zza[i].th,zza[i].cx,zza[i].cy,zza[i].cw,zza[i].ch);
		if(zza[i].stp>=20){zza.splice(i,1);}
	}
}
function zjfofc(){
	for(var i=0;i<zjfao.length;i++){
		if(bgjsqty){
			zjfao[i].vx=jl.speedx;
		}else{
			zjfao[i].vx=0;
		}
		zjfao[i].cx-=zjfao[i].vx;
		zjfao[i].gs++;
		if(zjfao[i].gs>=5){
			zjfao[i].tx+=zjfao[i].cw;
			if(zjfao[i].tx>=744+zjfao[i].cw*4){
				zjfao[i].tx=744
			}
			zjfao[i].gs=0;	
		}	
		zjfao[i].cy-=zjfao[i].vy;
		zjfao[i].zgs++;
		ctx.drawImage(zr,zjfao[i].tx,zjfao[i].ty,zjfao[i].tw,zjfao[i].th,zjfao[i].cx,zjfao[i].cy,zjfao[i].cw,zjfao[i].ch);
		if(zjfao[i].zgs>=10){
			for(var j=0;j<3;j++){
				ol=j;
				tx=744;
				ty=0;
				tw=15;
				th=15;
				cx=zjfao[i].cx;
				cy=zjfao[i].cy+10;
				cw=15;
				ch=15;
				vx=5;
				vy=12;
				stp=0;
				zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
			}
			zjfao.splice(i,1);	
		}
	}
	
}
function zjffc(){
	for(var i=0;i<zjfa.length;i++){	
		if(bgjsqty){
			zjfa[i].vx=jl.speedx;
		}else{
			zjfa[i].vx=0;
		}
		zjfa[i].cx-=zjfa[i].vx;
		zjfa[i].stp++;
		var f=Math.floor(Math.random()*6)-Math.floor(Math.random()*6);
		zjfa[i].cx+=f;
		zjfa[i].cy-=f;
		ctx.drawImage(zr,zjfa[i].tx,zjfa[i].ty,zjfa[i].tw,zjfa[i].th,zjfa[i].cx,zjfa[i].cy,zjfa[i].cw,zjfa[i].ch);
		if(zjfa[i].stp>=10){zjfa.splice(i,1);}
	}
}
function mgzfc(){
	
	if(mgind.length>0){
		for(var i=0;i<mgind.length;i++){
			if(mgind[i].mcy<mgind[i].mgg){
				mgind[i].mcy+=5;
				ctx.drawImage(zr,mgind[i].mtx,mgind[i].mty,mgind[i].mtw,mgind[i].mth,mgind[i].mcx,mgind[i].mcy,mgind[i].mcw,mgind[i].mch);
				if(mgind[i].mcy==mgind[i].mgg){
					mgind.splice(i,1);
				}
			}
		}
	}
	
	for(var i=0;i<mgza.length;i++){
		if(bgjsqty){
			mgza[i].mvx=jl.speedx;
		}else{
			mgza[i].mvx=0;
		}
		mgza[i].mcx-=mgza[i].mvx;
		if(mgza[i].mol==1){
			mgza[i].mgs++;
			if(mgza[i].mgs>=5){
				mgza[i].mtx+=mgza[i].mcw;
				if(mgza[i].mtx>=744+mgza[i].mcw*4){
					mgza[i].mtx=744;
				}
				mgza[i].mgs=0;	
			}
		}else{
			mgza[i].mgs++;
			if(mgza[i].mgs>=5){
				mgza[i].mtx+=mgza[i].mcw;
				if(mgza[i].mtx>=872+mgza[i].mcw*4){
					mgza[i].mtx=872;
				}
				mgza[i].mgs=0;	
			}
		}
		ctx.drawImage(zr,mgza[i].mtx,mgza[i].mty,mgza[i].mtw,mgza[i].mth,mgza[i].mcx,mgza[i].mcy,mgza[i].mcw,mgza[i].mch);
		
		if(jl.sm){
			if(jl.cx+jl.w/1.5>mgza[i].mcx&&jl.cx+jl.w/5<mgza[i].mcx+mgza[i].mcw){
				if(jl.buttom){
					if(jl.cy+jl.h-jl.speedy<=mgza[i].mcy){
						if(jl.cy+jl.h+jl.speedy>mgza[i].mcy){
							jl.cy=jl.cury=mgza[i].mcy-jl.h;
							jl.buttom=false;
							jl.top=false;
							jl.zaw=true;
						}
					}
				}
				if(jl.buttom==false){
					if(jl.cy<mgza[i].mcy+mgza[i].mch&&jl.cy+jl.h>mgza[i].mcy+mgza[i].mch){
						jl.buttom=true;
						if(jl.ol==2&&mgza[i].mol==1||jl.ol==3&&mgza[i].mol==1){
							for(var j=0;j<4;j++){
								ol=j;
								tx=760;
								ty=0;
								tw=15;
								th=15;
								if(j==0||j==2){cx=mgza[i].mcx+1;}else if(j==1||j==3){cx=mgza[i].mcx+tw;}
								if(j==0||j==1){cy=mgza[i].mcy}else if(j==2||j==3){cy=mgza[i].mcy+th;}
								cw=15;
								ch=15;
								vx=5;
								vy=12;
								stp=0;
								zza.push(new zz(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
							}
							mgza[i].mcy=-1000;
							
							document.getElementById('dingpozhuan').play();
						}else if(jl.ol==1){
							
							document.getElementById('dingz').play();
						}
						if(mgza[i].mol==0){
							mgind.push(mgza[i]);
							mgza[i].mol=2;
							mgza[i].mcy-=20;
							mgza[i].mty=0;
							mgza[i].mth=31;
							var ms=Math.floor(Math.random()*3);
							if(ms==0){
								if(jl.ol==2||jl.ol==3){
									tx=776;
									ty=99;
									tw=33;
									th=32;
									cx=mgza[i].mcx;
									cy=mgza[i].mcy+20;
									cw=33;
									ch=32;
									vx=0;
									stp=mgza[i].mcy+20;
									sq=false;
									huaa.push(new hua(tx,ty,tw,th,cx,cy,cw,ch,vx,stp,sq));
									
									document.getElementById('dingmogu').play();
								}else if(jl.ol==1){
									tx=744;
									ty=99;
									tw=31;
									th=32;
									cx=mgza[i].mcx;
									cy=mgza[i].mcy+20;
									cw=33;
									ch=32;
									vx=0;
									vy=0;
									stp=mgza[i].mcy+20;
									sq=false;
									zaw=false;
									mg.push(new mgf(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp,sq,zaw));
									
									document.getElementById('dingmogu').play();
								}
							}else{
								tx=744;   
								ty=64;  
								tw=32;  
								th=32;  
								cx=mgza[i].mcx;
								cy=mgza[i].mcy;
								cw=32;  
								ch=32;  
								vx=0;
								vy=3;
								gs=0;
								zgs=0;
								zjfao.push(new zjfo(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,zgs));
								
								document.getElementById('jinb').play();
								jljb++;
							}
						}
					}
				}
			}
		}
		
	}			
}
function gkfc(){
	if(bgjsqty){
		gk.kvx=jl.speedx;
	}else{
		gk.kvx=0;
	}
	gk.kcx-=gk.kvx;
	ctx.drawImage(imggk,gk.ktx,gk.kty,gk.ktw,gk.kth,gk.kcx,gk.kcy,gk.kcw,gk.kch);
}
function gkffc(){
	if(bgjsqty){
		gkf.kvx=jl.speedx;
	}else{
		gkf.kvx=0;
	}
	gkf.kcx-=gkf.kvx;
	gkf.kcy-=gkf.kvy;
	if(gkf.kcy<=130||gkf.kcy>=343){gkf.kvy*=-1;}
	ctx.drawImage(imggk,gkf.ktx,gkf.kty,gkf.ktw,gkf.kth,gkf.kcx,gkf.kcy,gkf.kcw,gkf.kch);
	if(jl.cx>gkf.kcx+10){
		document.getElementById('ad').pause();
		document.getElementById('laqi').play();
		if(ggk>=9){
			setTimeout(function(){clearInterval(time);clearTimeout(timer1);Animate.mMove(end,{left:0});end.innerHTML="<h2>未完待续</h2><h3>感谢您的支持！<br/><br/><br/>作者：张生武&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ:627831342 </h3>";page=2},1000);
		}else{qhfc(1)}
	}
}
function qhfc(n){
	clearInterval(time);
	clearTimeout(timer1);
	jltime=200;
	bgarr.length=0;
	bgarr2.length=0;
	mgind.length=0;
	bgza.length=0;
	yza.length=0;
	jfa.length=0;
	mgza.length=0;
	xrza.length=0;
	bglu.length=0;
	bulu.length=0;
	mg.length=0;
	huaa.length=0;
	zza.length=0;
	zjfa.length=0;
	zjfao.length=0;
	jlda.length=0;
	arr.length=0;
	gwd.length=0;
	if(n==1){
		document.getElementById('g'+ggk).style.background="yellow";
		jlol=jl.ol;
		ggk=ggk+1;
	}else{
		jlol=1;
		ggk=ggk;
	}
	ctx.clearRect(0,0,can.width,can.height);
	setTimeout(function(){page=2;},2000);
	Animate.mMove(oSelect,{left:0});
}






function flu(){
	for(var i=0;i<bglu.length;i++){
		if(bgjsqty){
			bglu[i].vx=jl.speedx;
		}else{
			bglu[i].vx=0;
		}
		bglu[i].cx-=bglu[i].vx;
		
		if(jl.sm){
			if(jl.cx+jl.w>bglu[i].cx&&jl.cx<bglu[i].cx+bglu[i].cw){
				if(jl.buttom){
					if(jl.cy+jl.h-jl.speedy<=bglu[i].cy){
						if(jl.cy+jl.h+jl.speedy>bglu[i].cy){
							jl.cy=jl.cury=bglu[i].cy-jl.h;
							jl.buttom=false;
							jl.top=false;
						}
					}
				}else{
					if(jl.cy+jl.h>bglu[i].cy){
						if(jl.y==0||jl.y==67||jl.y==171){
							jl.cx=bglu[i].cx-jl.w;
						}else{
							jl.cx=bglu[i].cx+bglu[i].cw;
						}
					}
				}
				if(jl.cx>bglu[i].cx){
					if(jl.cy+jl.h<bglu[i].cy){
						if(jl.top==false){
							if(jl.zaw==false){
								jl.buttom=true;
							}
						}
					}
				}
			}
			if(jl.cx>bglu[i].cx+bglu[i].cw&&jl.cx+jl.w<bglu[i+1].cx){
				if(jl.top==false){
					jl.buttom=true;
				}
			}
		}
		
		if(jl.cy>500&&jl.sm){
			jlover();
		}
		ctx.drawImage(zr,bglu[i].tx,bglu[i].ty,bglu[i].tw,bglu[i].th,bglu[i].cx,bglu[i].cy,bglu[i].cw,bglu[i].ch);
	}	
}
function bucao(){
	for(var i=0;i<bulu.length;i++){
		if(bgjsqty){
				bulu[i].vx=jl.speedx;
			}else{
				bulu[i].vx=0;
		}
		bulu[i].x-=bulu[i].vx;
		ctx.drawImage(zr,10,20,20,200,bulu[i].x,bulu[i].y,20,200);
	}	
}
function Animter(){
	
	for(var i=0;i<arr.length;i++){
		arr[i].cx+=arr[i].vx+jj;
		arr[i].cy+=arr[i].vy;
		if(!arr[i].zaw){arr[i].vy=5;arr[i].zsm=null;}
		
		if(arr[i].vx>0){
			if(arr[i].zt){
				if(arr[i].ol==0){arr[i].ty=0;}if(arr[i].ol==1){arr[i].ty=119;}if(arr[i].ol==2){arr[i].ty=241;}if(arr[i].ol==3){arr[i].ty=343;}
			}
		}else{
			if(arr[i].zt){
				if(arr[i].ol==0){arr[i].ty=56;}if(arr[i].ol==1){arr[i].ty=176;}if(arr[i].ol==2){arr[i].ty=278;}if(arr[i].ol==3){arr[i].ty=343;}
			}
		}
		if(arr[i].sm){
			arr[i].gs++;
			if(arr[i].zt&&jl.sm){
				if(arr[i].gs>=5){
					arr[i].tx+=arr[i].sv;	
					if(arr[i].tx>=arr[i].tw*2){
						arr[i].tx=0;
					}
					arr[i].gs=0;
				}
			}
		}
		
		if(arr[i].sm){
		for(var j=0;j<bgza.length;j++){
			if(arr[i].cx+arr[i].cw>bgza[j].zcx&&arr[i].cx<bgza[j].zcx+bgza[j].zcw){
				if(!arr[i].zaw){
					if(arr[i].cy+arr[i].ch+arr[i].vy>bgza[j].zcy&&arr[i].cy<bgza[j].zcy){
						arr[i].zaw=true;
						arr[i].vy=0;
						arr[i].zsm=bgza;
						arr[i].cy=bgza[j].zcy-arr[i].ch;
					}
				}else if(arr[i].zaw&&arr[i].zsm==bgza){
					if(arr[i].cx+arr[i].cw>=bgza[j].zcx+bgza[j].zcw){
						if(arr[i].ol==0&&arr[i].zt){
							arr[i].vx=-2;
						}
					}	
					if(arr[i].cx<=bgza[j].zcx){
						if(arr[i].ol==0&&arr[i].zt){
							arr[i].vx=2;
						}	
					}
				}
			}
			if(arr[i].zsm==bgza){
				if(arr[i].zaw){
					if(bgza[j+1]){
						if(arr[i].cx+arr[i].cw>bgza[j].zcx+bgza[j].zcw&&arr[i].cx+arr[i].cw<bgza[j+1].zcx){
							arr[i].zaw=false;	
						}
					}else{
						if(arr[i].cx+arr[i].cw>bgza[j].zcx+bgza[j].zcw){
							arr[i].zaw=false;	
						}
					}
					if(bgza[j-1]){
						if(arr[i].cx<bgza[j].zcx&&arr[i].cx>bgza[j-1].zcx+bgza[j-1].zcw){
							arr[i].zaw=false;	
						}
					}else{
						if(arr[i].cx<bgza[j].zcx){
							arr[i].zaw=false;	
						}
					}
				}
			}
		}
		
		for(var j=0;j<mgza.length;j++){
			if(arr[i].cx+arr[i].cw>mgza[j].mcx&&arr[i].cx<mgza[j].mcx+mgza[j].mcw&&arr[i].cy<mgza[j].mcy){
				if(!arr[i].zaw){
					if(arr[i].cy+arr[i].ch+arr[i].vy>mgza[j].mcy&&arr[i].cy<mgza[j].mcy){
						arr[i].zaw=true;
						arr[i].vy=0;
						arr[i].zsm=mgza;
						arr[i].cy=mgza[j].mcy-arr[i].ch;
					}
				}
			}
			if(arr[i].zsm==mgza){
				if(arr[i].zaw){
					if(mgza[j+1]){
						if(arr[i].cx+arr[i].cw>mgza[j].mcx+mgza[j].mcw&&arr[i].cx+arr[i].cw<mgza[j+1].mcx){
							arr[i].zaw=false;	
						}
					}else{
						if(arr[i].cx+arr[i].cw>mgza[j].mcx+mgza[j].mcw){
							arr[i].zaw=false;	
						}
					}
					if(mgza[j-1]){
						if(arr[i].cx<mgza[j].mcx&&arr[i].cx>mgza[j-1].mcx+mgza[j-1].mcw){
							arr[i].zaw=false;	
						}
					}else{
						if(arr[i].cx<mgza[j].mcx){
							arr[i].zaw=false;	
						}
					}
				}
			}
		}
		
		for(var j=0;j<yza.length;j++){
			if(arr[i].cx+arr[i].cw>yza[j].ycx&&arr[i].cx<yza[j].ycx+yza[j].ycw){
				if(!arr[i].zaw){
					if(arr[i].cy+arr[i].ch>yza[j].ycy){
						arr[i].vx*=-1;
					}
					if(arr[i].cy+arr[i].ch+arr[i].vy>yza[j].ycy&&arr[i].cy<yza[j].ycy){
						arr[i].zaw=true;
						arr[i].vy=0;
						arr[i].zsm=yza;
						arr[i].cy=yza[j].ycy-arr[i].ch;
					}
				}else{	
					if(arr[i].cy+arr[i].ch>yza[j].ycy){
						arr[i].vx*=-1;
					}
				}
			}
			if(arr[i].zsm==yza){
				if(arr[i].zaw){
					if(bgza[j+1]){
						if(arr[i].cx+arr[i].cw>yza[j].ycx+yza[j].ycw&&arr[i].cx+arr[i].cw<yza[j+1].ycx){
							arr[i].zaw=false;	
						}
					}else{
						if(arr[i].cx+arr[i].cw>yza[j].ycx+yza[j].ycw){
							arr[i].zaw=false;	
						}
					}
					if(yza[j-1]){
						if(arr[i].cx<yza[j].ycx&&arr[i].cx>yza[j-1].ycx+yza[j-1].ycw){
							arr[i].zaw=false;	
						}
					}else{
						if(arr[i].cx<yza[j].ycx){
							arr[i].zaw=false;	
						}
					}
				}
			}
		}
		
		for(var j=0;j<bglu.length;j++){
			if(arr[i].cx+arr[i].cw>bglu[j].cx&&arr[i].cx<bglu[j].cx+bglu[j].cw){
				if(!arr[i].zaw){
					if(arr[i].cy+arr[i].ch>bglu[j].cy){
						arr[i].vx*=-1;
					}
					if(arr[i].cy+arr[i].ch+arr[i].vy>bglu[j].cy&&arr[i].cy<bglu[j].cy){
						arr[i].zaw=true;
						arr[i].vy=0;
						arr[i].zsm=bglu;
						arr[i].cy=bglu[j].cy-arr[i].ch;
					}
				}else if(arr[i].zaw&&arr[i].zsm==bglu){
					if(arr[i].cy+arr[i].ch>bglu[j].cy){
						arr[i].vx*=-1;
					}	
					if(arr[i].cy+arr[i].ch<bglu[j].cy){
						if(arr[i].ol==0&&arr[i].zt){
							if(bglu[j].cx>arr[i].cx){
								arr[i].vx=-2;
							}else if(bglu[j].cx<arr[i].cx){
								arr[i].vx=2;
							}
						}
						arr[i].zaw=false;	
					}
				}
			}
			if(arr[i].zsm==bglu){
				if(arr[i].zaw){
					if(bglu[j+1]){
						if(arr[i].cx+arr[i].cw>bglu[j].cx+bglu[j].cw&&arr[i].cx+arr[i].cw<bglu[j+1].cx){
							if(arr[i].ol==0&&arr[i].zt){
								if(bglu[j+1].cx>arr[i].cx){
									arr[i].vx=-2;
								}else if(bglu[j+1].cx<arr[i].cx){
									arr[i].vx=2;
								}
							}
							if(arr[i].ol==1&&arr[i].zt==false||arr[i].ol==0&&arr[i].zt==false){
								if(arr[i].vx>0){arr[i].vx=6;}else{arr[i].vx=-6;}
								arr[i].zaw=false;
							}
							arr[i].zaw=false;
								
						}
					}
					if(bglu[j-1]){
						if(arr[i].cx<bglu[j].cx&&arr[i].cx>bglu[j-1].cx+bglu[j-1].cw){
							if(arr[i].ol==0&&arr[i].zt){
								if(bglu[j-1].cx>arr[i].cx){
									arr[i].vx=-2;
								}else if(bglu[j-1].cx<arr[i].cx){
									arr[i].vx=2;
								}
							}
							if(arr[i].ol==1&&arr[i].zt==false||arr[i].ol==0&&arr[i].zt==false){
								if(arr[i].vx>0){arr[i].vx=6;}else{arr[i].vx=-6;}
								arr[i].zaw=false;
							}
							arr[i].zaw=false;
						}
					}
				}
			}
		}
		}
		
		if(arr[i].ol==2&&arr[i].zt==false){
			for(var j=0;j<3;j++){
				ol=j;
				tx=744;
				ty=0;
				tw=15;
				th=15;
				cx=arr[i].cx;
				cy=arr[i].cy;
				cw=15;
				ch=15;
				vx=5;
				vy=12;
				stp=0;
				zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
			}
			arr[i].vy=1000;	
		}
		
		if(arr[i].sm==false){
			arr[i].vy++;
		}
		
		if(jl.sm){
			if(jl.cx+jl.w>arr[i].cx&&jl.cx<arr[i].cx+arr[i].cw&&jl.cy+jl.ch>=arr[i].cy&&jl.cy<=arr[i].cy+arr[i].ch){
				if(jl.buttom){
					if(arr[i].vx==2||arr[i].vx==-2){
						if(arr[i].ol==0||arr[i].ol==1){
							arr[i].tx=103;
							arr[i].ty+=20;
							arr[i].th=33;
							arr[i].ch=33;
							arr[i].cy+=20;
							arr[i].zt=false;
							arr[i].vx=0;
							jl.top=true;
							jl.buttom=false;
							jl.zaw=false;
							document.getElementById('cdr').play();
						}
						if(arr[i].ol==2){
							arr[i].tx=0;
							arr[i].zt=false;
							arr[i].vx=0;
							arr[i].ch=10;
							arr[i].cy+=20;
							jl.top=true;
							jl.buttom=false;
							jl.zaw=false;
							document.getElementById('cdr').play();
						}
						if(arr[i].ol==3){
							if(!jl.zgs){
								if(jl.ol==1){
									for(var k=0;k<arr.length;k++){arr[k].vx=0;}
									jlover();
								}else if(jl.ol==2){
									jl.gd=true;
									jl.prool=2;
									jl.nextol=1;
									document.getElementById('dingmogu').play();
								}else if(jl.ol==3){
									jl.gd=true;
									jl.prool=3;
									jl.nextol=2;
									document.getElementById('dingmogu').play();
								}
							}
						}	
					}else if(arr[i].vx==0){
						jl.top=true;
						jl.buttom=false;
						jl.zaw=false;
						if(arr[i].ol==0||arr[i].ol==1){
							if(jl.cx<arr[i].cx-10){
								arr[i].vx=20;
								gwd.push(arr[i]);
							}else{
								arr[i].vx=-20;
								gwd.push(arr[i]);
							}
						}
					}
				}else{
					if(arr[i].vx){	
						if(!jl.zgs){
							if(jl.ol==1){
								for(var k=0;k<arr.length;k++){arr[k].vx=0;}
								jlover();
							}else if(jl.ol==2){
								jl.gd=true;
								jl.prool=2;
								jl.nextol=1;
								document.getElementById('dingmogu').play();
							}else if(jl.ol==3){
								jl.gd=true;
								jl.prool=3;
								jl.nextol=2;
								document.getElementById('dingmogu').play();
							}
						}
					}
					if(arr[i].vx==0){
						if(arr[i].ol==0||arr[i].ol==1){
							if(jl.cx<arr[i].cx-10){
								arr[i].vx=20;
								gwd.push(arr[i]);
							}else{
								arr[i].vx=-20;
								gwd.push(arr[i]);
							}
						}
					}
				}
			}
		}
		
		if(gwd.length>0){
			for(var j=0;j<gwd.length;j++){
				if(gwd[j].cx+gwd[j].cw>arr[i].cx&&gwd[j].cx<arr[i].cx+arr[i].cw&&gwd[j].cy+gwd[j].ch>arr[i].cy&&gwd[j].cy<arr[i].cy+arr[i].ch){
					if(arr[i].zt&&arr[i].sm){
						arr[i].tx=0;
						arr[i].cy-=20;
						arr[i].vy=5;
						arr[i].vx=0;
						arr[i].sm=false;
					}	
				}
				if(jl.buttom){
					if(jl.cx+jl.w>gwd[j].cx&&jl.cx<gwd[j].cx+gwd[j].cw&&jl.cy+jl.ch>=gwd[j].cy&&jl.cy<=gwd[j].cy+gwd[j].ch){
						if(gwd[j].vx==20||gwd[j].vx==-20){
							jl.top=true;
							jl.buttom=false;
							jl.zaw=false;
							gwd[j].vx=0;
						}
					}
				}
			}
		}
		
		ctx.drawImage(imggw,arr[i].tx,arr[i].ty,arr[i].tw,arr[i].th,arr[i].cx,arr[i].cy,arr[i].cw,arr[i].ch);
	}	
}
function jldfc(){
	if(jlda.length<2){
		if(jl.y==171){
			var x=jl.cx+jl.cw;
			var y=jl.cy+10;
			vx=10;
		}else if(jl.y==223){
			var x=jl.cx;
			var y=jl.cy+10;
			vx=-10;
		}
		tx=776;
		ty=0;
		tw=16;
		th=17;
		cx=x;
		cy=y;
		cw=16;
		ch=17;
		vy=6;
		gs=0;
		yjs=0;
		jlda.push(new jld(tx,ty,tw,th,cx,cy,cw,ch,vx,vy,gs,yjs));	
	}	
}
function jld_move(){
	for(var i=0;i<jlda.length;i++){
		jlda[i].cx+=jlda[i].vx;
		jlda[i].cy+=jlda[i].vy;
		jlda[i].gs++;
		if(jlda[i].gs>=3){
			jlda[i].tx+=jlda[i].cw;
			if(jlda[i].tx>=776+jlda[i].cw*4){
				jlda[i].tx=776;
			}
			jlda[i].gs=0;	
		}		
		if(jlda[i].vy<0){
			jlda[i].yjs++;
			if(jlda[i].yjs>=10){
				jlda[i].yjs=0;
				jlda[i].vy*=-1;
			}
		}
		
		for(var j=0;j<xrza.length;j++){
			if(jlda.length>0){
				if(jlda[i].cx+jlda[i].cw>xrza[j].cx&&jlda[i].cx<xrza[j].cx+xrza[j].cw&&jlda[i].cy+jlda[i].ch>xrza[j].cy&&jlda[i].cy<xrza[j].cy+xrza[j].ch){
					for(var m=0;m<3;m++){
						ol=m;
						tx=744;
						ty=0;
						tw=15;
						th=15;
						cx=jlda[i].cx;
						cy=jlda[i].cy;
						cw=15;
						ch=15;
						vx=5;
						vy=12;
						stp=0;
						zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
					}
					jlda[i].cy=1000;
					if(jl.cx>xrza[j].cx){xrza[j].vx=-3;}else{xrza[j].vx=3;}
					xrza[j].vy=8;
					xrza[j].dz=true;
				}
			}
		}
		
		for(var j=0;j<yza.length;j++){
			if(jlda.length>0){
				if(jlda[i].cx+jlda[i].cw>yza[j].ycx&&jlda[i].cx<yza[j].ycx+yza[j].ycw){
					if(jlda[i].cy+jlda[i].ch>=yza[j].ycy){
						if(jlda[i].cy<=yza[j].ycy){
							jlda[i].vy*=-1;	
						}else if(jlda[i].cy+jlda[i].ch>yza[j].ycy){
							for(var m=0;m<3;m++){
								ol=m;
								tx=744;
								ty=0;
								tw=15;
								th=15;
								cx=jlda[i].cx;
								cy=jlda[i].cy;
								cw=15;
								ch=15;
								vx=5;
								vy=12;
								stp=0;
								zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
							}
							jlda[i].cy=1000;
						}
					}
				}
			}
		}
		
		for(var j=0;j<mgza.length;j++){
			if(jlda.length>0){
				if(jlda[i].cx+jlda[i].cw>mgza[j].mcx&&jlda[i].cx<mgza[j].mcx+mgza[j].mcw){
					if(jlda[i].cy+jlda[i].ch>=mgza[j].mcy){
						if(jlda[i].cy<=mgza[j].mcy){
							jlda[i].vy*=-1;	
						}else if(jlda[i].cy+jlda[i].ch>mgza[j].mcy&&jlda[i].cy<mgza[j].mcy+mgza[j].mch){
							for(var m=0;m<3;m++){
								ol=m;
								tx=744;
								ty=0;
								tw=15;
								th=15;
								cx=jlda[i].cx;
								cy=jlda[i].cy;
								cw=15;
								ch=15;
								vx=5;
								vy=12;
								stp=0;
								zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
							}
							jlda[i].cy=1000;	
						}
					}
				}
			}
		}
		
		for(var j=0;j<bgza.length;j++){
			if(jlda.length>0){
				if(jlda[i].cx+jlda[i].cw>bgza[j].zcx&&jlda[i].cx<bgza[j].zcx+bgza[j].zcw){
					if(jlda[i].cy+jlda[i].ch>=bgza[j].zcy){
						if(jlda[i].cy<=bgza[j].zcy){
							jlda[i].vy*=-1;	
						}
					}
				}
			}
		}
		
		for(var j=0;j<arr.length;j++){		
			if(jlda.length>0){
				if(jlda[i].cx+jlda[i].cw>arr[j].cx&&jlda[i].cx<arr[j].cx+arr[j].cw&&jlda[i].cy+jlda[i].ch>arr[j].cy&&jlda[i].cy<arr[j].cy+arr[j].ch){
					if(arr[j].ol!=3&&arr[j].sm){
						for(var m=0;m<3;m++){
							ol=m;
							tx=744;
							ty=0;
							tw=15;
							th=15;
							cx=jlda[i].cx;
							cy=jlda[i].cy;
							cw=15;
							ch=15;
							vx=5;
							vy=12;
							stp=0;
							zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
						}
						if(arr[j].zt==false){
							arr[j].tx=arr[j].tx;	
						}else{arr[j].tx=0;}
						arr[j].cy-=20;
						arr[j].vy=5;
						arr[j].vx=0;
						arr[j].sm=false;
						jlda[i].cy=1000;
					}
				}
			}
		}
		
		for(var j=0;j<bglu.length;j++){
			if(jlda.length){
				if(jlda[i].cx+jlda[i].cw>bglu[j].cx&&jlda[i].cx<bglu[j].cx+bglu[j].cw){
					if(jlda[i].cy+jlda[i].ch>=bglu[j].cy){
						if(jlda[i].cy<=bglu[j].cy){
							jlda[i].vy=-6;	
						}else if(jlda[i].cy+jlda[i].ch>bglu[j].cy){
							for(var m=0;m<3;m++){
								ol=m;
								tx=744;
								ty=0;
								tw=15;
								th=15;
								cx=jlda[i].cx;
								cy=jlda[i].cy;
								cw=15;
								ch=15;
								vx=5;
								vy=12;
								stp=0;
								zjfa.push(new zjf(ol,tx,ty,tw,th,cx,cy,cw,ch,vx,vy,stp));
							}
							jlda[i].cy=1000;
						}
					}
				}
			}
		}
		
		if(jlda.length>0){ctx.drawImage(zr,jlda[i].tx,jlda[i].ty,jlda[i].tw,jlda[i].th,jlda[i].cx,jlda[i].cy,jlda[i].cw,jlda[i].ch)};
		
	}
}
function jf(){	
	if(jljb==100){
		document.getElementById('jm').play();
		jlsmz++;
		jljb=0;
	}	
}

function jlfc(){
	jltime--;
	timer1=setTimeout(arguments.callee,1000);
	if(jltime<=0){
		jlover();
	}			
}
function jlover(){
	for(var k=0;k<arr.length;k++){arr[k].vx=0;}
	for(var k=0;k<xrza.length;k++){xrza[k].vy=0;}
	for(var k=0;k<gwd.length;k++){gwd[k].vx=0;}
	jl.cy-=30;
	jl.speedy=5;
	jl.sm=false;
	document.getElementById('ad').pause();
	document.getElementById('shit').play();	
	setTimeout(function(){jlsmz--;if(jlsmz>0){qhfc(0);}else if(jlsmz<=0){document.getElementById('over').play();Animate.mMove(end,{left:0});end.innerHTML="<h1>GAME OVER</h1>"}},2000)
	
}