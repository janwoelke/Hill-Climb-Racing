
export class Car {

    chassis: Phaser.GameObjects.Sprite;
    wheels: Phaser.GameObjects.Sprite[] = [];

    matterChassis: Matter.Body;
    matterWheels: Matter.Body[] = [];
    matterSprings: Matter.Body[] = [];

    matterCar: Matter.Composite;
    
   

    constructor(private scene: Phaser.Scene, private engine: Matter.Engine, private world: Matter.World) {
        let factor = 0.2;
        this.wheels.push(scene.add.sprite(290, 310, "wheel"));
        this.wheels.push(scene.add.sprite(310, 310, "wheel"));
        this.chassis = scene.add.sprite(300, 300, "chassis");
        this.chassis.setScale(factor);
        this.wheels.forEach(wheel => wheel.setScale(factor));

        let group = Matter.Body.nextGroup(true)

        let xx = 300;
        let yy = 300;
        let width = 1200 * factor;
        let height = 425*factor;
        let wheelAOffset = -360*factor;
        let wheelBOffset = 317*factor;
        let wheelYOffset = 135*factor;
        let wheelSize = 280*0.5*factor; // 28.07.2022: Faktor 0.5 eingefügt, da 280px der Durchmesser der Graphik ist, wheelSize aber der Radius des Matter-Kreises

        


        let body: Matter.Body;

        this.matterCar = Matter.Composite.create({ label: 'Car' }),
            // x, y: center of rectangle
            body = Matter.Bodies.rectangle(xx, yy, width, height, {
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height*0.5
                },
                density: 0.0002
            });

        let wheelA = Matter.Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
            collisionFilter: {
                group: group
            },
            friction: 0.8,        });

        let wheelB = Matter.Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
            collisionFilter: {
                group: group
            },
            friction: 0.8,
            restitution: 0.2
        });

        
        //Masse des Autos normal: 1
        this.matterWheels.push(wheelA, wheelB);
        this.matterChassis = body;
        //Matter.Body.setMass(this.matterChassis,1);
        
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


        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, body);
        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, wheelA);
        //@ts-ignore
        Matter.Composite.addBody(this.matterCar, wheelB);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelA1);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelA2);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelB1);
        //@ts-ignore
        Matter.Composite.addConstraint(this.matterCar, axelB2); 
        


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

    }

    update() {
       
    
      
    

    }
}