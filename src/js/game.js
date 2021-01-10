import { GlowFilter } from 'pixi-filters';
import soundPlay from '../assets/sound/runPlay.mp3';
import soundsWin from '../assets/sound/won.mp3';
import soundsClick from '../assets/sound/click.mp3';
import soundBg from '../assets/sound/Sound_fon.mp3';
import app from './appConfig.js';
import Loader from '../utils/loader.js';
import GameItem from './gameItem.js';
import { gameProperty } from './gameProperty';
import ButtonPlay from './components/ButtonPlay.js';
import GameScene from './scenes/gameScene.js';
import CreditsPanel from './components/creditsPanel.js';
import { checkPlayResult } from './logics/checkPlayResult.js';
import WinScenes from './scenes/winScene.js';
import GameOverScene from './scenes/gameOverScene.js';
import PreloadScene from './scenes/preloadScene.js';

const INITIAL_CREDITS = 1000;
const INITIAL_TIME_PLAY = 300;
const INITIAL_TIME_WIN = 300;
const WIN_PRIZE = 10;
const SPINS_PRICE = 5;

const filterGlow = new GlowFilter({ innerStrength: 3, outerStrength: 10, color: 0xffffff });


class Game {
    constructor() {
        document.body.appendChild(app.view);
        this.gameScene = null;
        this.preloadScene = null;
        this.winScene = null;
        this.gameOverScene = null;
        this.buttonPlay = null;
        this.creditsPanel = null;
        this.isLoadingGame = true;
        this.targetClick = false;
        this.targetWin = false;
        this.spinResult = null;
        this.state;
        this.soundWin = new Audio(soundsWin);
        this.soundClick = new Audio(soundsClick);
        this.soundsPlay = new Audio(soundPlay);
        this.soundsBg = new Audio(soundBg);
        this.load();
    }

    load() {
        Loader.loadAllTextures(() => {
            this.start();
        });
    }

    start() {
        //initialize game item
        const gameItemsArr = new GameItem().getGameItems();
        //initialize timer
        gameProperty.timePlay = INITIAL_TIME_PLAY;
        gameProperty.timeWinView = INITIAL_TIME_WIN;

        //initialize start credits
        gameProperty.credits = INITIAL_CREDITS;

        //initialize game scene
        this.gameScene = new GameScene(gameItemsArr);
        const gameSceneContainer = this.gameScene.getGameSceneContainer();

        //initialize button Play
        this.buttonPlay = new ButtonPlay();
        const buttonPlayContainer = this.buttonPlay.getButtonPlayContainer();
        buttonPlayContainer.position.set(app.screen.width - 130, app.screen.height / 2);
        buttonPlayContainer.anchor.set(0.5);
        buttonPlayContainer.on('pointerdown', this.handlerClickPlay.bind(this));
        gameSceneContainer.addChild(buttonPlayContainer);

        //initialize creditsPanel
        this.creditsPanel = new CreditsPanel(gameProperty.credits, gameProperty.winSalary);
        const creditsPanelContainer = this.creditsPanel.getCreditsPanelContainer();
        creditsPanelContainer.x = app.screen.width - 135;
        creditsPanelContainer.y = app.screen.height - 200;
        gameSceneContainer.addChild(creditsPanelContainer);

        //initialize win scene
        this.winScene = new WinScenes();
        const winSceneContainer = this.winScene.getWinSceneContainer();
        const buttonNext = this.winScene.getButtonNext();
        buttonNext.on('pointerdown', this.handlerClickNextPlay.bind(this));
        this.winScene.hiddenWinScene();

        //initialize game over scene
        this.gameOverScene = new GameOverScene();
        const gameOverSceneContainer = this.gameOverScene.getGameOverSceneContainer();
        const buttonNewGame = this.gameOverScene.getButtonNewGame();
        buttonNewGame.on('pointerdown', this.handlerClickNewGame.bind(this));
        this.gameOverScene.hiddenGameOverScene();

        //initialize preloadScene
        this.preloadScene = new PreloadScene();
        const preloadSceneContainer = this.preloadScene.getPreloadSceneContainer();
        this.preloadScene.visiblePreloadingScene();

        this.gameScene.hiddenAnimationsReels();
        this.gameScene.generateRandomArea();


       
        app.stage.addChild(gameSceneContainer);
        app.stage.addChild(winSceneContainer);
        app.stage.addChild(gameOverSceneContainer);
        app.stage.addChild(preloadSceneContainer);

        this.state = this.update;
        app.ticker.add(delta => this.gameLoop(delta));
    }

    //game event preloading event
    eventPreloadingGame() {
        if (this.isLoadingGame) {
            gameProperty.timeLoadingGame -= 1;
        } else {
            return;
        }

        if (gameProperty.timeLoadingGame == 0) {
            this.isLoadingGame = false;
            this.preloadScene.hiddenPreloadingScene();
            this.gameScene.visibleGameScene();
        }
    }


    //Button Play handler
    handlerClickPlay() {
        if (!this.targetClick) {
            if (!gameProperty.credits) {
                this.gameOverScene.visibleGameOverScene();
                return;
            }

            this.targetClick = true;
            gameProperty.timePlay = INITIAL_TIME_PLAY;
            this.buttonPlay.disable();
            gameProperty.credits -= SPINS_PRICE;
            this.creditsPanel.setCreditsText(gameProperty.credits);
            this.gameScene.generateRandomArea()
            const gameCombo = this.gameScene.getGameCombo()
            this.spinResult = checkPlayResult(gameCombo);
            this.gameScene.hiddenRandomGameArea();
            this.gameScene.visibleAnimationReels();

            this.soundClick.play();
            this.soundsPlay.play();
            this.soundsBg.play();
            this.soundsBg.loop = true;
        }
    }
    //NextPlay button handler
    handlerClickNextPlay() {
        this.targetWin = false;
        gameProperty.timeWinView = INITIAL_TIME_WIN;
        this.winScene.hiddenWinScene();
    }

    //New Game button handler
    handlerClickNewGame() {
        gameProperty.credits = INITIAL_CREDITS;
        gameProperty.winSalary = 0;
        this.creditsPanel.setWinSalaryText(gameProperty.winSalary);
        this.creditsPanel.setCreditsText(gameProperty.credits);
        this.gameOverScene.hiddenGameOverScene();
    }

    gameLoop(delta) {
        this.state(delta);
    }

    update() {
        this.eventPreloadingGame();
        this.groupSpinEvents();
        this.winAutoHidden();
    }

    groupSpinEvents() {
        if (this.targetClick) {
            gameProperty.timePlay -= 1;

            if (gameProperty.timePlay == 0) {
                this.targetClick = false;
                this.buttonPlay.active();
                this.gameScene.hiddenAnimationsReels();
                this.gameScene.visibleRandomGameArea();
                const { win, loss, resultLineItem } = this.spinResult;
                this.soundsPlay.pause();
                this.soundsPlay.currentTime = 0;
                if (win) {
                    resultLineItem.forEach(item => item.itemSymbol.children[0].filters = [filterGlow]);
                    this.winScene.visibleWinScene(WIN_PRIZE);
                    gameProperty.credits += WIN_PRIZE;
                    gameProperty.winSalary += WIN_PRIZE;
                    this.creditsPanel.setWinSalaryText(gameProperty.winSalary);
                    this.creditsPanel.setCreditsText(gameProperty.credits);

                    this.targetWin = true;
                    this.soundWin.play();
                    return;
                }
                if (loss) {
                    this.gameOverScene.visibleGameOverScene();
                    resultLineItem.forEach(item => item.itemSymbol.children[0].filters = [filterGlow]);
                    gameProperty.credits = 0;
                    this.creditsPanel.setCreditsText(gameProperty.credits);
                    return;
                }
            }
        }
    }

    winAutoHidden() {
        if (this.targetWin) {
            gameProperty.timeWinView -= 1;
            if (gameProperty.timeWinView == 0) {
                this.targetWin = false;
                this.winScene.hiddenWinScene();
                gameProperty.timeWinView = INITIAL_TIME_WIN;
            }
        }
    }

}

export default Game;