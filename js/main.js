let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Kirim data ke server-side script (sendEmail.php) menggunakan AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendEmail.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Tampilkan pesan sukses atau lakukan sesuatu yang sesuai kebutuhan Anda
      alert("Message sent successfully!");
    }
  };

  // Encode data formulir ke format URL
  var data = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);

  // Kirim data
  xhr.send(data);
});

// Tambahkan di bagian bawah file JavaScript Anda
var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modalTitle");
var modalMessage = document.getElementById("modalMessage");
var span = document.getElementsByClassName("close")[0];

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendEmail.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        // Berhasil
        showModal("Success", "Message sent successfully!");
      } else {
        // Gagal
        showModal("Error", "Failed to send message. Please try again later.");
      }
    }
  };

  var data = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
  xhr.send(data);
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showModal(title, message) {
  modalTitle.innerHTML = title;
  modalMessage.innerHTML = message;
  modal.style.display = "block";
}

// Tambahkan di bagian bawah file JavaScript Anda
document.addEventListener("DOMContentLoaded", function () {
  // Tambahkan event listener untuk setiap tombol "Pesan"
  var pesanButtons = document.querySelectorAll(".pesan-btn");
  pesanButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      showModal("Pesan", "Silahkan hubungi kami melalui WhatsApp untuk memesan paket umroh.");
    });
  });
});

// Tambahkan di bagian bawah file JavaScript Anda
document.addEventListener("DOMContentLoaded", function () {
  // Tambahkan event listener untuk setiap tombol "Pesan"
  var pesanButtons = document.querySelectorAll(".pesan-btn");
  pesanButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var waLink = button.getAttribute("href");
      showModal("Pesan", "Silakan hubungi kami melalui WhatsApp untuk memesan paket umroh.", waLink);
    });
  });
});

// Tambahkan di bagian bawah file JavaScript Anda
document.addEventListener("DOMContentLoaded", function () {
  // Tambahkan event listener untuk setiap tombol "Pesan"
  var pesanButtons = document.querySelectorAll(".pesan-btn");
  pesanButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var waLink = button.getAttribute("href");
      showModal("Pesan", "Silakan hubungi kami melalui WhatsApp untuk memesan paket umroh.", waLink);
    });
  });
});

// Fungsi untuk menampilkan modal
function showModal(title, message, waLink) {
  var modalTitle = document.getElementById("modalTitle");
  var modalMessage = document.getElementById("modalMessage");
  var modal = document.getElementById("myModal");

  modalTitle.innerHTML = title;
  modalMessage.innerHTML = message;

  // Tambahkan tombol "Lanjutkan" dengan event listener
  var continueButton = document.createElement("button");
  continueButton.innerHTML = "Lanjutkan";
  continueButton.addEventListener("click", function () {
    window.open(waLink, "_blank");
    modal.style.display = "none";
  });

  // Bersihkan modal content dan tambahkan tombol "Lanjutkan"
  var modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = "";
  modalContent.appendChild(continueButton);

  modal.style.display = "block";
}
