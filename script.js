let originalArray = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]

// Question 1
class QuestionOne {
  constructor () {
    this.question1Button = document.querySelector('.run-one')
    this.answer1Result = document.querySelector('.answer-one')
    this.question1Button.addEventListener('click', () => this.shuffle())
  }

  shuffle () {
    let shuffledArray = originalArray.sort((a, b) => 0.5 - Math.random())
    this.answer1Result.innerHTML = shuffledArray
  }
}
const question1 = new QuestionOne()

// Question 2
class QuestionTwo {
  constructor () {
    this.question2Button = document.querySelector('.run-two')
    this.answer2Result = document.querySelector('.answer-two')
    this.question2Button.addEventListener('click', () => this.mean())
  }

  mean () {
    let total = originalArray.reduce((accumulator, current) => accumulator + current)
    let count = originalArray.length
    this.answer2Result.innerHTML = total / count
  }
}
const question2 = new QuestionTwo()

// Question 3
class QuestionThree {
  constructor () {
    this.question3Button = document.querySelector('.run-three')
    this.table = document.querySelector('.answer-three-table')
    this.question3Button.addEventListener('click', () => this.buildTable())
  }

  buildTable () {
    fetch('http://bpbuild.com/devtest/data.php').then(res => res.json()).then(data => {
      data.forEach((row, i) => {
        var newRow = this.table.insertRow((i + 1))
        newRow.insertCell(0).innerHTML = row.firstname
        newRow.insertCell(1).innerHTML = row.lastname
        newRow.insertCell(2).innerHTML = row.email
        newRow.insertCell(3).innerHTML = row.gender
      })
    })
  }
}
const question3 = new QuestionThree()

// Bonus
class Bonus {
  constructor () {
    this.bonusSentence = document.querySelector('.bonus-sentence').innerHTML
    this.bonusButton = document.querySelector('.run-bonus')
    this.bonusResult = document.querySelector('.answer-bonus')
    this.bonusButton.addEventListener('click', () => this.smileys())
  }

  smileys () {
    this.bonusResult.innerText = this.bonusSentence.replace(/[aeiou]\b/ig, '$& 😀')
  }
}

const bonus = new Bonus()
