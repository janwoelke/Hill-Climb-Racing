export default class Win extends Phaser.Scene{

    gameovertext;
   
   
    highscoretext;
    highscoretext2;
    scoretext;
    scoretext2;
    Fullscreenevent;
    menurect;
    menutext;

    cointext;
    coinscounter: number;
    coinobj;
    coinsnumber;

    factor = 0.4;

    params: Params; 

    constructor() {

        super("Win") 
    
    
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

        this.coinsnumber = this.add.text(200, 55, "" + this.coinscounter,{
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

        }).setScrollFactor(0).setOrigin(0.5)

        this.coinobj = this.add.image(screenCenterX - 900, screenCenterY -475,"coin").setOrigin(0.5).setScale(0.15);

        this.coinobj = this.add.image(screenCenterX - 900, screenCenterY -475,"coin").setOrigin(0.5).setScale(0.15);
        // this.cointext = this.add.text(this.coinobj.x + 75, this.coinobj.y, this.params.coins.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)

        this.gameovertext = this.add.text(screenCenterX, screenCenterY - 350, "YOU WON", {
                    
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


       

        this.highscoretext = this.add.text(screenCenterX , screenCenterY - 200, "HIGHSCORE:", {
                    
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
            
        }).setOrigin(0.5)

        // this.highscoretext2 = this.add.text(screenCenterX + 500, screenCenterY - 200, this.params.highscore.toString(), {
                    
        //     fontFamily: "hillclimbracing",
        //     fontSize: "60px",
        //     color: "#FFFFFF",
        //     align: "center",
        //     stroke: "#000000",
        //     strokeThickness: 10
            
        // }).setOrigin(0.5)

        this.scoretext = this.add.text(screenCenterX , screenCenterY - 100, "SCORE:", {
                    
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
            
            this.scene.start("Menu")
            
            
            
            
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