import { Scene } from "./base/scene";
import { FpsMeter } from "./fps-meter";
import * as PIXI from 'pixi.js';
import { Engine } from "./base/engine";

let fpsMeter: FpsMeter;

export class MainScene extends Scene {
    private sprite;

    constructor() {
        super();
        this.sprite = PIXI.Sprite.from('images/logo.png');

    }

    create(engine: Engine) {
        /* Sprite */
        this.sprite.anchor.set(0.5);
        this.sprite.x = engine.renderer.width / 2;
        this.sprite.y = engine.renderer.height / 2;
        engine.stage.addChild(this.sprite);

        /* FPS */
        const fpsMeterItem = document.createElement('div');
        fpsMeterItem.classList.add('fps');
        engine.container.appendChild(fpsMeterItem);

        fpsMeter = new FpsMeter(() => {
            fpsMeterItem.innerHTML = 'FPS: ' + fpsMeter.getFrameRate().toFixed(2).toString();
        });

    };

    update() {
        this.sprite.rotation += 0.02;
        fpsMeter.updateTime();
        fpsMeter.tick();
    };
}