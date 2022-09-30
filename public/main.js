const btn = document.querySelector('#random-food')


btn.addEventListener('click', function(e) {
  fetch('/randomFood', {method: 'GET'})
  .then(res => {
    return res.json()
  })
  .then(data => {
    let foodKeys = []
    for(let restaurant of data) {
    foodKeys.push(restaurant.food)
    }
    let uniqueFood = foodKeys.filter((value, index, arr) => {
      return arr.indexOf(value) === index
    })
    
    let pickRandomFood = uniqueFood[Math.floor(Math.random() * uniqueFood.length)]

      let eat = document.querySelector('.eat')
        eat.textContent = `${pickRandomFood}をおすすめします！`
  })
})
