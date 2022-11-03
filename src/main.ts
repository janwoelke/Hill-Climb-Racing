import Startscreen from "./scenes/Startscreen.js"
import Runninggame from "./scenes/Runninggame.js"
import Menu from "./scenes/Menu.js"
import Level1 from "./scenes/Level1.js"
import Level2 from "./scenes/Level2.js"
import Level3 from "./scenes/Level3.js"
import Gameover from "./scenes/Gameover.js"

const config: Phaser.Types.Core.GameConfig = {
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
				debug: false,
				gravity: {
					y: 0
				}
		}
	},
	scene: [Startscreen, Menu, Runninggame, Level1, Level2, Level3,  Gameover]
}

export default new Phaser.Game(config)
