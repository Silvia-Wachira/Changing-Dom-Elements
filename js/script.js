function updateWeekDay(weekday){
    let h4 = document.querySelector('h4')
    h4.innerHTML = ''
  
    // h4.textContent = weekday
    // h4.id = weekday.toLowerCase()
    // h4.className  = 'title'
    // h4.style.color = 'green'
    // h4.style.fontSize = '30px'
}
updateWeekDay('Friday')

function addImage(img_url){
    let img = document.querySelector('img')
    img.src = img_url
}
addImage('https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&w=400')