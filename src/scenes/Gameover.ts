export default class Gameover extends Phaser.Scene{

    gameovertext: Phaser.GameObjects.Text
   
   
    highscoretext: Phaser.GameObjects.Text;
    highscoretext2: Phaser.GameObjects.Text;
    scoretext: Phaser.GameObjects.Text;
    scoretext2: Phaser.GameObjects.Text;
    Fullscreenevent;
    menurect: Phaser.GameObjects.Rectangle
    menutext: Phaser.GameObjects.Text;
    distancecounter: number

    cointext: Phaser.GameObjects.Text;
    coinscounter: number;
    coinobj: Phaser.GameObjects.Image
    coinsnumber: Phaser.GameObjects.Text;

    factor:number = 0.4;

    params: Params; 

    constructor() {

        super("Gameover") 
    
    
    }

    preload(){
        this.load.image("menu", "/htdocs/assets/images/menu.png")

        this.load.image("coin", "/htdocs/assets/images/coin.png")
        this.load.image("chassis", "/htdocs/assets/images/Car.png")
        this.load.image("chassis_blue", "/htdocs/assets/images/Car_blue.png")
        this.load.image("chassis_yellow", "/htdocs/assets/images/Car_yellow.png")
        this.load.image("chassis_green", "/htdocs/assets/images/Car_green.png")
        this.load.image("chassis_grey", "/htdocs/assets/images/Car_grey.png")
        this.load.image("wheel", "/htdocs/assets/images/Wheel.png")

    }

    init(params: Params){
        this.params = params
          
    }

    create(){
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.image(screenCenterX, screenCenterY, "menu")
        
        this.coinscounter = this.params.coins;
        console.log(this.coinscounter)
        this.distancecounter = this.params.score

        this.coinsnumber = this.add.text(200, 55, "" + this.coinscounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)

        this.coinobj = this.add.image(screenCenterX - 900, screenCenterY -475,"coin").setOrigin(0.5).setScale(0.15);
        // this.cointext = this.add.text(this.coinobj.x + 75, this.coinobj.y, this.params.coins.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)

        this.gameovertext = this.add.text(screenCenterX, screenCenterY - 350, "GAME OVER", {
                    
            fontFamily: "hillclimbracing",
            fontSize: "100px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.add.image(screenCenterX - 745, screenCenterY - 130, "wheel").setScale(this.factor)
        this.add.image(screenCenterX - 470, screenCenterY - 130, "wheel").setScale(this.factor)
        this.add.image(screenCenterX - 600, screenCenterY - 200, "chassis").setScale(this.factor)


       

        // this.highscoretext = this.add.text(screenCenterX , screenCenterY - 200, "HIGHSCORE: " + this.params.highscore, {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)

        // this.highscoretext2 = this.add.text(screenCenterX + 500, screenCenterY - 200, this.params.highscore.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)
       

        this.scoretext = this.add.text(screenCenterX , screenCenterY - 100, "SCORE:                                 " + Math.round(this.distancecounter/10) + " m", {
                    
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)


        // this.scoretext2 = this.add.text(screenCenterX + 500, screenCenterY - 100, this.params.score.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)

        this.menurect = this.add.rectangle(screenCenterX+560, screenCenterY + 200, 275, 150, 0x49B675).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            let params: Params = {
                coins: this.coinscounter,
                fuel: this.params.fuel,
                highscore: this.params.highscore,
                highscore2: this.params.highscore2,
                highscore3: this.params.highscore3,
                score: this.params.score,
                carcolor: this.params.carcolor,
                carcolor2: this.params.carcolor2,
                map: this.params.map,
                vehicle: this.params.vehicle,
                fuellevel: this.params.fuellevel,
                enginelevel: this.params.enginelevel,
                accelerationlevel: this.params.accelerationlevel,
                wheellevel: this.params.wheellevel,
                fuellevel2: this.params.fuellevel2,
                enginelevel2: this.params.enginelevel2,
                accelerationlevel2: this.params.accelerationlevel2,
                wheellevel2: this.params.wheellevel2,
                character: this.params.character,
                rim: this.params.rim,
                bluestatus: this.params.bluestatus,
                greystatus: this.params.greystatus,
                greenstatus: this.params.greenstatus,
                yellowstatus: this.params.yellowstatus,
                sportstatus: this.params.sportstatus,
                bbsstatus: this.params.bbsstatus,
                hobbesstatus: this.params.hobbesstatus,
                calvinstatus: this.params.calvinstatus,
                wheellevel3: this.params.wheellevel3,
                fuellevel3: this.params.fuellevel3,
                accelerationlevel3: this.params.accelerationlevel3,
                enginelevel3: this.params.enginelevel3,
                friction: this.params.friction,
                accelerationoffset: this.params.accelerationoffset,
                enginepower : this.params.enginepower,
                fueltank: this.params.fueltank
                
            }

            this.scene.start("Menu", params)
            
            
            
            
        })
        this.menutext = this.add.text(screenCenterX+560, screenCenterY+200, "MENU", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

       

        
       

        this.Fullscreenevent = this.input.keyboard.addKey("F");

        this.Fullscreenevent.on("down", function() {
    
    
            if(this.scale.isFullscreen) {
                
                this.scale.stopFullscreen();
                
            } else {
    
                this.scale.startFullscreen();
    
            }
    
        }, this);

    }

    update(){



    }



}