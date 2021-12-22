class MovableObject extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, data.texture, data.frame, data.velocity);  // передача параметров в базовый класс
        this.init(data);
    }
    
    init(data) {
        this.scene.add.existing(this);  // чтобы добавить спрайт на сцену (экран)
        this.scene.physics.add.existing(this); // Добавление объекта в физический движок, указав, что унего будеи физ тело
        this.body.enable = true;    // устанавливает физическое тело
        this.velocity = data.velocity;
        this.scene.events.on('update', this.update, this)  //отслеживаем события изменения сцены. которе доступно в объекте scene
    }
    reset(x, y) {
        this.x = x;
        this.y = y;
        this.setAlive(true);
    }
    isDead() {
        return false;
    }
    update() {
        if (this.active && this.isDead()) {
            this.setAlive(false);
        } 
    }
    setAlive(status) {
        // деактивация/активация физ тела
        this.body.enable = status;
        //скрыть/показать текстуры
        this.setVisible(status);
        //деактивация/активация объекта
        this.setActive(status);
        if (this.timer) {
            if (!status) {
                this.timer.paused = true;
            } else {
                this.timer.paused = false;
            }
        }
        if (!status) {
            this.emit('killed'); // Запуск отслеживаемого события killed для данного игрового объекта

        }
    }
    move() {
        this.body.setVelocityX(this.velocity);
    }
    
}