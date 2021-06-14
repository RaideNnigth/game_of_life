const game = new GameOfLife()
game.gameSetUp()
window.onload = () => {
    document.querySelector("#start").addEventListener("click", () => {
        game.arrayRandomize();
        game.fillArray();
        window.setInterval(() => {
            game.runGame();
        }, 500)
    })
    document.querySelector("#stop").addEventListener("click", () => {
        game.gameSetUp();
    })
}