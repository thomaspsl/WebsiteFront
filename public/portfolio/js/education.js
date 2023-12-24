window.addEventListener('DOMContentLoaded', _ =>{

    // Attributes



    // Functions calls



    // Events

    
    document.querySelectorAll('.step').forEach(el => {
        el.addEventListener('click', event => {
            $(event.target).addClass("active").prevAll().addClass("active");
            $(event.target).nextAll().removeClass("active");
        });
    });
    
    document.querySelector('.step01').addEventListener('click', _ =>{
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });

    document.querySelector('.step02').addEventListener('click', _ =>{
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });

    document.querySelector('.step03').addEventListener('click', _ =>{
        $("#line-progress").css("width", "50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });

    document.querySelector('.step04').addEventListener('click', _ =>{
        $("#line-progress").css("width", "75%");
        $(".production").addClass("active").siblings().removeClass("active");
    });

    document.querySelector('.step05').addEventListener('click', _ =>{
        $("#line-progress").css("width", "100%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });
});


// Functions

