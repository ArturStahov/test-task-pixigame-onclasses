(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+vdA":function(e,t,n){e.exports=n.p+"assets/assets.png"},Eo19:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("Eo19"),n("RtS0"),n("zSDB"),n("3dw1");var i=n("mVOX"),a=n.p+"static/media/runPlay.563738c7.mp3",r=n.p+"static/media/won.01408a5f.mp3",o=n.p+"static/media/click.747cc046.mp3",s=n.p+"static/media/Sound_fon.9f887eb4.mp3",h=n("GaZT"),d=new h.a({transparent:!1,resolution:window.devicePixelRatio});d.renderer.backgroundColor=0,d.renderer.view.style.position="absolute",d.renderer.view.style.display="block",d.renderer.autoResize=!0,d.renderer.resize(window.innerWidth,window.innerHeight),d.view.style.width=window.innerWidth+"px",d.view.style.height=window.innerHeight+"px";var l=d,c=(n.p,n("+vdA"),function(){function e(){}return e.loadAllTextures=function(e){var t=new h.d;t.add("./assets/assets.json"),t.load((function(){e()}))},e}()),u=h.h.TextureCache,m=function(){function e(){this.gameItemsArr=[{itemId:0,itemSkin:u["SYM1.png"]},{itemId:1,itemSkin:u["SYM2.png"]},{itemId:2,itemSkin:u["SYM3.png"]},{itemId:3,itemSkin:u["SYM4.png"]},{itemId:4,itemSkin:u["SYM5.png"]},{itemId:5,itemSkin:u["SYM6.png"]}]}return e.prototype.getGameItems=function(){return this.gameItemsArr},e}(),g={timePlay:0,timeWinView:0,credits:0,winSalary:0,timeLoadingGame:100},w=h.h.TextureCache,f=function(){function e(){this.buttonPlayTexture=[w["BTN_Spin.png"],w["BTN_Spin_d.png"]],this.buttonPlay=new h.e(this.buttonPlayTexture[0]),this.buttonPlay.interactive=!0,this.buttonPlay.buttonMode=!0}var t=e.prototype;return t.getButtonPlayContainer=function(){return this.buttonPlay},t.active=function(){this.buttonPlay.texture=this.buttonPlayTexture[0]},t.disable=function(){this.buttonPlay.texture=this.buttonPlayTexture[1]},e}(),S=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},v=n("XOZl"),C=new h.g.BlurFilter(.8,.9,.6),p=h.h.TextureCache,b=function(){function e(e){this.gameSceneContainer=null,this._createGameSceneContainer(),this.gameItemsArr=e,this.animationReelsContainer=null,this._generateAnimationGameArea(),this.gameAreaContainer=null,this.gameCombo=null,this._generateRandomGameArea()}var t=e.prototype;return t.visibleAnimationReels=function(){this.animationReelsContainer.visible=!0},t.hiddenAnimationsReels=function(){this.animationReelsContainer.visible=!1},t._createGameSceneContainer=function(){this.gameSceneContainer=new h.b,this.gameSceneContainer.width=l.screen.width,this.gameSceneContainer.height=l.screen.height,this.gameSceneContainer.x=l.screen.width/2,this.gameSceneContainer.y=l.screen.height/2,this.gameSceneContainer.pivot.set(l.screen.width/2,l.screen.height/2);var e=new h.e.from(p["BG.png"]);e.position.set(l.screen.width/2,l.screen.height/2),e.anchor.set(.5),e.scale.x=Math.min(l.screen.width/e.width),e.scale.y=Math.min(l.screen.height/e.height),this.gameSceneContainer.addChild(e),this.gameSceneContainer.visible=!1},t.getGameSceneContainer=function(){return this.gameSceneContainer},t.visibleRandomGameArea=function(){this.gameAreaContainer.visible=!0},t.generateRandomArea=function(){this.gameSceneContainer.removeChild(this.gameAreaContainer),this._generateRandomGameArea()},t.hiddenRandomGameArea=function(){this.gameAreaContainer.visible=!1},t.getGameCombo=function(){return this.gameCombo},t.visibleGameScene=function(){this.gameSceneContainer.visible=!0},t._generateRandomGameArea=function(){this.gameAreaContainer=new h.b,this.gameCombo={a:[],b:[],c:[]};for(var e=0;e<3;e+=1){var t=new h.b;t.x=250*e*1.5,this.gameAreaContainer.addChild(t);for(var n=0;n<3;n+=1){var i=S(0,this.gameItemsArr.length-1),a=new h.b,r=new h.e.from(this.gameItemsArr[i].itemSkin);r.y=0,r.scale.x=r.scale.y=Math.min(200/r.width,200/r.height),r.x=0,r.anchor.set(.5),a.addChild(r),a.y=200*n,a.x=Math.round(100);var o={itemId:i,itemSymbol:a};switch(t.addChild(a),n){case 0:this.gameCombo.a.push(o);break;case 1:this.gameCombo.b.push(o);break;case 2:this.gameCombo.c.push(o);break;default:console.log("error value")}}}this.gameAreaContainer.y=l.screen.height/2,this.gameAreaContainer.x=l.screen.width/2-100,this.gameAreaContainer.pivot.set(this.gameAreaContainer.width/2,this.gameAreaContainer.height/2),this.gameSceneContainer.addChild(this.gameAreaContainer)},t._generateAnimationGameArea=function(){this.animationReelsContainer=new h.b;for(var e=[],t=0;t<3;t+=1){var n=new h.b;n.x=250*t*1.5,this.animationReelsContainer.addChild(n);for(var i={symbols:[]},a=0;a<6;a+=1){var r=S(0,this.gameItemsArr.length-1),o=new h.b,s=new h.e.from(this.gameItemsArr[r].itemSkin);s.y=0,s.scale.x=s.scale.y=Math.min(200/s.width,200/s.height),s.x=0,s.anchor.set(.5),o.addChild(s),o.y=200*a,o.x=Math.round(100),i.symbols.push(o),n.addChild(o)}e.push(i)}!function(e){for(var t=0;t<3;t+=1)e[t].symbols[0].filters=[C],e[t].symbols[2].filters=[C],e[t].symbols[5].filters=[C],v.a.to(e[t].symbols[0],{duration:.3,ease:"none",y:270,modifiers:{y:v.a.utils.unitize((function(e){return parseFloat(e)%250}))},repeat:-1}),v.a.to(e[t].symbols[1],{duration:.3,ease:"none",y:-125,modifiers:{y:v.a.utils.unitize((function(e){return parseFloat(e)%200}))},repeat:-1}),v.a.to(e[t].symbols[2],{duration:.3,ease:"none",y:-125,modifiers:{y:v.a.utils.unitize((function(e){return parseFloat(e)%300}))},repeat:-1}),v.a.to(e[t].symbols[3],{duration:.3,ease:"none",y:-125,modifiers:{y:v.a.utils.unitize((function(e){return parseFloat(e)%300}))},repeat:-1}),v.a.to(e[t].symbols[4],{duration:.3,ease:"none",y:-125,modifiers:{y:v.a.utils.unitize((function(e){return parseFloat(e)%300}))},repeat:-1}),v.a.to(e[t].symbols[5],{duration:.3,ease:"none",y:125,modifiers:{y:v.a.utils.unitize((function(e){return parseFloat(e)%300}))},repeat:-1})}(e),this.animationReelsContainer.y=l.screen.height-100,this.animationReelsContainer.x=l.screen.width/2-100,this.animationReelsContainer.pivot.set(this.animationReelsContainer.width/2,this.animationReelsContainer.height/2),this.gameSceneContainer.addChild(this.animationReelsContainer)},e}(),y=function(){function e(e,t){this.creditsPanelContainer=new h.b,this.creditsText=null,this.winSalaryText=null,this._createPanel(e,t)}var t=e.prototype;return t._createPanel=function(e,t){var n=new h.c;n.lineStyle(2,12543792,1),n.beginFill(398905,1),n.drawRoundedRect(0,0,200,150),n.pivot.set(n.width/2,n.height/2),n.endFill(),this.creditsPanelContainer.addChild(n),this.creditsText=new h.f("MONEY: "+e+"$",{fontFamily:"Arial",fontSize:16,fill:"yellow",dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:4,dropShadowAngle:Math.PI/3,dropShadowDistance:3}),this.creditsText.anchor.set(.5),this.creditsText.position.set(-20,-30),this.creditsPanelContainer.addChild(this.creditsText),this.winSalaryText=new h.f("WIN: "+t+"$",{fontFamily:"Arial",fontSize:16,fill:"yellow",dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:4,dropShadowAngle:Math.PI/3,dropShadowDistance:3}),this.winSalaryText.anchor.set(.5),this.winSalaryText.position.set(-47,-5),this.creditsPanelContainer.addChild(this.winSalaryText)},t.setWinSalaryText=function(e){this.winSalaryText.text="WIN: "+e+"$"},t.setCreditsText=function(e){this.creditsText.text="MONEY: "+e+"$"},t.getCreditsPanelContainer=function(){return this.creditsPanelContainer},e}(),x=(n("hi3g"),n("lYjL"),n("lAJ5"),function(){function e(){this.winSceneContainer=null,this.winSalaryText=null,this.buttonNext=null,this._createWinScene()}var t=e.prototype;return t._createWinScene=function(){this.winSceneContainer=new h.b;var e=new h.c;e.lineStyle(2,398905,1),e.beginFill(398905,.45),e.drawRoundedRect(l.screen.width/2,l.screen.height/2,l.screen.width-l.screen.width/3,l.screen.height-l.screen.height/3,16),e.pivot.set(e.width/2,e.height/2),e.endFill(),this.winSceneContainer.addChild(e),this.buttonNext=new h.c,this.buttonNext.beginFill(398905,.1),this.buttonNext.drawRect(l.screen.width/2,l.screen.height/2,l.screen.width,l.screen.height),this.buttonNext.pivot.set(this.buttonNext.width/2,this.buttonNext.height/2),this.buttonNext.endFill(),this.buttonNext.interactive=!0,this.buttonNext.buttonMode=!0,this.winSceneContainer.addChild(this.buttonNext);var t=new h.f("YOU WON!",{fontFamily:"Arial",fontSize:36,fill:"yellow",stroke:"black",strokeThickness:4,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6});t.anchor.set(.5),t.position.set(l.screen.width/2,l.screen.height/2),this.winSceneContainer.addChild(t),this.winSalaryText=new h.f("WIN",{fontFamily:"Arial",fontSize:36,fill:"yellow",dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:4,dropShadowAngle:Math.PI/3,dropShadowDistance:3}),this.winSalaryText.anchor.set(.5),this.winSalaryText.position.set(l.screen.width/2,l.screen.height/2+50),this.winSceneContainer.addChild(this.winSalaryText)},t.visibleWinScene=function(e){this.winSceneContainer.visible=!0,this.winSalaryText.text=e+"$"},t.hiddenWinScene=function(){this.winSceneContainer.visible=!1},t.getButtonNext=function(){return this.buttonNext},t.getWinSceneContainer=function(){return this.winSceneContainer},e}()),P=function(){function e(){this.gameOverSceneContainer=null,this.buttonNewGame=null,this._createGameOverScene()}var t=e.prototype;return t._createGameOverScene=function(){this.gameOverSceneContainer=new h.b;var e=new h.c;e.lineStyle(2,398905,1),e.beginFill(398905,.45),e.drawRoundedRect(l.screen.width/2,l.screen.height/2,l.screen.width-l.screen.width/3,l.screen.height-l.screen.height/3,16),e.pivot.set(e.width/2,e.height/2),e.endFill(),this.gameOverSceneContainer.addChild(e),this.buttonNewGame=new h.c,this.buttonNewGame.beginFill(398905,.1),this.buttonNewGame.drawRect(l.screen.width/2,l.screen.height/2,l.screen.width,l.screen.height),this.buttonNewGame.pivot.set(this.buttonNewGame.width/2,this.buttonNewGame.height/2),this.buttonNewGame.endFill(),this.buttonNewGame.interactive=!0,this.buttonNewGame.buttonMode=!0,this.gameOverSceneContainer.addChild(this.buttonNewGame);var t=new h.f("YOU LOSS!",{fontFamily:"Arial",fontSize:36,fill:"yellow",stroke:"black",strokeThickness:4,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6});t.anchor.set(.5),t.position.set(l.screen.width/2,l.screen.height/2),this.gameOverSceneContainer.addChild(t)},t.visibleGameOverScene=function(){this.gameOverSceneContainer.visible=!0},t.hiddenGameOverScene=function(){this.gameOverSceneContainer.visible=!1},t.getButtonNewGame=function(){return this.buttonNewGame},t.getGameOverSceneContainer=function(){return this.gameOverSceneContainer},e}(),A=function(){function e(){this.loadingSceneContainer=null,this._createPreloadScene()}var t=e.prototype;return t._createPreloadScene=function(){this.loadingSceneContainer=new h.b;var e=new h.f("...Loading!",{fontFamily:"Arial",fontSize:24,fill:"white",stroke:"#ff3300",strokeThickness:4,dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6});e.anchor.set(.5),e.position.set(l.screen.width/2,l.screen.height/2),this.loadingSceneContainer.addChild(e)},t.getPreloadSceneContainer=function(){return this.loadingSceneContainer},t.visiblePreloadingScene=function(){this.loadingSceneContainer.visible=!0},t.hiddenPreloadingScene=function(){this.loadingSceneContainer.visible=!1},e}(),G=new i.a({innerStrength:3,outerStrength:10,color:16777215});new(function(){function e(){document.body.appendChild(l.view),this.gameScene=null,this.preloadScene=null,this.winScene=null,this.gameOverScene=null,this.buttonPlay=null,this.creditsPanel=null,this.isLoadingGame=!0,this.targetClick=!1,this.targetWin=!1,this.spinResult=null,this.state,this.soundWin=new Audio(r),this.soundClick=new Audio(o),this.soundsPlay=new Audio(a),this.soundsBg=new Audio(s),this.load()}var t=e.prototype;return t.load=function(){var e=this;c.loadAllTextures((function(){e.start()}))},t.start=function(){var e=this,t=(new m).getGameItems();g.timePlay=300,g.timeWinView=300,g.credits=1e3,this.gameScene=new b(t);var n=this.gameScene.getGameSceneContainer();this.buttonPlay=new f;var i=this.buttonPlay.getButtonPlayContainer();i.position.set(l.screen.width-130,l.screen.height/2),i.anchor.set(.5),i.on("pointerdown",this.handlerClickPlay.bind(this)),n.addChild(i),this.creditsPanel=new y(g.credits,g.winSalary);var a=this.creditsPanel.getCreditsPanelContainer();a.x=l.screen.width-135,a.y=l.screen.height-200,n.addChild(a),this.winScene=new x;var r=this.winScene.getWinSceneContainer();this.winScene.getButtonNext().on("pointerdown",this.handlerClickNextPlay.bind(this)),this.winScene.hiddenWinScene(),this.gameOverScene=new P;var o=this.gameOverScene.getGameOverSceneContainer();this.gameOverScene.getButtonNewGame().on("pointerdown",this.handlerClickNewGame.bind(this)),this.gameOverScene.hiddenGameOverScene(),this.preloadScene=new A;var s=this.preloadScene.getPreloadSceneContainer();this.preloadScene.visiblePreloadingScene(),this.gameScene.hiddenAnimationsReels(),this.gameScene.generateRandomArea(),l.stage.addChild(n),l.stage.addChild(r),l.stage.addChild(o),l.stage.addChild(s),this.state=this.update,l.ticker.add((function(t){return e.gameLoop(t)}))},t.eventPreloadingGame=function(){this.isLoadingGame&&(g.timeLoadingGame-=1,0==g.timeLoadingGame&&(this.isLoadingGame=!1,this.preloadScene.hiddenPreloadingScene(),this.gameScene.visibleGameScene()))},t.handlerClickPlay=function(){if(!this.targetClick){if(!g.credits)return void this.gameOverScene.visibleGameOverScene();this.targetClick=!0,g.timePlay=300,this.buttonPlay.disable(),g.credits-=5,this.creditsPanel.setCreditsText(g.credits),this.gameScene.generateRandomArea();var e=this.gameScene.getGameCombo();this.spinResult=function(e){var t=!1,n=!1,i=[];return function(){if(t)return;for(var a=e.a.some((function(e){return 0===e.itemId})),r=function(r){var o=e.a[r],s=e.a.filter((function(e){return e.itemId===o.itemId}));return 3===s.length&&0===o.itemId?(n=!0,i=[].concat(e.a),{v:void 0}):s.length>1&&a||3===s.length?(t=!0,i=[].concat(e.a),{v:void 0}):void 0},o=0;o<3;o+=1){var s=r(o);if("object"==typeof s)return s.v}}(),function(){if(t)return;for(var a=e.b.some((function(e){return 0===e.itemId})),r=function(r){var o=e.b[r],s=e.b.filter((function(e){return e.itemId===o.itemId}));return 3===s.length&&0===o.itemId?(n=!0,i=[].concat(e.b),{v:void 0}):s.length>1&&a||3===s.length?(t=!0,i=[].concat(e.b),{v:void 0}):void 0},o=0;o<3;o+=1){var s=r(o);if("object"==typeof s)return s.v}}(),function(){if(t)return;for(var a=e.c.some((function(e){return 0===e.itemId})),r=function(r){var o=e.c[r],s=e.c.filter((function(e){return e.itemId===o.itemId}));return 3===s.length&&0===o.itemId?(n=!0,i=[].concat(e.c),{v:void 0}):s.length>1&&a||3===s.length?(t=!0,i=[].concat(e.c),{v:void 0}):void 0},o=0;o<3;o+=1){var s=r(o);if("object"==typeof s)return s.v}}(),{win:t,loss:n,resultLineItem:i}}(e),this.gameScene.hiddenRandomGameArea(),this.gameScene.visibleAnimationReels(),this.soundClick.play(),this.soundsPlay.play(),this.soundsBg.play(),this.soundsBg.loop=!0}},t.handlerClickNextPlay=function(){this.targetWin=!1,g.timeWinView=300,this.winScene.hiddenWinScene()},t.handlerClickNewGame=function(){g.credits=1e3,g.winSalary=0,this.creditsPanel.setWinSalaryText(g.winSalary),this.creditsPanel.setCreditsText(g.credits),this.gameOverScene.hiddenGameOverScene()},t.gameLoop=function(e){this.state(e)},t.update=function(){this.eventPreloadingGame(),this.groupSpinEvents(),this.winAutoHidden()},t.groupSpinEvents=function(){if(this.targetClick&&(g.timePlay-=1,0==g.timePlay)){this.targetClick=!1,this.buttonPlay.active(),this.gameScene.hiddenAnimationsReels(),this.gameScene.visibleRandomGameArea();var e=this.spinResult,t=e.win,n=e.loss,i=e.resultLineItem;if(this.soundsPlay.pause(),this.soundsPlay.currentTime=0,t)return i.forEach((function(e){return e.itemSymbol.children[0].filters=[G]})),this.winScene.visibleWinScene(10),g.credits+=10,g.winSalary+=10,this.creditsPanel.setWinSalaryText(g.winSalary),this.creditsPanel.setCreditsText(g.credits),this.targetWin=!0,void this.soundWin.play();if(n)return this.gameOverScene.visibleGameOverScene(),i.forEach((function(e){return e.itemSymbol.children[0].filters=[G]})),g.credits=0,void this.creditsPanel.setCreditsText(g.credits)}},t.winAutoHidden=function(){this.targetWin&&(g.timeWinView-=1,0==g.timeWinView&&(this.targetWin=!1,this.winScene.hiddenWinScene(),g.timeWinView=300))},e}())}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.03e702c5c7c61e65c8c4.js.map