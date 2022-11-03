import { isLineBreak, isThisTypeNode } from "../../node_modules/typescript/lib/typescript";

export default class Menu extends Phaser.Scene {

    Fullscreenevent;
    backgroundmusic;
    soundbutton: Phaser.GameObjects.Image;
    muted = true;
    clicksound;
    shoprect;
    shoptext;
    shopimg;
    maprect;
    maptext;
    mapimg;
    vehiclerect;
    vehicletext;
    vehicleimg;
    tuningrect;
    tuningtext;
    tuningimg;
    startrect;
    starttext;
    startimg;



    wheelrect;
    wheelrect2;
    wheelimg;
    wheeltext;
    accelerationrect;
    accelerationrect2;
    accelerationimg;
    accelerationtext;
    enginerect;
    enginerect2;
    enginetext;
    engineimg;
    fuelimg;
    fuelrect;
    fuelrect2;
    fueltext;
    
    
    wheellevel = 0;
    accelerationlevel = 0;
    enginelevel = 0;
    fuellevel = 0;

    wheeltuningtext;
    accelerationtuningtext;
    enginetuningtext;
    fueltuningtext;
    wheeltuningtext2;
    accelerationtuningtext2;
    enginetuningtext2;
    fueltuningtext2;

    wheel_cost;
    acceleration_cost;
    engine_cost;
    fuel_cost;

    buyingrect;
    buying_button;
    x_button;
    x_image;

    colorrect: Phaser.GameObjects.Rectangle;
    colorrect2;
    red;
    blue;
    grey;
    green;
    yellow;
    colortext;
    colortext2;
    color_cost;

    color_red;

    //jeweils zuständig für die Anzeige des Tuning Fortschritts
    wheelleveltext;
    accelerationleveltext;
    engineleveltext;
    fuelleveltext;

    //gibt das Maximale Level aller Tuningkomponenten an 
    maxtuning = 5;

    middletext;
    middlerect;
    middleobj;

    coinobj;
    cointext;
    fuelcounter;
    coinscounter;
    coinsnumber;

    costs;

    vhci;

   

    params: Params;    



    constructor() {

    super("Menu") 


    }



    preload() {
        this.load.image("menu", "/htdocs/assets/images/menu.png")
        this.load.image("map", "/htdocs/assets/images/map.png")
        this.load.image("playbutton", "/htdocs/assets/images/playbutton.png")
        this.load.image("shop", "/htdocs/assets/images/shop.png")
        this.load.image("wrench", "/htdocs/assets/images/wrench.png")
        this.load.image("vehicle", "/htdocs/assets/images/vehicle.png")
        this.load.image("mapscreenshot", "/htdocs/assets/images/mapscreenshot.png")
        this.load.image("coin", "/htdocs/assets/images/coin.png")
        this.load.image("tuning_spring", "/htdocs/assets/images/car_spring.png")
        this.load.image("tuning_wheel", "/htdocs/assets/images/car_wheel.png")
        this.load.image("tuning_engine", "/htdocs/assets/images/car_engine.png")
        this.load.image("tuning_fuel", "/htdocs/assets/images/fuel.png")
        this.load.image("x_icon","/htdocs/assets/images/x_icon.png")
        this.load.audio("music", ["/htdocs/assets/sounds/music.mp3", "/htdocs/assets/sounds/music.ogg"])
        this.load.audio("click", ["/htdocs/assets/sounds/click.mp3", "/htdocs/assets/sounds/click.ogg"])
        this.load.spritesheet("soundbutton", "/htdocs/assets/images/sound.png", {frameWidth: 395, frameHeight: 275});
    }

    init(params: Params){
        this.params = params;
        this.params.fuel = 100
    }

    create() {

        



        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.clicksound = this.sound.add("click", {

            volume: 0.5,
            loop: false

        });

        this.backgroundmusic = this.sound.add("music", {

            volume: 0.5,
            loop: true

        });

        this.soundbutton = this.add.image(screenCenterX + 900, screenCenterY-475, "soundbutton", 1)
        .setInteractive()
        .setScrollFactor(0)
        .setScale(0.25)
        .setOrigin(0.5)
        .setDepth(+10)
        .on("pointerdown", () => {

            if(this.muted == true) {
                this.soundbutton.setFrame(0);
                this.muted = false;
                this.sound.play("click");
                this.backgroundmusic.play()
                

            } else if (this.muted == false) {
                this.soundbutton.setFrame(1);
                this.muted = true;
                this.sound.play("click")
                this.backgroundmusic.stop()
            }


        })
        

  
        this.add.image(screenCenterX , screenCenterY , "menu")
        
        this.accelerationimg = this.add.image(screenCenterX - 200, screenCenterY - 150, "tuning_spring").setVisible(false).setDepth(+1)

        this.accelerationrect = this.add.rectangle(screenCenterX - 200, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)
        this.engineimg = this.add.image(screenCenterX + 200, screenCenterY - 150, "tuning_engine").setVisible(false).setDepth(+1)

        this.wheelrect2 = this.add.rectangle(screenCenterX - 600, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)

        this.wheelrect = this.add.rectangle(screenCenterX - 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)
        this.enginerect = this.add.rectangle(screenCenterX + 200, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)
        this.fuelrect = this.add.rectangle(screenCenterX + 600, screenCenterY - 150, 275, 150, 0x565656).setVisible(false)
        this.wheelimg =  this.add.image(screenCenterX - 600, screenCenterY - 150, "tuning_wheel").setVisible(false)
        this.fuelimg = this.add.image(screenCenterX + 600, screenCenterY - 160, "tuning_fuel").setVisible(false)
        this.grey = this.add.rectangle(screenCenterX - 250, screenCenterY +25 , 250, 150, 0x999999).setVisible(false)
        this.yellow = this.add.rectangle(screenCenterX +25, screenCenterY + 200, 250, 150, 0xeec900).setVisible(false)

        this.engineleveltext = this.add.text(screenCenterX + 200, screenCenterY - 300, this.enginelevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false)

        this.blue = this.add.rectangle(screenCenterX - 250, screenCenterY + 200, 250, 150, 0x00bfff).setVisible(false)

        this.red = this.add.rectangle(screenCenterX - 250, screenCenterY - 150 , 250, 150, 0xff0000).setVisible(false)

        this.colortext2 = this.add.text(screenCenterX + 100 , screenCenterY -150, "Choose Your Color", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.colorrect2 = this.add.rectangle(screenCenterX, screenCenterY, 800, 600, 0x565656).setStrokeStyle(5, 0x000000, 1).setDepth(+1).setVisible(false)

        this.enginetuningtext2 = this.add.text(screenCenterX , screenCenterY, " um das Drehmoment zu steigern!", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.enginetuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere den Motor des Autos,", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        
        this.accelerationtuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere die Federung des Autos,", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.wheeltuningtext2 = this.add.text(screenCenterX , screenCenterY, " um die Traktion zu steigern!", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.wheeltuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere die Reifen des Autos,", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.wheelleveltext = this.add.text(screenCenterX - 600, screenCenterY - 300, this.wheellevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false)

        this.accelerationleveltext = this.add.text(screenCenterX - 200, screenCenterY - 300, this.accelerationlevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false)
                    
        this.colortext = this.add.text(screenCenterX - 600, screenCenterY -150, "Color", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.colorrect = this.add.rectangle(screenCenterX - 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)

        this.coinobj = this.add.image(screenCenterX - 900, screenCenterY -475,"coin").setOrigin(0.5).setScale(0.15);
        // this.cointext = this.add.text(this.coinobj.x + 75, this.coinobj.y, this.params.coins.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)

        this.coinscounter = this.params.coins;

        this.coinsnumber = this.add.text(200, 70, "" + this.coinscounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)

        this.middlerect = this.add.rectangle(screenCenterX, screenCenterY- 200, 600, 350, 0xadd8e6).setStrokeStyle(7, 0x000000)
        this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
        this.middletext = this.add.text(screenCenterX, screenCenterY - 400, "Muscle Car", {
                    
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.fuelleveltext = this.add.text(screenCenterX + 600, screenCenterY - 300, this.fuellevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false)

        this.accelerationtuningtext2 = this.add.text(screenCenterX , screenCenterY, " um die Fahrdynamik zu verbessern!", {
        
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.fueltuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere den Tank des Autos,", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.fueltuningtext2 = this.add.text(screenCenterX , screenCenterY, " um weiter zu fahren!", {
            
            fontFamily: "hillclimbracing",
            fontSize: "50px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.enginerect2 = this.add.rectangle(screenCenterX +200, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)

        this.accelerationrect2 = this.add.rectangle(screenCenterX - 200, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)
        this.fuelrect2 = this.add.rectangle(screenCenterX + 600, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)
        this.green = this.add.rectangle(screenCenterX + 25, screenCenterY + 25 , 250, 150, 0x228b22).setVisible(false)

        
  

                this.vehiclerect = this.add.rectangle(screenCenterX, screenCenterY + 175, 275, 150, 0x252850).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
                    this.vehiclerect.y = screenCenterY + 175;
                    this.vehicletext.y = screenCenterY + 175;
                    this.shoprect.y = screenCenterY + 200;
                    this.shoptext.y = screenCenterY + 200;
                    this.tuningrect.y = screenCenterY + 200;
                    this.tuningtext.y = screenCenterY + 200;
                    this.maprect.y = screenCenterY + 200;
                    this.maptext.y  = screenCenterY + 200;

                    this.vehiclerect.fillColor = 0x252850;
                    this.shoprect.fillColor = 0x565656;
                    this.tuningrect.fillColor = 0x565656;
                    this.maprect.fillColor = 0x565656;  

                    this.mapimg.y = screenCenterY + 115;
                    this.shopimg.y = screenCenterY + 105;
                    this.tuningimg.y = screenCenterY + 115;
                    this.startimg.y = screenCenterY + 115;
                    this.vehicleimg.y = screenCenterY + 105;

                    this.middleobj.alpha = 0;
                    this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
                    this.middlerect.setVisible(true)
                    this.middletext.setText("Muscle Car").setVisible(true);

                    this.wheelrect.setVisible(false);
                    this.wheelrect2.setVisible(false);
                    this.accelerationrect.setVisible(false);
                    this.enginerect.setVisible(false);
                    this.fuelrect.setVisible(false);

                    this.accelerationimg.setVisible(false)
                    this.wheelimg.setVisible(false)
                    this.engineimg.setVisible(false)
                    this.fuelimg.setVisible(false)

                    this.wheelleveltext.setVisible(false)
                    this.accelerationleveltext.setVisible(false)
                    this.engineleveltext.setVisible(false)
                    this.fuelleveltext.setVisible(false)

              
                    this.accelerationrect2.setVisible(false)
                    this.enginerect2.setVisible(false)
                    this.fuelrect2.setVisible(false)

                    this.wheeltuningtext.setVisible(false)
                    this.wheeltuningtext2.setVisible(false)
                    this.accelerationtuningtext.setVisible(false)
                    this.accelerationtuningtext2.setVisible(false)
                    this.enginetuningtext.setVisible(false)
                    this.enginetuningtext2.setVisible(false)
                    this.fueltuningtext.setVisible(false)
                    this.fueltuningtext2.setVisible(false)
                    this.colortext.setVisible(false)
                    this.colorrect.setVisible(false)

                    this.x_button.setVisible(false)
                    this.x_image.setVisible(false)
                    this.buyingrect.setVisible(false)
                    this.buying_button.setVisible(false)
                   
                    
                })
                this.vehicletext = this.add.text(screenCenterX, screenCenterY+175, "Vehicles", {
                    
                    fontFamily: "hillclimbracing",
                    fontSize: "40px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5)

                this.vehicleimg = this.add.image(screenCenterX, screenCenterY + 105, "vehicle").setScale(0.35).setRotation(-0.25)

        this.maprect = this.add.rectangle(screenCenterX-280, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
                    
            this.vehiclerect.y = screenCenterY + 200;
            this.vehicletext.y = screenCenterY + 200;
            this.shoprect.y = screenCenterY + 200;
            this.shoptext.y = screenCenterY + 200;
            this.tuningrect.y = screenCenterY + 200;
            this.tuningtext.y = screenCenterY + 200;
            this.maprect.y = screenCenterY + 175;
            this.maptext.y  = screenCenterY + 175;

            this.vehiclerect.fillColor = 0x565656;
            this.shoprect.fillColor = 0x565656;
            this.tuningrect.fillColor = 0x565656;
            this.maprect.fillColor = 0x252850;

            this.mapimg.y = screenCenterY + 100;
            this.shopimg.y = screenCenterY + 105;
            this.tuningimg.y = screenCenterY + 115;
            this.startimg.y = screenCenterY + 115;
            this.vehicleimg.y = screenCenterY + 120;

            this.middleobj.alpha = 0;
            this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "mapscreenshot").setScale(0.55).setOrigin(0.5)
            this.middlerect.setVisible(true);
            this.middletext.setText("Dirt").setVisible(true);
            
            this.wheelrect.setVisible(false);
            this.wheelrect2.setVisible(false);
            this.accelerationrect.setVisible(false);
            this.enginerect.setVisible(false);
            this.fuelrect.setVisible(false);

            this.accelerationimg.setVisible(false)
            this.wheelimg.setVisible(false)
            this.engineimg.setVisible(false)
            this.fuelimg.setVisible(false)

            this.wheelleveltext.setVisible(false)
            this.accelerationleveltext.setVisible(false)
            this.engineleveltext.setVisible(false)
            this.fuelleveltext.setVisible(false)

            this.wheelrect2.setVisible(false)
            this.accelerationrect2.setVisible(false)
            this.enginerect2.setVisible(false)
            this.fuelrect2.setVisible(false)
            
            this.wheeltuningtext.setVisible(false)
            this.wheeltuningtext2.setVisible(false)
            this.accelerationtuningtext.setVisible(false)
            this.accelerationtuningtext2.setVisible(false)
            this.enginetuningtext.setVisible(false)
            this.enginetuningtext2.setVisible(false)
            this.fueltuningtext.setVisible(false)
            this.fueltuningtext2.setVisible(false)

            this.colortext.setVisible(false)
            this.colorrect.setVisible(false)
            this.colorrect2.setVisible(false)
            this.colortext2.setVisible(false)
            this.red.setVisible(false)
            this.blue.setVisible(false)
            this.green.setVisible(false)
            this.grey.setVisible(false)
            this.yellow.setVisible(false)

            this.x_button.setVisible(false)
            this.x_image.setVisible(false)
            this.buyingrect.setVisible(false)
            this.buying_button.setVisible(false)
            
        })
        this.maptext = this.add.text(screenCenterX-280, screenCenterY+200, "Maps", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.mapimg = this.add.image(screenCenterX-280, screenCenterY + 115, "map").setScale(0.15).setRotation(0)

        this.buyingrect = this.add.rectangle(screenCenterX, screenCenterY, 800, 500, 0x565656).setStrokeStyle(5, 0x000000, 1).setDepth(+1).setVisible(false)
        this.buying_button = this.add.rectangle(screenCenterX,screenCenterY + 175, 725 ,100, 0x565656  ).setStrokeStyle(5, 0x000000, 1).setDepth(+1).setVisible(false)
        this.x_image =  this.add.image(screenCenterX + 350, screenCenterY - 200, "x_icon").setDepth(+3).setScale(0.15).setVisible(false)
        this.x_button = this.add.rectangle(screenCenterX+ 350,screenCenterY - 200 , 75, 75, 0x000000,0).setDepth(+2).setVisible(false).setInteractive().on("pointerdown", () => {
            this.buyingrect.setVisible(false);
            this.buying_button.setVisible(false);
            this.x_image.setVisible(false);

            this.wheeltuningtext.setVisible(false)
            this.wheeltuningtext2.setVisible(false)
            this.accelerationtuningtext.setVisible(false)
            this.accelerationtuningtext2.setVisible(false)
            this.enginetuningtext.setVisible(false)
            this.enginetuningtext2.setVisible(false)
            this.fueltuningtext.setVisible(false)
            this.fueltuningtext2.setVisible(false)

            this.colortext.setVisible(false)
            this.colorrect.setVisible(false)
        
        })

        this.tuningrect = this.add.rectangle(screenCenterX+280, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
                    
            this.vehiclerect.y = screenCenterY + 200;
            this.vehicletext.y = screenCenterY + 200;
            this.shoprect.y = screenCenterY + 200;
            this.shoptext.y = screenCenterY + 200;
            this.tuningrect.y = screenCenterY + 175;
            this.tuningtext.y = screenCenterY + 175;
            this.maprect.y = screenCenterY + 200;
            this.maptext.y  = screenCenterY + 200;

            this.vehiclerect.fillColor = 0x565656;
            this.shoprect.fillColor = 0x565656;
            this.tuningrect.fillColor = 0x252850;
            this.maprect.fillColor = 0x565656;

            this.mapimg.y = screenCenterY + 115;
            this.shopimg.y = screenCenterY + 105;
            this.tuningimg.y = screenCenterY + 95;
            this.startimg.y = screenCenterY + 115;
            this.vehicleimg.y = screenCenterY + 120;

            this.middleobj.alpha = 0;
            this.middlerect.setVisible(false)
            this.middletext.setVisible(false)

            this.colortext.setVisible(false)
            this.colorrect.setVisible(false)
            this.colorrect2.setVisible(false)
            this.colortext2.setVisible(false)
            this.red.setVisible(false)
            this.blue.setVisible(false)
            this.green.setVisible(false)
            this.grey.setVisible(false)
            this.yellow.setVisible(false)

            this.wheelrect.setVisible(true).setInteractive().on("pointerdown", () =>{
               this.buyingrect.setVisible(true);
               this.buying_button.setVisible(true);
               this.x_button.setVisible(true);
               this.x_image.setVisible(true);
        
               
                this.wheeltuningtext.setVisible(true)
                this.wheeltuningtext2.setVisible(true)
                this.fueltuningtext.setVisible(false)
                this.fueltuningtext2.setVisible(false)
                this.accelerationtuningtext.setVisible(false)
                this.accelerationtuningtext2.setVisible(false)
                this.enginetuningtext.setVisible(false)
                this.enginetuningtext2.setVisible(false)
     


               
            })

            
     

            this.wheelrect2.setVisible(true)
            
            this.accelerationrect.setVisible(true).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
               this.buying_button.setVisible(true);
               this.x_button.setVisible(true);
               this.x_image.setVisible(true);

               this.accelerationtuningtext.setVisible(true)
               this.accelerationtuningtext2.setVisible(true)
               this.fueltuningtext.setVisible(false)
               this.fueltuningtext2.setVisible(false)
               this.enginetuningtext.setVisible(false)
               this.enginetuningtext2.setVisible(false)
               this.wheeltuningtext.setVisible(false)
               this.wheeltuningtext2.setVisible(false)



             })
            this.accelerationrect2.setVisible(true)
            
            this.enginerect.setVisible(true).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                this.buying_button.setVisible(true);
                this.x_button.setVisible(true);
                this.x_image.setVisible(true);

                this.enginetuningtext.setVisible(true)
    
                this.enginetuningtext2.setVisible(true)

                this.fueltuningtext.setVisible(false)
                this.fueltuningtext2.setVisible(false)
                this.accelerationtuningtext.setVisible(false)
                this.accelerationtuningtext2.setVisible(false)
                this.enginetuningtext.setVisible(true)
                this.enginetuningtext2.setVisible(true)
                this.wheeltuningtext.setVisible(false)
                this.wheeltuningtext2.setVisible(false)

             })
            this.enginerect2.setVisible(true)
            
            this.fuelrect.setVisible(true).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                this.buying_button.setVisible(true);
                this.x_button.setVisible(true);
                this.x_image.setVisible(true);

                this.fueltuningtext.setVisible(true)
                this.fueltuningtext2.setVisible(true)
                this.accelerationtuningtext.setVisible(false)
                this.accelerationtuningtext2.setVisible(false)
                this.enginetuningtext.setVisible(false)
                this.enginetuningtext2.setVisible(false)
                this.wheeltuningtext.setVisible(false)
                this.wheeltuningtext2.setVisible(false)

             })
            this.fuelrect2.setVisible(true)

            this.accelerationimg.setVisible(true).setScale(0.4, 0.4)
            this.wheelimg.setVisible(true).setScale(0.4, 0.4)
            this.engineimg.setVisible(true).setScale(0.4, 0.4)
            this.fuelimg.setVisible(true).setScale(0.4, 0.4)

            this.wheelleveltext.setVisible(true)

        this.accelerationleveltext.setVisible(true)

        this.engineleveltext.setVisible(true)
        this.fuelleveltext.setVisible(true)

        })
        this.tuningtext = this.add.text(screenCenterX+280, screenCenterY+200, "Tuning", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.tuningimg = this.add.image(screenCenterX+280, screenCenterY + 115, "wrench").setScale(0.25).setRotation(-0.25)

        this.shoprect = this.add.rectangle(screenCenterX-560, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
                    
            this.vehiclerect.y = screenCenterY + 200;
            this.vehicletext.y = screenCenterY + 200;
            this.shoprect.y = screenCenterY + 175;
            this.shoptext.y = screenCenterY + 175;
            this.tuningrect.y = screenCenterY + 200;
            this.tuningtext.y = screenCenterY + 200;
            this.maprect.y = screenCenterY + 200;
            this.maptext.y  = screenCenterY + 200;

            this.vehiclerect.fillColor = 0x565656;
            this.shoprect.fillColor = 0x252850;
            this.tuningrect.fillColor = 0x565656;
            this.maprect.fillColor = 0x565656;

            this.mapimg.y = screenCenterY + 115;
            this.shopimg.y = screenCenterY + 90;
            this.tuningimg.y = screenCenterY + 115;
            this.startimg.y = screenCenterY + 115;
            this.vehicleimg.y = screenCenterY + 120;

            this.middleobj.alpha = 0;
            this.middlerect.setVisible(false)
            this.middletext.setVisible(false)
            this.x_button.setVisible(false)
            this.x_image.setVisible(false)
            this.buyingrect.setVisible(false)
            this.buying_button.setVisible(false)
            


            this.colortext.setVisible(true)

            this.colorrect.setVisible(true).setInteractive().on("pointerdown", () =>{
            
               
                this.colorrect2.setVisible(true)
                this.colortext2.setVisible(true)
                this.red.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                  
                        this.params.carcolor = "chassis"
                        this.colorrect2.setVisible(false)
                        this.red.setVisible(false)
                        this.blue.setVisible(false)
                        this.green.setVisible(false)
                        this.yellow.setVisible(false)
                        this.grey.setVisible(false)
                        this.colortext2.setVisible(false)
                        console.log(this.params.carcolor)
                        
                })
                this.blue.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                   
                        this.params.carcolor = "chassis_blue"
                        this.colorrect2.setVisible(false)
                        this.red.setVisible(false)
                        this.blue.setVisible(false)
                        this.green.setVisible(false)
                        this.yellow.setVisible(false)
                        this.grey.setVisible(false)
                        this.colortext2.setVisible(false)
                        console.log(this.params.carcolor)
                    

                })
                this.green.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                   
                        this.params.carcolor = "chassis_green"
                        this.colorrect2.setVisible(false)
                        this.red.setVisible(false)
                        this.blue.setVisible(false)
                        this.green.setVisible(false)
                        this.yellow.setVisible(false)
                        this.grey.setVisible(false)
                        this.colortext2.setVisible(false)
                        console.log(this.params.carcolor)
                })
                this.yellow.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                   
                        this.params.carcolor = "chassis_yellow"
                        this.colorrect2.setVisible(false)
                        this.red.setVisible(false)
                        this.blue.setVisible(false)
                        this.green.setVisible(false)
                        this.yellow.setVisible(false)
                        this.grey.setVisible(false)
                        this.colortext2.setVisible(false)
                        console.log(this.params.carcolor)
                })
                this.grey.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                 
                        this.params.carcolor = "chassis_grey"
                        this.colorrect2.setVisible(false)
                        this.red.setVisible(false)
                        this.blue.setVisible(false)
                        this.green.setVisible(false)
                        this.yellow.setVisible(false)
                        this.grey.setVisible(false)
                        this.colortext2.setVisible(false)
                        console.log(this.params.carcolor)
                })

                
                
            })
            


            this.wheelrect.setVisible(false);
            this.wheelrect2.setVisible(false);
            this.accelerationrect.setVisible(false);
            this.enginerect.setVisible(false);
            this.fuelrect.setVisible(false);

            this.accelerationimg.setVisible(false)
            this.wheelimg.setVisible(false)
            this.engineimg.setVisible(false)
            this.fuelimg.setVisible(false)

            this.wheelleveltext.setVisible(false)
            this.accelerationleveltext.setVisible(false)
            this.engineleveltext.setVisible(false)
            this.fuelleveltext.setVisible(false)

            this.wheelrect2.setVisible(false)
            this.accelerationrect2.setVisible(false)
            this.enginerect2.setVisible(false)
            this.fuelrect2.setVisible(false)

            this.wheeltuningtext.setVisible(false)
            this.wheeltuningtext2.setVisible(false)
            this.accelerationtuningtext.setVisible(false)
            this.accelerationtuningtext2.setVisible(false)
            this.enginetuningtext.setVisible(false)
            this.enginetuningtext2.setVisible(false)
            this.fueltuningtext.setVisible(false)
            this.fueltuningtext2.setVisible(false)

            
        })

     

    
        this.shoptext = this.add.text(screenCenterX-560, screenCenterY+200, "Shop", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.shopimg = this.add.image(screenCenterX-560, screenCenterY + 105, "shop").setScale(0.25).setRotation(0)

        
        this.startrect = this.add.rectangle(screenCenterX+560, screenCenterY + 200, 275, 150, 0x49B675).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            
            this.scene.start("Level3")
            this.backgroundmusic.stop()
            
            
            
            
        })
        this.starttext = this.add.text(screenCenterX+560, screenCenterY+200, "Start", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)
        this.startimg = this.add.image(screenCenterX+560, screenCenterY + 115, "playbutton").setScale(0.25)

        
        
        this.Fullscreenevent = this.input.keyboard.addKey("F");

        this.Fullscreenevent.on("down", function() {
    
    
            if(this.scale.isFullscreen) {
                
                this.scale.stopFullscreen();
                
            } else {
    
                this.scale.startFullscreen();
    
            }
    
        }, this);

      



    }

   


    
    

    update() {

       

       
    }

}