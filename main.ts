player.onChat("house", function (length) {
    agent.teleport(positions.groundPosition(pos(0, 0, 0)), NORTH)
    agent.move(UP, 1)
    for (let index = 0; index < length; index++) {
        agent.setItem(LOG_SPRUCE, 1, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
