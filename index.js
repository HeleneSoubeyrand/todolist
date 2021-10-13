
var list = document.getElementById("list")
var tasks = []

// ----------Fonction nouvelle tâche----------------

function onTaskSubmit() {
    var input = document.getElementById("name").value
    var task = {
        value: input,
        status: "To do",
    }
    tasks.push(task)
    displayList()
}       

function editStatus(index) {
    tasks[index].status = "doing"
    displayList()
  }
  
  
  function displayList() {
    list.innerHTML = ``
  
    tasks.forEach(function(task, index) {
        list.innerHTML = list.innerHTML + `
      
    <div class="line">           
            
        <div class="statusSticker" id="doingSticker">
            <img src="img/logo_Check.svg" alt="">
            <div class="statusLabel ${task.status}Color">
                <p>${task.status}</p>  
            </div>
        </div>
      
      
        <div class="list">   
            <p>${task.value} </p>
        </div>                       
      
        <div class="modifyMenu">
        <div><a id="edit" href="#">Modifier</a></div>
            <ul id="fleche">
                <li onclick="editStatus('Todo')">To do</li>
                <li onclick="editStatus('Doing')">Doing</li>
                <li onclick="editStatus('Done')">Done</li>
            </ul>
        </div>
      
        <div>
            <button onClick="deleteButton()">
            <p>Delete</p>
            </button>
        </div>

  </div>
  `
})
}


// -----------Fonction Remove -------------//

function deleteButton() {
    tasks.splice([list.innerHTML], 1)
    displayList()
  }






  

