interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "San Francsico"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableRow = table.insertRow();
const header1 = tableRow.insertCell(0);
const header2 = tableRow.insertCell(1);
const header3 = tableRow.insertCell(2);
const header4 = tableRow.insertCell(3);
header1.innerHTML = "<b>First Name</b>";
header2.innerHTML = "<b>Last Name</b>";
header3.innerHTML = "<b>Age</b>";
header4.innerHTML = "<b>Location</b>";

studentsList.forEach((student) => {
    const row = table.insertRow();

    const cell1 = row.insertCell(0); 
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2); 
    const cell4 = row.insertCell(3);  
    
    cell1.textContent = student.firstName;
    cell2.textContent = student.lastName;
    cell3.textContent = `${student.age}`;
    cell4.textContent = student.location;  
  });
  
  document.body.appendChild(table);