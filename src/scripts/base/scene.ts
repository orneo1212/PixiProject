import { Engine } from "./engine";

export abstract class Scene {
    abstract create(engine: Engine): void;
    abstract update(): void;
}