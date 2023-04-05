function main() {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  function changeColorNav() {
    const header = $(".header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("header--active");
      } else {
        header.classList.remove("header--active");
      }
    });
  }
  changeColorNav();

  function delayItem() {
    const item = $$(".skill__item");
    const skills = $("#skill");
    if (window.scrollY > skills.offsetTop - 100) {
      item.forEach((item, index) => {
        setTimeout(() => {
          item.style.visibility = "visible";
          item.style.transform = "translateX(0)";
        }, 300 * index);
      });
    }
  }
  delayItem();

  function activeNav() {
    const nav = $$(".menu li a");

    const home = $("#home");
    const about = $("#about");
    const skills = $("#skill");
    const projects = $("#my-works");
    const contact = $("#contact");

    document.addEventListener("scroll", () => {
      if (window.scrollY <= home.offsetTop) {
        nav.forEach((item) => {
          item.classList.remove("active");
        });
        nav[0].classList.add("active");
      } else if (window.scrollY < about.offsetTop) {
        nav.forEach((item) => {
          item.classList.remove("active");
        });
        nav[1].classList.add("active");
      } else if (window.scrollY < skills.offsetTop) {
        nav.forEach((item) => {
          item.classList.remove("active");
        });
        nav[2].classList.add("active");
        delayItem();
      } else if (window.scrollY < projects.offsetTop) {
        nav.forEach((item) => {
          item.classList.remove("active");
        });
        nav[3].classList.add("active");
      }
      if (window.scrollY >= contact.offsetTop - 100) {
        nav.forEach((item) => {
          item.classList.remove("active");
        });
        nav[4].classList.add("active");
      }
    });

    nav.forEach((item, index) => {
      item.addEventListener("click", () => {
        const bntMenubar = $("#menu-bar");
        bntMenubar.checked = false;
        nav.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }
  activeNav();

  function toggleMenuWhenClickoutside() {
    const bntMenubar = $("#menu-bar");

    document.addEventListener("click", (e) => {
      if (
        bntMenubar.checked &&
        e.target.closest(".menu") === null &&
        e.target.closest("#menu-bar") === null &&
        e.target.closest(".menu-bar") === null
      ) {
        bntMenubar.checked = false;
      }
    });
  }
  toggleMenuWhenClickoutside();

  function createProject() {
    const projects = [
      {
        name: "Zing MP3 Clone",
        img: "./images/zing.PNG",
        linkLive: "https://zingmp3-indol.vercel.app/",
        linkCode: "https://github.com/hoangak47/zingmp3_clone",
        teamSize: 1,
        technologies:
          " HTML/CSS/SCSS/JS, Reactjs, Reactjs hook, React context, Reactrouter-dom, Chart.js, Axios, Nodejs ( Expressjs).",
        function:
          "Change theme, Skeleton, Song control ( including: play, pause, next, previous, random, loop), Volum control, Control the time to play music,...",
      },
      {
        name: "Chat-app",
        img: "./images/chat_app.PNG",
        linkLive: "https://chat-app-fca21.web.app/",
        linkCode: "https://github.com/hoangak47/chat-app",
        teamSize: 1,
        technologies:
          " HTML/SCSS/JS, Reactjs, Reactjs hook, React context, Reactrouter-dom, Firebase.",
        function:
          "Dark-Light, Signin with Facebook / Google, Message, Send image message, Send icon, Add friend, Unfriend, Search friend, Create room chat, Add members in room, Chat with friend, Change image room chat, Change room name and friend name.",
      },
      {
        name: "Todo app",
        img: "./images/todo_app.PNG",
        linkLive: "https://todo-app-tan-zeta.vercel.app/",
        linkCode: "https://github.com/hoangak47/todo-app",
        teamSize: 1,
        technologies:
          " HTML/SCSS/JS, Reactjs, Reactjs hook, React-router-dom, Axios, Nodejs ( Expressjs), Redux, Redux Toolkit.",
        function:
          " Add new todo, Filter ( active, completed ), Sort ( by name, by compeleted ), Change todo, Delete Todo.",
      },
      {
        name: "The Cao company website",
        img: "./images/thecao.PNG",
        linkLive: "https://www.thecaovn.space/",
        teamSize: 1,
        technologies: " HTML/SCSS/JS, Bootstrap",
        function: " Responsive, Animation,..",
      },
      {
        name: "Portfolio",
        img: "./images/Portfolio.PNG",
        linkLive: "https://portfolio-hoangak47.vercel.app/",
        linkCode: "https://github.com/hoangak47/Portfolio",
        teamSize: 1,
        technologies: " HTML/CSS/JS",
        function: " Responsive, Animation,..",
      },
      {
        name: "Timer",
        img: "./images/Timer.PNG",
        linkLive: "https://time-hoangak47.vercel.app/",
        linkCode: "https://github.com/hoangak47/Time",
        teamSize: 1,
        technologies: "HTML/CSS/SCSS/JS, Reactjs, Antd",
        function: "Run Time, Animation,..",
      },
      {
        name: "Weather",
        img: "./images/Weather.png",
        linkLive: "https://weather-six-omega.vercel.app/",
        linkCode: "https://github.com/hoangak47/weather",
        teamSize: 1,
        technologies: "HTML/SCSS/JS, Reactjs, Axios, Redux, Redux Toolkit.",
        function:
          "View Temperature, Humidity, Wind Speed, View Weather By Search Location,..",
      },
    ];

    const projectContainer = $(".project-list");
    projectContainer.innerHTML = projects
      .map((project) => {
        return `<div class="project-item">
        <img src="${
          project.img ? project.img : `./images/404.jpg`
        }" alt="" class="project-item__img">
        <div class="project-item__content space-mono">
        ${
          project.name
            ? `<h3 class="project-item__title ">${project.name}</h3>`
            : ``
        }

        ${
          project.teamSize || project.technologies || project.function
            ? `<div class="project-item__description jost">
        <h3 class="project-type">${
          project.teamSize > 1 ? "Team Project" : "Personal project"
        }</h3>
        <br>
        ${
          project.teamSize
            ? `<h5><span>- Team Size:</span> ${project.teamSize}</h5>`
            : ``
        }
        <br>
        ${
          project.technologies
            ? `<h5><span>- Technologies:</span> ${project.technologies}</h5>`
            : ``
        }
        <br>
        ${
          project.function
            ? `
        <h5><span>- Functions such as:</span> ${project.function}</h5>`
            : ``
        }
    </div>`
            : ``
        }
            

            
        </div>
        <div class="btn-project space-mono">
        ${
          project.linkLive
            ? `<a target="_blank" href="${project.linkLive}" class="btn-project__link">
        <ion-icon name="open-outline" class="btn-project__icon"></ion-icon>
        <span class="btn-project__text">View Demo</span>
    </a>`
            : ``
        }

        ${
          project.linkCode
            ? `<a target="_blank" href="${project.linkCode}"
        class="btn-project__link">
        <ion-icon name="logo-github" class="btn-project__icon"></ion-icon>
        <span class="btn-project__text">View Code</span>
    </a>`
            : ``
        }
        
        
    </div>
    </div>`;
      })
      .join("");
  }

  createProject();

  function loadImg404() {
    const img404 = $$(".project-item__img");
    img404.forEach((item) => {
      item.onerror = function () {
        item.src = "./images/404.jpg";
      };
    });
  }
  loadImg404();

  function sendEmail() {
    const btn = $(".contact__form-btn");
    const input = $$(".contact__form-input");
    const spans = $$(".contact__form-group span");
    const textarea = $(".contact__form-group textarea");

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const name = input[0].value;
      const email = input[1].value;
      const subject = input[2].value;
      const message = textarea.value;

      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(pattern)) {
        createToast("error");
        return false;
      }

      if (name && email && subject && message) {
        Email.send({
          SecureToken: "1c1d5512-53cf-4c3a-9b36-7ef3bff5cab0",
          To: "nguyenhoang41911@gmail.com",
          From: "dinhnv391@gmail.com",
          Subject: subject,
          Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
        }).then(createToast("success"));

        input.forEach((item) => (item.value = ""));
        spans.forEach((item) => {
          item.style.visibility = "visible";
        });
      }
    });

    const toasts = {
      success: {
        icon: '<ion-icon name="checkmark-circle-outline"></ion-icon>',
        msg: "Gửi thành công!",
      },
      error: {
        icon: '<ion-icon name="alert-circle-outline"></ion-icon>',
        msg: "Vui lòng kiểm tra thông tin !",
      },
    };

    function createToast(status) {
      let toast = document.createElement("div");
      toast.className = `toast ${status}`;

      toast.innerHTML = `
        ${toasts[status].icon}
        <span class="msg">${toasts[status].msg}</span>
        <span class="countdown"></span>
        `;
      document.querySelector("#toasts").appendChild(toast);

      setTimeout(() => {
        toast.style.animation = "hide_slide 1s ease forwards";
      }, 4000);
      setTimeout(() => {
        toast.remove();
      }, 6000);
    }
  }

  sendEmail();
}

main();
