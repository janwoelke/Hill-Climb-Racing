export default class Bridge {
    constructor(scene, x = 0, y = 0, width = 1000, numberOfPlanks = 18) {
        let woodPlanksPositions = [];
        let group = scene.matter.world.nextGroup(true);
        // creates a new wood plank
        const newWoodPlank = (x, y) => {
            return scene.matter.add.image(x, y, 'atlas', 'tile').setBody({ type: 'rectangle' }, {
                collisionFilter: { group: group },
                label: 'bridgePlank',
                chamfer: 5,
                density: 0.005,
                friction: 0.6
                //frictionAir: 0.05
            });
        };
        // calculate the positions of all wood planks
        for (let i = 0; i < numberOfPlanks; i++)
            woodPlanksPositions.push({ x: x + (i * width) / numberOfPlanks, y: y });
        // make all the wood planks
        let woodPlanks = woodPlanksPositions.map(pos => newWoodPlank(pos.x, pos.y));
        //   // attaching each plank to the next one
        //   for (let i = 0; i < woodPlanks.length - 1; i++) {
        //     scene.matter.add.constraint(woodPlanks[i], woodPlanks[i + 1], 10, 0.75, {
        //       pointA: { x: 20, y: 0 },
        //       pointB: { x: -20, y: 0 }
        //     })
        //   }
        //   // attaching the first plank to the left side
        //   scene.matter.add.worldConstraint(woodPlanks[0], 0, 1, {
        //     pointA: { x: x, y: y },
        //     pointB: { x: -30, y: 0 }
        //   })
        //   // attaching the last plank to the left side
        //   scene.matter.add.worldConstraint(woodPlanks[woodPlanks.length - 1], 0, 1, {
        //     pointA: { x: x + width, y: y },
        //     pointB: { x: 30, y: 0 }
        //   })
    }
}
//# sourceMappingURL=Bridge.js.map