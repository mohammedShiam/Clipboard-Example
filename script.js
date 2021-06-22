// diclaration
let items = ['ad-12jh4s','as-qo78hd','ad-23hbt','ad-1idgtb','ad-1kiyth','ad-ghtb56','ad-87jyug','ad-sgtb6h','ad-a6hgbt'];


// selection

let copy01 = document.querySelector('#btn0');
let copy02 = document.querySelector('#btn1');
let copy03 = document.querySelector('#btn2');
let copy04 = document.querySelector('#btn3');
let copy05 = document.querySelector('#btn4');
let copy06 = document.querySelector('#btn5');
let copy07 = document.querySelector('#btn6');
let copy08 = document.querySelector('#btn7');

let text = document.querySelector('#text');

//display copied 

let display01 = document.querySelector('#display01');
let display02 = document.querySelector('#display02');
let display03 = document.querySelector('#display03');
let display04 = document.querySelector('#display04');
let display05 = document.querySelector('#display05');
let display06 = document.querySelector('#display06');
let display07 = document.querySelector('#display07');
let display08 = document.querySelector('#display08');





//
let txt01 =  document.querySelector('.txt01');
    txt01.value = `${items[0]}`;
let txt02 =  document.querySelector('.txt02');
    txt02.value = `${items[1]}`;
let txt03 =  document.querySelector('.txt03');
    txt03.value = `${items[2]}`;
let txt04 =  document.querySelector('.txt04')
    txt04.value = `${items[3]}`;
let txt05 =  document.querySelector('.txt05');
    txt05.value = `${items[4]}`;
let txt06 =  document.querySelector('.txt06');
    txt06.value = `${items[5]}`;
let txt07 =  document.querySelector('.txt07');
    txt07.value = `${items[6]}`;
let txt08 =  document.querySelector('.txt08');
    txt08.value = `${items[7]}`;

 






    copy01.onclick = function(){
        txt01.select();
        document.execCommand('copy');
        
       display01.innerHTML = ('Copied');
        setTimeout(function(){
        display01.innerHTML = ('');
        },1000 )

       

    
    }

    copy02.onclick = function(){
        txt02.select();
        document.execCommand('copy');
        display02.innerHTML = 'Copied';
        setTimeout(function(){
            display02.innerHTML = '';
        },1000)
    }

    copy03.onclick = function(){
        txt03.select();
        document.execCommand('copy');
        display03.innerHTML = 'Copied';
        setTimeout(function(){
            display03.innerHTML = '';
        },1000)
    }

    copy04.onclick = function(){
        txt04.select();
        document.execCommand('copy');
        display04.innerHTML = 'Copied';
        setTimeout(function(){
            display04.innerHTML = '';
        },1000)
    }

    copy05.onclick = function(){
        txt05.select();
        document.execCommand('copy');
        display05.innerHTML = 'Copied';
        setTimeout(function(){
            display05.innerHTML = '';
        },1000)
    }
    copy06.onclick = function(){
        txt06.select();
        document.execCommand('copy');
        display06.innerHTML = 'Copied';
        setTimeout(function(){
            display06.innerHTML = '';
        },1000)
    }
    copy07.onclick = function(){
        txt07.select();
        document.execCommand('copy');
        display07.innerHTML = 'Copied';
        setTimeout(function(){
            display07.innerHTML = '';
        },1000)
    }
    


copy08.onclick = function(){
    txt08.select();
    document.execCommand('copy');
    display08.innerHTML = 'Copied';
    setTimeout(function(){
        display08.innerHTML = '';
    },1000)
}



























 
