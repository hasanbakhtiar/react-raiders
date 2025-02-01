// const ul = document.querySelector("ul");
// const result= ul.childNodes[1].firstChild.parentNode.nextSibling.firstChild.nodeValue;
// console.log(result)

// const h1 = document.createElement("h1");
// const myText = document.createTextNode("my data");
//
// h1.appendChild(myText);
// document.body.appendChild(h1);

// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const ul = document.querySelector('ul');
// btn.onclick = () => {
//   const li = document.createElement("li");
//   li.append(input.value);
//   ul.append(li);
// };
//

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");



input.onkeyup=()=>{
  input.style.height = "20px";
  input.style.transition = '.5s';
}

input.onkeydown=()=>{
    input.style.height = "100px";
    input.style.transition = '.5s';
}

form.onsubmit = (e) => {
  e.preventDefault();
  if (!input.value) {
    window.alert("Please fill input");
  } else {
    const li = document.createElement("li");

    li.innerHTML = `${input.value}<button type="button" class="del-btn">X</button>`;
    ul.append(li);
    input.value = "";
    li.ondblclick = () => {
      li.remove();
    };
      li.onclick = () => {
              li.style.textDecoration = 'line-through';
            };
  }
};
