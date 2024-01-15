window.addEventListener("keydown", (e) => {
    const flex = document.querySelector(".flex");
    flex.innerHTML = "";
  
    const heading = document.createElement("h1");
    heading.innerText = "You Pressed";
  
    const span = document.createElement("span");
    if (e.ctrlKey && e.key) {
      console.log("hmm");
      span.innerText = "ctrl + " + e.key;
    } else span.innerText = e.key;
  
    span.classList.add("green");
    flex.appendChild(heading);
    flex.appendChild(span);
  
    const parent = document.querySelector(".parent2");
    parent.innerHTML = "";
    parent.classList.add("parent");
  
    const head = document.createElement("h1");
    head.innerText = e.keyCode;
    parent.appendChild(head);
  });