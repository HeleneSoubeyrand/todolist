// ----------Fonction nouvelle tâche----------------

var list = document.getElementById("list")
var tasks = []

function onTaskSubmit() {
    var input = document.getElementById("name").value
    var task = {
        value: input,
        status: "To do",
    }
    tasks.push(task)

    list.innerHTML = ""
    
    tasks.forEach(function(task) {
        list.innerHTML = list.innerHTML + `
        
        <div class="line">           
            <div id="status" class="status">
        </div>
        
        <div class="list">   
            <p>${task.value} </p>
        </div>                       
        
        <div class="menuStatus">
            <ul id="menuStatus">
                <ul>
                    <li><a href="#">To do</a></li>
                    <li><a href="#">Doing</a></li>
                    <li><a href="#">Done</a></li>
                </ul>
            </ul>
            <div>
                <a href="#"><i class="arrow"></i></a> 
            </div>
        </div>
        
        <div>
            <button class="deleteButton">
                <a href="#">Delete</a>
            </button>
        </div>

    </div>
    `
    })
        
    }



