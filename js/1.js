"use strict";

//Task 1
{
    let str = 'aaa@bbb@ccc';
    let newstr = str.replace(/@/g, '!');
    console.log(newstr);
}

//Task 2
{
    let dateStr = '2025-12-31';
    let date = new Date(dateStr);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let formated = `${day}/${month}/${year}`;

    console.log(formated);
}

//Task 3
{
    let str1 = 'Я учу javascript!';
    let cut1 = str1.substr(2, 3);
    console.log(cut1);

    let str2 = 'Я учу javascript!';
    let cut2 = str2.substring(2, 5);
    console.log(cut2);

    let str3 = 'Я учу javascript!';
    let cut3 = str3.slice(2, 5);
    console.log(cut3);
}

//Task 4
{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }

    let square = Math.sqrt(sum);

    console.log(`корень = ${square}`);
}

//Task 5
{
    let a, b, c;

    a = 3;
    b = 5;
    c = Math.abs(a - b);
    console.log(`a = ${a}, b = ${b}, c = ${c}`);

    a = 6;
    b = 1;
    c = Math.abs(a - b);
    console.log(`a = ${a}, b = ${b}, c = ${c}`);

}

//Task 6
{
    function Zero(number) {
        return number < 10 ? '0' + number : '' + number;
    }

    function Current() {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let day = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        hours = hours < 10 ? '0' + hours : '' + hours;
        minutes = minutes < 10 ? '0' + minutes : '' + minutes;
        seconds = seconds < 10 ? '0' + seconds : '' + seconds;

        day = day < 10 ? '0' + day : '' + day;
        month = month < 10 ? '0' + month : '' + month;

        return hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year;
    }

    console.log(Current());

}

//Task 7
{
    let str = 'aa aba abba abbba abca abea';
    let pattern = /a+b+a/g;

    let matches = str.match(pattern);

    console.log(matches);

}

//Task 8
{
    function validate(phone) {
        const Phone = /^\+375\s(29|33|44)\s\d{7}$/;
        return Phone.test(phone);
    }

    const n1 = '+375 33 1234567';
    const n2 = '+375 29 7654321';

    console.log(validate(n1));
    console.log(validate(n2));

}

//Task 9
{
    function Email(email) {
        const rage = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,11}$/;
        return rage.test(email);
    }

    const email1 = 'user123@google.com';
    const email2 = 'oajdfijsfj';
    const email3 = 'aaa@dskljfSDK';

    console.log(Email(email1));
    console.log(Email(email2));
    console.log(Email(email3));

}

//Task 10
{
    function Url(url) {
        const urlRegex = /^(https?:\/\/[^\/]+)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;

        const matches = url.match(urlRegex);

        if (!matches) {
            return null; 
        }

        const [, domain, path, params, hash] = matches;

        return [domain || '', path || '', params || '', hash || ''];
    }

    const full = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
    const parsed = Url(full);

    console.log(parsed);

}