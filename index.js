let tbody = document.getElementById("tableBody");
let students = JSON.parse(localStorage.getItem("students")) || [];
for (let student of students) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${student.name}</td>
                          <td>${student.rollno}</td>  
                          <td>${student.branch}</td>    
                          <td>${student.cgpa}</td>   
                          <td><p onclick="editStudent('${student.rollno}')">Edit</p>
                           <p onclick="deleteStudent('${student.rollno}')">Delete</p></td>         
                            `;
    tbody.appendChild(newRow);
}
function deleteStudent(rollno) {
    let students = JSON.parse(localStorage.getItem("students"));
    //students = students.filter(s => s.rollno !== rollno);
    let idx=-1;
    for(i in students)
    {
        if(students[i].rollno===rollno)
        {
            idx=i;
            break;
        }
    }
    students.splice(idx,1);
    localStorage.setItem("students", JSON.stringify(students));
    location.reload();
}
function editStudent(rn) {
    localStorage.setItem("editRollNo", rn);
    window.location.href="editstudent.html";
}