const section=document.querySelectorAll('section');
const Nlinks=document.querySelectorAll('header nav a');
window.onscroll =()=>{
    section.forEach(sec=>{
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && to < offset +height){
            Nlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });

};


