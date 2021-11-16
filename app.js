    const nav = document.getElementById('nav');
    console.log('hello')
    console.log(nav)
    window.onscroll = function () {
        var top = window.scrollY;
        console.log(top);
        if (top >= 500) {
            console.log('nav',nav.classList);
            nav.style.backgroundColor="#848884";
        }
        else{
            nav.style.backgroundColor="transparent";
        }

    }   
    function showNav(element) {
        x=document.getElementById(element)
        y=document.getElementById('c')
        z=document.getElementById('nav')
        if (x.style.display=='block'){
            x.style.display='none';
            y.innerHTML=`<img src="align-justify-solid.svg" alt="nav-button"></img>`
            z.style.backgroundColor=''
        }
        else{
            x.style.display='block';
            y.innerHTML=`<img src="times-circle-solid.svg" alt="nav-button">`
            z.style.backgroundColor='#848884'
        }
    }