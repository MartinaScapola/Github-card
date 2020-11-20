let image = document.getElementsByClassName("image") 
let username = document.getElementsByClassName("username")
let company = document.getElementsByClassName("company")
let numberRepos = document.getElementsByClassName("numberRepos")
let numberGists = document.getElementsByClassName("numberGists")
let numberFollowers = document.getElementsByClassName("numberFollowers")


async function getGithubData() {
    let data = await fetch("https://api.github.com/users/MartinaScapola")
      .then((res) => res.json())
      .then((data) => (obj = data))
      .catch((error) => console.log(error));
      return data
  }

  async function set(){
    const data = await getGithubData()
    console.log(data)
    username.AppendChild(data.login)
}


set()