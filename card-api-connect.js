const image = document.querySelector(".image"); 
const username = document.querySelector(".username");
const company = document.querySelector(".company");
const numberRepos = document.querySelector(".numberRepos");
const numberGists = document.querySelector(".numberGists");
const numberFollowers = document.querySelector(".numberFollowers");
const bio = document.querySelector(".bio");
const loader = document.querySelector(".loader");


async function getGithubData() {
    const data = await fetch("https://api.github.com/users/MartinaScapola")
      .then((res) => res.json())
      .then((data) => (obj = data))
      .catch((error) => console.log(error));
      return data
  }

  async function set(){
    const data = await getGithubData()

    image.src = data.avatar_url
    username.innerText = data.name
    company.innerText = data.company
    numberRepos.innerText = data.public_repos
    numberGists.innerText = data.public_gists
    numberFollowers.innerText = data.followers
    bio.innerText = data.bio

    loader.style.visibility = "hidden"
}


set()