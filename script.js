let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let pictureDom = document.querySelector('.picture');
let ImgDom = document.querySelector('.picture .list');
let thumbnailDom = document.querySelector('.picture .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('.picture .list .item');
    let itemThumbnail = document.querySelectorAll('.picture .thumbnail .item');

    if(type === 'next'){
        ImgDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        pictureDom.classList.add('next');
    }

    else{
        ImgDom.prepend(itemSlider[itemSlider.length-1]);
        thumbnailDom.prepend(itemThumbnail[itemThumbnail.length-1]);
        pictureDom.classList.add('prev');
    }

    setTimeout(() => {
        pictureDom.classList.remove('next');
        pictureDom.classList.remove('prev');
    }, 500); // match the animation duration
}