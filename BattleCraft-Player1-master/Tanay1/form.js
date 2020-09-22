class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("Name")
        this.button=createButton("Play")
        this.greeting=createElement("h1") 
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
    this.title.html("Battle Craft")
    this.title.position(displayWidth/2-50,0)
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.button.position(displayWidth/2,displayHeight/2)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount++
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("Welcome to Death Race "+player.name)
        this.greeting.position(displayWidth/2-150,displayHeight/2)
    });
    }
}