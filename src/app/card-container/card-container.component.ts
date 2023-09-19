import { Component } from '@angular/core';
export interface IArticle {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent {
  articles: IArticle[] = [
    {
      source: {
        id: null,
        name: 'Cricbuzz',
      },
      author: null,
      title:
        'Ashwin to play local one-day game before joining India squad | Cricbuzz.com - Cricbuzz',
      description:
        'Ashwin was recently spotted at the NCA, practicing with the white ball',
      url: 'https://www.cricbuzz.com/cricket-news/127828/ashwin-to-play-local-one-day-game-before-joining-india-squad',
      urlToImage:
        'http://www.cricbuzz.com/a/img/v1/600x400/i1/c346157/ashwin-was-recently-spotted-at.jpg',
      publishedAt: '2023-09-18T16:32:01Z',
      content:
        'Ashwin was recently spotted at the NCA, practicing with the white ball. \u00A9 BCCI\r\nR Ashwin was recently spotted at the National Cricket Academy (NCA) in Bengaluru, practicing in the NCA nets with a whi\u2026 [+1857 chars]',
    },
    {
      source: {
        id: null,
        name: 'NDTV News',
      },
      author: 'NDTV Sports Desk',
      title:
        'India vs Australia 2023, Team India Squad Announcement: Ravichandran Ashwin Makes A Return, KL Rahul To Lead In First Two ODIs - NDTV Sports',
      description:
        'Ind Vs Aus 2023 Team India Squad Announcement: While stars like Rohit Sharma, Virat Kohli and Hardik Pandya have been rested for the first two ODIs, India will feature a full strength squad for the third ODI. Ravichandran Ashwin has got an ODI call-up.',
      url: 'https://sports.ndtv.com/cricket/ind-vs-aus-2023-indian-team-odi-squad-live-announcement-latest-updates-rohit-sharma-ajit-agarkar-live-updates-4401390',
      urlToImage:
        'https://c.ndtvimg.com/2022-11/7iccn5u_r-ashwin-practice-afp_625x300_11_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
      publishedAt: '2023-09-18T16:22:33Z',
      content:
        'India vs Australia 2023, Team India Squad Announcement: The virual press conference for the announcement of the India squad for the three-match ODI series against Australia took place on Monday. The \u2026 [+1168 chars]',
    },
    {
      source: {
        id: null,
        name: 'Managing Madrid',
      },
      author: 'Matt_MM',
      title:
        'Player Ratings: Real Madrid 2 - 1 Real Sociedad; 2023 La Liga - Managing Madrid',
      description:
        'Carlo Ancelotti\u2019s men make it five victories from five games to open the La Liga season.',
      url: 'https://www.managingmadrid.com/2023/9/18/23878649/player-ratings-real-madrid-2-1-real-sociedad-2023-la-liga',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/jWDjtajmTinkuLwhdVF01nUp3t4=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24931401/1687470508.jpg',
      publishedAt: '2023-09-18T14:55:24Z',
      content:
        'Full match player ratings below:\r\nKepa6: Doubts remain with the Spanish goalkeeper, who is yet to fill the Bernabeu faithful with confidence. Reactions were slow on early goal conceded. Finished the \u2026 [+3264 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'Sportstar',
      title:
        'Mumbai City vs Nassaji Mazandaran, AFC Champions League Highlights: Islanders start ACL campaign with a 0-2 loss - Sportstar',
      description: null,
      url: 'https://sportstar.thehindu.com/football/mumbai-city-fc-vs-nassaji-mazandaran-live-score-afc-champions-league-streaming-updates-mcfc-v-nas-goals-highlights/article67320821.ece',
      urlToImage: null,
      publishedAt: '2023-09-18T14:48:45Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'BBC News',
      },
      author: null,
      title:
        "Pace Legend Blasts BCCI's Scheduling, Finds India vs Australia ODIs 'Unnecessary' - NDTV Sports",
      description:
        'India and Australia square off in a three-match ODI series, starting September 22.',
      url: 'http://www.bbc.com/news/world-us-canada-39324587',
      urlToImage:
        'https://c.ndtvimg.com/2023-09/07lmrn7_kuldeep-yadav-team-india-afp_625x300_17_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
      publishedAt: '2023-09-18T14:41:00Z',
      content:
        'The Indian cricket team registered a comprehensive 10-wicket win against Sri Lanka in the Asia Cup final on Sunday. After Sri Lanka opted to bat, Mohammed Siraj ran through their battng order, pickin\u2026 [+1706 chars]',
    },
    {
      source: {
        id: 'espn-cric-info',
        name: 'ESPN Cric Info',
      },
      author: 'ESPNcricinfo staff',
      title:
        'Sussex docked 12 points, Pujara suspended after fourth disciplinary charge - ESPNcricinfo',
      description:
        'Jack Carson, Tom Haines and Ari Karvelas also made unavailable after incidents in Leicestershire win',
      url: 'https://www.espncricinfo.com/story/sussex-docked-12-points-cheteshwar-pujara-suspended-fourth-disciplinary-charge-1399027',
      urlToImage:
        'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/367400/367475.jpg',
      publishedAt: '2023-09-18T14:33:17Z',
      content:
        'NewsJack Carson, Tom Haines and Ari Karvelas also made unavailable after incidents in Leicestershire win',
    },
    {
      source: {
        id: null,
        name: 'India Today',
      },
      author: 'Raya Ghosh',
      title:
        'Man asks Anand Mahindra to gift an SUV to Mohammed Siraj. His reply is viral - India Today',
      description:
        'A man asked Anand Mahindra to gift an SUV to Mohammed Siraj. The industrialist\u2019s response has gone viral.',
      url: 'https://www.indiatoday.in/trending-news/story/asia-cup-2023-india-vs-sri-lanka-man-asks-anand-mahindra-to-gift-an-suv-to-mohammed-siraj-his-reply-is-viral-2437366-2023-09-18',
      urlToImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/mohammed-siraj-won-the-player-of-the-match-in-the-final-photo-ap-185940417-16x9.jpg?VersionId=PnEV1jmX43jVzhEFjhy2L.xAepXDQVWs',
      publishedAt: '2023-09-18T14:09:58Z',
      content:
        'Industrialist Anand Mahindra\u2019s response to a man who asked him to gift an SUV to Indian cricketer Mohammed Siraj has gone viral on social media. Siraj occupied the top spot on the trends list for his\u2026 [+1521 chars]',
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Devesh Kumar',
      title:
        "\u2018MS Dhoni won a lot of trophies but\u2026\u2019: Gautam Gambhir on Dhoni's performance ahead of World Cup | Mint - Mint",
      description:
        'Gautam Gambhir mentioned that MS Dhoni was a batter first and then a wicketkeeper which was a blessing for Team India',
      url: 'https://www.livemint.com/sports/cricket-news/ms-dhoni-won-a-lot-of-trophies-but-gautam-gambhir-on-dhonis-performance-ahead-of-world-cup-11695043168434.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/09/18/600x338/3_1695044362224_1695044366918.jpg',
      publishedAt: '2023-09-18T13:52:37Z',
      content:
        'Every time India wins any trophy, one player is always mentioned-legend MS Dhoni. As Rohit Sharma-led Indian squad crushed Sri Lanka to win Asia Cup 2023 by 10 wickets, MS Dhoni was again remembered \u2026 [+1916 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TOI Sports Desk',
      title:
        'Australia great Adam Gilchrist reveals his four World Cup semi-finalists - IndiaTimes',
      description:
        'Cricket News: The man, who boasts an impressive record of nearly 400 international matches spanning three formats, accumulating over 15,000 runs, and being responsi',
      url: 'https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/australia-great-adam-gilchrist-reveals-his-four-world-cup-semi-finalists/articleshow/103761898.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-103761858,width-1070,height-580,imgsize-27350,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-09-18T13:50:00Z',
      content:
        "'Fascinating how Rishabh Pant's impact has changed...': Former Australian wicket-keeperRishabh Pant, who endured a severe car accident in December of the previous year, is presently undergoing a reha\u2026 [+135 chars]",
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'HT Sports Desk',
      title:
        "'Was missed in Asia Cup': Harbhajan's preference after Rohit's 'Ashwin' remark - Hindustan Times",
      description:
        'Harbhajan Singh did not pay heed to the remark on Ashwin made by Rohit as he made an out-of-the-box suggestion to replace Axar. | Cricket',
      url: 'https://www.hindustantimes.com/cricket/yuzvendra-chahal-was-missed-in-asia-cup-harbhajan-singh-response-to-rohit-sharma-ashwin-world-cup-squad-remark-101695042013921.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/harbhajan_ashwin_r_1695043254453_1695043263665.jpg',
      publishedAt: '2023-09-18T13:47:13Z',
      content:
        'Team India on Saturday, the eve of the Asia Cup final, were hit by the news of Axar Patel having incurred a major injury. He later missed the match against Sri Lanka with Washington Sundar being adde\u2026 [+2572 chars]',
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'HT Sports Desk',
      title:
        "'England just under India...': Pietersen dissects World Cup\u2019s 'favourites' tag - Hindustan Times",
      description:
        "England legend Kevin Pietersen dissected the upcoming Cricket World Cup's \u2018favourites\u2019 tag on Twitter. | Cricket",
      url: 'https://www.hindustantimes.com/cricket/england-sitting-just-under-india-pakistan-are-kevin-pietersen-dissects-world-cup-s-favourites-tag-101695042466237.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/CRICKET-TEST-ENG-AUS--6_1695042554153_1695042590957.JPG',
      publishedAt: '2023-09-18T13:21:55Z',
      content:
        'Having clinched their eighth Asia Cup title, all eyes will be on India, who will be hosts for the upcoming ODI World Cup. India defeated Sri Lanka in the Asia Cup 2023 final, winning by 10 wickets in\u2026 [+1808 chars]',
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Devesh Kumar',
      title:
        "Asia Cup 2023 Finals: Ishan Kishan imitates Virat Kohli's walk, his response is breaking internet | Mint - Mint",
      description:
        'India vs Sri Lanka, Asia Cup 2023 Finals: The other players watched Ishan Kishan laughing as he enacted the gestures usually seen from Virat Kohli',
      url: 'https://www.livemint.com/sports/cricket-news/asia-cup-2023-finals-ishan-kishan-imitates-virat-kohlis-walk-his-response-is-breaking-internet-11695040082818.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/09/18/600x338/2_1695041001923_1695041012012.jpg',
      publishedAt: '2023-09-18T12:50:36Z',
      content:
        'India vs Sri Lanka, Asia Cup 2023 Finals: Rohit Sharma-led India won the Asia Cup and a wave of joy ran through a billion fans of the team. The tournament witnessed some of the major clashes in which\u2026 [+2276 chars]',
    },
    {
      source: {
        id: null,
        name: 'Sportskeeda',
      },
      author: 'James Kuanal',
      title:
        "\u201CWelcome to the club\u201D \u2013 Adam Zampa shares screenshot of Mick Lewis' message after equaling worst bowling figures in ODIs vs South Africa - Sportskeeda",
      description:
        'Adam Zampa recently registered the joint-worst bowling figures in ODIs during the fourth ODI between Australia and South Africa in Centurion on Friday, September 15.',
      url: 'https://www.sportskeeda.com/cricket/news-welcome-club-adam-zampa-shares-screenshot-mick-lewis-message-equaling-worst-bowling-figures-odis-vs-south-africa',
      urlToImage:
        'https://staticg.sportskeeda.com/editor/2023/09/cfa18-16950396089125-1920.jpg',
      publishedAt: '2023-09-18T12:26:38Z',
      content:
        'Adam Zampa recently registered the joint-worst bowling figures in ODIs during the fourth ODI between Australia and South Africa in Centurion on Friday, September 15.\r\nThe leg-spinner returned wicketl\u2026 [+1940 chars]',
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'HT Sports Desk',
      title:
        'Asian Games 2023: Full schedule for all sports in Hangzhou - Hindustan Times',
      description:
        'The Asian Games 2023 opening ceremony will be held on September 23 in Hangzhou (China) and the closing ceremony will take place on October 8.',
      url: 'https://www.hindustantimes.com/sports/others/asian-games-2023-full-schedule-for-all-sports-in-hangzhou-101695037858818.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/Asian-Games-0_1695037948883_1695038002123.jpg',
      publishedAt: '2023-09-18T11:57:36Z',
      content:
        'With Asian Games 2023 finally set to begin on September 23, fans will be eagerly waiting for the best athletes in the continent to showcase their talent in Hangzhou, China. The 19th edition of Asian \u2026 [+3454 chars]',
    },
    {
      source: {
        id: 'espn-cric-info',
        name: 'ESPN Cric Info',
      },
      author: 'Matt Roller',
      title:
        "World Cup 2023 - Jason Roy's cold culling reveals depth of England's white-ball riches - ESPNcricinfo",
      description:
        "Malan's form and Brook's promise leave selectors with no option but to squeeze out 2019 star",
      url: 'https://www.espncricinfo.com/story/roy-cold-culling-reveals-depth-of-england-white-ball-riches-1399017',
      urlToImage:
        'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/367400/367472.jpg',
      publishedAt: '2023-09-18T11:43:33Z',
      content:
        'Jason Roy looks on at the end-of-series presentations after missing the New Zealand ODIs\u00A0\u00A0\u2022\u00A0\u00A0Getty Images',
    },
    {
      source: {
        id: null,
        name: 'Wisden.com',
      },
      author: 'Naman Agarwal',
      title:
        '\u2018The best thing for his rehab\u2019 \u2013 Jofra Archer to be England\u2019s only travelling reserve at World Cup - Wisden',
      description:
        "Jofra Archer will be England's only travelling reserve at the World Cup in India. Here's what selector Luke Wright had to say about it.",
      url: 'https://wisden.com/series-stories/cricket-world-cup-2023/the-best-thing-for-his-rehab-jofra-archer-to-be-englands-only-travelling-reserve-at-world-cup',
      urlToImage:
        'https://cdn.wisden.com/wp-content/uploads/2023/09/archer-wc-1.png',
      publishedAt: '2023-09-18T11:33:14Z',
      content:
        'England selector Luke Wright has said that Jofra Archer will be the only travelling reserve for England at the ICC Cricket World Cup in India next month.\r\nEngland announced their final World Cup squa\u2026 [+2999 chars]',
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'HT Sports Desk',
      title:
        'How India can dethrone Pakistan in AUS series to become No. 1 ODI side before WC - Hindustan Times',
      description:
        'The final ODI series ahead of WC, between India and Australia, will decide which team will head to the big tournament as the No. 1 ranked side. | Cricket',
      url: 'https://www.hindustantimes.com/cricket/how-india-can-dethrone-pakistan-in-australia-series-to-become-no-1-odi-side-before-world-cup-101695032228539.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/ANI-20230917324-0_1695032284015_1695032309164.jpg',
      publishedAt: '2023-09-18T11:08:57Z',
      content:
        'Despite India winning the Asia Cup on Sunday with an authoritative 10-wicket win in Colombo against Sri Lanka, lifting the title for a record-extending eighth time in history, they failed to bag the \u2026 [+2158 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TOI Sports Desk',
      title:
        "Virat Kohli reveals what fuels Team India's determination to win World Cup - IndiaTimes",
      description:
        'Cricket News: Celebrated Virat Kohli says he and his teammates are ready to give their best in the upcoming ODI World Cup at home to make the dreams of Indian fans',
      url: 'https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/virat-kohli-reveals-what-fuels-team-indias-determination-to-win-world-cup/articleshow/103757471.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-103757505,width-1070,height-580,imgsize-42496,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-09-18T11:06:00Z',
      content: 'Premier League: City stay top, Man Utd humbled',
    },
    {
      source: {
        id: null,
        name: 'Indiansuperleague.com',
      },
      author: null,
      title:
        'ISL 2023\u201324, Mohun Bagan Super Giant Preview: With strength in depth, Mariners eye silverware - Indian Super League',
      description:
        'Mohun Bagan Super Giant won the Indian Super League (ISL) 2022\u201323 Cup under head coach Juan Ferrando in the 2022-23 season. MBSG also qualified for the AFC Cup group stage after beating Gokulam Kerala in the Club Playoff and more recently MBSG won the Durand \u2026',
      url: 'https://www.indiansuperleague.com/features/isl-202324-mohun-bagan-super-giant-preview-with-strength-in-depth-mariners-eye-silverware',
      urlToImage:
        'https://www.indiansuperleague.com/static-resources/waf-images/content/b5/91/7e/0/vMJL3AxO2c.jpg',
      publishedAt: '2023-09-18T10:47:53Z',
      content:
        'Mohun Bagan Super Giant won the Indian Super League (ISL) 2022\u201323 Cup under head coach Juan Ferrando in the 2022-23 season. MBSG also qualified for the AFC Cup group stage after beating Gokulam Keral\u2026 [+4558 chars]',
    },
    {
      source: {
        id: null,
        name: 'GPone English',
      },
      author: 'GPOne.com',
      title:
        'MotoGP, An Indian Grand Prix full of problems now faces chaos with visas - GPOne.com',
      description: null,
      url: 'https://www.gpone.com/en/2023/09/18/motogp/an-indian-grand-prix-full-of-problems-now-faces-chaos-with-visas.html',
      urlToImage: null,
      publishedAt: '2023-09-18T10:43:52Z',
      content: null,
    },
  ];
}
