/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  tags: string[];
  mapUrl?: string;
}

export interface DayInfo {
  day: number;
  date: string;
  title: string;
  hotel: {
    name: string;
    details: string;
    mapUrl?: string;
  };
  schedule: ScheduleItem[];
  tips?: {
    type: 'wear' | 'transport' | 'food' | 'warn';
    title: string;
    items: string[];
  }[];
}

export interface Station {
  id: string;
  name: string;
  coords: [number, number];
  description: string;
  schedules: { time: string; destination: string; platform: string }[];
}

export const STATIONS: Station[] = [
  {
    id: 'zurich',
    name: 'Zurich HB',
    coords: [47.3782, 8.5402],
    description: '瑞士最大的火車站，也是所有旅程的起點。',
    schedules: [
      { time: '08:02', destination: 'Luzern', platform: '4' },
      { time: '08:32', destination: 'Bern', platform: '12' },
      { time: '09:02', destination: 'Luzern', platform: '4' }
    ]
  },
  {
    id: 'luzern',
    name: 'Luzern',
    coords: [47.0502, 8.3104],
    description: '美麗的湖畔城市，通往皮拉圖斯與鐵力士的門戶。',
    schedules: [
      { time: '08:10', destination: 'Engelberg', platform: '13' },
      { time: '10:05', destination: 'Interlaken Ost', platform: '12' },
      { time: '16:35', destination: 'Zurich HB', platform: '6' }
    ]
  },
  {
    id: 'zermatt',
    name: 'Zermatt',
    coords: [46.0207, 7.7491],
    description: '馬特洪峰腳下的無車山城。',
    schedules: [
      { time: '08:52', destination: 'Visp', platform: '1' },
      { time: '09:52', destination: 'St. Moritz (Glacier Exp)', platform: '2' }
    ]
  },
  {
    id: 'interlaken',
    name: 'Interlaken Ost',
    coords: [46.6908, 7.8689],
    description: '兩湖之間的交通樞紐，前往少女峰的轉運站。',
    schedules: [
      { time: '08:35', destination: 'Grindelwald', platform: '2A' },
      { time: '08:35', destination: 'Lauterbrunnen', platform: '2B' },
      { time: '14:30', destination: 'Luzern', platform: '4' }
    ]
  },
  {
    id: 'grindelwald',
    name: 'Grindelwald',
    coords: [46.6242, 8.0414],
    description: '艾格峰北壁下的登山基地。',
    schedules: [
      { time: '08:15', destination: 'Interlaken Ost', platform: '1' },
      { time: '08:45', destination: 'Kleine Scheidegg', platform: '2' }
    ]
  },
  {
    id: 'montreux',
    name: 'Montreux',
    coords: [46.4312, 6.9106],
    description: '日內瓦湖畔的浪漫城市。',
    schedules: [
      { time: '09:12', destination: 'Lausanne', platform: '1' },
      { time: '09:44', destination: 'Zweisimmen (GoldenPass)', platform: '4' }
    ]
  },
  {
    id: 'bern',
    name: 'Bern',
    coords: [46.9480, 7.4474],
    description: '瑞士首都，迷人的舊城世界地產。',
    schedules: [
      { time: '08:32', destination: 'Zurich HB', platform: '8' },
      { time: '10:04', destination: 'Interlaken Ost', platform: '5' }
    ]
  }
];

export const ITINERARY_DATA: DayInfo[] = [
  {
    day: 1,
    date: '6月14日 (日)',
    title: '台北 → 香港 → 蘇黎世',
    hotel: { name: '機上 / 轉機', details: 'CX383 長途飛行', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zurich+Airport' },
    schedule: [
      { time: '19:50', title: '桃園機場起飛', description: 'CX531 台北 → 香港。建議提早3小時抵達報到。', tags: ['✈️ CX531'] },
      { time: '00:05', title: '香港起飛 → 蘇黎世', description: 'CX383 長途飛行，約13小時。記得帶頸枕與眼罩。', tags: ['✈️ CX383'] }
    ]
  },
  {
    day: 2,
    date: '6月15日 (一)',
    title: '抵達蘇黎世 → 盧森',
    hotel: { name: 'Hotel Central Luzern', details: '盧森市中心 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Central+Luzern' },
    schedule: [
      { time: '07:10', title: '抵達蘇黎世機場', description: '辦理入關、啟用 Swiss Pass。', tags: ['🚉 機場'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zurich+Airport' },
      { time: '09:00', title: '搭車前往盧森', description: '直達火車約50分鐘。', tags: ['🚂 Swiss Pass'] },
      { time: '14:00', title: '卡貝爾木橋漫步', description: '盧森地標，舊城區探索。', tags: ['📸 拍照必去'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kapellbrücke' }
    ]
  },
  {
    day: 3,
    date: '6月16日 (二)',
    title: '盧森 · 皮拉圖斯山',
    hotel: { name: 'Hotel Central Luzern', details: '盧森市中心 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Central+Luzern' },
    schedule: [
      { time: '08:30', title: '遊船至 Alpnachstad', description: '從盧森搭船前往齒軌火車站，欣賞湖景。', tags: ['⛵ 遊船', 'Swiss Pass'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alpnachstad' },
      { time: '10:30', title: '世界最陡齒軌火車', description: '登頂皮拉圖斯山 (2,132m)。', tags: ['🏔️ 皮拉圖斯山'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pilatus' }
    ]
  },
  {
    day: 4,
    date: '6月17日 (三)',
    title: '盧森 · 鐵力士山',
    hotel: { name: 'Hotel Central Luzern', details: '盧森市中心 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Central+Luzern' },
    schedule: [
      { time: '08:30', title: '前往 Engelberg', description: '搭乘火車前往鐵力士山腳下。', tags: ['🚂 鐵路'] },
      { time: '10:00', title: '鐵力士山旋轉纜車', description: '登頂 3,238m，體驗冰宮與雪地。', tags: ['❄️ 終年積雪'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mount+Titlis' }
    ]
  },
  {
    day: 5,
    date: '6月18日 (四)',
    title: '盧森 → 安德瑪特 → 策馬特',
    hotel: { name: 'Hotel Butterfly', details: '山景客房 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Butterfly+Zermatt' },
    schedule: [
      { time: '10:00', title: '冰河列車體驗', description: '從安德瑪特搭乘景觀列車前往策馬特。', tags: ['🚂 景觀列車', '預約制'] },
      { time: '16:00', title: '策馬特漫步', description: '無車山城，初見馬特洪峰。', tags: ['⛰️ 馬特洪峰'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zermatt' }
    ]
  },
  {
    day: 6,
    date: '6月19日 (五)',
    title: '策馬特 · Gornergrat',
    hotel: { name: 'Hotel Butterfly', details: '山景客房 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Butterfly+Zermatt' },
    schedule: [
      { time: '08:30', title: 'Gornergrat 火車', description: '登頂 3,089m，拍攝經典馬特洪峰。', tags: ['🏔️ 絕景'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Gornergrat' },
      { time: '11:00', title: 'Riffelsee 倒影', description: '健行至湖邊拍攝倒影操。', tags: ['📸 婚紗位'] }
    ]
  },
  {
    day: 7,
    date: '6月20日 (六)',
    title: '策馬特 · 五湖健行',
    hotel: { name: 'Hotel Butterfly', details: '山景客房 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Butterfly+Zermatt' },
    schedule: [
      { time: '09:00', title: '五湖健行出發', description: '挑戰經典健行路線，尋找馬特洪峰的不同面貌。', tags: ['🥾 健行'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sunnegga' }
    ]
  },
  {
    day: 8,
    date: '6月21日 (日)',
    title: '策馬特 → 蒙投',
    hotel: { name: 'Mona Montreux', details: '湖景露台房 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mona+Montreux' },
    schedule: [
      { time: '10:00', title: '前往西庸城堡', description: '日內瓦湖畔最美的水上城堡。', tags: ['🏰 歷史景點'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Château+de+Chillon' }
    ]
  },
  {
    day: 9,
    date: '6月22日 (一)',
    title: '蒙投 · 洛桑 + 日內瓦',
    hotel: { name: 'Mona Montreux', details: '湖景露台房 · 含早餐' },
    schedule: [
      { time: '10:00', title: '洛桑奧運博物館', description: '悠閒漫步洛桑與日內瓦噴泉。', tags: ['🏙️ 城市觀光'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jet+d\'Eau' }
    ]
  },
  {
    day: 10,
    date: '6月23日 (二)',
    title: '蒙投 → 黃金列車 → 格林德瓦',
    hotel: { name: 'Hotel Alpenhof', details: '山景露台房 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Alpenhof+Grindelwald' },
    schedule: [
      { time: '09:00', title: '黃金列車出發', description: '穿越最美的黃金山口景觀區。', tags: ['🚂 黃金列車'] }
    ]
  },
  {
    day: 11,
    date: '6月24日 (三)',
    title: '格林德瓦 · 少女峰',
    hotel: { name: 'Hotel Alpenhof', details: '山景露台房 · 含早餐' },
    schedule: [
      { time: '08:00', title: '超級早起上少女峰', description: '歐洲之巔 (3,454m)。', tags: ['🏔️ 少女峰'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jungfraujoch' }
    ]
  },
  {
    day: 12,
    date: '6月25日 (四)',
    title: '格林德瓦 · 市區 + First',
    hotel: { name: 'Hotel Alpenhof', details: '山景露台房 · 含早餐' },
    schedule: [
      { time: '09:00', title: 'First 冒險', description: '懸崖步道與高山湖泊健行。', tags: ['🦅 冒險'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mount+First' }
    ]
  },
  {
    day: 13,
    date: '6月26日 (五)',
    title: '格林德瓦 → 伯恩',
    hotel: { name: 'Hotel Bären Am Bundesplatz', details: '市中心 · 不含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Bären+am+Bundesplatz' },
    schedule: [
      { time: '10:00', title: '漫步伯恩舊城', description: 'UNESCO 遺產，尋找熊公園與鐘塔。', tags: ['🐻 伯恩'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bern+Old+City' }
    ]
  },
  {
    day: 14,
    date: '6月27日 (六)',
    title: '伯恩 → 蘇黎世',
    hotel: { name: 'Ruby Mimi Zurich', details: '時尚精品房 · 含早餐', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ruby+Mimi+Zurich' },
    schedule: [
      { time: '11:00', title: '蘇黎世市區巡禮', description: '林登霍夫山丘俯瞰市景。', tags: ['🏙️ 蘇黎世'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Lindenhoff' }
    ]
  },
  {
    day: 15,
    date: '6月28日 (日)',
    title: '蘇黎世市區觀光',
    hotel: { name: 'Ruby Mimi Zurich', details: '時尚精品房 · 含早餐' },
    schedule: [
      { time: '10:00', title: '湖畔或是美術館', description: '悠閒的一天。', tags: ['🎨 悠閒'] }
    ]
  },
  {
    day: 16,
    date: '6月29日 (一)',
    title: '蘇黎世 · 夏夫豪森',
    hotel: { name: 'Ruby Mimi Zurich', details: '時尚精品房 · 含早餐' },
    schedule: [
      { time: '10:30', title: '萊茵瀑布', description: '歐洲最大瀑布，壯觀體驗。', tags: ['💧 萊茵瀑布'], mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rhine+Falls' }
    ]
  },
  {
    day: 17,
    date: '6月30日 (二)',
    title: '蘇黎世 → 香港 (回程)',
    hotel: { name: '機上', details: '回台飛行之旅' },
    schedule: [
      { time: '13:30', title: '蘇黎世起飛', description: '搭乘 CX382 告別瑞士。', tags: ['✈️ CX382'] }
    ]
  },
  {
    day: 18,
    date: '7月1日 (三)',
    title: '抵達台北',
    hotel: { name: '溫暖的家', details: '蜜月完美結束' },
    schedule: [
      { time: '09:55', title: '抵達桃園機場', description: '謝謝陪我一起完成這次夢想旅程。', tags: ['🏠 回家'] }
    ]
  }
];

export const PACKING_LIST = {
  checked: {
    weightLimit: '23kg',
    items: [
      { category: '衣物', items: ['羽絨外套', '防水防風外套', '長袖中間層', '長褲 x3', '短褲 x2', '內衣褲 x7', '襪子 x7', '睡衣'] },
      { category: '鞋類', items: ['防滑健行鞋 (防水)', '休閒鞋 / 拖鞋'] },
      { category: '食物', items: ['泡麵 (建議10-15包)', '台灣醬包 / 辣椒醬', '零食 / 餅乾'] },
      { category: '生活用品', items: ['牙刷牙膏', '洗面乳 / 保養品', '防曬乳 SPF50+', '護唇膏', '指甲剪'] }
    ]
  },
  carryOn: {
    weightLimit: '7kg',
    items: [
      { category: '證件', items: ['護照', 'Swiss Pass', '機票 (電子/紙本)', '旅館訂單', '行程手冊', '現金 (CHF/EUR)', '信用卡 (多備兩張)'] },
      { category: '電子預備', items: ['行動電源', '相機', '萬國插頭 (J型)', '電腦/平板'] },
      { category: '機上備品', items: ['頸枕', '眼罩 / 耳塞', '保鮮袋', '薄外套'] },
      { category: '隨身醫藥', items: ['腸胃藥', '感冒藥', '止痛藥', '高山症用藥 (丹木斯)'] }
    ]
  }
};
