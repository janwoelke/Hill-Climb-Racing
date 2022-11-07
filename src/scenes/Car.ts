import { param } from "jquery";

export class Car {

    chassis: Phaser.Physics.Arcade.Sprite;
    wheels: Phaser.GameObjects.Sprite[] = [];
    character: Phaser.GameObjects.Sprite;
    // character: Phaser.GameObjects.Sprite[] = [];

    matterChassis: Matter.Body;
    matterWheels: Matter.Body[] = [];
    matterSprings: Matter.Body[] = [];
    matterCharacter: Matter.Body; 
    matterEngine: Matter.Body;
    // matterCharacter: Matter.Body[] = []; 

    colorstring:string;
    wheeloffset1:number
    wheeloffset2:number
    characterplay;
    rimplay;
    
    friction:number
    wheelYOffset:number
    

    matterCar: Matter.Composite;
    
    params: Params;

    init(params: Params){
        this.params = params;
       
        
    }
    
    

    
    
    
    constructor(private scene: Phaser.Scene, private engine: Matter.Engine, private world: Matter.World, params: Params) {

        
        switch(params.vehicle) {
            case "MUSCLE CAR": this.colorstring = "chassis"; break;
            case "GOLF MK II": this.colorstring = "golf_red"; break;
            
        }
        if(params.carcolor == 0 && params.carcolor2 < 2) {
            params.carcolor2 = 1;
        } else if(params.carcolor2 == 0 && params.carcolor < 2) {
            params.carcolor = 1;
        }
        switch(params.carcolor) {
            case 0: break;
            case 1: this.colorstring = "chassis"; break;
            case 2: this.colorstring = "chassis_blue"; break;
            case 3: this.colorstring = "chassis_green"; break;
            case 4: this.colorstring = "chassis_yellow"; break;
            case 5: this.colorstring = "chassis_grey"; break;
        }
        
        switch(params.carcolor2) {
            case 0: break;
            case 1: this.colorstring = "golf_red"; break;
            case 2: this.colorstring = "golf_blue"; break;
            case 3: this.colorstring = "golf_green"; break;
            case 4: this.colorstring = "golf_yellow"; break;
            case 5: this.colorstring = "golf_grey"; break;
        }


            if(params.vehicle == "MUSCLE CAR") {
             this.wheeloffset1 = -340;
             this.wheeloffset2 = 317;
            } else if (params.vehicle == "GOLF MK II") {
             this.wheeloffset1 = -450;
             this.wheeloffset2 = 400;
            }
             
            switch(params.rim) {
                case "STANDARD": this.rimplay = "standard"; break;
                case "SPORT": this.rimplay  = "sport"; break;
                case "BBS": this.rimplay  = "bbs"; break;
            }

        
       switch(params.character) {
        case "STEVE": this.characterplay = "body"; break;
        case "HOBBES": this.characterplay = "hobbes"; break;
        case "CALVIN": this.characterplay = "calvin"; break;
   
    }
    
    let body_scale = 0.5;
    switch(params.character) {
        case "STEVE": body_scale = 0.5; break;
        case "HOBBES": body_scale = 0.3; break;
        case "CALVIN": body_scale = 0.3; break;
   
    }
    
        

        if(params.wheellevel == 1 && params.wheellevel2 == 0 && params.wheellevel3 == 0){
            this.friction = 0.2
            console.log(this.friction)
            params.friction = this.friction
        }else if(params.wheellevel2 == 1 && params.wheellevel == 0 && params.wheellevel3 == 0){
            this.friction = 0.6
            console.log(this.friction)
            params.friction = this.friction
        }else if(params.wheellevel3 == 1 && params.wheellevel2 == 0 && params.wheellevel == 0){
            this.friction = 1
            console.log(this.friction)
            params.friction = this.friction
        }

        if(params.accelerationlevel == 1 && params.accelerationlevel2 == 0 && params.accelerationlevel3 == 0){
            this.wheelYOffset = 135
            params.accelerationoffset = this.wheelYOffset
            
        }else if(params.accelerationlevel2 == 1 && params.accelerationlevel == 0 && params.accelerationlevel3 == 0){
            this.wheelYOffset = 145
            params.accelerationoffset = this.wheelYOffset

        }else if(params.accelerationlevel3 == 1 && params.accelerationlevel2 == 0 && params.accelerationlevel == 0){
            this.wheelYOffset = 155
            params.accelerationoffset = this.wheelYOffset
         
        }
        
        
        let factor = 0.2;
        this.character = scene.physics.add.sprite(300,300, this.characterplay);
        this.character.setScale(body_scale);
        this.wheels.push(scene.add.sprite(290, 310, this.rimplay));
        this.wheels.push(scene.add.sprite(310, 310, this.rimplay));
        
        this.chassis = scene.physics.add.sprite(300, 300, this.colorstring);
       
        this.chassis.setScale(factor);
        this.wheels.forEach(wheel => wheel.setScale(factor));
        
        
        let group = Matter.Body.nextGroup(true)
        //wheelYOffset normal: 135 , height: 425
        let xx = 300;
        let yy = 300;
        let width = 1200 * factor;
        let height = 425*factor;
        
        //position of the Wheels
        let wheelAOffset = this.wheeloffset1*factor;
        let wheelBOffset = this.wheeloffset2*factor;
        
       
       
        //position of the Character
        let characterOffset = 20;
        let characterOffsetX = -100*factor;
        let characterOffsetY = -130*factor;




        let wheelSize = 280*0.5*factor; // 28.07.2022: Faktor 0.5 eingefügt, da 280px der Durchmesser der Graphik ist, wheelSize aber der Radius des Matter-Kreises
      
        console.log(params.friction)


        let body: Matter.Body;

        this.matterCar = Matter.Composite.create({ label: 'Car' }),
            // x, y: center of rectangle
            body = Matter.Bodies.rectangle(xx, yy , width, height, {
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height*0.5
                },
                density: 0.0002
            });

        

        let wheelA = Matter.Bodies.circle(xx + wheelAOffset, yy + params.accelerationoffset * factor, wheelSize, {
            collisionFilter: {
                group: group
            },
            friction: params.friction, 
            restitution: 0.1       });

        let wheelB = Matter.Bodies.circle(xx + wheelBOffset, yy +params.accelerationoffset * factor, wheelSize, {
            collisionFilter: {
                group: group
            },
            friction: params.friction,
            restitution: 0.1
        });
        // let character_head  = Matter.Bodies.circle(xx - 20, yy - 100, bodySize, {
        //     collisionFilter: {
        //         group: group
        //     },
            
        // });
        let character_body  = Matter.Bodies.rectangle(xx - 40 , yy - 50, 104*body_scale, 180*body_scale, {
            collisionFilter: {
                group: group
            },
           
        });
        
        let carEngine = Matter.Bodies.rectangle(xx + 40, yy, 20, 20, {
            collisionFilter: {
                group: group
            },
           
        });
        // Matter.Body.setMass(this.matterEngine, 10);
        
        
        
        
        
        //Masse des Autos normal: 1
        this.matterWheels.push(wheelA, wheelB);
        this.matterChassis = body;
        // this.matterCharacter.push(
            //     // character_head, 
            //     character_body);
            this.matterCharacter = character_body;
            // this.matterEngine = carEngine;
            
            Matter.Body.setMass(this.matterChassis,10);
            Matter.Body.setMass(this.matterCharacter,0.1);
            Matter.Body.setMass(this.matterWheels[0],20);
            Matter.Body.setMass(this.matterWheels[1],20);

        
        let axelOffset = 20;
        let constraint_legth = 20;
        let constraint_stiffness = 0.6;

        let axelA1 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset - axelOffset, y: params.accelerationoffset * factor},
            bodyA: wheelA,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });

        let axelA2 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset + axelOffset, y: params.accelerationoffset* factor },
            bodyA: wheelA,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });

        let axelB1 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset - axelOffset, y: params.accelerationoffset* factor },
            bodyA: wheelB,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });
        
        let axelB2 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset + axelOffset, y: params.accelerationoffset * factor},
            bodyA: wheelB,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });

        // let neck = Matter.Constraint.create({
        //     bodyB: character_head,
        //     bodyA: character_body,
        //     // pointB: {x: xx, y: yy - 50},
        //     // pointA:{ x: xx, y: yy},
        //     stiffness: 0.5,
        //     length: 1
        // });

        let seat1 = Matter.Constraint.create({
            bodyB: body,
            bodyA: character_body,
            pointB: { x: characterOffsetX - characterOffset, y: characterOffsetY },
            stiffness: 0,
            length: 5

        })

        let seat2 = Matter.Constraint.create({
            bodyB: body,
            bodyA: character_body,
            pointB: { x: characterOffsetX + characterOffset, y: characterOffsetY },
            
            stiffness: 0,
            length: 5

        })

        // let seat3 = Matter.Constraint.create({
        //     bodyB: body,
        //     bodyA: character_body,
        //     pointA: {x: characterOffsetX + characterOffset, y: characterOffsetY },

        //     stiffness: 1,
        //     length: 0.1
        // }) 

        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, body);
        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, wheelA);
        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, wheelB);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, seat1);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, seat2);
        // //@ts-ignore
        // Matter.Composite.addConstraint(this.matterCar, seat3);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelA1);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelA2);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelB1);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelB2); 
        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, character_body);
        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, carEngine);

    }

    

    adjustPhaserObjectsToMatter(){
        let chassisPosition = this.matterChassis.position;
        this.chassis.setPosition(chassisPosition.x, chassisPosition.y);
        let chassisAngle = this.matterChassis.angle;
        this.chassis.setAngle(chassisAngle/Math.PI*180);

        for(let i = 0; i < this.wheels.length; i++){
            let phaserWheel = this.wheels[i];
            let matterWheel = this.matterWheels[i];

            let pos = matterWheel.position; 
            phaserWheel.setPosition(pos.x, pos.y);
            phaserWheel.setAngle(matterWheel.angle/Math.PI*180);
        }

        
            let phaserCharacter = this.character;
            let matterCharacter = this.matterCharacter;

            let pos_character = matterCharacter.position;
            phaserCharacter.setPosition(pos_character.x - 20, pos_character.y + 10);
            let characterAngle = this.matterChassis.angle;
            this.character.setAngle(characterAngle/Math.PI*180);

        
    }

    update() {
       
    
      
    

    }
}