class Task {
    constructor(taks_description, document){

        this.div = document.createElement("div")
        var style = this.div.style
        style.background = "white"
        style.width = "100%"
        style.height = "3em"
        style.display = "flex"
        style.marginTop = "1em"

        this.span = document.createElement("span")
        this.div.appendChild(this.span)
        this.span.innerText = taks_description
        this.span.style.marginTop = "auto"
        this.span.style.marginBottom = "auto"
        this.span.style.marginLeft = "1em"
    }
}
var task_list = document.getElementById("task_list")
var task_input = document.getElementById("task_input")
task_input.addEventListener("keypress", function(event){
    if (event.key == 'Enter'){
        var task_description = event.target.value
        var task = new Task(task_description, document)
        task_list.appendChild(task.div)
        event.target.value = ""
    }
    
})
