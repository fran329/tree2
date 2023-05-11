const foto = [
'https://lh3.googleusercontent.com/kUG6mXGwrquYHC3rdvDVE60y09MXn3aXkmS2nJM_XAmY1YqGlQv32EOfAU_0aGUpzVl9rTu5Eolydu9SbyjYtrtrw6qB6JbAgSZnxoAsIQl0F-aVyIUkCktoHQKkdlQgjAyu8djg0w=w2400',
 'https://lh3.googleusercontent.com/DJL48ko1IZU2E5azykfws-PfvlldCmLkWS8-ZX1sN6aIT-cZoG7V_OaL0K5_unQQmqtAd-_he32xuf5qvDPQ7nEsE7Bo5FcaJ0Z194l8_NE8MQhwAaFwC7YEIxXBskNzeAn3WQpM3g=w2400',
 'https://lh3.googleusercontent.com/0Q9J6ubQUjcObitVCYQzbqnse32WGTu7EklGql3xJLXeGjs5AbEezdXOSHSRaKiKP0AgepHyhqrLXzSf6RfBWMw8dmKkc7AFfbYCH9i3107Wz1mOBF-MtRz5SIjAoHp4JYO75n5YJg=w2400',
   
];

let = currentImageIndex= 0;

function updateImage(){
    const imageElement = document.getElementById ('foto');
currentImageIndex = (currentImageIndex + 1) % foto.length;
imageElement.src = foto [currentImageIndex];
}

setInterval (updateImage, 3000);
