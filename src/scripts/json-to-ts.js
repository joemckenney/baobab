import dotNotation from './dot-notate.js'

import prettier from 'prettier'

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
const themes = resolve('./src/themes/')

import {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
} from 'quicktype-core'

async function quicktypeJSON(targetLanguage, typeName, jsonString) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage)

  // We could add multiple samples for the same desired
  // type, or many sources for other types. Here we're
  // just making one type from one piece of sample JSON.
  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  })

  const inputData = new InputData()
  inputData.addInput(jsonInput)

  return await quicktype({
    inputData,
    inferMaps: false,
    rendererOptions: {
      'just-types': true,
    },
    lang: targetLanguage,
  })
}

readdirSync(themes)
  .filter((f) => statSync(join(themes, f)).isDirectory())
  .forEach(async (themeName) => {
    const colorString = readFileSync(
      resolve(`./src/themes/${themeName}/colors.json`)
    ).toString()
    const colors = JSON.parse(colorString)

    const { lines } = await quicktypeJSON('typescript', 'Colors', colorString)

    prettier.resolveConfig(process.cwd()).then((options) => {
      writeFileSync(
        `./src/themes/${themeName}/colors.ts`,
        prettier.format(
          `${lines.join('\n')}

            export const theme = ${JSON.stringify(dotNotation(colors))}

            export type Color = ${Object.keys(dotNotation(colors))
              .map((key) => `| '${key}'`)
              .join('')}
          `,
          { parser: 'typescript', ...options }
        )
      )
    })
  })
