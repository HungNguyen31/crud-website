//HANDLE CREATE A NEW USER MODAL CONTAINER

const modalContainerCreateUser = document.querySelector(
  ".modal-container-create-user"
);

const showModalCreateUser = document.querySelector(".show-modal-create-user");
const closeModalCreateUser = document.querySelector(".close-modal-create-user");

showModalCreateUser.addEventListener("click", function () {
  modalContainerCreateUser.classList.remove("hidden");
});

if (closeModalCreateUser) {
  closeModalCreateUser.addEventListener("click", function () {
    modalContainerCreateUser.classList.add("hidden");
    // e.preventDefault();
    // return false;
  });
}

// option hidden modal container when click modal outside
// const modalCreateUser = document.querySelector(".modal-create-user");

// modalContainer.addEventListener("click", function () {
//   modalContainer.classList.add("hidden");
// });

// modal.addEventListener("click", function (e) {
//   e.stopPropagation();
// });

//HANDLE EDIT USER MODAL CONTAINER

const modalContainerEditUser = document.querySelector(
  ".modal-container-edit-user"
);

const showModalEditUser = document.querySelector(".show-modal-edit-user");
const closeModalEditUser = document.querySelector(".close-modal-edit-user");

showModalEditUser.addEventListener("click", function () {
  modalContainerEditUser.classList.remove("hidden");
});

if (closeModalEditUser) {
  closeModalEditUser.addEventListener("click", function () {
    modalContainerEditUser.classList.add("hidden");
    // e.preventDefault();
    // return false;
    window.location.href = "/";
  });
}

const btnCreateUser = document.querySelector(".btn-create-user");
if (btnCreateUser) {
  btnCreateUser.addEventListener("click", (e) => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    let caseType;

    if (!firstName) {
      caseType = 0;
    } else if (!lastName) {
      caseType = 1;
    } else if (!email) {
      caseType = 2;
    }
    switch (caseType) {
      case 0:
        alert("First name can't be empty!");
        e.preventDefault();
        break;
      case 1:
        alert("Last name can't be empty!");
        e.preventDefault();
        break;
      case 2:
        alert("Email can't be empty!");
        e.preventDefault();
        break;
    }
  });
}

const btnEditUser = document.querySelector(".btn-edit-user");
if (btnEditUser) {
  btnEditUser.addEventListener("click", (e) => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    let caseType;

    if (!firstName) {
      caseType = 0;
    } else if (!lastName) {
      caseType = 1;
    } else if (!email) {
      caseType = 2;
    }
    switch (caseType) {
      case 0:
        alert("First name can't be empty!");
        e.preventDefault();
        break;
      case 1:
        alert("Last name can't be empty!");
        e.preventDefault();
        break;
      case 2:
        alert("Email can't be empty!");
        e.preventDefault();
        break;
    }
  });
}
