class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = '';

  for (let i = 0; i < familyMembers.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML =`
    <td>${familyMembers[i].name}</td>
    <td>${familyMembers[i].age}</td>
    <td>${familyMembers[i].gender}</td>
    <td>
     <button id="increment" onclick="addAge(${i})">Add age</button>
     <button onclick="changeName(${i})">Change name</button>
    </td>
    `;
    familyList.appendChild(row);
  }
}

function addAge(x) {
    const ageCell = document.getElementById("familyMembers").rows[x + 1].cells[1];
    const age = parseInt(ageCell.innerHTML);
    ageCell.innerHTML = age + 1;
  }

function changeName(x) {
  const nameCell = document.getElementById("familyMembers").rows[x + 1].cells[0];
  const name = prompt(`Enter your new name: `);
  nameCell.innerHTML = name;
}