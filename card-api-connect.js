const image = document.querySelector(".image"); 
const username = document.querySelector(".username");
const company = document.querySelector(".company");
const numberRepos = document.querySelector(".numberRepos");
const numberGists = document.querySelector(".numberGists");
const numberFollowers = document.querySelector(".numberFollowers");
const bio = document.querySelector(".bio")

async function getGithubData() {
    const data = await fetch("https://api.github.com/users/MartinaScapola")
      .then((res) => res.json())
      .then((data) => (obj = data))
      .catch((error) => console.log(error));
      return data
  }

  async function set(){
    const data = await getGithubData()
    console.log(data)
    image.src = data.avatar_url
    username.innerText = data.login
    company.innerText = data.company
    numberRepos.innerText = data.public_repos
    numberGists.innerText = data.public_gists
    numberFollowers.innerText = data.followers
    bio.innerText = data.bio
}


set()