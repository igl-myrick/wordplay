window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let result = [];
    let test = document.getElementById("sentence").value;
    result.push(test);
    console.log(result);
  });
});