export default class Startscreen extends Phaser.Scene {

    Starttext: Phaser.GameObjects.Text;
    Enterevent;
    Fullscreenevent;
    backgroundvideo;
    backgroundmusic;
    soundbutton: Phaser.GameObjects.Image;
    muted = true;
    clicksound;
    

    params: Params;
    
    constructor() {

    super("startsceen") 
    
    this.params = {
        coins: 0,
        fuel: 0,
        highscore: 0,
        score: 0,
        carcolor: "chassis"
        
        

    }

    }



    preload() {

        this.load.image("background", "/htdocs/assets/images/background.png")
        this.load.video("startscreen", "/htdocs/assets/videos/startscreen.mp4", "loadeddata", false, true)
        this.load.audio("music", ["/htdocs/assets/sounds/music.mp3", "/htdocs/assets/sounds/music.ogg"])
        this.load.audio("click", ["/htdocs/assets/sounds/click.mp3", "/htdocs/assets/sounds/click.ogg"])
        this.load.spritesheet("soundbutton", "/htdocs/assets/images/sound.png", {frameWidth: 395, frameHeight: 275});
        
    }



    create() {

        
                

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.backgroundvideo = this.add.video(screenCenterX, screenCenterY, "startscreen").play(true)

        this.clicksound = this.sound.add("click", {

            volume: 0.5,
            loop: false

        });

        this.backgroundmusic = this.sound.add("music", {

            volume: 0.5,
            loop: true

        });

        this.soundbutton = this.add.image(50, 50, "soundbutton", 1)
        .setInteractive()
        .setScrollFactor(0)
        .setScale(0.25)
        .setOrigin(0.5)

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
                this.backgroundmusic.stop()
                this.scene.start("Menu", params);
            
           

        }, this);

        this.Fullscreenevent = this.input.keyboard.addKey("F");

        this.Fullscreenevent.on("down", function() {
    
    
            if(this.scale.isFullscreen) {
                
                this.scale.stopFullscreen();
                this.backgroundvideo.setScale(1)    
                
            } else {
                
                this.scale.startFullscreen();
                this.backgroundvideo.setScale(1.1)    
    
            }
    
        }, this);


    }

   


    
    

    update() {

    }

}