// Attributs



// Events



// Calls Functions
titleDynamic();
hourDynamic();


// Functions
function titleDynamic(){
    let title = ""
    window.addEventListener('blur', _ => {
      if(document.querySelector('title')){
        title = document.querySelector('title').textContent;
        document.querySelector('title').textContent = "Come back dude!";
      }
    });
    window.addEventListener('focus', _ => {
      if(document.querySelector('title')){
        document.querySelector('title').textContent = title;
      }
    });
};
  
function hourDynamic(){
  dateSync();
  setInterval(dateSync, 1000);
}

function dateSync(){
  var date = new Date();
  var hour = date.getHours().toString().length === 1 ? "0" + date.getHours() : date.getHours();
  var minute = date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes();
  var timer = document.querySelector('.timer');

  if(timer){
      timer.innerHTML = hour + ":" + minute;
  }
}
