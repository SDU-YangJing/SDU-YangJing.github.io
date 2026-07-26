'use strict'

;(function () {
  const tracks = [
  {
    "name": "盛夏的果实",
    "artist": "莫文蔚",
    "url": "/music/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E7%9B%9B%E5%A4%8F%E7%9A%84%E6%9E%9C%E5%AE%9E.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "孙大剩",
    "artist": "白亮,赵静",
    "url": "/music/%E7%99%BD%E4%BA%AE%2C%E8%B5%B5%E9%9D%99%20-%20%E5%AD%99%E5%A4%A7%E5%89%A9.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "理想三旬",
    "artist": "陈鸿宇",
    "url": "/music/%E9%99%88%E9%B8%BF%E5%AE%87%20-%20%E7%90%86%E6%83%B3%E4%B8%89%E6%97%AC.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "一如年少模样",
    "artist": "陈鸿宇",
    "url": "/music/%E9%99%88%E9%B8%BF%E5%AE%87%20-%20%E4%B8%80%E5%A6%82%E5%B9%B4%E5%B0%91%E6%A8%A1%E6%A0%B7.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "杀死那个石家庄人(Remix)",
    "artist": "陈嘉楠",
    "url": "/music/%E9%99%88%E5%98%89%E6%A5%A0%20-%20%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA(Remix).mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "绝对占有 相对自由",
    "artist": "陈粒",
    "url": "/music/%E9%99%88%E7%B2%92%20-%20%E7%BB%9D%E5%AF%B9%E5%8D%A0%E6%9C%89%20%E7%9B%B8%E5%AF%B9%E8%87%AA%E7%94%B1.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "历历万乡",
    "artist": "陈粒",
    "url": "/music/%E9%99%88%E7%B2%92%20-%20%E5%8E%86%E5%8E%86%E4%B8%87%E4%B9%A1.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "奇妙能力歌",
    "artist": "陈粒",
    "url": "/music/%E9%99%88%E7%B2%92%20-%20%E5%A5%87%E5%A6%99%E8%83%BD%E5%8A%9B%E6%AD%8C.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "性空山",
    "artist": "陈粒",
    "url": "/music/%E9%99%88%E7%B2%92%20-%20%E6%80%A7%E7%A9%BA%E5%B1%B1.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "虚拟",
    "artist": "陈粒",
    "url": "/music/%E9%99%88%E7%B2%92%20-%20%E8%99%9A%E6%8B%9F.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "走马",
    "artist": "陈粒",
    "url": "/music/%E9%99%88%E7%B2%92%20-%20%E8%B5%B0%E9%A9%AC.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "富士山下",
    "artist": "陈奕迅",
    "url": "/music/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "十年 (OT 明年今日)",
    "artist": "陈奕迅",
    "url": "/music/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%81%E5%B9%B4%20(OT%20%E6%98%8E%E5%B9%B4%E4%BB%8A%E6%97%A5).mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "最佳损友",
    "artist": "陈奕迅",
    "url": "/music/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%9C%80%E4%BD%B3%E6%8D%9F%E5%8F%8B.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "因为爱情",
    "artist": "陈奕迅,王菲",
    "url": "/music/%E9%99%88%E5%A5%95%E8%BF%85%2C%E7%8E%8B%E8%8F%B2%20-%20%E5%9B%A0%E4%B8%BA%E7%88%B1%E6%83%85.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "斑马斑马",
    "artist": "房东的猫",
    "url": "/music/%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB%20-%20%E6%96%91%E9%A9%AC%E6%96%91%E9%A9%AC.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "四块五",
    "artist": "隔壁老樊",
    "url": "/music/%E9%9A%94%E5%A3%81%E8%80%81%E6%A8%8A%20-%20%E5%9B%9B%E5%9D%97%E4%BA%94.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "广东十年爱情故事",
    "artist": "广东雨神",
    "url": "/music/%E5%B9%BF%E4%B8%9C%E9%9B%A8%E7%A5%9E%20-%20%E5%B9%BF%E4%B8%9C%E5%8D%81%E5%B9%B4%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "明天会更好",
    "artist": "李建复,洪荣宏,王梦麟",
    "url": "/music/%E6%9D%8E%E5%BB%BA%E5%A4%8D%2C%E6%B4%AA%E8%8D%A3%E5%AE%8F%2C%E7%8E%8B%E6%A2%A6%E9%BA%9F%20-%20%E6%98%8E%E5%A4%A9%E4%BC%9A%E6%9B%B4%E5%A5%BD.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "贝加尔湖畔",
    "artist": "李健",
    "url": "/music/%E6%9D%8E%E5%81%A5%20-%20%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E7%95%94.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "杀死里昂",
    "artist": "柳爽",
    "url": "/music/%E6%9F%B3%E7%88%BD%20-%20%E6%9D%80%E6%AD%BB%E9%87%8C%E6%98%82.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "太原有没有森林",
    "artist": "柳爽",
    "url": "/music/%E6%9F%B3%E7%88%BD%20-%20%E5%A4%AA%E5%8E%9F%E6%9C%89%E6%B2%A1%E6%9C%89%E6%A3%AE%E6%9E%97.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "一生所爱",
    "artist": "卢冠廷,莫文蔚",
    "url": "/music/%E5%8D%A2%E5%86%A0%E5%BB%B7%2C%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "山雀",
    "artist": "卢山",
    "url": "/music/%E5%8D%A2%E5%B1%B1%20-%20%E5%B1%B1%E9%9B%80.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "一生独一",
    "artist": "卢焱",
    "url": "/music/%E5%8D%A2%E7%84%B1%20-%20%E4%B8%80%E7%94%9F%E7%8B%AC%E4%B8%80.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "志铭",
    "artist": "犬儒乐队",
    "url": "/music/%E7%8A%AC%E5%84%92%E4%B9%90%E9%98%9F%20-%20%E5%BF%97%E9%93%AD.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "胡广生",
    "artist": "任素汐",
    "url": "/music/%E4%BB%BB%E7%B4%A0%E6%B1%90%20-%20%E8%83%A1%E5%B9%BF%E7%94%9F.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "安和桥",
    "artist": "宋冬野",
    "url": "/music/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E5%AE%89%E5%92%8C%E6%A1%A5.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "斑马，斑马",
    "artist": "宋冬野",
    "url": "/music/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E6%96%91%E9%A9%AC%EF%BC%8C%E6%96%91%E9%A9%AC.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "鸽子",
    "artist": "宋冬野",
    "url": "/music/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E9%B8%BD%E5%AD%90.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "郭源潮",
    "artist": "宋冬野",
    "url": "/music/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E9%83%AD%E6%BA%90%E6%BD%AE.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "少一点天分",
    "artist": "孙盛希",
    "url": "/music/%E5%AD%99%E7%9B%9B%E5%B8%8C%20-%20%E5%B0%91%E4%B8%80%E7%82%B9%E5%A4%A9%E5%88%86.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "山海《完整版》cover(草东没有派对）",
    "artist": "万豹",
    "url": "/music/%E4%B8%87%E8%B1%B9%20-%20%E5%B1%B1%E6%B5%B7%E3%80%8A%E5%AE%8C%E6%95%B4%E7%89%88%E3%80%8Bcover(%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%EF%BC%89.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "揪心的玩笑与漫长的白日梦",
    "artist": "万能青年旅店",
    "url": "/music/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E6%8F%AA%E5%BF%83%E7%9A%84%E7%8E%A9%E7%AC%91%E4%B8%8E%E6%BC%AB%E9%95%BF%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "杀死那个石家庄人",
    "artist": "万能青年旅店",
    "url": "/music/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "起风了",
    "artist": "吴青峰",
    "url": "/music/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "吴哥窟",
    "artist": "吴雨霏",
    "url": "/music/%E5%90%B4%E9%9B%A8%E9%9C%8F%20-%20%E5%90%B4%E5%93%A5%E7%AA%9F.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "逝年",
    "artist": "夏小虎",
    "url": "/music/%E5%A4%8F%E5%B0%8F%E8%99%8E%20-%20%E9%80%9D%E5%B9%B4.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "喜帖街",
    "artist": "谢安琪",
    "url": "/music/%E8%B0%A2%E5%AE%89%E7%90%AA%20-%20%E5%96%9C%E5%B8%96%E8%A1%97.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "白羊",
    "artist": "徐秉龙,沈以诚",
    "url": "/music/%E5%BE%90%E7%A7%89%E9%BE%99%2C%E6%B2%88%E4%BB%A5%E8%AF%9A%20-%20%E7%99%BD%E7%BE%8A.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "莫等",
    "artist": "徐泽（要不要买菜）",
    "url": "/music/%E5%BE%90%E6%B3%BD%EF%BC%88%E8%A6%81%E4%B8%8D%E8%A6%81%E4%B9%B0%E8%8F%9C%EF%BC%89%20-%20%E8%8E%AB%E7%AD%89.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "琴师",
    "artist": "徐泽（要不要买菜）",
    "url": "/music/%E5%BE%90%E6%B3%BD%EF%BC%88%E8%A6%81%E4%B8%8D%E8%A6%81%E4%B9%B0%E8%8F%9C%EF%BC%89%20-%20%E7%90%B4%E5%B8%88.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "蓝莲花",
    "artist": "许巍",
    "url": "/music/%E8%AE%B8%E5%B7%8D%20-%20%E8%93%9D%E8%8E%B2%E8%8A%B1.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "安和桥",
    "artist": "宇西",
    "url": "/music/%E5%AE%87%E8%A5%BF%20-%20%E5%AE%89%E5%92%8C%E6%A1%A5.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "有形的翅膀",
    "artist": "张韶涵",
    "url": "/music/%E5%BC%A0%E9%9F%B6%E6%B6%B5%20-%20%E6%9C%89%E5%BD%A2%E7%9A%84%E7%BF%85%E8%86%80.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "余香",
    "artist": "张小九",
    "url": "/music/%E5%BC%A0%E5%B0%8F%E4%B9%9D%20-%20%E4%BD%99%E9%A6%99.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "阿刁",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E9%98%BF%E5%88%81.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "不开的唇",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E4%B8%8D%E5%BC%80%E7%9A%84%E5%94%87.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "成都",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%90%E9%83%BD.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "程艾影",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E7%A8%8B%E8%89%BE%E5%BD%B1.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "朵",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E6%9C%B5.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "鼓楼",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E9%BC%93%E6%A5%BC.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "画",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E7%94%BB.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "理想",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E7%90%86%E6%83%B3.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "玛丽",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E7%8E%9B%E4%B8%BD.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "南方姑娘",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E5%8D%97%E6%96%B9%E5%A7%91%E5%A8%98.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "三十岁的女人",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E4%B8%89%E5%8D%81%E5%B2%81%E7%9A%84%E5%A5%B3%E4%BA%BA.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "少年锦时",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E5%B0%91%E5%B9%B4%E9%94%A6%E6%97%B6.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "我记得",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%91%E8%AE%B0%E5%BE%97.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "我们的时光",
    "artist": "赵雷",
    "url": "/music/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%97%B6%E5%85%89.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "起风了",
    "artist": "赵世聪",
    "url": "/music/%E8%B5%B5%E4%B8%96%E8%81%AA%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  },
  {
    "name": "孤雏",
    "artist": "AGA",
    "url": "/music/AGA%20-%20%E5%AD%A4%E9%9B%8F.mp3",
    "cover": "/img/touxiang.jpg",
    "type": "normal"
  }
]

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
