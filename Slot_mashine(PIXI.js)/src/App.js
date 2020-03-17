class App extends PIXI.Container {

    constructor() {
        super();
        this.controller = null;

        new Loader(this.init.bind(this));
    }

    init() {
        let background = new Background();
        this.addChild(background);

        this.controller = new GameController();
        this.addChild(this.controller);
        this.addChild(this.controller.createMask());

        let button = new Button(this.onSpinStart.bind(this));
        this.addChild(button);
    }

    onSpinStart() {
        this.controller.startRotation();
    }
}

const load = () => {
    let app = new App();

    let renderer = PIXI.autoDetectRenderer({
        backgroundColor: 0xf0f0f0,
        width: 1920,
        height: 999
    });
    document.body.appendChild(renderer.view);
    requestAnimationFrame(animate);

    function animate() {
        renderer.render(app);
        requestAnimationFrame(animate);
        PIXI.tweenManager.update();
    }

};
window.onload = load;