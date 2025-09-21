const btn = document.getElementById("startBtn");
const garden = document.getElementById("garden");
const message = document.getElementById("message");
const birds = document.getElementById("birds");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  garden.style.display = "block";
  birds.play();

  // Flores infinitas
  setInterval(() => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.bottom = Math.random() * 100 + "px";

    for (let i = 0; i < 8; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.transform = `rotate(${i * 45}deg) translateY(-20px)`;
      flower.appendChild(petal);
    }

    const center = document.createElement("div");
    center.className = "center";
    flower.appendChild(center);

    garden.appendChild(flower);
  }, 400);

  // Mariposas aleatorias
  setInterval(() => {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = Math.random()*window.innerWidth+"px";
    butterfly.style.bottom = Math.random()*200+"px";
    butterfly.style.animationDuration = (4+Math.random()*6)+"s";
    garden.appendChild(butterfly);
    setTimeout(()=>garden.removeChild(butterfly), 10000);
  }, 1000);

  // Mensaje animado
  setTimeout(() => {
    message.style.display = "block";
  }, 2000);
});