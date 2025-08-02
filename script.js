// 星座数据 - 基于专业占星学知识
const zodiacData = {
    aries: {
        name: '白羊座',
        icon: '♈',
        element: '火象星座',
        dates: '3月21日 - 4月19日',
        tarot: '皇帝',
        personality: '积极主动、勇敢冲动、天生领导者',
        colors: ['红色', '橙色', '金色'],
        numbers: [1, 8, 17, 26],
        directions: ['东方', '东南方'],
        ruler: '火星',
        quality: '基本星座',
        polarity: '阳性',
        keywords: ['开创', '冲动', '领导', '勇气', '竞争'],
        bodyParts: ['头部', '大脑', '眼睛'],
        strengths: ['勇敢', '决断力强', '热情', '自信', '独立'],
        weaknesses: ['冲动', '急躁', '自私', '缺乏耐心'],
        lifeTheme: '我是 - 自我认同与个人意志的表达'
    },
    taurus: {
        name: '金牛座',
        icon: '♉',
        element: '土象星座',
        dates: '4月20日 - 5月20日',
        tarot: '教皇',
        personality: '稳重踏实、固执保守、重视物质',
        colors: ['绿色', '粉色', '蓝色'],
        numbers: [2, 6, 14, 23],
        directions: ['北方', '西北方'],
        ruler: '金星',
        quality: '固定星座',
        polarity: '阴性',
        keywords: ['稳定', '感官', '物质', '坚持', '享受'],
        bodyParts: ['颈部', '喉咙', '甲状腺'],
        strengths: ['可靠', '耐心', '实用', '忠诚', '稳定'],
        weaknesses: ['固执', '懒惰', '占有欲强', '物质主义'],
        lifeTheme: '我拥有 - 物质安全与感官享受的追求'
    },
    gemini: {
        name: '双子座',
        icon: '♊',
        element: '风象星座',
        dates: '5月21日 - 6月21日',
        tarot: '恋人',
        personality: '聪明机智、善于沟通、多变灵活',
        colors: ['黄色', '银色', '浅蓝色'],
        numbers: [3, 12, 21, 30],
        directions: ['西方', '西南方'],
        ruler: '水星',
        quality: '变动星座',
        polarity: '阳性',
        keywords: ['沟通', '学习', '多样性', '机智', '适应'],
        bodyParts: ['手臂', '肺部', '神经系统'],
        strengths: ['聪明', '适应性强', '幽默', '好奇心强'],
        weaknesses: ['善变', '肤浅', '不专一', '焦虑'],
        lifeTheme: '我思考 - 信息交流与知识探索'
    },
    cancer: {
        name: '巨蟹座',
        icon: '♋',
        element: '水象星座',
        dates: '6月22日 - 7月22日',
        tarot: '战车',
        personality: '温柔体贴、重视家庭、情感丰富',
        colors: ['白色', '银色', '海蓝色'],
        numbers: [4, 13, 22, 31],
        directions: ['南方', '东南方'],
        ruler: '月亮',
        quality: '基本星座',
        polarity: '阴性',
        keywords: ['情感', '家庭', '保护', '直觉', '滋养'],
        bodyParts: ['胸部', '胃部', '消化系统'],
        strengths: ['同情心强', '直觉敏锐', '忠诚', '保护欲强'],
        weaknesses: ['情绪化', '敏感', '占有欲', '怀旧'],
        lifeTheme: '我感受 - 情感安全与家庭归属感'
    },
    leo: {
        name: '狮子座',
        icon: '♌',
        element: '火象星座',
        dates: '7月23日 - 8月22日',
        tarot: '力量',
        personality: '自信大方、热情慷慨、喜欢表现',
        colors: ['金色', '橙色', '红色'],
        numbers: [5, 14, 23, 32],
        directions: ['东方', '东北方'],
        ruler: '太阳',
        quality: '固定星座',
        polarity: '阳性',
        keywords: ['创造', '表演', '领导', '自信', '荣耀'],
        bodyParts: ['心脏', '脊椎', '背部'],
        strengths: ['慷慨', '忠诚', '自信', '有魅力', '乐观'],
        weaknesses: ['自负', '固执', '懒惰', '自我中心'],
        lifeTheme: '我创造 - 自我表达与个人荣耀的展现'
    },
    virgo: {
        name: '处女座',
        icon: '♍',
        element: '土象星座',
        dates: '8月23日 - 9月22日',
        tarot: '隐士',
        personality: '完美主义、细心谨慎、追求精确',
        colors: ['深蓝色', '灰色', '棕色'],
        numbers: [6, 15, 24, 33],
        directions: ['北方', '西北方'],
        ruler: '水星',
        quality: '变动星座',
        polarity: '阴性',
        keywords: ['完美', '服务', '分析', '健康', '实用'],
        bodyParts: ['腹部', '肠道', '神经系统'],
        strengths: ['勤奋', '可靠', '分析能力强', '谦逊'],
        weaknesses: ['挑剔', '焦虑', '过度批判', '完美主义'],
        lifeTheme: '我分析 - 完美与服务的追求'
    },
    libra: {
        name: '天秤座',
        icon: '♎',
        element: '风象星座',
        dates: '9月23日 - 10月23日',
        tarot: '正义',
        personality: '追求平衡、优雅迷人、犹豫不决',
        colors: ['粉色', '浅蓝色', '绿色'],
        numbers: [7, 16, 25, 34],
        directions: ['西方', '西南方'],
        ruler: '金星',
        quality: '基本星座',
        polarity: '阳性',
        keywords: ['平衡', '和谐', '美感', '合作', '公正'],
        bodyParts: ['腰部', '肾脏', '皮肤'],
        strengths: ['外交手腕', '公正', '优雅', '社交能力强'],
        weaknesses: ['犹豫不决', '避免冲突', '肤浅', '自怜'],
        lifeTheme: '我平衡 - 和谐与美感的追求'
    },
    scorpio: {
        name: '天蝎座',
        icon: '♏',
        element: '水象星座',
        dates: '10月24日 - 11月22日',
        tarot: '死神',
        personality: '神秘深沉、意志坚强、占有欲强',
        colors: ['深红色', '黑色', '紫色'],
        numbers: [8, 17, 26, 35],
        directions: ['南方', '东南方'],
        ruler: '冥王星/火星',
        quality: '固定星座',
        polarity: '阴性',
        keywords: ['转化', '深度', '神秘', '重生', '权力'],
        bodyParts: ['生殖器官', '排泄系统', '鼻子'],
        strengths: ['意志坚强', '直觉敏锐', '忠诚', '勇敢'],
        weaknesses: ['嫉妒', '报复心强', '猜疑', '占有欲强'],
        lifeTheme: '我转化 - 深度探索与重生蜕变'
    },
    sagittarius: {
        name: '射手座',
        icon: '♐',
        element: '火象星座',
        dates: '11月23日 - 12月21日',
        tarot: '节制',
        personality: '乐观开朗、热爱自由、直率坦诚',
        colors: ['紫色', '深蓝色', '红色'],
        numbers: [9, 18, 27, 36],
        directions: ['东方', '东北方'],
        ruler: '木星',
        quality: '变动星座',
        polarity: '阳性',
        keywords: ['探索', '哲学', '自由', '冒险', '智慧'],
        bodyParts: ['大腿', '肝脏', '臀部'],
        strengths: ['乐观', '诚实', '哲学思维', '慷慨'],
        weaknesses: ['不负责任', '缺乏耐心', '说话直接', '过度承诺'],
        lifeTheme: '我探索 - 智慧与自由的追寻'
    },
    capricorn: {
        name: '摩羯座',
        icon: '♑',
        element: '土象星座',
        dates: '12月22日 - 1月19日',
        tarot: '魔鬼',
        personality: '务实稳重、有责任心、追求成功',
        colors: ['黑色', '深棕色', '灰色'],
        numbers: [10, 19, 28, 37],
        directions: ['北方', '西北方'],
        ruler: '土星',
        quality: '基本星座',
        polarity: '阴性',
        keywords: ['成就', '责任', '纪律', '传统', '权威'],
        bodyParts: ['膝盖', '骨骼', '皮肤'],
        strengths: ['负责任', '有纪律', '自控力强', '善于管理'],
        weaknesses: ['悲观', '固执', '不宽容', '期望过高'],
        lifeTheme: '我使用 - 成就与责任的承担'
    },
    aquarius: {
        name: '水瓶座',
        icon: '♒',
        element: '风象星座',
        dates: '1月20日 - 2月18日',
        tarot: '星星',
        personality: '独立创新、思想前卫、重视友谊',
        colors: ['蓝色', '银色', '紫色'],
        numbers: [11, 20, 29, 38],
        directions: ['西方', '西南方'],
        ruler: '天王星/土星',
        quality: '固定星座',
        polarity: '阳性',
        keywords: ['创新', '独立', '人道主义', '未来', '友谊'],
        bodyParts: ['小腿', '踝关节', '循环系统'],
        strengths: ['原创性', '独立', '人道主义', '友善'],
        weaknesses: ['情感疏离', '固执', '叛逆', '不可预测'],
        lifeTheme: '我知道 - 创新与人道主义理想'
    },
    pisces: {
        name: '双鱼座',
        icon: '♓',
        element: '水象星座',
        dates: '2月19日 - 3月20日',
        tarot: '月亮',
        personality: '温柔敏感、富有想象力、容易受影响',
        colors: ['海绿色', '紫色', '银色'],
        numbers: [12, 21, 30, 39],
        directions: ['南方', '东南方'],
        ruler: '海王星/木星',
        quality: '变动星座',
        polarity: '阴性',
        keywords: ['直觉', '同情', '艺术', '灵性', '牺牲'],
        bodyParts: ['脚部', '淋巴系统', '松果体'],
        strengths: ['同情心', '艺术天赋', '直觉', '温柔'],
        weaknesses: ['过度敏感', '逃避现实', '缺乏界限', '受害者心态'],
        lifeTheme: '我相信 - 灵性与同情心的体现'
    }
};

// 行星影响数据
const planetaryInfluences = {
    sun: { name: '太阳', keywords: ['自我', '意志', '生命力', '创造力', '领导力'], influence: '核心自我与生命目标' },
    moon: { name: '月亮', keywords: ['情感', '直觉', '潜意识', '母性', '安全感'], influence: '情感需求与内在世界' },
    mercury: { name: '水星', keywords: ['沟通', '思维', '学习', '交流', '逻辑'], influence: '思维方式与沟通能力' },
    venus: { name: '金星', keywords: ['爱情', '美感', '和谐', '价值观', '艺术'], influence: '爱情观与审美品味' },
    mars: { name: '火星', keywords: ['行动', '冲动', '竞争', '勇气', '欲望'], influence: '行动力与竞争意识' },
    jupiter: { name: '木星', keywords: ['扩张', '智慧', '幸运', '哲学', '成长'], influence: '成长机会与人生哲学' },
    saturn: { name: '土星', keywords: ['限制', '责任', '纪律', '成熟', '考验'], influence: '人生课题与责任承担' },
    uranus: { name: '天王星', keywords: ['创新', '变革', '独立', '突破', '未来'], influence: '变革能力与创新思维' },
    neptune: { name: '海王星', keywords: ['梦想', '灵性', '幻想', '艺术', '牺牲'], influence: '灵性追求与梦想实现' },
    pluto: { name: '冥王星', keywords: ['转化', '重生', '深度', '权力', '蜕变'], influence: '深层转化与重生力量' }
};

// 十二宫位系统
const houseSystem = {
    1: { name: '第一宫 - 自我宫', theme: '个性、外貌、第一印象', keywords: ['自我认同', '个性表达', '生命活力'] },
    2: { name: '第二宫 - 财帛宫', theme: '金钱、价值观、物质资源', keywords: ['财富积累', '价值观念', '物质安全'] },
    3: { name: '第三宫 - 兄弟宫', theme: '沟通、学习、兄弟姐妹', keywords: ['沟通能力', '学习方式', '短途旅行'] },
    4: { name: '第四宫 - 田宅宫', theme: '家庭、根基、内在安全', keywords: ['家庭关系', '情感根基', '私人空间'] },
    5: { name: '第五宫 - 子女宫', theme: '创造、恋爱、娱乐', keywords: ['创造表达', '恋爱关系', '娱乐享受'] },
    6: { name: '第六宫 - 奴仆宫', theme: '工作、健康、日常事务', keywords: ['工作态度', '健康状况', '服务精神'] },
    7: { name: '第七宫 - 夫妻宫', theme: '伙伴关系、婚姻、合作', keywords: ['伙伴关系', '婚姻状况', '合作能力'] },
    8: { name: '第八宫 - 疾厄宫', theme: '转化、共同资源、神秘学', keywords: ['深层转化', '共同财产', '神秘体验'] },
    9: { name: '第九宫 - 迁移宫', theme: '哲学、高等教育、远行', keywords: ['人生哲学', '高等学习', '远程旅行'] },
    10: { name: '第十宫 - 官禄宫', theme: '事业、声誉、社会地位', keywords: ['事业成就', '社会声誉', '权威地位'] },
    11: { name: '第十一宫 - 福德宫', theme: '友谊、团体、理想', keywords: ['友谊关系', '团体活动', '未来理想'] },
    12: { name: '第十二宫 - 玄秘宫', theme: '潜意识、灵性、隐藏', keywords: ['潜意识', '灵性成长', '隐藏能力'] }
};

// 星座配对数据
const zodiacCompatibility = {
    fire: ['fire', 'air'], // 火象星座与火象、风象相配
    earth: ['earth', 'water'], // 土象星座与土象、水象相配
    air: ['air', 'fire'], // 风象星座与风象、火象相配
    water: ['water', 'earth'] // 水象星座与水象、土象相配
};

// 当前行星运行影响（模拟数据）
const currentTransits = {
    mercury: { sign: 'gemini', influence: '沟通与学习能力增强' },
    venus: { sign: 'taurus', influence: '感情稳定，财运提升' },
    mars: { sign: 'aries', influence: '行动力强，但需控制冲动' },
    jupiter: { sign: 'pisces', influence: '直觉敏锐，灵性成长' },
    saturn: { sign: 'aquarius', influence: '创新思维，但需要纪律' }
};

// 运势模板
const fortuneTemplates = {
    love: {
        title: '爱情运势',
        high: [
            '金星与你的星座形成和谐相位，爱情能量强烈。单身者在社交场合容易遇到与你心灵相通的对象，可能是通过朋友介绍或文化活动。恋爱中的人感情进入蜜月期，彼此的价值观更加契合，适合讨论未来规划。',
            '第五宫（恋爱宫）受到木星的祝福，桃花运势如虹。你的个人魅力达到巅峰，特别是在表达自己的创意和才华时最为吸引人。已有伴侣的人可能收到惊喜礼物或浪漫约会邀请。',
            '月亮与金星的柔和相位激活了你的情感直觉。你能敏锐感知到对方的真实想法，沟通变得更加深入和真诚。这是表白、求婚或重要感情决定的绝佳时机。'
        ],
        medium: [
            '金星处于中性位置，感情状态相对平稳。虽然没有戏剧性的发展，但这正是深化感情基础的好时机。建议通过共同兴趣爱好来增进彼此了解，避免过于急躁的行为。',
            '第七宫（伙伴宫）受到土星的轻微影响，感情需要更多的耐心和承诺。单身者不妨将注意力转向自我提升，培养内在魅力。已有伴侣的人适合处理实际问题，如未来规划。',
            '水星逆行可能影响沟通，容易产生误解。建议在重要对话前先整理思路，多倾听对方的想法。这个时期适合回顾过往感情经历，从中汲取智慧。'
        ],
        low: [
            '火星与金星形成紧张相位，感情容易出现冲突。你可能过于冲动或占有欲强，需要学会控制情绪。建议暂时保持距离，给彼此一些思考空间，避免做出后悔的决定。',
            '第八宫（转化宫）的能量影响感情深层结构。可能面临信任危机或需要处理过往的情感创伤。这是一个净化和重生的过程，虽然痛苦但有助于感情的长远发展。',
            '土星在第七宫带来感情考验，可能面临现实压力或外界阻力。单身者容易遇到不合适的对象，已有伴侣的人需要共同面对挑战。保持信心，困难是暂时的。'
        ]
    },
    career: {
        title: '事业运势',
        high: [
            '第十宫（事业宫）受到太阳和木星的强力加持，你的专业能力和领导才华将得到充分展现。上司对你刮目相看，重要项目可能委托给你负责。这是争取升职加薪的绝佳时机，勇敢表达你的职业抱负。',
            '火星在第六宫（工作宫）激发你的行动力和效率。你能以超常的专注力完成复杂任务，同事们对你的工作能力赞不绝口。适合启动新项目或申请更具挑战性的职位。',
            '水星与土星形成有利相位，你的沟通能力和组织才能达到巅峰。商务谈判、合同签署、团队管理都会取得突破性进展。这段时间的努力将为未来的事业发展奠定坚实基础。'
        ],
        medium: [
            '第十宫能量平稳，事业发展按既定轨道前进。虽然没有突破性进展，但稳定的表现会为你积累良好的职业声誉。建议专注于技能提升和人际关系维护，为未来机会做准备。',
            '土星在第十宫要求你更加务实和有纪律。工作中可能面临一些规则限制或官僚程序，需要耐心处理。这个时期适合完善工作流程，建立长期的职业规划。',
            '水星逆行影响工作沟通，容易出现信息传达错误或项目延误。建议重复确认重要事项，避免在此时签署重要合同。适合回顾和优化现有工作方法。'
        ],
        low: [
            '火星与土星形成冲突相位，工作中可能遇到权威挑战或资源限制。你的创新想法可能受到保守势力阻挠，需要更多耐心和策略。避免与上级正面冲突，寻找迂回解决方案。',
            '第十二宫（隐藏宫）的影响可能带来职场暗流或竞争对手的挑战。保持低调，专注于自己的工作表现。这个时期适合反思职业方向，可能需要调整长期目标。',
            '冥王星的转化能量要求你重新审视职业价值观。可能面临职业转型的压力或工作环境的重大变化。虽然过程艰难，但这是职业生涯重要的蜕变期，坚持下去会有新的突破。'
        ]
    },
    wealth: {
        title: '财运',
        high: [
            '第二宫（财帛宫）受到金星和木星的双重祝福，财运达到高峰期。投资理财眼光独到，特别是与美容、艺术、奢侈品相关的投资可能带来丰厚回报。商业合作和谈判能力出众，容易达成有利的财务协议。',
            '太阳照耀第八宫（共同资源宫），可能通过合伙投资、保险理赔或他人资助获得意外收益。你的财务管理能力得到认可，可能被委托管理重要资金。这是申请贷款或寻求投资的绝佳时机。',
            '水星与土星形成稳定相位，你的理财规划能力和风险控制意识达到最佳状态。长期投资策略开始显现成效，被动收入可能超出预期。适合进行房地产交易或大宗商品投资。'
        ],
        medium: [
            '第二宫能量平稳，收入来源稳定但增长缓慢。这是建立财务基础和培养理财习惯的好时期。建议制定详细的预算计划，避免不必要的开支，为未来的投资机会积累资金。',
            '土星在财帛宫要求你更加谨慎和有纪律地管理财务。可能面临一些财务限制或需要承担额外的经济责任。这个时期适合学习投资知识，建立长期的财富积累策略。',
            '水星逆行可能影响财务决策和交易进程。合同签署可能延误，投资收益可能不如预期。建议重新审视现有的投资组合，避免在此时做出重大财务决定。'
        ],
        low: [
            '火星与土星在财务宫位形成紧张相位，可能面临意外支出或投资损失。冲动消费和高风险投资需要特别警惕。建议暂停大额投资计划，专注于债务管理和现金流控制。',
            '第十二宫（隐藏宫）的影响可能带来隐性财务风险或欺诈威胁。仔细审查所有财务文件，避免参与不透明的投资项目。这个时期适合整理财务状况，清理不良资产。',
            '冥王星的转化能量要求你重新审视金钱观念和财富目标。可能面临财务危机或需要彻底改变理财方式。虽然过程痛苦，但这是财务观念重塑的重要时期，将为未来的财富积累奠定新基础。'
        ]
    },
    health: {
        title: '健康运势',
        high: [
            '第六宫（健康宫）受到太阳和木星的有力支持，身体活力达到巅峰状态。免疫系统强化，新陈代谢旺盛，是开始新的健身计划或调整饮食结构的绝佳时机。你的身体对营养吸收效率极高，适合尝试新的养生方法。',
            '火星在健康宫位激发你的运动热情和体能潜力。肌肉力量和心肺功能显著提升，适合挑战更高强度的运动项目。但要注意控制运动量，避免因过度兴奋而造成运动伤害。',
            '月亮与金星的和谐相位促进身心平衡和内分泌调节。睡眠质量极佳，皮肤状态和精神面貌都会有明显改善。这是进行美容护理、排毒养颜或心理调节的最佳时期。'
        ],
        medium: [
            '第六宫能量平稳，身体状况稳定但需要持续关注。建议保持规律的作息和均衡的饮食，避免过度劳累。这个时期适合建立长期的健康管理计划，预防胜于治疗。',
            '土星在健康宫位要求你更加重视身体的基础保养。可能需要面对一些慢性健康问题或建立更严格的生活纪律。适合进行全面体检，建立健康档案。',
            '水星逆行可能影响神经系统和消化功能。容易出现失眠、焦虑或肠胃不适。建议调整作息时间，减少刺激性食物摄入，多进行冥想或放松练习。'
        ],
        low: [
            '火星与土星形成紧张相位，身体容易出现炎症反应或肌肉骨骼问题。过度劳累和压力可能导致免疫力下降。建议暂停高强度运动，多休息，必要时寻求专业医疗建议。',
            '第十二宫（隐藏宫）的影响可能带来潜在的健康隐患或心理压力。注意身体发出的微妙信号，不要忽视轻微的不适症状。这个时期适合进行深度体检和心理健康评估。',
            '冥王星的转化能量可能触发身体的深层调整和排毒反应。可能面临健康危机或需要彻底改变生活方式。虽然过程艰难，但这是身体重新获得活力的重要净化期，坚持健康的生活方式至关重要。'
        ]
    },
    overall: {
        title: '综合运势',
        high: [
            '多个行星形成大三角格局，为你带来全方位的幸运能量。太阳、木星、金星的和谐相位激活你的个人魅力和创造潜能，无论在感情、事业还是财运方面都有突破性进展。这是实现重要目标和开启新篇章的黄金时期。',
            '你的守护星与幸运星木星形成完美合相，宇宙能量强烈支持你的所有行动。直觉敏锐，判断准确，容易在关键时刻做出正确决策。贵人运旺盛，可能获得意想不到的帮助和机会。',
            '新月或满月在你的关键宫位发生，标志着人生重要转折点的到来。过去的努力开始收获成果，新的机遇不断涌现。这是许愿和设定新目标的最佳时机，宇宙会全力支持你的愿望实现。'
        ],
        medium: [
            '行星能量处于相对平衡状态，生活各个方面保持稳定发展。虽然没有戏剧性的突破，但这正是巩固基础和积累实力的好时期。建议专注于个人成长和技能提升，为未来的机会做好准备。',
            '土星的稳定影响要求你更加务实和有耐心。可能需要面对一些责任和挑战，但这些都是成长的必经之路。保持积极心态，按部就班地推进计划，成功只是时间问题。',
            '水星逆行期间，生活节奏可能放缓，容易出现沟通误解或计划延误。这是反思和调整的好时机，重新审视目标和方法。避免做出重大决定，专注于完善现有项目。'
        ],
        low: [
            '多个行星形成紧张相位，可能在多个生活领域同时面临挑战。情绪波动较大，容易感到压力和困惑。建议降低期望值，专注于解决最紧迫的问题，避免同时处理太多事务。',
            '土星与个人行星形成困难相位，可能遭遇权威挑战或现实限制。这是人生的考验期，需要更多的耐心和毅力。虽然过程艰难，但克服困难后会获得更强的内在力量。',
            '冥王星的深度转化能量触发人生重大变革。可能面临信念危机或需要彻底改变生活方式。这是灵魂成长的关键时期，虽然痛苦但必要。相信自己的内在智慧，勇敢面对转变。'
        ]
    }
};

// 全局变量
let selectedZodiac = null;
let selectedFocus = 'overall';
let selectedTime = 'today';

// DOM 元素
const zodiacSelector = document.getElementById('zodiacSelector');
const focusSelector = document.getElementById('focusSelector');
const fortuneResult = document.getElementById('fortuneResult');
const zodiacGrid = document.getElementById('zodiacGrid');
const birthdayInput = document.getElementById('birthdayInput');
const birthDate = document.getElementById('birthDate');
const confirmBirthday = document.getElementById('confirmBirthday');
const getFortune = document.getElementById('getFortune');
const shareResult = document.getElementById('shareResult');
const restartFortune = document.getElementById('restartFortune');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initEventListeners();
    loadUserPreferences();
});

// 事件监听器
function initEventListeners() {
    // 输入方式切换
    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const method = this.dataset.method;
            if (method === 'zodiac') {
                zodiacGrid.style.display = 'grid';
                birthdayInput.style.display = 'none';
            } else {
                zodiacGrid.style.display = 'none';
                birthdayInput.style.display = 'block';
            }
        });
    });
    
    // 星座选择
    document.querySelectorAll('.zodiac-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedZodiac = this.dataset.zodiac;
            showFocusSelector();
        });
    });
    
    // 生日确认
    confirmBirthday.addEventListener('click', function() {
        const date = birthDate.value;
        if (date) {
            selectedZodiac = getZodiacFromDate(date);
            if (selectedZodiac) {
                showFocusSelector();
            }
        } else {
            alert('请选择你的生日');
        }
    });
    
    // 关注选择
    document.querySelectorAll('.focus-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.focus-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedFocus = this.dataset.focus;
        });
    });
    
    // 时间选择
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedTime = this.dataset.time;
        });
    });
    
    // 开始占卜
    getFortune.addEventListener('click', function() {
        if (selectedZodiac) {
            generateFortune();
        } else {
            alert('请先选择你的星座');
        }
    });
    
    // 分享结果
    shareResult.addEventListener('click', function() {
        shareFortuneResult();
    });
    
    // 重新占卜
    restartFortune.addEventListener('click', function() {
        resetToStart();
    });
}

// 根据生日获取星座
function getZodiacFromDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'libra';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 'scorpio';
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return 'sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
    
    return null;
}

// 显示关注选择器
function showFocusSelector() {
    zodiacSelector.style.display = 'none';
    focusSelector.style.display = 'block';
    
    // 滚动到关注选择区域
    focusSelector.scrollIntoView({ behavior: 'smooth' });
}

// 生成运势
function generateFortune() {
    const zodiac = zodiacData[selectedZodiac];
    const fortuneType = fortuneTemplates[selectedFocus];
    
    // 生成运势分数 (60-95)
    const score = Math.floor(Math.random() * 36) + 60;
    
    // 根据分数选择运势等级
    let level;
    if (score >= 85) level = 'high';
    else if (score >= 70) level = 'medium';
    else level = 'low';
    
    // 随机选择运势内容
    let fortuneContent = fortuneType[level][Math.floor(Math.random() * fortuneType[level].length)];
    
    // 添加个性化的占星学元素
    const personalizedElements = [];
    
    // 根据守护星添加影响
    if (zodiac.ruler) {
        const rulerKey = zodiac.ruler.toLowerCase().replace('/', '_');
        const planetKeys = Object.keys(planetaryInfluences);
        const matchingPlanet = planetKeys.find(key => zodiac.ruler.includes(planetaryInfluences[key].name));
        
        if (matchingPlanet && Math.random() > 0.5) {
            const planetInfluence = planetaryInfluences[matchingPlanet];
            personalizedElements.push(`你的守护星${planetInfluence.name}在${planetInfluence.influence}方面为你带来特殊能量。`);
        }
    }
    
    // 根据星座特质添加建议
    if (zodiac.quality && Math.random() > 0.6) {
        const qualityAdvice = {
            '基本星座': '作为基本星座，你天生具有开创精神，适合主动出击。',
            '固定星座': '作为固定星座，你的坚持和专注是最大优势，保持耐心。',
            '变动星座': '作为变动星座，你的适应能力很强，灵活应对变化。'
        };
        if (qualityAdvice[zodiac.quality]) {
            personalizedElements.push(qualityAdvice[zodiac.quality]);
        }
    }
    
    // 根据元素添加能量提示
    if (zodiac.element && Math.random() > 0.7) {
        const elementEnergy = {
            '火象星座': '火元素的热情和行动力是你的天赋，勇敢追求目标。',
            '土象星座': '土元素的稳重和实用性帮助你脚踏实地地前进。',
            '风象星座': '风元素的智慧和沟通能力让你在人际关系中游刃有余。',
            '水象星座': '水元素的直觉和情感深度是你独特的感知优势。'
        };
        if (elementEnergy[zodiac.element]) {
            personalizedElements.push(elementEnergy[zodiac.element]);
        }
    }
    
    // 添加当前行星运行影响
    if (Math.random() > 0.8) {
        const transitKeys = Object.keys(currentTransits);
        const randomTransit = transitKeys[Math.floor(Math.random() * transitKeys.length)];
        const transit = currentTransits[randomTransit];
        personalizedElements.push(`当前${planetaryInfluences[randomTransit]?.name || randomTransit}的运行带来：${transit.influence}。`);
    }
    
    // 添加个性化元素到运势文本
    if (personalizedElements.length > 0) {
        fortuneContent += ' ' + personalizedElements[Math.floor(Math.random() * personalizedElements.length)];
    }
    
    // 生成建议
    const advice = generateAdvice(selectedZodiac, selectedFocus, level);
    
    // 随机选择幸运信息
    const luckyColor = zodiac.colors[Math.floor(Math.random() * zodiac.colors.length)];
    const luckyNumber = zodiac.numbers[Math.floor(Math.random() * zodiac.numbers.length)];
    const luckyDirection = zodiac.directions[Math.floor(Math.random() * zodiac.directions.length)];
    
    // 更新结果显示
    updateFortuneDisplay(zodiac, fortuneType.title, score, fortuneContent, advice, luckyColor, luckyNumber, luckyDirection);
    
    // 显示结果
    focusSelector.style.display = 'none';
    fortuneResult.style.display = 'block';
    
    // 滚动到结果区域
    fortuneResult.scrollIntoView({ behavior: 'smooth' });
    
    // 保存用户偏好
    saveUserPreferences();
}

// 更新运势显示
function updateFortuneDisplay(zodiac, fortuneTitle, score, content, advice, luckyColor, luckyNumber, luckyDirection) {
    document.getElementById('resultZodiacIcon').textContent = zodiac.icon;
    document.getElementById('resultZodiacName').textContent = zodiac.name;
    document.getElementById('resultZodiacElement').textContent = zodiac.element + ' | ' + zodiac.dates;
    
    document.getElementById('mainFortuneTitle').textContent = fortuneTitle;
    document.getElementById('fortuneScore').textContent = score;
    document.getElementById('mainFortuneContent').textContent = content;
    
    document.getElementById('tarotName').textContent = zodiac.tarot;
    document.getElementById('tarotMeaning').textContent = getTarotMeaning(zodiac.tarot);
    
    document.getElementById('luckyColor').textContent = luckyColor;
    document.getElementById('luckyNumber').textContent = luckyNumber;
    document.getElementById('luckyDirection').textContent = luckyDirection;
    
    document.getElementById('fortuneAdvice').textContent = advice;
}

// 生成建议
function generateAdvice(zodiacSign, focus, level) {
    const zodiac = zodiacData[zodiacSign];
    const baseAdviceTemplates = {
        love: {
            high: '今天是表达爱意的好时机，勇敢一些！',
            medium: '用心经营感情，真诚是最好的武器。',
            low: '给彼此一些空间，时间会治愈一切。'
        },
        career: {
            high: '抓住机会展现自己，成功就在眼前！',
            medium: '稳扎稳打，团队合作是关键。',
            low: '保持耐心，积累经验比急于求成更重要。'
        },
        wealth: {
            high: '理性投资，财富会稳步增长。',
            medium: '制定理财计划，开源节流并重。',
            low: '避免冲动消费，保守理财为上策。'
        },
        health: {
            high: '保持良好的生活习惯，身体是革命的本钱。',
            medium: '适度运动，劳逸结合很重要。',
            low: '多休息，注意身体发出的信号。'
        },
        overall: {
            high: '把握今天的好运，勇敢追求目标！',
            medium: '保持积极心态，稳步前进。',
            low: '调整心态，为下一次机会做准备。'
        }
    };
    
    let baseAdvice = baseAdviceTemplates[focus][level];
    
    // 生成个性化建议
    const personalizedAdvice = [];
    
    // 基于星座优点的建议
    if (zodiac.strengths && zodiac.strengths.length > 0) {
        const strength = zodiac.strengths[Math.floor(Math.random() * zodiac.strengths.length)];
        personalizedAdvice.push(`发挥你的${strength}优势，这是你天生的才能。`);
    }
    
    // 基于星座关键词的建议
    if (zodiac.keywords && zodiac.keywords.length > 0) {
        const keyword = zodiac.keywords[Math.floor(Math.random() * zodiac.keywords.length)];
        personalizedAdvice.push(`今天特别适合体现你的"${keyword}"特质。`);
    }
    
    // 基于人生主题的建议
    if (zodiac.lifeTheme) {
        personalizedAdvice.push(`记住你的人生主题是"${zodiac.lifeTheme}"，让这个理念指导你的行动。`);
    }
    
    // 基于守护星的建议
    if (zodiac.ruler) {
        const rulerKey = Object.keys(planetaryInfluences).find(key => 
            zodiac.ruler.includes(planetaryInfluences[key].name)
        );
        if (rulerKey) {
            const planet = planetaryInfluences[rulerKey];
            personalizedAdvice.push(`你的守护星${planet.name}在${planet.influence}方面为你带来指引。`);
        }
    }
    
    // 基于身体部位的健康建议
    if (zodiac.bodyParts && zodiac.bodyParts.length > 0 && focus === 'health') {
        const bodyPart = zodiac.bodyParts[Math.floor(Math.random() * zodiac.bodyParts.length)];
        personalizedAdvice.push(`作为${zodiac.name}，要特别关注${bodyPart}的健康。`);
    }
    
    // 基于幸运元素的建议
    if (Math.random() > 0.5) {
        const luckyColor = zodiac.colors[Math.floor(Math.random() * zodiac.colors.length)];
        const luckyDirection = zodiac.directions[Math.floor(Math.random() * zodiac.directions.length)];
        personalizedAdvice.push(`今天穿戴${luckyColor}色的物品，朝向${luckyDirection}思考问题会带来好运。`);
    }
    
    // 随机选择一个个性化建议添加到基础建议中
    if (personalizedAdvice.length > 0) {
        const selectedPersonalAdvice = personalizedAdvice[Math.floor(Math.random() * personalizedAdvice.length)];
        return baseAdvice + ' ' + selectedPersonalAdvice;
    }
    
    return baseAdvice;
}

// 获取塔罗牌含义
function getTarotMeaning(tarotName) {
    const meanings = {
        '皇帝': '代表权威与领导力，提醒你要承担责任，发挥领导才能。',
        '教皇': '象征传统与智慧，建议你遵循既定规则，寻求精神指导。',
        '恋人': '代表选择与结合，提醒你要做出重要决定，相信内心的声音。',
        '战车': '象征意志与胜利，鼓励你坚持目标，克服困难。',
        '力量': '代表内在力量与勇气，提醒你要控制情绪，发挥潜能。',
        '隐士': '象征内省与智慧，建议你独处思考，寻找内在答案。',
        '正义': '代表公平与平衡，提醒你要做出公正的判断。',
        '死神': '象征转变与重生，暗示旧的结束，新的开始。',
        '节制': '代表平衡与调和，建议你保持中庸之道。',
        '魔鬼': '象征诱惑与束缚，提醒你要摆脱负面影响。',
        '星星': '代表希望与灵感，鼓励你相信未来，追求理想。',
        '月亮': '象征直觉与幻象，提醒你要相信内在智慧，但也要保持清醒。'
    };
    
    return meanings[tarotName] || '神秘的力量指引着你前进的方向。';
}

// 分享运势结果
function shareFortuneResult() {
    const zodiac = zodiacData[selectedZodiac];
    const shareText = `我的${zodiac.name}${fortuneTemplates[selectedFocus].title}：${document.getElementById('fortuneScore').textContent}分！快来星运占卜看看你的运势吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '星运占卜',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            alert('运势结果已复制到剪贴板！');
        }).catch(() => {
            alert('分享失败，请手动复制分享内容。');
        });
    }
}

// 重置到开始
function resetToStart() {
    selectedZodiac = null;
    selectedFocus = 'overall';
    selectedTime = 'today';
    
    // 重置所有选择状态
    document.querySelectorAll('.zodiac-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.focus-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
    
    // 重置默认选择
    document.querySelector('.focus-card[data-focus="overall"]').classList.add('selected');
    document.querySelector('.time-btn[data-time="today"]').classList.add('active');
    
    // 显示星座选择器
    zodiacSelector.style.display = 'block';
    focusSelector.style.display = 'none';
    fortuneResult.style.display = 'none';
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 保存用户偏好
function saveUserPreferences() {
    const preferences = {
        zodiac: selectedZodiac,
        focus: selectedFocus,
        time: selectedTime,
        lastVisit: new Date().toISOString()
    };
    localStorage.setItem('starFortunePreferences', JSON.stringify(preferences));
}

// 加载用户偏好
function loadUserPreferences() {
    const saved = localStorage.getItem('starFortunePreferences');
    if (saved) {
        const preferences = JSON.parse(saved);
        const lastVisit = new Date(preferences.lastVisit);
        const now = new Date();
        
        // 如果是同一天访问，可以预选用户偏好
        if (now.toDateString() === lastVisit.toDateString()) {
            if (preferences.focus) {
                selectedFocus = preferences.focus;
                document.querySelector(`.focus-card[data-focus="${preferences.focus}"]`)?.classList.add('selected');
            }
            if (preferences.time) {
                selectedTime = preferences.time;
                document.querySelector(`.time-btn[data-time="${preferences.time}"]`)?.classList.add('active');
            }
        }
    }
}

// 添加一些有趣的交互效果
document.addEventListener('mousemove', function(e) {
    const stars = document.querySelector('.stars-bg');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

// 添加点击星星效果
document.addEventListener('click', function(e) {
    createStarEffect(e.clientX, e.clientY);
});

function createStarEffect(x, y) {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.fontSize = '20px';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '9999';
    star.style.animation = 'starPop 1s ease-out forwards';
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 1000);
}

// 添加星星弹出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes starPop {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 每日运势提醒
function checkDailyFortune() {
    const lastCheck = localStorage.getItem('lastFortuneCheck');
    const today = new Date().toDateString();
    
    if (lastCheck !== today) {
        // 显示每日运势提醒
        setTimeout(() => {
            if (confirm('新的一天开始了！要不要看看今天的运势？')) {
                // 如果用户有保存的星座偏好，直接生成运势
                const saved = localStorage.getItem('starFortunePreferences');
                if (saved) {
                    const preferences = JSON.parse(saved);
                    if (preferences.zodiac) {
                        selectedZodiac = preferences.zodiac;
                        selectedFocus = 'overall';
                        selectedTime = 'today';
                        generateFortune();
                    }
                }
            }
            localStorage.setItem('lastFortuneCheck', today);
        }, 2000);
    }
}

// 页面加载完成后检查每日运势
window.addEventListener('load', checkDailyFortune);