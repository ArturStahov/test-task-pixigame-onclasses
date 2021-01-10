import * as PIXI from 'pixi.js';
const TextureCache = PIXI.utils.TextureCache;


export default class ButtonPlay {
    constructor() {
        this.buttonPlayTexture = [
            TextureCache["BTN_Spin.png"],
            TextureCache["BTN_Spin_d.png"],
        ];
        this.buttonPlay = new PIXI.Sprite(this.buttonPlayTexture[0]);
        this.buttonPlay.interactive = true;
        this.buttonPlay.buttonMode = true;
    }
    getButtonPlayContainer() {
        return this.buttonPlay;
    }

    active() {
        this.buttonPlay.texture = this.buttonPlayTexture[0];
    }

    disable() {
        this.buttonPlay.texture = this.buttonPlayTexture[1];
    }
}