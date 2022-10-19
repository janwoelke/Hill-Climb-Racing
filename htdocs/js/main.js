import Startscreen from "./scenes/Startscreen.js";
import Runninggame from "./scenes/Runninggame.js";
import Menu from "./scenes/Menu.js";
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    audio: {
        disableWebAudio: false
    },
    backgroundColor: "181716",
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0
            }
        }
    },
    scene: [Startscreen, Menu, Runninggame]
};
export default new Phaser.Game(config);
//# sourceMappingURL=main.js.map