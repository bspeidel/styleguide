function toggleSection(section) {
  const x = document.getElementById(section);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function initDialog(element) {
  'use strict';
  var dialogButton = document.querySelector('.' + element + '-button');
  var dialog = document.querySelector('#' + element + '');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  dialogButton.addEventListener('click', function() {
     dialog.showModal();
  });
  dialog.querySelector('button:not([disabled])')
  .addEventListener('click', function() {
    dialog.close();
  });
}