const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  const { coords } = data;

  speed.textContent = coords.speed || '0';
  arrow.style.transform = `rotate(${coords.heading}deg)`;
}, (err) => {
  console.error('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
  console.error(err);
});