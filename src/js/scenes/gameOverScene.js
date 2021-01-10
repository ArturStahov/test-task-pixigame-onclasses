import * as PIXI from 'pixi.js';
import app from '../appConfig.js'

export default class GameOverScene {

    constructor() {
        this.gameOverSceneContainer = null;
        this.buttonNewGame = null;
        this._createGameOverScene();
    }

    _createGameOverScene() {
        this.gameOverSceneContainer = new PIXI.Container();
        //background panel
        const Box = new PIXI.Graphics();
        Box.lineStyle(2, 0x061639, 1);
        Box.beginFill(0x061639, 0.45);
        Box.drawRoundedRect(app.screen.width / 2, app.screen.height / 2, app.screen.width - app.screen.width / 3, app.screen.height - app.screen.height / 3, 16);
        Box.pivot.set(Box.width / 2, Box.height / 2);
        Box.endFill();
        this.gameOverSceneContainer.addChild(Box);
        //button new game
        this.buttonNewGame = new PIXI.Graphics();
        this.buttonNewGame.beginFill(0x061639, 0.1);
        this.buttonNewGame.drawRect(app.screen.width / 2, app.screen.height / 2, app.screen.width, app.screen.height);
        this.buttonNewGame.pivot.set(this.buttonNewGame.width / 2, this.buttonNewGame.height / 2);
        this.buttonNewGame.endFill();
        this.buttonNewGame.interactive = true;
        this.buttonNewGame.buttonMode = true;
        this.gameOverSceneContainer.addChild(this.buttonNewGame);


        //text info You loss
        const LossText = new PIXI.Text("YOU LOSS!", {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 4,
            dropShadow: true,
            dropShadowColor: "#ffffff",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
        });
        LossText.anchor.set(0.5);
        LossText.position.set(app.screen.width / 2, app.screen.height / 2);
        this.gameOverSceneContainer.addChild(LossText);
    }

    visibleGameOverScene() {
        this.gameOverSceneContainer.visible = true;
    }

    hiddenGameOverScene() {
        this.gameOverSceneContainer.visible = false;
    }

    getButtonNewGame() {
        return this.buttonNewGame
    }

    getGameOverSceneContainer() {
        return this.gameOverSceneContainer
    }

}