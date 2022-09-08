import { Car } from "./Car.js";

export default class Runninggame extends Phaser.Scene {


    
    engine: Matter.Engine;
    world: Matter.World;
    runner: Matter.Runner;

    Fullscreenevent: Phaser.Input.Keyboard.Key;
    map: Phaser.Tilemaps.Tilemap;

    bodies: { matterBody: Matter.Body, phaserShape: Phaser.GameObjects.Shape }[] = [];
    matterBodies:Matter.Body[] = []

    car: Car;
    antrieb = "AWD"; 



    spawnpoint;
    
    //Steuerung
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    keyA;
    keyD;

    //Coins
    coinsnumber: Phaser.GameObjects.Text;
    coinscounter = 0;

    //Distance
    distance: Phaser.GameObjects.Text;
    distancenumber: Phaser.GameObjects.Text;
    distancecounter = 0;

    //Fuel
    fuelnumber: Phaser.GameObjects.Text;
    fuelcounter = 100;

    //Background
    private paralaxbackgrounds: {ratioX: number, sprite: Phaser.GameObjects.TileSprite} [] = []

    //Fahren des Autos MAX_SPEED normal: 0.75
    readonly MAX_SPEED = 0.5
    readonly MAX_SPEED_BACKWARDS = this.MAX_SPEED * 0.75
    readonly ACCELERATION = this.MAX_SPEED / 130
    readonly ACCELERATION_BACKWARDS = this.ACCELERATION * 0.75
   
    gas = {
        right: false,
        left: false
      }
      wheelsDown = {
        rear: false,
        front: false
      }


    constructor() {

    super("Runninggame") 


    }



    preload() {

        this.load.image("spritesheet", "/htdocs/assets/images/spritesheet.png")
        this.load.tilemapTiledJSON("map", "/htdocs/assets/map/map.json")
        this.load.image("chassis", "/htdocs/assets/images/Car.png")
        this.load.image("wheel", "/htdocs/assets/images/Wheel.png")
        this.load.image("background_sky", "/htdocs/assets/images/background_sky.png")
        this.load.image("background_mountains", "/htdocs/assets/images/background_mountains.png")
        this.load.image("coin" , "/htdocs/assets/images/coin.png")
        this.load.image("house", "/htdocs/assets/images/house.png")

    }



    create() {
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        
        // this.cameras.main.startFollow(this.car,true, 0.5, 0.5, 0.5, 0.5)
        // this.cameras.main.setRoundPixels(true);
        
        this.add.image(0, 0, "background_sky").setOrigin(0,0).setScale(2.5).setDepth(-3).setScrollFactor(0)

        this.paralaxbackgrounds.push( {
            ratioX: 0.1,
            sprite: this.add.tileSprite(0, 690, innerWidth, 400, "background_mountains").setOrigin(0,0).setScrollFactor(0).setDepth(-3).setAlpha(0.7)

        })
       
        this.distance = this.add.text(screenCenterX, 50, "DISTANCE", {
            fontFamily: "hillclimbracing",
            fontSize: "80px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)
        
        this.distancenumber = this.add.text(screenCenterX, 120, "" + this.distancecounter, {


            fontFamily: "hillclimbracing",
            fontSize: "80px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)


        this.fuelnumber = this.add.text(100,50, "" + this.fuelcounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)

        this.engine = Matter.Engine.create({
            gravity: {y: 0.2}
        })

        this.world = this.engine.world;

        this.map = this.make.tilemap({
            key: "map"
        })

        const spritesheet = this.map.addTilesetImage("HillClimbRacing_testmap", "spritesheet");

        const base = this.map.createLayer("Map", spritesheet)

        let objectLayer = this.map.getObjectLayer("Collisions")


        // Start Methode

        for(let object of objectLayer.objects){
            this.addPolygon(object);
        }

        // Methode ende
        
        this.car = new Car(this, this.engine, this.world);
        Matter.Composite.add(this.world, this.car.matterCar);
        
        
        this.coinsnumber = this.add.text(100,115, "" + this.coinscounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)
        
        let collectables = this.map.getObjectLayer("Collectables");
        let coins = collectables.objects.find(obj => obj.type == "coins");
        var collectableslayer = this.map.createFromObjects("Collectables", [{
            gid: 2,
            key: "coin"
        }
        ])
        
        collectableslayer.forEach( (collectables:Phaser.Physics.Arcade.Sprite) => {
            this.physics.world.enable(collectables);
            //@ts-ignore
            collectables.body.setAllowGravity(false);
            
            this.physics.add.overlap(this.car.chassis, collectables, this.collect, null, this)
           
        })
        this.physics.add.collider(base, collectableslayer, null, null, this)
        


        this.Fullscreenevent = this.input.keyboard.addKey("F");
        
        this.Fullscreenevent.on("down", function() {
            
            
            if(this.scale.isFullscreen) {
                
                this.scale.stopFullscreen();
                
            } else {
                
                this.scale.startFullscreen();
                
            }
            
        }, this);

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

   
    collect(chassis: Phaser.GameObjects.Sprite, collectables: Phaser.Physics.Arcade.Sprite) {

        if(collectables.texture.key == "coin") {
            
            collectables.destroy(true)
            this.coinscounter++;
            this.coinsnumber.setText("" + this.coinscounter)
            
        }
    }

    
    

    private addPolygon(polygon: Phaser.Types.Tilemaps.TiledObject) {
        // let polygon = objectLayer.objects.find(obj => obj.name == id_from_tiled);
        let polygonVectors: Phaser.Types.Math.Vector2Like[] = polygon.polygon;

        /**
         * Tiled speichert ein Polygon als Liste von Punkten mit Koordinaten relativ zu einem "Ankerpunkt" mit den Koordinaten (polygon.x, polygon.y).
         * Da wir die Polygonpunkte in absoluten Koordinaten brauchen, addieren wir zunächst die Ankerpunkte:
         */
        for (let p of polygonVectors) {
            p.x += polygon.x;
            p.y += polygon.y;
        }

        //        let polygonVectors:Phaser.Types.Math.Vector2Like[] = [{x: 0, y: 500}, {x: 800, y: 500}, {x: 800, y: 1000}, {x: 0, y: 1000} ];
        let poly = new Phaser.Geom.Polygon(polygonVectors);
        let graphics = this.add.graphics();
        
        let colorAsString: string = polygon.properties.background_color;
        colorAsString = colorAsString.replace("#", "");
        let alphaAsString = colorAsString.substring(0, 2);
        colorAsString = colorAsString.substring(2);
        let color = Number.parseInt(colorAsString, 16);
        let alpha = Number.parseInt(alphaAsString, 16)/255.0;
        

        // let border_colorAsString: string = polygon.properties.border_color;
        // border_colorAsString = border_colorAsString.replace("#", "");
        // let borderalphaAsString = border_colorAsString.substring(0, 2);
        // border_colorAsString = border_colorAsString.substring(2);
        // let border_color = Number.parseInt(border_colorAsString, 16);
        // let border_alpha = Number.parseInt(borderalphaAsString, 16)/255.0;

        // graphics.lineStyle(border_color, border_alpha);
        graphics.fillStyle(color, alpha);
        graphics.fillPoints(poly.points, true);
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
        polygonBody.friction = polygon.properties.friction;


        polygonBody.isStatic = true;
        this.matterBodies.push(polygonBody);

        Matter.Composite.add(this.world, polygonBody);
    }

    update(time: number, delta: number) {

        Matter.Engine.update(this.engine, delta);
        this.car.adjustPhaserObjectsToMatter();
      
        let wheelA = this.car.matterWheels[0];
        let wheelB = this.car.matterWheels[1];
        let carBody = this.car.matterChassis;
        
        this.cameras.main.centerOn(wheelA.position.x + 300, wheelA.position.y - 100)
        // set the smooth zoom
        // const wheelRear = this.car.matterChassis
        // const currentZoom = this.cameras.main.zoom
        // let zoom = 1 - wheelRear.angularVelocity / 1.65
        // if (zoom > currentZoom + currentZoom * 0.0022) zoom = currentZoom + currentZoom * 0.0022
        // else if (zoom < currentZoom - currentZoom * 0.0022) zoom = currentZoom - currentZoom * 0.0022
        // if (zoom > 1) zoom = 1
        // if (zoom < 0.6) zoom = 0.6
        // this.cameras.main.setZoom(zoom)

        for(let i = 0; i < this.paralaxbackgrounds.length; ++i) {
            const pbg = this.paralaxbackgrounds[i];

            pbg.sprite.tilePositionX = this.cameras.main.scrollX * pbg.ratioX
        }

        
        //angularVelocity normal: 0.005
        let angularVelocity = 0.003

        if (this.keyD.isDown || this.cursors.right.isDown) {
          let newSpeed = 
            wheelB.angularSpeed <= 0 ? this.MAX_SPEED / 10 : wheelB.angularSpeed + this.ACCELERATION
          if (newSpeed > this.MAX_SPEED) newSpeed = this.MAX_SPEED
          if (this.antrieb == "AWD"){
          Matter.Body.setAngularVelocity(wheelB, newSpeed)
          Matter.Body.setAngularVelocity(wheelA, newSpeed)
          }else if(this.antrieb == "RWD"){
          Matter.Body.setAngularVelocity(wheelA, newSpeed);  
          }else if(this.antrieb == "FWD"){
            Matter.Body.setAngularVelocity(wheelB, newSpeed);
          }






        this.distancecounter = this.distancecounter + 0.03 
        this.distancenumber.setText("" + Math.round(this.distancecounter))
        
        //   if (!this.wheelsDown.rear && !this.wheelsDown.front) Matter.Body.setAngularVelocity(carBody, -angularVelocity)
        } else if (this.keyA.isDown || this.cursors.left.isDown) {
          let newSpeed =
            wheelB.angularSpeed <= 0 ? this.MAX_SPEED_BACKWARDS / 10 : wheelB.angularSpeed + this.ACCELERATION_BACKWARDS
          if (newSpeed > this.MAX_SPEED_BACKWARDS) newSpeed = this.MAX_SPEED_BACKWARDS
          if (this.antrieb == "AWD"){
          Matter.Body.setAngularVelocity(wheelB, -newSpeed)
          Matter.Body.setAngularVelocity(wheelA, -newSpeed)
          }else if(this.antrieb == "RWD"){
            Matter.Body.setAngularVelocity(wheelA, -newSpeed);  
          }else if(this.antrieb == "FWD"){
              Matter.Body.setAngularVelocity(wheelB, -newSpeed);
          }

          if(this.distancecounter > 0) {
          this.distancecounter = this.distancecounter - 0.03
          this.distancenumber.setText("" + Math.round(this.distancecounter))
          }
        //   if (!this.wheelsDown.rear && !this.wheelsDown.front) Matter.Body.setAngularVelocity(carBody, angularVelocity)
        
        
        // for(this.fuelcounter; this.fuelcounter > 0; this.fuelcounter - 0.5){

        //     this.fuelnumber.setText("" + Math.round(this.fuelcounter))
        // }
       
    }

}
}