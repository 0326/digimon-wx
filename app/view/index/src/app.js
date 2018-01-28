import 'babel-polyfill'


/**
 * launch 过渡
 */
const $launch = document.getElementById('J-launchPage')

// 加载资源
setTimeout(() => {
  $launch.classList.add('fadeOutUp')
  document.body.appendChild(app.view)
  window.app = app
}, 0)


/**
 * 初始化游戏登入界面
 */
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
})

app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.view.style.left = 0
app.renderer.view.style.top = 0
app.renderer.backgroundColor = 0x018dd8
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)

// 加载背景
PIXI.loader
  .add('launchBgImg', '/bg.jpg')
  .load(() => {
    const bgSprite = new PIXI.Sprite(
      PIXI.loader.resources.launchBgImg.texture
    )
    bgSprite.width = window.innerWidth
    bgSprite.height = bgSprite.width * 1190 / 850
    bgSprite.x = 0
    bgSprite.y = window.innerHeight - bgSprite.height
    app.stage.addChild(bgSprite)
    loadButton()
  })

function loadButton() {
  // 加载按钮文案
  const entryText = new PIXI.Text('开始冒险', new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 'white',
  }))
  entryText.position.set(window.innerWidth / 3, window.innerHeight / 2)
  app.stage.addChild(entryText)
}
