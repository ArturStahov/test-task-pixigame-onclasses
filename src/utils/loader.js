import * as PIXI from "pixi.js";
import '../assets/assets.json';
import '../assets/assets.png';

class Loader {
    static loadAllTextures(callback) {
        const loaders = new PIXI.Loader();
        loaders.add('./assets/assets.json')
        loaders.load(() => {
            callback();
        });
    }

}

export default Loader;