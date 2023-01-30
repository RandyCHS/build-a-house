player.onChat("build_house", function (length) {
    builder.teleportTo(positions.groundPosition(pos(0, 0, 0)))
    // Builder will build a platform that is a length x length square
    for (let index = 0; index < length; index++) {
        for (let index = 0; index < length; index++) {
            builder.place(COBBLESTONE)
            builder.move(FORWARD, 1)
        }
        builder.move(BACK, length)
        builder.move(LEFT, 1)
    }
})
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
