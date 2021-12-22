class Boom extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, 'boom', 'boom1');  // передача параметров в базовый класс
        this.scene = data.scene;
        this.scene.add.existing(this);
        const frames = this.scene.anims.generateFrameNames('boom', {
            prefix: 'boom',
            start: 1,
            end: 4,
        })
        this.scene.anims.create({
            key: 'collision',
            frames,
            frameRate: 10,
            repeat: 0,
        })
        this.play('collision');
        this.on('animationcomplete', () => this.destroy())

    }
}