const regBtn = document.querySelectorAll(".reg2");
console.log(regBtn);
const firstAlert = document.querySelector(".first_alert");
const secondAlert = document.querySelector(".second_alert");
const thirdAlert = document.querySelector(".third_alert");
const burgerOverlay = document.querySelector(".overlay_burger");
const checkbox = document.querySelector(".checkbox");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal_body");
const closeBtn = document.querySelector(".modal_close");
const sentBtn = document.querySelector(".modal_btn");
const modalName = document.getElementById("modal_name");
const modalTel = document.getElementById("modal_tel");
const modalTitle = document.querySelector(".modal_title");
const modalTitle2 = document.querySelector(".modal_title2");
const modalPharagraph = document.querySelector(".modal_pharagraph");
const instLink = document.querySelector(".inst_link");
const modalTextarea = document.getElementById("modal_textarea");
const modalOverlay = document.querySelector(".modal_overlay");
for (i = 0; i < regBtn.length; i++) {
  regBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
    modalBody.style.transform = "translate(-50%, -50%) scale(1)";
    modalName.value = "";
    modalTel.value = "";
    modalTextarea.value = "";
    firstAlert.style.display = "none";
    modalName.style.border = "1px solid transparent";
    secondAlert.style.display = "none";
    modalTel.style.border = "1px solid transparent";
    thirdAlert.style.display = "none";
    modalTextarea.style.border = "1px solid transparent";
  });
}
closeBtn.addEventListener("click", () => {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
  setTimeout(() => {
    modalBody.style.transform = "translate(-50%, -50%) scale(0.8)";
    modalTitle.style.display = "block";
    modalName.style.display = "block";
    modalTel.style.display = "block";
    modalTextarea.style.display = "block";
    sentBtn.style.display = "block";
    modalTitle2.style.display = "none";
    modalPharagraph.style.display = "none";
    instLink.style.display = "none";
    modalBody.style.height = "573px";
  }, 500);
});
modalOverlay.addEventListener("click", () => {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
  setTimeout(() => {
    modalBody.style.transform = "translate(-50%, -50%) scale(0.8)";
    modalTitle.style.display = "block";
    modalName.style.display = "block";
    modalTel.style.display = "block";
    modalTextarea.style.display = "block";
    sentBtn.style.display = "block";
    modalTitle2.style.display = "none";
    modalPharagraph.style.display = "none";
    instLink.style.display = "none";
    modalBody.style.height = "573px";
  }, 500);
});

sentBtn.addEventListener("click", () => {
  if (modalName.value == "") {
    firstAlert.style.display = "block";
    modalName.style.border = "1px solid rgb(225, 5, 5)";
  } else {
    firstAlert.style.display = "none";
    modalName.style.border = "1px solid transparent";
  }
  if (modalTel.value == "") {
    secondAlert.style.display = "block";
    modalTel.style.border = "1px solid rgb(225, 5, 5)";
  } else {
    secondAlert.style.display = "none";
    modalTel.style.border = "1px solid transparent";
  }
  if (modalTextarea.value == "") {
    thirdAlert.style.display = "block";
    modalTextarea.style.border = "1px solid rgb(225, 5, 5)";
  } else {
    thirdAlert.style.display = "none";
    modalTextarea.style.border = "1px solid transparent";
  }
  if (
    modalName.value != "" &&
    modalTel.value != "" &&
    modalTextarea.value != ""
  ) {
    setTimeout(() => {
      modalTitle.style.display = "none";
      modalName.style.display = "none";
      modalTel.style.display = "none";
      modalTextarea.style.display = "none";
      sentBtn.style.display = "none";
      modalTitle2.style.display = "block";
      modalPharagraph.style.display = "block";
      instLink.style.display = "block";
    }, 20);

    modalBody.style.height = "481px";
  }
});
burgerOverlay.addEventListener("click", () => {
  checkbox.checked = false;
});
