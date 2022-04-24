let cartListArr = [{
  id: "1",
  name: "Muhammadsodiq",
  email: "muhammad@gamil.com",
  mobile: "+9989092705588",
  department: "development"
},
];

let cartList = document.querySelector(".tbody");
let addedModal = document.querySelector("#addedModal");
let formadd = document.querySelector(".formadd");
let idName = document.querySelector(".idName");
let idEmail = document.querySelector(".idEmail");
let idMobile = document.querySelector(".idMobile");
let idSelect = document.querySelector(".idSelect");
let newArr = [];

function showUser(cartListArr) {
  newArr = [];
  cartListArr.forEach((item) => {
    let tr = `
     <tr>
          <td class="nameTr">${item.name}</td>
          <td>${item.email}</td>
          <td>${item.mobile}</td>
          <td>${item.department}</td>
          <td>
          <i type="button" onclick="editCard(${item.id})" class='bx bx-edit-alt iconsa me-2' data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-primary plusAdd"></i>
          <i onclick="deleteIt(${item.id})" class='bx bx-x iconsa' ></i>
          </td>
     </tr>
    `
    newArr.push(tr);
  })
  cartList.innerHTML = newArr.join("")
}
showUser(cartListArr);


formadd.addEventListener("submit", (e) => {
  let count = cartListArr[cartListArr.length - 1].id;
  e.preventDefault();
  cartListArr.push({
    id: ++count,
    name: idName.value,
    email: idEmail.value,
    mobile: idMobile.value,
    department: idSelect.value,
  });
  showUser(cartListArr);
  console.log(cartListArr);
  idName.value = "";
  idEmail.value = "";
  idMobile.value = "";
  idSelect.value = "";
});

let formEdit = document.querySelector(".formEdit");
let idNameEdit = document.querySelector(".idNameEdit");
let idEmailEdit = document.querySelector(".idEmailEdit");
let idMobileEdit = document.querySelector(".idMobileEdit");
let idSelectEdit = document.querySelector(".idSelectEdit");


function editCard (elId){
  console.log(elId);
  cartListArr.forEach((item) => {
    if(elId === item.id) {
      idNameEdit.value = item.name;
      idEmailEdit.value = item.email;
      idMobileEdit.value = item.mobile;
      idSelectEdit.value = item.value;
      editItem(elId);
    }
  })
}


function editItem (elId){
  let count = 1;
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    if(count == 1){
      cartListArr[elId - 1].name = idNameEdit.value;
      cartListArr[elId - 1].email = idEmailEdit.value;
      cartListArr[elId - 1].mobile = idMobileEdit.value;
      cartListArr[elId - 1].mobile = idSelectEdit.value;
      showUser(cartListArr);
      count++;
    }
  }); 
}



function deleteIt(elId){
  if(confirm ("Are you sure?")){
    cartListArr = cartListArr.filter((item) => {
      if(elId != item.id){
        return item;
      }
    })
  
    showUser(cartListArr);
  }
}

let searchUser = document.querySelector(".searchUser");

searchUser.addEventListener("keyup", () => {
  let elText = searchUser.value.toLowerCase();
  let nameTr = document.querySelectorAll(".nameTr");
  nameTr.forEach((item) => {
    let elCompare = item.firstChild.textContent;
    if(!elCompare.toLowerCase().includes(elText)){
      item.parentNode.style.display = "none";
    } else{
      item.parentNode.style.display = "";
    }
  })
});

