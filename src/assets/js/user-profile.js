function checkNames() {
    if (document.getElementById('new_pass').value ===
        document.getElementById('new_pass_2').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
        document.getElementById('password_butt').disabled = false;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
        document.getElementById('password_butt').disabled = true;
    }
}