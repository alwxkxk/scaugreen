const INPUT_PATH = 'src/pages'
const OUTPUT_PATH = 'src/pages.json'
const util = require('util')
const fs = require('fs')

const readDir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const marked = require('marked')

readPages((err, pages) => {
  if (err) {
    console.log(err)
    return
  }
  writeJSON(OUTPUT_PATH, pages)
})

/**
 * 读取文章并将.md转换为html格式
 * 得到对象{标题1："内容1 html",标题2:"内容2 html"}
 * @param {function} callback err fisrt 回调函数
 */
async function readPages (callback) {
  let pages = {}
  let files = await readDir(INPUT_PATH)

  let promises = files.map(async (file) => {
		// await仍没执行完毕，返回的是处于pending的promise，结合Promise.all实现 非继发异步。
    let text = await readFile(INPUT_PATH + '/' + file, 'utf8')
    let title = file.split('.')[0] // 去掉文件名的后缀，作为文章标题
    let markedText = marked(text)
    pages[title] = markedText
    return pages[title]
  })

  Promise.all(promises)
  .then(() => {
    callback(null, pages)
  })
  .catch((err) => {
    callback(err)
  })
}

/**
 * 将对象进一步封装，再转换为JSON 并写入到文件中
 *
 * @param {string} path 写入文件的路径
 * @param {object} data 数据
 */
function writeJSON (path, data) {
  let pages = []
  let i = 0
  for (let item in data) {
    pages.push({
      title: item,
      content: data[item]
    })
    i++
  }

  let json = JSON.stringify(pages)
  fs.writeFile(path, json, (err) => {
    if (err) throw err
    console.log('pages.json 写入成功')
  })
}
