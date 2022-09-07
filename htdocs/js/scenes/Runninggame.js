import { Car } from "./Car.js";
export default class Runninggame extends Phaser.Scene {
    constructor() {
        super("Runninggame");
        this.bodies = [];
        this.matterBodies = [];
        this.coinscounter = 0;
        this.distancecounter = 0;
        //Background
        this.paralaxbackgrounds = [];
        //Fahren des Autos MAX_SPEED normal: 0.75
        this.MAX_SPEED = 0.3;
        this.MAX_SPEED_BACKWARDS = this.MAX_SPEED * 0.3;
        this.ACCELERATION = this.MAX_SPEED / 130;
        this.ACCELERATION_BACKWARDS = this.ACCELERATION * 0.3;
        this.gas = {
            right: false,
            left: false
        };
        this.wheelsDown = {
            rear: false,
            front: false
        };
    }
    preload() {
        this.load.image("spritesheet", "/htdocs/assets/images/spritesheet.png");
        this.load.tilemapTiledJSON("map", "/htdocs/assets/map/map.json");
        this.load.image("chassis", "/htdocs/assets/images/Car.png");
        this.load.image("wheel", "/htdocs/assets/images/Wheel.png");
        this.load.image("background_sky", "/htdocs/assets/images/background_sky.png");
        this.load.image("background_mountains", "/htdocs/assets/images/background_mountains.png");
    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // this.cameras.main.startFollow(this.car,true, 0.5, 0.5, 0.5, 0.5)
        // this.cameras.main.setRoundPixels(true);
        this.add.image(0, 0, "background_sky").setOrigin(0, 0).setScale(2.5).setDepth(-3).setScrollFactor(0);
        this.paralaxbackgrounds.push({
            ratioX: 0.1,
            sprite: this.add.tileSprite(0, 690, innerWidth, 400, "background_mountains").setOrigin(0, 0).setScrollFactor(0).setDepth(-3).setAlpha(0.7)
        });
        this.distance = this.add.text(screenCenterX, 50, "DISTANCE", {
            fontFamily: "hillclimbracing",
            fontSize: "80px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,
        }).setScrollFactor(0).setOrigin(0.5);
        this.distancenumber = this.add.text(screenCenterX, 120, "" + this.distancecounter, {
            fontFamily: "hillclimbracing",
            fontSize: "80px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,
        }).setScrollFactor(0).setOrigin(0.5);
        this.engine = Matter.Engine.create({
            gravity: { y: 0.2 }
        });
        this.world = this.engine.world;
        this.map = this.make.tilemap({
            key: "map"
        });
        const spritesheet = this.map.addTilesetImage("HillClimbRacing_testmap", "spritesheet");
        const base = this.map.createLayer("Map", spritesheet);
        let objectLayer = this.map.getObjectLayer("Collisions");
        let polygon = objectLayer.objects.find(obj => obj.name == "Polygon1");
        let polygonVectors = polygon.polygon;
        /**
         * Tiled speichert ein Polygon als Liste von Punkten mit Koordinaten relativ zu einem "Ankerpunkt" mit den Koordinaten (polygon.x, polygon.y).
         * Da wir die Polygonpunkte in absoluten Koordinaten brauchen, addieren wir zunächst die Ankerpunkte:
         */
        for (let p of polygonVectors) {
            p.x += polygon.x;
            p.y += polygon.y;
        }
        //        let polygonVectors:Phaser.Types.Math.Vector2Like[] = [{x: 0, y: 500}, {x: 800, y: 500}, {x: 800, y: 1000}, {x: 0, y: 1000} ];
        // let poly = new Phaser.Geom.Polygon(polygonVectors);
        // let graphics = this.add.graphics();
        // graphics.fillStyle(0xff0000);
        // graphics.fillPoints(poly.points, true);
        let polygonString = polygonVectors.map(p => " " + p.x + " " + p.y).join().substring(1);
        //@ts-ignore
        let vertices = Matter.Vertices.fromPath(polygonString);
        /**
         * Die Methode Matter.Bodies.fromVertices verschiebt den Körper so, dass sein Schwerpunkt an den Koordinaten (0,0) zu liegen kommt.
         * Leider speichert es nirgends ab, um wie viel verschoben wurde. Um dies zu ermitteln, berechnen wir die BoundingBox des Polygons
         * (boundsBefore) und subtrahieren deren linke obere Ecke von der BoundinBox des Körpers. Diese Verschiebung machen wir dann rückgängig.
         */
        let boundsBefore = Matter.Bounds.create(vertices);
        let polygonBody = Matter.Bodies.fromVertices(0, 0, [vertices]);
        let dx = polygonBody.bounds.min.x - boundsBefore.min.x;
        let dy = polygonBody.bounds.min.y - boundsBefore.min.y;
        Matter.Body.setPosition(polygonBody, { x: -dx, y: -dy });
        polygonBody.friction = 0.5;
        polygonBody.isStatic = true;
        this.matterBodies.push(polygonBody);
        Matter.Composite.add(this.world, polygonBody);
        this.car = new Car(this, this.engine, this.world);
        Matter.Composite.add(this.world, this.car.matterCar);
        // this.coinsnumber = this.add.text(150, 50, "" + this.coinscounter, {
        //     stroke: "#ffffff",
        //     strokeThickness: 5,
        //     fontFamily: "hillclimbracing",
        //     color: "#ffffff",
        //     align: "center",
        //     fontSize: "55px"
        // }).setScrollFactor(0).setOrigin(0.5)
        // let collectables = this.map.getObjectLayer("Collectables");
        // let coins = collectables.objects.find(o => o.type == "coins");
        // var collectableslayer = this.map.createFromObjects("collectables", [{
        //     gid: 2,
        //     key: "coin"
        // }
        // ])
        // collectableslayer.forEach( (collectable:Phaser.Physics.Arcade.Sprite) => {
        //     this.physics.world.enable(collectable);
        //     //@ts-ignore
        //     collectable.body.setAllowGravity(false);
        //     this.physics.add.overlap(car.matterChassis, collectable, this.collect, null, this)
        // })
        // this.physics.add.collider(base, collectableslayer, null, null, this)
        // collect(this.car.matterChassis, collectables) {
        //     if(collectables.texture.key == "coin") {
        //         collectables.destroy(true)
        //         this.coinscounter++;
        //         this.coinsnumber.setText("" + this.coinscounter)
        //     }
        // }
        this.Fullscreenevent = this.input.keyboard.addKey("F");
        this.Fullscreenevent.on("down", function () {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update() {
        Matter.Engine.update(this.engine, 1000 / 60);
        this.car.adjustPhaserObjectsToMatter();
        let wheelA = this.car.matterWheels[0];
        let wheelB = this.car.matterWheels[1];
        let carBody = this.car.matterChassis;
        this.cameras.main.centerOn(wheelA.position.x + 300, wheelA.position.y - 100);
        // set the smooth zoom
        const wheelRear = this.car.matterChassis;
        const currentZoom = this.cameras.main.zoom;
        let zoom = 1 - wheelRear.angularVelocity / 1.65;
        if (zoom > currentZoom + currentZoom * 0.0022)
            zoom = currentZoom + currentZoom * 0.0022;
        else if (zoom < currentZoom - currentZoom * 0.0022)
            zoom = currentZoom - currentZoom * 0.0022;
        if (zoom > 1)
            zoom = 1;
        if (zoom < 0.6)
            zoom = 0.6;
        this.cameras.main.setZoom(zoom);
        for (let i = 0; i < this.paralaxbackgrounds.length; ++i) {
            const pbg = this.paralaxbackgrounds[i];
            pbg.sprite.tilePositionX = this.cameras.main.scrollX * pbg.ratioX;
        }
        //angularVelocity normal: 0.005
        let angularVelocity = 0.005;
        if (this.keyD.isDown || this.cursors.right.isDown) {
            let newSpeed = wheelB.angularSpeed <= 0 ? this.MAX_SPEED / 10 : wheelB.angularSpeed + this.ACCELERATION;
            if (newSpeed > this.MAX_SPEED)
                newSpeed = this.MAX_SPEED;
            Matter.Body.setAngularVelocity(wheelB, newSpeed);
            Matter.Body.setAngularVelocity(wheelA, newSpeed);
            this.distancecounter = this.distancecounter + 0.03;
            this.distancenumber.setText("" + Math.round(this.distancecounter));
            //   if (!this.wheelsDown.rear && !this.wheelsDown.front) Matter.Body.setAngularVelocity(carBody, -angularVelocity)
        }
        else if (this.keyA.isDown || this.cursors.left.isDown) {
            let newSpeed = wheelB.angularSpeed <= 0 ? this.MAX_SPEED_BACKWARDS / 10 : wheelB.angularSpeed + this.ACCELERATION_BACKWARDS;
            if (newSpeed > this.MAX_SPEED_BACKWARDS)
                newSpeed = this.MAX_SPEED_BACKWARDS;
            Matter.Body.setAngularVelocity(wheelB, -newSpeed);
            Matter.Body.setAngularVelocity(wheelA, -newSpeed);
            if (this.distancecounter > 0) {
                this.distancecounter = this.distancecounter - 0.03;
                this.distancenumber.setText("" + Math.round(this.distancecounter));
            }
            //   if (!this.wheelsDown.rear && !this.wheelsDown.front) Matter.Body.setAngularVelocity(carBody, angularVelocity)
        }
    }
}
//# sourceMappingURL=Runninggame.js.map