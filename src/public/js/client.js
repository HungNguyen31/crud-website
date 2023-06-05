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

//Test
// const modalContainerTest = document.querySelector(".modal-container-test");

// const showModalTestList = document.querySelectorAll(".show-modal-test");
// const closeModalTest = document.querySelector(".close-modal-test");

// for (const showModalTest of showModalTestList) {
//   showModalTest.addEventListener("click", function () {
//     modalContainerTest.classList.remove("hidden");
//   });
// }

// if (closeModalTest) {
//   closeModalTest.addEventListener("click", function () {
//     modalContainerTest.classList.add("hidden");
//   });
// }

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

const inpSearch = document.querySelector(".inp-search");
// const btnSearch = document.querySelector(".btn-search");

// if (inpSearch) {
//   btnSearch.addEventListener("click", function filterProducts(e) {
//     let searchValue = removeAccents(inpSearch.value.toUpperCase());
//     let users = document.querySelectorAll(".user");

//     for (let i = 0; i < users.length; i++) {
//       let userID = users[i].querySelector(".user-id");
//       let firstName = users[i].querySelector(".first-name");
//       let lastName = users[i].querySelector(".last-name");
//       let email = users[i].querySelector(".email");
//       let address = users[i].querySelector(".address");

//       if (
//         removeAccents(userID.innerHTML).toUpperCase().indexOf(searchValue) >
//           -1 ||
//         removeAccents(firstName.innerHTML).toUpperCase().indexOf(searchValue) >
//           -1 ||
//         removeAccents(lastName.innerHTML).toUpperCase().indexOf(searchValue) >
//           -1 ||
//         removeAccents(email.innerHTML).toUpperCase().indexOf(searchValue) >
//           -1 ||
//         removeAccents(address.innerHTML).toUpperCase().indexOf(searchValue) > -1
//       ) {
//         users[i].classList.remove("hidden");
//       } else {
//         users[i].classList.add("hidden");
//       }
//     }
//   });
//   inpSearch.addEventListener("keypress", function filterProducts(e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       btnSearch.click();
//     }
//   });
// }

if (inpSearch) {
  inpSearch.addEventListener("keypress", function filterProducts(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let searchValue = removeAccents(inpSearch.value.toUpperCase());
      let users = document.querySelectorAll(".user");

      for (let i = 0; i < users.length; i++) {
        let userID = users[i].querySelector(".user-id");
        let firstName = users[i].querySelector(".first-name");
        let lastName = users[i].querySelector(".last-name");
        let email = users[i].querySelector(".email");
        let address = users[i].querySelector(".address");

        if (
          removeAccents(userID.innerHTML).toUpperCase().indexOf(searchValue) >
            -1 ||
          removeAccents(firstName.innerHTML)
            .toUpperCase()
            .indexOf(searchValue) > -1 ||
          removeAccents(lastName.innerHTML).toUpperCase().indexOf(searchValue) >
            -1 ||
          removeAccents(email.innerHTML).toUpperCase().indexOf(searchValue) >
            -1 ||
          removeAccents(address.innerHTML).toUpperCase().indexOf(searchValue) >
            -1
        ) {
          users[i].classList.remove("hidden");
        } else {
          users[i].classList.add("hidden");
        }
      }
    }
  });
}

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
