if (top.location.search=="") {
    pass = prompt('Введите пароль');
    if (pass=='testpage050321')
    { alert('Пароль принят') } else { alert('Пароль непринят!'), top.location.href="../notifications/fail.html" }
};