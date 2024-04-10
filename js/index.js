import data from './data.json' with { type: "json" }
console.log(data)

//getting all h3
const summaryTitles = [...document.querySelectorAll('.stat h3')]
const summaryTitlesIcons = [...document.querySelectorAll('.stat img')]
const summaryTitlesScores = [...document.querySelectorAll('.stat span')]

//populating all h3
data.forEach((d, index) => {
    summaryTitles[index].innerText = d.category
    summaryTitlesIcons[index].src = d.icon
    summaryTitlesScores[index].innerText = d.score
})