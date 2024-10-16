interface Project {
  title?: string
  description?: string
  href?: string
  imgSrc?: string
}

// const projectsData: Project[] = [
//   {
//     // title: 'A Search Engine',
//     // description: `What if you could look up any information in the world? Webpages, images, videos
//     // and more. Google has many features to help you find exactly what you're looking
//     // for.`,
//     imgSrc: '/static/images/google.png',
//     href: 'https://www.google.com',
//   },
//   {
//     // title: 'The Time Machine',
//     // description: `Imagine being able to travel back in time or to the future. Simple turn the knob
//     // to the desired date and press "Go". No more worrying about lost keys or
//     // forgotten headphones with this simple yet affordable solution.`,
//     imgSrc: '/static/images/time-machine.jpg',
//     href: '/blog/the-time-machine',
//   },

// ]
const projectsData: Project[] = [
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_arma2-1.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_arma2_qa-1.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_arma3_qa-2.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_dayz.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_h1z1.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_h1z1_kh.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_ark.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_ark_sf.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_ps2.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_rs.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_surv.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_argo.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_unturned.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_insurgency.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_day_of_infamy.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_isle.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_line.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_conan.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_blackshoot.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_tibia.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_pubg.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_blacksquad.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_phantomers.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_fortnite.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_s4.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_zula.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/05/logo_nyne.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2015/02/logo_blacklight.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/04/logo_sos.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/05/logo_pixelark.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/05/logo_h_g.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/06/logo_bless_online.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/07/apb_reloaded_.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2018/07/crew_2.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2019/10/logo_atlas_.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2019/10/logo_ava_dogtag-1.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2019/10/logo_eft.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2019/10/logo_ghostrecon.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2020/09/logo_mount_.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2020/09/logo_outlaws_2.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2020/09/planetside-arena-logo.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/iron_conflict.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/watchdogs_.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/combat_arms.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/combat_arms_reloaded.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/destiny_2_logo.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/riders_republic_.png' },
  { imgSrc: 'https://www.battleye.com/wp-content/uploads/2021/12/path_of_titans.png' },
]

export default projectsData