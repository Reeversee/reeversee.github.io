if (top.location.search=="") {
    pass = prompt('Введите пароль');
    if (pass=='090807010203040708')
    { alert('Пароль принят') } else { alert('Пароль непринят!'), top.location.href="notifications/fail.html" }
};