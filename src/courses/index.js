
const courseLinks = [
  'intro-to-js',
  'basics-about-programming',
  'variable-types',
  'test',
]

export default courseLinks.map(link => ({...require('./'+link).default, slug: link }))