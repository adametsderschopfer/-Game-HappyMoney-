let windowContent = `
<div class="img-container">
<img
  src="https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/KomBaseMasterpageTemplate/icon200.png"
  alt="Сбербанк"
/>
</div>
<div class="question">
Довольны ли вы своей зарплатой?
</div>

<div class="wrapper">
<button class="answer" id="yes">ДА</button>
<button class="answer no" id="no">НЕТ</button>
</div>

`;

const windowHtml = document.querySelector(".window");

document.addEventListener("DOMContentLoaded", () => {
  windowHtml.innerHTML = windowContent;

  const yes = document.querySelector("#yes");
  const no = document.querySelector("#no");

  const listener = () => {
    windowHtml.innerHTML = `
      <b class="SberAnswer">Мы и не сомневались в вашем ответе</b>
      `;
  };

  yes.addEventListener("click", () => {
    listener();
    yes.removeEventListener("click", listener);
  });

  no.addEventListener("mousemove", () => {
    no.style.top = `${Math.floor(Math.random() * 200)}px`;
    no.style.right = `${Math.floor(Math.random() * 200)}px`;
  });
});
