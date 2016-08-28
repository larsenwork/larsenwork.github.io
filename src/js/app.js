// Lazy load
var imgEl = document.getElementsByTagName('img');
for (var i = 0; i < imgEl.length; i++) {
  if (imgEl[i].getAttribute('data-src')) {
    imgEl[i].setAttribute('src', imgEl[i].getAttribute('data-src'));
  }
}

// Elements
var svg = document.getElementById("larsenwork"),
  l1 = Snap.select('#l1'),
  a2 = Snap.select('#a2'),
  r3 = Snap.select('#r3'),
  s4 = Snap.select('#s4'),
  e5 = Snap.select('#e5'),
  n6 = Snap.select('#n6'),
  w7 = Snap.select('#w7'),
  o8 = Snap.select('#o8'),
  r9 = Snap.select('#r9'),
  k10 = Snap.select('#k10');
// Default paths
function path(id) {
  return document.getElementById(id).getAttribute('d');
}

var l1start = path('l1'),
  a2start = path('a2'),
  r3start = path('r3'),
  s4start = path('s4'),
  e5start = path('e5'),
  n6start = path('n6'),
  w7start = path('w7'),
  o8start = path('o8'),
  r9start = path('r9'),
  k10start = path('k10');


var easeInOutBack = function(n, s) {
  s = 1.70158;
  if ((n *= 2) < 1) return 0.5 * (Math.pow(n, 2) * (((s *= 1.525) + 1) * n - s));
  return 0.5 * (Math.pow((n -= 2), 2) * (((s *= 1.525) + 1) * n + s) + 2);
};

var easing = easeInOutBack,
  duration = 2500,
  delay = duration / 20,
  isAnimating = true,
  swungRight = true;

// Svg visibility check
function isVisible(element) {
  var elementTop = element.getBoundingClientRect().top;
  var elementBottom = element.getBoundingClientRect().bottom;
  var elementCenter = (elementTop + elementBottom) / 2;
  return elementCenter > 0;
}

// Check every 500ms if and what we want to animate
function swingTest() {
  // Are we currently not animating?
  if (!isAnimating) {
    // Have we swung right?
    if (swungRight) {
      swingLeft();
    } else {
      swingRight();
    }
  }
  setTimeout(swingTest, 500);
}

// Animation functions
function larsenAnimate(element, path, delayFactor) {
  setTimeout(function() {
    element.animate({
      d: path
    }, duration, easing);
  }, delay * delayFactor);
}

function larsenAnimateCallback(element, path, delayFactor, callback) {
  setTimeout(function() {
    element.animate({
      d: path
    }, duration, easing, callback);
  }, delay * delayFactor);
}

function swingLeft() {
  if (isVisible(svg)) {
    swungRight = false;
    isAnimating = true;
    larsenAnimate(k10,
      "M8739 260h50v1094l559-680h64l-388 472 405 610h-61l-380-574-199 241v333h-50V260z",
      0);
    larsenAnimate(r9,
      "M8461 658c32 0 61 4 89 9l-8 49c-25-4-52-8-81-8-92 0-172 37-220 89-75 81-75 170-75 244v715h-50V674h50v159c51-112 162-175 295-175z",
      1);
    larsenAnimate(o8,
      "M7443 708c-107 0-191 42-246 106-89 103-89 262-89 401s0 298 89 401c55 64 139 106 246 106s191-42 246-106c89-103 89-262 89-401s0-298-89-401c-55-64-139-106-246-106zm0-50c120 0 219 49 280 119 105 119 105 283 105 438s0 319-105 438c-61 70-160 119-280 119s-219-49-280-119c-105-119-105-283-105-438s0-319 105-438c61-70 160-119 280-119z",
      2);
    larsenAnimate(w7,
      "M5689 674h51l233 980 288-980h42l288 980 233-980h51l-259 1082h-44l-290-987-290 987h-44l-259-1082z",
      3);
    larsenAnimate(n6,
      "M5104 658c122 0 221 55 282 132 83 104 83 232 83 321v645h-150v-645c0-97 0-171-58-239-40-47-105-80-187-80s-147 33-187 80c-58 68-58 142-58 239v645h-150V674h150v114c72-79 156-130 275-130z",
      4);
    larsenAnimate(e5,
      "M3737 1247c0 98 1 213 57 292 44 63 117 99 218 99 102 0 204-34 286-73l57 124c-96 45-219 83-343 83-160 0-279-66-346-163-79-114-79-253-79-394 0-119 0-218 37-315 55-145 194-242 368-242 172 0 312 98 369 243 36 92 36 174 36 313v33h-660zm255-455c-111 0-191 62-225 149-21 54-28 117-29 182h509c-1-58-6-124-29-181-36-90-120-150-226-150z",
      5);
    larsenAnimate(s4,
      "M2978 658c124 0 246 41 343 82l-51 127c-87-37-191-75-292-75-165 0-211 105-211 168 0 71 46 121 97 144 83 38 167 23 291 69 107 40 208 138 208 282 0 157-132 317-385 317-137 0-272-46-378-93l54-125c93 42 206 84 324 84 173 0 235-103 235-183 0-81-56-137-118-160-86-32-191-22-301-73-94-44-177-135-177-262 0-156 133-302 361-302z",
      6);
    larsenAnimate(r3,
      "M2366 658c33 0 64 5 92 11l-22 132c-28-4-59-9-90-9-104 0-180 54-213 133-22 53-22 119-22 188v643h-150V674h150v114c68-81 145-130 255-130z",
      7);
    larsenAnimate(a2,
      "M1312 1229c-72 0-155 0-213 50-37 32-67 85-67 156 0 107 71 203 215 203 88 0 159-36 199-89 56-74 56-171 56-261v-59h-190zm-45-571c133 0 237 50 302 124 83 95 83 195 83 271v703h-150v-115c-69 79-156 131-275 131-201 0-345-147-345-337 0-106 46-188 109-242 102-88 234-88 321-88h190v-52c0-56 0-130-54-189-40-44-100-72-181-72-93 0-188 37-263 73l-57-124c90-41 197-83 320-83z",
      8);
    larsenAnimateCallback(l1,
      "M455 260h150v1305c0 22 0 45 11 59 8 10 19 14 35 14 14 0 30-2 46-6l24 128c-27 8-57 12-92 12-56 0-104-27-136-66-38-46-38-108-38-141V260z",
      9, swingRight);
  } else {
    isAnimating = false;
  }
}

function swingRight() {
  if (isVisible(svg)) {
    swungRight = true;
    isAnimating = true;
    larsenAnimate(l1, l1start, 0);
    larsenAnimate(a2, a2start, 1);
    larsenAnimate(r3, r3start, 2);
    larsenAnimate(s4, s4start, 3);
    larsenAnimate(e5, e5start, 4);
    larsenAnimate(n6, n6start, 5);
    larsenAnimate(w7, w7start, 6);
    larsenAnimate(o8, o8start, 7);
    larsenAnimate(r9, r9start, 8);
    larsenAnimateCallback(k10, k10start, 9, swingLeft);
  } else {
    isAnimating = false;
  }
}

// Start animation: We need a small delay so that isVisible returns correct value
setTimeout(swingLeft, 100);

// Start swingtesting after first swing
setTimeout(swingTest, duration);
