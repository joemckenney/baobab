import dotNotation from './dot-notate.js'

import prettier from 'prettier'

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
const themes = resolve('./src/themes/')

readdirSync(themes)
  .filter((f) => statSync(join(themes, f)).isDirectory())
  .forEach((themeName) => {
    const colors = JSON.parse(
      readFileSync(resolve(`./src/themes/${themeName}/colors.json`)).toString()
    )
    prettier.resolveConfig(process.cwd()).then((options) => {
      writeFileSync(
        `./src/themes/${themeName}/colors.ts`,
        prettier.format(
          `export type Color = ${Object.keys(dotNotation(colors))
            .map((key) => `| '${key}'`)
            .join('')}`,
          { parser: 'typescript', ...options }
        )
      )
    })
  })
