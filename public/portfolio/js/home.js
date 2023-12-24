window.addEventListener('DOMContentLoaded', _ =>{

    // Attributes

    

    // Functions calls

    

    // Events

    document.querySelectorAll('.return').forEach(el => {
        el.addEventListener('click', _ =>{
            if(document.querySelector('.carte').style.transform == '')
                document.querySelector('.carte').style.transform = 'rotateY(180deg)';
            else
                document.querySelector('.carte').style.transform = '';
        });
    });
    
    
    
});


// Functions