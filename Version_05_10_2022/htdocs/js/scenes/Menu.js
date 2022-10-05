export default class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }
    preload() {
        this.load.image("map", "/htdocs/assets/images/map.png");
        this.load.image("playbutton", "/htdocs/assets/images/playbutton.png");
        this.load.image("shop", "/htdocs/assets/images/shop.png");
        this.load.image("wrench", "/htdocs/assets/images/wrench.png");
        this.load.image("vehicle", "/htdocs/assets/images/vehicle.png");
        this.load.image("mapscreenshot", "/htdocs/assets/images/mapscreenshot.png");
        this.load.image("coin", "/htdocs/assets/images/coin.png");
    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.coinobj = this.add.image(screenCenterX - 900, screenCenterY - 475, "coin").setOrigin(0.5).setScale(0.15);
        this.cointext = this.add.text(this.coinobj.x + 75, this.coinobj.y, "0", {
            fontFamily: "hillclimbracing",
            fontSize: "60px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.middlerect = this.add.rectangle(screenCenterX, screenCenterY - 200, 600, 350, 0xadd8e6).setStrokeStyle(7, 0x000000);
        this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle");
        this.middletext = this.add.text(screenCenterX, screenCenterY - 400, "Muscle Car", {
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.vehiclerect = this.add.rectangle(screenCenterX, screenCenterY + 175, 275, 150, 0x252850).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            this.vehiclerect.y = screenCenterY + 175;
            this.vehicletext.y = screenCenterY + 175;
            this.shoprect.y = screenCenterY + 200;
            this.shoptext.y = screenCenterY + 200;
            this.tuningrect.y = screenCenterY + 200;
            this.tuningtext.y = screenCenterY + 200;
            this.maprect.y = screenCenterY + 200;
            this.maptext.y = screenCenterY + 200;
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
            this.middleobj = this.add.image(screenCenterX, this.middlerect.y + 25, "vehicle");
            this.middlerect.setVisible(true);
            this.middletext.setText("Muscle Car").setVisible(true);
        });
        this.vehicletext = this.add.text(screenCenterX, screenCenterY + 175, "Vehicles", {
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.vehicleimg = this.add.image(screenCenterX, screenCenterY + 105, "vehicle").setScale(0.35).setRotation(-0.25);
        this.maprect = this.add.rectangle(screenCenterX - 280, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            this.vehiclerect.y = screenCenterY + 200;
            this.vehicletext.y = screenCenterY + 200;
            this.shoprect.y = screenCenterY + 200;
            this.shoptext.y = screenCenterY + 200;
            this.tuningrect.y = screenCenterY + 200;
            this.tuningtext.y = screenCenterY + 200;
            this.maprect.y = screenCenterY + 175;
            this.maptext.y = screenCenterY + 175;
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
            this.middleobj = this.add.image(this.middlerect.x, screenCenterY - 200, "mapscreenshot").setScale(0.55).setOrigin(0.5);
            this.middlerect.setVisible(true);
            this.middletext.setText("Dirt").setVisible(true);
        });
        this.maptext = this.add.text(screenCenterX - 280, screenCenterY + 200, "Maps", {
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.mapimg = this.add.image(screenCenterX - 280, screenCenterY + 115, "map").setScale(0.15).setRotation(0);
        this.tuningrect = this.add.rectangle(screenCenterX + 280, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            this.vehiclerect.y = screenCenterY + 200;
            this.vehicletext.y = screenCenterY + 200;
            this.shoprect.y = screenCenterY + 200;
            this.shoptext.y = screenCenterY + 200;
            this.tuningrect.y = screenCenterY + 175;
            this.tuningtext.y = screenCenterY + 175;
            this.maprect.y = screenCenterY + 200;
            this.maptext.y = screenCenterY + 200;
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
            this.middlerect.setVisible(false);
            this.middletext.setVisible(false);
        });
        this.tuningtext = this.add.text(screenCenterX + 280, screenCenterY + 200, "Tuning", {
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.tuningimg = this.add.image(screenCenterX + 280, screenCenterY + 115, "wrench").setScale(0.25).setRotation(-0.25);
        this.shoprect = this.add.rectangle(screenCenterX - 560, screenCenterY + 200, 275, 150, 0x565656).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            this.vehiclerect.y = screenCenterY + 200;
            this.vehicletext.y = screenCenterY + 200;
            this.shoprect.y = screenCenterY + 175;
            this.shoptext.y = screenCenterY + 175;
            this.tuningrect.y = screenCenterY + 200;
            this.tuningtext.y = screenCenterY + 200;
            this.maprect.y = screenCenterY + 200;
            this.maptext.y = screenCenterY + 200;
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
            this.middlerect.setVisible(false);
            this.middletext.setVisible(false);
        });
        this.shoptext = this.add.text(screenCenterX - 560, screenCenterY + 200, "Shop", {
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.shopimg = this.add.image(screenCenterX - 560, screenCenterY + 105, "shop").setScale(0.25).setRotation(0);
        this.startrect = this.add.rectangle(screenCenterX + 560, screenCenterY + 200, 275, 150, 0x49B675).setStrokeStyle(5, 0x000000, 1).setInteractive().on("pointerdown", () => {
            this.scene.start("Runninggame");
        });
        this.starttext = this.add.text(screenCenterX + 560, screenCenterY + 200, "Start", {
            fontFamily: "hillclimbracing",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        }).setOrigin(0.5);
        this.startimg = this.add.image(screenCenterX + 560, screenCenterY + 115, "playbutton").setScale(0.25);
        this.Fullscreenevent = this.input.keyboard.addKey("F");
        this.Fullscreenevent.on("down", function () {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this);
    }
    update() {
    }
}
//# sourceMappingURL=Menu.js.map