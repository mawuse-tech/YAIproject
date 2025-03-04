const serviceOne = document.getElementById('service1')
const serviceBtnone = document.getElementById('service-btn1')
const closeServiceOne = document.getElementById('close-service-1')

const serviceTwo = document.getElementById('service2')
const serviceBtnTwo = document.getElementById('service-btn2')
const closeServicetwo = document.getElementById('close-service-2')

const serviceThree = document.getElementById('service3')
const serviceBtnThree = document.getElementById('service-btn3')
const closeServiceThree = document.getElementById('close-service-3')

const videoBtn = document.getElementById('vid-btn')
const video = document.getElementById('video')

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

serviceBtnone.addEventListener('click', function () {
  serviceOne.style.display = 'inline'
})

closeServiceOne.addEventListener("click", function () {
  serviceOne.style.display = 'none';
})


serviceBtnTwo.addEventListener('click', function () {
  serviceTwo.style.display = 'inline'
})

closeServicetwo.addEventListener("click", function () {
  serviceTwo.style.display = 'none';
})


serviceBtnThree.addEventListener('click', function () {
  serviceThree.style.display = 'inline'
})

closeServiceThree.addEventListener("click", function () {
  serviceThree.style.display = 'none';
})

videoBtn.addEventListener('click', function () {
  video.style.display = 'inline'
})

