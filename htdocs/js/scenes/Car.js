export class Car {
    constructor(scene, engine, world) {
        this.scene = scene;
        this.engine = engine;
        this.world = world;
        this.wheels = [];
        this.matterWheels = [];
        this.matterSprings = [];
        let factor = 0.2;
        this.character = scene.physics.add.sprite(300, 300, "body");
        let body_scale = 0.5;
        this.character.setScale(body_scale);
        this.wheels.push(scene.add.sprite(290, 310, "wheel"));
        this.wheels.push(scene.add.sprite(310, 310, "wheel"));
        this.chassis = scene.physics.add.sprite(300, 300, "chassis");
        this.chassis.setScale(factor);
        this.wheels.forEach(wheel => wheel.setScale(factor));
        let group = Matter.Body.nextGroup(true);
        //wheelYOffset normal: 135 , height: 425
        let xx = 300;
        let yy = 300;
        let width = 1200 * factor;
        let height = 425 * factor;
        //position of the Wheels
        let wheelAOffset = -360 * factor;
        let wheelBOffset = 317 * factor;
        let wheelYOffset = 135 * factor;
        //position of the Character
        let characterOffset = 20;
        let characterOffsetX = -100 * factor;
        let characterOffsetY = -130 * factor;
        let wheelSize = 280 * 0.5 * factor; // 28.07.2022: Faktor 0.5 eingefügt, da 280px der Durchmesser der Graphik ist, wheelSize aber der Radius des Matter-Kreises
        let body;
        this.matterCar = Matter.Composite.create({ label: 'Car' }),
            // x, y: center of rectangle
            body = Matter.Bodies.rectangle(xx, yy, width, height, {
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
        let friction = 0.5;
        let wheelA = Matter.Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
            collisionFilter: {
                group: group
            },
            friction: friction,
            restitution: 0.1
        });
        let wheelB = Matter.Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
            collisionFilter: {
                group: group
            },
            friction: friction,
            restitution: 0.1
        });
        // let character_head  = Matter.Bodies.circle(xx - 20, yy - 100, bodySize, {
        //     collisionFilter: {
        //         group: group
        //     },
        // });
        let character_body = Matter.Bodies.rectangle(xx - 40, yy - 50, 104 * body_scale, 180 * body_scale, {
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
        Matter.Body.setMass(this.matterChassis, 10);
        Matter.Body.setMass(this.matterCharacter, 0.1);
        Matter.Body.setMass(this.matterWheels[0], 20);
        Matter.Body.setMass(this.matterWheels[1], 20);
        let axelOffset = 20;
        let constraint_legth = 20;
        let constraint_stiffness = 0.6;
        let axelA1 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset - axelOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });
        let axelA2 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset + axelOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });
        let axelB1 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset - axelOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: constraint_stiffness,
            length: constraint_legth
        });
        let axelB2 = Matter.Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset + axelOffset, y: wheelYOffset },
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
        });
        let seat2 = Matter.Constraint.create({
            bodyB: body,
            bodyA: character_body,
            pointB: { x: characterOffsetX + characterOffset, y: characterOffsetY },
            stiffness: 0,
            length: 5
        });
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
    init(params) {
        this.params = params;
        this.car_color = this.params.carcolor;
    }
    adjustPhaserObjectsToMatter() {
        let chassisPosition = this.matterChassis.position;
        this.chassis.setPosition(chassisPosition.x, chassisPosition.y);
        let chassisAngle = this.matterChassis.angle;
        this.chassis.setAngle(chassisAngle / Math.PI * 180);
        for (let i = 0; i < this.wheels.length; i++) {
            let phaserWheel = this.wheels[i];
            let matterWheel = this.matterWheels[i];
            let pos = matterWheel.position;
            phaserWheel.setPosition(pos.x, pos.y);
            phaserWheel.setAngle(matterWheel.angle / Math.PI * 180);
        }
        let phaserCharacter = this.character;
        let matterCharacter = this.matterCharacter;
        let pos_character = matterCharacter.position;
        phaserCharacter.setPosition(pos_character.x - 20, pos_character.y + 10);
        let characterAngle = this.matterCharacter.angle;
        this.character.setAngle(characterAngle / Math.PI * 180);
    }
    update() {
    }
}
//# sourceMappingURL=Car.js.map