var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

drawMaze();
function drawMaze() {
    ctx.save();
    ctx.scale(1,1);
    ctx.lineWidth=2;
    ctx.lineCap="square";
    ctx.strokeStyle="#ffffff";
    ctx.fillStyle="rgba(0,0,0,0)";
    ctx.beginPath();
    ctx.moveTo(2,2);
    ctx.lineTo(226,2);
    ctx.moveTo(242,2);
    ctx.lineTo(482,2);
    ctx.moveTo(34,18);
    ctx.lineTo(98,18);
    ctx.moveTo(130,18);
    ctx.lineTo(146,18);
    ctx.moveTo(178,18);
    ctx.lineTo(210,18);
    ctx.moveTo(258,18);
    ctx.lineTo(306,18);
    ctx.moveTo(322,18);
    ctx.lineTo(354,18);
    ctx.moveTo(386,18);
    ctx.lineTo(402,18);
    ctx.moveTo(466,18);
    ctx.lineTo(482,18);
    ctx.moveTo(34,34);
    ctx.lineTo(50,34);
    ctx.moveTo(146,34);
    ctx.lineTo(162,34);
    ctx.moveTo(178,34);
    ctx.lineTo(194,34);
    ctx.moveTo(226,34);
    ctx.lineTo(274,34);
    ctx.moveTo(306,34);
    ctx.lineTo(322,34);
    ctx.moveTo(354,34);
    ctx.lineTo(386,34);
    ctx.moveTo(402,34);
    ctx.lineTo(434,34);
    ctx.moveTo(450,34);
    ctx.lineTo(466,34);
    ctx.moveTo(18,50);
    ctx.lineTo(98,50);
    ctx.moveTo(130,50);
    ctx.lineTo(178,50);
    ctx.moveTo(210,50);
    ctx.lineTo(306,50);
    ctx.moveTo(322,50);
    ctx.lineTo(370,50);
    ctx.moveTo(402,50);
    ctx.lineTo(450,50);
    ctx.moveTo(2,66);
    ctx.lineTo(66,66);
    ctx.moveTo(82,66);
    ctx.lineTo(162,66);
    ctx.moveTo(210,66);
    ctx.lineTo(290,66);
    ctx.moveTo(306,66);
    ctx.lineTo(338,66);
    ctx.moveTo(354,66);
    ctx.lineTo(370,66);
    ctx.moveTo(386,66);
    ctx.lineTo(402,66);
    ctx.moveTo(418,66);
    ctx.lineTo(434,66);
    ctx.moveTo(450,66);
    ctx.lineTo(466,66);
    ctx.moveTo(18,82);
    ctx.lineTo(34,82);
    ctx.moveTo(50,82);
    ctx.lineTo(82,82);
    ctx.moveTo(194,82);
    ctx.lineTo(226,82);
    ctx.moveTo(242,82);
    ctx.lineTo(322,82);
    ctx.moveTo(338,82);
    ctx.lineTo(386,82);
    ctx.moveTo(434,82);
    ctx.lineTo(450,82);
    ctx.moveTo(34,98);
    ctx.lineTo(82,98);
    ctx.moveTo(98,98);
    ctx.lineTo(130,98);
    ctx.moveTo(162,98);
    ctx.lineTo(178,98);
    ctx.moveTo(210,98);
    ctx.lineTo(242,98);
    ctx.moveTo(290,98);
    ctx.lineTo(338,98);
    ctx.moveTo(386,98);
    ctx.lineTo(402,98);
    ctx.moveTo(450,98);
    ctx.lineTo(466,98);
    ctx.moveTo(18,114);
    ctx.lineTo(66,114);
    ctx.moveTo(114,114);
    ctx.lineTo(210,114);
    ctx.moveTo(242,114);
    ctx.lineTo(306,114);
    ctx.moveTo(354,114);
    ctx.lineTo(370,114);
    ctx.moveTo(402,114);
    ctx.lineTo(418,114);
    ctx.moveTo(18,130);
    ctx.lineTo(34,130);
    ctx.moveTo(66,130);
    ctx.lineTo(82,130);
    ctx.moveTo(98,130);
    ctx.lineTo(130,130);
    ctx.moveTo(178,130);
    ctx.lineTo(194,130);
    ctx.moveTo(258,130);
    ctx.lineTo(290,130);
    ctx.moveTo(306,130);
    ctx.lineTo(354,130);
    ctx.moveTo(418,130);
    ctx.lineTo(434,130);
    ctx.moveTo(34,146);
    ctx.lineTo(82,146);
    ctx.moveTo(98,146);
    ctx.lineTo(130,146);
    ctx.moveTo(210,146);
    ctx.lineTo(258,146);
    ctx.moveTo(290,146);
    ctx.lineTo(306,146);
    ctx.moveTo(386,146);
    ctx.lineTo(418,146);
    ctx.moveTo(434,146);
    ctx.lineTo(482,146);
    ctx.moveTo(18,162);
    ctx.lineTo(34,162);
    ctx.moveTo(66,162);
    ctx.lineTo(98,162);
    ctx.moveTo(114,162);
    ctx.lineTo(130,162);
    ctx.moveTo(162,162);
    ctx.lineTo(178,162);
    ctx.moveTo(194,162);
    ctx.lineTo(210,162);
    ctx.moveTo(322,162);
    ctx.lineTo(338,162);
    ctx.moveTo(354,162);
    ctx.lineTo(386,162);
    ctx.moveTo(402,162);
    ctx.lineTo(434,162);
    ctx.moveTo(450,162);
    ctx.lineTo(466,162);
    ctx.moveTo(18,178);
    ctx.lineTo(50,178);
    ctx.moveTo(82,178);
    ctx.lineTo(114,178);
    ctx.moveTo(130,178);
    ctx.lineTo(146,178);
    ctx.moveTo(162,178);
    ctx.lineTo(194,178);
    ctx.moveTo(210,178);
    ctx.lineTo(322,178);
    ctx.moveTo(386,178);
    ctx.lineTo(402,178);
    ctx.moveTo(418,178);
    ctx.lineTo(434,178);
    ctx.moveTo(466,178);
    ctx.lineTo(482,178);
    ctx.moveTo(66,194);
    ctx.lineTo(82,194);
    ctx.moveTo(130,194);
    ctx.lineTo(162,194);
    ctx.moveTo(194,194);
    ctx.lineTo(226,194);
    ctx.moveTo(258,194);
    ctx.lineTo(274,194);
    ctx.moveTo(386,194);
    ctx.lineTo(418,194);
    ctx.moveTo(450,194);
    ctx.lineTo(466,194);
    ctx.moveTo(18,210);
    ctx.lineTo(34,210);
    ctx.moveTo(50,210);
    ctx.lineTo(130,210);
    ctx.moveTo(146,210);
    ctx.lineTo(178,210);
    ctx.moveTo(210,210);
    ctx.lineTo(226,210);
    ctx.moveTo(258,210);
    ctx.lineTo(290,210);
    ctx.moveTo(322,210);
    ctx.lineTo(354,210);
    ctx.moveTo(370,210);
    ctx.lineTo(402,210);
    ctx.moveTo(418,210);
    ctx.lineTo(450,210);
    ctx.moveTo(466,210);
    ctx.lineTo(482,210);
    ctx.moveTo(2,226);
    ctx.lineTo(18,226);
    ctx.moveTo(34,226);
    ctx.lineTo(50,226);
    ctx.moveTo(82,226);
    ctx.lineTo(114,226);
    ctx.moveTo(130,226);
    ctx.lineTo(194,226);
    ctx.moveTo(226,226);
    ctx.lineTo(258,226);
    ctx.moveTo(306,226);
    ctx.lineTo(322,226);
    ctx.moveTo(338,226);
    ctx.lineTo(354,226);
    ctx.moveTo(386,226);
    ctx.lineTo(418,226);
    ctx.moveTo(466,226);
    ctx.lineTo(482,226);
    ctx.moveTo(34,242);
    ctx.lineTo(82,242);
    ctx.moveTo(114,242);
    ctx.lineTo(162,242);
    ctx.moveTo(194,242);
    ctx.lineTo(226,242);
    ctx.moveTo(242,242);
    ctx.lineTo(274,242);
    ctx.moveTo(290,242);
    ctx.lineTo(306,242);
    ctx.moveTo(322,242);
    ctx.lineTo(338,242);
    ctx.moveTo(370,242);
    ctx.lineTo(402,242);
    ctx.moveTo(418,242);
    ctx.lineTo(434,242);
    ctx.moveTo(450,242);
    ctx.lineTo(466,242);
    ctx.moveTo(66,258);
    ctx.lineTo(98,258);
    ctx.moveTo(114,258);
    ctx.lineTo(130,258);
    ctx.moveTo(162,258);
    ctx.lineTo(194,258);
    ctx.moveTo(226,258);
    ctx.lineTo(242,258);
    ctx.moveTo(258,258);
    ctx.lineTo(290,258);
    ctx.moveTo(306,258);
    ctx.lineTo(370,258);
    ctx.moveTo(386,258);
    ctx.lineTo(418,258);
    ctx.moveTo(434,258);
    ctx.lineTo(450,258);
    ctx.moveTo(466,258);
    ctx.lineTo(482,258);
    ctx.moveTo(18,274);
    ctx.lineTo(66,274);
    ctx.moveTo(82,274);
    ctx.lineTo(114,274);
    ctx.moveTo(146,274);
    ctx.lineTo(178,274);
    ctx.moveTo(194,274);
    ctx.lineTo(210,274);
    ctx.moveTo(226,274);
    ctx.lineTo(242,274);
    ctx.moveTo(290,274);
    ctx.lineTo(322,274);
    ctx.moveTo(338,274);
    ctx.lineTo(354,274);
    ctx.moveTo(370,274);
    ctx.lineTo(386,274);
    ctx.moveTo(402,274);
    ctx.lineTo(418,274);
    ctx.moveTo(66,290);
    ctx.lineTo(98,290);
    ctx.moveTo(114,290);
    ctx.lineTo(210,290);
    ctx.moveTo(242,290);
    ctx.lineTo(258,290);
    ctx.moveTo(306,290);
    ctx.lineTo(338,290);
    ctx.moveTo(2,306);
    ctx.lineTo(34,306);
    ctx.moveTo(82,306);
    ctx.lineTo(114,306);
    ctx.moveTo(210,306);
    ctx.lineTo(226,306);
    ctx.moveTo(258,306);
    ctx.lineTo(274,306);
    ctx.moveTo(290,306);
    ctx.lineTo(322,306);
    ctx.moveTo(386,306);
    ctx.lineTo(402,306);
    ctx.moveTo(434,306);
    ctx.lineTo(466,306);
    ctx.moveTo(34,322);
    ctx.lineTo(50,322);
    ctx.moveTo(82,322);
    ctx.lineTo(210,322);
    ctx.moveTo(226,322);
    ctx.lineTo(242,322);
    ctx.moveTo(306,322);
    ctx.lineTo(322,322);
    ctx.moveTo(434,322);
    ctx.lineTo(466,322);
    ctx.moveTo(18,338);
    ctx.lineTo(34,338);
    ctx.moveTo(50,338);
    ctx.lineTo(82,338);
    ctx.moveTo(114,338);
    ctx.lineTo(178,338);
    ctx.moveTo(194,338);
    ctx.lineTo(226,338);
    ctx.moveTo(242,338);
    ctx.lineTo(306,338);
    ctx.moveTo(322,338);
    ctx.lineTo(338,338);
    ctx.moveTo(370,338);
    ctx.lineTo(386,338);
    ctx.moveTo(434,338);
    ctx.lineTo(482,338);
    ctx.moveTo(18,354);
    ctx.lineTo(34,354);
    ctx.moveTo(82,354);
    ctx.lineTo(114,354);
    ctx.moveTo(162,354);
    ctx.lineTo(194,354);
    ctx.moveTo(226,354);
    ctx.lineTo(242,354);
    ctx.moveTo(274,354);
    ctx.lineTo(290,354);
    ctx.moveTo(354,354);
    ctx.lineTo(466,354);
    ctx.moveTo(2,370);
    ctx.lineTo(18,370);
    ctx.moveTo(34,370);
    ctx.lineTo(66,370);
    ctx.moveTo(82,370);
    ctx.lineTo(98,370);
    ctx.moveTo(130,370);
    ctx.lineTo(162,370);
    ctx.moveTo(178,370);
    ctx.lineTo(194,370);
    ctx.moveTo(210,370);
    ctx.lineTo(226,370);
    ctx.moveTo(274,370);
    ctx.lineTo(338,370);
    ctx.moveTo(370,370);
    ctx.lineTo(402,370);
    ctx.moveTo(466,370);
    ctx.lineTo(482,370);
    ctx.moveTo(34,386);
    ctx.lineTo(50,386);
    ctx.moveTo(66,386);
    ctx.lineTo(82,386);
    ctx.moveTo(194,386);
    ctx.lineTo(210,386);
    ctx.moveTo(226,386);
    ctx.lineTo(242,386);
    ctx.moveTo(258,386);
    ctx.lineTo(274,386);
    ctx.moveTo(338,386);
    ctx.lineTo(370,386);
    ctx.moveTo(386,386);
    ctx.lineTo(466,386);
    ctx.moveTo(18,402);
    ctx.lineTo(34,402);
    ctx.moveTo(50,402);
    ctx.lineTo(66,402);
    ctx.moveTo(98,402);
    ctx.lineTo(114,402);
    ctx.moveTo(130,402);
    ctx.lineTo(146,402);
    ctx.moveTo(210,402);
    ctx.lineTo(226,402);
    ctx.moveTo(242,402);
    ctx.lineTo(354,402);
    ctx.moveTo(370,402);
    ctx.lineTo(386,402);
    ctx.moveTo(434,402);
    ctx.lineTo(482,402);
    ctx.moveTo(2,418);
    ctx.lineTo(18,418);
    ctx.moveTo(34,418);
    ctx.lineTo(98,418);
    ctx.moveTo(114,418);
    ctx.lineTo(130,418);
    ctx.moveTo(146,418);
    ctx.lineTo(178,418);
    ctx.moveTo(226,418);
    ctx.lineTo(242,418);
    ctx.moveTo(258,418);
    ctx.lineTo(290,418);
    ctx.moveTo(322,418);
    ctx.lineTo(338,418);
    ctx.moveTo(354,418);
    ctx.lineTo(370,418);
    ctx.moveTo(386,418);
    ctx.lineTo(434,418);
    ctx.moveTo(450,418);
    ctx.lineTo(466,418);
    ctx.moveTo(18,434);
    ctx.lineTo(34,434);
    ctx.moveTo(82,434);
    ctx.lineTo(114,434);
    ctx.moveTo(130,434);
    ctx.lineTo(146,434);
    ctx.moveTo(162,434);
    ctx.lineTo(194,434);
    ctx.moveTo(210,434);
    ctx.lineTo(258,434);
    ctx.moveTo(274,434);
    ctx.lineTo(306,434);
    ctx.moveTo(338,434);
    ctx.lineTo(354,434);
    ctx.moveTo(370,434);
    ctx.lineTo(386,434);
    ctx.moveTo(402,434);
    ctx.lineTo(418,434);
    ctx.moveTo(434,434);
    ctx.lineTo(450,434);
    ctx.moveTo(18,450);
    ctx.lineTo(50,450);
    ctx.moveTo(114,450);
    ctx.lineTo(130,450);
    ctx.moveTo(146,450);
    ctx.lineTo(226,450);
    ctx.moveTo(242,450);
    ctx.lineTo(274,450);
    ctx.moveTo(306,450);
    ctx.lineTo(322,450);
    ctx.moveTo(370,450);
    ctx.lineTo(386,450);
    ctx.moveTo(450,450);
    ctx.lineTo(482,450);
    ctx.moveTo(2,466);
    ctx.lineTo(18,466);
    ctx.moveTo(50,466);
    ctx.lineTo(66,466);
    ctx.moveTo(98,466);
    ctx.lineTo(114,466);
    ctx.moveTo(146,466);
    ctx.lineTo(162,466);
    ctx.moveTo(194,466);
    ctx.lineTo(242,466);
    ctx.moveTo(274,466);
    ctx.lineTo(306,466);
    ctx.moveTo(322,466);
    ctx.lineTo(338,466);
    ctx.moveTo(354,466);
    ctx.lineTo(370,466);
    ctx.moveTo(2,482);
    ctx.lineTo(242,482);
    ctx.moveTo(258,482);
    ctx.lineTo(482,482);
    ctx.moveTo(2,2);
    ctx.lineTo(2,482);
    ctx.moveTo(18,18);
    ctx.lineTo(18,50);
    ctx.moveTo(18,98);
    ctx.lineTo(18,162);
    ctx.moveTo(18,178);
    ctx.lineTo(18,210);
    ctx.moveTo(18,226);
    ctx.lineTo(18,242);
    ctx.moveTo(18,258);
    ctx.lineTo(18,290);
    ctx.moveTo(18,306);
    ctx.lineTo(18,338);
    ctx.moveTo(18,370);
    ctx.lineTo(18,402);
    ctx.moveTo(34,66);
    ctx.lineTo(34,98);
    ctx.moveTo(34,194);
    ctx.lineTo(34,226);
    ctx.moveTo(34,242);
    ctx.lineTo(34,258);
    ctx.moveTo(34,290);
    ctx.lineTo(34,306);
    ctx.moveTo(34,338);
    ctx.lineTo(34,354);
    ctx.moveTo(34,370);
    ctx.lineTo(34,386);
    ctx.moveTo(34,418);
    ctx.lineTo(34,434);
    ctx.moveTo(34,450);
    ctx.lineTo(34,482);
    ctx.moveTo(50,18);
    ctx.lineTo(50,34);
    ctx.moveTo(50,114);
    ctx.lineTo(50,130);
    ctx.moveTo(50,146);
    ctx.lineTo(50,210);
    ctx.moveTo(50,242);
    ctx.lineTo(50,306);
    ctx.moveTo(50,322);
    ctx.lineTo(50,370);
    ctx.moveTo(50,386);
    ctx.lineTo(50,418);
    ctx.moveTo(50,434);
    ctx.lineTo(50,450);
    ctx.moveTo(66,34);
    ctx.lineTo(66,50);
    ctx.moveTo(66,114);
    ctx.lineTo(66,130);
    ctx.moveTo(66,162);
    ctx.lineTo(66,194);
    ctx.moveTo(66,210);
    ctx.lineTo(66,242);
    ctx.moveTo(66,274);
    ctx.lineTo(66,322);
    ctx.moveTo(66,354);
    ctx.lineTo(66,386);
    ctx.moveTo(66,418);
    ctx.lineTo(66,466);
    ctx.moveTo(82,34);
    ctx.lineTo(82,82);
    ctx.moveTo(82,98);
    ctx.lineTo(82,114);
    ctx.moveTo(82,130);
    ctx.lineTo(82,146);
    ctx.moveTo(82,258);
    ctx.lineTo(82,274);
    ctx.moveTo(82,322);
    ctx.lineTo(82,338);
    ctx.moveTo(82,386);
    ctx.lineTo(82,402);
    ctx.moveTo(82,434);
    ctx.lineTo(82,450);
    ctx.moveTo(82,466);
    ctx.lineTo(82,482);
    ctx.moveTo(98,2);
    ctx.lineTo(98,34);
    ctx.moveTo(98,82);
    ctx.lineTo(98,130);
    ctx.moveTo(98,146);
    ctx.lineTo(98,178);
    ctx.moveTo(98,194);
    ctx.lineTo(98,210);
    ctx.moveTo(98,226);
    ctx.lineTo(98,258);
    ctx.moveTo(98,290);
    ctx.lineTo(98,306);
    ctx.moveTo(98,322);
    ctx.lineTo(98,338);
    ctx.moveTo(98,370);
    ctx.lineTo(98,402);
    ctx.moveTo(98,434);
    ctx.lineTo(98,466);
    ctx.moveTo(114,18);
    ctx.lineTo(114,82);
    ctx.moveTo(114,178);
    ctx.lineTo(114,210);
    ctx.moveTo(114,226);
    ctx.lineTo(114,242);
    ctx.moveTo(114,258);
    ctx.lineTo(114,290);
    ctx.moveTo(114,306);
    ctx.lineTo(114,322);
    ctx.moveTo(114,338);
    ctx.lineTo(114,434);
    ctx.moveTo(114,466);
    ctx.lineTo(114,482);
    ctx.moveTo(130,18);
    ctx.lineTo(130,50);
    ctx.moveTo(130,66);
    ctx.lineTo(130,98);
    ctx.moveTo(130,130);
    ctx.lineTo(130,146);
    ctx.moveTo(130,162);
    ctx.lineTo(130,178);
    ctx.moveTo(130,210);
    ctx.lineTo(130,226);
    ctx.moveTo(130,274);
    ctx.lineTo(130,306);
    ctx.moveTo(130,354);
    ctx.lineTo(130,402);
    ctx.moveTo(130,434);
    ctx.lineTo(130,466);
    ctx.moveTo(146,82);
    ctx.lineTo(146,178);
    ctx.moveTo(146,194);
    ctx.lineTo(146,210);
    ctx.moveTo(146,242);
    ctx.lineTo(146,258);
    ctx.moveTo(146,306);
    ctx.lineTo(146,322);
    ctx.moveTo(146,338);
    ctx.lineTo(146,354);
    ctx.moveTo(146,386);
    ctx.lineTo(146,434);
    ctx.moveTo(146,450);
    ctx.lineTo(146,466);
    ctx.moveTo(162,2);
    ctx.lineTo(162,34);
    ctx.moveTo(162,66);
    ctx.lineTo(162,98);
    ctx.moveTo(162,114);
    ctx.lineTo(162,146);
    ctx.moveTo(162,178);
    ctx.lineTo(162,194);
    ctx.moveTo(162,258);
    ctx.lineTo(162,274);
    ctx.moveTo(162,290);
    ctx.lineTo(162,306);
    ctx.moveTo(162,370);
    ctx.lineTo(162,402);
    ctx.moveTo(178,18);
    ctx.lineTo(178,34);
    ctx.moveTo(178,50);
    ctx.lineTo(178,98);
    ctx.moveTo(178,130);
    ctx.lineTo(178,162);
    ctx.moveTo(178,194);
    ctx.lineTo(178,210);
    ctx.moveTo(178,226);
    ctx.lineTo(178,242);
    ctx.moveTo(178,290);
    ctx.lineTo(178,306);
    ctx.moveTo(178,322);
    ctx.lineTo(178,338);
    ctx.moveTo(178,370);
    ctx.lineTo(178,418);
    ctx.moveTo(178,450);
    ctx.lineTo(178,482);
    ctx.moveTo(194,34);
    ctx.lineTo(194,114);
    ctx.moveTo(194,130);
    ctx.lineTo(194,226);
    ctx.moveTo(194,242);
    ctx.lineTo(194,258);
    ctx.moveTo(194,274);
    ctx.lineTo(194,290);
    ctx.moveTo(194,306);
    ctx.lineTo(194,322);
    ctx.moveTo(194,338);
    ctx.lineTo(194,370);
    ctx.moveTo(194,386);
    ctx.lineTo(194,434);
    ctx.moveTo(210,18);
    ctx.lineTo(210,50);
    ctx.moveTo(210,114);
    ctx.lineTo(210,146);
    ctx.moveTo(210,210);
    ctx.lineTo(210,242);
    ctx.moveTo(210,258);
    ctx.lineTo(210,274);
    ctx.moveTo(210,290);
    ctx.lineTo(210,306);
    ctx.moveTo(210,354);
    ctx.lineTo(210,434);
    ctx.moveTo(226,18);
    ctx.lineTo(226,34);
    ctx.moveTo(226,66);
    ctx.lineTo(226,82);
    ctx.moveTo(226,98);
    ctx.lineTo(226,130);
    ctx.moveTo(226,146);
    ctx.lineTo(226,162);
    ctx.moveTo(226,226);
    ctx.lineTo(226,242);
    ctx.moveTo(226,274);
    ctx.lineTo(226,354);
    ctx.moveTo(242,2);
    ctx.lineTo(242,34);
    ctx.moveTo(242,82);
    ctx.lineTo(242,98);
    ctx.moveTo(242,114);
    ctx.lineTo(242,146);
    ctx.moveTo(242,162);
    ctx.lineTo(242,226);
    ctx.moveTo(242,242);
    ctx.lineTo(242,274);
    ctx.moveTo(242,290);
    ctx.lineTo(242,322);
    ctx.moveTo(242,354);
    ctx.lineTo(242,418);
    ctx.moveTo(242,450);
    ctx.lineTo(242,482);
    ctx.moveTo(258,82);
    ctx.lineTo(258,98);
    ctx.moveTo(258,146);
    ctx.lineTo(258,162);
    ctx.moveTo(258,194);
    ctx.lineTo(258,210);
    ctx.moveTo(258,274);
    ctx.lineTo(258,290);
    ctx.moveTo(258,306);
    ctx.lineTo(258,386);
    ctx.moveTo(258,418);
    ctx.lineTo(258,450);
    ctx.moveTo(258,466);
    ctx.lineTo(258,482);
    ctx.moveTo(274,98);
    ctx.lineTo(274,114);
    ctx.moveTo(274,130);
    ctx.lineTo(274,162);
    ctx.moveTo(274,210);
    ctx.lineTo(274,322);
    ctx.moveTo(274,354);
    ctx.lineTo(274,370);
    ctx.moveTo(274,450);
    ctx.lineTo(274,466);
    ctx.moveTo(290,18);
    ctx.lineTo(290,50);
    ctx.moveTo(290,130);
    ctx.lineTo(290,146);
    ctx.moveTo(290,162);
    ctx.lineTo(290,242);
    ctx.moveTo(290,258);
    ctx.lineTo(290,290);
    ctx.moveTo(290,306);
    ctx.lineTo(290,338);
    ctx.moveTo(290,370);
    ctx.lineTo(290,402);
    ctx.moveTo(290,434);
    ctx.lineTo(290,450);
    ctx.moveTo(306,50);
    ctx.lineTo(306,82);
    ctx.moveTo(306,114);
    ctx.lineTo(306,130);
    ctx.moveTo(306,146);
    ctx.lineTo(306,178);
    ctx.moveTo(306,194);
    ctx.lineTo(306,226);
    ctx.moveTo(306,242);
    ctx.lineTo(306,258);
    ctx.moveTo(306,322);
    ctx.lineTo(306,354);
    ctx.moveTo(306,370);
    ctx.lineTo(306,386);
    ctx.moveTo(306,402);
    ctx.lineTo(306,434);
    ctx.moveTo(306,450);
    ctx.lineTo(306,466);
    ctx.moveTo(322,18);
    ctx.lineTo(322,50);
    ctx.moveTo(322,114);
    ctx.lineTo(322,130);
    ctx.moveTo(322,146);
    ctx.lineTo(322,162);
    ctx.moveTo(322,178);
    ctx.lineTo(322,242);
    ctx.moveTo(322,338);
    ctx.lineTo(322,370);
    ctx.moveTo(322,386);
    ctx.lineTo(322,402);
    ctx.moveTo(322,418);
    ctx.lineTo(322,450);
    ctx.moveTo(322,466);
    ctx.lineTo(322,482);
    ctx.moveTo(338,18);
    ctx.lineTo(338,34);
    ctx.moveTo(338,66);
    ctx.lineTo(338,114);
    ctx.moveTo(338,146);
    ctx.lineTo(338,210);
    ctx.moveTo(338,290);
    ctx.lineTo(338,354);
    ctx.moveTo(338,434);
    ctx.lineTo(338,466);
    ctx.moveTo(354,2);
    ctx.lineTo(354,18);
    ctx.moveTo(354,50);
    ctx.lineTo(354,66);
    ctx.moveTo(354,98);
    ctx.lineTo(354,194);
    ctx.moveTo(354,210);
    ctx.lineTo(354,242);
    ctx.moveTo(354,274);
    ctx.lineTo(354,386);
    ctx.moveTo(354,402);
    ctx.lineTo(354,466);
    ctx.moveTo(370,18);
    ctx.lineTo(370,34);
    ctx.moveTo(370,82);
    ctx.lineTo(370,98);
    ctx.moveTo(370,114);
    ctx.lineTo(370,146);
    ctx.moveTo(370,162);
    ctx.lineTo(370,226);
    ctx.moveTo(370,242);
    ctx.lineTo(370,322);
    ctx.moveTo(370,370);
    ctx.lineTo(370,402);
    ctx.moveTo(370,434);
    ctx.lineTo(370,450);
    ctx.moveTo(386,2);
    ctx.lineTo(386,18);
    ctx.moveTo(386,34);
    ctx.lineTo(386,82);
    ctx.moveTo(386,114);
    ctx.lineTo(386,162);
    ctx.moveTo(386,290);
    ctx.lineTo(386,338);
    ctx.moveTo(386,386);
    ctx.lineTo(386,418);
    ctx.moveTo(386,450);
    ctx.lineTo(386,482);
    ctx.moveTo(402,18);
    ctx.lineTo(402,34);
    ctx.moveTo(402,66);
    ctx.lineTo(402,130);
    ctx.moveTo(402,162);
    ctx.lineTo(402,194);
    ctx.moveTo(402,274);
    ctx.lineTo(402,306);
    ctx.moveTo(402,322);
    ctx.lineTo(402,354);
    ctx.moveTo(402,402);
    ctx.lineTo(402,418);
    ctx.moveTo(402,434);
    ctx.lineTo(402,466);
    ctx.moveTo(418,2);
    ctx.lineTo(418,18);
    ctx.moveTo(418,82);
    ctx.lineTo(418,114);
    ctx.moveTo(418,130);
    ctx.lineTo(418,162);
    ctx.moveTo(418,194);
    ctx.lineTo(418,274);
    ctx.moveTo(418,290);
    ctx.lineTo(418,354);
    ctx.moveTo(418,370);
    ctx.lineTo(418,402);
    ctx.moveTo(418,434);
    ctx.lineTo(418,482);
    ctx.moveTo(434,18);
    ctx.lineTo(434,34);
    ctx.moveTo(434,66);
    ctx.lineTo(434,146);
    ctx.moveTo(434,162);
    ctx.lineTo(434,194);
    ctx.moveTo(434,226);
    ctx.lineTo(434,242);
    ctx.moveTo(434,258);
    ctx.lineTo(434,306);
    ctx.moveTo(434,322);
    ctx.lineTo(434,338);
    ctx.moveTo(434,370);
    ctx.lineTo(434,386);
    ctx.moveTo(434,418);
    ctx.lineTo(434,450);
    ctx.moveTo(434,466);
    ctx.lineTo(434,482);
    ctx.moveTo(450,2);
    ctx.lineTo(450,66);
    ctx.moveTo(450,98);
    ctx.lineTo(450,130);
    ctx.moveTo(450,162);
    ctx.lineTo(450,290);
    ctx.moveTo(450,354);
    ctx.lineTo(450,370);
    ctx.moveTo(450,402);
    ctx.lineTo(450,418);
    ctx.moveTo(450,450);
    ctx.lineTo(450,466);
    ctx.moveTo(466,50);
    ctx.lineTo(466,98);
    ctx.moveTo(466,114);
    ctx.lineTo(466,146);
    ctx.moveTo(466,274);
    ctx.lineTo(466,306);
    ctx.moveTo(466,370);
    ctx.lineTo(466,386);
    ctx.moveTo(466,418);
    ctx.lineTo(466,434);
    ctx.moveTo(466,466);
    ctx.lineTo(466,482);
    ctx.moveTo(482,2);
    ctx.lineTo(482,482);
    ctx.stroke();
    ctx.save();
}