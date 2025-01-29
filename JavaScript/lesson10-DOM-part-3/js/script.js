import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { langData, products } from "./data.js";

AOS.init();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000, // 3 saniyəlik interval
    disableOnInteraction: false, // İstifadəçi sürüşdürdükdən sonra da davam etsin
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// ============================================swiper end===========================================

const langBtn = document.querySelector("#lang-btn");
const navLink = document.querySelectorAll(".nav-link");
const multiLang = () => {
  if (langBtn.innerHTML === "AZ") {
    langBtn.innerHTML = "EN";
    langData.az.map((item, index) => {
      navLink[index].innerHTML = item;
    });
    localStorage.setItem("lang", "az");
  } else {
    langBtn.innerHTML = "AZ";
    langData.en.map((item, index) => {
      navLink[index].innerHTML = item;
    });
    localStorage.setItem("lang", "en");
  }
};
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "az");
} else {
  if (localStorage.getItem("lang") === "az") {
    langBtn.innerHTML = "EN";
    langData.az.map((item, index) => {
      navLink[index].innerHTML = item;
    });
  } else {
    langBtn.innerHTML = "AZ";
    langData.en.map((item, index) => {
      navLink[index].innerHTML = item;
    });
  }
}

langBtn.onclick = multiLang;
// ============================================multilang end===========================================

const modeBtn = document.querySelector("#mode");
modeBtn.onclick = () => {
  if (modeBtn.innerHTML === "Dark") {
    document.body.setAttribute("data-bs-theme", "dark");
    modeBtn.innerHTML = "Light";
    localStorage.setItem("mode", "dark");
  } else {
    document.body.setAttribute("data-bs-theme", "light");
    modeBtn.innerHTML = "Dark";
    localStorage.setItem("mode", "light");
  }
};

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "light");
} else {
  if (localStorage.getItem("mode") === "light") {
    document.body.setAttribute("data-bs-theme", "light");
    modeBtn.innerHTML = "Dark";
  } else {
    document.body.setAttribute("data-bs-theme", "dark");
    modeBtn.innerHTML = "Light";
  }
}

// ============================================mode end===========================================

const row = document.querySelector(".row");
let card = "";
const listData = () => {
  products.map(
    (item) =>
      (card += `
        <div class="col-12 col-sm-6 col-md-3" data-aos="flip-left">
            <div class="card" >
                <img style="height:300px;object-fit:contain" src="${
                  item.image
                }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title.substring(
                      0,
                      10
                    )}...</h5>
                    <p class="card-text">${item.description.substring(
                      0,
                      40
                    )}...</p>
                    <a href="#" class="btn btn-dark">More details</a>
                </div>
            </div>
        </div>
        `)
  );
  row.innerHTML = card;
};

if (row) {
    listData();
}
// ============================================data end===========================================


const loginForm = document.querySelector('.login-form');
if (loginForm) {
    const user = {
        email:"hasan@webluna.org",
        pass:"hasan12345"
    }
    const inputEmail = document.querySelectorAll('input')[0]; 
    const inputPass = document.querySelectorAll('input')[1]; 
    loginForm.onsubmit = (event)=>{
        event.preventDefault();
        if (!inputEmail.value || !inputPass.value) {
            Swal.fire({
                title: 'Please fill input!',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
        }else{
            if (inputEmail.value===user.email && inputPass.value===user.pass) {
                Swal.fire({
                    title: 'Login is successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }else{
                Swal.fire({
                    title: 'Email or password is wrong!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            }
        }
        
            
    }
}

// ============================================login end===========================================




