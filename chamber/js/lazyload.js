const images = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 500px 0px'

};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};

}

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadImages(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions)


    images.forEach((image) => {
        imgObserver.observe(image);
    });
} else {
    images.forEach((image) => {
        loadImages(image);
        
    });
}

console.log()