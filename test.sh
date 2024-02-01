#!/bin/bash
while true; do
curl 'https://webflow.com/api/v1/form/63a05a489d74db0082f34744' \
  -H 'authority: webflow.com' \
  -H 'accept: application/json, text/javascript, */*; q=0.01' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'origin: https://www.lenusehealth.com' \
  -H 'referer: https://www.lenusehealth.com/' \
  -H 'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  --data-raw 'name=Email+Form&pageId=63ada8320d735e7ab2052d57&elementId=5f8b9eff-c69c-0f71-41a1-054c87851a7c&source=https%3A%2F%2Fwww.lenusehealth.com%2Fcontact&test=false&fields%5BFirst+Name%5D=Sheikh+Ali&fields%5BLast+name%5D=Akbar&fields%5BName%5D=abbishal%40icloud.com&fields%5BPhone+number%5D=01953020102&fields%5BCountry%5D=Bangladesh&fields%5BOther+Country%5D=&fields%5BState%5D=&fields%5BMain+Social+Platform%5D=Twitch&fields%5BInstagram+link%5D=&fields%5BTwitter+link%5D=&fields%5BFacebook+link%5D=&fields%5BTikTok+link%5D=&fields%5BYouTube+link%5D=&fields%5BTwitch+link%5D=https%3A%2F%2Fsdfsdf.com%2Fsdfsd&fields%5BLinkedIn+link%5D=&fields%5BOther+Social+link%5D=&fields%5BHear%5D=Web+search&fields%5BOther+source%5D=&fields%5BPurpose%5D=Hear+more+about+a+partnership&fields%5BOther+Purpose%5D=&fields%5BClients%5D=1-5+Clients&fields%5BTime%5D=Part+time&fields%5BEducated%5D=Yes&fields%5BCheckbox%5D=true&dolphin=false' \
  --compressed
done
