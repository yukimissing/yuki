const petsButton = document.querySelector("#pets-button");
const petsButtonClose = document.querySelector("#pets-button-close");
const sectionContent = document.querySelector("#pets-section-content");
const gamesButton = document.querySelector("#games-button");
const gamesButtonClose = document.querySelector("#games-button-close");
const gamesSectionContent = document.querySelector("#games-section-content");
const profileEditClose = document.querySelector("#profile-edit-close");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");

petsButton.addEventListener("click", () => {
  sectionContent.classList.toggle("section__list-opened");
});

petsButtonClose.addEventListener("click", () => {
  sectionContent.classList.toggle("section__list-opened");
});

gamesButton.addEventListener("click", () => {
  gamesSectionContent.classList.toggle("section__list-opened");
});

gamesButtonClose.addEventListener("click", () => {
  gamesSectionContent.classList.toggle("section__list-opened");
});

profileEditClose.addEventListener("click", () => {
  profileEditModal.classList.toggle("modal_opened");
});

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.toggle("modal_opened");
});
