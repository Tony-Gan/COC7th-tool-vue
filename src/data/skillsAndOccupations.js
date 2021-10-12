const ACCOUNTING = "会计";
const ANIMAL_HANDLING = "动物驯养";
const ANTHROPOLOGY = "人类学";
const APPRAISE = "估价";
const ART_CRAFT = "艺术与手艺";
const ARTILLERY = "炮术";
const CHARM = "魅惑";
const CLIMB = "攀爬";
const COMPUTER_USE = "计算机使用";
const CREDIT_RATING = "信用";
const CTHULHU_MYTHOS = "克苏鲁神话";
const DEMOLITIONS = "爆破";
const DISGUISE = "乔装";
const DIVING = "潜水";
const DODGE = "闪避";
const DRIVE_AUTO = "汽车驾驶";
const ELECTRICAL_REPAIR = "电气维修";
const ELECTRONICS = "电子学";
const FAST_TALK = "话术";
const FIGHTING = "格斗";
const FIREARMS = "射击";
const FIRST_AID = "急救";
const HISTORY = "历史";
const HYPNOSIS = "催眠";
const INTIMIDATE = "恐吓";
const JUMP = "跳跃";
const LANGUAGE_OTHER = "外语";
const LANGUAGE_OWN = "母语";
const LAW = "法律";
const LIBRARY_USE = "图书馆使用";
const LISTEN = "聆听";
const LOCKSMITH = "锁匠";
const LORE = "狂热";
const MACHENICAL_REPAIR = "机械维修";
const MEDICINE = "医学";
const NATURAL_WORLD = "博物学";
const NAVIGATION = "领航";
const OCCULT = "神秘学";
const OPERATE_HEAVY_MACHINERY = "操作重型机械";
const PERSUADE = "说服";
const PILOT = "驾驶";
const PSYCHOANALYSIS = "精神分析";
const PSYCHOLOGY = "心理学";
const READ_LIPS = "读唇";
const RIDE = "骑术";
const SCIENCE = "科学";
const SLEIGHT_OF_HAND = "妙手";
const SPOT_HIDDEN = "侦察";
const STEALTH = "潜行";
const SURVIVAL = "生存";
const SWIM = "游泳";
const THROW = "投掷";
const TRACK = "追踪";
const ACTING = "表演";
const ASTRONOMY = "天文学";
const AXE = "斧";
const BIOLOGY = "生物学";
const BOTANY = "植物学";
const BOW = "弓";
const BRAWL = "斗殴";
const CHAINSAW = "链锯";
const CHEMISTRY = "化学";
const CRYPTOGRAPHY = "密码学";
const ENGINEERING = "工程学";
const FINE_ART = "美术";
const FLAIL = "连枷";
const FLAMETHROWER = "火焰喷射器";
const FORENSICS = "法医学";
const FORGERY = "锻造";
const GARROTE = "绞";
const GEOLOGY = "地质学";
const HANDGUN = "手枪";
const HEAVY_WEAPONS = "重武器";
const MACHINE_GUN = "自动步枪";
const MATHEMATICS = "数学";
const METEOROLOGY = "气象学";
const PHARMACY = "药学";
const PHOTOGRAPHY = "摄影";
const PHYSICS = "物理学";
const RIFLE = "步枪";
const SHOTGUN = "霰弹枪";
const SPEAR = "矛";
const SUBMACHINE_GUN = "半自动步枪";
const SWORD = "剑";
const WHIP = "鞭";
const ZOOLOGY = "动物学";
const LITERATURE = "文学";
const LATIN = "拉丁语";
const HEBREW = "希伯来语";
const NON_OWN_LANGUAGE = "其他外语";
const FARMING = "农学";
const TECHNICAL_DRAWING = "机械制图";
const INSTRUMENT = "乐器";
const PILOT_AIRCRAFT = "飞行器驾驶";
const PILOT_BOAT = "船驾驶";
const OTHER = "其他任意技能";
const SCIENCE_SKILLS = [
  ASTRONOMY,
  BIOLOGY,
  BOTANY,
  CHEMISTRY,
  CRYPTOGRAPHY,
  ENGINEERING,
  FORENSICS,
  GEOLOGY,
  MATHEMATICS,
  METEOROLOGY,
  PHARMACY,
  PHYSICS,
  ZOOLOGY,
];

const ART_CRAFT_SKILLS = [ACTING, FARMING, FINE_ART, FORGERY, INSTRUMENT, LITERATURE, PHOTOGRAPHY, TECHNICAL_DRAWING];

const FIGHTING_SKILLS = [AXE, BRAWL, CHAINSAW, FLAIL, GARROTE, SWORD, WHIP, SPEAR];

const FIREARMS_SKILLS = [BOW, FLAMETHROWER, HANDGUN, MACHINE_GUN, RIFLE, SHOTGUN, SUBMACHINE_GUN];

const LANGUAGE_OTHER_SKILLS = [LATIN, HEBREW, NON_OWN_LANGUAGE];

const PILOT_SKILLS = [PILOT_BOAT, PILOT_AIRCRAFT];

const INTERPERSONAL_SKILLS = [CHARM, FAST_TALK, INTIMIDATE, PERSUADE];

const SKILL_LIST = {
  ACCOUNTING: ACCOUNTING,
  ANIMAL_HANDLING: ANIMAL_HANDLING,
  ANTHROPOLOGY: ANTHROPOLOGY,
  APPRAISE: APPRAISE,
  ART_CRAFT: ART_CRAFT,
  ARTILLERY: ARTILLERY,
  CHARM: CHARM,
  CLIMB: CLIMB,
  COMPUTER_USE: COMPUTER_USE,
  CREDIT_RATING: CREDIT_RATING,
  CTHULHU_MYTHOS: CTHULHU_MYTHOS,
  DEMOLITIONS: DEMOLITIONS,
  DISGUISE: DISGUISE,
  DIVING: DIVING,
  DODGE: DODGE,
  DRIVE_AUTO: DRIVE_AUTO,
  ELECTRICAL_REPAIR: ELECTRICAL_REPAIR,
  ELECTRONICS: ELECTRONICS,
  FAST_TALK: FAST_TALK,
  FIGHTING: FIGHTING,
  FIREARMS: FIREARMS,
  FIRST_AID: FIRST_AID,
  HISTORY: HISTORY,
  HYPNOSIS: HYPNOSIS,
  INTIMIDATE: INTIMIDATE,
  JUMP: JUMP,
  LANGUAGE_OTHER: LANGUAGE_OTHER,
  LANGUAGE_OWN: LANGUAGE_OWN,
  LAW: LAW,
  LIBRARY_USE: LIBRARY_USE,
  LISTEN: LISTEN,
  LOCKSMITH: LOCKSMITH,
  LORE: LORE,
  MACHENICAL_REPAIR: MACHENICAL_REPAIR,
  MEDICINE: MEDICINE,
  NATURAL_WORLD: NATURAL_WORLD,
  NAVIGATION: NAVIGATION,
  OCCULT: OCCULT,
  OPERATE_HEAVY_MACHINERY: OPERATE_HEAVY_MACHINERY,
  PERSUADE: PERSUADE,
  PILOT: PILOT,
  PSYCHOANALYSIS: PSYCHOANALYSIS,
  PSYCHOLOGY: PSYCHOLOGY,
  READ_LIPS: READ_LIPS,
  RIDE: RIDE,
  SCIENCE: SCIENCE,
  SLEIGHT_OF_HAND: SLEIGHT_OF_HAND,
  SPOT_HIDDEN: SPOT_HIDDEN,
  STEALTH: STEALTH,
  SURVIVAL: SURVIVAL,
  SWIM: SWIM,
  THROW: THROW,
  TRACK: TRACK,
  ACTING: ACTING,
  ASTRONOMY: ASTRONOMY,
  AXE: AXE,
  BIOLOGY: BIOLOGY,
  BOTANY: BOTANY,
  BOW: BOW,
  BRAWL: BRAWL,
  CHAINSAW: CHAINSAW,
  CHEMISTRY: CHEMISTRY,
  CRYPTOGRAPHY: CRYPTOGRAPHY,
  ENGINEERING: ENGINEERING,
  FINE_ART: FINE_ART,
  FLAIL: FLAIL,
  FLAMETHROWER: FLAMETHROWER,
  FORENSICS: FORENSICS,
  FORGERY: FORGERY,
  GARROTE: GARROTE,
  GEOLOGY: GEOLOGY,
  HANDGUN: HANDGUN,
  HEAVY_WEAPONS: HEAVY_WEAPONS,
  MACHINE_GUN: MACHINE_GUN,
  MATHEMATICS: MATHEMATICS,
  METEOROLOGY: METEOROLOGY,
  PHARMACY: PHARMACY,
  PHOTOGRAPHY: PHOTOGRAPHY,
  PHYSICS: PHYSICS,
  RIFLE: RIFLE,
  SHOTGUN: SHOTGUN,
  SPEAR: SPEAR,
  SUBMACHINE_GUN: SUBMACHINE_GUN,
  SWORD: SWORD,
  WHIP: WHIP,
  ZOOLOGY: ZOOLOGY,
  LITERATURE: LITERATURE,
  LATIN: LATIN,
  HEBREW: HEBREW,
  NON_OWN_LANGUAGE: NON_OWN_LANGUAGE,
  FARMING: FARMING,
  TECHNICAL_DRAWING: TECHNICAL_DRAWING,
  INSTRUMENT: INSTRUMENT,
  PILOT_AIRCRAFT: PILOT_AIRCRAFT,
  PILOT_BOAT: PILOT_BOAT,
  OTHER: OTHER,
  ART_CRAFT_SKILLS: ART_CRAFT_SKILLS,
  SCIENCE_SKILLS: SCIENCE_SKILLS,
  FIREARMS_SKILLS: FIREARMS_SKILLS,
  FIGHTING_SKILLS: FIGHTING_SKILLS,
  LANGUAGE_OTHER_SKILLS: LANGUAGE_OTHER_SKILLS,
  PILOT_SKILLS: PILOT_SKILLS,
  INTERPERSONAL_SKILLS: INTERPERSONAL_SKILLS,
};

const OCCUPATION_LIST = {
  ANTIQUARIAN: {
    name: "Antiquarian",
    chinese_name: "古董收藏家",
    occupation_points: [["edu"]],
    credit_rating: [30, 70],
    skills: [
      APPRAISE,
      ART_CRAFT_SKILLS,
      HISTORY,
      LIBRARY_USE,
      LANGUAGE_OTHER_SKILLS,
      INTERPERSONAL_SKILLS,
      SPOT_HIDDEN,
      OTHER,
    ],
  },
  ARTIST: {
    name: "Artist",
    chinese_name: "艺术家",
    occupation_points: [["edu"], ["pow", "dex"]],
    credit_rating: [9, 50],
    skills: [
      ART_CRAFT_SKILLS,
      [HISTORY, NATURAL_WORLD],
      INTERPERSONAL_SKILLS,
      LANGUAGE_OTHER_SKILLS,
      PSYCHOLOGY,
      SPOT_HIDDEN,
      OTHER,
      OTHER,
    ],
  },
  ATHLETE: {
    name: "Athlete",
    chinese_name: "运动员",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [9, 70],
    skills: [CLIMB, JUMP, BRAWL, RIDE, INTERPERSONAL_SKILLS, SWIM, THROW, OTHER],
  },
  AUTHOR: {
    name: "Author",
    chinese_name: "作家",
    occupation_points: [["edu"]],
    credit_rating: [9, 30],
    skills: [
      LITERATURE,
      HISTORY,
      LIBRARY_USE,
      [NATURAL_WORLD, OCCULT],
      LANGUAGE_OTHER_SKILLS,
      LANGUAGE_OWN,
      PSYCHOLOGY,
      OTHER,
    ],
  },
  CLERGY: {
    name: "Clergy",
    chinese_name: "神职人员",
    occupation_points: [["edu"]],
    credit_rating: [9, 60],
    skills: [ACCOUNTING, HISTORY, LIBRARY_USE, LISTEN, LANGUAGE_OTHER_SKILLS, INTERPERSONAL_SKILLS, PSYCHOLOGY, OTHER],
  },
  CRIMINAL: {
    name: "Criminal",
    chinese_name: "罪犯",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [5, 65],
    skills: [
      INTERPERSONAL_SKILLS,
      PSYCHOLOGY,
      SPOT_HIDDEN,
      STEALTH,
      [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MACHENICAL_REPAIR, SLEIGHT_OF_HAND],
      [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MACHENICAL_REPAIR, SLEIGHT_OF_HAND],
      [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MACHENICAL_REPAIR, SLEIGHT_OF_HAND],
      [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MACHENICAL_REPAIR, SLEIGHT_OF_HAND],
    ],
  },
  DILETTANTE: {
    name: "Dilettante",
    chinese_name: "业余艺术爱好者",
    occupation_points: [["edu"], ["app"]],
    credit_rating: [50, 99],
    skills: [ART_CRAFT_SKILLS, FIREARMS_SKILLS, LANGUAGE_OTHER_SKILLS, RIDE, INTERPERSONAL_SKILLS, OTHER, OTHER, OTHER],
  },
  DOCTOR_OF_MEDICINE: {
    name: "Doctor of Medicine",
    chinese_name: "医生",
    occupation_points: [["edu"]],
    credit_rating: [30, 80],
    skills: [FIRST_AID, LATIN, MEDICINE, PSYCHOLOGY, BIOLOGY, PHARMACY, OTHER, OTHER],
  },
  DRIFTER: {
    name: "Drifter",
    chinese_name: "流浪汉",
    occupation_points: [["edu"], ["app", "dex"]],
    credit_rating: [0, 5],
    skills: [CLIMB, JUMP, LISTEN, NAVIGATION, INTERPERSONAL_SKILLS, STEALTH, OTHER, OTHER],
  },
  ENGINEER: {
    name: "Engineer",
    chinese_name: "工程师",
    occupation_points: [["edu"]],
    credit_rating: [30, 60],
    skills: [
      TECHNICAL_DRAWING,
      ELECTRICAL_REPAIR,
      LIBRARY_USE,
      MACHENICAL_REPAIR,
      OPERATE_HEAVY_MACHINERY,
      ENGINEERING,
      PHYSICS,
      OTHER,
    ],
  },
  ENTERTAINER: {
    name: "Entertainer",
    chinese_name: "艺人",
    occupation_points: [["edu"], ["app"]],
    credit_rating: [9, 70],
    skills: [ACTING, DISGUISE, INTERPERSONAL_SKILLS, INTERPERSONAL_SKILLS, LISTEN, PSYCHOLOGY, OTHER, OTHER],
  },
  FARMER: {
    name: "Farmer",
    chinese_name: "农民",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [9, 30],
    skills: [
      FARMING,
      DRIVE_AUTO,
      INTERPERSONAL_SKILLS,
      MACHENICAL_REPAIR,
      NATURAL_WORLD,
      OPERATE_HEAVY_MACHINERY,
      TRACK,
      OTHER,
      OTHER,
    ],
  },
  HACKER: {
    name: "Hacker",
    chinese_name: "黑客",
    occupation_points: [["edu"]],
    credit_rating: [10, 70],
    skills: [
      COMPUTER_USE,
      ELECTRICAL_REPAIR,
      ELECTRONICS,
      LIBRARY_USE,
      SPOT_HIDDEN,
      INTERPERSONAL_SKILLS,
      OTHER,
      OTHER,
    ],
  },
  JOURNALIST: {
    name: "Journalist",
    chinese_name: "记者",
    occupation_points: [["edu"]],
    credit_rating: [9, 30],
    skills: [PHOTOGRAPHY, HISTORY, LIBRARY_USE, LANGUAGE_OWN, INTERPERSONAL_SKILLS, PSYCHOLOGY, OTHER, OTHER],
  },
  LAWYER: {
    name: "Lawyer",
    chinese_name: "律师",
    occupation_points: [["edu"]],
    credit_rating: [30, 80],
    skills: [ACCOUNTING, LAW, LIBRARY_USE, INTERPERSONAL_SKILLS, INTERPERSONAL_SKILLS, PSYCHOLOGY, OTHER, OTHER],
  },
  LIBRARIAN: {
    name: "Librarian",
    chinese_name: "图书馆管理员",
    occupation_points: [["edu"]],
    credit_rating: [9, 35],
    skills: [ACCOUNTING, LIBRARY_USE, LANGUAGE_OTHER_SKILLS, LANGUAGE_OWN, OTHER, OTHER, OTHER, OTHER],
  },
  MILITARY_OFFICER: {
    name: "Military officer",
    chinese_name: "军官",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [20, 70],
    skills: [ACCOUNTING, FIREARMS_SKILLS, NAVIGATION, INTERPERSONAL_SKILLS, PSYCHOLOGY, SURVIVAL, OTHER, OTHER],
  },
  MISSIONARY: {
    name: "Missionary",
    chinese_name: "传教士",
    occupation_points: [["edu"]],
    credit_rating: [0, 30],
    skills: [
      ART_CRAFT_SKILLS,
      FIRST_AID,
      MACHENICAL_REPAIR,
      MEDICINE,
      NATURAL_WORLD,
      INTERPERSONAL_SKILLS,
      OTHER,
      OTHER,
    ],
  },
  MUSICIAN: {
    name: "Musician",
    chinese_name: "音乐家",
    occupation_points: [["edu"], ["dex", "pow"]],
    credit_rating: [9, 30],
    skills: [INSTRUMENT, INTERPERSONAL_SKILLS, LISTEN, PSYCHOLOGY, OTHER, OTHER, OTHER, OTHER],
  },
  PARAPSYCHOLOGIST: {
    name: "Parapsychologist",
    chinese_name: "超心理学家",
    occupation_points: [["edu"]],
    credit_rating: [9, 30],
    skills: [ANTHROPOLOGY, PHOTOGRAPHY, HISTORY, LIBRARY_USE, OCCULT, LANGUAGE_OTHER_SKILLS, PSYCHOLOGY, OTHER],
  },
  NAVIGATOR: {
    name: "Pilot",
    chinese_name: "飞行员",
    occupation_points: [["edu"], ["dex"]],
    credit_rating: [20, 70],
    skills: [
      ELECTRICAL_REPAIR,
      MACHENICAL_REPAIR,
      NAVIGATION,
      OPERATE_HEAVY_MACHINERY,
      ASTRONOMY,
      PILOT_AIRCRAFT,
      OTHER,
      OTHER,
    ],
  },
  POLICE_DETECTIVE: {
    name: "Police detective",
    chinese_name: "警探",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [20, 50],
    skills: [ACTING, DISGUISE, FIREARMS_SKILLS, LAW, LISTEN, INTERPERSONAL_SKILLS, PSYCHOLOGY, SPOT_HIDDEN, OTHER],
  },
  POLICE_OFFICER: {
    name: "Police officer",
    chinese_name: "警察",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [9, 30],
    skills: [BRAWL, FIREARMS_SKILLS, FIRST_AID, INTERPERSONAL_SKILLS, LAW, PSYCHOLOGY, SPOT_HIDDEN, [DRIVE_AUTO, RIDE]],
  },
  PRIVATE_INVESTIGATOR: {
    name: "Private investigator",
    chinese_name: "私家侦探",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [9, 30],
    skills: [PHOTOGRAPHY, DISGUISE, LAW, LIBRARY_USE, INTERPERSONAL_SKILLS, PSYCHOLOGY, SPOT_HIDDEN, OTHER],
  },
  PROFESSOR: {
    name: "Professor",
    chinese_name: "教授",
    occupation_points: [["edu"]],
    credit_rating: [20, 70],
    skills: [LIBRARY_USE, LANGUAGE_OTHER_SKILLS, LANGUAGE_OWN, PSYCHOLOGY, OTHER, OTHER, OTHER, OTHER],
  },
  SOLDIER: {
    name: "Soldier",
    chinese_name: "士兵",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [9, 30],
    skills: [
      [CLIMB, SWIM],
      DODGE,
      FIGHTING_SKILLS,
      FIREARMS_SKILLS,
      STEALTH,
      SURVIVAL,
      [FIRST_AID, MACHENICAL_REPAIR, LANGUAGE_OTHER_SKILLS],
      [FIRST_AID, MACHENICAL_REPAIR, LANGUAGE_OTHER_SKILLS],
    ],
  },
  TRIBE_MEMBER: {
    name: "Tribe member",
    chinese_name: "部落成员",
    occupation_points: [["edu"], ["dex", "str"]],
    credit_rating: [0, 30],
    skills: [CLIMB, [FIGHTING_SKILLS, THROW], NATURAL_WORLD, LISTEN, OCCULT, SPOT_HIDDEN, SWIM, SURVIVAL],
  },
  ZEALOT: {
    name: "Zealot",
    chinese_name: "狂热者",
    occupation_points: [["edu"], ["pow", "app"]],
    credit_rating: [0, 15],
    skills: [HISTORY, INTERPERSONAL_SKILLS, INTERPERSONAL_SKILLS, PSYCHOLOGY, STEALTH, OTHER, OTHER, OTHER],
  },
};

export { SKILL_LIST, OCCUPATION_LIST };
