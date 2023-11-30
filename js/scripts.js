window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let formInput = document.getElementById("sentence").value;
    let inputArray = Array.from(formInput.split(" "));

    let reversedArray = inputArray.reverse();
    console.log(reversedArray.join(" "));
  });
});