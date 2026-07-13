// SPDX-License-Identifier: GPL-3.0-or-later

// Each artist section exposes an "open" trigger, a <dialog> and a "close"
// button whose element IDs share a prefix, e.g. "beatles__open",
// "beatles__dialog" and "beatles__close". Wire them up generically so adding
// another artist needs no extra JavaScript.
document.querySelectorAll(".link__more-a").forEach((openButton) => {
    const prefix = openButton.id.replace(/__open$/, "");
    const dialog = document.getElementById(`${prefix}__dialog`);
    const closeButton = document.getElementById(`${prefix}__close`);

    openButton.addEventListener("click", () => dialog.showModal());
    closeButton.addEventListener("click", () => dialog.close());
});
