import { getTextOfJSDocComment, isLineBreak, isThisTypeNode, ParenthesizedExpression } from "../../node_modules/typescript/lib/typescript";

export default class Menu extends Phaser.Scene {

    Fullscreenevent;
    backgroundmusic;
    soundbutton: Phaser.GameObjects.Image;
    muted = true;
    clicksound;
    clicksound2;
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
    
    
    wheellevel = 1;
    accelerationlevel = 1;
    enginelevel = 1;
    fuellevel = 1;

    wheeltuningtext;
    accelerationtuningtext;
    enginetuningtext;
    fueltuningtext;
    wheeltuningtext2;
    accelerationtuningtext2;
    enginetuningtext2;
    fueltuningtext2;

    wheel_cost;
    wheel_cost_text;
    wheel_cost_text2;
    acceleration_cost;
    acceleration_cost_text;
    acceleration_cost_text2;
    engine_cost;
    engine_cost_text;
    engine_cost_text2;
    fuel_cost;
    fuel_cost_text;
    fuel_cost_text2;

    buyingrect;
    buying_button;
    x_button;
    x_image;
    nocoins_text;
    max_text;
    max_text2;
    max_text3;
    max_text4;

    //Fahrzeugfarben
    colorrect: Phaser.GameObjects.Rectangle;
    colorrect2: Phaser.GameObjects.Rectangle;
    red: Phaser.GameObjects.Rectangle;
    blue: Phaser.GameObjects.Rectangle;
    grey: Phaser.GameObjects.Rectangle;
    green: Phaser.GameObjects.Rectangle;
    yellow: Phaser.GameObjects.Rectangle;
    colortext: Phaser.GameObjects.Text;
    colortext2: Phaser.GameObjects.Text;
    color_cost;
    color_red;

    //Character
    characterrect: Phaser.GameObjects.Rectangle;
    characterrect2: Phaser.GameObjects.Rectangle;;
    charactertext: Phaser.GameObjects.Text;
    charactertext2: Phaser.GameObjects.Text;
    steve: Phaser.GameObjects.Image;
    stevetext: Phaser.GameObjects.Text;
    calvin: Phaser.GameObjects.Image;
    calvintext: Phaser.GameObjects.Text;
    hobbes: Phaser.GameObjects.Image;
    hobbestext: Phaser.GameObjects.Text;
    charactercost: number = 100;
    charactercostext: Phaser.GameObjects.Text;

    //jeweils zuständig für die Anzeige des Tuning Fortschritts
    wheelleveltext;
    accelerationleveltext;
    engineleveltext;
    fuelleveltext;

    //gibt das Maximale Level aller Tuningkomponenten an 
    maxtuning: number = 3;

    //Felgen
    rimrect: Phaser.GameObjects.Rectangle;
    rimrect2: Phaser.GameObjects.Rectangle;
    rimtext: Phaser.GameObjects.Text;
    rimtext2: Phaser.GameObjects.Text;
    standardrim: Phaser.GameObjects.Image;
    standardtext: Phaser.GameObjects.Text;
    bbsrim: Phaser.GameObjects.Image;
    bbstext: Phaser.GameObjects.Text;
    sportrim: Phaser.GameObjects.Image;
    sporttext: Phaser.GameObjects.Text;
    rimprice: number = 100;
    rimpricetext: Phaser.GameObjects.Text;

    middletext;
    middlerect;
    middleobj;

    coinobj;
    cointext;
    fuelcounter;
    coinscounter;
    coinsnumber;

    friction;
    accelerationoffset;
    fueltank;
    enginepower;

    buyrect: Phaser.GameObjects.Rectangle;
    buytext: Phaser.GameObjects.Text;
    textyes: Phaser.GameObjects.Text;
    textno: Phaser.GameObjects.Text;

    costs;

    arrowleft;
    arrowright;

    greenlock: Phaser.GameObjects.Image;
    greylock: Phaser.GameObjects.Image;
    bluelock: Phaser.GameObjects.Image;
    yellowlock: Phaser.GameObjects.Image;

    bbslock: Phaser.GameObjects.Image;
    sportlock: Phaser.GameObjects.Image;

    hobbeslock: Phaser.GameObjects.Image;
    calvinlock: Phaser.GameObjects.Image;

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
        this.load.audio("click2", ["/htdocs/assets/sounds/click2.mp3", "/htdocs/assets/sounds/click2.ogg"])
        this.load.spritesheet("soundbutton", "/htdocs/assets/images/sound.png", {frameWidth: 395, frameHeight: 275});
        this.load.image("arrow", "/htdocs/assets/images/arrow.png")
        this.load.image("golf", "/htdocs/assets/images/Golf_MK2_Wheels.png")
        this.load.image("Level1", "/htdocs/assets/images/Level1.png")
        this.load.image("Level2", "/htdocs/assets/images/Level2.png")
        this.load.image("Level3", "/htdocs/assets/images/Level3.png")
        this.load.image("hobbes", "/htdocs/assets/images/hobbes.png")
        this.load.image("steve", "/htdocs/assets/images/body.png")
        this.load.image("calvin", "/htdocs/assets/images/calvin.png")
        this.load.image("bbs", "/htdocs/assets/images/Wheel_BBS.png")
        this.load.image("standard", "/htdocs/assets/images/Wheel.png")    
        this.load.image("sport", "/htdocs/assets/images/Wheel_Sport.png")
        this.load.image("lock", "/htdocs/assets/images/lock.png") 
    
    }

    init(params: Params){
        this.params = params;
        
    }

    create() {

        this.friction = this.params.friction;
        this.accelerationoffset = this.params.accelerationoffset;
        this.fueltank = this.params.fueltank;
        this.enginepower = this.params.enginepower;
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.coinscounter = this.params.coins

        this.params.map = "CLOUDY CLIFFS";
        this.params.vehicle = "MUSCLE CAR";
        this.params.character = "STEVE";
        this.params.rim = "STANDARD";
        this.params.carcolor = 1;
        this.params.carcolor2 = 0;


        this.clicksound = this.sound.add("click", {

            volume: 0.5,
            loop: false

        });

        this.clicksound2 = this.sound.add("click2", {

            volume: 0.5,
            loop: false
            
        });
        
        this.backgroundmusic = this.sound.add("music", {
            
            volume: 0.5,
            loop: true
            
        });
        
        
        this.arrowleft = this.add.image(screenCenterX - 500, screenCenterY - 200, "arrow").setDepth(+4).setAngle(180).setScale(0.35).setVisible(true).setInteractive().on("pointerdown", () => { 
            this.sound.play("click")
            
            
            if(this.middletext.text == "MUSCLE CAR") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y - 10, "golf").setScale(0.45)
                this.middleobj.setVisible(true)
                this.middletext.setText("GOLF MK II")
                this.params.vehicle = "GOLF MK II"
                this.params.carcolor2 = 1;
                this.params.carcolor = 0;
            } else if (this.middletext.text = "GOLF MK II") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
                this.middleobj.setVisible(true)
                this.middletext.setText("MUSCLE CAR")
                this.params.vehicle = "MUSCLE CAR"
                this.params.carcolor2 = 0;
                this.params.carcolor = 1;
            }
            
            
        })


        this.buytext = this.add.text(screenCenterX, screenCenterY-250, "WILLST DU DIE FARBE FUER  100  COINS KAUFEN?", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.nocoins_text = this.add.text(screenCenterX - 25, screenCenterY-200, "DU HAST ZU WENIG COINS FUER EIN UPGRADE!", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

    

        this.max_text = this.add.text(screenCenterX -600, screenCenterY , "MAX", {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+2)

        this.max_text2 = this.add.text(screenCenterX -200, screenCenterY , "MAX", {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+2)
        
        this.max_text3 = this.add.text(screenCenterX +200 , screenCenterY , "MAX", {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+2)
        
        this.max_text4 = this.add.text(screenCenterX +600, screenCenterY , "MAX", {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+2)


        this.textyes = this.add.text(this.buytext.x - 250, screenCenterY + 200, "JA", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.textno = this.add.text(this.buytext.x + 250, screenCenterY + 200, "NEIN", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.buyrect = this.add.rectangle(screenCenterX, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false).setDepth(+3)
        

        this.rimrect = this.add.rectangle(screenCenterX, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false).setDepth(+3)
        this.rimrect2 = this.add.rectangle(screenCenterX, screenCenterY, 800, 600, 0x565656).setStrokeStyle(5, 0x000000, 1).setDepth(+1).setVisible(false).setDepth(+4)
        this.rimtext2 = this.add.text(screenCenterX, screenCenterY-250, "CHOOSE YOUR RIM", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)
        this.rimtext = this.add.text(screenCenterX, screenCenterY -150, "RIMS", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+3).setVisible(false)
        this.rimpricetext = this.add.text(screenCenterX, screenCenterY + 200, "PRICE: " + this.rimprice + "  COINS", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)
        this.standardrim = this.add.image(this.rimrect2.x - this.rimrect2.x / 3 + 50, this.rimrect2.y, "standard").setVisible(false).setDepth(+5).setScale(0.65)
        this.sportrim = this.add.image(this.rimrect2.x, this.rimrect2.y, "sport").setVisible(false).setDepth(+5).setScale(0.65)
        this.bbsrim = this.add.image(this.rimrect2.x + this.rimrect2.x / 3 - 50, this.rimrect2.y, "bbs").setVisible(false).setDepth(+5).setScale(0.65)
        this.standardtext = this.add.text(this.standardrim.x, this.standardrim.y - 125, "STANDARD", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)
        this.sporttext = this.add.text(this.sportrim.x, this.sportrim.y - 125, "SPORT", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)
        this.bbstext = this.add.text(this.bbsrim.x, this.bbsrim.y - 125, "BBS", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)




        this.characterrect2 = this.add.rectangle(screenCenterX, screenCenterY, 800, 600, 0x565656).setStrokeStyle(5, 0x000000, 1).setDepth(+5).setVisible(false)
        
        this.hobbes = this.add.image(this.characterrect2.x - this.characterrect2.x / 3 + 50, this.characterrect2.y, "hobbes").setVisible(false).setDepth(+5).setScale(0.9)
        this.steve = this.add.image(this.characterrect2.x, this.characterrect2.y, "steve").setVisible(false).setDepth(+5)
        this.calvin = this.add.image(this.characterrect2.x + this.characterrect2.x / 3 - 50, this.characterrect2.y, "calvin").setVisible(false).setDepth(+5).setScale(0.8)
        
        this.charactercostext = this.add.text(this.characterrect2.x, this.steve.y + 200, "PRICE: " + this.charactercost + "  COINS", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+5).setVisible(false)



        this.stevetext = this.add.text(this.steve.x, this.steve.y - 125, "STEVE", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.calvintext = this.add.text(this.calvin.x, this.calvin.y - 125, "CALVIN", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)


                
        this.hobbestext = this.add.text(this.hobbes.x, this.hobbes.y - 125, "HOBBES", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)



        this.arrowright = this.add.image(screenCenterX + 500, screenCenterY - 200, "arrow").setDepth(+4).setFlipY(true).setScale(0.35).setVisible(true).setInteractive().on("pointerdown", () => { 
            this.sound.play("click")
            if(this.middletext.text == "MUSCLE CAR") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 10, "golf").setScale(0.45)
                this.middleobj.setVisible(true)
                this.middletext.setText("GOLF MK II")
                this.params.vehicle = "GOLF MK II"
                this.params.carcolor2 = 1;
                this.params.carcolor = 0;
            } else if (this.middletext.text == "GOLF MK II") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
                this.middleobj.setVisible(true)
                this.middletext.setText("MUSCLE CAR")
                this.params.vehicle = "MUSCLE CAR"
                this.params.carcolor2 = 0;
                this.params.carcolor = 1;
            }
            
        })

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
        
        this.fuelleveltext = this.add.text(screenCenterX + 600, screenCenterY - 300, this.fuellevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false)
        this.engineleveltext = this.add.text(screenCenterX + 200, screenCenterY - 300, this.enginelevel + "/" + this.maxtuning, {
            
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

        this.wheelleveltext = this.add.text(screenCenterX - 600, screenCenterY - 300, this.wheellevel + "/" + this.maxtuning, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false)

        if(this.params.wheellevel3 == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel == 0){
            this.max_text.setVisible(true)
            this.wheel_cost_text.setVisible(false) 
            this.friction = 1 
            
        }else if(this.params.wheellevel2 == 1 && this.params.wheellevel == 0 && this.params.wheellevel3 == 0){
            this.wheel_cost = 400;
            this.friction = 0.5 
        }else if(this.params.wheellevel == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel3 == 0){
            this.wheel_cost = 200;
            this.friction = 0.2
        }

        if(this.params.accelerationlevel3 == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel == 0){
            this.max_text.setVisible(true)
            this.acceleration_cost_text.setVisible(false) 
            this.accelerationoffset = 155
        }else if(this.params.accelerationlevel2 == 1 && this.params.accelerationlevel == 0 && this.params.accelerationlevel3 == 0){
            this.acceleration_cost = 400;
            this.accelerationoffset = 145
        }else if(this.params.accelerationlevel == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel3 == 0){
            this.acceleration_cost = 200;
            this.accelerationoffset = 135
        }

        if(this.params.fuellevel3 == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel == 0){
            this.max_text.setVisible(true)
            this.fuel_cost_text.setVisible(false) 
            this.fueltank = 2
        }else if(this.params.fuellevel2 == 1 && this.params.fuellevel == 0 && this.params.fuellevel3 == 0){
            this.fuel_cost = 400;
            this.fueltank = 1,5 
        }else if(this.params.fuellevel == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel3 == 0){
            this.fuel_cost = 200;
            this.fueltank = 1
        }

        if(this.params.enginelevel3 == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel == 0){
            this.max_text.setVisible(true)
            this.engine_cost_text.setVisible(false) 
            this.enginepower = 0.6
        }else if(this.params.enginelevel2 == 1 && this.params.enginelevel == 0 && this.params.enginelevel3 == 0){
            this.engine_cost = 400;
            this.enginepower = 0.5
        }else if(this.params.enginelevel == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel3 == 0){
            this.engine_cost = 200;
            this.enginepower = 0.4
        }

        this.wheel_cost_text = this.add.text(screenCenterX -600, screenCenterY , this.wheel_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+1)

        this.wheel_cost_text2 = this.add.text(screenCenterX, screenCenterY + 175, this.wheel_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+3)
        this.acceleration_cost_text = this.add.text(screenCenterX -200, screenCenterY , this.acceleration_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+1)

        this.acceleration_cost_text2 = this.add.text(screenCenterX, screenCenterY + 175, this.acceleration_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+3)

        this.fuel_cost_text = this.add.text(screenCenterX +600, screenCenterY , this.fuel_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+1)

        this.fuel_cost_text2 = this.add.text(screenCenterX , screenCenterY + 175, this.fuel_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+3)
        
        this.engine_cost_text = this.add.text(screenCenterX + 200, screenCenterY , this.engine_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+1)

        this.engine_cost_text2 = this.add.text(screenCenterX , screenCenterY + 175, this.engine_cost, {
            
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setVisible(false).setDepth(+3)

        



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

        this.charactertext2 = this.add.text(screenCenterX + 100 , screenCenterY -150, "Choose Your Character", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+5).setVisible(false)

        this.colorrect2 = this.add.rectangle(screenCenterX, screenCenterY, 800, 600, 0x565656).setStrokeStyle(5, 0x000000, 1).setDepth(+3).setVisible(false)

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

        

        
                    
        this.colortext = this.add.text(screenCenterX - 600, screenCenterY -150, "Color", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+4).setVisible(false)

        this.charactertext = this.add.text(screenCenterX + 600, screenCenterY -150, "Character", {
            
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5).setDepth(+5).setVisible(false)


        this.colorrect = this.add.rectangle(screenCenterX - 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false)
        this.characterrect = this.add.rectangle(screenCenterX + 600, screenCenterY - 150, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setVisible(false).setDepth(+4)

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

        this.coinsnumber = this.add.text(180, this.coinobj.y, "" + this.coinscounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)

        this.middlerect = this.add.rectangle(screenCenterX, screenCenterY- 200, 600, 350, 0xadd8e6).setStrokeStyle(7, 0x000000)
        this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
        this.middletext = this.add.text(screenCenterX, screenCenterY - 400, "MUSCLE CAR", {
                    
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        

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


        this.greenlock = this.add.image(this.green.x, this.green.y - 10, "lock").setVisible(false).setDepth(+4).setScale(0.25)
        this.greylock = this.add.image(this.grey.x, this.grey.y - 10, "lock").setVisible(false).setDepth(+4).setScale(0.25)
        this.bluelock = this.add.image(this.blue.x, this.blue.y - 10, "lock").setVisible(false).setDepth(+4).setScale(0.25)
        this.yellowlock = this.add.image(this.yellow.x, this.yellow.y - 10, "lock").setVisible(false).setDepth(+4).setScale(0.25)
  

                this.vehiclerect = this.add.rectangle(screenCenterX, screenCenterY + 175, 275, 150, 0x252850).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
                    this.greenlock.setVisible(false)
                    this.yellowlock.setVisible(false)
                    this.bluelock.setVisible(false)
                    this.greylock.setVisible(false)
                    this.rimrect2.setVisible(false)
                    this.rimtext2.setVisible(false)
                    this.bbsrim.setVisible(false)
                    this.bbstext.setVisible(false)
                    this.standardrim.setVisible(false)
                    this.standardtext.setVisible(false)
                    this.sportrim.setVisible(false)
                    this.sporttext.setVisible(false)
                    this.rimpricetext.setVisible(false)
                    this.rimtext.setVisible(false)
                    this.rimrect.setVisible(false)
                    this.nocoins_text.setVisible(false)
                    this.nocoins_text.setVisible(false)
                    this.wheel_cost_text.setVisible(false)
                    this.acceleration_cost_text.setVisible(false)
                    this.engine_cost_text.setVisible(false)
                    this.fuel_cost_text.setVisible(false)
                    this.wheel_cost_text2.setVisible(false)
                    this.acceleration_cost_text2.setVisible(false)
                    this.engine_cost_text2.setVisible(false)
                    this.fuel_cost_text2.setVisible(false)
                    this.middlerect.fillColor = 0xadd8e6; 
                    this.sound.play("click2")
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
                    if(this.params.vehicle == "MUSCLE CAR") {

                        this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
                        this.middlerect.setVisible(true)
                        this.middletext.setText("MUSCLE CAR").setVisible(true);

                    } else if(this.params.vehicle == "GOLF MK II") {

                        this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "golf").setScale(0.45)
                        this.middlerect.setVisible(true)
                        this.middletext.setText("GOLF MK II").setVisible(true);
                
                    }

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

                    this.charactertext.setVisible(false)
                    this.charactertext2.setVisible(false)
                    this.characterrect.setVisible(false)
                    this.characterrect2.setVisible(false)
                    

                    this.x_button.setVisible(false)
                    this.x_image.setVisible(false)
                    this.buyingrect.setVisible(false)
                    this.buying_button.setVisible(false)
            this.arrowleft.destroy()       
            this.arrowleft = this.add.image(screenCenterX - 500, screenCenterY - 200, "arrow").setDepth(+4).setAngle(180).setScale(0.35).setVisible(true).setInteractive().on("pointerdown", () => { 
            this.sound.play("click")
            

            if(this.middletext.text == "MUSCLE CAR") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 10, "golf").setScale(0.45)
                this.middleobj.setVisible(true)
                this.middletext.setText("GOLF MK II")
                this.params.vehicle = "GOLF MK II"
                this.params.carcolor2 = 1;
                this.params.carcolor = 0;
            } else if (this.middletext.text == "GOLF MK II") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
                this.middleobj.setVisible(true)
                this.middletext.setText("MUSCLE CAR")
                this.params.vehicle = "MUSCLE CAR"
                this.params.carcolor2 = 0;
                this.params.carcolor = 1;
            }

           
        })
        this.arrowright.destroy()    
        this.arrowright = this.add.image(screenCenterX + 500, screenCenterY - 200, "arrow").setDepth(+4).setFlipY(true).setScale(0.35).setVisible(true).setInteractive().on("pointerdown", () => { 
            this.sound.play("click")
            if(this.middletext.text == "MUSCLE CAR") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 10, "golf").setScale(0.45)
                this.middleobj.setVisible(true)
                this.middletext.setText("GOLF MK II")
                this.params.vehicle = "GOLF MK II"
                this.params.carcolor2 = 1;
                this.params.carcolor = 0;
            } else if (this.middletext.text == "GOLF MK II") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle")
                this.middleobj.setVisible(true)
                this.middletext.setText("MUSCLE CAR")
                this.params.vehicle = "MUSCLE CAR"
                this.params.carcolor2 = 0;
                this.params.carcolor = 1;
            }
        })

                    
                    
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
            this.greenlock.setVisible(false)
            this.yellowlock.setVisible(false)
            this.bluelock.setVisible(false)
            this.greylock.setVisible(false)
            this.rimrect2.setVisible(false)
            this.rimtext2.setVisible(false)
            this.bbsrim.setVisible(false)
            this.bbstext.setVisible(false)
            this.standardrim.setVisible(false)
            this.standardtext.setVisible(false)
            this.sportrim.setVisible(false)
            this.sporttext.setVisible(false)
            this.rimpricetext.setVisible(false)
            this.rimtext.setVisible(false)
            this.rimrect.setVisible(false)
            this.charactertext.setVisible(false)
            this.charactertext2.setVisible(false)
            this.characterrect.setVisible(false)
            this.characterrect2.setVisible(false)
            this.wheel_cost_text.setVisible(false)
            this.wheel_cost_text2.setVisible(false)
            this.acceleration_cost_text2.setVisible(false)
            this.engine_cost_text2.setVisible(false)
            this.fuel_cost_text2.setVisible(false)
            this.acceleration_cost_text.setVisible(false)
            this.engine_cost_text.setVisible(false)
            this.fuel_cost_text.setVisible(false)
            this.nocoins_text.setVisible(false)
            this.middlerect.fillColor = 0x000000; 
            this.sound.play("click2")        
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
            if(this.params.map == "CLOUDY CLIFFS") {
                
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level1").setScale(0.31).setOrigin(0.5)
                this.middlerect.setVisible(true);
                this.middletext.setText("CLOUDY CLIFFS").setVisible(true);
            } else if(this.params.map == "FOGGY FOREST") {
                
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level2").setScale(0.31).setOrigin(0.5)
                this.middlerect.setVisible(true);
                this.middletext.setText("FOGGY FOREST").setVisible(true);
            } else if(this.params.map == "MAGMA MOUNTAINS") {
                
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level3").setScale(0.31).setOrigin(0.5)
                this.middlerect.setVisible(true);
                this.middletext.setText("MAGMA MOUNTAINS").setVisible(true);
            }

            this.arrowleft.destroy()       
            this.arrowleft = this.add.image(screenCenterX - 500, screenCenterY - 200, "arrow").setDepth(+4).setAngle(180).setScale(0.35).setVisible(true).setInteractive().on("pointerdown", () => { 
            this.sound.play("click")
            

            if(this.middletext.text == "CLOUDY CLIFFS") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level2").setScale(0.31).setOrigin(0.5)
                this.middleobj.setVisible(true)
                this.middletext.setText("FOGGY FOREST")
                this.params.map = "FOGGY FOREST"
            } else if (this.middletext.text == "FOGGY FOREST") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level3").setScale(0.31).setOrigin(0.5)
                this.middleobj.setVisible(true)
                this.middletext.setText("MAGMA MOUNTAINS")
                this.params.map = "MAGMA MOUNTAINS"
            } else if (this.middletext.text == "MAGMA MOUNTAINS") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level1").setScale(0.31).setOrigin(0.5)
                this.middleobj.setVisible(true)
                this.middletext.setText("CLOUDY CLIFFS")
                this.params.map = "CLOUDY CLIFFS"
            }

            
            })

            this.arrowright.destroy()    
            this.arrowright = this.add.image(screenCenterX + 500, screenCenterY - 200, "arrow").setDepth(+4).setFlipY(true).setScale(0.35).setVisible(true).setInteractive().on("pointerdown", () => { 
            this.sound.play("click")
            if(this.middletext.text == "CLOUDY CLIFFS") {
                
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level3").setScale(0.31).setOrigin(0.5)
                this.middleobj.setVisible(true)
                this.middletext.setText("MAGMA MOUNTAINS")
                this.params.map = "MAGMA MOUNTAINS"
                console.log(this.params.map)
            } else if (this.middletext.text == "FOGGY FOREST") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level1").setScale(0.31).setOrigin(0.5)
                this.middleobj.setVisible(true)
                this.middletext.setText("CLOUDY CLIFFS")
                this.params.map = "CLOUDY CLIFFS"
                console.log(this.params.map)
            } else if (this.middletext.text == "MAGMA MOUNTAINS") {
               
                this.middleobj.setVisible(false)
                this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "Level2").setScale(0.31).setOrigin(0.5)
                this.middleobj.setVisible(true)
                this.middletext.setText("FOGGY FOREST")
                this.params.map = "FOGGY FOREST"
                console.log(this.params.map)
            }
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
        this.buying_button = this.add.rectangle(screenCenterX,screenCenterY + 175, 725 ,100, 0x49B675  ).setStrokeStyle(5, 0x000000, 1).setDepth(+1).setVisible(false)
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

            this.nocoins_text.setVisible(false)
            

            
        
        })

        this.tuningrect = this.add.rectangle(screenCenterX+280, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            this.bluelock.setVisible(false)
            this.greenlock.setVisible(false)
            this.yellowlock.setVisible(false)
            this.greylock.setVisible(false)
            this.rimrect2.setVisible(false)
            this.rimtext2.setVisible(false)
            this.bbsrim.setVisible(false)
            this.bbstext.setVisible(false)
            this.standardrim.setVisible(false)
            this.standardtext.setVisible(false)
            this.sportrim.setVisible(false)
            this.sporttext.setVisible(false)
            this.rimpricetext.setVisible(false)
            this.rimtext.setVisible(false)
            this.rimrect.setVisible(false)
            this.charactertext.setVisible(false)
            this.charactertext2.setVisible(false)
            this.characterrect.setVisible(false)
            this.characterrect2.setVisible(false)
            this.sound.play("click2")         
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
            
            this.arrowleft.setVisible(false);
            this.arrowright.setVisible(false);
            
            
            this.wheel_cost_text.setVisible(true)
            

            this.wheelrect.setVisible(true).setInteractive().on("pointerdown", () =>{
               this.buyingrect.setVisible(true);
               if(this.params.wheellevel3 == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel == 0){
                this.wheel_cost_text2.setVisible(false)  
            }else if(this.params.wheellevel2 == 1 && this.params.wheellevel == 0 && this.params.wheellevel3 == 0){
                this.wheel_cost = 400;
                this.wheel_cost_text2.setText(this.wheel_cost)
                
            }else if(this.params.wheellevel == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel3 == 0){
                this.wheel_cost = 200;
                this.wheel_cost_text2.setText(this.wheel_cost)
                
            }


               this.buying_button.setVisible(true).setInteractive().on("pointerdown", () =>{
                if(this.coinscounter >= this.wheel_cost && this.params.wheellevel == 1 || this.params.wheellevel2 == 1) {
                    this.params.coins = this.params.coins - this.wheel_cost;
                    this.coinscounter = this.params.coins
                    this.coinsnumber.setText("" + this.coinscounter)
                    this.buyingrect.setVisible(false)
                    this.buying_button.setVisible(false)
                    this.wheel_cost_text2.setVisible(false)
                    this.wheeltuningtext.setVisible(false)
                    this.wheeltuningtext2.setVisible(false)
                    this.x_image.setVisible(false)


                    if(this.params.wheellevel3 == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel == 0){
                        this.params.wheellevel = 0
                        this.params.wheellevel2 = 0
                        this.params.wheellevel3 = 1
                        this.friction = 1
                        this.max_text.setVisible(true)
                        this.wheelleveltext.setText(3 + "/" + this.maxtuning)
                    }else if(this.params.wheellevel2 == 1 && this.params.wheellevel == 0 && this.params.wheellevel3 == 0){
                        this.params.wheellevel = 0
                        this.params.wheellevel2 = 0
                        this.params.wheellevel3 = 1
                        this.friction = 0.5
                        this.wheelleveltext.setText(2 + "/" + this.maxtuning)
                    }else if(this.params.wheellevel == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel3 == 0){
                        this.params.wheellevel = 0
                        this.params.wheellevel2 = 1
                        this.params.wheellevel3 = 0
                        this.friction = 0.2
                        this.wheelleveltext.setText(1 + "/" + this.maxtuning)
                    }
                    
                    this.wheelleveltext.setText(this.wheellevel + "/" + this.maxtuning)
                    
                    if(this.params.wheellevel3 == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel == 0){
                        this.wheel_cost_text.setVisible(false)  
                        this.max_text.setVisible(true)
                        this.wheelleveltext.setText(3 + "/" + this.maxtuning)
                    }else if(this.params.wheellevel2 == 1 && this.params.wheellevel == 0 && this.params.wheellevel3 == 0){
                        this.wheel_cost = 400;
                        this.wheel_cost_text.setText(this.wheel_cost)
                        this.wheelleveltext.setText(2 + "/" + this.maxtuning)
                    }else if(this.params.wheellevel == 1 && this.params.wheellevel2 == 0 && this.params.wheellevel3 == 0){
                        this.wheel_cost = 200;
                        this.wheel_cost_text.setText(this.wheel_cost)
                        this.wheelleveltext.setText(1 + "/" + this.maxtuning)
                    }
                    

                }else if(this.params.coins < this.wheel_cost && this.params.wheellevel3 == 0){
                    this.nocoins_text.setVisible(true)
                    
                }
               });
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
                
                this.wheel_cost_text2.setVisible(true)

               
            })

            
     

            this.wheelrect2.setVisible(true)

            this.acceleration_cost_text.setVisible(true)
            
            this.accelerationrect.setVisible(true).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                if(this.params.accelerationlevel3 == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel == 0){
                    this.acceleration_cost_text2.setVisible(false)  
                    this.max_text2.setVisible(true)
                    
                }else if(this.params.accelerationlevel2 == 1 && this.params.accelerationlevel == 0 && this.params.accelerationlevel3 == 0){
                    this.acceleration_cost = 400;
                    this.wheel_cost_text2.setText(this.wheel_cost)
                    
                }else if(this.params.accelerationlevel == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel3 == 0){
                    this.acceleration_cost = 200;
                    this.acceleration_cost_text2.setText(this.acceleration_cost)
                   
                }
                
               this.buying_button.setVisible(true).setInteractive().on("pointerdown", () =>{
                if(this.coinscounter >= this.acceleration_cost && this.params.accelerationlevel == 1 || this.params.accelerationlevel2 == 1) {
                    this.params.coins = this.params.coins - this.acceleration_cost;
                    this.coinscounter = this.params.coins
                    this.coinsnumber.setText("" + this.coinscounter)
                    this.buyingrect.setVisible(false)
                    this.buying_button.setVisible(false)
                    this.acceleration_cost_text2.setVisible(false)
                    this.accelerationtuningtext.setVisible(false)
                    this.accelerationtuningtext2.setVisible(false)
                    this.x_image.setVisible(false)

                    if(this.params.accelerationlevel3 == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel == 0){
                        this.params.accelerationlevel = 0
                        this.params.accelerationlevel2 = 0
                        this.params.accelerationlevel3 = 1
                        this.accelerationoffset = 180
                        this.max_text2.setVisible(true)
                        this.accelerationleveltext.setText(3 + "/" + this.maxtuning)
                    }else if(this.params.accelerationlevel2 == 1 && this.params.accelerationlevel == 0 && this.params.accelerationlevel3 == 0){
                        this.params.accelerationlevel = 0
                        this.params.accelerationlevel2 = 0
                        this.params.accelerationlevel3 = 1
                        this.accelerationoffset = 150
                        this.accelerationleveltext.setText(2 + "/" + this.maxtuning)
                    }else if(this.params.accelerationlevel == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel3 == 0){
                        this.params.accelerationlevel = 0
                        this.params.accelerationlevel2 = 1
                        this.params.accelerationlevel3 = 0
                        this.accelerationoffset = 135
                        this.accelerationleveltext.setText(1 + "/" + this.maxtuning)
                    }
                    
                    this.accelerationleveltext.setText(this.accelerationlevel + "/" + this.maxtuning)
                    
                    if(this.params.accelerationlevel3 == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel == 0){
                        this.acceleration_cost_text.setVisible(false)  
                        this.max_text2.setVisible(true)
                        this.accelerationleveltext.setText(3 + "/" + this.maxtuning)
                    }else if(this.params.accelerationlevel2 == 1 && this.params.accelerationlevel == 0 && this.params.accelerationlevel3 == 0){
                        this.acceleration_cost = 400;
                        this.acceleration_cost_text.setText(this.acceleration_cost)
                        this.accelerationleveltext.setText(2 + "/" + this.maxtuning)
                    }else if(this.params.accelerationlevel == 1 && this.params.accelerationlevel2 == 0 && this.params.accelerationlevel3 == 0){
                        this.acceleration_cost = 200;
                        this.acceleration_cost_text.setText(this.acceleration_cost)
                        this.accelerationleveltext.setText(1 + "/" + this.maxtuning)
                    }
                    

                }else if(this.params.coins < this.acceleration_cost && this.params.accelerationlevel3 == 0){
                    this.nocoins_text.setVisible(true)
                    
                }
               });
               
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

               this.acceleration_cost_text2.setVisible(true)

             })
            this.accelerationrect2.setVisible(true)
            
            this.engine_cost_text.setVisible(true)

            this.enginerect.setVisible(true).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                if(this.params.enginelevel3 == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel == 0){
                    this.engine_cost_text2.setVisible(false)  
                    this.max_text3.setVisible(true)
                    
                }else if(this.params.enginelevel2 == 1 && this.params.enginelevel == 0 && this.params.enginelevel3 == 0){
                    this.engine_cost = 400;
                    this.engine_cost_text2.setText(this.engine_cost)
                  
                }else if(this.params.enginelevel == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel3 == 0){
                    this.engine_cost = 200;
                    this.engine_cost_text2.setText(this.engine_cost)
                    
                }


                this.buying_button.setVisible(true).setInteractive().on("pointerdown", () =>{
                    if(this.coinscounter >= this.engine_cost && this.params.enginelevel == 1 || this.params.enginelevel2 == 1) {
                        this.params.coins = this.params.coins - this.engine_cost;
                        this.coinscounter = this.params.coins
                        this.coinsnumber.setText("" + this.coinscounter)
                        this.buyingrect.setVisible(false)
                        this.buying_button.setVisible(false)
                        this.engine_cost_text2.setVisible(false)
                        this.enginetuningtext.setVisible(false)
                        this.enginetuningtext2.setVisible(false)
                        this.x_image.setVisible(false)
    
                        if(this.params.enginelevel3 == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel == 0){
                            this.params.enginelevel = 0
                            this.params.enginelevel2 = 0
                            this.params.enginelevel3 = 1
                            this.friction = 1
                            this.max_text3.setVisible(true)
                            this.engineleveltext.setText(3 + "/" + this.maxtuning)
                        }else if(this.params.enginelevel2 == 1 && this.params.enginelevel == 0 && this.params.enginelevel3 == 0){
                            this.params.enginelevel = 0
                            this.params.enginelevel2 = 0
                            this.params.enginelevel3 = 1
                            this.friction = 0.5
                            this.engineleveltext.setText(2 + "/" + this.maxtuning)
                        }else if(this.params.enginelevel == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel3 == 0){
                            this.params.enginelevel = 0
                            this.params.enginelevel2 = 1
                            this.params.enginelevel3 = 0
                            this.friction = 0.2
                            this.engineleveltext.setText(1 + "/" + this.maxtuning)
                        }
                        
                        this.engineleveltext.setText(this.enginelevel + "/" + this.maxtuning)
                        
                        if(this.params.enginelevel3 == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel == 0){
                            this.engine_cost_text.setVisible(false) 
                            this.max_text3.setVisible(true) 
                            this.engineleveltext.setText(3 + "/" + this.maxtuning)
                        }else if(this.params.enginelevel2 == 1 && this.params.enginelevel == 0 && this.params.enginelevel3 == 0){
                            this.engine_cost = 400;
                            this.engine_cost_text.setText(this.engine_cost)
                            this.engineleveltext.setText(2 + "/" + this.maxtuning)
                        }else if(this.params.wheellevel == 1 && this.params.enginelevel2 == 0 && this.params.enginelevel3 == 0){
                            this.engine_cost = 200;
                            this.engine_cost_text.setText(this.engine_cost)
                            this.engineleveltext.setText(1 + "/" + this.maxtuning)
                        }
                        
    
                    }else if(this.params.coins < this.engine_cost && this.params.enginelevel3 == 0){
                        this.nocoins_text.setVisible(true)
                        
                    }
                   });

                
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

                this.engine_cost_text2.setVisible(true)

             })
            this.enginerect2.setVisible(true)

            
            this.fuel_cost_text.setVisible(true)

            this.fuelrect.setVisible(true).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () =>{
                this.buyingrect.setVisible(true);
                if(this.params.fuellevel3 == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel == 0){
                    this.fuel_cost_text2.setVisible(false)  
                    this.max_text4.setVisible(true)
                    
                }else if(this.params.fuellevel2 == 1 && this.params.fuellevel == 0 && this.params.fuellevel3 == 0){
                    this.fuel_cost = 400;
                    this.fuel_cost_text2.setText(this.fuel_cost)
                    
                }else if(this.params.fuellevel == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel3 == 0){
                    this.fuel_cost = 200;
                    this.fuel_cost_text2.setText(this.fuel_cost)
                    
                }
                this.buying_button.setVisible(true).setInteractive().on("pointerdown", () =>{
                    if(this.coinscounter >= this.fuel_cost && this.params.fuellevel == 1 || this.params.fuellevel2 == 1) {
                        this.params.coins = this.params.coins - this.fuel_cost;
                        this.coinscounter = this.params.coins
                        this.coinsnumber.setText("" + this.coinscounter)
                        this.buyingrect.setVisible(false)
                        this.buying_button.setVisible(false)
                        this.fuel_cost_text2.setVisible(false)
                        this.fueltuningtext.setVisible(false)
                        this.fueltuningtext2.setVisible(false)
                        this.x_image.setVisible(false)
    
                        if(this.params.fuellevel3 == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel == 0){
                            this.params.fuellevel = 0
                            this.params.fuellevel2 = 0
                            this.params.fuellevel3 = 1
                            this.fueltank = 2
                            this.max_text4.setVisible(true)
                            this.fuelleveltext.setText(3 + "/" + this.maxtuning)
                        }else if(this.params.fuellevel2 == 1 && this.params.fuellevel == 0 && this.params.fuellevel3 == 0){
                            this.params.fuellevel = 0
                            this.params.fuellevel2 = 0
                            this.params.fuellevel3 = 1
                            this.fueltank = 1.5
                            this.fuelleveltext.setText(2 + "/" + this.maxtuning)
                        }else if(this.params.fuellevel == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel3 == 0){
                            this.params.fuellevel = 0
                            this.params.fuellevel2 = 1
                            this.params.fuellevel3 = 0
                            this.fueltank = 1
                            this.fuelleveltext.setText(1 + "/" + this.maxtuning)
                        }
                        
                        this.fuelleveltext.setText(this.fuellevel + "/" + this.maxtuning)
                        
                        if(this.params.fuellevel3 == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel == 0){
                            this.fuel_cost_text.setVisible(false)  
                            this.max_text4.setVisible(true)
                            this.fuelleveltext.setText(3 + "/" + this.maxtuning)
                        }else if(this.params.fuellevel2 == 1 && this.params.fuellevel == 0 && this.params.fuellevel3 == 0){
                            this.fuel_cost = 400;
                            this.fuel_cost_text.setText(this.fuel_cost)
                            this.fuelleveltext.setText(2 + "/" + this.maxtuning)
                        }else if(this.params.fuellevel == 1 && this.params.fuellevel2 == 0 && this.params.fuellevel3 == 0){
                            this.fuel_cost = 200;
                            this.fuel_cost_text.setText(this.fuel_cost)
                            this.fuelleveltext.setText(1 + "/" + this.maxtuning)
                        }
                        
    
                    }else if(this.params.coins < this.fuel_cost && this.params.fuellevel3 == 0){
                        this.nocoins_text.setVisible(true)
                        
                    }
                   });
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

                this.fuel_cost_text2.setVisible(true)
                   
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

            this.wheel_cost_text.setVisible(false)
                this.acceleration_cost_text.setVisible(false)
                this.engine_cost_text.setVisible(false)
                this.fuel_cost_text.setVisible(false)
                this.wheel_cost_text2.setVisible(false)
                    this.acceleration_cost_text2.setVisible(false)
                    this.engine_cost_text2.setVisible(false)
                    this.fuel_cost_text2.setVisible(false)
            this.rimrect.setVisible(true).setInteractive().on("pointerdown", () => {

                this.greenlock.setVisible(false)
                this.yellowlock.setVisible(false)
                this.bluelock.setVisible(false)
                this.greylock.setVisible(false)

                this.colortext2.setVisible(false)
                this.sound.play("click")
                this.rimrect2.setVisible(true)
                this.rimtext2.setVisible(true)
                this.bbsrim.setVisible(true).setInteractive().on("pointerdown", () => {
                    this.sound.play("click")
                    this.params.rim = "BBS"
                    this.rimrect2.setVisible(false)
                    this.rimtext2.setVisible(false)
                    this.bbsrim.setVisible(false)
                    this.bbstext.setVisible(false)
                    this.standardrim.setVisible(false)
                    this.standardtext.setVisible(false)
                    this.sportrim.setVisible(false)
                    this.sporttext.setVisible(false)
                    this.rimpricetext.setVisible(false)
                })
                this.bbstext.setVisible(true)
                this.standardrim.setVisible(true).setInteractive().on("pointerdown", () => {
                    this.sound.play("click")
                    this.params.rim = "STANDARD"
                    this.rimrect2.setVisible(false)
                    this.rimtext2.setVisible(false)
                    this.bbsrim.setVisible(false)
                    this.bbstext.setVisible(false)
                    this.standardrim.setVisible(false)
                    this.standardtext.setVisible(false)
                    this.sportrim.setVisible(false)
                    this.sporttext.setVisible(false)
                    this.rimpricetext.setVisible(false)
                })
                this.standardtext.setVisible(true)
                this.sportrim.setVisible(true).setInteractive().on("pointerdown", () => {
                    this.sound.play("click")
                    this.params.rim = "SPORT"
                    this.rimrect2.setVisible(false)
                    this.rimtext2.setVisible(false)
                    this.bbsrim.setVisible(false)
                    this.bbstext.setVisible(false)
                    this.standardrim.setVisible(false)
                    this.standardtext.setVisible(false)
                    this.sportrim.setVisible(false)
                    this.sporttext.setVisible(false)
                    this.rimpricetext.setVisible(false)
                })
                this.sporttext.setVisible(true)
                this.rimpricetext.setVisible(true)
            })
            this.rimrect2.setVisible(false)
            
            this.rimtext.setVisible(true)
            this.rimtext2.setVisible(false)


            this.charactertext.setVisible(true)
            this.charactertext2.setVisible(false)
            this.characterrect.setVisible(true).setInteractive().on("pointerdown", () => {

                this.greenlock.setVisible(false)
                this.yellowlock.setVisible(false)
                this.bluelock.setVisible(false)
                this.greylock.setVisible(false)

                this.colorrect2.setVisible(false)
                this.colortext2.setVisible(false)
                this.red.setVisible(false)
                this.green.setVisible(false)
                this.green.setVisible(false)
                this.blue.setVisible(false)
                this.yellow.setVisible(false)
                this.grey.setVisible(false)

                this.sound.play("click")
                this.charactertext2.setVisible(true).setPosition(this.characterrect2.x, this.characterrect2.y - 250)
                this.characterrect2.setVisible(true)

                this.hobbes.setVisible(true).setInteractive().on("pointerdown", () => {
                    this.sound.play("click")
                    this.params.character = "HOBBES"
                    this.characterrect2.setVisible(false)
                    this.charactercostext.setVisible(false)
                    this.charactertext2.setVisible(false)
                    this.hobbes.setVisible(false)
                    this.hobbestext.setVisible(false)
                    this.calvin.setVisible(false)
                    this.calvintext.setVisible(false)
                    this.steve.setVisible(false)
                    this.stevetext.setVisible(false)
                })    
                this.hobbestext.setVisible(true)
                this.steve.setVisible(true).setInteractive().on("pointerdown", () => {
                    this.sound.play("click")
                    this.params.character = "STEVE"
                    this.characterrect2.setVisible(false)
                    this.charactercostext.setVisible(false)
                    this.charactertext2.setVisible(false)
                    this.hobbes.setVisible(false)
                    this.hobbestext.setVisible(false)
                    this.calvin.setVisible(false)
                    this.calvintext.setVisible(false)
                    this.steve.setVisible(false)
                    this.stevetext.setVisible(false)
                })  
                this.stevetext.setVisible(true)
                this.calvin.setVisible(true).setInteractive().on("pointerdown", () => {
                    this.sound.play("click")
                    this.params.character = "CALVIN"
                    this.characterrect2.setVisible(false)
                    this.charactercostext.setVisible(false)
                    this.charactertext2.setVisible(false)
                    this.hobbes.setVisible(false)
                    this.hobbestext.setVisible(false)
                    this.calvin.setVisible(false)
                    this.calvintext.setVisible(false)
                    this.steve.setVisible(false)
                    this.stevetext.setVisible(false)
                })  
                this.calvintext.setVisible(true)
                this.charactercostext.setVisible(true)

                

            })   

            this.sound.play("click2")         
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
            
            this.arrowleft.setVisible(false);
            this.arrowright.setVisible(false);


            this.colortext.setVisible(true)

            this.colorrect.setVisible(true).setInteractive().on("pointerdown", () =>{

                
                if(this.params.greenstatus == "locked") {
                    this.greenlock.setVisible(true)
                } 
                if(this.params.bluestatus == "locked") {
                    this.bluelock.setVisible(true)
                } 
                if(this.params.yellowstatus == "locked") {
                    this.yellowlock.setVisible(true)
                } 
                if(this.params.greystatus == "locked") {
                    this.greylock.setVisible(true)
                }         

                this.rimrect2.setVisible(false)
                this.rimtext2.setVisible(false)
                this.bbsrim.setVisible(false)
                this.bbstext.setVisible(false)
                this.sportrim.setVisible(false)
                this.sporttext.setVisible(false)
                this.standardrim.setVisible(false)
                this.standardtext.setVisible(false)
                this.rimpricetext.setVisible(false)
                this.characterrect2.setVisible(false)
                this.charactertext2.setVisible(false)
                this.hobbes.setVisible(false)
                this.hobbestext.setVisible(false)
                this.calvin.setVisible(false)
                this.calvintext.setVisible(false)
                this.steve.setVisible(false)
                this.stevetext.setVisible(false)
                this.charactercostext.setVisible(false)


                this.sound.play("click")     
                this.colorrect2.setVisible(true)
                this.colortext2.setVisible(true)
                this.red.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+4).setInteractive().on("pointerdown", () =>{

                        this.greenlock.setVisible(false)
                        this.bluelock.setVisible(false)
                        this.greylock.setVisible(false)
                        this.yellowlock.setVisible(false)
                        this.sound.play("click") 

                        if(this.params.vehicle == "MUSCLE CAR") {

                            this.params.carcolor = 1
                            this.params.carcolor2 = 0
                            this.colorrect2.setVisible(false)
                            this.red.setVisible(false)
                            this.blue.setVisible(false)
                            this.green.setVisible(false)
                            this.yellow.setVisible(false)
                            this.grey.setVisible(false)
                            this.colortext2.setVisible(false)
                        } else if (this.params.vehicle == "GOLF MK II") {
                            
                            this.params.carcolor = 0
                            this.params.carcolor2 = 1
                            this.colorrect2.setVisible(false)
                            this.red.setVisible(false)
                            this.blue.setVisible(false)
                            this.green.setVisible(false)
                            this.yellow.setVisible(false)
                            this.grey.setVisible(false)
                            this.colortext2.setVisible(false)
                        }
                        
                        
                })
                this.blue.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+4).setInteractive().on("pointerdown", () =>{
                    
                        this.sound.play("click") 

                        if(this.params.bluestatus == "bought") {
                            if(this.params.vehicle == "MUSCLE CAR") {
        
                                this.params.carcolor = 2
                                this.params.carcolor2 = 0
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.greenlock.setVisible(false)
                                this.greylock.setVisible(false)
                                this.yellowlock.setVisible(false)
                            } else if (this.params.vehicle == "GOLF MK II") {
                            
                                this.params.carcolor = 0
                                this.params.carcolor2 = 2
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.greenlock.setVisible(false)
                                this.greylock.setVisible(false)
                                this.yellowlock.setVisible(false)
                            }
                            
                        } else {
                            this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                            this.buyingrect.setVisible(true)
                            this.blue.setVisible(true).setPosition(this.buyingrect.x, this.buyingrect.y)
                            this.red.setVisible(false)
                            this.yellow.setVisible(false)
                            this.green.setVisible(false)
                            this.grey.setVisible(false)
                            this.greylock.setVisible(false)
                            this.greenlock.setVisible(false)
                            this.bluelock.setVisible(false)
                            this.yellowlock.setVisible(false)
                            this.colortext2.setVisible(false)
                            this.buytext.setVisible(true)
                            this.textno.setVisible(true).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                this.textno.setVisible(false)
                                this.textyes.setVisible(false)
                                this.buyingrect.setVisible(false)
                                this.buytext.setVisible(false)
                                this.blue.setVisible(false)
                                this.colorrect2.setVisible(false)
                                this.blue.setVisible(false).setPosition(screenCenterX - 250, screenCenterY + 200)
                            })
                            this.textyes.setVisible(true).setText("Ja").setPosition(this.buytext.x - 250, screenCenterY + 200).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                if(this.params.coins >= 100) {
                                    this.params.bluestatus = "bought"
                                    this.params.coins = this.params.coins - 100;
                                    this.coinscounter = this.params.coins
                                    this.coinsnumber.setText("" + this.coinscounter)
                                    this.buyingrect.setVisible(false)
                                    this.blue.setVisible(false).setPosition(screenCenterX - 250, screenCenterY + 200)
                                    this.colorrect2.setVisible(false)
                                    this.colortext2.setVisible(false)
                                    this.textno.setVisible(false)
                                    this.buytext.setVisible(false)
                                    this.textyes.setVisible(false)
                                } else {
                                    this.buytext.setVisible(true)
                                    this.colorrect2.setVisible(true)
                                    this.textyes.setVisible(true)
                                    this.buytext.setText("Du hast nicht genuegend Coins!")
                                    this.blue.setVisible(false).setPosition(screenCenterX - 250, screenCenterY + 200)
                                    this.textno.setVisible(false)
                                    this.textyes.setText("Zurueck zum Shop").setPosition(this.buyingrect.x, this.buyingrect.y).setInteractive().on("pointerdown", () =>{
                                        this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                                        this.buyingrect.setVisible(false)
                                        this.colorrect2.setVisible(false)
                                        this.textyes.setVisible(false)
                                        this.buytext.setVisible(false)
                                        this.textno.setVisible(false)
                                        
                                    })
                                }

                            })
                        }
                            
                       
                    

                })
                this.green.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+4).setInteractive().on("pointerdown", () =>{
                        this.sound.play("click") 
                        if(this.params.greenstatus == "bought") {
                            if(this.params.vehicle == "MUSCLE CAR") {
        
                                this.params.carcolor = 3
                                this.params.carcolor2 = 0
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.bluelock.setVisible(false)
                                this.greylock.setVisible(false)
                                this.yellowlock.setVisible(false)
                            } else if (this.params.vehicle == "GOLF MK II") {
                            
                                this.params.carcolor = 0
                                this.params.carcolor2 = 3
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.bluelock.setVisible(false)
                                this.greylock.setVisible(false)
                                this.yellowlock.setVisible(false)
                            }
                            
                        } else {
                            this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                            this.buyingrect.setVisible(true)
                            this.green.setVisible(true).setPosition(this.buyingrect.x, this.buyingrect.y)
                            this.red.setVisible(false)
                            this.yellow.setVisible(false)
                            this.blue.setVisible(false)
                            this.grey.setVisible(false)
                            this.greylock.setVisible(false)
                            this.greenlock.setVisible(false)
                            this.bluelock.setVisible(false)
                            this.yellowlock.setVisible(false)
                            this.colortext2.setVisible(false)
                            this.buytext.setVisible(true)
                            this.textno.setVisible(true).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                this.textno.setVisible(false)
                                this.textyes.setVisible(false)
                                this.buyingrect.setVisible(false)
                                this.buytext.setVisible(false)
                                this.green.setVisible(false)
                                this.colorrect2.setVisible(false)
                                this.green.setVisible(false).setPosition(screenCenterX + 25, screenCenterY + 25)
                            })
                            this.textyes.setVisible(true).setText("Ja").setPosition(this.buytext.x - 250, screenCenterY + 200).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                if(this.params.coins >= 100) {
                                    this.params.greenstatus = "bought"
                                    this.params.coins = this.params.coins - 100;
                                    this.coinscounter = this.params.coins
                                    this.coinsnumber.setText("" + this.coinscounter)
                                    this.buyingrect.setVisible(false)
                                    this.green.setVisible(false).setPosition(screenCenterX + 25, screenCenterY + 25)
                                    this.colorrect2.setVisible(false)
                                    this.colortext2.setVisible(false)
                                    this.textno.setVisible(false)
                                    this.buytext.setVisible(false)
                                    this.textyes.setVisible(false)
                                } else {
                                    this.buytext.setVisible(true)
                                    this.colorrect2.setVisible(true)
                                    this.textyes.setVisible(true)
                                    this.buytext.setText("Du hast nicht genuegend Coins!")
                                    this.green.setVisible(false).setPosition(screenCenterX + 25, screenCenterY + 25)
                                    this.textno.setVisible(false)
                                    this.textyes.setText("Zurueck zum Shop").setPosition(this.buyingrect.x, this.buyingrect.y).setInteractive().on("pointerdown", () =>{
                                        this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                                        this.buyingrect.setVisible(false)
                                        this.colorrect2.setVisible(false)
                                        this.textyes.setVisible(false)
                                        this.buytext.setVisible(false)
                                        this.textno.setVisible(false)
                                        
                                    })
                                }

                            })
                        }
                })
                this.yellow.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+4).setInteractive().on("pointerdown", () =>{
                        this.sound.play("click") 
                        if(this.params.yellowstatus == "bought") {
                            if(this.params.vehicle == "MUSCLE CAR") {
        
                                this.params.carcolor = 4
                                this.params.carcolor2 = 0
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.bluelock.setVisible(false)
                                this.greenlock.setVisible(false)
                                this.greylock.setVisible(false)
                            } else if (this.params.vehicle == "GOLF MK II") {
                            
                                this.params.carcolor = 0
                                this.params.carcolor2 = 4
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.bluelock.setVisible(false)
                                this.greenlock.setVisible(false)
                                this.greylock.setVisible(false)
                            }
                            
                        } else {
                            this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                            this.buyingrect.setVisible(true)
                            this.yellow.setVisible(true).setPosition(this.buyingrect.x, this.buyingrect.y)
                            this.red.setVisible(false)
                            this.green.setVisible(false)
                            this.blue.setVisible(false)
                            this.grey.setVisible(false)
                            this.greylock.setVisible(false)
                            this.greenlock.setVisible(false)
                            this.bluelock.setVisible(false)
                            this.yellowlock.setVisible(false)
                            this.colortext2.setVisible(false)
                            this.buytext.setVisible(true)
                            this.textno.setVisible(true).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                this.textno.setVisible(false)
                                this.textyes.setVisible(false)
                                this.buyingrect.setVisible(false)
                                this.buytext.setVisible(false)
                                this.yellow.setVisible(false)
                                this.colorrect2.setVisible(false)
                                this.yellow.setVisible(false).setPosition(screenCenterX +25, screenCenterY + 200)
                            })
                            this.textyes.setVisible(true).setText("Ja").setPosition(this.buytext.x - 250, screenCenterY + 200).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                if(this.params.coins >= 100) {
                                    this.params.yellowstatus = "bought"
                                    this.params.coins = this.params.coins - 100;
                                    this.coinscounter = this.params.coins
                                    this.coinsnumber.setText("" + this.coinscounter)
                                    this.buyingrect.setVisible(false)
                                    this.yellow.setVisible(false).setPosition(screenCenterX +25, screenCenterY + 200)
                                    this.colorrect2.setVisible(false)
                                    this.colortext2.setVisible(false)
                                    this.textno.setVisible(false)
                                    this.buytext.setVisible(false)
                                    this.textyes.setVisible(false)
                                } else {
                                    this.buytext.setVisible(true)
                                    this.colorrect2.setVisible(true)
                                    this.textyes.setVisible(true)
                                    this.buytext.setText("Du hast nicht genuegend Coins!")
                                    this.yellow.setVisible(false).setPosition(screenCenterX +25, screenCenterY + 200)
                                    this.textno.setVisible(false)
                                    this.textyes.setText("Zurueck zum Shop").setPosition(this.buyingrect.x, this.buyingrect.y).setInteractive().on("pointerdown", () =>{
                                        this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                                        this.buyingrect.setVisible(false)
                                        this.colorrect2.setVisible(false)
                                        this.textyes.setVisible(false)
                                        this.buytext.setVisible(false)
                                        this.textno.setVisible(false)
                                        
                                    })
                                }

                            })
                        }
                      
                })
                this.grey.setVisible(true).setStrokeStyle(5, 0x000000, 1).setDepth(+4).setInteractive().on("pointerdown", () =>{
                        this.sound.play("click") 
                        if(this.params.greystatus == "bought") {
                            if(this.params.vehicle == "MUSCLE CAR") {
        
                                this.params.carcolor = 5
                                this.params.carcolor2 = 0
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.bluelock.setVisible(false)
                                this.greenlock.setVisible(false)
                                this.yellowlock.setVisible(false)
                            } else if (this.params.vehicle == "GOLF MK II") {
                            
                                this.params.carcolor = 0
                                this.params.carcolor2 = 5
                                this.colorrect2.setVisible(false)
                                this.red.setVisible(false)
                                this.blue.setVisible(false)
                                this.green.setVisible(false)
                                this.yellow.setVisible(false)
                                this.grey.setVisible(false)
                                this.colortext2.setVisible(false)
                                this.bluelock.setVisible(false)
                                this.greenlock.setVisible(false)
                                this.yellowlock.setVisible(false)
                            }
                            
                        } else {
                            this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                            this.buyingrect.setVisible(true)
                            this.grey.setVisible(true).setPosition(this.buyingrect.x, this.buyingrect.y)
                            this.red.setVisible(false)
                            this.green.setVisible(false)
                            this.blue.setVisible(false)
                            this.yellow.setVisible(false)
                            this.greylock.setVisible(false)
                            this.greenlock.setVisible(false)
                            this.bluelock.setVisible(false)
                            this.yellowlock.setVisible(false)
                            this.colortext2.setVisible(false)
                            this.buytext.setVisible(true)
                            this.textno.setVisible(true).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                this.textno.setVisible(false)
                                this.textyes.setVisible(false)
                                this.buyingrect.setVisible(false)
                                this.buytext.setVisible(false)
                                this.grey.setVisible(false)
                                this.colorrect2.setVisible(false)
                                this.grey.setVisible(false).setPosition(screenCenterX - 250, screenCenterY + 25)
                            })
                            this.textyes.setVisible(true).setText("Ja").setPosition(this.buytext.x - 250, screenCenterY + 200).setInteractive().on("pointerdown", () =>{
                                this.sound.play("click") 
                                if(this.params.coins >= 100) {
                                    this.params.greystatus = "bought"
                                    this.params.coins = this.params.coins - 100;
                                    this.coinscounter = this.params.coins
                                    this.coinsnumber.setText("" + this.coinscounter)
                                    this.buyingrect.setVisible(false)
                                    this.grey.setVisible(false).setPosition(screenCenterX - 250, screenCenterY + 25)
                                    this.colorrect2.setVisible(false)
                                    this.colortext2.setVisible(false)
                                    this.textno.setVisible(false)
                                    this.buytext.setVisible(false)
                                    this.textyes.setVisible(false)
                                } else {
                                    this.buytext.setVisible(true)
                                    this.colorrect2.setVisible(true)
                                    this.textyes.setVisible(true)
                                    this.buytext.setText("Du hast nicht genuegend Coins!")
                                    this.grey.setVisible(false).setPosition(screenCenterX - 250, screenCenterY + 25)
                                    this.textno.setVisible(false)
                                    this.textyes.setText("Zurueck zum Shop").setPosition(this.buyingrect.x, this.buyingrect.y).setInteractive().on("pointerdown", () =>{
                                        this.buytext.setText("Willst du die Farbe fuer  100  Coins kaufen?")
                                        this.buyingrect.setVisible(false)
                                        this.colorrect2.setVisible(false)
                                        this.textyes.setVisible(false)
                                        this.buytext.setVisible(false)
                                        this.textno.setVisible(false)
                                        
                                    })
                                }

                            })
                        }
                       
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
            if(this.params.map == "CLOUDY CLIFFS") {
                this.params.coins = this.coinscounter
                this.params.friction = this.friction
                this.params.fueltank = this.fueltank
                this.params.enginepower = this.params.enginepower
                this.scene.start("Level1", this.params)
            } else if(this.params.map == "FOGGY FOREST") {
                this.params.coins = this.coinscounter
                this.params.friction = this.friction
                this.params.fueltank = this.fueltank
                this.params.enginepower = this.params.enginepower
                this.scene.start("Level2", this.params)
            } if(this.params.map == "MAGMA MOUNTAINS") {
                this.params.coins = this.coinscounter
                this.params.friction = this.friction
                this.params.fueltank = this.fueltank
                this.params.enginepower = this.params.enginepower
                this.scene.start("Level3", this.params)
            }
            
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