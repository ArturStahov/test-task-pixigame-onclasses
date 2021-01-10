import * as PIXI from 'pixi.js';
import app from '../appConfig.js'

export default class PreloadScene {
    constructor() {
        this.loadingSceneContainer = null;
        this._createPreloadScene();
    }

    _createPreloadScene() {
        this.loadingSceneContainer = new PIXI.Container();
        const SpinnerLoading = new PIXI.Text("...Loading!", {
            fontFamily: "Arial",
            fontSize: 24,
            fill: "white",
            stroke: '#ff3300',
            strokeThickness: 4,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
        });
        SpinnerLoading.anchor.set(0.5);
        SpinnerLoading.position.set(app.screen.width / 2, app.screen.height / 2);
        this.loadingSceneContainer.addChild(SpinnerLoading);
    }

    getPreloadSceneContainer() {
        return this.loadingSceneContainer;
    }

    visiblePreloadingScene() {
        this.loadingSceneContainer.visible = true;
    }

    hiddenPreloadingScene() {
        this.loadingSceneContainer.visible = false;
    }
}