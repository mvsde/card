const boxen = require('boxen')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderColor: 'yellow',
  borderStyle: 'round'
}

const data = {
  name: chalk`              Fynn Becker`,
  handle: chalk`mvsde`,
  work: chalk`Front-end developer at {cyan https://lfda.de}`,
  opensource: chalk`Pangolin pattern library framework\n              {yellow https://pangolinjs.org}`,
  twitter: chalk`{gray https://twitter.com/}{cyan mvsde}`,
  npm: chalk`{gray https://npmjs.com/}{red ~mvsde}`,
  github: chalk`{gray https://github.com/}{green mvsde}`,
  linkedin: chalk`{gray https://linkedin.com/in/}{blue fynn}`,
  web: chalk`{cyan https://fynn.be}`,
  npx: chalk`{red npx} {white mvsde}`,
  labelWork: chalk`{bold        Work:}`,
  labelOpenSource: chalk`{bold Open Source:}`,
  labelTwitter: chalk`{bold     Twitter:}`,
  labelnpm: chalk`{bold         npm:}`,
  labelGitHub: chalk`{bold      GitHub:}`,
  labelLinkedIn: chalk`{bold    LinkedIn:}`,
  labelWeb: chalk`{bold         Web:}`,
  labelCard: chalk`{bold        Card:}`
}

const output = chalk`${data.name} {yellow /} ${data.handle}

${data.labelWork}  ${data.work}
${data.labelOpenSource}  ${data.opensource}

${data.labelTwitter}  ${data.twitter}
${data.labelnpm}  ${data.npm}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelWeb}  ${data.web}

${data.labelCard}  ${data.npx}`

const box = boxen(output, options)

fs.writeFileSync(path.join(__dirname, 'bin/output'), box)
