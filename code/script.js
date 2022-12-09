
button = document.getElementById('button')
char = document.getElementById('char')
statdiv = document.getElementById('power')
search = document.getElementById('search')
searchbutton = document.getElementById('searchbutton')
const token = 3323216527965309
let url = `https://www.superheroapi.com/api.php/${token}`

const onclick = (randomid) => {
  fetch(`${url}/${randomid}`)
    .then(response => response.json())
    .then(json => {
      const herostats = getstats(json).join('')
      const name = `<h2>${json.name}</h2>`
      char.innerHTML = `${name}<img src='${json.image.url}'height=150px width=150px />${herostats}`
    }
    )
}

const searchname = (name) => {
  fetch(`${url}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      char.innerHTML = `<img src=''/>`
      for (let i in json.results
      ) {
        let name = `<h2>${json.results[i].name}</h2>`
        let stats = getstats(json.results[i]).join('')
        char.innerHTML += `${name}<img     src='${json.results[i].image.url}'height=150px width=150px/>${stats}`
      }
    }
    )
}

searchbutton.onclick = () => {

  searchname(search.value)
}
button.onclick = () => {
  onclick(Math.floor(Math.random() * 731) + 1)
}

const getstats = (char) => {
  const stats = Object.keys(char.powerstats).map(stat => {
    return `<p>${stat.toUpperCase()}:${char.powerstats[stat]}</p>`
  })
  return stats
}

