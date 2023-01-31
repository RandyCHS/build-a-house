function createFoundation (foundationLength: number) {
    // Builder will build a platform that is a length x length square
    for (let index = 0; index < foundationLength; index++) {
        createLine(foundationLength)
        builder.move(BACK, foundationLength)
        builder.move(LEFT, 1)
    }
}
player.onChat("agent_house", function (length) {
    agent.teleport(positions.groundPosition(pos(0, 0, 0)), NORTH)
    agent.move(UP, 1)
    // Agent will build a platform that is a length x length square
    for (let index = 0; index < length; index++) {
        for (let index = 0; index < length; index++) {
            agent.setItem(LOG_SPRUCE, 1, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, length)
        agent.move(LEFT, 1)
    }
})
player.onChat("build_house", function (length, height) {
    builder.teleportTo(positions.groundPosition(pos(length / 2, 0, length / 2)))
    builder.setOrigin()
    createFoundation(length)
    createWalls(length, height)
})
function createLine (lineLength: number) {
    for (let index = 0; index < lineLength; index++) {
        builder.place(COBBLESTONE)
        builder.move(FORWARD, 1)
    }
}
function createWalls (wallLength: number, wallHeight: number) {
    builder.teleportToOrigin()
    for (let index = 0; index < wallHeight; index++) {
        builder.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            createLine(wallLength)
            builder.move(BACK, 1)
            builder.turn(LEFT_TURN)
        }
    }
}
