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
    distancehighscore;

    //Fuel
    fuelnumber: Phaser.GameObjects.Text;
    fuelcounter;

    params: Params;

    

    //Background
    private paralaxbackgrounds: {ratioX: number, sprite: Phaser.GameObjects.TileSprite} [] = []

    //Settings
    settings;
    settingsetting;
    settingmenu;
    settingresume;
    settingrect;
    resumebutton;

    settingtext;
    settingmenutext;
    settingresumetext;

    //Particles
    particlesX;
    particlesY;

    

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
        this.load.image("fuel", "/htdocs/assets/images/fuel.png")
        this.load.image("house", "/htdocs/assets/images/house.png")
        this.load.image("body","/htdocs/assets/images/body.png")
        this.load.image("head","/htdocs/assets/images/head.png")
        this.load.image("settings", "/htdocs/assets/images/settings_icon.png")
        this.load.image("wheel_bbs", "/htdocs/assets/images/Wheel_BBS.png")
        this.load.image("wheel_offroad", "/htdocs/assets/images/Wheel_Offroad.png")
        this.load.image("dirt", "/htdocs/assets/images/dirt.png")

        this.load.image("chassis_blue", "/htdocs/assets/images/Car_blue.png")
        this.load.image("chassis_yellow", "/htdocs/assets/images/Car_yellow.png")
        this.load.image("chassis_green", "/htdocs/assets/images/Car_green.png")
        this.load.image("chassis_grey", "/htdocs/assets/images/Car_grey.png")
        this.load.image("chassis_golf_mk2", "/htdocs/assets/images/Golf_MK2.png")
    }


    init(params: Params){
        this.params = params;
      
    }

    create() {
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        
        // this.cameras.main.startFollow(this.car,true, 0.5, 0.5, 0.5, 0.5)
        // this.cameras.main.setRoundPixels(true);
        
        this.add.image(0, 0, "background_sky").setOrigin(0,0).setScale(2.5).setDepth(-3).setScrollFactor(0)
        this.add.image(15, 15, "coin").setOrigin(0,0).setScale(0.15).setScrollFactor(0).setDepth(3)
        this.add.image(1820 ,15, "settings").setOrigin(0,0).setScale(0.155).setScrollFactor(0).setDepth(3)

        this.fuelcounter = 100;

        let particles = this.add.particles("dirt");

        

        particles.createEmitter({
            x: this.particlesX,
            y: this.particlesY,
            lifespan: 500,
            speed: {min: 100, max: 300},
            angle: 210,
            gravityY: 300,
            scale: {start: 0.2, end: 0},
            quantity: 0.3,
            blendMode: "ADD"
        })
 
        

        this.add.rectangle(1820, 15, 500,500, 0x000000, 0).setOrigin(0,0).setScrollFactor(0).setScale(0.155).setDepth(3).setInteractive().on("pointerdown", () =>{
            
            
            
            this.settingrect = this.add.rectangle(screenCenterX, screenCenterY, 600, 400, 0x565656, 1).setScrollFactor(0).setStrokeStyle(5, 0x000000, 1)
            this.settingsetting = this.add.rectangle(screenCenterX, screenCenterY - 200, 550, 100, 0x565656, 1).setScrollFactor(0).setStrokeStyle(5, 0x000000, 1)
            this.settingresume = this.add.rectangle(screenCenterX, screenCenterY -50, 550, 100, 0x565656, 1).setScrollFactor(0).setStrokeStyle(5, 0x000000, 1)
            
            this.settingmenu = this.add.rectangle(screenCenterX, screenCenterY +100, 550, 100, 0x565656, 1).setScrollFactor(0).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                
                let params: Params = {
                    coins: this.coinscounter,
                    fuel: this.fuelcounter,
                    highscore: this.distancehighscore,
                    score: this.distancecounter,
                    carcolor: this.params.carcolor
                    
                }
                this.scene.start("Menu", params);
            })
            
            this.settingtext = this.add.text(screenCenterX , screenCenterY - 200, "SETTINGS", {
                
                fontFamily: "hillclimbracing",
                fontSize: "60px",
                color: "#FFFFFF",
                align: "center",
                stroke: "#000000",
                strokeThickness: 10
                
            }).setOrigin(0.5).setScrollFactor(0)
            
            this.settingmenutext = this.add.text(screenCenterX , screenCenterY +100, "MENU", {
                
                fontFamily: "hillclimbracing",
                fontSize: "60px",
                color: "#FFFFFF",
                align: "center",
                stroke: "#000000",
                strokeThickness: 10
                
            }).setOrigin(0.5).setScrollFactor(0)
            
            this.settingresumetext = this.add.text(screenCenterX , screenCenterY -50, "RESUME", {
                
                fontFamily: "hillclimbracing",
                fontSize: "60px",
                color: "#FFFFFF",
                align: "center",
                stroke: "#000000",
                strokeThickness: 10
                
            }).setOrigin(0.5).setScrollFactor(0)
            
            this.resumebutton = this.add.rectangle(screenCenterX, screenCenterY -50, 550, 100, 0x000000, 0).setScrollFactor(0).setInteractive().on( "pointerdown", () => {
                this.settingrect.setVisible(false);
                this.settingsetting.setVisible(false);
                this.settingmenu.setVisible(false);
                this.settingmenutext.setVisible(false);
                this.settingtext.setVisible(false);  
                this.settingresumetext.setVisible(false);
                this.settingresume.setVisible(false);
            })


        })

        this.paralaxbackgrounds.push( {
            ratioX: 0.1,
            sprite: this.add.tileSprite(0, 690, innerWidth, 400, "background_mountains").setOrigin(0,0).setScrollFactor(0).setDepth(-3).setAlpha(0.7)

        })
       
        this.distance = this.add.text(screenCenterX, 50, "DISTANCE", {
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)
        
        this.distancenumber = this.add.text(screenCenterX, 120, "" + this.distancecounter, {


            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)


        this.fuelnumber = this.add.text(1700,50, "" + this.fuelcounter + " %",{
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
        
        
        this.coinsnumber = this.add.text(120, 55, "" + this.coinscounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)
        
        let collectables = this.map.getObjectLayer("Collectables");
        let coins = collectables.objects.find(obj => obj.type == "coins");
        let fuel = collectables.objects.find(obj => obj.type == "fuel");
        var collectableslayer = this.map.createFromObjects("Collectables", [{
            gid: 2,
            key: "coin"
        },
        {
            gid: 3,
            key: "fuel"

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
    
    
    collect(chassis: Phaser.Physics.Arcade.Sprite, collectables: Phaser.Physics.Arcade.Sprite) {

        if(collectables.texture.key == "coin") {
            
            collectables.destroy(true)
            this.coinscounter++;
            this.coinsnumber.setText("" + this.coinscounter)
            
        }else if(collectables.texture.key == "fuel"){
            collectables.destroy(true);
            this.fuelcounter = 100;
            


        }

        
    }
    
    
    

    private addPolygon(polygon: Phaser.Types.Tilemaps.TiledObject) {
        let polygonVectors: Phaser.Types.Math.Vector2Like[] = polygon.polygon;

        /**
         * Tiled speichert ein Polygon als Liste von Punkten mit Koordinaten relativ zu einem "Ankerpunkt" mit den Koordinaten (polygon.x, polygon.y).
         * Da wir die Polygonpunkte in absoluten Koordinaten brauchen, addieren wir zun??chst die Ankerpunkte:
         */
        for (let p of polygonVectors) {
            p.x += polygon.x;
            p.y += polygon.y;
        }

        // let polygonVectors:Phaser.Types.Math.Vector2Like[] = [{x: 0, y: 500}, {x: 800, y: 500}, {x: 800, y: 1000}, {x: 0, y: 1000} ];
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
         * Die Methode Matter.Bodies.fromVertices verschiebt den K??rper so, dass sein Schwerpunkt an den Koordinaten (0,0) zu liegen kommt.
         * Leider speichert es nirgends ab, um wie viel verschoben wurde. Um dies zu ermitteln, berechnen wir die BoundingBox des Polygons
         * (boundsBefore) und subtrahieren deren linke obere Ecke von der BoundinBox des K??rpers. Diese Verschiebung machen wir dann r??ckg??ngig.
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
        let character_head = this.car.matterCharacter[0];
        let character_body = this.car.matterCharacter[1];
        
        this.particlesX = wheelA.position.x
        this.particlesY = wheelA.position.y
        

        // this.cameras.main.setBounds(0, 0, this.map.width, this.map.height, false)
        this.cameras.main.centerOn(wheelA.position.x + 300, wheelA.position.y - 100)
        this.cameras.main.zoom = 1
        // set the smooth zoom
        // const wheelRear = this.car.matterChassis
        // const currentZoom = this.cameras.main.zoom
        // let zoom = 1 - wheelRear.angularVelocity / 1.65
        // if (zoom > currentZoom + currentZoom * 0.0022) zoom = currentZoom + currentZoom * 0.0022
        // else if (zoom < currentZoom - currentZoom * 0.0022) zoom = currentZoom - currentZoom * 0.0022
        // if (zoom > 1) zoom = 1.3
        // if (zoom < 0.6) zoom = 1
        // this.cameras.main.setZoom(zoom)

        for(let i = 0; i < this.paralaxbackgrounds.length; ++i) {
            const pbg = this.paralaxbackgrounds[i];

            pbg.sprite.tilePositionX = this.cameras.main.scrollX * pbg.ratioX
        }

    



        //angularVelocity normal: 0.005
        let angularVelocity = 0.001
        
        this.distancecounter = (wheelA.position.x - 160) / 10
        this.distancenumber.setText("" + Math.round(this.distancecounter / 10) + " m")

        if (this.keyD.isDown && this.fuelcounter > 0 || this.cursors.right.isDown && this.fuelcounter > 0) {
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

          

              this.fuelcounter = this.fuelcounter - 0.02;
              this.fuelnumber.setText("" + Math.round(this.fuelcounter) + " %");
    
          
                if (!this.wheelsDown.rear && !this.wheelsDown.front) Matter.Body.setAngularVelocity(carBody, -angularVelocity)
        } else if (this.keyA.isDown && this.fuelcounter > 0 || this.cursors.left.isDown && this.fuelcounter > 0) {
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

          
       

              this.fuelcounter = this.fuelcounter - 0.02;
              this.fuelnumber.setText("" + Math.round(this.fuelcounter) + " %");

         
            
                if (!this.wheelsDown.rear && !this.wheelsDown.front) Matter.Body.setAngularVelocity(carBody, angularVelocity)

    }



        this.fuelcounter = this.fuelcounter - 0.01;
        this.fuelnumber.setText("" + Math.round(this.fuelcounter) + " %");

        
        if(this.distancecounter > this.distancehighscore){
            this.distancehighscore = this.distancecounter

        }


        if(this.fuelcounter < 0){
            this.fuelcounter = 0;


        }

        if(this.fuelcounter <= 0){

            this.scene.start("Gameover", this.params);


        }

      


}
}