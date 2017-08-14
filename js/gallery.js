/**
 * Created by anna on 26.05.17.
 */
var galleryImg1 = document.getElementById("img1");
var galleryImg2 = document.getElementById("img2");
var galleryImg3 = document.getElementById("img3");
var galleryImg4 = document.getElementById("img4");
var galleryImg5 = document.getElementById("img5");
var galleryImg6 = document.getElementById("img6");
var galleryImg7 = document.getElementById("img7");
var galleryImg8 = document.getElementById("img8");
var galleryImg9 = document.getElementById("img9");
var galleryImg10 = document.getElementById("img10");
var galleryImg11 = document.getElementById("img11");
var image1ArrayForGallery = ["img/galleryArray/1/pexels-photo-112615.jpeg","img/galleryArray/1/pexels-photo-221529.jpeg","img/galleryArray/1/pexels-photo-147503.jpeg"];
var image2ArrayForGallery = ["img/galleryArray/2/pexels-photo-48716.jpeg","img/galleryArray/2/pexels-photo-281607.jpeg","img/galleryArray/2/pexels-photo-390302.jpeg"];
var image3ArrayForGallery = ["img/galleryArray/3/pexels-photo-407124.jpeg","img/galleryArray/3/pexels-photo-415702.jpeg","img/galleryArray/3/rio-de-janeiro-olympics-2016-niteroi-brazil-161179.jpeg"];
var image4ArrayForGallery = ["img/galleryArray/4/pexels-photo-167936.jpeg","img/galleryArray/4/pexels-photo-262518.jpeg","img/galleryArray/4/pexels-photo-425180.jpeg"];
var image5ArrayForGallery = ["img/galleryArray/5/pexels-photo-121742.jpeg","img/galleryArray/5/pexels-photo-404460.jpeg","img/galleryArray/5/pexels-photo-418379.jpeg"];
var image6ArrayForGallery = ["img/galleryArray/6/pexels-photo-198197.jpeg","img/galleryArray/6/pexels-photo-417298.jpeg","img/galleryArray/6/pexels-photo-422870.jpeg"];
var image7ArrayForGallery = ["img/galleryArray/7/pexels-photo-52669.jpeg","img/galleryArray/7/pexels-photo-351698.jpeg","img/galleryArray/7/pexels-photo-393468.jpeg"];
var image8ArrayForGallery = ["img/galleryArray/8/pexels-photo-88758.jpeg","img/galleryArray/8/pexels-photo-197509.jpeg","img/galleryArray/8/pexels-photo-209631.jpeg"];
var image9ArrayForGallery = ["img/galleryArray/9/pexels-photo-201318.jpeg","img/galleryArray/9/pexels-photo-407151.jpeg","img/galleryArray/9/pexels-photo-410285.jpeg"];
var image10ArrayForGallery = ["img/galleryArray/10/pexels-photo-219962.jpeg","img/galleryArray/10/pexels-photo-257433.jpeg","img/galleryArray/10/pexels-photo-380483.jpeg"];
var image11ArrayForGallery = ["img/galleryArray/11/pexels-photo-109023.jpeg","img/galleryArray/11/pexels-photo-256937.jpeg","img/galleryArray/11/pexels-photo-268773.jpeg"];
var imageIndex = 0;
function changeImage1 () {
    galleryImg1.setAttribute("src",image1ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image1ArrayForGallery.length) {
        imageIndex = 0;
    }
}
function changeImage2() {
    galleryImg2.setAttribute("src",image2ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image2ArrayForGallery.length) {
        imageIndex = 0;
    }
}
function changeImage3() {
    galleryImg3.setAttribute("src",image3ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image3ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage4() {
    galleryImg4.setAttribute("src",image4ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image4ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage5() {
    galleryImg5.setAttribute("src",image5ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image5ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage6() {
    galleryImg6.setAttribute("src",image6ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image6ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage7() {
    galleryImg7.setAttribute("src",image7ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image7ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage8() {
    galleryImg8.setAttribute("src",image8ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image8ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage9() {
    galleryImg9.setAttribute("src",image9ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image9ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage10() {
    galleryImg10.setAttribute("src",image10ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image10ArrayForGallery.length) {
        imageIndex = 0;
    }
}function changeImage11() {
    galleryImg11.setAttribute("src",image11ArrayForGallery[imageIndex]);
    imageIndex++;
    if (imageIndex >= image11ArrayForGallery.length) {
        imageIndex = 0;
    }
}
var intervalHandle1 = setInterval(changeImage1,11000);
var intervalHandle2 = setInterval(changeImage2,12000);
var intervalHandle3 = setInterval(changeImage3,13000);
var intervalHandle4 = setInterval(changeImage4,14000);
var intervalHandle5 = setInterval(changeImage5,15000);
var intervalHandle6 = setInterval(changeImage6,16000);
var intervalHandle7 = setInterval(changeImage7,17000);
var intervalHandle8 = setInterval(changeImage8,18000);
var intervalHandle9 = setInterval(changeImage9,19000);
var intervalHandle10 = setInterval(changeImage10,20000);
var intervalHandle11 = setInterval(changeImage11,21000);
galleryImg1.onclick = function () {
    clearInterval(intervalHandle1);
};
galleryImg2.onclick = function () {
    clearInterval(intervalHandle2);
};
galleryImg3.onclick = function () {
    clearInterval(intervalHandle3);
};
galleryImg4.onclick = function () {
    clearInterval(intervalHandle4);
};
galleryImg5.onclick = function () {
    clearInterval(intervalHandle5);
};
galleryImg6.onclick = function () {
    clearInterval(intervalHandle6);
};
galleryImg7.onclick = function () {
    clearInterval(intervalHandle7);
};
galleryImg8.onclick = function () {
    clearInterval(intervalHandle8);
};
galleryImg9.onclick = function () {
    clearInterval(intervalHandle9);
};
galleryImg10.onclick = function () {
    clearInterval(intervalHandle10);
};
galleryImg11.onclick = function () {
    clearInterval(intervalHandle11);
};