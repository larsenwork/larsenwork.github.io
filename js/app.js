// Elements
var svg = document.getElementById(
  "larsenwork"),
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

// Animation timing
var exhale = mina.easeOutBounce,
exhaleDur = 2000.
inhale = mina.easeOutBack,
inhaleDur = exhaleDur,
delay = 90,
regularDelay = 2200,
thinDelay = regularDelay,
regDur = regularDelay + exhaleDur;
workDelay = regDur / 3;

setTimeout(shrinkL1, delay * 0);
setTimeout(shrinkA2, delay * 1);
setTimeout(shrinkR3, delay * 2);
setTimeout(shrinkS4, delay * 3);
setTimeout(shrinkE5, delay * 4);
setTimeout(shrinkN6, delay * 5);
setTimeout(shrinkW7, delay * 1 + workDelay);
setTimeout(shrinkO8, delay * 2 + workDelay);
setTimeout(shrinkR9, delay * 3 + workDelay);
setTimeout(shrinkK10, delay * 4 + workDelay);

console.log(delay * 4 + regDur);

function shrinkL1() {
  setTimeout(function() {
    l1.animate({
        d: "M710.5 260h50v1382c0 23 1 40 13 57 11 15 31 23 53 23 12 0 25-1 40-4l9 49c-19 4-38 5-56 5-33 0-66-17-84-40-25-32-25-65-25-90V260z"
      }, exhaleDur,
      exhale,
      expandL1);
  }, regularDelay);
}

function expandL1() {
  setTimeout(function() {
    l1.animate({
        d: "M335 260h150v1305c0 22 0 45 11 59 8 10 19 14 35 14 14 0 30-2 46-6l24 128c-27 8-57 12-92 12-56 0-104-27-136-66-38-46-38-108-38-141V260z"
      }, inhaleDur,
      inhale,
      shrinkL1);
  }, thinDelay);
}

function shrinkA2() {
  setTimeout(function() {
    a2.animate({
        d: "M1446 1193c-75 0-174 0-250 65-50 43-85 112-85 199 0 154 107 265 275 265 112 0 202-51 252-120 63-88 63-192 63-296v-113h-255zm-40-535c115 0 210 47 268 115 77 90 77 188 77 258v725h-50v-181c-51 123-168 197-320 197-187 0-320-131-320-315 0-103 43-186 103-237 90-77 200-77 282-77h255v-112c0-66 0-153-68-229-50-56-129-94-227-94-93 0-169 32-237 64l-21-45c72-35 159-69 258-69z"
      }, exhaleDur,
      exhale,
      expandA2);
  }, regularDelay);
}

function expandA2() {
  setTimeout(function() {
    a2.animate({
        d: "M1190 1229c-72 0-155 0-213 50-37 32-67 85-67 156 0 107 71 203 215 203 88 0 159-36 199-89 56-74 56-171 56-261v-59h-190zm-45-571c133 0 237 50 302 124 83 95 83 195 83 271v703h-150v-115c-69 79-156 131-275 131-201 0-345-147-345-337 0-106 46-188 109-242 102-88 234-88 321-88h190v-52c0-56 0-130-54-189-40-44-100-72-181-72-93 0-188 37-263 73l-57-124c90-41 197-83 320-83z"
      }, inhaleDur,
      inhale,
      shrinkA2);
  }, thinDelay);
}

function shrinkR3() {
  setTimeout(function() {
    r3.animate({
        d: "M2405 658c32 0 61 4 89 9l-8 49c-25-4-52-8-81-8-92 0-172 37-220 89-75 81-75 170-75 244v715h-50V674h50v159c51-112 162-175 295-175z"
      }, exhaleDur,
      exhale,
      expandR3);
  }, regularDelay);
}

function expandR3() {
  setTimeout(function() {
    r3.animate({
        d: "M2245 658c33 0 64 5 92 11l-22 132c-28-4-59-9-90-9-104 0-180 54-213 133-22 53-22 119-22 188v643h-150V674h150v114c68-81 145-130 255-130z"
      }, inhaleDur,
      inhale,
      shrinkR3);
  }, thinDelay);
}

function shrinkS4() {
  setTimeout(function() {
    s4.animate({
        d: "M2966 658c111 0 205 36 287 71l-19 46c-78-33-165-67-268-67-194 0-272 127-272 230 0 74 40 154 124 198 94 49 211 38 314 82 98 42 178 132 178 259 0 152-121 295-345 295-123 0-229-40-318-80l21-45c85 38 184 75 297 75 195 0 295-121 295-245 0-105-69-181-147-213-102-42-217-30-318-84-103-55-151-149-151-242 0-130 100-280 322-280z"
      }, exhaleDur,
      exhale,
      expandS4);
  }, regularDelay);
}

function expandS4() {
  setTimeout(function() {
    s4.animate({
        d: "M2858 658c124 0 246 41 343 82l-51 127c-87-37-191-75-292-75-165 0-211 105-211 168 0 71 46 121 97 144 83 38 167 23 291 69 107 40 208 138 208 282 0 157-132 317-385 317-137 0-272-46-378-93l54-125c93 42 206 84 324 84 173 0 235-103 235-183 0-81-56-137-118-160-86-32-191-22-301-73-94-44-177-135-177-262 0-156 133-302 361-302z"
      }, inhaleDur,
      inhale,
      shrinkS4);
  }, thinDelay);
}

function shrinkE5() {
  setTimeout(function() {
    e5.animate({
        d: "M3607,1210c0,165 4,291 73,388c53,73 140,124 262,124c98,0 191,-31 266,-66l21,45c-81,38 -179,71 -287,71c-137,0 -241,-59 -302,-144c-77,-107 -83,-238 -83,-413c0,-166 3,-294 73,-402c56,-86 159,-155 292,-155c133,0 236,69 292,155c63,95 73,203 73,355l0,42l-680,0ZM3607,1160l630,0c0,-137 -10,-236 -65,-319c-49,-74 -136,-133 -250,-133c-114,0 -202,59 -250,133c-55,85 -64,189 -65,319Z"
      }, exhaleDur,
      exhale,
      expandE5);
  }, regularDelay);
}

function expandE5() {
  setTimeout(function() {
    e5.animate({
        d: "M3618,1247c0,98 1,213 57,292c44,63 117,99 218,99c102,0 204,-34 286,-73l57,124c-96,45 -219,83 -343,83c-160,0 -279,-66 -346,-163c-79,-114 -79,-253 -79,-394c0,-119 0,-218 37,-315c55,-145 194,-242 368,-242c172,0 312,98 369,243c36,92 36,174 36,313l0,33l-660,0ZM3619,1123l509,0c-1,-58 -6,-124 -29,-181c-36,-90 -120,-150 -226,-150c-111,0 -191,62 -225,149c-21,54 -28,117 -29,182Z"
      }, inhaleDur,
      inhale,
      shrinkE5);
  }, thinDelay);
}

function shrinkN6() {
  setTimeout(function() {
    n6.animate({
        d: "M4935 658c115 0 207 48 265 117 80 95 80 206 80 284v697h-50v-697c0-75 0-169-68-249-51-60-134-102-237-102s-186 42-237 102c-68 80-68 174-68 249v697h-50V674h50v165c53-115 169-181 315-181z"
      }, exhaleDur,
      exhale,
      expandN6);
  }, regularDelay);
}

function expandN6() {
  setTimeout(function() {
    n6.animate({
        d: "M4979 658c122 0 220.724 55.22 282 132 83 104 83 232 83 321v645h-150v-645c0-96.617 0-170.584-58-239-39.91-47.077-105-80-187-80s-147.09 32.923-187 80c-58 68.417-58 142-58 239v645h-150V674h150v114c72-79 156-130 275-130z"
      }, inhaleDur,
      inhale,
      shrinkN6);
  }, thinDelay);
}

function shrinkW7() {
  setTimeout(function() {
    w7.animate({
        d: "M5481 674h51l233 980 288-980h42l288 980 233-980h51l-259 1082h-44l-290-987-290 987h-44L5481 674z"
      }, exhaleDur,
      exhale,
      expandW7);
  }, regularDelay);
}

function expandW7() {
  setTimeout(function() {
    w7.animate({
        d: "M5548 674h153l186 834 222-834h146l222 834 186-834h153l-259 1082h-146l-229-856-229 856h-146L5548 674z"
      }, inhaleDur,
      inhale,
      shrinkW7);
  }, thinDelay);
}

function shrinkO8() {
  setTimeout(function() {
    o8.animate({
        d: "M7235 708c-107 0-191 42-246 106-89 103-89 262-89 401s0 298 89 401c55 64 139 106 246 106s191-42 246-106c89-103 89-262 89-401s0-298-89-401c-55-64-139-106-246-106zm0-50c120 0 219 49 280 119 105 119 105 283 105 438s0 319-105 438c-61 70-160 119-280 119s-219-49-280-119c-105-119-105-283-105-438s0-319 105-438c61-70 160-119 280-119z"
      }, exhaleDur,
      exhale,
      expandO8);
  }, regularDelay);
}

function expandO8() {
  setTimeout(function() {
    o8.animate({
        d: "M7420 792c-89 0-158 32-199 79-76 87-76 216-76 344s0 257 76 344c41 47 110 79 199 79s158-32 199-79c76-87 76-216 76-344s0-257-76-344c-41-47-110-79-199-79zm0-134c137 0 247 53 313 126 112 124 112 284 112 431s0 307-112 431c-66 73-176 126-313 126s-247-53-313-126c-112-124-112-284-112-431s0-307 112-431c66-73 176-126 313-126z"
      }, inhaleDur,
      inhale,
      shrinkO8);
  }, thinDelay);
}

function shrinkR9() {
  setTimeout(function() {
    r9.animate({
        d: "M8253 658c32 0 61 4 89 9l-8 49c-25-4-52-8-81-8-92 0-172 37-220 89-75 81-75 170-75 244v715h-50V674h50v159c51-112 162-175 295-175z"
      }, exhaleDur,
      exhale,
      expandR9);
  }, regularDelay);
}

function expandR9() {
  setTimeout(function() {
    r9.animate({
        d: "M8541 658c33 0 64 5 92 11l-22 132c-28-4-59-9-90-9-104 0-180 54-213 133-22 53-22 119-22 188v643h-150V674h150v114c68-81 145-130 255-130z"
      }, inhaleDur,
      inhale,
      shrinkR9);
  }, thinDelay);
}

function shrinkK10() {
  setTimeout(function() {
    k10.animate({
        d: "M8531 260h50v1094l559-680h64l-388 472 405 610h-61l-380-574-199 241v333h-50V260z"
      }, exhaleDur,
      exhale,
      expandK10);
  }, regularDelay);
}

function expandK10() {
  setTimeout(function() {
    k10.animate({
        d: "M8831 260h150v956l431-542h184l-376 473 386 609h-172l-314-495-139 178v317h-150V260z"
      }, inhaleDur,
      inhale,
      shrinkK10);
  }, thinDelay);
}
