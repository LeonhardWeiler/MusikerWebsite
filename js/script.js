// SPDX-License-Identifier: GPL-3.0-or-later

const beatlesOpen = document.getElementById("beatles__open");
const beatlesDialog = document.getElementById("beatles__dialog");
const beatlesClose = document.getElementById("beatles__close");

beatlesOpen.addEventListener("click", () => {
    beatlesDialog.showModal();
});

beatlesClose.addEventListener("click", () => {
    beatlesDialog.close();
});

const bobdylanOpen= document.getElementById("bobdylan__open");
const bobdylanDialog= document.getElementById("bobdylan__dialog");
const bobdylanClose = document.getElementById("bobdylan__close");

bobdylanOpen.addEventListener("click", () => {
    bobdylanDialog.showModal();
});

bobdylanClose.addEventListener("click", () => {
    bobdylanDialog.close();
});