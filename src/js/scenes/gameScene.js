import * as PIXI from 'pixi.js';
import app from '../appConfig.js'
import generateRandomInt from '../../utils/generateRandomInt.js'
import { animationsReels } from '../../animation/animationReels.js'

//width row
const ROW_WIDTH = 250;
//symbol size
const SYMBOL_SIZE = 200;
const TextureCache = PIXI.utils.TextureCache;

export default class GameScene {
    constructor(gameItemsArr) {
        this.gameSceneContainer = null;
        this._createGameSceneContainer()
        this.gameItemsArr = gameItemsArr;
        this.animationReelsContainer = null;
        this._generateAnimationGameArea()
        this.gameAreaContainer = null;
        this.gameCombo = null;
        this._generateRandomGameArea();
    }

    visibleAnimationReels() {
        this.animationReelsContainer.visible = true;
    }

    hiddenAnimationsReels() {
        this.animationReelsContainer.visible = false;
    }

    _createGameSceneContainer() {
        this.gameSceneContainer = new PIXI.Container();
        this.gameSceneContainer.width = app.screen.width;
        this.gameSceneContainer.height = app.screen.height;
        this.gameSceneContainer.x = app.screen.width / 2;
        this.gameSceneContainer.y = app.screen.height / 2;
        this.gameSceneContainer.pivot.set(app.screen.width / 2, app.screen.height / 2);
        //add background
        const bg = new PIXI.Sprite.from(TextureCache["BG.png"]);
        bg.position.set(app.screen.width / 2, app.screen.height / 2);
        bg.anchor.set(0.5);
        bg.scale.x = Math.min(app.screen.width / bg.width);
        bg.scale.y = Math.min(app.screen.height / bg.height);
        this.gameSceneContainer.addChild(bg);
        this.gameSceneContainer.visible = false
    }

    getGameSceneContainer() {
        return this.gameSceneContainer;
    }

    visibleRandomGameArea() {
        this.gameAreaContainer.visible = true
    }

    generateRandomArea() {
        this.gameSceneContainer.removeChild(this.gameAreaContainer);
        this._generateRandomGameArea();
    }

    hiddenRandomGameArea() {
        this.gameAreaContainer.visible = false
    }

    getGameCombo() {
        return this.gameCombo;
    }
    visibleGameScene() {
        this.gameSceneContainer.visible = true
    }

    _generateRandomGameArea() {
        this.gameAreaContainer = new PIXI.Container();
        this.gameCombo = {
            a: [],
            b: [],
            c: [],
        };
        for (let i = 0; i < 3; i += 1) {
            const rowContainer = new PIXI.Container();
            rowContainer.x = i * ROW_WIDTH * 1.5;
            this.gameAreaContainer.addChild(rowContainer);

            for (let j = 0; j < 3; j += 1) {
                let randomItemId = generateRandomInt(0, this.gameItemsArr.length - 1);
                const symbolContainer = new PIXI.Container();
                const symbol = new PIXI.Sprite.from(this.gameItemsArr[randomItemId].itemSkin);
                symbol.y = 0;
                symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
                symbol.x = 0;
                symbol.anchor.set(0.5);
                symbolContainer.addChild(symbol);
                symbolContainer.y = j * SYMBOL_SIZE;
                symbolContainer.x = Math.round(SYMBOL_SIZE / 2);

                const ItemObj = {
                    itemId: randomItemId,
                    itemSymbol: symbolContainer,
                }

                rowContainer.addChild(symbolContainer);
                switch (j) {
                    case 0:
                        this.gameCombo.a.push(ItemObj);
                        break;
                    case 1:
                        this.gameCombo.b.push(ItemObj);
                        break;
                    case 2:
                        this.gameCombo.c.push(ItemObj);
                        break;
                    default: console.log("error value");

                }

            }

        }
        this.gameAreaContainer.y = app.screen.height / 2;
        this.gameAreaContainer.x = app.screen.width / 2 - 100;
        this.gameAreaContainer.pivot.set(this.gameAreaContainer.width / 2, this.gameAreaContainer.height / 2);
        this.gameSceneContainer.addChild(this.gameAreaContainer);
    }

    _generateAnimationGameArea() {
        this.animationReelsContainer = new PIXI.Container();
        const arrayItemsForAnim = [];
        for (let i = 0; i < 3; i += 1) {
            const rowContainer = new PIXI.Container();
            rowContainer.x = i * ROW_WIDTH * 1.5;
            this.animationReelsContainer.addChild(rowContainer);
            const row = {
                symbols: [],
            };

            for (let j = 0; j < 6; j += 1) {
                let randomItemId = generateRandomInt(0, this.gameItemsArr.length - 1);
                const symbolContainer = new PIXI.Container();
                const symbol = new PIXI.Sprite.from(this.gameItemsArr[randomItemId].itemSkin);
                symbol.y = 0;
                symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
                symbol.x = 0;
                symbol.anchor.set(0.5);
                symbolContainer.addChild(symbol);
                symbolContainer.y = j * SYMBOL_SIZE;
                symbolContainer.x = Math.round(SYMBOL_SIZE / 2);
                row.symbols.push(symbolContainer);
                rowContainer.addChild(symbolContainer);

            }
            arrayItemsForAnim.push(row);
        }
        animationsReels(arrayItemsForAnim)
        this.animationReelsContainer.y = app.screen.height - 100;
        this.animationReelsContainer.x = (app.screen.width / 2) - 100;
        this.animationReelsContainer.pivot.set(this.animationReelsContainer.width / 2, this.animationReelsContainer.height / 2);
        this.gameSceneContainer.addChild(this.animationReelsContainer)
    }
}