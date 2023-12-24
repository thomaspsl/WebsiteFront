window.addEventListener('DOMContentLoaded', _ =>{

    // Attributes

    

    // Functions calls

    setCv();
    setupCookie();
    titleDynamique();
    setTranslate();


    // Events

    document.querySelectorAll('.flagToggle').forEach(el => {
        el.addEventListener('click', _ =>{
            document.querySelectorAll('.flagToggle').forEach(element => {
                element.classList.toggle('active');
            });
            changeLang();
            setCv();
        });
    });
    
    document.querySelectorAll('.dayNight').forEach(el => {
        el.addEventListener('click', _ =>{
            document.querySelectorAll('.dayNight').forEach(element => {
                element.classList.toggle('active');
            });
            document.querySelector('body').classList.toggle('dark');
            var result = (!document.querySelector('.dayNight').classList.contains('active')) ? 0 : 1;
            document.cookie = "thomaspsl_cookie_night=" + result + ";sameSite=Strict;secure=yes";
        });
    });
    
    document.querySelector('.menuToggle').addEventListener('click', _ =>{
        document.querySelector('.menuToggle').classList.toggle('active');
        document.querySelector('#navigation').classList.toggle('active');
    });

    window.addEventListener('scroll', _ =>{
        if(window.scrollY > 10){
            document.querySelector('#header').classList.add('active');
        } else{
            document.querySelector('#header').classList.remove('active');
        }

        if(window.scrollY > 150){
            document.querySelector('#up').classList.add('visible');
        } else{
            document.querySelector('#up').classList.remove('visible');
        }
    });
});


// Functions
    
function setTranslate() {
    document.querySelectorAll('[data-translate]').forEach(el =>{
        var key = el.dataset.translate;
        if(key == '')
            el.innerHTML = '';
        else
            el.innerHTML = (dictionary[key][current_lang] || 'N/A');
    });
};

function changeLang(){
    current_lang_index = ++current_lang_index % langs.length;
    document.cookie = "thomaspsl_cookie_lang=" + current_lang_index + ";sameSite=Strict;secure=yes";
    current_lang = langs[current_lang_index];
    setTranslate();
};

function titleDynamique(){
    window.addEventListener('blur', _ => {
        document.querySelector('title').textContent = dictionary['leavePage'][current_lang];
    });
    window.addEventListener('focus', _ => {
        document.querySelector('title').textContent = dictionary[document.querySelector('title').getAttribute('data-translate')][current_lang];
    });
};

function setupCookie(){
    if(getCookie("thomaspsl_cookie_lang") == 0 || getCookie("thomaspsl_cookie_lang") == undefined){
        document.querySelectorAll('.flagToggle').forEach(el => {
            el.classList.add('active');
        });
    };
    if(getCookie("thomaspsl_cookie_night") == 1){
        document.querySelectorAll('.dayNight').forEach(el => {
            el.classList.add('active');
        });
        document.querySelector('body').classList.add('dark');
    };
};

function getCookie(name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
};

function setCv(){
    if(getCookie("thomaspsl_cookie_lang") == 0 || getCookie("thomaspsl_cookie_lang") == undefined){
        document.querySelector('.CV').setAttribute('href','cv/PEISSEL_Thomas_CV_EN.pdf');
    };
    if(getCookie("thomaspsl_cookie_lang") == 1){
        document.querySelector('.CV').setAttribute('href','cv/PEISSEL_Thomas_CV_FR.pdf');
    };
}