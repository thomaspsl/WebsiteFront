window.addEventListener('DOMContentLoaded', _ =>{

    // Attributes

    

    // Functions calls



    // Events

    document.querySelectorAll('.plan').forEach(el => {
        el.addEventListener('mouseenter', element => setData(element));
        el.addEventListener('click', element => setData(element));

        el.addEventListener('mouseleave', _ =>{
            document.querySelectorAll('.left').forEach(element => {
                element.dataset.translate = '';
            });
            document.querySelectorAll('.right').forEach(element => {
                element.dataset.translate = '';
            });
            setTranslate();
        });
    });
    
});


// Functions

function setData(element){
    var left = document.querySelectorAll('.left');
    var right = document.querySelectorAll('.right');
    var listkey = ["web","sgbd","log","langue"];
    var listpoucent = ["1%","2%","3%","lvllangue"];

    for (let i = 0; i < listkey.length; i++) {
        if (element.target.id == listkey[i]) {
            for(let index = 0; index < left.length; index++) {
                left[index].dataset.translate = listkey[i]+index;
            }
            for(let index = 0; index < right.length; index++) {
                right[index].dataset.translate = listpoucent[i]+index;
            }
        }
    }
    setTranslate();
}