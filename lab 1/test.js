document.querySelector('#startbtn').addEventListener('click',function(e){
    document.querySelector('#AddForm').removeAttribute('hidden')
    e.target.parentElement.removeChild(this)
})

const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]
let getAllData = ()=> JSON.parse(localStorage.getItem('tasks')) || []
let setAllData = (tasks)=> localStorage.setItem('tasks',JSON.stringify(tasks))
let addTask = (task)=>{
    tasks = getAllData()
    tasks.push(task)
    setAllData(tasks)
}
const createCustomElement = (parent, element, classes , attributes, text) => {
    const myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(classes != '') myElement.className = classes
    if(text != '') myElement.textContent = text
    if(attributes.length != 0){    
        attributes.forEach(attribute=>{
            myElement.setAttribute(attribute.attrName, attribute.attValue)
        })
    }
    return myElement
}

/* Add Task Start*/
let tasks = getAllData()
document.querySelector('#addTask').addEventListener('submit', function(e){
    //e.preventDefault()
    if(tasks.length==0) task = {id:1}
    else { task = { id: (tasks[tasks.length-1].id+1)} }
    console.log(task)
    taskHeads.forEach((h,i) => {
        if(i!=0 && h!="status") task[h] = e.target.elements[h].value
        else if(h=="status") task[h] = e.target.elements[h].checked
    })
    addTask(task)
    this.reset()
})
/* Add Task End*/

/* Show Tasks Start*/
allTasks = document.querySelector('#allTasks')
rowContainer = createCustomElement(allTasks, 'div', 'row', [], '')
tasks.forEach((task,i)=>{
    // drawTask(task)
    taskDiv = createCustomElement(rowContainer, 'div', 'col-4', [], '')
    innerDiv = createCustomElement(taskDiv, 'div', 'mt-4 alert-success p-3', [], '')
    taskHeads.forEach(h=>{
        h5 = createCustomElement(innerDiv, "h5", "", [], task[h]===''?`${h} : Empty`:`${h} : ${task[h]}`)
    })
    delBtn = createCustomElement(innerDiv, 'button', 'ml-5 btn btn-danger c', [], 'delete')
    delBtn.addEventListener('click', function(e){
        tasks = getAllData()
        tasks.splice(i,1)
    this.parentElement.parentElement.remove()      
        setAllData(tasks)
    })
    editBtn = createCustomElement(innerDiv, 'button', ' btn btn-primary c', [], 'Edit')
    editBtn.addEventListener('click', function(e){
        tasks = getAllData()
        console.log(typeof(tasks[i]))
        console.log(tasks[i])
        let temp = {}
        taskHeads.forEach(h=>{
            temp[h] = prompt(`Please Enter Task ${h}`)
        })
        tasks[i] = temp
        setAllData(tasks)
        location.reload()
    })
})
