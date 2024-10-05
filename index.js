const layer1 = document.querySelector('#black');
    const layer2 = document.querySelector('#purple');
    const layer3 = document.querySelector('#blue');

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;

        layer1.style.transform = `translateY(${scrollPosition * 0.6}px)`;
        layer2.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        layer3.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    })
