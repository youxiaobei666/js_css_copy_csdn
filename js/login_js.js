// window.addEventListener("load", function() {
//登录注册
let login_btn = document.querySelector(".login-btn");
let register_btn = document.querySelector(".register-btn");
let login_box = document.querySelector(".login-box");
let register_box = document.querySelector(".register-box");
let register_text_btn1 = document.querySelector(".register-text-btn1");
let register_text_btn2 = document.querySelector(".register-text-btn2");
let login_text = document.querySelector(".login-text");
let register_text = document.querySelector(".register-text");
// 注册事件
register_text_btn2.onclick = function () {
  register_box.onmouseleave();
  register_btn.onmouseover = null;
};

login_text.onclick = function () {
  login_box.style.left = "420px";
  login_box.style.opacity = "1";
  login_box.style.transition = "1.2s";
  register_box.onmouseleave();
};
register_text.onclick = function () {
  register_box.style.right = "420px";
  register_box.style.opacity = "1";
  register_box.style.transition = "1.2s";
};

register_text_btn1.onclick = function () {
  register_box.style.right = "420px";
  register_box.style.opacity = "1";
  register_box.style.transition = "1.2s";
  login_btn.onmouseover = null;
  login_box.onmouseleave();
};

login_btn.onmouseover = function () {
  login_box.style.left = "420px";
  login_box.style.opacity = "1";
  login_box.style.transition = "1.2s";
  register_box.onmouseleave();
};
register_btn.onmouseover = function () {
  register_box.style.right = "420px";
  register_box.style.opacity = "1";
  register_box.style.transition = "1.2s";
  login_box.onmouseleave();
};
// 复位
login_box.onmouseleave = function () {
  login_box.style.left = "120px";
  login_box.style.opacity = "0";
  login_box.style.transition = "1.2s";
};
register_box.onmouseleave = function () {
  register_box.style.right = "120px";
  register_box.style.opacity = "0";
  register_box.style.transition = "1.2s";
};
// })
