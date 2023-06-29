function updateWeekDay(weekday){
    let h4 = document.querySelector('h4')
    h4.textContent = weekday
    h4.id = weekday.toLowerCase()
    h4.className  = 'title'
    h4.style.color = 'green'
    h4.style.fontSize = '30px'
}
updateWeekDay('Monday')