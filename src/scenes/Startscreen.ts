export default class Startscreen extends Phaser.Scene {

    Bigtext: Phaser.GameObjects.Text;
    Bigtext2: Phaser.GameObjects.Text;
    Starttext: Phaser.GameObjects.Text;
    Enterevent;
    Fullscreenevent;

    params: Params;
    
    constructor() {

    super("startsceen") 
    
    this.params = {
        coins: 0,
        fuel: 0,
        highscore: 0,
        score: 0,
        carcolor: 1
        
        

    }

    }



    preload() {

        this.load.image("background", "/htdocs/assets/images/background.png")

     
        
    }



    create() {

        
                

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.image(screenCenterX, screenCenterY, "background").setScrollFactor(0).setOrigin(0.5).setScale(1.5)


        this.Bigtext = this.add.text(screenCenterX, 200, "HILL CLIMB", {

            fontFamily: "hillclimbracing",
            fontSize: "150px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,

            


        })
        .setOrigin(0.5).setScrollFactor(0).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setRotation(-0.10);
        

        
        this.Bigtext2 = this.add.text(screenCenterX, 350, "RACING", {

            fontFamily: "hillclimbracing",
            fontSize: "150px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10,
            


        })
        .setOrigin(0.5).setScrollFactor(0).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setRotation(-0.10);;
        

        

        
        this.Starttext = this.add.text(screenCenterX, 875, "press enter to start", {


            fontSize: "70px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 5
            


        })
        .setOrigin(0.5).setScrollFactor(0)

     
        

        this.add.tween({

            targets: this.Starttext,
            alpha: 0.1,
            yoyo: true,
            repeat: -1,
            duration: 1250

        })


        this.Enterevent = this.input.keyboard.addKey("enter");

        this.Enterevent.on("down", function() {

                let params: Params = {
                    coins: 0,
                    fuel: 0,
                    highscore: 0,
                    score: 0,
                    carcolor: this.params.carcolor
                    
                    
                }
                this.scene.start("Menu", params);
            
           

        }, this);

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