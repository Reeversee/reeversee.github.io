const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua' /*, 'by' */];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = LangArray['title'][hash];
    for (let key in LangArray){
        let elem = document.querySelector('.lng-'+key);
        if(elem){
            elem.innerHTML = LangArray[key][hash];
        }
    }
}

changeLanguage();