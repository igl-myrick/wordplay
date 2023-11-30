window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formInput = document.getElementById("sentence").value;
    const inputArray = Array.from(formInput.split(" "));
    const outputArray = inputArray.reverse().filter((word) => word.length > 2);

    const h1 = document.createElement("h1");
    h1.append("Result");
    document.body.append(h1);

    const p = document.createElement("p");
    p.append(outputArray.join(" "));
    document.body.append(p);

    form.addEventListener("submit", function() {
      h1.remove();
      p.remove();
    });
  });
});