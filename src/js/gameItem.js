import * as PIXI from 'pixi.js';
const TextureCache = PIXI.utils.TextureCache;

export default class GameItems {
    constructor() {

        this.gameItemsArr = [
            { itemId: 0, itemSkin: TextureCache["SYM1.png"] },
            { itemId: 1, itemSkin: TextureCache["SYM2.png"] },
            { itemId: 2, itemSkin: TextureCache["SYM3.png"] },
            { itemId: 3, itemSkin: TextureCache["SYM4.png"] },
            { itemId: 4, itemSkin: TextureCache["SYM5.png"] },
            { itemId: 5, itemSkin: TextureCache["SYM6.png"] },
        ];
    }
    getGameItems() {
        return this.gameItemsArr;
    }

}