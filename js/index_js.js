//文档加载完成之后执行代码
// window.addEventListener('load', function() {

// 获取导航条9个
let turn_color = document.querySelectorAll(
  ".header-nav-main--list, .header-nav-user-list"
);

// 依次注册鼠标移入移出 变色事件
for (let i = 0; i < turn_color.length; i++) {
  turn_color[i].onmouseover = function () {
    this.style.backgroundColor = "#eeeeee";
  };
  turn_color[i].onmouseout = function () {
    this.style.backgroundColor = "#fff";
  };
}

//获取隐藏的下拉条
let other_box = document.querySelector(".other");

//盒子显示
turn_color[4].onmouseover = function () {
  other_box.style.display = "block";
  top_box.style.display = "none";
  this.style.backgroundColor = "#eeeeee";
};

//盒子隐藏
turn_color[4].onmouseout = function () {
  other_box.style.display = "none";
  turn_color[4].style.backgroundColor = "#fff";
  top_box.style.display = "block";
};

//显示后固定
other_box.onmouseover = function () {
  other_box.style.display = "block";
  top_box.style.display = "none";
};
other_box.onmouseout = function () {
  other_box.style.display = "none";
  top_box.style.display = "block";
};

//单元格变色
let other_a = document.querySelectorAll(".other-list");
for (var i = 0; i < other_a.length; i++) {
  other_a[i].onmouseover = function () {
    this.style.backgroundColor = "#2774cb";
  };
  other_a[i].onmouseout = function () {
    this.style.backgroundColor = "#fff";
  };
}

// ---------------------------------------

// 获取头像
let user_img = document.querySelector(".header-user-image");
// 获取盒子
let user_box = document.querySelector(".user-box");

// 注册头像事件
user_img.onmouseover = function () {
  user_img.style.width = "40px";
  user_img.style.height = "40px";
  // user_img.style.filter = "drop-shadow(5px 5px 5px rgba(123, 123, 123, 0.6))";
  user_img.style.transition = ".3S";
  user_box.style.display = "block";
  btn_close2.style.display = "block";
};

// 鼠标移出消失
user_img.onmouseout = function () {
  user_img.style.width = "32px";
  user_img.style.height = "32px";
  user_img.style.filter = "";
  user_img.style.transform = "translateY(0)";
  user_box.style.display = "none";
};

// 保持显示
user_box.onmouseover = function () {
  this.style.display = "block";
  user_img.onmouseover();
};
user_box.onmouseout = function () {
  this.style.display = "none";
  user_img.onmouseout();
};

// 每一个变色
let user_box_list = document.querySelectorAll(".user-name, .user-list");

for (let i = 0; i < user_box_list.length; i++) {
  user_box_list[i].onmouseover = function () {
    this.style.backgroundColor = "#2774cb";
    this.style.color = "#ffffff";
  };
  user_box_list[i].onmouseout = function () {
    this.style.backgroundColor = "#ffffff";
    this.style.color = "#3d3d3d";
  };
}

// 上传模块------------------------

let upload_icon = document.querySelector(".header-upload-icon");
upload_icon.onmouseover = function () {
  this.style.width = "42px";
  this.style.height = "42px";
  this.style.transition = ".3s";
};
upload_icon.onmouseout = function () {
  this.style.height = "32px";
  this.style.width = "32px";
};

// 头部结束

// 获取top-box 多菜单
let top_box = document.querySelector(".top-box");
// 获取箭头
let top_point = document.querySelector(".top-point");
top_box.onmouseover = function () {
  top_box.style.height = "120px";
  top_box.style.transition = ".3s";
  //------------箭头
  top_point.style.top = "110px";
  top_point.style.transition = ".3s";
};
top_box.onmouseleave = function () {
  top_box.style.height = "40px";
  top_point.style.top = "30px";
};
let top_box_a = document.querySelectorAll(".top-box a");
for (let i = 0; i < top_box_a.length; i++) {
  top_box_a[i].onmouseover = function () {
    top_box_a[i].style.color = "#d9251d";
  };
  top_box_a[i].onmouseleave = function () {
    top_box_a[i].style.color = "#3d3d3d";
  };
}

// -------------------------------------------------------

// 获取轮播图两个箭头
// let point1 = document.querySelector(".point1");
// let point2 = document.querySelector(".point2");

// // 获取图片
// let imgs = document.querySelectorAll(".carousel .img");
// console.log(imgs);

// // 初始化索引和坐标
// var chushihua = function() {
//         for (let i = 0; i < imgs.length; i++) {
//             imgs[i].index = i;
//             imgs[i].style.left = parseInt(300 * i) + "px";
//         }
//     }
//     // 初始化执行
// chushihua();

// // 点击轮播
// point1.onclick = function() {

//     for (let i = 0; i < 3; i++) {
//         imgs[i].index--;
//         // console.log(imgs[i].index)
//     }
//     if (imgs[0].index == -1) {
//         imgs[0].style.left = "600px";
//         imgs[1].style.left = "0px";
//         imgs[2].style.left = "300px";
//         // console.log("经过第一个")
//     }
//     if (imgs[1].index == -1) {
//         imgs[0].style.left = "300px";
//         imgs[1].style.left = "600px";
//         imgs[2].style.left = "0px";
//         // console.log("经过第二个")
//     }
//     if (imgs[2].index == -1) {
//         imgs[0].style.left = "0px";
//         imgs[1].style.left = "300px";
//         imgs[2].style.left = "600px";
//         // console.log("经过第三个，调用初始化函数")
//         // 调用初始化
//         chushihua();
//     }
// }

// point2.onclick = function() {

//     for (let i = 0; i < 3; i++) {
//         imgs[i].index--;
//         // console.log(imgs[i].index)
//     }
//     if (imgs[0].index == -1) {
//         imgs[0].style.left = "600px";
//         imgs[1].style.left = "300px";
//         imgs[2].style.left = "0px";
//         // console.log("经过第一一个")
//     }
//     if (imgs[1].index == -2) {
//         imgs[0].style.left = "0px";
//         imgs[1].style.left = "600px";
//         imgs[2].style.left = "300px";
//         // console.log("经过第二二个")
//         // console.log("调用初始化函数")
//         // 调用初始化
//         chushihua();

//     }
//     if (imgs[2].index == 0) {
//         imgs[0].style.left = "300px";
//         imgs[1].style.left = "0px";
//         imgs[2].style.left = "600px";
//         // console.log("经过第三三个")

//     }

// }

// // 自动轮播
// this.setInterval(point1.onclick, 2000);

// 轮播图返工

// 获取两个箭头
let point1 = document.querySelector(".point1");
let point2 = document.querySelector(".point2");

// 获取图片
let imgs = document.querySelectorAll(".carousel .img");
//复位坐标
for (let i = 0; i < imgs.length; i++) {
  imgs[i].style.left = 300 * i + "px";
}

var index = [, ,];

point1.onclick = function () {
  for (let i = 0; i < imgs.length; i++) {
    index[i] = imgs[i].getAttribute("index");
    index[i]--;
    imgs[i].setAttribute("index", index[i]);
    //初始化坐标
    imgs[i].style.left = parseInt(index[i] * 300) + "px";
    if (imgs[i].getAttribute("index") == -1) {
      imgs[i].setAttribute("index", 2); //索引小于0赋值为最后一个imgs.lenght
      //坐标改变
      imgs[i].style.left = parseInt(imgs[i].getAttribute("index") * 300) + "px";
    }
    console.log(imgs[i]);
  }
};
point2.onclick = function () {
  for (let i = 0; i < imgs.length; i++) {
    index[i] = imgs[i].getAttribute("index");
    index[i]++;
    imgs[i].setAttribute("index", index[i]);
    //初始化坐标
    imgs[i].style.left = parseInt(index[i] * 300) + "px";
    if (imgs[i].getAttribute("index") == 3) {
      imgs[i].setAttribute("index", 0); //索引小于0赋值为最后一个imgs.lenght
      //坐标改变
      imgs[i].style.left = parseInt(imgs[i].getAttribute("index") * 300) + "px";
    }
    console.log(imgs[i]);
  }
};
//自动轮播
this.setInterval(point1.onclick, 2000);

// 鼠标下划线
// 1
let underline1 = document.querySelectorAll(".text1 .h");
for (let i = 0; i < underline1.length; i++) {
  underline1[i].onmouseover = function () {
    this.style.textDecoration = "underline";
  };
}
for (let i = 0; i < underline1.length; i++) {
  underline1[i].onmouseout = function () {
    this.style.textDecoration = "none";
  };
}
// 2
let underline2 = document.querySelectorAll(".text2 .h");
for (let i = 0; i < underline2.length; i++) {
  underline2[i].onmouseover = function () {
    this.style.textDecoration = "underline";
  };
}
for (let i = 0; i < underline2.length; i++) {
  underline2[i].onmouseout = function () {
    this.style.textDecoration = "none";
  };
}
// 3
let underline3 = document.querySelectorAll(".text3 .h");
for (let i = 0; i < underline3.length; i++) {
  underline3[i].onmouseover = function () {
    this.style.textDecoration = "underline";
  };
}
for (let i = 0; i < underline3.length; i++) {
  underline3[i].onmouseout = function () {
    this.style.textDecoration = "none";
  };
}

//二维码移动
let erweima = document.querySelector(".erweima");

let erweima_bar = document.querySelector(".erweima-bar");
erweima.onmouseover = function () {
  erweima_bar.style.bottom = "220px";
  erweima_bar.style.width = "200px";
  erweima_bar.style.height = "250px";
  erweima_bar.style.fontSize = "17px";
  erweima_bar.style.transition = ".8s";
  erweima.style.backgroundPosition = "8px -43px";
  kefu.onmouseout();
};
erweima.onmouseleave = function () {
  erweima_bar.style.bottom = "-100px";
  erweima_bar.style.width = "0px";
  erweima_bar.style.height = "0px";
  erweima_bar.style.fontSize = "0px";
  erweima.style.backgroundPosition = "8px 8px";
};

// 获取客服标，盒子
let kefu = document.querySelector(".kefu");
let kefu_bar = document.querySelector(".kefu-bar");
kefu.onmouseover = function () {
  kefu_bar.style.display = "block";
};
kefu.onmouseout = function () {
  kefu_bar.style.display = "none";
};
kefu_bar.onmouseover = function () {
  kefu_bar.style.display = "block";
};
kefu_bar.onmouseout = function () {
  kefu_bar.style.display = "none";
};

// 获取广告.关闭按钮
let ad = document.querySelector(".ad");
let ad_more = document.querySelector(".ad-more");
let ad_close = document.querySelector(".ad-close");
ad_close.onclick = function () {
  ad_close.style.display = "none";
  ad.style.display = "none";
  ad_more.style.display = "block";
};

//评论区
let comment_li = document.querySelectorAll(".comment-nav-list");
let list_more = document.querySelectorAll(".list-more"); //上弹隐藏盒子
//字体变色

for (let i = 0; i < comment_li.length; i++) {
  comment_li[i].onmouseover = function () {
    comment_li[i].style.color = "#151515";
    list_more[i].style.opacity = "1";
    list_more[i].style.transition = "1.2s";
  };
  comment_li[i].onmouseout = function () {
    comment_li[i].style.color = "#515151";
    list_more[i].style.opacity = "0";
    list_more[i].style.transition = "1.4s";
  };
}

//“更多”按钮变色
let comment_more = document.querySelector(".comment-nav-more");
comment_more.onmouseover = function () {
  comment_more.style.color = "#151515";
};
comment_more.onmouseout = function () {
  comment_more.style.color = "#515151";
};

//上弹框定位
for (let i = 0; i < list_more.length; i++) {
  list_more[i].style.left = parseInt(i * 80 - 30) + "px";
  list_more[i].style.marginLeft = "-4px";
}
list_more[4].style.left = parseInt(4 * 80 - 15) + "px";

// 直播遮罩
let live_box = document.querySelectorAll(".live-box");
console.log(live_box);
let img_mask = document.querySelectorAll(".img-mask");
console.log(img_mask);
for (let i = 0; i < live_box.length; i++) {
  live_box[i].onmouseover = function () {
    img_mask[i].style.opacity = "1";
    img_mask[i].style.transition = "1s";
    img_mask[i].style.transition = ".8s";
  };
}
for (let i = 0; i < live_box.length; i++) {
  live_box[i].onmouseout = function () {
    img_mask[i].style.opacity = "0";
    img_mask[i].style.transition = "1s";
    img_mask[i].style.transition = ".8s";
  };
}

// })
