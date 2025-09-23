// diferenciacion de var y let en ciclo

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


for (var i = 0; i < 3; i++) {
  console.log(i);
}




for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}