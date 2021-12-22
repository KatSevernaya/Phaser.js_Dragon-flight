
let config = {
    type: Phaser.AUTO, // webgl or canvas
    width: 1280,
    height: 720,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    drangons: [1, 2, 3, 4, 5, 6],
    physics: {
        default: 'arcade',
        arcade: {
            debag: false
        }
    }
};

let game = new Phaser.Game(config);