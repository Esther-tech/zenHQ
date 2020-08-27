//-----------------Loader -----------------------

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
})




//-----------------Fade-in items ----------------

//Variables

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2
};



//Functions

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            console.log(`${entry} is not close yet`);
            return;
        } else {
            console.log(`${entry} fading begins`);
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


