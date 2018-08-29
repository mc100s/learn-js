export function insertAt (string, index, substring) { 
  return string.substr(0, index) + substring + string.substr(index);
}

export function getIndentationNumberForNextLine(string, cursorIndex) {
  string = "\n" + string
  let result = 0;
  let index;
  for (index = cursorIndex; index >= 0; index--) {
    if (string[index] === "\n")
      break;
    else if (string[index] === " ")
      result++
    else 
      result = 0
  }
  return result
}

export function getPairCharacter(character) {
  switch(character){
    case `{`: return `}`
    case `(`: return `)`
    case `[`: return `]`
    default: return undefined
  }
}


export function getCourseProgression(courseSlug) {
  if (!localStorage.getItem('coursesProgressions'))
    return 0;
  let coursesProgressions = JSON.parse(localStorage.getItem('coursesProgressions'))
  if (!coursesProgressions[courseSlug])
    return 0
  return coursesProgressions[courseSlug]
}

export function setCourseProgression(courseSlug, value = 1) {
  if (!localStorage.getItem('coursesProgressions')) {
    localStorage.setItem('coursesProgressions', JSON.stringify({}))
  }
  let coursesProgressions = JSON.parse(localStorage.getItem('coursesProgressions'))
  coursesProgressions[courseSlug] = value
  localStorage.setItem('coursesProgressions', JSON.stringify(coursesProgressions))
}

export function getTotalCourseProgression() {
  if (!localStorage.getItem('coursesProgressions'))
    return 0;
  let coursesProgressions = JSON.parse(localStorage.getItem('coursesProgressions'))
  return Object.keys(coursesProgressions).length;
}


export function resetCourseProgression() {
  localStorage.removeItem('coursesProgressions')
}

