// Scripts.js
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

// Automatically change photos every 3 seconds
setInterval(function () {
  document.getElementById("next").click();
}, 12000);

document.getElementById("next").addEventListener("mouseenter", function () {
  clearInterval(intervalId);
});

document.getElementById("next").addEventListener("mouseleave", function () {
  startAutoChange();
});

document.getElementById("prev").addEventListener("mouseenter", function () {
  clearInterval(intervalId);
});

document.getElementById("prev").addEventListener("mouseleave", function () {
  startAutoChange();
});
