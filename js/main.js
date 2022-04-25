let cartList = document.querySelector(".tbody");
let addedModal = document.querySelector("#addedModal");
let formadd = document.querySelector(".formadd");
let idName = document.querySelector(".idName");
let idEmail = document.querySelector(".idEmail");
let idMobile = document.querySelector(".idMobile");
let NumberErr = document.querySelector('#numerr')
let idSelect = document.querySelector(".idSelect");

let formEdit = document.querySelector(".formEdit");
let idNameEdit = document.querySelector(".idNameEdit");
let idEmailEdit = document.querySelector(".idEmailEdit");
let idMobileEdit = document.querySelector(".idMobileEdit");
let idSelectEdit = document.querySelector(".idSelectEdit");

let newArr = [];

formadd.addEventListener("submit", (e) => {
  e.preventDefault();

  let addName = idName.value;
  let addEmail = idEmail.value;
  let addPhone = idMobile.value;
  let addDepartment = idSelect.value;

  newArr.push({
    id: newArr.length,
    name: addName,
    email: addEmail,
    phone: addPhone,
    department: addDepartment
  });

  showUser(newArr);


  idName.value = "";
  idEmail.value = "";
  idMobile.value = "";
  idSelect.value = "";

  idName.style.border = "1px solid black"
  idEmail.style.border = "1px solid black"
  idMobile.style.border = "1px solid black"

  document.querySelectorAll(".line").forEach((item) => {
    item.style.border = "1px solid black"
  });
  document.querySelector('.add__err').style.display = "none"
  document.querySelector('.add__err2').style.display = "none"
});

function showUser(newArr) {
  cartList.innerHTML = "";
  newArr.forEach((item) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
     <tr>
          <td class="nameTr">${item.name}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
          <td>${item.department}</td>
          <td>
          <i type="button" onclick="editCard(${item.id})" class='bx bx-edit-alt iconsa me-2' data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-primary plusAdd"></i>
          <i onclick="deleteItem(${item.id})" class='bx bx-x iconsa' ></i>
          </td>
     </tr>
    `
    cartList.appendChild(tr);
  });
}


function editCard(elId) {
  newArr.forEach((item, index) => {
    if (index == elId) {
      idNameEdit.value = item.name;
      idEmailEdit.value = item.email;
      idMobileEdit.value = item.phone;
      idSelectEdit.value = item.department;

      editItem(index);
    }
  });
}

function editItem(elId) {
  let count = 1;
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    if (count == 1) {
      newArr[elId].name = idNameEdit.value;
      newArr[elId].email = idEmailEdit.value;
      newArr[elId].phone = idMobileEdit.value;
      newArr[elId].department = idSelectEdit.value;

      showUser(newArr);

      count++;
    }
  });
}


function deleteItem(elId) {
  if (confirm("Are you sure?")) {
    newArr = newArr.filter((item) => {
      if (elId != item.id) {
        return item;
      }
    })
    showUser(newArr);
  }
}

let searchUser = document.querySelector(".searchUser");

searchUser.addEventListener("keyup", () => {
  let elText = searchUser.value.toLowerCase();
  let nameTr = document.querySelectorAll(".nameTr");
  nameTr.forEach((item) => {
    let elCompare = item.firstChild.textContent;
    if (!elCompare.toLowerCase().includes(elText)) {
      item.parentNode.style.display = "none";
    } else {
      item.parentNode.style.display = "";
    }
  })
});


idMobile.addEventListener("keyup", () => {
  let text = document.querySelector(".add__err");
  try {
    let elName = idMobile.value;
    if (!Number(elName) || elName.length < 12) {
      idMobile.style.outline = "none";
      idMobile.style.border = "2px solid red";
      text.style.color = "red";
      throw "Enter a valid mobile";
    } else {
      idMobile.style.outline = "none";
      idMobile.style.border = "2px solid green";
      text.style.color = "green";
      throw "Success";
    }
  } catch (e) {
    text.innerText = e;
  }
});


idEmail.addEventListener("keyup", () => {
  let text = document.querySelector(".add__err2");
  try {
    let elName = idEmail.value;
    if (!/^\S+@\S+\.\S+$/.test(idEmail.value)) {
      idEmail.style.outline = "none";
      idEmail.style.border = "2px solid red";
      text.style.color = "red";
      throw "Enter a valid email";
    } else {
      idEmail.style.outline = "none";
      idEmail.style.border = "2px solid green";
      text.style.color = "green";
      throw "Success";
    }
  } catch (e) {
    text.innerText = e;
  }
});


idEmail.addEventListener("keyup", () => {
  let text = document.querySelector(".add__err2");
  try {
    let elName = idEmail.value;
    if (!/^\S+@\S+\.\S+$/.test(idEmail.value)) {
      idEmail.style.outline = "none";
      idEmail.style.border = "2px solid red";
      text.style.color = "red";
      throw "Enter a valid email";
    } else {
      idEmail.style.outline = "none";
      idEmail.style.border = "2px solid green";
      text.style.color = "green";
      throw "Success";
    }
  } catch (e) {
    text.innerText = e;
  }
});





