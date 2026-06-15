let tbody = document.getElementById("tableBody");
//let students = JSON.parse(localStorage.getItem("students")) || [];
async function getStudents() {
    let response = await fetch("http://localhost:3000/students");
    let students = await response.json();
    for (let student of students) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${student.name}</td>
                          <td>${student.rollno}</td>  
                          <td>${student.branch}</td>    
                          <td>${student.cgpa}</td>   
                          <td><p onclick="editStudent('${student.rollno}')" rollno="${student.rollno}">Edit</p>
                           <p onclick="deleteStudent('${student.rollno}')" rollno="${student.rollno}">Delete</p></td>         
                            `;
        tbody.appendChild(newRow);
    }
}
getStudents()

async function deleteStudent(rollno) {
    //let students = JSON.parse(localStorage.getItem("students"));
    //students = students.filter(s => s.rollno !== rollno);
    let response = await fetch("http://localhost:3000/students");
    let students = await response.json();
    let idx = -1;
    for (i in students) {
        console.log(1);
        if (students[i].rollno === rollno) {
            idx = students[i].id;
            break;
        }
    }
    //students.splice(idx, 1);
    //localStorage.setItem("students", JSON.stringify(students));
    let res=await fetch(`http://localhost:3000/students/${idx}`,{
        method:"DELETE"
    })
    console.log(await res.json())
    location.reload();
}
function editStudent(rn) {
    //localStorage.setItem("editRollNo", rn);
    const url="editstudent.html";
    const params=new URLSearchParams({
        "rollno":rn
    })

    window.location.href = `editstudent.html?${params.toString()}`;
}