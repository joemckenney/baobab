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

    const { lines: colorLines } = await quicktypeJSON(
      'typescript',
      'Colors',
      colorString
    )

    prettier.resolveConfig(process.cwd()).then((options) => {
      writeFileSync(
        `./src/themes/${themeName}/colors.ts`,
        prettier
          .format(
            `${colorLines.join('\n')}

            ${Object.keys(colors)
              .map(
                (key) => `
                export const ${key}: ${
                  key.slice(0, 1).toUpperCase() + key.slice(1)
                } = ${JSON.stringify(colors[key])}
                `
              )
              .join('\n')}

            export const color: Colors = {
              ${Object.keys(colors)
                .map((key) => `${key}`)
                .join(',\n')}
            }

            export const flattendColor = ${JSON.stringify(dotNotation(colors))}

            export type Color = keyof typeof flattendColor
          `,
            { parser: 'typescript', ...options }
          )
          .replace(/'([0-9]+)'/g, '$1')
      )
    })

    const sizeString = readFileSync(
      resolve(`./src/themes/${themeName}/sizes.json`)
    ).toString()
    const sizes = JSON.parse(sizeString)

    const { lines: sizeLines } = await quicktypeJSON(
      'typescript',
      'Sizes',
      sizeString
    )

    prettier.resolveConfig(process.cwd()).then((options) => {
      writeFileSync(
        `./src/themes/${themeName}/sizes.ts`,
        prettier
          .format(
            `${sizeLines.join('\n')}

            ${Object.keys(sizes)
              .map(
                (key) => `
                export const ${key}: ${
                  key.slice(0, 1).toUpperCase() + key.slice(1)
                } = ${JSON.stringify(sizes[key])}
                `
              )
              .join('\n')}

            export const size: Sizes = {
              ${Object.keys(sizes)
                .map((key) => `${key}`)
                .join(',\n')}
            }

            export const flattenedSize = ${JSON.stringify(dotNotation(sizes))}

            export type Size = keyof typeof flattenedSize
          `,
            { parser: 'typescript', ...options }
          )
          .replace(/'([0-9]+)'/g, '$1')
      )
    })

    prettier.resolveConfig(process.cwd()).then((options) => {
      writeFileSync(
        `./src/themes/${themeName}/index.ts`,
        prettier.format(
          `
            export * from './sizes'
            export * from './colors'
          `,
          { parser: 'typescript', ...options }
        )
      )
    })
  })
