
import { Engine } from './base/engine';
import { MainScene } from './mainscene';

// Create engine
const engine = new Engine({
    containerId: 'game',
    width: window.innerWidth,
    height: window.innerHeight,
    fpsMax: 60,
    resizeTo: window
});

// Load first scene
window.onload = () => {
    engine.setScene(new MainScene());
};
