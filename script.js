let projects = [
    {
        name: "Test Project 1",
        status: "Finished"
    },
    {
        name: "Test Project 2000",
        status: "todo"
    },
    {
        name: "Test Project 3000",
        status: "in-progress"
    }
];

displayTable();

// Add new project
function addProject(){
    let project = document.querySelector("#project");
    projects.push({
        name: project.value,
        status:"Todo"
    });
    project.value = "";
    displayTable();
}

// Update status of project
function updateStatus(index){
    let statuses = ["Todo", "In-Progress", "Finished"];
    let statusIndex = statuses.indexOf(projects[index].status);
    ++statusIndex;
    if(statusIndex > 2) statusIndex = 0;
    projects[index].status = statuses[statusIndex];
    displayTable();
}

// Delete Project
function deleteProject(index){
    projects.splice(index, 1);
    displayTable();
}

// To render the project arrays
function displayTable(){
    let table = document.querySelector("table");

    while(table.childNodes.length > 2){
        table.removeChild(table.lastChild);
    }

    let index = 0;

    projects.forEach(project => {
        let tableRow = document.createElement("tr");
        let name = document.createElement("td");
        let status = document.createElement("td");
        let deleteProject = document.createElement("td");

        name.innerText = project.name;
        status.innerText = project.status;
        status.classList.add(project.status.toLowerCase());

        deleteProject.classList.add("fa");
        deleteProject.classList.add("fa-trash");
        
        deleteProject.setAttribute("onclick", "deleteProject("+index+")")
        status.setAttribute("onclick", "updateStatus("+index+")")
        ++index;

        tableRow.appendChild(name);
        tableRow.appendChild(status);
        tableRow.appendChild(deleteProject);

        table.appendChild(tableRow);
    });
}