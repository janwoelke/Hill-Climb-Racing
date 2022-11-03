import { isLineBreak } from "../../node_modules/typescript/lib/typescript";

export default class Menu extends Phaser.Scene {

    Fullscreenevent;
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

    colorrect;
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

    costs;

   

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
    }

    init(params: Params){
        this.params = params;
        this.params.fuel = 100
    }

    create() {


        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        
        this.add.image(screenCenterX , screenCenterY , "menu")
        
        this.coinobj = this.add.image(screenCenterX - 900, screenCenterY -475,"coin").setOrigin(0.5).setScale(0.15);
        // this.cointext = this.add.text(this.coinobj.x + 75, this.coinobj.y, this.params.coins.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)


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

            this.wheelrect = this.add.rectangle(screenCenterX - 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
               this.buyingrect.setVisible(true);
               this.buying_button.setVisible(true);
               this.x_button.setVisible(true);
               this.x_image.setVisible(true);
        
               
                this.wheeltuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere die Reifen des Autos,", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "50px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)

                this.wheeltuningtext2 = this.add.text(screenCenterX , screenCenterY, " um die Traktion zu steigern!", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "50px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)


               
            })
            this.wheelrect2 = this.add.rectangle(screenCenterX - 600, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1)
            
            this.accelerationrect = this.add.rectangle(screenCenterX - 200, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
               this.buying_button.setVisible(true);
               this.x_button.setVisible(true);
               this.x_image.setVisible(true);

               this.accelerationtuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere die Federung des Autos,", {
            
                fontFamily: "hillclimbracing",
                fontSize: "50px",
                color: "#FFFFFF",
                align: "center",
                stroke: "#000000",
                strokeThickness: 10
                
            }).setOrigin(0.5).setDepth(+4)

            this.accelerationtuningtext2 = this.add.text(screenCenterX , screenCenterY, " um die Fahrdynamik zu verbessern!", {
        
                fontFamily: "hillclimbracing",
                fontSize: "50px",
                color: "#FFFFFF",
                align: "center",
                stroke: "#000000",
                strokeThickness: 10
                
            }).setOrigin(0.5).setDepth(+4)
             })
            this.accelerationrect2 = this.add.rectangle(screenCenterX - 200, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1)
            
            this.enginerect = this.add.rectangle(screenCenterX + 200, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                this.buying_button.setVisible(true);
                this.x_button.setVisible(true);
                this.x_image.setVisible(true);

                this.enginetuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere den Motor des Autos,", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "50px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)
    
                this.enginetuningtext2 = this.add.text(screenCenterX , screenCenterY, " um das Drehmoment zu steigern!", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "50px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)
             })
            this.enginerect2 = this.add.rectangle(screenCenterX +200, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1)
            
            this.fuelrect = this.add.rectangle(screenCenterX + 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                this.buying_button.setVisible(true);
                this.x_button.setVisible(true);
                this.x_image.setVisible(true);

                this.fueltuningtext = this.add.text(screenCenterX , screenCenterY -80, "Verbessere den Tank des Autos,", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "50px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)
    
                this.fueltuningtext2 = this.add.text(screenCenterX , screenCenterY, " um weiter zu fahren!", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "50px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)
             })
            this.fuelrect2 = this.add.rectangle(screenCenterX + 600, screenCenterY , 275,75, 0x565656).setStrokeStyle(5, 0x000000, 1)

            this.accelerationimg = this.add.image(screenCenterX - 200, screenCenterY - 150, "tuning_spring" ).setScale(0.4, 0.4)
            this.wheelimg =  this.add.image(screenCenterX - 600, screenCenterY - 150, "tuning_wheel").setScale(0.4, 0.4)
            this.engineimg = this.add.image(screenCenterX + 200, screenCenterY - 150, "tuning_engine").setScale(0.4, 0.4)
            this.fuelimg = this.add.image(screenCenterX + 600, screenCenterY - 160, "tuning_fuel").setScale(0.4, 0.4)

            this.wheelleveltext = this.add.text(screenCenterX - 600, screenCenterY - 300, this.wheellevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.accelerationleveltext = this.add.text(screenCenterX - 200, screenCenterY - 300, this.accelerationlevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        this.engineleveltext = this.add.text(screenCenterX + 200, screenCenterY - 300, this.enginelevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
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
            
        }).setOrigin(0.5)

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
            
            
            this.colortext = this.add.text(screenCenterX - 600, screenCenterY -150, "Color", {
            
                fontFamily: "hillclimbracing",
                fontSize: "40px",
                color: "#FFFFFF",
                align: "center",
                stroke: "#000000",
                strokeThickness: 10
                
            }).setOrigin(0.5).setDepth(+4)
            this.colorrect = this.add.rectangle(screenCenterX - 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                this.colorrect2 = this.add.rectangle(screenCenterX, screenCenterY, 800, 600, 0x565656).setStrokeStyle(5, 0x000000, 1).setDepth(+1)
                this.colortext2 = this.add.text(screenCenterX + 100 , screenCenterY -150, "Choose Your Color", {
            
                    fontFamily: "hillclimbracing",
                    fontSize: "40px",
                    color: "#FFFFFF",
                    align: "center",
                    stroke: "#000000",
                    strokeThickness: 10
                    
                }).setOrigin(0.5).setDepth(+4)
                this.red = this.add.rectangle(screenCenterX - 250, screenCenterY - 150 , 250, 150, 0xff0000).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                  
                        this.params.carcolor = 1

                })
                this.blue = this.add.rectangle(screenCenterX - 250, screenCenterY + 200, 250, 150, 0x00bfff).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                   
                        this.params.carcolor = 2
                        console.log(this.params.carcolor)
                    

                })
                this.green = this.add.rectangle(screenCenterX + 25, screenCenterY + 25 , 250, 150, 0x228b22).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                   
                        this.params.carcolor = 3
                    

                })
                this.yellow = this.add.rectangle(screenCenterX +25, screenCenterY + 200, 250, 150, 0xeec900).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                   
                        this.params.carcolor = 4
                    

                })
                this.grey = this.add.rectangle(screenCenterX - 250, screenCenterY +25 , 250, 150, 0x999999).setStrokeStyle(5, 0x000000, 1).setDepth(+2).setInteractive().on("pointerdown", () =>{
                 
                        this.params.carcolor = 5
                    
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
            
            this.scene.start("Level2")
            
            
            
            
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