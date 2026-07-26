'use strict'

const fs = require('fs')
const path = require('path')

const MUSIC_DIRECTORY = path.join(hexo.base_dir, 'music')
const FIRST_TRACK = '莫文蔚 - 盛夏的果实.mp3'
const PLAYER_SCRIPT_PATH = 'js/local-music-player.js'

function splitTrackName (filename) {
  const basename = path.basename(filename, path.extname(filename))
  const separator = basename.indexOf(' - ')

  if (separator === -1) {
    return { artist: '未知歌手', name: basename }
  }

  return {
    artist: basename.slice(0, separator),
    name: basename.slice(separator + 3)
  }
}

function publicMusicUrl (filename) {
  return `/music/${filename.split(path.sep).map(encodeURIComponent).join('/')}`
}

function createPlayerScript (tracks) {
  return `'use strict'

;(function () {
  const tracks = ${JSON.stringify(tracks, null, 2)}

  function startLocalMusicPlayer () {
    if (window.localMusicPlayer || typeof window.APlayer !== 'function') return

    const container = document.getElementById('local-music-player')
    if (!container) return

    const player = new window.APlayer({
      container,
      fixed: true,
      mini: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      preload: 'none',
      volume: 0.7,
      mutex: true,
      listFolded: false,
      audio: tracks
    })

    // APlayer's random mode normally chooses a random first track. Keep the
    // requested song first, then let its random order drive every later skip.
    player.list.switch(0)

    window.localMusicPlayer = player
    window.aplayers = window.aplayers || []
    window.aplayers.push(player)

    player.play()

    // Browsers may block audible autoplay. Resume on the first interaction
    // without making the visitor find the small player button.
    const resumeIfBlocked = () => {
      if (player.paused) player.play()
    }
    document.addEventListener('pointerdown', resumeIfBlocked, { once: true, capture: true })
    document.addEventListener('keydown', resumeIfBlocked, { once: true, capture: true })
    document.addEventListener('touchstart', resumeIfBlocked, { once: true, capture: true })
  }

  if (document.readyState === 'complete') {
    startLocalMusicPlayer()
  } else {
    window.addEventListener('load', startLocalMusicPlayer, { once: true })
  }
})()
`
}

hexo.extend.generator.register('local-music', () => {
  if (!fs.existsSync(MUSIC_DIRECTORY)) {
    hexo.log.warn(`Local music directory not found: ${MUSIC_DIRECTORY}`)
    return []
  }

  const filenames = fs.readdirSync(MUSIC_DIRECTORY)
    .filter(filename => path.extname(filename).toLowerCase() === '.mp3')
    .sort((left, right) => left.localeCompare(right, 'zh-CN'))

  const firstTrackIndex = filenames.indexOf(FIRST_TRACK)
  if (firstTrackIndex === -1) {
    throw new Error(`Required first track not found: ${FIRST_TRACK}`)
  }

  filenames.splice(firstTrackIndex, 1)
  filenames.unshift(FIRST_TRACK)

  const tracks = filenames.map(filename => {
    const { artist, name } = splitTrackName(filename)

    return {
      name,
      artist,
      url: publicMusicUrl(filename),
      cover: '/img/touxiang.jpg',
      type: 'normal'
    }
  })

  const musicFiles = filenames.map(filename => ({
    path: `music/${filename}`,
    data: () => fs.createReadStream(path.join(MUSIC_DIRECTORY, filename))
  }))

  return [
    ...musicFiles,
    {
      path: PLAYER_SCRIPT_PATH,
      data: createPlayerScript(tracks)
    }
  ]
})
