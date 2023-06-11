//HANDLE CREATE A NEW USER MODAL CONTAINER

const modalContainerCreateUser = document.querySelector(
  ".modal-container-create-user"
);

const showModalCreateUser = document.querySelector(".show-modal-create-user");
const closeModalCreateUser = document.querySelector(".close-modal-create-user");

if (showModalCreateUser) {
  showModalCreateUser.addEventListener("click", function () {
    modalContainerCreateUser.classList.remove("hidden");
  });
}

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

if (showModalEditUser) {
  showModalEditUser.addEventListener("click", function () {
    modalContainerEditUser.classList.remove("hidden");
  });
}

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

//Handle Login, Register, Logout
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");

if (btnLogin) {
  btnLogin.addEventListener("click", (e) => {
    const userName = document.getElementById("username-login").value;
    const password = document.getElementById("password-login").value;
    let caseType;

    if (!userName) {
      caseType = 0;
    } else if (!password) {
      caseType = 1;
    }
    switch (caseType) {
      case 0:
        alert("Username can't be empty!");
        e.preventDefault();
        break;
      case 1:
        alert("Password can't be empty!");
        e.preventDefault();
        break;
    }
  });
}

if (btnRegister) {
  btnRegister.addEventListener("click", (e) => {
    const userName = document.getElementById("username-register").value;
    const password = document.getElementById("password-register").value;
    let caseType;

    if (!userName) {
      caseType = 0;
    } else if (!password) {
      caseType = 1;
    }
    switch (caseType) {
      case 0:
        alert("Username can't be empty!");
        // e.preventDefault();
        break;
      case 1:
        alert("Password can't be empty!");
        // e.preventDefault();
        break;
    }
  });
}

const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");

// const btnShowRegisterForm = document.querySelector(".btn-show-register-form");
// const btnShowLoginrForm = document.querySelector(".btn-show-login-form");

// if (btnShowRegisterForm) {
//   btnShowRegisterForm.addEventListener("click", function () {
//     formRegister.classList.remove("hidden");
//     formLogin.classList.add("hidden");
//   });
// }

// if (btnShowLoginrForm) {
//   btnShowLoginrForm.addEventListener("click", function () {
//     formLogin.classList.remove("hidden");
//     formRegister.classList.add("hidden");
//   });
// }

// const btnLogout = document.querySelector(".btn-logout");
// const accessToken = req.cookies["access-token"];
// if (btnLogout) {
//   btnLogout.addEventListener("click", (e) => {
//     alert(accessToken);
//   });
// }

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
