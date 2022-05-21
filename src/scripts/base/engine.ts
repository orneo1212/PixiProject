import * as PIXI from 'pixi.js';
import { Scene } from './scene';

interface EngineParams {
    containerId: string,
    width: number,
    height: number,
    fpsMax: number;
    resizeTo: HTMLElement | Window;
}

export class Engine extends PIXI.Application {
    public container: HTMLElement;
    public fpsMax: number;
    private scene: Scene | null;

    constructor(params: EngineParams) {
        super(params);
        this.fpsMax = params.fpsMax;
        this.ticker.maxFPS = params.fpsMax;
        this.scene = null;

        this.container = params.containerId ? document.getElementById(params.containerId) || document.body : document.body;
        this.container.appendChild(this.renderer.view);
    }

    setScene(scene: Scene) {
        if (this.scene !== null)
            this.ticker.remove(this.scene.update);
        this.scene = scene;
        this.scene.create(this);
        this.ticker.add(this.scene.update.bind(this.scene));
    }
}