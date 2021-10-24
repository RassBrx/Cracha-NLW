const LinksSocialMedia = {
  Github: 'RassBrx',
  Facebook: 'profile.php?id=100009199954622',
  YouTube: 'channel/UCHL-CxJSM1Rcby9nLT3f6Zw',
  Instagram: 'rafa.darth',
  Twitter: 'rafael87br'
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')

    li.children[0].href = `https://${Social}.com/${LinksSocialMedia[Social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.Github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      ProfileImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
