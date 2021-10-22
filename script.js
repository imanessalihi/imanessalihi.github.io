//close open
const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');

const imagesArr = [
  'images/photo12.jpg',
  'images/photo13.jpg',
  'images/photo4.jpg',
  'images/photo3.jpg',
  'images/photo9.jpg',
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo6.jpg', 
  'images/photo7.jpg',
];

function renderImage() {
  const galleryDiv = document.getElementById('gallery');
  for (let i = 0; i < imagesArr.length; i++) {
    const currentEl = imagesArr[i];
    const image = document.createElement('img');
    image.setAttribute('src', currentEl);
    image.onclick = function () {
      openFullImg(currentEl);
    };
    galleryDiv.appendChild(image);
  }
}


renderImage();

function openFullImg(photo) {
  console.log('photo', photo);
  fullImgBox.style.display = 'flex';
  fullImg.src = photo;
}

function closeFullImg() {
  fullImgBox.style.display = 'none';
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    fullImgBox.style.display = 'none';
  }
});

//navigation

function goToPrev() {
  const currentImageSrc = fullImg.getAttribute('src');
  const indexOfCurrentImgSrc = imagesArr.indexOf(currentImageSrc);
  let prevSrc;
  if (indexOfCurrentImgSrc > 0) {
    prevSrc = imagesArr[indexOfCurrentImgSrc - 1];
  } else {
    prevSrc = imagesArr[imagesArr.length - 1];
  }

  fullImg.setAttribute('src', prevSrc);
}

function goToNext() {
  const currentImageSrc = fullImg.getAttribute('src');
  const indexOfCurrentImgSrc = imagesArr.indexOf(currentImageSrc);
  const nextSrc = imagesArr[indexOfCurrentImgSrc + 1];
  if (indexOfCurrentImgSrc < imagesArr.length - 1) {
    fullImg.setAttribute('src', nextSrc);
  } else {
    fullImg.setAttribute('src', imagesArr[0]);
  }
}

//Form
function validateForm(e) {
  e.preventDefault();
  var name = document.contactform.name.value;
  var email = document.contactform.email.value;
  var subject = document.contactform.subject.value;
  if (name.length == 0) alert(`name is required`);
  if (email.length < 10) alert(`email is incorrect`);
  if (subject.length < 4) alert(`please include a subject`);
}


