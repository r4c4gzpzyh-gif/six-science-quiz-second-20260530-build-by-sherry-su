// 小学科学题库数据
// 按照这个格式添加题目即可
// id: 题目唯一标识（建议连续编号）
// type: 'choice' 为单选题，'judge' 为判断题
// question: 题目内容
// options: 选项数组
// answer: 正确答案的索引（0=A, 1=B, 2=C, 3=D）
// explanation: 解析说明
// difficulty: 难度 1-5
// grade: 适用年级
// category: 知识点分类

const QUESTIONS = [

{
        "id": 1,
        "type": "judge",
        "question": "放大镜能把物体的图像放大，使我们看到物体的更多细节。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "放大镜是凸透镜，具有放大物体图像的作用，帮助观察细节。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 2,
        "type": "judge",
        "question": "我们周围还有许多没有被发现的物质及自然界的秘密。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "自然界未知领域广泛，科学探索永无止境。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 3,
        "type": "judge",
        "question": "地球自转一周是一年，在一个自转周期中会发生四季变化。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "地球自转一周是一天；四季变化由公转引起。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 4,
        "type": "judge",
        "question": "我们使用的工具和技术都已经很先进，能满足生活需要，无需改进。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "工具和技术随需求不断发展，永远存在改进空间。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 5,
        "type": "judge",
        "question": "毕昇发明了活字印刷术，这是中国印刷术发展中的一次改革。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "北宋毕昇发明泥活字，是印刷史上的重大革新。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 6,
        "type": "judge",
        "question": "太阳是自然界最大的能量来源。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "太阳辐射为地球提供光热，驱动风、水循环和光合作用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 7,
        "type": "judge",
        "question": "工程是运用科学和技术进行设计，解决实际问题和制造产品的活动。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "工程核心是应用科学原理和技术手段解决实际问题。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 8,
        "type": "judge",
        "question": "制作塔台时，我们要依据评价量表设计塔台、思考问题。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "评价量表提供标准，指导设计和改进。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 9,
        "type": "judge",
        "question": "化石是存留在岩石中的古生物遗体、遗物或遗迹。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "化石是古生物学研究的重要证据。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 10,
        "type": "judge",
        "question": "正是因为有了动物的遗传和变异，动物的种类才能多样化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "遗传保持物种稳定，变异产生差异，共同促进多样性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 11,
        "type": "judge",
        "question": "金星运行到太阳和地球之间，恰巧三者排成一条直线时，会出现金星凌日天象。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "金星凌日类似日食，但金星视圆面小，呈黑点划过日面。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 12,
        "type": "judge",
        "question": "组成星座的星星大小不同，无论从哪个角度看，星座的形状都是固定的。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "不同角度观测，星座形状会变化（但相对位置固定，这里强调视角影响形状）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 13,
        "type": "judge",
        "question": "花岗岩很坚硬，不会发生任何变化。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "花岗岩在风化、侵蚀等作用下会缓慢变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 14,
        "type": "judge",
        "question": "冰融化成水，白糖加热后变成黑色物质，两者都属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "冰融化是物理变化；白糖炭化是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 15,
        "type": "judge",
        "question": "生物的生长、发育过程中发生着复杂的化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "新陈代谢、细胞分裂等涉及大量化学反应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 16,
        "type": "choice",
        "question": "下列物体不是由细胞组成的是（ ）。",
        "options": ["树叶", "蜗牛", "人体皮肤", "大理石"],
        "answer": 3,
        "explanation": "大理石是非生物，由矿物组成，无细胞结构。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 17,
        "type": "choice",
        "question": "同一地点，不同季节正午时分物体的影长不同是因为（ ）。",
        "options": ["不同季节正午时分的气温不同", "不同季节天气状况不同", "不同季节正午时分的太阳照射角度不同", "不同季节每天的日照时间不同"],
        "answer": 2,
        "explanation": "正午太阳高度角随季节变化，影长相应改变。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 18,
        "type": "choice",
        "question": "下列关于电磁铁的描述，不正确的是（ ）。",
        "options": ["电磁铁的磁性强弱是可以改变的", "电磁铁和磁铁一样，都有南极和北极", "电磁铁实际上和普通磁铁没有任何区别", "电磁铁工作的过程也是能量转化的过程"],
        "answer": 2,
        "explanation": "电磁铁需通电才有磁性，可控制磁极和强弱，与永久磁铁不同。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 19,
        "type": "choice",
        "question": "下列关于住房建造的主要过程，①设计 ②选址 ③明确任务 ④建造 ⑤验收 按先后排序正确的是（ ）。",
        "options": ["③①②④⑤", "③②①④⑤", "②①③④⑤", "③①⑤②④"],
        "answer": 0,
        "explanation": "合理顺序：明确任务→选址→设计→建造→验收。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 20,
        "type": "choice",
        "question": "在比较两个塔台模型抗风能力的强弱时，下列方法最合适的是（ ）。",
        "options": ["用手分别推动塔台模型", "用电风扇的同一档风力分别吹动塔台模型", "用嘴分别吹动塔台模型", "把塔台模型放在同一平板上，慢慢倾斜平板"],
        "answer": 1,
        "explanation": "控制变量，用固定风力模拟自然风，更科学。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 21,
        "type": "choice",
        "question": "下列关于亲代与后代的说法，正确的是（ ）。",
        "options": ["父母都是高个子，子女一定是高个子", "知识也是可以遗传的", "子女会继承父母的全部特征", "亲代与后代之间会有某些相似之处"],
        "answer": 3,
        "explanation": "遗传导致相似，但变异和环境影响使后代不完全相同。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 22,
        "type": "choice",
        "question": "提出生物进化理论的科学家是（ ）。",
        "options": ["达尔文", "牛顿", "钟扬", "马世骏"],
        "answer": 0,
        "explanation": "达尔文《物种起源》提出自然选择进化论。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 23,
        "type": "choice",
        "question": "与地球相邻的两颗行星是（ ）。",
        "options": ["水星、金星", "金星、火星", "月球、火星", "水星、火星"],
        "answer": 1,
        "explanation": "按太阳系顺序，地球两侧为金星和火星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 24,
        "type": "choice",
        "question": "在认识太阳系的八大行星时，我们会把八大行星标记在纸带上，这种属于（ ）。",
        "options": ["重复实验", "观察实验", "建立模型", "对比实验"],
        "answer": 2,
        "explanation": "纸带模型模拟行星相对距离，是建模方法。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 25,
        "type": "choice",
        "question": "为中国空间站在轨运行期间提供补给支持的货运飞船命名为（ ）。",
        "options": ["'玉兔'号", "'嫦娥'系列", "'天舟'系列", "'神舟'系列"],
        "answer": 2,
        "explanation": "天舟货运飞船负责空间站补给。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 26,
        "type": "choice",
        "question": "下列有气泡冒出的物质变化，其中与其他几项有本质不同的是（ ）。",
        "options": ["把干燥的土壤块放入水中", "开水沸腾时", "小苏打和白醋混合", "打开雪碧瓶时冒出气泡"],
        "answer": 2,
        "explanation": "C是化学变化生成二氧化碳；其余为物理变化（气体释放或溶解空气排出）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 27,
        "type": "choice",
        "question": "早期地球的大气层中并没有氧气，经过长时间的演变，氧气含量仍然很低，当绿色植物出现之后，地球的氧气含量逐渐增加。关于地球的氧气含量增加，下列说法不正确的是（ ）。",
        "options": ["地球的氧气含量增加与植物的光合作用有着紧密的联系", "地球的氧气含量增加说明植物的光合作用是化学变化", "绿色植物利用太阳能将二氧化碳和水转化为氧气和为生物提供能量的物质", "为了防止氧气含量继续增加，人类不需要再植树造林"],
        "answer": 3,
        "explanation": "植树造林有利于生态平衡，不会导致氧气过量，且选项说法错误。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 28,
        "type": "judge",
        "question": "工程是为了满足人们的需要设计和使用技术，解决实际问题和制造产品的活动。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "工程定义，强调目的性和技术应用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 29,
        "type": "judge",
        "question": "一个物体上大下小、上轻下重，它就不容易倒。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "重心低、支撑面大，稳定性好。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 30,
        "type": "judge",
        "question": "工程建设是在限制条件下进行设计的，要综合考虑各方面因素。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "受成本、材料、环境等约束，需要权衡。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 31,
        "type": "judge",
        "question": "对塔台模型进行评估后，表示建造塔台工程就完成了。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "评估后还需改进、再测试，直至满足要求。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 32,
        "type": "judge",
        "question": "人的相貌特征、血型等方面存在着遗传和变异现象。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "遗传决定相似，变异导致个体差异。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 33,
        "type": "judge",
        "question": "正因为有了遗传和变异，自然界才出现了形形色色的植物。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "遗传与变异共同推动生物多样性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 34,
        "type": "judge",
        "question": "生活中的指纹锁是利用了每个人独一无二的指纹开锁。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "指纹具有唯一性，用于身份识别。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 35,
        "type": "judge",
        "question": "太阳处于宇宙的中心位置，地球是太阳系中的一颗行星。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "太阳不是宇宙中心，仅是太阳系中心。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 36,
        "type": "judge",
        "question": "北斗七星是大熊座的明显标志，组成斗状的七颗星离我们的距离相同。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "七颗星距离地球不同，只是视觉上构成斗状。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 37,
        "type": "judge",
        "question": "宇宙中每时每刻都有许多恒星在诞生，同时也有许多恒星在消亡。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "恒星演化是持续过程。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 38,
        "type": "judge",
        "question": "我们可以用活动观星盘去空旷的地方认识天上的星座。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "活动星图（观星盘）可帮助识别星座。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 39,
        "type": "judge",
        "question": "白砂糖和食盐在水中溶解是发生了化学变化。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "溶解是物理变化，没有新物质生成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 40,
        "type": "judge",
        "question": "物质的变化经常会产生很多现象，例如发光发热、产生气体、生成沉淀等。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "这些现象常伴随化学变化，但物理变化也可能有类似现象。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 41,
        "type": "judge",
        "question": "人类利用化学变化制造出塑料袋，它轻便易携带，我们要多使用塑料袋。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "塑料袋造成白色污染，应减少使用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 42,
        "type": "judge",
        "question": "中国载人月球探测工程已启动实施，计划2030年前实现中国人首次登陆月球。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "根据国家航天局规划，此说法正确。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 43,
        "type": "choice",
        "question": "关于住房中的各种系统，说法正确的是（ ）。",
        "options": ["房屋都必须安装地暖系统", "采光系统全部用电灯照明，少用自然光", "洗手间要考虑供水和排水系统", "不同住房安装的电路系统是一致的"],
        "answer": 2,
        "explanation": "卫生间必须满足供排水；其他选项过于绝对或错误。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 44,
        "type": "choice",
        "question": "塔台模型制作时，最有可能导致它承重能力差的因素是（ ）。",
        "options": ["采用正方形结构", "采用三角形结构", "立柱等高", "接口处固定牢固"],
        "answer": 0,
        "explanation": "正方形不稳定，易变形；三角形承重好。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 45,
        "type": "choice",
        "question": "塔台制作过程中，同学们使用剪刀剪断吸管，剪刀是（ ）两种简单机械的组合。",
        "options": ["杠杆和滑轮", "轮轴和斜面", "杠杆和斜面", "轮轴和杠杆"],
        "answer": 2,
        "explanation": "剪刀刀刃是斜面，手柄是杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 46,
        "type": "choice",
        "question": "调查校园生物，通常的顺序是（ ）。①制定调查方案 ②分区城调查 ③明确调查任务 ④汇总调查结果",
        "options": ["①②③④", "①③②④", "②①④③", "③①②④"],
        "answer": 3,
        "explanation": "先明确任务，再制定方案，然后分区调查，最后汇总。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 47,
        "type": "choice",
        "question": "在校园生物大搜索中，要清晰地观察到蚯蚓的身体分头、胸、腹三部分，头上有一对触角，建议用（ ）观察。",
        "options": ["肉眼", "放大镜", "光学显微镜", "天文望远镜"],
        "answer": 1,
        "explanation": "放大镜可放大细节，显微镜倍数太高不便整体观察。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 48,
        "type": "choice",
        "question": "在太阳系中，与地球相邻的行星是（ ）。",
        "options": ["水星和金星", "金星和火星", "火星和木星", "木星和土星"],
        "answer": 1,
        "explanation": "地球两侧为金星和火星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 49,
        "type": "choice",
        "question": "夏季是观察星座的好季节，其中构成'夏季大三角'之一的天津四属于（ ）座。",
        "options": ["天鹅", "天鹰", "天琴", "猎户"],
        "answer": 0,
        "explanation": "天津四位于天鹅座；牛郎星（天鹰座），织女星（天琴座）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 50,
        "type": "choice",
        "question": "2021年5月，'祝融号'安全到达某行星表面，开始巡视探测，它到达的行星是（ ）。",
        "options": ["月球", "火星", "水星", "金星"],
        "answer": 1,
        "explanation": "祝融号是火星车。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 51,
        "type": "choice",
        "question": "下列成语所描述的变化有新物质生成的是（ ）。",
        "options": ["刻舟求剑", "百炼成钢", "以卵击石", "木已成舟"],
        "answer": 1,
        "explanation": "百炼成钢涉及碳的氧化，生成新物质；其余为物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 52,
        "type": "choice",
        "question": "大气中的氧气主要来自（ ）。",
        "options": ["微生物", "地球内部", "太阳辐射", "绿色植物"],
        "answer": 3,
        "explanation": "光合作用释放氧气。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 53,
        "type": "choice",
        "question": "科学课堂中我们做了很多实验，下列属于对比实验的是（ ）。",
        "options": ["观察微小生物", "小苏打和白醋混合", "地球模型", "比较铁钉生锈快慢"],
        "answer": 3,
        "explanation": "对比实验设置对照组和实验组；铁钉生锈实验通常控制变量对比。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 54,
        "type": "judge",
        "question": "自行车中轴上的大齿轮转动一圈，链条会带动后轴上的小齿轮转动一圈。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "大齿轮转一圈，小齿轮转更多圈（传动比关系）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 55,
        "type": "judge",
        "question": "大型斜拉桥的桥塔都很高，这主要是让桥更加壮观。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "主要是为了减小拉索角度，提高承载效率。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 56,
        "type": "judge",
        "question": "所有的用电器都是一个电能的转化器。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "用电器将电能转化为其他形式的能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 57,
        "type": "judge",
        "question": "人群中只有双胞胎之间的相貌特征是完全相同的。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "即使同卵双胞胎也有细微差别，且还有其他相似个体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 58,
        "type": "judge",
        "question": "保持生物多样性对于维护地球环境具有重要意义。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "生物多样性维持生态系统稳定。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 59,
        "type": "judge",
        "question": "不同固体物质的晶体虽然有大小之分，但是它们的形状都是相同的。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "不同物质晶体形状各异（如食盐立方体，明矾八面体）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 60,
        "type": "judge",
        "question": "物质发生化学变化，一定伴随着发光、发热现象。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "有些化学变化吸热或不发光（如铁生锈）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 61,
        "type": "judge",
        "question": "月球是距离地球最近的星球。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "月球是地球卫星，平均距离约38万千米。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 62,
        "type": "judge",
        "question": "使用一次性用品是减少垃圾数量的重要方法。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "一次性用品增加垃圾，应减少使用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 63,
        "type": "judge",
        "question": "绝大多数的水污染是由人类的活动引起的。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "工业、农业、生活污水是主要污染源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 64,
        "type": "choice",
        "question": "同样粗细和长短的螺丝钉，螺纹越密，拧起来就更（ ）。",
        "options": ["省力且省时间", "省力但费时间", "费力且费时间"],
        "answer": 1,
        "explanation": "螺纹密相当于斜面更长，省力但需多转圈，费时。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 65,
        "type": "choice",
        "question": "瓦楞纸板中间的夹层做成W形后，相当于增加了纸的（ ）。",
        "options": ["厚度", "宽度", "长度"],
        "answer": 0,
        "explanation": "W形增加了实际厚度，提高抗弯曲能力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 66,
        "type": "choice",
        "question": "在其他条件相同的情况下，下列形状最坚固的是（ ）。",
        "options": ["拱形", "圆形", "球形"],
        "answer": 2,
        "explanation": "球形能均匀分散压力，最坚固。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 67,
        "type": "choice",
        "question": "小电动机通电后转子能转动的秘密是（ ）。",
        "options": ["磁铁的作用", "电磁铁的作用", "磁铁和电磁铁的相互作用"],
        "answer": 2,
        "explanation": "转子电磁铁与定子磁铁相互作用产生转矩。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 68,
        "type": "choice",
        "question": "人在骑行自行车的过程中主要是（ ）。",
        "options": ["动能转化成化学能", "化学能转化成动能", "动能转化成热能"],
        "answer": 1,
        "explanation": "人消耗化学能（食物）转化为机械动能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 69,
        "type": "choice",
        "question": "野生大熊猫主要分布在我国（ ）等地。",
        "options": ["四川、陕西、甘肃", "西藏、青海、新疆", "黑龙江、吉林、辽宁"],
        "answer": 0,
        "explanation": "大熊猫分布于川陕甘的山区。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 70,
        "type": "choice",
        "question": "下列不开花植物，属于藻类的是（ ）。",
        "options": ["铁线蕨", "葫芦藓", "海带"],
        "answer": 2,
        "explanation": "海带是褐藻；铁线蕨是蕨类，葫芦藓是苔藓。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 71,
        "type": "choice",
        "question": "生物学家把狗、鱼、鸟归为一类的依据是（ ）。",
        "options": ["都需要吃食物", "都能繁殖后代", "身体中都有脊柱"],
        "answer": 2,
        "explanation": "脊椎动物共同特征。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 72,
        "type": "choice",
        "question": "耳廓狐，是最小的狐属动物。一对大耳朵占了头部的极大比例，软长的体毛大致呈淡黄色。根据这些特征可以推测耳廓狐生活在（ ）。",
        "options": ["干燥的沙漠", "湿润的草地", "寒冷的极地"],
        "answer": 0,
        "explanation": "大耳朵利于散热，淡黄色保护色，适应沙漠。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 73,
        "type": "choice",
        "question": "用放大镜观察指纹，觉得指纹图像太小，为使图像大一些，正确的方法是（ ）。",
        "options": ["眼睛和手指不动，让放大镜离手指稍远些", "眼睛和手指不动，让放大镜离手指稍近些", "放大镜和手指不动，让眼睛离放大镜远些"],
        "answer": 0,
        "explanation": "放大镜物距小于焦距时，远离物体可增大像。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 74,
        "type": "choice",
        "question": "导致米饭在口腔里发生化学变化的主要物质是（ ）。",
        "options": ["牙齿", "唾液", "微生物"],
        "answer": 1,
        "explanation": "唾液淀粉酶将淀粉分解为麦芽糖。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 75,
        "type": "choice",
        "question": "蜡烛在燃烧过程中的变化属于（ ）。",
        "options": ["物理变化", "化学变化", "既有物理变化又有化学变化"],
        "answer": 2,
        "explanation": "蜡烛熔化是物理变化，燃烧是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 76,
        "type": "choice",
        "question": "把铁钉浸入硫酸铜溶液中，能观察到明显的实验现象是（ ）。",
        "options": ["产生大量气泡", "溶液颜色变深", "铁钉上有红色物质附着"],
        "answer": 2,
        "explanation": "铁置换出铜，红色铜附着。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 77,
        "type": "choice",
        "question": "北京时间2021年5月15日，我国自主打造的天问一号探测器'祝融'号成功着陆于（ ）。",
        "options": ["月球", "金星", "火星"],
        "answer": 2,
        "explanation": "祝融号着陆火星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 78,
        "type": "choice",
        "question": "采用新型垃圾填埋场填埋垃圾，能有效减少对环境的污染。但用这种方法处理垃圾，最大的缺点是（ ）。",
        "options": ["易造成地下水污染", "占用大量土地", "易造成土地污染"],
        "answer": 1,
        "explanation": "填埋需要大量土地，且土地长期无法利用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 79,
        "type": "choice",
        "question": "根据2019年新修订的《杭州市生活垃圾管理条例》，用过的餐巾纸属于（ ）。",
        "options": ["有害垃圾", "可回收物", "其他垃圾"],
        "answer": 2,
        "explanation": "餐巾纸受污染且水溶性强，归为其他垃圾。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 80,
        "type": "choice",
        "question": "自来水的净化处理过程比较复杂，一般的净化处理顺序是（ ）。",
        "options": ["沉淀---过滤---杀菌", "过滤---沉淀---杀菌", "杀菌---沉淀---过滤"],
        "answer": 0,
        "explanation": "先静置沉淀大颗粒，再过滤细小悬浮物，最后消毒。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 81,
        "type": "choice",
        "question": "每年的9月22日是'世界无车日'。'无车日'活动的推广，从环境保护的角度看，这有利于减少（ ）。",
        "options": ["大气污染", "石油污染", "白色污染"],
        "answer": 0,
        "explanation": "减少汽车尾气排放，改善空气质量。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 82,
        "type": "choice",
        "question": "下列眼镜的镜片中具有放大功能的是（ ）。",
        "options": ["平光眼镜", "近视眼镜", "老花眼镜", "实验室安全防护眼镜"],
        "answer": 2,
        "explanation": "老花镜是凸透镜，可放大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 83,
        "type": "choice",
        "question": "我们分别是用肉眼、放大镜和手持式简易显微镜来观察蚯蚓时，所看到的蚯蚓图像是不一样的。以下说法正确的是（ ）。",
        "options": ["用肉眼观察看到的范围最大", "用放大镜观察看到的范围最大", "用显微镜观察看到的范围最大", "用显微镜观察看到的范围最小，看到的图像也最小"],
        "answer": 0,
        "explanation": "放大倍数越大，视野范围越小。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 84,
        "type": "choice",
        "question": "世界上第一个发现细胞的科学家是（ ）。",
        "options": ["列文虎克", "简·施旺麦丹", "罗伯特·胡克", "达尔文"],
        "answer": 2,
        "explanation": "罗伯特·胡克用显微镜观察软木，命名细胞。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 85,
        "type": "choice",
        "question": "小电动机是将电能转化为动能的装置，可以使转子转动更快的方法是（ ）。",
        "options": ["增大电流", "改变电流方向", "减少线圈圈数", "改变线圈缠绕方向"],
        "answer": 0,
        "explanation": "增大电流增强磁场，转速加快。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 86,
        "type": "choice",
        "question": "海水稻是科学家新培育出来的能在盐碱地生长的水稻新品种，而我们杭州地区农田中的水稻生活在淡水中。这一现象说明了基因的（ ）。",
        "options": ["进化现象", "变异现象", "遗传现象", "适应现象"],
        "answer": 1,
        "explanation": "基因变异产生了耐盐性状。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 87,
        "type": "choice",
        "question": "在上《昼夜交替现象》一课时，同学们提出了四种假说：①地球不动，太阳围着地球转；②太阳不动，地球围着太阳转；③地球自转；④地球围着太阳转，同时地球自转。通过模拟实验，我们发现（ ）种假说都可以解释昼夜交替现象。",
        "options": ["①②③", "②③④", "①②④", "①②③④"],
        "answer": 3,
        "explanation": "四种相对运动都能产生昼夜交替，只是地心说模型不符合实际。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 88,
        "type": "choice",
        "question": "太阳的东升西落是（ ）造成的。",
        "options": ["地球自西向东自转", "地球自东向西自转", "地球自西向东公转", "地球自东向西公转"],
        "answer": 0,
        "explanation": "地球自西向东自转，太阳相对东升西落。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 89,
        "type": "choice",
        "question": "下列物品中使用的原理与水龙头相同的是（ ）。",
        "options": ["钓鱼竿", "跷跷板", "扳手", "楼梯"],
        "answer": 2,
        "explanation": "扳手也是轮轴原理。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 90,
        "type": "choice",
        "question": "模拟活字印刷的正确步骤是（ ）。",
        "options": ["晾制、检字、刷墨、拓印", "刷墨、拓印、晾制、检字", "检字、刷墨、晾制、拓印", "检字、刷墨、拓印、晾制"],
        "answer": 3,
        "explanation": "先检字排版，再刷墨，然后拓印，最后晾干。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 91,
        "type": "choice",
        "question": "下列动物中，（ ）属于昆虫。",
        "options": ["蚯蚓", "蝗虫", "蝙蝠", "蜘蛛"],
        "answer": 1,
        "explanation": "昆虫有三对足；蝗虫符合，蚯蚓环节动物，蝙蝠哺乳，蜘蛛蛛形纲。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 92,
        "type": "choice",
        "question": "下列有关地球、太阳与宇宙的说法，错误的是（ ）。",
        "options": ["太阳是太阳系中唯一发光的恒星", "太阳不会运动", "宇宙包括很多星系", "宇宙不断地在膨胀"],
        "answer": 1,
        "explanation": "太阳在银河系中运动。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 93,
        "type": "choice",
        "question": "以下场地中最适宜夜晚观星的是（ ）。",
        "options": ["小区楼下", "宽阔的马路", "郊外的山顶", "城镇学校操场"],
        "answer": 2,
        "explanation": "郊外山顶光污染少，视野开阔。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 94,
        "type": "choice",
        "question": "课文介绍制作银河系模型时，用粘在纸片上的米粒模拟（ ）。",
        "options": ["大行星", "小行星", "流星", "恒星"],
        "answer": 3,
        "explanation": "米粒代表银河系中无数恒星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 95,
        "type": "choice",
        "question": "生物的多样性非常重要，为了减缓物种灭绝速度，（ ）不是有效方法。",
        "options": ["建立自然保护区", "建立种子库", "建立自然观光区", "建立动物精子库"],
        "answer": 2,
        "explanation": "过度旅游开发可能破坏栖息地，不是保护措施。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 96,
        "type": "choice",
        "question": "下列成语描述的变化，有新物质产生的是（ ）。",
        "options": ["磨铁成针", "百炼成钢", "木已成舟", "滴水成冰"],
        "answer": 1,
        "explanation": "百炼成钢是化学变化（碳被氧化）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 97,
        "type": "choice",
        "question": "通过研究庞大的猛犸象化石，我们可以推测它是一种能适应（ ）环境的动物。",
        "options": ["特别炎热", "特别寒冷", "四季如春", "温暖湿润"],
        "answer": 1,
        "explanation": "猛犸象有长毛和厚脂肪，适应寒冷。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 98,
        "type": "choice",
        "question": "以下几种气体中，成分与其他三种不同的是（ ）。",
        "options": ["摇晃可乐饮料时产生的气体", "蜡烛燃烧时产生的气体", "水烧开时产生的气体", "小苏打和白醋混合时产生的气体"],
        "answer": 2,
        "explanation": "水烧开产生水蒸气（H₂O）；其他为二氧化碳（CO₂）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 99,
        "type": "choice",
        "question": "下列属于可再生能源的是（ ）。",
        "options": ["石油", "煤", "太阳能", "天然气"],
        "answer": 2,
        "explanation": "太阳能可再生；化石能源不可再生。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 100,
        "type": "choice",
        "question": "性状是指可遗传的生物学形态结构、生理和行为等特征的总和。下列人体特征属于性状的是（ ）。",
        "options": ["头发粗细", "头发造型", "头发染色", "头发长短"],
        "answer": 0,
        "explanation": "头发粗细由基因决定，造型、染色、长短是人为或环境因素。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 101,
        "type": "choice",
        "question": "下列情况中，铁钉最不容易生锈的是（ ）。",
        "options": ["全部浸泡在水中", "全部浸泡在油中", "放在空气中", "部分浸在水中"],
        "answer": 1,
        "explanation": "油隔绝水和空气。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 102,
        "type": "choice",
        "question": "接通电流的电磁铁与普通磁铁的不同之处是（ ）。",
        "options": ["磁铁有南北极，电磁铁没有南北极", "磁铁有磁性，电磁铁没有磁性", "磁铁能指示南北方向，电磁铁不能指示南北方向", "磁铁不能改变磁性强弱，电磁铁可以改变磁性强弱"],
        "answer": 3,
        "explanation": "电磁铁磁性强弱可调，磁极可换向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 103,
        "type": "choice",
        "question": "世界万物一直在变化中，以下现象中属于物理变化的是（ ）。",
        "options": ["植物光合作用", "紫甘蓝与白醋混合", "酸雨形成", "水沸腾"],
        "answer": 3,
        "explanation": "水沸腾是状态变化，物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 104,
        "type": "judge",
        "question": "微生物是十分细小的，需要借助显微镜等工具才能观察到，蘑菇、木耳用肉眼就能看到，所以蘑菇、木耳不属于微生物。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "微生物包括真菌中的蘑菇、木耳，只是它们个体大，但仍属微生物范畴（通常指需显微镜观察，但大型真菌被归为微生物学研究对象）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 105,
        "type": "judge",
        "question": "太阳离地球近时，地球上获得的热量多，是夏季；太阳离地球远时，地球上获得的热量少，是冬季。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "季节由太阳直射点移动决定，与日地距离关系不大；地球近日点在1月（冬季）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 106,
        "type": "judge",
        "question": "蜡油是蜡烛在燃烧时产生的新物质。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "蜡油是蜡烛受热熔化，属物理变化，不是新物质。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 107,
        "type": "judge",
        "question": "光年是表示光行走一年的时间单位。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "光年是距离单位。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 108,
        "type": "judge",
        "question": "发光发热、颜色变化、产生沉淀或气体等现象是判断是否发生化学变化的重要依据。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "这些现象常伴随化学变化，但也要注意物理变化也可能有类似现象（需综合判断）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 109,
        "type": "judge",
        "question": "沈括在《梦溪笔谈》中记载，在太行山中发现了许多海螺化石。这说明当时的太行山地区是一片海洋。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "化石证明古环境。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 110,
        "type": "judge",
        "question": "测试塔台模型就是从塔高、顶端承重、抗风能力、抗震能力四个方面进行测试。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "常见测试指标。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 111,
        "type": "judge",
        "question": "食物进入人体内后，只发生了化学变化。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "还有物理变化（如咀嚼、搅拌）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 112,
        "type": "judge",
        "question": "通电直导线靠近指南针，会发现指南针发生偏转。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "电流产生磁场。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 113,
        "type": "choice",
        "question": "要在A地与B地之间建造一座小桥，下列选项需要最先做的是（ ）。",
        "options": ["实施建设", "制作一个模型", "在限制条件下进行设计", "准备材料"],
        "answer": 2,
        "explanation": "工程建造应先进行设计，明确限制条件，再后续步骤。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 114,
        "type": "choice",
        "question": "竞标过程中，下列行为不正确的是（ ）。",
        "options": ["正确流利地介绍本组设计的优势", "对其他竞标对手进行有理由的质疑和评议", "夸大其他竞标对手的设计缺陷", "采用画图和文字结合的方式表达自己的创意"],
        "answer": 2,
        "explanation": "夸大缺陷是不诚信行为，违背公平竞标原则。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 115,
        "type": "choice",
        "question": "建造小桥有多种材料可选择，下列材料最不适合建造小桥的是（ ）。",
        "options": ["纸", "木材", "钢材", "石块"],
        "answer": 0,
        "explanation": "纸的强度低，不耐水，不适合承重桥梁。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 116,
        "type": "choice",
        "question": "小桥建设过程中，面临的限制条件包括（ ）。①时间 ②费用 ③可用材料 ④环境 ⑤抵抗自然界的破坏能力",
        "options": ["①③④", "①②③④", "①②③④⑤", "①②③⑤"],
        "answer": 2,
        "explanation": "所有选项都是工程建设中必须考虑的限制条件。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 117,
        "type": "choice",
        "question": "如果在建造小桥的过程中发现原来的设计有问题，应该（ ）。",
        "options": ["放弃建造", "仍按原设计建造", "根据工程实际，不用设计图直接建造", "对原设计图进行修改，再按新的设计建造"],
        "answer": 3,
        "explanation": "应修改设计并遵循新方案，确保工程质量。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 118,
        "type": "choice",
        "question": "我们可以通过（ ）来保护生物多样性。",
        "options": ["建立自然保护区", "破坏动物栖息地", "乱砍滥伐树木", "大肆捕猎野生动物"],
        "answer": 0,
        "explanation": "自然保护区是保护生物多样性的有效措施。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 119,
        "type": "choice",
        "question": "下列哪一组物品都使用了电动机？",
        "options": ["电风扇、洗衣机", "电灯、电视机", "煤气灶、太阳能热水器", "机械手表、手动榨汁机"],
        "answer": 0,
        "explanation": "电风扇和洗衣机依靠电动机驱动；其他选项无电动机。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 120,
        "type": "choice",
        "question": "我们可以像科学家一样研究校园中的生物，下列做法不合理的是（ ）。",
        "options": ["调查校园中的动物和植物，统计它们的数量，记下它们的名称", "对于不认识的动物和植物可以具体描述特征，画下来或拍照片", "发现不认识的小动物时，可以抓来进行研究", "制作校园生物分布图，给校园植物挂牌"],
        "answer": 2,
        "explanation": "应保护动物，不随意捕捉；可观察记录。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 121,
        "type": "choice",
        "question": "为了清楚地观察校园中一些较小的生物，我们需要带的工具是（ ），此工具的特点是透明，中央厚，边缘薄。",
        "options": ["卷尺", "放大镜", "玻璃片", "测力计"],
        "answer": 1,
        "explanation": "放大镜是中央厚边缘薄的凸透镜。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 122,
        "type": "choice",
        "question": "校园中生物种类繁多，下列同学的观点正确的是（ ）。",
        "options": ["只要是同一类生物，形态结构是完全一样的", "生物的亲代和后代会有一定的差异", "一棵桃树上的果实酸甜各不相同，描述的是遗传现象", "用不同的标准给生物分类，分类的结果都是一样的"],
        "answer": 1,
        "explanation": "变异导致亲代与后代存在差异；C项描述的是变异，不是遗传。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 123,
        "type": "choice",
        "question": "分类是科学研究常用的方法，和校园中麻雀属于同一类的是（ ）。",
        "options": ["蜻蜓和蝴蝶", "鸽子和企鹅", "金鱼和鲤鱼", "猫和兔"],
        "answer": 1,
        "explanation": "麻雀是鸟类，鸽子和企鹅也是鸟类。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 124,
        "type": "choice",
        "question": "使用显微镜观察玻片标本时，要先用低倍物镜观察，再用高倍物镜观察。与高倍物镜相比，用低倍物镜观察时，我们视野内看到的细胞会（ ）。",
        "options": ["更多，更小", "更多，更大", "更少，更小", "更少，更大"],
        "answer": 0,
        "explanation": "低倍镜视野大，细胞数量多但个体小。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 125,
        "type": "choice",
        "question": "下列关于微生物的描述，正确的是（ ）。",
        "options": ["微生物都生活在水中", "微生物都是肉眼看不见的", "微生物的形状都是差不多的", "有的微生物能处理垃圾和污水"],
        "answer": 3,
        "explanation": "一些微生物可分解有机物，用于污水处理。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 126,
        "type": "choice",
        "question": "我们可以通过（ ）来保护生物多样性。",
        "options": ["建立自然保护区", "破坏动物栖息地", "乱砍滥伐树木", "大肆捕猎野生动物"],
        "answer": 0,
        "explanation": "建立自然保护区是有效保护措施。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 127,
        "type": "choice",
        "question": "人类对地球运动的探索经历了一个相当漫长的过程，托勒密的'地心说'和哥白尼的'日心说'中相同的观点是（ ）。",
        "options": ["地球是球形的", "地球24小时自转一周", "太阳不动，其它天体围绕着太阳转", "地球不动，其它天体围绕着地球转"],
        "answer": 0,
        "explanation": "两者都认为地球是球体；日心说认为地球绕日公转，地心说相反。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 128,
        "type": "choice",
        "question": "中国第一位进入太空的宇航员是（ ）。",
        "options": ["费俊龙", "杨利伟", "聂海胜", "王亚平"],
        "answer": 1,
        "explanation": "杨利伟于2003年乘神舟五号进入太空。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 129,
        "type": "choice",
        "question": "通过实际观察发现，下列节日中可能发生日食现象的是（ ）。",
        "options": ["春节（农历正月初一）", "中秋节（农历八月十五）", "端午节（农历五月初五）", "重阳节（农历九月初九）"],
        "answer": 0,
        "explanation": "日食发生在农历初一（朔月）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 130,
        "type": "choice",
        "question": "星空随着四季的变化而发生变化，有一颗恒星的位置基本不变，这颗恒星是（ ）。",
        "options": ["天狼星", "北斗星", "北极星", "牛郎星"],
        "answer": 2,
        "explanation": "北极星位于地轴指向附近，看起来位置恒定。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 131,
        "type": "choice",
        "question": "下列有关宇宙的说法错误的是（ ）。",
        "options": ["宇宙中每时每刻都有许多恒星在诞生，也有许多恒星在消亡", "宇宙诞生于上百亿年前的一次大爆炸，目前宇宙还处于膨胀之中", "随着科学技术的发展，人类的探测器已经探测到宇宙的边缘", "太阳系只是银河系中一个极为普通的天体系统"],
        "answer": 2,
        "explanation": "人类尚未探测到宇宙边缘，宇宙无限或可观测有限。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 132,
        "type": "choice",
        "question": "下列哪一组星体是夏季大三角的成员？",
        "options": ["北极星、天狼星、北斗星", "牛郎星、织女星、天津四", "心宿二、轩辕十四、北河三", "猎户座、天兔座、大犬座"],
        "answer": 1,
        "explanation": "夏季大三角由牛郎星（天鹰座）、织女星（天琴座）、天津四（天鹅座）组成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 133,
        "type": "choice",
        "question": "下列哪一组都是中国在太空探索方面取得的成就？",
        "options": ["神舟飞船载人飞行、嫦娥探月工程", "哈勃望远镜、国际空间站", "火星车'毅力号'、阿波罗登月", "旅行者一号、卡西尼号"],
        "answer": 0,
        "explanation": "神舟和嫦娥是中国成就；其他选项为外国或国际项目。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 134,
        "type": "choice",
        "question": "A同学将准备好的白色粉末倒进气球内，小心地将气球套在装有无色液体的玻璃瓶口上，接着把气球内的粉末抖落到瓶中与液体混合，气球就被'吹'大了。实验中的白色粉末和无色液体最有可能的是（ ）。",
        "options": ["小苏打和水", "食盐和白糖", "小苏打和白醋", "白糖和水"],
        "answer": 2,
        "explanation": "小苏打（碳酸氢钠）与水不反应，小苏打和白醋产生二氧化碳。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 135,
        "type": "choice",
        "question": "A同学将准备好的白色粉末倒进气球内，小心地将气球套在装有无色液体的玻璃瓶口上，接着把气球内的粉末抖落到瓶中与液体混合，气球就被'吹'大了。根据上述判断，充满整个气球的气体是（ ）。",
        "options": ["二氧化碳", "水蒸气", "氢气", "氧气"],
        "answer": 0,
        "explanation": "小苏打与酸反应生成二氧化碳。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 136,
        "type": "choice",
        "question": "B同学做了一朵白色纸花，她先在'花瓣'上涂了一种无色透明的液体，再把紫甘蓝水喷洒在'花瓣'上，发现'花瓣'变成了红色。实验中，'花瓣'上涂的液体有可能是（ ）。",
        "options": ["白醋", "水", "小苏打溶液", "以上都有可能"],
        "answer": 0,
        "explanation": "紫甘蓝水遇酸变红，白醋是酸性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 137,
        "type": "choice",
        "question": "B同学做了一朵白色纸花，她先在'花瓣'上涂了一种无色透明的液体，再把紫甘蓝水喷洒在'花瓣'上，发现'花瓣'变成了红色。实验中，'花瓣'上产生的变化是（ ）。",
        "options": ["物理变化", "化学变化", "形态变化", "状态变化"],
        "answer": 1,
        "explanation": "酸碱指示剂变色是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 138,
        "type": "choice",
        "question": "下列有关化学变化的表述正确的是（ ）。",
        "options": ["只要物体的颜色发生变化，就一定发生了化学变化", "电灯通电时发光发热，属于化学变化", "把沙子放进水中，看到沙子沉淀，说明发生了化学变化", "物质发生化学变化时，不一定发光发热，但一定有新物质产生"],
        "answer": 3,
        "explanation": "化学变化的本质是有新物质生成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 139,
        "type": "choice",
        "question": "小可研究铁钉生锈原因（有三支试管：甲有水有空气，乙无水有空气，丙有水无空气）。一星期后观察发现，（ ）试管中的铁钉锈蚀最严重。",
        "options": ["甲", "乙", "丙", "乙和丙"],
        "answer": 0,
        "explanation": "铁生锈需要水和空气同时存在。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 140,
        "type": "choice",
        "question": "小可研究铁钉生锈原因（有三支试管：甲有水有空气，乙无水有空气，丙有水无空气）。从实验中发现铁生锈的条件是（ ）。",
        "options": ["水", "空气", "水和空气共同作用", "和水、空气都无关"],
        "answer": 2,
        "explanation": "铁生锈需要水和氧气同时存在。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 141,
        "type": "choice",
        "question": "铁钉生锈属于（ ），证据是（ ）。",
        "options": ["物理变化，颜色改变", "化学变化，有新物质铁锈生成", "物理变化，形状改变", "化学变化，发热"],
        "answer": 1,
        "explanation": "铁锈是不同物质，证明发生了化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 142,
        "type": "choice",
        "question": "瞭望塔模型建造的一般过程是（ ）。",
        "options": ["设计---制作---测试---评估和改进", "制作---设计---评估和改进---测试", "设计---测试---评估和改进", "测试---评估和改进---设计---制作"],
        "answer": 0,
        "explanation": "工程一般流程为设计、制作、测试、评估与改进。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 143,
        "type": "choice",
        "question": "在瞭望塔模型的设计过程中，下列做法不合适的是（ ）。",
        "options": ["用图文结合的方式表达自己的创意与构想", "既考虑项目的可行性，也考虑安全性", "将模型的高大、美观作为设计的首要目标", "每个成员有明确分工和合理的时间安排"],
        "answer": 2,
        "explanation": "首要目标应是稳固和功能性，而非美观。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 144,
        "type": "choice",
        "question": "建造瞭望塔模型是工程设计中的重要环节，其主要目的是（ ）。",
        "options": ["供人参观", "测试设计的可实施性，避免损失", "工程师的兴趣爱好", "使表格更加直观"],
        "answer": 1,
        "explanation": "模型用于验证设计可行性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 145,
        "type": "choice",
        "question": "在建造瞭望塔模型的过程中，合理的说法是（ ）。",
        "options": ["接口处的胶带越多越好", "模型的尺寸必须要和真实的塔台一样高", "建造瞭望塔只需要考虑承重", "利用框架结构，可以提高模型的牢固程度"],
        "answer": 3,
        "explanation": "框架结构增加稳定性；胶带过多不一定好，尺寸不必1:1，还需考虑抗风抗震等。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 146,
        "type": "choice",
        "question": "下列测试方法与测试性质对应正确的是（ ）。",
        "options": ["抗风能力---用尺子测量模型", "承重能力---用电风扇吹模型", "抗震能力---用地震模拟器震动模型", "塔台高度---重物压在模型顶端"],
        "answer": 2,
        "explanation": "抗震能力需模拟地震；A用尺子测高度；B用电风扇测抗风；D用重物测承重。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 147,
        "type": "choice",
        "question": "要检验瞭望塔模型是否符合工程要求，下列最有效的方法是（ ）。",
        "options": ["设计", "测试", "评估", "改进"],
        "answer": 1,
        "explanation": "通过测试获取数据，判断是否达标。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 148,
        "type": "choice",
        "question": "家用手摇晾衣架，它应用的简单机械主要有（ ）。",
        "options": ["杠杆和滑轮", "杠杆和轮轴", "轮轴和滑轮", "杠杆和斜面"],
        "answer": 2,
        "explanation": "手摇柄是轮轴，晾衣绳上的滑轮是滑轮。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 149,
        "type": "choice",
        "question": "晾衣架上的丁滑轮属于（ ）。",
        "options": ["动滑轮", "定滑轮", "滑轮组"],
        "answer": 1,
        "explanation": "根据常见晾衣架，顶部滑轮通常为定滑轮，改变力的方向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 150,
        "type": "choice",
        "question": "家用手摇晾衣架上的手摇轮，使用时可以起到（ ）的作用。",
        "options": ["省力", "省距离", "改变用力方向", "既省力又省距离"],
        "answer": 0,
        "explanation": "轮轴原理，轮半径大省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 151,
        "type": "choice",
        "question": "电磁铁都由（ ）和（ ）两部分组成。",
        "options": ["铁芯和线圈", "磁铁和导线", "电池和开关", "铁芯和磁铁"],
        "answer": 0,
        "explanation": "电磁铁由铁芯和线圈组成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 152,
        "type": "choice",
        "question": "小明用以下A、B、C三个电磁铁做实验，这三个电磁铁的铁芯大小、导线粗细等都一样，所用的电池也相同。（A：3节电池，线圈50匝；B：2节电池，线圈50匝；C：3节电池，线圈100匝）。上面三个电磁铁中，磁力最小的是（ ）。",
        "options": ["电磁铁A", "电磁铁B", "电磁铁C"],
        "answer": 1,
        "explanation": "B电池少，电流小，磁力小。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 153,
        "type": "choice",
        "question": "小明用以下A、B、C三个电磁铁做实验，这三个电磁铁的铁芯大小、导线粗细等都一样，所用的电池也相同。（A：3节电池，线圈50匝；B：2节电池，线圈50匝；C：3节电池，线圈100匝）。如果小明要研究'电磁铁的磁力大小与电池数量有关吗？'，那么他应该选择（ ）两个电磁铁进行对比实验。",
        "options": ["A和B", "A和C", "B和C"],
        "answer": 0,
        "explanation": "对比电池数量，应控制线圈匝数相同，A和B匝数相同（50匝），电池数不同。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 154,
        "type": "choice",
        "question": "小明用以下A、B、C三个电磁铁做实验，这三个电磁铁的铁芯大小、导线粗细等都一样，所用的电池也相同。（A：3节电池，线圈50匝；B：2节电池，线圈50匝；C：3节电池，线圈100匝）如果选择A和C做磁力大小对比实验，那么实验结果应该是（ ）。",
        "options": ["A > C", "A < C", "A = C"],
        "answer": 1,
        "explanation": "A和C电池数相同（3节），但C匝数多，磁力更大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 155,
        "type": "choice",
        "question": "通过实验，小明还发现了电磁铁具有（ ）的基本性质。",
        "options": ["吸引铁制品", "改变磁力大小", "通电产生磁性、断电磁性消失"],
        "answer": 2,
        "explanation": "电磁铁的基本性质是电磁感应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 156,
        "type": "choice",
        "question": "小林培养微生物，方案如下表：（1号：纯净水，窗台；2号：鱼塘水，窗台；3号：沟渠水+干稻草，窗台；4号：纯净水+干稻草，冰箱）。一星期后小林用滴管，从4个烧杯中各取一滴水，分别滴在载玻片上，盖上盖玻片，在显微镜下观察。你认为小林最有可能观察到微生物的是（ ）。",
        "options": ["1号和2号", "2号和3号", "3号和4号", "1号和4号"],
        "answer": 1,
        "explanation": "鱼塘水和沟渠水富含微生物；纯净水不易培养微生物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 157,
        "type": "choice",
        "question": "小林在显微镜下观察到的草履虫，属于（ ）生物。",
        "options": ["单细胞", "双细胞", "多细胞"],
        "answer": 0,
        "explanation": "草履虫是单细胞原生动物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 158,
        "type": "choice",
        "question": "上面研究方法能够培养出微生物的实验属于（ ）。",
        "options": ["对比实验", "模拟实验", "观察实验"],
        "answer": 0,
        "explanation": "有对照组和实验组，控制变量。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 159,
        "type": "choice",
        "question": "下列哪一组都是微生物的生物特征？",
        "options": ["能运动、能繁殖、能呼吸", "有细胞壁、有叶绿体、能光合作用", "能结晶、能蒸发、能沉淀", "能导电、能传热、能反射"],
        "answer": 0,
        "explanation": "生命特征包括新陈代谢、生长繁殖、应激性等。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 160,
        "type": "choice",
        "question": "2020年6月21日发生了日食，这天应该是我国农历（ ）。",
        "options": ["初一", "十五", "廿三"],
        "answer": 0,
        "explanation": "日食发生在朔日（农历初一）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 161,
        "type": "choice",
        "question": "日环食现象是在（ ）过程中形成的。",
        "options": ["地球绕太阳公转", "地球绕地轴自转", "月球绕地球公转"],
        "answer": 2,
        "explanation": "日食是月球运行到日地之间造成的。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 162,
        "type": "choice",
        "question": "2020年6月21日发生日环食时，地球、太阳、月球之间的位置关系正确的是（ ）。",
        "options": ["太阳---地球---月球（三者一线）", "太阳---月球---地球（三者一线）", "月球---太阳---地球（三者一线）", "太阳---月球---地球呈L形"],
        "answer": 1,
        "explanation": "日食时月球在太阳和地球之间。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 163,
        "type": "choice",
        "question": "下列观看日食的方法中，正确的是（ ）。",
        "options": ["用肉眼直接观看", "用望远镜对准太阳观看", "隔着电焊护目镜观看", "用普通墨镜观看"],
        "answer": 2,
        "explanation": "电焊护目镜可滤除强光；其他方法伤眼。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 164,
        "type": "choice",
        "question": "2020年6月21日发生的日环食，我国境内只有西藏、四川、贵州、湖南、江西、福建、台湾等地的人们才能看到。这是因为（ ）。",
        "options": ["月球影子较小，只落在地球局部区域", "太阳只照射那些地区", "地球自转使其他地区看不到", "云层遮挡"],
        "answer": 0,
        "explanation": "日食带狭窄，只有月影扫过的地区可见。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 165,
        "type": "choice",
        "question": "用显微镜观察洋葱表皮细胞时，先要制作洋葱表皮细胞装片。下列制作洋葱表皮细胞装片的各个环节中，正确的操作顺序是（ ）。①标本染色 ②滴加清水 ③盖盖玻片 ④吸取多余水分 ⑤放置表皮",
        "options": ["①②③④⑤", "⑤④③②①", "②⑤③①④", "②⑤③④①"],
        "answer": 2,
        "explanation": "正确顺序：滴水→放表皮→盖片→染色→吸多余水。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 166,
        "type": "choice",
        "question": "用显微镜观察水中微生物时，有时需要在载玻片上放少量的脱脂棉纤维。其主要目的是（ ）。",
        "options": ["让盖玻片和载玻片贴得更紧", "控制微生物的运动，方便观察", "方便数出微生物的数量", "为微生物提供营养"],
        "answer": 1,
        "explanation": "脱脂棉纤维限制微生物活动范围。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 167,
        "type": "choice",
        "question": "我们用显微镜来观察水中的微小生物时，会发现水中有很多微小生物，如草履虫、变形虫、衣藻、线虫。下列特征中，最能作为判断微小物体是生物的依据是（ ）。",
        "options": ["能运动", "能光合作用", "能呼吸", "能进行新陈代谢"],
        "answer": 3,
        "explanation": "生物的基本特征是新陈代谢、生长繁殖、应激性等。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 168,
        "type": "choice",
        "question": "在东方明珠塔项目建造前进行设计时，需要考虑哪些限制因素？①时间 ②材料成本 ③人员分工 ④对环境的影响",
        "options": ["②④", "①②④", "②③④", "①②③④"],
        "answer": 3,
        "explanation": "工程限制条件包括时间、成本、人员、环境等多方面。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 169,
        "type": "choice",
        "question": "每天正午时分，阳光下的电视塔下会有长长的影子，一年之中，它的影子在（ ）最短。",
        "options": ["春分", "夏至", "秋分", "冬至"],
        "answer": 1,
        "explanation": "北半球夏至正午太阳高度角最大，影子最短。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 170,
        "type": "choice",
        "question": "明珠电视塔高达468米，从图上分析，它有哪些结构上的设计使得它保持屹立不倒？（ ）",
        "options": ["上小下大的结构", "三角形框架支撑", "使用轻质材料", "底部有沉重的基础"],
        "answer": 2,
        "explanation": "轻质材料不利于抗风，电视塔常用钢筋混凝土等重材料；稳固主要靠重心低、支撑面大、框架结构等。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 171,
        "type": "choice",
        "question": "工程师们通常通过建立模型来测试自己的设计。如果要建立一个高塔模型，通常要经历（ ）的过程。",
        "options": ["设计、改进、制作、测试、评估", "设计、评估、制作、测试、改进", "设计、制作、测试、改进、评估", "设计、制作、测试、评估、改进"],
        "answer": 3,
        "explanation": "正确流程：设计→制作→测试→评估→改进（循环）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 172,
        "type": "choice",
        "question": "手推式独轮挖孔机通过燃烧汽油使钻头转动，这一过程把（ ）能转化为动能。",
        "options": ["电", "化学", "热", "光"],
        "answer": 1,
        "explanation": "汽油燃烧释放化学能转化为机械能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 173,
        "type": "choice",
        "question": "手推式独轮挖孔机启动开关后，机器开始工作，旋转的钻头上的螺旋铁片相当于简单机械中的（ ）。",
        "options": ["杠杆", "滑轮", "斜面", "轮轴"],
        "answer": 2,
        "explanation": "螺旋是斜面的变形。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 174,
        "type": "choice",
        "question": "手推式独轮挖孔机挖孔完成时，人用力把独轮车的手柄往上抬，这是相当于简单机械中的（ ）。",
        "options": ["杠杆", "轮轴", "滑轮", "斜面"],
        "answer": 0,
        "explanation": "手柄抬起时，车把是杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 175,
        "type": "choice",
        "question": "人们用独轮车推着手推式独轮挖孔机前进时，车轮起到的作用（ ）。",
        "options": ["与自行车前轮运动时的作用一样", "与汽车方向盘工作的作用一样", "与螺丝刀工作的作用一样", "与撬棍撬动石块的作用一样"],
        "answer": 0,
        "explanation": "车轮都起滚动减少摩擦的作用；方向盘是轮轴，螺丝刀是轮轴，撬棍是杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 176,
        "type": "choice",
        "question": "手推式独轮挖孔机工作时，地面在钻头作用下，土壤被迅速挖出来，留下一个一个孔，这属于（ ）变化。",
        "options": ["物理", "化学", "生物", "核"],
        "answer": 0,
        "explanation": "只是形状改变，无新物质生成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 177,
        "type": "choice",
        "question": "神舟十三号上三名航天员在太空生活的空间站叫（ ）。",
        "options": ["神州号", "天问号", "天宫号", "嫦娥号"],
        "answer": 2,
        "explanation": "中国空间站名为'天宫'。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 178,
        "type": "choice",
        "question": "空间站在太空中是围绕（ ）飞行的。",
        "options": ["太阳", "地球", "月亮", "火星"],
        "answer": 1,
        "explanation": "空间站绕地球运行。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 179,
        "type": "choice",
        "question": "航天员在太空中不可能发生的情景是（ ）。",
        "options": ["直播授课", "与地球合影", "打乒乓球锻炼身体", "站着睡觉"],
        "answer": 2,
        "explanation": "微重力下乒乓球无法正常弹跳。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 180,
        "type": "choice",
        "question": "地球公转方向是（ ）。",
        "options": ["自东向西", "自西向东", "自南向北", "自北向南"],
        "answer": 1,
        "explanation": "公转方向与自转相同，自西向东（逆时针从北极看）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 181,
        "type": "choice",
        "question": "如图，地球公转到夏至位置时，南半球处于（ ）。",
        "options": ["春季", "夏季", "秋季", "冬季"],
        "answer": 3,
        "explanation": "夏至太阳直射北回归线，南半球获得热量少，为冬季。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 182,
        "type": "choice",
        "question": "地球公转的特点是（ ）。",
        "options": ["围绕地轴转", "公转一周的时间是一天", "公转时倾斜方向保持不变", "公转时倾斜的方向会改变"],
        "answer": 2,
        "explanation": "地轴指向北极星，方向不变。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 183,
        "type": "choice",
        "question": "地球是太阳系中的一颗（ ）。",
        "options": ["恒星", "行星", "卫星", "彗星"],
        "answer": 1,
        "explanation": "地球是行星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 184,
        "type": "choice",
        "question": "有一种天文现象叫金星凌日，我们会在地球上看到太阳前面有一小黑点在移动，其实那是金星。金星凌日发生时，三者的位置关系是（ ）。",
        "options": ["太阳---地球---金星", "地球---金星---太阳", "金星---太阳---地球", "太阳---金星---地球"],
        "answer": 1,
        "explanation": "金星运行到地球和太阳之间，且三者成一直线。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 185,
        "type": "judge",
        "question": "制作生物分布图时，可用编号的方法标注各区域中生物的名称，也可用画图的方式呈现。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "在科学调查中，为了避免图面杂乱，可采用编号+图例或简笔画的方式标注生物分布，这是规范且实用的记录方法。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 186,
        "type": "judge",
        "question": "科考队发现不同岛屿的象龟甲壳形状略有差异，这是遗传现象。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "不同岛屿象龟甲壳的差异属于同一物种内的性状差异，是变异现象；遗传是指亲代与子代之间的相似性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 187,
        "type": "judge",
        "question": "地球上生物之间相互依存、相互作用，生物多样性是人类生存与发展的基础。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "生物多样性为人类提供食物、药物、氧气等资源，同时维持生态系统的稳定，是人类生存和发展的重要基础。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 188,
        "type": "judge",
        "question": "住房中的屋顶分布式光伏属于供电系统，与其他系统相互独立，互不影响。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "住房的供水、供电、采暖、通风等系统是相互关联、协同工作的，并非完全独立。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 189,
        "type": "judge",
        "question": "工程建设的选址是第一步，需要考虑地形、气候、交通等多种因素。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "工程建设需要综合考虑自然条件和社会条件，选址阶段必须评估地形、气候、交通、环境等因素。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 190,
        "type": "judge",
        "question": "三角形框架具有稳定性，因此建筑结构中大量使用三角形结构可以增强稳定性。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "三角形是最稳定的平面几何形状，受到外力时不易变形，因此广泛应用于建筑和工程结构中。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 191,
        "type": "judge",
        "question": "工程建设过程中，需要反复评估改进，才能达成最终的工程要求。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "工程设计是一个迭代优化的过程，需要通过反复测试、评估和改进，才能满足各项性能指标。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 192,
        "type": "judge",
        "question": "校园生物大搜索时，因为区域太大，只需要调查认识的生物即可。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "科学调查应力求全面，不认识的生物也应通过拍照或绘图记录，不能选择性忽略。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 193,
        "type": "judge",
        "question": "培育高产新品种番茄利用了植物的遗传和变异现象。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "人工选择育种利用了生物的可遗传变异，将优良性状通过遗传传递给后代。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 194,
        "type": "judge",
        "question": "孟德尔通过长期的豌豆实验发现了生物遗传的基本规律。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "孟德尔通过豌豆杂交实验，发现了基因的分离定律和自由组合定律，被称为'现代遗传学之父'。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 195,
        "type": "judge",
        "question": "如果每个性状表现出两种特征，3个性状可以呈现6类不同的相貌。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "3个性状、每个性状2种表现形式，根据排列组合原理，共有2×2×2=8种组合，而非6种。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 196,
        "type": "judge",
        "question": "随着季节的变换，天空中会出现不同的代表星座，如冬季星空有猎户座、大犬座等。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "由于地球公转，不同季节夜晚看到的星空区域不同，冬季星空以猎户座、大犬座为代表。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 197,
        "type": "judge",
        "question": "使用活动观星图时，应将其平放在桌面上，并使图上的方向与实际方向一致。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "活动观星盘使用时应当举过头顶，并将星盘上的方向与天空实际方向对准，平放无法正确对应星空。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 198,
        "type": "judge",
        "question": "太阳系中，太阳是一颗静止不动的恒星，而八颗行星围绕太阳运动。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "太阳并非绝对静止，它也在银河系中高速运动，只是相对于行星位置相对稳定。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 199,
        "type": "judge",
        "question": "宇宙是运动变化着、膨胀着的，组成宇宙的天体也是运动着的。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "现代天文学证实，宇宙自大爆炸以来一直在膨胀，星系、恒星等天体都在运动变化中。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 200,
        "type": "judge",
        "question": "氢气燃烧生成水，这个过程中产生了新物质，属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "氢气与氧气反应生成水，产生了新物质，是典型的化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 201,
        "type": "judge",
        "question": "小苏打和白醋混合后产生的气体能使燃烧的火柴熄灭，这种气体是二氧化碳。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "小苏打（碳酸氢钠）与白醋（醋酸）反应生成二氧化碳，二氧化碳不支持燃烧。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 202,
        "type": "judge",
        "question": "清退高污染企业进行生态治理，说明我们要减少有害的化学变化对环境的破坏。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "化学变化具有两面性，应利用有益的化学变化，防止和控制有害的化学变化对环境的破坏。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 203,
        "type": "judge",
        "question": "为了测试湖水的酸碱性，可以使用紫甘蓝汁液作为指示剂。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "紫甘蓝中含有花青素，在不同pH条件下会呈现不同颜色，可作天然酸碱指示剂。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 204,
        "type": "judge",
        "question": "制作塔台模型时，如果发现设计方案有缺陷，可以边制作边随意修改，不需要再画图记录。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "工程设计中的任何修改都应基于评估并更新图纸，以保证方案可追溯、可交流、可优化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 205,
        "type": "judge",
        "question": "工程与技术是相互促进的，工程的难题推动技术发展，技术进步又支撑工程的实施。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "工程与技术在相互需求和相互支撑中不断发展，如航天工程推动了材料科学、计算机技术的发展。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 206,
        "type": "judge",
        "question": "港珠澳大桥在修建过程中利用了两座天然岛屿。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "港珠澳大桥为实现桥隧转换，修建的是人工岛，而非利用天然岛屿。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 207,
        "type": "judge",
        "question": "搭建结构应遵循从下到上、先稳固基础的原则，即先搭底座，再搭立柱，最后搭顶端。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "从底部开始搭建可以确保结构的稳定性和垂直度，是工程建造的基本顺序。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 208,
        "type": "judge",
        "question": "塔台模型底部比上部大且重、采用框架结构和三角形结构都能增加稳固性。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "上小下大、上轻下重可降低重心；框架结构和三角形结构能增强抗变形能力，共同提高稳定性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 209,
        "type": "judge",
        "question": "改进塔台模型时，可以在保证承重和安全的前提下减少关键承重位置的吸管以降低成本。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "减少关键承重位置的材料会降低结构强度，存在安全隐患，不可行。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 210,
        "type": "judge",
        "question": "绘制校园生物分布图时，生物种类太多写不下，可以用'图注+编号'的方法绘制。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "当信息量过大时，采用'图注+编号'的方法可以使图面清晰、直观、全面。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 211,
        "type": "judge",
        "question": "二歧分类法的标准必须是互斥的，'单子叶'和'非针形叶'不属于同一分类标准下的对立选项。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "二歧分类需要每次选择一对互斥的特征，'单子叶'按子叶数量划分，'非针形叶'按叶片形状划分，不能并列。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 212,
        "type": "judge",
        "question": "AI人脸识别技术的基础是人类个体之间相貌特征的差异性（变异），每个人的面部特征组合是独特的。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "人脸识别利用了生物变异导致的个体独特性，即使是双胞胎也存在细微差异。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 213,
        "type": "judge",
        "question": "建立自然保护区的主要目的是保护生物多样性和它们所依赖的自然生态环境。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "自然保护区是就地保护的核心措施，旨在保护物种及其栖息地的完整性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 214,
        "type": "judge",
        "question": "组成星座的恒星彼此之间距离很近，且处于同一个平面上。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "星座是地球视角的视觉投影，组成星座的恒星彼此距离遥远，并不在同一个平面上。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 215,
        "type": "judge",
        "question": "银河系是宇宙中最大的星系。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "宇宙中有数千亿个星系，银河系只是其中之一，并非最大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 216,
        "type": "judge",
        "question": "'牛郎织女'相会是视觉现象，是由于地球、牛郎星、织女星三者在空间中的相对位置变化造成的。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "恒星本身距离遥远且相对位置变化极小，'相会'是从地球上看去它们在天球上靠近的效果。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 217,
        "type": "judge",
        "question": "'煽风点火'涉及燃烧，伴随新物质生成，属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "燃烧是剧烈的氧化反应，生成二氧化碳、水等新物质，属于化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 218,
        "type": "judge",
        "question": "蜡烛燃烧时变成蜡烛油，这属于物理变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "蜡从固态变为液态是状态变化，没有新物质生成，属于物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 219,
        "type": "judge",
        "question": "煤是由古代植物的遗体在特定地质条件下经过漫长而复杂的化学变化形成的。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "煤是远古植物被掩埋后，在高温高压无氧环境下经过复杂的化学变化形成的化石燃料。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 220,
        "type": "judge",
        "question": "晒太阳促进大脑分泌有利于情绪的化学物质，说明情绪变化与化学变化有关。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "情绪的产生与大脑中神经递质（如血清素、多巴胺）的合成分泌有关，这些物质的生成属于化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 221,
        "type": "judge",
        "question": "干栏式建筑底层架空的主要目的是防潮防虫防洪。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "干栏式建筑将居住层抬高，可有效避免地面湿气、虫蛇和洪水的侵扰，适应湿热环境。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 222,
        "type": "judge",
        "question": "在现代建筑中，脚手架采用三角形结构最稳定。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "三角形结构具有稳定性，受力时不易变形，是脚手架等临时结构常用的设计。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 223,
        "type": "judge",
        "question": "校园生物调查时，为尽快完成任务，可以仅记录常见物种而忽略稀有生物。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "科学调查应力求全面，稀有物种往往具有更高的保护价值和研究意义，不能忽略。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 224,
        "type": "judge",
        "question": "亲代与后代之间性状的相似性称为遗传。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "遗传是指生物亲代与子代之间在形态、生理等特征上的相似性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 225,
        "type": "judge",
        "question": "圣水牛的灭绝会导致该区域植被快速生长，一片欣欣向荣。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "关键物种的灭绝会破坏食物链和生态平衡，可能导致生态系统退化，而非欣欣向荣。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 226,
        "type": "judge",
        "question": "驯养的家猪幼崽和亲代具有相似的特征，这种现象称为遗传。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "亲子代之间的性状相似性是遗传的典型表现。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 227,
        "type": "judge",
        "question": "为了保护生物多样性，可以尽可能多地狩猎来维持日常生活。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "过度狩猎会导致物种数量锐减甚至灭绝，破坏生物多样性，违背可持续发展原则。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 228,
        "type": "judge",
        "question": "研究古生物化石可以帮助我们了解古代生物的形态结构、生活习性及演化历程。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "化石是古生物存在的直接证据，通过研究化石可以复原古生物面貌、推断生活环境、研究进化过程。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 229,
        "type": "judge",
        "question": "酵母菌属于微生物。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "酵母菌是单细胞真菌，个体微小，属于微生物范畴。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 230,
        "type": "judge",
        "question": "跨湖桥人站在陆地上观察天体，最容易观察的是月亮。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "月亮是地球的卫星，距离近、视面积大，是肉眼最易观察的天体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 231,
        "type": "judge",
        "question": "北斗七星从不同角度观察，形状相同。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "北斗七星是七颗距离不等的恒星在不同方向的投影，从不同角度看，其排列形状会发生变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 232,
        "type": "judge",
        "question": "日食形成时，月球位于太阳与地球之间。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "日食发生时，月球运行到太阳和地球之间，三者成一直线，月球挡住太阳射向地球的光。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 233,
        "type": "judge",
        "question": "农历初一可能会发生日食。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "日食发生在农历初一（朔日），此时月球位于太阳和地球之间，但还需三者几乎成一直线。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 234,
        "type": "judge",
        "question": "夜晚观察星星时，看到的大多是恒星。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "恒星能自行发光，距离遥远；行星、彗星等数量较少，夜空中肉眼可见的绝大多数是恒星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 235,
        "type": "judge",
        "question": "银河系是宇宙中最大的星系。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "银河系直径约10万光年，而宇宙中有许多比银河系更大的星系，如仙女座星系。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 236,
        "type": "judge",
        "question": "太阳的东升西落与地球自转方向有关。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "地球自西向东自转，使得太阳看起来每天东升西落。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 237,
        "type": "judge",
        "question": "夏季时北斗七星高悬于北方天空，斗柄指向南方，其勺口两星延长5倍可定位北极星。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "北斗七星斗柄四季指向不同，但无论斗柄指向何处，勺口两星连线延长5倍都可找到北极星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 238,
        "type": "judge",
        "question": "'夏季大三角'的三颗恒星与地球的距离相同。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "织女星、牛郎星、天津四与地球的距离各不相同，只是在地球上看去它们形成近似直角三角形的形状。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 239,
        "type": "judge",
        "question": "跨湖桥遗址的水稻遗存证明当时已有栽培稻，水稻的主要营养物质是糖类。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "稻米富含淀粉（属于糖类），是主要的能量来源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 240,
        "type": "judge",
        "question": "给木器涂漆、烧制黑陶、凿制玉器、缝制兽皮衣中，烧制黑陶与其他几项属于不同反应类型。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "烧制黑陶过程中黏土发生复杂的化学变化生成新物质；涂漆、凿玉、缝制主要是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 241,
        "type": "judge",
        "question": "铁钉在潮湿空气中生锈最快。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "铁生锈需要水和氧气同时存在，潮湿空气同时提供了两者，生锈速度最快。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 242,
        "type": "judge",
        "question": "铁质菜刀用后洗净擦干并涂上植物油最不易生锈。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "洗净擦干可去除水分，涂油可隔绝空气，同时阻断铁生锈的两个必要条件。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 243,
        "type": "judge",
        "question": "将铁制品加热后冷却，常温保存，可以减缓铁生锈。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "加热冷却并不改变铁的化学性质，若无其他防锈措施，铁仍会生锈。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 244,
        "type": "judge",
        "question": "黏土加水揉制变软但成分不变，这是物理变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "黏土加水只是状态和可塑性改变，没有新物质生成，属于物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 245,
        "type": "judge",
        "question": "黏土陶坯高温烧制变成坚硬的黑陶，有新物质产生，属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "烧制过程中黏土矿物发生脱水、相变等化学反应，生成了新物质。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 246,
        "type": "judge",
        "question": "酿酒时粮食中的淀粉转化成酒精和其他物质，产生了新物质，是化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "发酵过程中微生物将淀粉分解转化为酒精、二氧化碳等新物质，属于化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 247,
        "type": "judge",
        "question": "陶器内壁的酒石酸结壳是发酵过程中生成的新物质，证明发生了化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "酒石酸是发酵过程中产生的有机酸，是新物质，说明发生了化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 248,
        "type": "judge",
        "question": "在自行车链条上涂油可以有效防止生锈。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "涂油可以在金属表面形成保护膜，隔绝空气和水分，防止生锈。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 249,
        "type": "judge",
        "question": "铁锈能被磁铁吸引，和铁一样具有磁性。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "铁锈的主要成分是氧化铁，不具有磁性，不能被磁铁吸引。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 250,
        "type": "judge",
        "question": "蜡烛燃烧时，发光发热、有火焰，属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "蜡烛燃烧生成二氧化碳和水，产生新物质，是化学变化；同时伴随光能和热能的释放。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 251,
        "type": "judge",
        "question": "蜡烛燃烧过程中，固态的蜡变成液态的蜡油，属于物理变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "石蜡熔化只是状态改变，没有新物质生成，属于物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 252,
        "type": "judge",
        "question": "将干燥洁净的玻璃杯倒扣在燃烧的蜡烛上，能看到玻璃杯内壁有水珠。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "蜡烛燃烧生成水蒸气，遇冷的玻璃杯内壁凝结成小水珠。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 253,
        "type": "judge",
        "question": "将干燥洁净的玻璃杯倒扣在燃烧的蜡烛上，能看到玻璃杯内底部有炭黑。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "蜡烛燃烧不完全时会产生炭黑（碳颗粒），附着在玻璃杯内壁。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 254,
        "type": "judge",
        "question": "小苏打与白醋混合后，用手触摸烧瓶外壁会有冷的感觉。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "小苏打与白醋的反应是吸热反应，混合后温度降低。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 255,
        "type": "judge",
        "question": "将点燃的木条伸入小苏打和白醋混合后的烧瓶中，木条会熄灭。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "反应生成二氧化碳，二氧化碳不支持燃烧，能使燃着的木条熄灭。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 256,
        "type": "judge",
        "question": "小苏打和白醋混合产生的气体比同体积的空气重。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "二氧化碳的分子量（44）大于空气的平均分子量（29），因此密度比空气大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 257,
        "type": "judge",
        "question": "紫甘蓝汁加入白醋后，溶液颜色会变红。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "紫甘蓝汁中的花青素遇酸（白醋）变红，是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 258,
        "type": "judge",
        "question": "牛奶中加入白醋后，会产生沉淀。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "白醋使牛奶中的蛋白质变性凝固，产生沉淀，是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 259,
        "type": "judge",
        "question": "将水烧开属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 1,
        "explanation": "水烧开是液态水变成水蒸气，只是状态变化，没有新物质生成，属于物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 260,
        "type": "judge",
        "question": "虾被煮熟后变红，红色的熟虾与生虾不是同一种物质，说明煮熟是化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "虾壳中的虾青素在加热过程中与蛋白质分离并发生结构变化，产生新物质，属于化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 261,
        "type": "judge",
        "question": "铁钉生锈是化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "铁与氧气、水反应生成铁锈（氧化铁），产生了新物质。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 262,
        "type": "judge",
        "question": "将食盐溶解在水中是物理变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "食盐溶解于水只是离子扩散，没有新物质生成，是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 263,
        "type": "judge",
        "question": "将白砂糖熬制成糖浆是物理变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "白砂糖熔化只是状态变化，没有新物质生成，属于物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 264,
        "type": "judge",
        "question": "继续加热糖浆至变黑并产生焦味，属于化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "糖在高温下发生焦糖化反应，生成有色物质和风味物质，产生了新物质。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 265,
        "type": "judge",
        "question": "碘酒滴到淀粉上会变成蓝色，这是化学变化。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "淀粉与碘形成蓝色包合物，是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 266,
        "type": "judge",
        "question": "小苏打和白醋混合产生的气体是二氧化碳。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "碳酸氢钠与醋酸反应生成醋酸钠、水和二氧化碳。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 267,
        "type": "judge",
        "question": "将燃烧的蜡烛放入玻璃瓶中，盖上玻璃片，蜡烛会慢慢熄灭。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "蜡烛燃烧消耗瓶内氧气，当氧气不足时蜡烛熄灭。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 268,
        "type": "judge",
        "question": "将点燃的火柴伸入蜡烛燃烧后充满气体的瓶中，火柴很快熄灭。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "蜡烛燃烧生成二氧化碳，不支持燃烧，能使火柴熄灭。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 269,
        "type": "judge",
        "question": "小苏打和白醋混合产生气体的性质与蜡烛燃烧生成的气体一样。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "两者都是二氧化碳，都不支持燃烧，密度比空气大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 270,
        "type": "judge",
        "question": "铁生锈是空气和水分共同作用的结果。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "铁生锈需要氧气和水同时存在，缺一不可。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 271,
        "type": "judge",
        "question": "在铁制品表面涂防锈漆可以防止生锈。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "防锈漆能隔绝空气和水分，阻断铁生锈的条件。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 272,
        "type": "judge",
        "question": "保持铁制品干燥可以防止生锈。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "干燥环境缺少水分，铁无法生锈。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 273,
        "type": "judge",
        "question": "将铁制品放入密封塑料袋并放入干燥剂可以防止生锈。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "密封袋隔绝空气，干燥剂吸收水分，同时阻断生锈的两个条件。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 274,
        "type": "judge",
        "question": "食盐（氯化钠）能加快铁生锈的速度。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "盐溶液能导电，加速电化学腐蚀，使铁生锈加快。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 275,
        "type": "judge",
        "question": "地球自转的方向是自西向东。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "地球绕地轴自西向东自转，因此太阳东升西落。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 276,
        "type": "judge",
        "question": "越是东边的时区越先迎来黎明。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "由于地球自西向东自转，东边的地点先见到日出。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 277,
        "type": "judge",
        "question": "昼夜对生物影响最大的因素是光照。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "昼夜交替导致光照周期变化，影响生物的作息、开花、迁徙等行为。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 278,
        "type": "judge",
        "question": "四季对生物影响最大的因素是温度。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "四季变化引起温度周期性变化，影响生物的生长、繁殖和休眠。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 279,
        "type": "judge",
        "question": "中国古代测量正午日影长度的天文仪器叫圭表。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "圭表由圭（刻度尺）和表（立杆）组成，用于测量正午影长，确定节气和年长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 280,
        "type": "judge",
        "question": "夏季太阳高度高，影子最短；冬季太阳高度低，影子最长。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "太阳高度角越大，物体影子越短；太阳高度角越小，影子越长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 281,
        "type": "judge",
        "question": "赤道地区一年有两次阳光直射，四季界限不明显，全年昼夜等长。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "赤道地区全年昼夜几乎等长，太阳高度角大，气温年较差小。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 282,
        "type": "judge",
        "question": "地球公转时，地轴始终倾斜，且倾斜角度不变。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "地轴倾斜约23.5度，在公转过程中指向保持不变（指向北极星附近）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 283,
        "type": "judge",
        "question": "杭州在罗马的东边，当杭州正午12:00时，罗马可能处于上午时间。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "罗马位于东一区，杭州位于东八区，杭州比罗马早约7小时，杭州正午时罗马约为清晨5点。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 284,
        "type": "judge",
        "question": "杠杆的用力点离支点越远越省力，阻力点离支点越近越省力。",
        "options": ["正确", "错误"],
        "answer": 0,
        "explanation": "根据杠杆平衡原理，动力×动力臂=阻力×阻力臂，动力臂越大越省力，阻力臂越小越省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 285,
        "type": "choice",
        "question": "我们用模型来探究昼夜交替现象时，最好用（ ）来模拟太阳。",
        "options": ["手电筒", "篮球", "蜡烛", "日光灯"],
        "answer": 0,
        "explanation": "手电筒能发出定向光线，可模拟太阳单向照射地球的效果；蜡烛光线发散，不易控制方向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 286,
        "type": "choice",
        "question": "地球上昼夜交替的周期是（ ）。",
        "options": ["1小时", "1天", "1个月", "1年"],
        "answer": 1,
        "explanation": "地球自转一周的周期是24小时，即1天，昼夜交替由此产生。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 287,
        "type": "choice",
        "question": "某小组用手电筒、地球仪探究昼夜交替现象，这个实验采用的研究方法是（ ）。",
        "options": ["模拟实验", "对比实验", "替代实验", "假想实验"],
        "answer": 0,
        "explanation": "用手电筒模拟太阳、地球仪模拟地球，再现自然现象，属于模拟实验。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 288,
        "type": "choice",
        "question": "模拟实验时，地球仪不动，手电筒围绕地球仪转，这一操作对应的假设是（ ）。",
        "options": ["地球不动，太阳围绕地球转", "太阳不动，地球围绕太阳转", "地球自转", "地球自转的同时围绕太阳转"],
        "answer": 0,
        "explanation": "以地球仪静止模拟'地球不动'，手电筒绕转模拟'太阳绕地球转'，对应地心说观点。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 289,
        "type": "choice",
        "question": "电磁铁通电后吸引弹性片，使铁锤击打铁铃发出声音。这个过程涉及的能量转化是（ ）。",
        "options": ["化学能→电能→机械能", "电能→磁能→机械能", "电能→化学能→声能", "磁能→电能→声能"],
        "answer": 1,
        "explanation": "电流通过线圈产生磁场（电能→磁能），磁力吸引弹性片带动铁锤运动（磁能→机械能），击打产生声音。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 290,
        "type": "choice",
        "question": "检测一节电池是否有电，可以选择（ ）制作电流检测器。",
        "options": ["铁芯、导线", "导线、指南针", "指南针、铁芯", "磁铁、导线"],
        "answer": 1,
        "explanation": "将导线绕成线圈，靠近指南针，通电时指南针偏转；利用电流的磁效应检测电流。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 291,
        "type": "choice",
        "question": "为了使电铃的声音增强，可以采用（ ）。",
        "options": ["将电池的正负极对换连接", "改变线圈缠绕方向", "换一对新电池", "减少线圈缠绕圈数"],
        "answer": 2,
        "explanation": "增大电流（换新电池）或增加线圈匝数可增强电磁铁磁性，使击打更有力；改变方向不影响磁性强弱。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 292,
        "type": "choice",
        "question": "无论怎么使劲摇动小电动机的轴转动，电铃就是不响，下列分析合理的是（ ）。",
        "options": ["转动方向错误", "转动的力度太大", "小电动机不能用来发电", "转动的速度不够，发的电不足以让电铃发出声音"],
        "answer": 3,
        "explanation": "小电动机可作发电机使用，但需要足够转速才能产生足够的电压和电流；转速不足时发电量不够。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 293,
        "type": "choice",
        "question": "三个放大镜的放大倍数分别是2×、3×、5×，其中是5×的放大镜是（ ）。",
        "options": ["镜片最大的", "镜片最厚的", "镜片凸度最大的"],
        "answer": 2,
        "explanation": "放大镜的放大倍数与镜片的凸度有关，凸度越大，放大倍数越大，与镜片厚度无直接关系。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 294,
        "type": "choice",
        "question": "用自制简易显微镜观察微生物，只看到一些小颗粒在移动，但看不清楚，可能的原因是（ ）。",
        "options": ["放大倍数不够", "没有对光", "没有盖盖玻片", "微生物太小"],
        "answer": 0,
        "explanation": "自制显微镜放大倍数有限，若倍数不足，微生物细节无法分辨。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 295,
        "type": "choice",
        "question": "视野中有小黑点，如果移动装片时小黑点跟着移动，则污物在（ ）。",
        "options": ["目镜", "物镜", "装片", "反光镜"],
        "answer": 2,
        "explanation": "移动装片时污点同步移动，说明污点附着在装片上。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 296,
        "type": "choice",
        "question": "如果确定了污物的位置在镜头上，应用（ ）小心擦拭干净。",
        "options": ["餐巾纸", "抹布", "手", "擦镜纸"],
        "answer": 3,
        "explanation": "擦镜纸柔软且不掉毛，不会划伤镜头；餐巾纸、抹布会划伤镜片。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 297,
        "type": "choice",
        "question": "为了观察到更多细胞，应选择目镜和物镜的组合是（ ）。",
        "options": ["10×、10×", "10×、40×", "15×、10×", "5×、10×"],
        "answer": 0,
        "explanation": "放大倍数越小，视野范围越大，看到的细胞数量越多。10×10=100倍比高倍数视野大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 298,
        "type": "choice",
        "question": "通过调节准焦螺旋，发现洋葱表皮细胞在视野的右下方，为了让细胞到视野中央，应把装片向（ ）移动。",
        "options": ["左上方", "左下方", "右上方", "右下方"],
        "answer": 3,
        "explanation": "显微镜下物像移动方向与装片移动方向相反，要将右下方的物像移到中央，需将装片向右下方移动。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 299,
        "type": "choice",
        "question": "以下五种模型中，不能产生地球昼夜交替现象的是（ ）。（模型①：太阳不动，地球自转；模型②：太阳不动，地球公转；模型③：地球不动，太阳绕地球转；模型④：地球自转并绕太阳公转；模型⑤：太阳绕地球转，地球自转）",
        "options": ["模型①", "模型②", "模型③", "模型④", "模型⑤"],
        "answer": 1,
        "explanation": "昼夜交替由地球自转引起；模型②中地球只公转不自转，无法产生昼夜交替。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 300,
        "type": "choice",
        "question": "最符合'地心说'理论的是（ ）；与地球在宇宙中的真实运动最接近的是（ ）。",
        "options": ["模型①", "模型②", "模型③", "模型④", "模型⑤"],
        "answer": 2,
        "explanation": "地心说认为地球不动，太阳绕地球转（模型③）；真实情况是地球自转并绕太阳公转（模型④）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 301,
        "type": "choice",
        "question": "圭表测量的不同季节影长数据如下：春分7.6cm、夏至？、秋分12.8cm、冬至16.8cm。夏至影长数据合理的是（ ）。",
        "options": ["5", "11.6", "18", "33"],
        "answer": 0,
        "explanation": "夏至太阳高度最高，影子最短，应小于春分的7.6cm，5cm合理。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 302,
        "type": "choice",
        "question": "连续几天观察圭表影长变化，发现正午影长正在逐渐变短，此时可能是（ ）。",
        "options": ["5月份", "9月份", "11月份", "1月份"],
        "answer": 0,
        "explanation": "从春分到夏至，影长逐渐变短；5月份位于此期间。9月后影长逐渐变长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 303,
        "type": "choice",
        "question": "组装圭表测量日影，下列做法不合理的是（ ）。",
        "options": ["选取同一地点", "早晚测量", "靠窗放置圭表", "用尺测量日影长度"],
        "answer": 1,
        "explanation": "圭表测量的是正午日影，早晚太阳高度角不同，不能反映四季变化规律。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 304,
        "type": "choice",
        "question": "下列图示中表示冬季的是（ ）。（图示略，描述：A.影长最短 B.影长中等 C.影长最长）",
        "options": ["影长最短", "影长中等", "影长最长"],
        "answer": 2,
        "explanation": "冬季太阳高度最低，影子最长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 305,
        "type": "choice",
        "question": "关于圭表，下列说法错误的一项是（ ）。",
        "options": ["圭表根据圭面影长的变化划分了二十四节气", "圭表和日晷一样，都是利用日影计时的工具", "从冬至到夏至，圭面上的影子逐渐变长", "正午时，表会在圭上投出暗影，影子长度随四季呈现规律性变化"],
        "answer": 2,
        "explanation": "从冬至到夏至，太阳高度逐渐增大，影子逐渐变短，而非变长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 306,
        "type": "choice",
        "question": "在图2的四种情况中，只有一种情况小石块能撬动大石块，根据测试经验，你认为是哪一种？（图示略：四种杠杆支点位置不同）",
        "options": ["支点离大石块近、离小石块远的那一种", "支点离大石块远、离小石块近的那一种", "支点在正中间的那一种", "无法确定"],
        "answer": 0,
        "explanation": "支点越靠近阻力点（大石块），动力臂越长，越省力，小石块更容易撬动大石块。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 307,
        "type": "choice",
        "question": "下列说法正确的是（ ）。",
        "options": ["使用杠杆一定可以省力", "支点离小石块近时可以撬动大石块", "支点离大石块越近越容易撬动大石块", "支点离大石块就近一定能撬动大石块"],
        "answer": 2,
        "explanation": "支点离大石块（阻力点）越近，阻力臂越短，动力臂相对越长，越省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 308,
        "type": "choice",
        "question": "在课堂实验中，增加支点的高度，大石块移动的距离会（ ）。",
        "options": ["变近", "不变", "变远", "随机，没有规律"],
        "answer": 2,
        "explanation": "支点高度增加，动力臂相对增长，在相同动力作用下，阻力点移动距离增大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 309,
        "type": "choice",
        "question": "下列框架中使用的材料都相同，在顶部放重物时，最不容易倾斜的是（ ）。",
        "options": ["四边形框架", "三角形框架", "圆形框架"],
        "answer": 1,
        "explanation": "三角形具有稳定性，受力时不易变形，最不容易倾斜。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 310,
        "type": "choice",
        "question": "下列塑料瓶中，最不容易倒的是（ ）。",
        "options": ["上大下小、上重下轻", "上小下大、上轻下重", "上下一样大"],
        "answer": 1,
        "explanation": "上小下大、上轻下重使重心降低，稳定性最好，最不容易倾倒。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 311,
        "type": "choice",
        "question": "用鸡蛋壳、纸、螺帽制作不倒翁，制作时螺帽应该放在（ ）。",
        "options": ["1号位置（顶部）", "2号位置（中部）", "3号位置（底部）"],
        "answer": 2,
        "explanation": "螺帽放在底部可使重心降低，不倒翁在倾斜后能自动恢复直立。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 312,
        "type": "choice",
        "question": "测量塔台模型的防风能力，以下说法正确的是（ ）。",
        "options": ["各小组电扇放置的位置和塔台的距离要保持相同", "先用电扇的最大风力吹，再慢慢降低风速", "如果塔台在二级风力时倒塌了，说明它能承受的风力等级就是二级"],
        "answer": 0,
        "explanation": "为保证测试公平，各小组电扇距离应相同；应从低风速开始逐步增加。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 313,
        "type": "choice",
        "question": "能够增加塔台模型抗风能力的是（ ）。",
        "options": ["侧面镂空", "增加高度", "减少底部钩码"],
        "answer": 0,
        "explanation": "侧面镂空可减少风阻，使风能顺利通过，降低对塔台的推力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 314,
        "type": "choice",
        "question": "塔台模型的高度是指（ ）。",
        "options": ["立柱的长度", "侧面梯形的高", "顶面和地面间的距离"],
        "answer": 2,
        "explanation": "塔台模型的高度定义为从底面到顶面的垂直距离。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 315,
        "type": "choice",
        "question": "塔台不太美观，下列改进方案不可行的是（ ）。",
        "options": ["减少部分承重的吸管结构", "减少部分缠裹过多的胶带", "调整整体结构，整体采用对称的设计"],
        "answer": 0,
        "explanation": "减少承重结构的吸管会降低塔台的强度和稳定性，存在安全隐患。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 316,
        "type": "choice",
        "question": "塔台的抗风能力得分较低，下列做法可行的是（ ）。",
        "options": ["调整塔台的位置，离风扇远一些", "减少塔台底部的钩码", "调整塔台的主体结构，增加塔台底部的面积和重量"],
        "answer": 2,
        "explanation": "增加底部面积和重量可降低重心、增大支撑面，提高抗风能力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 317,
        "type": "choice",
        "question": "下列动物中，不属于昆虫的是（ ）。",
        "options": ["苍蝇", "蜘蛛", "蟑螂", "蚊子"],
        "answer": 1,
        "explanation": "昆虫身体分为头、胸、腹三部分，有3对足；蜘蛛有4对足，属于蛛形纲。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 318,
        "type": "choice",
        "question": "科学家主要通过（ ）了解关于远古时期生物的信息。",
        "options": ["化石", "光盘", "远古文学", "资料"],
        "answer": 0,
        "explanation": "化石是存留在岩石中的古生物遗体、遗物或遗迹，是研究古生物的直接证据。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 319,
        "type": "choice",
        "question": "下列分类方法不合理的是（ ）。",
        "options": ["根据植物茎的不同，分为木质茎和草质茎", "根据植物叶脉的不同，分为平行脉和非平行脉", "根据叶片形状不同，分为卵形叶和非卵形叶", "根据叶片颜色不同，分为绿叶和非绿叶"],
        "answer": 3,
        "explanation": "叶片颜色易受光照、季节等环境因素影响，不是稳定的分类依据。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 320,
        "type": "choice",
        "question": "'种瓜得瓜，种豆得豆'指的是生物具有（ ）现象。",
        "options": ["遗传", "变异", "继承", "突变"],
        "answer": 0,
        "explanation": "该俗语描述的是子代与亲代在物种特征上的一致性，属于遗传现象。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 321,
        "type": "choice",
        "question": "下列水果是由于植物变异造成的是（ ）。",
        "options": ["方形西瓜", "刻字的苹果", "白色草莓", "娃娃状的人参果"],
        "answer": 2,
        "explanation": "白色草莓是自然变异或人工选育的品种；方形西瓜、刻字苹果是人工模具塑形，不是遗传变异。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 322,
        "type": "choice",
        "question": "小明和小天都是单眼皮，都没有耳垂，都是卷发，这说明小明和小天（ ）。",
        "options": ["相貌一样", "是兄弟俩", "有血缘关系", "这些相貌特征相同"],
        "answer": 3,
        "explanation": "只能说明他们在这些特定性状上相同，不能推断相貌完全一样或有无血缘关系。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 323,
        "type": "choice",
        "question": "现代遗传学之父是（ ）。",
        "options": ["孟德尔", "达尔文", "牛顿", "伽利略"],
        "answer": 0,
        "explanation": "孟德尔通过豌豆实验发现了遗传的基本规律，被称为'现代遗传学之父'。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 324,
        "type": "choice",
        "question": "'一母生九子，连母十个样'描述的是生物的（ ）现象。",
        "options": ["遗传", "变异", "继承", "突变"],
        "answer": 1,
        "explanation": "该俗语描述的是同一亲本的后代之间以及后代与亲本之间的差异性，属于变异现象。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 325,
        "type": "choice",
        "question": "世界上已知的最古老的脊椎动物化石是（ ）。",
        "options": ["猛犸象化石", "昆明鱼化石", "翼龙化石", "鳄鱼化石"],
        "answer": 1,
        "explanation": "昆明鱼（约5.2亿年前）是目前公认的最早的脊椎动物化石。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 326,
        "type": "choice",
        "question": "下列不属于人体性状的是（ ）。",
        "options": ["指甲长短", "头发粗细", "单双眼皮", "有无耳垂"],
        "answer": 0,
        "explanation": "指甲长短受后天修剪影响，不是由遗传决定的稳定性状。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 327,
        "type": "choice",
        "question": "下列生物中与大熊猫关系最近的是（ ）。",
        "options": ["青蛙", "家兔", "蝗虫", "草鱼"],
        "answer": 1,
        "explanation": "大熊猫和家兔都是哺乳动物，亲缘关系比两栖类、昆虫、鱼类更近。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 328,
        "type": "choice",
        "question": "保护生物多样性最为有效的措施是（ ）。",
        "options": ["建立自然保护区", "颁布法律法规", "人类自觉", "建立种子库"],
        "answer": 0,
        "explanation": "就地保护（建立自然保护区）是保护生物多样性最根本、最有效的措施。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 329,
        "type": "choice",
        "question": "把蝗虫、蚯蚓和蜗牛分为一类，袋鼠、啄木鸟和蛇分为另一类，分类依据是（ ）。",
        "options": ["有羽毛和没羽毛", "陆生和水生", "有脊柱和无脊柱", "胎生和卵生"],
        "answer": 2,
        "explanation": "蝗虫、蚯蚓、蜗牛无脊柱（无脊椎动物）；袋鼠、啄木鸟、蛇有脊柱（脊椎动物）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 330,
        "type": "choice",
        "question": "下列动物中，属于鱼类的是（ ）。",
        "options": ["金鱼", "鲸", "章鱼", "鳄鱼"],
        "answer": 0,
        "explanation": "金鱼用鳃呼吸、有鳍、生活在水中，属于鱼类；鲸是哺乳动物，章鱼是软体动物，鳄鱼是爬行动物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 331,
        "type": "choice",
        "question": "下列动物中，属于哺乳动物的是（ ）。",
        "options": ["蝙蝠", "企鹅", "蜻蜓", "蜥蜴"],
        "answer": 0,
        "explanation": "蝙蝠胎生、哺乳，属于哺乳动物；企鹅是鸟类，蜻蜓是昆虫，蜥蜴是爬行动物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 332,
        "type": "choice",
        "question": "下列动物中，属于昆虫的是（ ）。",
        "options": ["蚂蚁", "蜘蛛", "蜈蚣", "蜗牛"],
        "answer": 0,
        "explanation": "蚂蚁身体分头胸腹三部分，有3对足，属于昆虫；蜘蛛有4对足，蜈蚣多对足，蜗牛是软体动物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 333,
        "type": "choice",
        "question": "下列植物中，属于木本植物的是（ ）。",
        "options": ["樟树", "蒲公英", "狗尾草", "凤仙花"],
        "answer": 0,
        "explanation": "樟树茎秆坚硬，木质部发达，属于木本植物；其他三种为草本植物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 334,
        "type": "choice",
        "question": "下列植物中，属于草本植物的是（ ）。",
        "options": ["菊花", "松树", "桂花", "桃树"],
        "answer": 0,
        "explanation": "菊花茎柔软，属于草本植物；松树、桂花、桃树都是木本植物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 335,
        "type": "choice",
        "question": "关于化石，下列说法不正确的是（ ）。",
        "options": ["化石是存留在岩石中的古生物遗体、遗物或遗迹", "化石可以帮助我们分析古代生物的生活环境", "化石可以帮助我们了解生物从古至今的变化", "化石具有收藏价值，发现后可以据为己有"],
        "answer": 3,
        "explanation": "化石是重要的科学资源，发现化石应报告相关部门，不能私自占有。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 336,
        "type": "choice",
        "question": "下列天体中，不属于太阳系的是（ ）。",
        "options": ["北极星", "冥王星", "哈雷彗星", "火星"],
        "answer": 0,
        "explanation": "北极星是位于银河系的一颗恒星，距离太阳系遥远，不属于太阳系。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 337,
        "type": "choice",
        "question": "太阳系中体积最大的行星是（ ）。",
        "options": ["木星", "土星", "天王星", "海王星"],
        "answer": 0,
        "explanation": "木星的赤道直径约14.28万千米，是太阳系中体积和质量最大的行星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 338,
        "type": "choice",
        "question": "太阳系中距离太阳最远的行星是（ ）。",
        "options": ["天王星", "海王星", "木星", "土星"],
        "answer": 1,
        "explanation": "按离太阳由近及远的顺序，海王星是第八颗，距离太阳最远。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 339,
        "type": "choice",
        "question": "日食发生的时间一般是农历每月的（ ）。",
        "options": ["初一", "十五", "初八", "二十三"],
        "answer": 0,
        "explanation": "日食发生在农历初一（朔日），此时月球位于太阳和地球之间。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 340,
        "type": "choice",
        "question": "下列现象中，与日食原理相同的是（ ）。",
        "options": ["金星凌日", "流星雨", "月食", "彗星"],
        "answer": 0,
        "explanation": "金星凌日也是地内行星运行到太阳和地球之间，三者成一直线，原理与日食相同（光的直线传播）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 341,
        "type": "choice",
        "question": "观察日食时，正确的做法是（ ）。",
        "options": ["用肉眼直接观察", "用普通墨镜观察", "用专用日食观测镜或投影法观察", "用望远镜直接观察"],
        "answer": 2,
        "explanation": "直接用肉眼或普通墨镜、望远镜观察日食会灼伤视网膜，必须使用专用滤光镜或投影法。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 342,
        "type": "choice",
        "question": "北斗七星是（ ）的明显标志。",
        "options": ["大熊座", "小熊座", "猎户座", "天琴座"],
        "answer": 0,
        "explanation": "北斗七星位于大熊座，是大熊座最显著的星群。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 343,
        "type": "choice",
        "question": "北极星位于（ ）。",
        "options": ["大熊座", "小熊座", "猎户座", "仙后座"],
        "answer": 1,
        "explanation": "北极星是小熊座最亮的星，位于小熊座的尾部。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 344,
        "type": "choice",
        "question": "利用北斗七星寻找北极星的方法是（ ）。",
        "options": ["将勺口直线延长约5倍距离", "将勺柄直线延长约5倍距离", "将勺口直线延长约10倍距离", "将勺柄直线延长约10倍距离"],
        "answer": 0,
        "explanation": "北斗七星勺口两颗星（天璇、天枢）的连线向外延长约5倍距离，可找到北极星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 345,
        "type": "choice",
        "question": "'夏季大三角'由牛郎星、织女星和（ ）组成。",
        "options": ["天津四", "心宿二", "北极星", "天狼星"],
        "answer": 0,
        "explanation": "夏季大三角由天鹰座牛郎星、天琴座织女星、天鹅座天津四组成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 346,
        "type": "choice",
        "question": "牛郎星所在的星座是（ ）。",
        "options": ["天鹰座", "天琴座", "天鹅座", "天蝎座"],
        "answer": 0,
        "explanation": "牛郎星（河鼓二）属于天鹰座。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 347,
        "type": "choice",
        "question": "织女星所在的星座是（ ）。",
        "options": ["天鹰座", "天琴座", "天鹅座", "天蝎座"],
        "answer": 1,
        "explanation": "织女星（织女一）属于天琴座。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 348,
        "type": "choice",
        "question": "天津四所在的星座是（ ）。",
        "options": ["天鹰座", "天琴座", "天鹅座", "天蝎座"],
        "answer": 2,
        "explanation": "天津四是天鹅座最亮的星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 349,
        "type": "choice",
        "question": "关于银河系，下列说法正确的是（ ）。",
        "options": ["银河系就是整个宇宙", "太阳系是银河系的一部分", "银河系是静止不动的", "银河系的直径约140万千米"],
        "answer": 1,
        "explanation": "太阳系位于银河系的一条旋臂上；银河系直径约10万光年，且处于运动中。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 350,
        "type": "choice",
        "question": "光年是一个（ ）单位。",
        "options": ["时间", "距离", "速度", "质量"],
        "answer": 1,
        "explanation": "光年是光在真空中一年内传播的距离，是长度（距离）单位。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 351,
        "type": "choice",
        "question": "世界上第一台天文望远镜是由（ ）制作的。",
        "options": ["伽利略", "牛顿", "胡克", "列文虎克"],
        "answer": 0,
        "explanation": "伽利略于1609年制作了第一台天文望远镜，并用它观测了月球、木星卫星等。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 352,
        "type": "choice",
        "question": "我国自主研制并发射的首个火星探测器是（ ）。",
        "options": ["天问一号", "神舟一号", "嫦娥一号", "玉兔号"],
        "answer": 0,
        "explanation": "天问一号于2020年发射，成功着陆火星，是我国首次火星探测任务。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 353,
        "type": "choice",
        "question": "我国探月工程被称为（ ）。",
        "options": ["嫦娥工程", "天宫工程", "神舟工程", "天问工程"],
        "answer": 0,
        "explanation": "中国探月工程命名为'嫦娥工程'，分'绕、落、回'三步。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 354,
        "type": "choice",
        "question": "中国空间站被称为（ ）。",
        "options": ["天宫", "神舟", "嫦娥", "天问"],
        "answer": 0,
        "explanation": "中国载人空间站命名为'天宫'，如天宫一号、天宫二号及天宫空间站。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 355,
        "type": "choice",
        "question": "下列杠杆中，属于省力杠杆的是（ ）。",
        "options": ["镊子", "筷子", "老虎钳", "钓鱼竿"],
        "answer": 2,
        "explanation": "老虎钳的用力臂大于阻力臂，是省力杠杆；镊子、筷子、钓鱼竿是费力杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 356,
        "type": "choice",
        "question": "下列杠杆中，属于费力杠杆的是（ ）。",
        "options": ["剪刀", "天平", "镊子", "羊角锤"],
        "answer": 2,
        "explanation": "镊子的动力臂小于阻力臂，是费力杠杆；天平是等臂杠杆；羊角锤是省力杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 357,
        "type": "choice",
        "question": "使用轮轴时，在（ ）上用力带动轴运动可以省力。",
        "options": ["轮", "轴", "轮和轴都可以", "都不省力"],
        "answer": 0,
        "explanation": "在轮上用力带动轴转动时，动力臂（轮半径）大于阻力臂（轴半径），因此省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 358,
        "type": "choice",
        "question": "下列工具中，应用了轮轴原理的是（ ）。",
        "options": ["螺丝刀", "剪刀", "筷子", "镊子"],
        "answer": 0,
        "explanation": "螺丝刀的刀柄是轮，刀杆是轴，转动刀柄时省力，属于轮轴应用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 359,
        "type": "choice",
        "question": "斜面的作用是（ ）。",
        "options": ["省力", "费力", "省距离", "改变力的方向"],
        "answer": 0,
        "explanation": "斜面可以省力，但费距离；坡度越小越省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 360,
        "type": "choice",
        "question": "下列设施中，应用了斜面原理的是（ ）。",
        "options": ["盘山公路", "旗杆顶部的轮子", "吊车的吊臂", "扳手"],
        "answer": 0,
        "explanation": "盘山公路是弯曲的斜面，将高度提升分散为较长的路程，从而省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 361,
        "type": "choice",
        "question": "螺丝钉的螺纹越密，拧起来越（ ）。",
        "options": ["省力", "费力", "省距离", "费距离但省力"],
        "answer": 3,
        "explanation": "螺纹越密，相当于斜面坡度越小，越省力，但需要旋转更多圈数（费距离）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 362,
        "type": "choice",
        "question": "剪刀是一种组合工具，它主要是（ ）和（ ）的组合。",
        "options": ["杠杆、斜面", "杠杆、轮轴", "斜面、轮轴", "轮轴、滑轮"],
        "answer": 0,
        "explanation": "剪刀的刀柄和刀片构成杠杆，刀刃是斜面，两者组合提高切割效率。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 363,
        "type": "choice",
        "question": "1820年，发现电流能产生磁性的科学家是（ ）。",
        "options": ["奥斯特", "牛顿", "伽利略", "法拉第"],
        "answer": 0,
        "explanation": "奥斯特通过实验发现通电导线能使小磁针偏转，证明了电流的磁效应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 364,
        "type": "choice",
        "question": "下列材料中，可以用来检测废旧电池是否还有电的是（ ）。",
        "options": ["指南针、导线", "指南针、磁铁", "导线、铁钉", "磁铁、铁钉"],
        "answer": 0,
        "explanation": "将导线绕成线圈，靠近指南针；若有电流，指南针偏转。利用电流的磁效应检测。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 365,
        "type": "choice",
        "question": "下列方法中，能增强电磁铁磁性的是（ ）。",
        "options": ["增加线圈匝数", "减少电池节数", "改变电流方向", "减少铁芯粗细"],
        "answer": 0,
        "explanation": "增加线圈匝数、增大电流、增加铁芯粗细都可增强电磁铁磁性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 366,
        "type": "choice",
        "question": "电动机的工作原理是（ ）。",
        "options": ["用电产生磁，利用磁的相互作用转动", "用磁产生电", "利用热膨胀转动", "利用化学反应产生推力"],
        "answer": 0,
        "explanation": "电动机通电后线圈产生磁场，与磁铁磁场相互作用，产生转动力矩。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 367,
        "type": "choice",
        "question": "当电动机被用来发电时，它就变成了（ ）。",
        "options": ["发电机", "变压器", "电容器", "电阻"],
        "answer": 0,
        "explanation": "电动机和发电机结构相似，电动机输入电能输出机械能，发电机输入机械能输出电能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 368,
        "type": "choice",
        "question": "电动机是将（ ）能转化为（ ）能的装置。",
        "options": ["电；动", "动；电", "化学；电", "热；动"],
        "answer": 0,
        "explanation": "电动机将电能转化为机械能（动能）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 369,
        "type": "choice",
        "question": "发电机是将（ ）能转化为（ ）能的装置。",
        "options": ["动；电", "电；动", "化学；电", "热；动"],
        "answer": 0,
        "explanation": "发电机将机械能（动能）转化为电能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 370,
        "type": "choice",
        "question": "改变（ ）可以改变电动机转子的转动方向。",
        "options": ["电池正负极连接", "线圈匝数", "铁芯粗细", "电池节数"],
        "answer": 0,
        "explanation": "改变电流方向或磁场方向可以改变电动机的转动方向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 371,
        "type": "choice",
        "question": "植物在阳光下成长，它们之间的能量转化是（ ）。",
        "options": ["化学能转化为机械能", "太阳能转化为化学能", "太阳能转化为机械能", "化学能转化为热能"],
        "answer": 1,
        "explanation": "植物通过光合作用将太阳能转化为储存在有机物中的化学能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 372,
        "type": "choice",
        "question": "下列用电器中，功率最大、最耗电的是（ ）。",
        "options": ["冰箱（140W）", "电风扇（50W）", "热水器（2000W）", "LED灯（10W）"],
        "answer": 2,
        "explanation": "功率越大，单位时间内耗电量越大；2000W的热水器功率远高于其他选项。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 373,
        "type": "choice",
        "question": "如图，当开关闭合时小车向左运动，可以判断电磁铁的右端是（ ）。",
        "options": ["N极", "S极", "不确定"],
        "answer": 1,
        "explanation": "小车向左运动说明电磁铁与小车上的磁铁相互吸引，根据磁极相互作用可判断电磁铁右端为S极。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 374,
        "type": "choice",
        "question": "下列能源中，属于可再生能源的是（ ）。",
        "options": ["太阳能", "煤", "石油", "天然气"],
        "answer": 0,
        "explanation": "太阳能取之不尽，是可再生能源；煤、石油、天然气是化石能源，不可再生。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 375,
        "type": "choice",
        "question": "下列能源中，属于不可再生能源的是（ ）。",
        "options": ["风能", "水能", "天然气", "太阳能"],
        "answer": 2,
        "explanation": "天然气是化石能源，形成需要数百万年，不可再生；风能、水能、太阳能是可再生能源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 376,
        "type": "choice",
        "question": "日常生活中，我们吃的米饭主要含有（ ）。",
        "options": ["糖类（淀粉）", "蛋白质", "脂肪", "维生素"],
        "answer": 0,
        "explanation": "大米富含淀粉，淀粉属于糖类，是人体主要的能量来源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 377,
        "type": "choice",
        "question": "淀粉遇到碘酒会变成（ ）色。",
        "options": ["蓝", "红", "黄", "绿"],
        "answer": 0,
        "explanation": "淀粉遇碘变蓝是淀粉的特征反应，用于检验淀粉的存在。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 378,
        "type": "choice",
        "question": "小苏打的特点是（ ）。",
        "options": ["白色、粉末状颗粒", "白色、立方体颗粒", "蓝色、晶状颗粒"],
        "answer": 0,
        "explanation": "小苏打（碳酸氢钠）是白色粉末状固体；食盐是立方体颗粒。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 379,
        "type": "choice",
        "question": "白醋的特点是（ ）。",
        "options": ["具有甜味、白色液体", "具有酸味、无色液体", "具有甜味、无色液体"],
        "answer": 1,
        "explanation": "白醋主要成分是醋酸，有酸味，是无色透明液体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 380,
        "type": "choice",
        "question": "下列液体中，能与小苏打混合产生气体的是（ ）。",
        "options": ["酱油", "白醋", "酒精", "食用油"],
        "answer": 1,
        "explanation": "白醋（含醋酸）与小苏打反应生成二氧化碳；酱油、酒精、食用油不反应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 381,
        "type": "choice",
        "question": "小苏打和白醋混合后留在杯中的液体是（ ）。",
        "options": ["小苏打溶液", "白醋", "含有新物质的液体", "水"],
        "answer": 2,
        "explanation": "反应后生成醋酸钠、水和二氧化碳，二氧化碳逸出，杯中主要是醋酸钠溶液。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 382,
        "type": "choice",
        "question": "将燃烧的细木条伸入小苏打和白醋混合后的杯中，细木条会（ ）。",
        "options": ["继续燃烧", "马上熄灭", "火苗变大", "燃烧更旺"],
        "answer": 1,
        "explanation": "反应生成二氧化碳，二氧化碳不支持燃烧，能使燃着的木条熄灭。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 383,
        "type": "choice",
        "question": "小苏打和白醋混合产生的气体是（ ）。",
        "options": ["白色酸味", "无色无味", "无色酸味", "白色无味"],
        "answer": 1,
        "explanation": "二氧化碳是无色无味的气体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 384,
        "type": "choice",
        "question": "下列变化中，与烧开水变化相同的是（ ）。",
        "options": ["大米发霉", "苹果氧化", "冰块融化", "铁锅生锈"],
        "answer": 2,
        "explanation": "烧开水是液态水变成水蒸气，是状态变化（物理变化）；冰块融化也是状态变化（物理变化）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 385,
        "type": "choice",
        "question": "下列物质的变化中，属于物理变化的是（ ）。",
        "options": ["面包发霉", "钢铁生锈", "蜡烛熔化", "食物腐烂"],
        "answer": 2,
        "explanation": "蜡烛熔化是固态石蜡变为液态，只是状态改变，没有新物质生成，属于物理变化；发霉、生锈、腐烂均有新物质生成，属于化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 386,
        "type": "choice",
        "question": "下列物质的变化中，属于化学变化的是（ ）。",
        "options": ["玻璃破碎", "水结成冰", "汽油挥发", "铁锅生锈"],
        "answer": 3,
        "explanation": "铁锅生锈是铁与氧气、水反应生成铁锈（氧化铁），有新物质生成，属于化学变化；玻璃破碎、水结冰、汽油挥发都是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 387,
        "type": "choice",
        "question": "蜡烛燃烧时，生成的新物质不包括（ ）。",
        "options": ["水", "炭黑", "二氧化碳", "蜡油"],
        "answer": 3,
        "explanation": "蜡油是石蜡熔化形成的，没有新物质生成；蜡烛燃烧生成水和二氧化碳，不完全燃烧生成炭黑。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 388,
        "type": "choice",
        "question": "用蜡烛火焰加热调羹中的白糖，白糖先熔化后变黑，这个过程属于（ ）。",
        "options": ["只有物理变化", "只有化学变化", "既有物理变化又有化学变化"],
        "answer": 2,
        "explanation": "白糖熔化是状态变化（物理变化）；变黑、产生焦味是生成新物质的化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 389,
        "type": "choice",
        "question": "下列成语中，其本意包含化学变化的是（ ）。",
        "options": ["穿针引线", "木已成舟", "煽风点火", "滴水成冰"],
        "answer": 2,
        "explanation": "'煽风点火'涉及燃烧，燃烧是化学变化；穿针引线、木已成舟、滴水成冰都是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 390,
        "type": "choice",
        "question": "将铁钉放入下列哪种环境中，生锈最快？（ ）",
        "options": ["干燥的空气中", "完全浸没在煮沸后冷却的水中（水面有油层）", "一半浸在水中、一半露在空气中", "完全浸没在植物油中"],
        "answer": 2,
        "explanation": "铁生锈需要水和氧气同时存在。一半在水中、一半在空气中，同时接触水分和氧气，生锈最快。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 391,
        "type": "choice",
        "question": "为了防止铁锅生锈，下列做法不合理的是（ ）。",
        "options": ["用后洗净擦干", "涂上一层食用油", "经常用洗洁精浸泡", "放在干燥通风处"],
        "answer": 2,
        "explanation": "长期用洗洁精浸泡会使铁锅长时间接触水分，加速生锈；擦干、涂油、通风都能防锈。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 392,
        "type": "choice",
        "question": "下列物质中，与白醋混合会产生气泡的是（ ）。",
        "options": ["食盐", "白砂糖", "小苏打", "面粉"],
        "answer": 2,
        "explanation": "小苏打（碳酸氢钠）与白醋（醋酸）反应生成二氧化碳气体，产生气泡；食盐、白砂糖、面粉不反应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 393,
        "type": "choice",
        "question": "将紫甘蓝汁分别滴入下列液体中，能使紫甘蓝汁变红的是（ ）。",
        "options": ["肥皂水", "柠檬汁", "小苏打水", "食盐水"],
        "answer": 1,
        "explanation": "紫甘蓝汁遇酸变红，柠檬汁呈酸性；肥皂水、小苏打水呈碱性（变绿/蓝），食盐水呈中性（紫色）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 394,
        "type": "choice",
        "question": "小科在厨房里发现了一包白色粉末，取少量加入白醋后产生大量气泡，这种白色粉末可能是（ ）。",
        "options": ["淀粉", "食盐", "小苏打", "白砂糖"],
        "answer": 2,
        "explanation": "小苏打与白醋反应产生二氧化碳气泡；淀粉、食盐、白砂糖与白醋混合无气泡。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 395,
        "type": "choice",
        "question": "将下列物质分别放入水中，能溶解的是（ ）。",
        "options": ["贝壳粉", "小苏打", "沙子", "木屑"],
        "answer": 1,
        "explanation": "小苏打（碳酸氢钠）可溶于水；贝壳粉（碳酸钙）不溶于水，沙子和木屑也不溶。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 396,
        "type": "choice",
        "question": "小苏打和白醋混合后，用手触摸烧杯外壁，感觉比反应前凉一些，这一现象说明（ ）。",
        "options": ["反应放热", "反应吸热", "反应没有热量变化", "白醋本身是凉的"],
        "answer": 1,
        "explanation": "小苏打与白醋的反应是吸热反应，混合后温度降低。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 397,
        "type": "choice",
        "question": "将燃烧的蜡烛用玻璃杯倒扣住，蜡烛会慢慢熄灭，这是因为（ ）。",
        "options": ["玻璃杯内温度降低", "玻璃杯内氧气被消耗完", "玻璃杯内二氧化碳被消耗完", "蜡烛本身有问题"],
        "answer": 1,
        "explanation": "蜡烛燃烧消耗玻璃杯内的氧气，当氧气浓度低于支持燃烧的限度时，蜡烛熄灭。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 398,
        "type": "choice",
        "question": "下列气体中，能使燃着的木条熄灭的是（ ）。",
        "options": ["氧气", "氢气", "二氧化碳", "空气"],
        "answer": 2,
        "explanation": "二氧化碳不支持燃烧，能使燃着的木条熄灭；氧气支持燃烧，氢气可燃，空气中有氧气所以木条继续燃烧。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 399,
        "type": "choice",
        "question": "二氧化碳比同体积的空气（ ）。",
        "options": ["轻", "重", "一样重", "无法比较"],
        "answer": 1,
        "explanation": "二氧化碳的分子量为44，空气平均分子量约为29，因此二氧化碳密度比空气大。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 400,
        "type": "choice",
        "question": "铁锈与铁相比，下列说法正确的是（ ）。",
        "options": ["铁锈能被磁铁吸引", "铁锈有金属光泽", "铁锈是红褐色的", "铁锈和铁是同一种物质"],
        "answer": 2,
        "explanation": "铁锈的主要成分是氧化铁，呈红褐色，无金属光泽，不能被磁铁吸引，与铁不是同一种物质。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 401,
        "type": "choice",
        "question": "下列变化中，属于化学变化且伴随发光发热现象的是（ ）。",
        "options": ["电灯通电发光", "木柴燃烧", "水沸腾", "干冰升华"],
        "answer": 1,
        "explanation": "木柴燃烧生成二氧化碳和水等新物质，是化学变化，同时发光发热；电灯发光是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 402,
        "type": "choice",
        "question": "小科将白醋倒入装有贝壳粉的杯子中，观察到有气泡产生。这种气体是（ ）。",
        "options": ["氧气", "氢气", "二氧化碳", "氮气"],
        "answer": 2,
        "explanation": "贝壳粉主要成分是碳酸钙，与白醋反应生成二氧化碳气体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 403,
        "type": "choice",
        "question": "下列食物中，滴加碘酒后最可能变成蓝色的是（ ）。",
        "options": ["苹果", "馒头", "鸡蛋", "青菜"],
        "answer": 1,
        "explanation": "馒头富含淀粉，淀粉遇碘变蓝；苹果、鸡蛋、青菜中淀粉含量较少。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 404,
        "type": "choice",
        "question": "小科发现家里的银器表面变黑，查阅资料得知是银与空气中的硫化物反应生成了硫化银。这一变化属于（ ）。",
        "options": ["物理变化", "化学变化", "状态变化", "形状变化"],
        "answer": 1,
        "explanation": "银与硫反应生成硫化银，产生了新物质，属于化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 405,
        "type": "choice",
        "question": "下列做法中，能加快铁生锈速度的是（ ）。",
        "options": ["在铁制品表面涂油漆", "将铁制品放在干燥处", "在铁制品表面镀锌", "将铁制品放在潮湿的盐水中"],
        "answer": 3,
        "explanation": "潮湿的盐水提供了水分和电解质，能加速电化学腐蚀，使铁生锈更快；涂漆、镀锌、干燥都能防锈。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 406,
        "type": "choice",
        "question": "下列物质中，属于纯净物的是（ ）。",
        "options": ["食醋", "小苏打", "自来水", "空气"],
        "answer": 1,
        "explanation": "小苏打（碳酸氢钠）是由一种物质组成的纯净物；食醋、自来水、空气都是混合物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 407,
        "type": "choice",
        "question": "小科在实验室中进行铁钉生锈实验，一周后发现试管中的铁钉生锈最严重，该试管中的条件是（ ）。",
        "options": ["干燥的空气", "煮沸后冷却的水（水面有油）", "蒸馏水（铁钉完全浸没）", "潮湿的空气（铁钉一半浸水）"],
        "answer": 3,
        "explanation": "铁钉一半浸水、一半在空气中，同时接触水分和氧气，生锈最快。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 408,
        "type": "choice",
        "question": "下列现象中，能证明有新物质生成的是（ ）。",
        "options": ["玻璃杯破碎", "纸张撕碎", "牛奶变酸", "石蜡熔化"],
        "answer": 2,
        "explanation": "牛奶变酸是乳酸菌发酵产生乳酸，有新物质生成；玻璃破碎、纸张撕碎、石蜡熔化都是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 409,
        "type": "choice",
        "question": "下列变化中，属于缓慢氧化的是（ ）。",
        "options": ["蜡烛燃烧", "铁生锈", "火药爆炸", "汽油燃烧"],
        "answer": 1,
        "explanation": "铁生锈是铁与氧气缓慢反应的过程，不易察觉；燃烧和爆炸是剧烈的氧化反应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 410,
        "type": "choice",
        "question": "小科将一枚铁钉放入试管中，加入少量食盐水，几天后观察到铁钉表面生锈严重。食盐水的作用是（ ）。",
        "options": ["提供氧气", "提供水分", "加速电化学腐蚀", "隔绝空气"],
        "answer": 2,
        "explanation": "食盐水作为电解质溶液，能加速铁的电化学腐蚀，使生锈速度加快。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 411,
        "type": "choice",
        "question": "下列物质中，与白醋混合不会产生气体的是（ ）。",
        "options": ["鸡蛋壳", "贝壳", "大理石", "食盐"],
        "answer": 3,
        "explanation": "鸡蛋壳、贝壳、大理石的主要成分都是碳酸钙，与白醋反应生成二氧化碳；食盐与白醋不反应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 412,
        "type": "choice",
        "question": "小科将小苏打和白醋混合后，用毛玻璃片盖住杯口，过了一会儿，他感觉到杯壁变凉。这说明该反应（ ）。",
        "options": ["吸热", "放热", "既不吸热也不放热", "无法判断"],
        "answer": 0,
        "explanation": "杯壁变凉说明热量被吸收，反应是吸热的。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 413,
        "type": "choice",
        "question": "在蜡烛燃烧实验中，将一个干燥的烧杯罩在火焰上方，烧杯内壁出现水雾，这说明蜡烛燃烧生成了（ ）。",
        "options": ["二氧化碳", "水", "炭黑", "氧气"],
        "answer": 1,
        "explanation": "水雾是水蒸气遇冷凝结形成的，证明蜡烛燃烧生成了水。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 414,
        "type": "choice",
        "question": "将涂有石灰水的玻璃片放在蜡烛火焰上方，玻璃片变浑浊，这说明蜡烛燃烧生成了（ ）。",
        "options": ["水", "二氧化碳", "炭黑", "一氧化碳"],
        "answer": 1,
        "explanation": "二氧化碳能使澄清石灰水变浑浊，说明蜡烛燃烧生成了二氧化碳。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 415,
        "type": "choice",
        "question": "下列能源中，最终来源是太阳的是（ ）。",
        "options": ["风能", "水能", "煤", "以上都是"],
        "answer": 3,
        "explanation": "风能、水能、化石能源（煤、石油、天然气）都直接或间接来源于太阳能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 416,
        "type": "choice",
        "question": "下列家用电器中，工作时主要将电能转化为机械能的是（ ）。",
        "options": ["电饭煲", "电风扇", "电灯", "电视机"],
        "answer": 1,
        "explanation": "电风扇的电动机将电能转化为机械能（扇叶转动）；电饭煲转化为热能，电灯转化为光能和热能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 417,
        "type": "choice",
        "question": "下列装置中，能将太阳能转化为电能的是（ ）。",
        "options": ["风力发电机", "太阳能电池板", "水力发电机", "火力发电机"],
        "answer": 1,
        "explanation": "太阳能电池板利用光伏效应将光能直接转化为电能；其他选项分别利用风、水、燃料的化学能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 418,
        "type": "choice",
        "question": "电磁铁与普通磁铁相比，最大的优点是（ ）。",
        "options": ["磁性更强", "磁极可以改变", "磁性强弱和磁极可以控制", "不需要电能"],
        "answer": 2,
        "explanation": "电磁铁通电时有磁性，断电后磁性消失；通过改变电流方向可以改变磁极，通过改变电流大小或线圈匝数可以改变磁性强弱。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 419,
        "type": "choice",
        "question": "下列做法中，能改变电磁铁磁极的是（ ）。",
        "options": ["增加电池节数", "增加线圈匝数", "改变线圈缠绕方向", "换用更粗的铁芯"],
        "answer": 2,
        "explanation": "电磁铁磁极由电流方向决定，改变线圈缠绕方向相当于改变电流方向，磁极改变。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 420,
        "type": "choice",
        "question": "下列做法中，能增强电磁铁磁性的是（ ）。",
        "options": ["减少线圈匝数", "减小电流", "增加铁芯的粗细", "改变电流方向"],
        "answer": 2,
        "explanation": "增加线圈匝数、增大电流、增加铁芯粗细都能增强电磁铁磁性；改变电流方向只改变磁极，不改变磁性强弱。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 421,
        "type": "choice",
        "question": "电动机的转子通电后，在磁场中受到力的作用而转动。这一过程中，能量转化是（ ）。",
        "options": ["机械能→电能", "电能→机械能", "化学能→电能", "热能→机械能"],
        "answer": 1,
        "explanation": "电动机是将电能转化为机械能的装置。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 422,
        "type": "choice",
        "question": "发电机的工作原理是（ ）。",
        "options": ["电流的磁效应", "电磁感应", "通电导体在磁场中受力", "热膨胀"],
        "answer": 1,
        "explanation": "发电机利用电磁感应原理，闭合电路的一部分导体在磁场中做切割磁感线运动时产生感应电流。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 423,
        "type": "choice",
        "question": "丹麦科学家奥斯特的著名实验证明了（ ）。",
        "options": ["电磁感应现象", "通电导体周围存在磁场", "磁场对通电导体有力的作用", "电流可以产生热"],
        "answer": 1,
        "explanation": "奥斯特实验通过小磁针偏转证明了通电导线周围存在磁场，即电流的磁效应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 424,
        "type": "choice",
        "question": "下列电器中，没有使用电磁铁的是（ ）。",
        "options": ["电铃", "电话听筒", "电饭煲", "电磁起重机"],
        "answer": 2,
        "explanation": "电饭煲利用电流的热效应（电热丝）发热，不使用电磁铁；电铃、电话听筒、电磁起重机都用到电磁铁。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 425,
        "type": "choice",
        "question": "小科用导线和指南针检测电池是否有电，将导线绕成线圈后靠近指南针，发现指南针偏转。这一现象利用的原理是（ ）。",
        "options": ["电磁感应", "电流的磁效应", "磁场对电流的作用", "静电感应"],
        "answer": 1,
        "explanation": "通电导线周围产生磁场，使指南针偏转，这是电流的磁效应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 426,
        "type": "choice",
        "question": "下列材料中，最适合制作电磁铁铁芯的是（ ）。",
        "options": ["铜棒", "铝棒", "铁棒", "塑料棒"],
        "answer": 2,
        "explanation": "铁是软磁性材料，通电时被磁化，断电后磁性消失快，适合做电磁铁铁芯；铜、铝、塑料不能被磁化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 427,
        "type": "choice",
        "question": "一个电磁铁的铁芯原来是竖直放置的，小科将其水平放置，其他条件不变，电磁铁的磁性强弱会（ ）。",
        "options": ["增强", "减弱", "不变", "无法判断"],
        "answer": 2,
        "explanation": "电磁铁的磁性强弱与铁芯的形状和放置方向无关，只与线圈匝数、电流大小、铁芯材料有关。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 428,
        "type": "choice",
        "question": "某电磁铁通电后，小磁针的N极被铁芯的上端吸引，则该铁芯的上端是（ ）。",
        "options": ["N极", "S极", "无法确定", "没有磁性"],
        "answer": 1,
        "explanation": "异名磁极相互吸引，小磁针N极被吸引，说明铁芯上端是S极。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 429,
        "type": "choice",
        "question": "下列做法中，可以加快电动机转子转速的是（ ）。",
        "options": ["减少线圈匝数", "减小电流", "增加磁铁数量", "改变电流方向"],
        "answer": 2,
        "explanation": "增加磁铁数量可以增强磁场，使转子受力增大，转速加快；减少线圈匝数或减小电流会降低转速。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 430,
        "type": "choice",
        "question": "下列能源中，属于不可再生能源的是（ ）。",
        "options": ["太阳能", "风能", "天然气", "潮汐能"],
        "answer": 2,
        "explanation": "天然气是化石燃料，形成需要数百万年，不可再生；太阳能、风能、潮汐能是可再生能源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 431,
        "type": "choice",
        "question": "下列措施中，有利于节约能源的是（ ）。",
        "options": ["夏天空调温度设置低于20℃", "电视机长时间待机", "随手关灯", "使用一次性餐具"],
        "answer": 2,
        "explanation": "随手关灯减少电能浪费；空调温度过低、待机耗电、一次性餐具消耗资源都不利于节能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 432,
        "type": "choice",
        "question": "小科家的电热水壶铭牌上标有'220V 1500W'，它正常工作1小时消耗的电能是（ ）。",
        "options": ["0.5千瓦时", "1.5千瓦时", "15千瓦时", "1500千瓦时"],
        "answer": 1,
        "explanation": "电能=功率×时间=1500W×1h=1.5kW·h（千瓦时）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 433,
        "type": "choice",
        "question": "下列交通工具中，使用可再生能源作为动力的是（ ）。",
        "options": ["燃油汽车", "电动自行车", "蒸汽火车", "燃气公交车"],
        "answer": 1,
        "explanation": "电动自行车使用电能，电能可由太阳能、风能等可再生能源转化而来；燃油、燃气、煤炭都是不可再生能源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 434,
        "type": "choice",
        "question": "植物的光合作用是将太阳能转化为（ ）。",
        "options": ["热能", "机械能", "化学能", "电能"],
        "answer": 2,
        "explanation": "光合作用将太阳能转化为储存在有机物中的化学能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 435,
        "type": "choice",
        "question": "人体运动时，能量主要来源于（ ）。",
        "options": ["食物中的化学能", "太阳能", "电能", "热能"],
        "answer": 0,
        "explanation": "人体通过呼吸作用将食物中的化学能转化为机械能等，供生命活动和运动使用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 436,
        "type": "choice",
        "question": "下列用电器中，正常工作时功率约为100W的是（ ）。",
        "options": ["空调", "电冰箱", "白炽灯", "微波炉"],
        "answer": 2,
        "explanation": "白炽灯功率一般在40W-100W；空调、微波炉功率通常在1000W以上，电冰箱约100-200W。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 437,
        "type": "choice",
        "question": "下列现象中，属于动能转化为势能的是（ ）。",
        "options": ["秋千从高处荡向低处", "滚摆上升", "弓箭射出", "汽车加速"],
        "answer": 1,
        "explanation": "滚摆上升过程中，速度减小、高度增加，动能转化为重力势能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 438,
        "type": "choice",
        "question": "下列能量转化中，属于化学能转化为热能的是（ ）。",
        "options": ["太阳能热水器", "火力发电", "风力发电", "水力发电"],
        "answer": 1,
        "explanation": "火力发电是燃料（煤、石油等）燃烧，化学能转化为热能，热能再转化为电能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 439,
        "type": "choice",
        "question": "小科将手电筒打开，手电筒发光。这一过程中，主要的能量转化是（ ）。",
        "options": ["化学能→电能→光能", "电能→化学能→光能", "光能→电能→化学能", "电能→光能"],
        "answer": 0,
        "explanation": "手电筒的电池将化学能转化为电能，灯泡将电能转化为光能和热能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 440,
        "type": "choice",
        "question": "下列做法中，能减少环境污染的是（ ）。",
        "options": ["燃烧秸秆", "使用一次性塑料袋", "垃圾分类回收", "随意丢弃废旧电池"],
        "answer": 2,
        "explanation": "垃圾分类回收可以减少垃圾填埋量和资源浪费，有利于环保；其他选项都会造成污染。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 441,
        "type": "choice",
        "question": "下列自然现象中，主要与地球自转有关的是（ ）。",
        "options": ["四季变化", "昼夜交替", "正午影长变化", "星座季节变化"],
        "answer": 1,
        "explanation": "昼夜交替由地球自转引起；四季变化、正午影长变化、星座季节变化与地球公转有关。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 442,
        "type": "choice",
        "question": "下列现象中，主要与地球公转有关的是（ ）。",
        "options": ["太阳东升西落", "昼夜交替", "四季更替", "地方时差"],
        "answer": 2,
        "explanation": "四季更替由地球公转和地轴倾斜共同引起；太阳东升西落、昼夜交替、地方时差与地球自转有关。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 443,
        "type": "choice",
        "question": "杭州（约120°E）位于兰州（约104°E）的东边，杭州比兰州（ ）。",
        "options": ["先迎来黎明", "后迎来黎明", "同时迎来黎明", "无法确定"],
        "answer": 0,
        "explanation": "地球自西向东自转，东边的地点先见到日出，因此杭州先迎来黎明。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 444,
        "type": "choice",
        "question": "下列城市中，最早迎来新一天的是（ ）。",
        "options": ["北京（116°E）", "东京（140°E）", "伦敦（0°）", "纽约（74°W）"],
        "answer": 1,
        "explanation": "经度越靠东，时间越早；东京的经度最靠东，最早迎来新一天。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 445,
        "type": "choice",
        "question": "北半球夏季时，太阳直射点在（ ）。",
        "options": ["赤道", "北回归线", "南回归线", "北极圈"],
        "answer": 1,
        "explanation": "北半球夏至日（6月22日前后），太阳直射北回归线；夏季（6-8月）太阳直射点在北回归线附近。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 446,
        "type": "choice",
        "question": "北半球冬至日（12月22日前后），太阳直射点在（ ）。",
        "options": ["赤道", "北回归线", "南回归线", "北极圈"],
        "answer": 2,
        "explanation": "冬至日太阳直射南回归线，此时北半球昼短夜长，正午太阳高度最低。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 447,
        "type": "choice",
        "question": "春分日和秋分日，太阳直射点在（ ）。",
        "options": ["赤道", "北回归线", "南回归线", "北极圈"],
        "answer": 0,
        "explanation": "春分（3月21日前后）和秋分（9月23日前后）太阳直射赤道，全球昼夜等长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 448,
        "type": "choice",
        "question": "北半球冬至日，正午物体影子（ ）。",
        "options": ["最短", "最长", "适中", "无法确定"],
        "answer": 1,
        "explanation": "冬至日北半球太阳高度最低，正午影子最长；夏至日影子最短。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 449,
        "type": "choice",
        "question": "下列节日中，杭州正午太阳高度最大的是（ ）。",
        "options": ["元旦（1月1日）", "儿童节（6月1日）", "国庆节（10月1日）", "劳动节（5月1日）"],
        "answer": 1,
        "explanation": "6月1日接近夏至（6月22日），太阳高度较大；其他日期远离夏至，太阳高度较小。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 450,
        "type": "choice",
        "question": "下列现象中，与地轴倾斜有关的是（ ）。",
        "options": ["昼夜交替", "昼夜长短变化", "太阳东升西落", "地方时差"],
        "answer": 1,
        "explanation": "地轴倾斜导致太阳直射点南北移动，引起昼夜长短变化和四季更替；昼夜交替、太阳东升西落、地方时差与地球自转有关。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 451,
        "type": "choice",
        "question": "在北极地区，夏季会出现极昼现象，这是因为（ ）。",
        "options": ["地球公转速度变快", "地轴倾斜且北极指向太阳一侧", "地球自转速度变慢", "北极地区距离太阳更近"],
        "answer": 1,
        "explanation": "夏季北极朝向太阳，地轴倾斜使北极圈内连续24小时被阳光照射，出现极昼。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 452,
        "type": "choice",
        "question": "在赤道地区，一年中昼夜长短情况是（ ）。",
        "options": ["昼夜等长", "昼长夜短", "昼短夜长", "有极昼极夜"],
        "answer": 0,
        "explanation": "赤道地区全年昼夜等长，各约12小时。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 453,
        "type": "choice",
        "question": "下列天体系统中，范围最大的是（ ）。",
        "options": ["太阳系", "银河系", "地月系", "河外星系"],
        "answer": 3,
        "explanation": "河外星系是银河系之外的星系系统，宇宙中包含无数河外星系；银河系包含太阳系，太阳系包含地月系。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 454,
        "type": "choice",
        "question": "下列天体系统中，按照从小到大的顺序排列正确的是（ ）。",
        "options": ["地月系→太阳系→银河系→宇宙", "太阳系→地月系→银河系→宇宙", "地月系→银河系→太阳系→宇宙", "银河系→太阳系→地月系→宇宙"],
        "answer": 0,
        "explanation": "天体系统层级：地月系 < 太阳系 < 银河系 < 宇宙。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 455,
        "type": "choice",
        "question": "太阳系中，小行星带位于（ ）之间。",
        "options": ["地球和火星", "火星和木星", "木星和土星", "天王星和海王星"],
        "answer": 1,
        "explanation": "小行星带位于火星轨道和木星轨道之间。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 456,
        "type": "choice",
        "question": "下列行星中，属于类地行星的是（ ）。",
        "options": ["木星", "土星", "火星", "天王星"],
        "answer": 2,
        "explanation": "类地行星包括水星、金星、地球、火星，表面为岩石，体积较小；木星、土星、天王星是气态巨行星。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 457,
        "type": "choice",
        "question": "下列行星中，属于气态巨行星的是（ ）。",
        "options": ["水星", "金星", "地球", "木星"],
        "answer": 3,
        "explanation": "木星、土星、天王星、海王星是气态巨行星，主要由氢、氦等气体组成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 458,
        "type": "choice",
        "question": "太阳系中，拥有最明显光环的行星是（ ）。",
        "options": ["木星", "土星", "天王星", "海王星"],
        "answer": 1,
        "explanation": "土星拥有太阳系中最宽、最明亮的光环系统。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 459,
        "type": "choice",
        "question": "月球绕地球公转一周的时间大约是（ ）。",
        "options": ["1天", "1个月", "1年", "24小时"],
        "answer": 1,
        "explanation": "月球公转周期约27.3天，大致为1个月（朔望月约29.5天）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 460,
        "type": "choice",
        "question": "日食发生的条件是（ ）。",
        "options": ["月球位于地球和太阳之间，三者成一直线", "地球位于月球和太阳之间，三者成一直线", "月球和地球处于同一侧", "太阳、月球、地球成直角"],
        "answer": 0,
        "explanation": "日食发生在月球运行到太阳和地球之间，且三者几乎成一直线时。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 461,
        "type": "choice",
        "question": "月食发生的条件是（ ）。",
        "options": ["月球位于地球和太阳之间", "地球位于月球和太阳之间", "太阳位于地球和月球之间", "三者成一直线且月球在中间"],
        "answer": 1,
        "explanation": "月食发生在月球进入地球的阴影区，即地球位于太阳和月球之间，三者成一直线。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 462,
        "type": "choice",
        "question": "下列天文现象中，可以在地球上用肉眼直接安全观测的是（ ）。",
        "options": ["日全食", "日偏食", "月食", "金星凌日"],
        "answer": 2,
        "explanation": "月食是满月进入地球阴影，亮度较暗，可以直接用肉眼观察；日食和金星凌日必须用专业滤光镜。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 463,
        "type": "choice",
        "question": "下列星座中，位于北半球且全年可见的是（ ）。",
        "options": ["大熊座", "天蝎座", "天鹰座", "猎户座"],
        "answer": 0,
        "explanation": "大熊座靠近北天极，北半球中高纬度全年可见；其他星座有季节性。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 464,
        "type": "choice",
        "question": "下列星座中，属于秋季星空代表星座的是（ ）。",
        "options": ["天蝎座", "猎户座", "仙后座", "天鹰座"],
        "answer": 2,
        "explanation": "秋季星空以仙后座、飞马座、仙女座等为代表；天蝎座是夏季，猎户座是冬季，天鹰座是夏季。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 465,
        "type": "choice",
        "question": "下列星座中，属于冬季星空代表星座的是（ ）。",
        "options": ["天琴座", "天鹅座", "猎户座", "天鹰座"],
        "answer": 2,
        "explanation": "猎户座是冬季星空最显著的星座；天琴座、天鹅座、天鹰座是夏季星空代表星座。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 466,
        "type": "choice",
        "question": "下列恒星中，亮度最高（最亮）的是（ ）。",
        "options": ["北极星", "牛郎星", "织女星", "天狼星"],
        "answer": 3,
        "explanation": "天狼星是夜空中最亮的恒星（除太阳外），视星等约-1.46；织女星、牛郎星、北极星的亮度较低。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 467,
        "type": "choice",
        "question": "中国古称'大火星'的恒星是（ ）。",
        "options": ["心宿二", "参宿四", "毕宿五", "轩辕十四"],
        "answer": 0,
        "explanation": "心宿二（天蝎座α星）呈红色，中国古代称为'大火'，《诗经》中有'七月流火'的描述。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 468,
        "type": "choice",
        "question": "我国古代利用'立竿测影'来测定节气，该仪器是（ ）。",
        "options": ["日晷", "圭表", "浑天仪", "简仪"],
        "answer": 1,
        "explanation": "圭表由圭（尺）和表（立杆）组成，通过测量正午影长确定节气和回归年长度。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 469,
        "type": "choice",
        "question": "下列工具中，利用日影计时的是（ ）。",
        "options": ["圭表", "日晷", "漏刻", "沙漏"],
        "answer": 1,
        "explanation": "日晷利用太阳投射的影子来测定时刻；圭表主要用于测节气而非时刻；漏刻、沙漏是水、沙计时。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 470,
        "type": "choice",
        "question": "下列关于望远镜的说法，正确的是（ ）。",
        "options": ["放大倍数越大，视野越大", "放大倍数越大，看到的星体越暗", "望远镜的口径越大，看到的星体越亮", "所有望远镜都只能白天使用"],
        "answer": 2,
        "explanation": "望远镜口径越大，收集光线能力越强，看到的星体越亮；放大倍数越大，视野越小、像越暗。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 471,
        "type": "choice",
        "question": "人类首次实现月球背面软着陆的探测器是（ ）。",
        "options": ["嫦娥三号", "嫦娥四号", "嫦娥五号", "嫦娥六号"],
        "answer": 1,
        "explanation": "嫦娥四号于2019年1月成功在月球背面冯·卡门撞击坑着陆，是人类首次月背软着陆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 472,
        "type": "choice",
        "question": "中国首次实现地外天体采样返回的探测器是（ ）。",
        "options": ["嫦娥三号", "嫦娥四号", "嫦娥五号", "天问一号"],
        "answer": 2,
        "explanation": "嫦娥五号于2020年成功从月球带回1731克月壤样品，实现了我国首次地外天体采样返回。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 473,
        "type": "choice",
        "question": "中国首辆火星车被命名为（ ）。",
        "options": ["玉兔号", "祝融号", "天问号", "嫦娥号"],
        "answer": 1,
        "explanation": "祝融号是'天问一号'携带的火星车，于2021年成功着陆火星乌托邦平原。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 474,
        "type": "choice",
        "question": "世界上最大单口径射电望远镜位于中国贵州，被称为（ ）。",
        "options": ["FAST 天眼", "LAMOST", "哈勃望远镜", "韦伯望远镜"],
        "answer": 0,
        "explanation": "FAST（500米口径球面射电望远镜）位于贵州平塘，是世界上最大的单口径射电望远镜。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 475,
        "type": "choice",
        "question": "下列关于杠杆的说法，正确的是（ ）。",
        "options": ["使用杠杆一定能省力", "支点越靠近阻力点越省力", "杠杆只能省力不能费力", "省力杠杆一定费距离"],
        "answer": 3,
        "explanation": "省力杠杆的动力臂大于阻力臂，省力但费距离；费力杠杆省距离但费力；使用杠杆不一定省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 476,
        "type": "choice",
        "question": "下列工具中，属于费力杠杆的是（ ）。",
        "options": ["羊角锤", "钢丝钳", "钓鱼竿", "扳手"],
        "answer": 2,
        "explanation": "钓鱼竿的动力臂小于阻力臂，是费力杠杆，但可以省距离；羊角锤、钢丝钳、扳手是省力杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 477,
        "type": "choice",
        "question": "使用如图所示的定滑轮时，下列说法正确的是（ ）。",
        "options": ["可以省力", "可以省距离", "可以改变力的方向", "可以省功"],
        "answer": 2,
        "explanation": "定滑轮不省力也不费距离，但可以改变力的方向；任何机械都不省功。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 478,
        "type": "choice",
        "question": "使用如图所示的动滑轮时，下列说法正确的是（ ）。",
        "options": ["一定省力", "一定费力", "可以改变力的方向", "不能省力"],
        "answer": 0,
        "explanation": "动滑轮可以省一半力（不计摩擦和绳重），但费距离，不能改变力的方向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 479,
        "type": "choice",
        "question": "在盘山公路上行驶的汽车，利用了斜面的原理。斜面的作用是（ ）。",
        "options": ["省力", "费力", "省距离", "省功"],
        "answer": 0,
        "explanation": "斜面可以省力但费距离；盘山公路将高度提升转化为较长的路程，使车辆更容易爬坡。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 480,
        "type": "choice",
        "question": "螺丝钉的螺纹是斜面的变形，螺纹越密，拧入时越（ ）。",
        "options": ["省力", "费力", "容易打滑", "越不容易拧入"],
        "answer": 0,
        "explanation": "螺纹越密，相当于斜面坡度越小，越省力，但需要旋转更多圈数（费距离）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 481,
        "type": "choice",
        "question": "使用下列工具时，主要应用了轮轴原理的是（ ）。",
        "options": ["筷子", "门把手", "镊子", "钓鱼竿"],
        "answer": 1,
        "explanation": "门把手转动时，手在轮上用力，带动轴转动，是轮轴应用；筷子、镊子、钓鱼竿是杠杆。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 482,
        "type": "choice",
        "question": "小科用撬棍撬动一块大石头，他发现手越靠近撬棍的末端越省力。这是因为（ ）。",
        "options": ["增大了动力臂", "减小了动力臂", "增大了阻力臂", "减小了阻力臂"],
        "answer": 0,
        "explanation": "手越靠近末端，动力臂越大，根据杠杆平衡原理，所需动力越小。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 483,
        "type": "choice",
        "question": "如图所示，用同样大小的力分别作用在扳手的A、B、C三点，最省力的是作用在（ ）。",
        "options": ["A点（最靠近螺母）", "B点（中间）", "C点（最远端）", "一样省力"],
        "answer": 2,
        "explanation": "作用点离支点（螺母中心）越远，动力臂越大，越省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 484,
        "type": "choice",
        "question": "下列关于工程建设的说法，正确的是（ ）。",
        "options": ["工程设计完成后可以直接建造，不需要测试", "工程建设只需要考虑美观", "工程建设需要反复评估和改进", "工程建设不需要技术支持"],
        "answer": 2,
        "explanation": "工程建设需要经过明确问题、设计、制作模型、测试评估、改进等反复迭代的过程，需要技术支撑，并综合考虑安全、成本、美观等因素。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 485,
        "type": "choice",
        "question": "下列哪种材料属于金属材料？（ ）",
        "options": ["陶瓷", "玻璃", "铁", "塑料"],
        "answer": 2,
        "explanation": "铁是金属材料；陶瓷、玻璃、塑料属于无机非金属材料或有机高分子材料。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 486,
        "type": "choice",
        "question": "下列哪种材料属于非金属材料？（ ）",
        "options": ["铜", "铝", "橡胶", "钢"],
        "answer": 2,
        "explanation": "橡胶是有机高分子材料，属于非金属；铜、铝、钢都是金属材料。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 487,
        "type": "choice",
        "question": "下列哪种材料具有良好的导电性？（ ）",
        "options": ["塑料", "橡胶", "铜", "木材"],
        "answer": 2,
        "explanation": "铜是良导体，常用于电线；塑料、橡胶、木材都是绝缘体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 488,
        "type": "choice",
        "question": "下列哪种材料常用于制作绝缘体？（ ）",
        "options": ["铁", "铜", "铝", "塑料"],
        "answer": 3,
        "explanation": "塑料是良好的绝缘体，常用于电线外包层；铁、铜、铝都是导体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 489,
        "type": "choice",
        "question": "下列哪种变化属于物理变化？（ ）",
        "options": ["铁生锈", "食物腐败", "汽油挥发", "纸张燃烧"],
        "answer": 2,
        "explanation": "汽油挥发是液态变成气态，没有新物质生成，是物理变化；其他选项都有新物质生成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 490,
        "type": "choice",
        "question": "下列哪种变化属于化学变化？（ ）",
        "options": ["灯泡发光", "冰块融化", "铁丝弯曲", "火柴燃烧"],
        "answer": 3,
        "explanation": "火柴燃烧生成二氧化碳、水等新物质，是化学变化；灯泡发光、冰块融化、铁丝弯曲都是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 491,
        "type": "choice",
        "question": "下列哪种现象是化学变化？（ ）",
        "options": ["汽油燃烧", "汽油挥发", "轮胎爆炸", "玻璃破碎"],
        "answer": 0,
        "explanation": "汽油燃烧生成二氧化碳和水，是化学变化；挥发、爆炸（轮胎）、破碎都是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 492,
        "type": "choice",
        "question": "下列哪种现象是物理变化？（ ）",
        "options": ["火药爆炸", "煤气燃烧", "石蜡熔化", "食物消化"],
        "answer": 2,
        "explanation": "石蜡熔化是状态变化，没有新物质生成，是物理变化；火药爆炸、煤气燃烧、食物消化都有新物质生成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 493,
        "type": "choice",
        "question": "下列关于分子的说法，正确的是（ ）。",
        "options": ["分子是构成物质的最小微粒", "分子在化学变化中不能再分", "分子在物理变化中会改变", "分子是保持物质化学性质的最小微粒"],
        "answer": 3,
        "explanation": "分子是保持物质化学性质的最小微粒；在化学变化中分子可以再分，物理变化中分子不变。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 494,
        "type": "choice",
        "question": "下列物质中，由分子构成的是（ ）。",
        "options": ["铁", "氯化钠", "水", "金刚石"],
        "answer": 2,
        "explanation": "水是由水分子构成；铁由铁原子构成，氯化钠由离子构成，金刚石由碳原子构成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 495,
        "type": "choice",
        "question": "下列物质中，由原子直接构成的是（ ）。",
        "options": ["氧气", "水", "铁", "二氧化碳"],
        "answer": 2,
        "explanation": "铁是金属，由铁原子直接构成；氧气、水、二氧化碳由分子构成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 496,
        "type": "choice",
        "question": "下列物质中，由离子构成的是（ ）。",
        "options": ["氯化钠", "水", "氢气", "金刚石"],
        "answer": 0,
        "explanation": "氯化钠由钠离子和氯离子构成；水、氢气由分子构成，金刚石由原子构成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 497,
        "type": "choice",
        "question": "下列关于原子的说法，正确的是（ ）。",
        "options": ["原子是实心球体", "原子是化学变化中的最小微粒", "原子不能构成分子", "原子比分子小得多"],
        "answer": 1,
        "explanation": "原子是化学变化中的最小微粒；原子内有空间，原子可以构成分子，原子不一定比分子小（有的原子比小分子大）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 498,
        "type": "choice",
        "question": "下列变化中，分子本身没有改变的是（ ）。",
        "options": ["水变成水蒸气", "氢气燃烧", "铁生锈", "食物腐败"],
        "answer": 0,
        "explanation": "水变成水蒸气是物理变化，水分子本身没有改变；氢气燃烧、铁生锈、食物腐败都是化学变化，分子改变。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 499,
        "type": "choice",
        "question": "下列变化中，分子本身发生改变的是（ ）。",
        "options": ["冰融化成水", "酒精挥发", "糖溶于水", "木炭燃烧"],
        "answer": 3,
        "explanation": "木炭燃烧是化学变化，碳分子（碳原子）与氧分子反应生成二氧化碳分子，分子种类改变；其他是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 500,
        "type": "choice",
        "question": "下列哪种气体是植物光合作用的主要原料？（ ）",
        "options": ["氧气", "氮气", "二氧化碳", "氢气"],
        "answer": 2,
        "explanation": "光合作用吸收二氧化碳和水，在光下合成有机物并释放氧气。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 501,
        "type": "choice",
        "question": "下列哪种气体是植物光合作用的主要产物？（ ）",
        "options": ["二氧化碳", "氧气", "氮气", "水蒸气"],
        "answer": 1,
        "explanation": "光合作用释放氧气。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 502,
        "type": "choice",
        "question": "下列哪种气体是呼吸作用的主要产物？（ ）",
        "options": ["氧气", "氮气", "二氧化碳", "氢气"],
        "answer": 2,
        "explanation": "呼吸作用吸收氧气，分解有机物，释放二氧化碳和水。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 503,
        "type": "choice",
        "question": "空气中含量最多的气体是（ ）。",
        "options": ["氧气", "氮气", "二氧化碳", "稀有气体"],
        "answer": 1,
        "explanation": "氮气约占空气体积的78%，氧气约占21%，二氧化碳约0.03%，稀有气体约0.94%。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 504,
        "type": "choice",
        "question": "空气中支持燃烧的气体主要是（ ）。",
        "options": ["氮气", "二氧化碳", "氧气", "稀有气体"],
        "answer": 2,
        "explanation": "氧气具有助燃性，支持燃烧；氮气、二氧化碳、稀有气体不支持燃烧。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 505,
        "type": "choice",
        "question": "下列哪种物质是造成酸雨的主要气体？（ ）",
        "options": ["二氧化碳", "二氧化硫", "一氧化碳", "氮气"],
        "answer": 1,
        "explanation": "二氧化硫和氮氧化物是形成酸雨的主要气体；二氧化碳导致温室效应。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 506,
        "type": "choice",
        "question": "下列哪种物质是造成温室效应的主要气体？（ ）",
        "options": ["二氧化硫", "二氧化碳", "一氧化碳", "氮气"],
        "answer": 1,
        "explanation": "二氧化碳是主要的温室气体，导致全球变暖。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 507,
        "type": "choice",
        "question": "下列哪种行为会加剧温室效应？（ ）",
        "options": ["植树造林", "使用清洁能源", "焚烧化石燃料", "回收垃圾"],
        "answer": 2,
        "explanation": "焚烧化石燃料会排放大量二氧化碳，加剧温室效应；植树造林、使用清洁能源、回收垃圾都有利于减缓。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 508,
        "type": "choice",
        "question": "下列哪种能源属于清洁能源？（ ）",
        "options": ["煤炭", "石油", "天然气", "太阳能"],
        "answer": 3,
        "explanation": "太阳能无污染、可再生，是清洁能源；煤炭、石油、天然气燃烧会产生污染物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 509,
        "type": "choice",
        "question": "下列哪种能源属于化石燃料？（ ）",
        "options": ["太阳能", "风能", "天然气", "潮汐能"],
        "answer": 2,
        "explanation": "天然气是化石燃料，由古代生物遗骸形成；太阳能、风能、潮汐能是可再生能源。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 510,
        "type": "choice",
        "question": "下列哪种做法有利于节约用水？（ ）",
        "options": ["洗菜水直接倒掉", "使用长流水洗碗", "用淘米水浇花", "开着水龙头刷牙"],
        "answer": 2,
        "explanation": "用淘米水浇花是一水多用，节约用水；其他做法浪费水。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 511,
        "type": "choice",
        "question": "下列哪种做法有利于减少白色污染？（ ）",
        "options": ["使用一次性塑料袋", "使用可降解塑料袋", "焚烧塑料垃圾", "随意丢弃塑料瓶"],
        "answer": 1,
        "explanation": "使用可降解塑料袋可以减少白色污染；一次性塑料袋、焚烧、随意丢弃都会污染环境。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 512,
        "type": "choice",
        "question": "下列哪种垃圾属于可回收物？（ ）",
        "options": ["废电池", "废塑料瓶", "剩菜剩饭", "废荧光灯管"],
        "answer": 1,
        "explanation": "废塑料瓶可以回收再利用；废电池、废荧光灯管属于有害垃圾，剩菜剩饭属于厨余垃圾。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 513,
        "type": "choice",
        "question": "下列哪种垃圾属于有害垃圾？（ ）",
        "options": ["废纸", "废玻璃", "废电池", "废塑料"],
        "answer": 2,
        "explanation": "废电池含有汞、镉等重金属，属于有害垃圾；废纸、废玻璃、废塑料属于可回收物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 514,
        "type": "choice",
        "question": "下列哪种垃圾属于厨余垃圾？（ ）",
        "options": ["易拉罐", "旧衣服", "香蕉皮", "碎玻璃杯"],
        "answer": 2,
        "explanation": "香蕉皮是食物残渣，属于厨余垃圾；易拉罐、旧衣服、碎玻璃属于可回收物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 515,
        "type": "choice",
        "question": "下列关于人体消化系统的说法，正确的是（ ）。",
        "options": ["消化作用全是化学变化", "消化作用只有物理变化", "消化作用包括物理变化和化学变化", "消化作用与变化无关"],
        "answer": 2,
        "explanation": "消化包括物理消化（牙齿咀嚼、胃肠蠕动）和化学消化（酶分解食物），两者兼有。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 516,
        "type": "choice",
        "question": "食物中的淀粉在口腔中被初步消化，这是因为唾液中含有（ ）。",
        "options": ["蛋白酶", "脂肪酶", "淀粉酶", "麦芽糖酶"],
        "answer": 2,
        "explanation": "唾液中含有淀粉酶，能将淀粉分解为麦芽糖。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 517,
        "type": "choice",
        "question": "食物消化的主要场所是（ ）。",
        "options": ["口腔", "胃", "小肠", "大肠"],
        "answer": 2,
        "explanation": "小肠是消化和吸收的主要场所，含有多种消化液，消化酶种类最全。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 518,
        "type": "choice",
        "question": "人体吸收营养物质的主要器官是（ ）。",
        "options": ["胃", "小肠", "大肠", "食道"],
        "answer": 1,
        "explanation": "小肠内有大量绒毛，增加了吸收面积，是吸收的主要场所。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 519,
        "type": "choice",
        "question": "下列哪种营养素不能为人体提供能量？（ ）",
        "options": ["糖类", "脂肪", "蛋白质", "维生素"],
        "answer": 3,
        "explanation": "维生素不提供能量，但参与调节新陈代谢；糖类、脂肪、蛋白质都是能源物质。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 520,
        "type": "choice",
        "question": "下列哪种食物富含维生素C？（ ）",
        "options": ["胡萝卜", "鸡蛋", "柑橘", "大米"],
        "answer": 2,
        "explanation": "柑橘类水果富含维生素C；胡萝卜富含胡萝卜素，鸡蛋富含蛋白质，大米富含淀粉。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 521,
        "type": "choice",
        "question": "下列哪种食物富含钙质？（ ）",
        "options": ["菠菜", "牛奶", "苹果", "土豆"],
        "answer": 1,
        "explanation": "牛奶是钙的良好来源；菠菜含草酸影响钙吸收，苹果和土豆含钙较少。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 522,
        "type": "choice",
        "question": "缺铁会导致（ ）。",
        "options": ["佝偻病", "贫血", "夜盲症", "坏血病"],
        "answer": 1,
        "explanation": "铁是血红蛋白的成分，缺铁易患缺铁性贫血；佝偻病缺钙或维生素D，夜盲症缺维生素A，坏血病缺维生素C。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 523,
        "type": "choice",
        "question": "缺钙会导致（ ）。",
        "options": ["贫血", "夜盲症", "佝偻病", "坏血病"],
        "answer": 2,
        "explanation": "儿童缺钙易患佝偻病，成人缺钙易患骨质疏松；贫血缺铁，夜盲症缺维生素A，坏血病缺维生素C。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 524,
        "type": "choice",
        "question": "下列哪种方法能有效杀死细菌？（ ）",
        "options": ["冷藏", "真空包装", "煮沸", "腌制"],
        "answer": 2,
        "explanation": "煮沸（高温）能杀死大部分细菌；冷藏、真空包装、腌制只能抑制细菌生长。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 525,
        "type": "choice",
        "question": "下列哪种方法能抑制微生物生长？（ ）",
        "options": ["高温消毒", "紫外线照射", "冷藏", "焚烧"],
        "answer": 2,
        "explanation": "冷藏降低温度，抑制微生物繁殖；高温、紫外线、焚烧是杀灭微生物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 526,
        "type": "choice",
        "question": "下列关于显微镜使用的说法，错误的是（ ）。",
        "options": ["对光时，应转动转换器使低倍物镜对准通光孔", "观察时，先转动粗准焦螺旋使镜筒下降，眼睛注视物镜", "观察时，左眼注视目镜，右眼睁开", "将低倍物镜换成高倍物镜后，视野变亮"],
        "answer": 3,
        "explanation": "换高倍物镜后，视野变暗（放大倍数越大，视野越暗）。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 527,
        "type": "choice",
        "question": "用显微镜观察临时装片时，若视野中出现污点，移动装片污点不动，转动目镜污点动，则污点在（ ）。",
        "options": ["装片上", "目镜上", "物镜上", "反光镜上"],
        "answer": 1,
        "explanation": "移动装片污点不动，说明不在装片；转动目镜污点动，说明在目镜上。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 528,
        "type": "choice",
        "question": "用显微镜观察洋葱表皮细胞时，若视野太暗，应调节（ ）。",
        "options": ["粗准焦螺旋", "细准焦螺旋", "反光镜和光圈", "物镜"],
        "answer": 2,
        "explanation": "调节反光镜（平面镜/凹面镜）和光圈（大/小）可以改变视野亮度。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 529,
        "type": "choice",
        "question": "用显微镜观察细胞时，为了使模糊的物像更清晰，应调节（ ）。",
        "options": ["粗准焦螺旋", "细准焦螺旋", "反光镜", "转换器"],
        "answer": 1,
        "explanation": "细准焦螺旋用于微调焦距，使物像清晰；粗准焦螺旋用于大幅升降镜筒。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 530,
        "type": "choice",
        "question": "下列关于植物细胞和动物细胞的说法，正确的是（ ）。",
        "options": ["两者都有细胞壁", "两者都有叶绿体", "两者都有细胞膜", "两者都有液泡"],
        "answer": 2,
        "explanation": "植物细胞和动物细胞都有细胞膜；细胞壁、叶绿体、大液泡是植物细胞特有的。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 531,
        "type": "choice",
        "question": "植物细胞中，起保护和支持作用的结构是（ ）。",
        "options": ["细胞膜", "细胞壁", "细胞核", "细胞质"],
        "answer": 1,
        "explanation": "细胞壁由纤维素组成，具有保护和支持细胞的作用。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 532,
        "type": "choice",
        "question": "植物细胞中，控制物质进出的结构是（ ）。",
        "options": ["细胞壁", "细胞膜", "细胞核", "液泡"],
        "answer": 1,
        "explanation": "细胞膜具有选择透过性，控制物质进出细胞。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 533,
        "type": "choice",
        "question": "植物细胞中，遗传信息库是（ ）。",
        "options": ["细胞膜", "细胞质", "细胞核", "液泡"],
        "answer": 2,
        "explanation": "细胞核内含有遗传物质（DNA），控制生物的遗传和代谢。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 534,
        "type": "choice",
        "question": "植物细胞进行光合作用的场所是（ ）。",
        "options": ["线粒体", "叶绿体", "细胞核", "液泡"],
        "answer": 1,
        "explanation": "叶绿体是光合作用的场所，含有叶绿素。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 535,
        "type": "choice",
        "question": "细胞中，为生命活动提供能量的场所是（ ）。",
        "options": ["叶绿体", "线粒体", "细胞核", "细胞膜"],
        "answer": 1,
        "explanation": "线粒体是呼吸作用的场所，将化学能转化为细胞可利用的能量。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 536,
        "type": "choice",
        "question": "下列哪种生物属于单细胞生物？（ ）",
        "options": ["草履虫", "蚂蚁", "蘑菇", "水绵"],
        "answer": 0,
        "explanation": "草履虫是单细胞动物；蚂蚁是多细胞动物，蘑菇是多细胞真菌，水绵是多细胞藻类。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 537,
        "type": "choice",
        "question": "下列哪种生物没有细胞结构？（ ）",
        "options": ["细菌", "真菌", "病毒", "植物"],
        "answer": 2,
        "explanation": "病毒由蛋白质外壳和核酸核心组成，没有细胞结构；细菌、真菌、植物都有细胞结构。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 538,
        "type": "choice",
        "question": "细菌的繁殖方式是（ ）。",
        "options": ["分裂生殖", "孢子生殖", "出芽生殖", "种子繁殖"],
        "answer": 0,
        "explanation": "细菌主要通过二分裂方式繁殖；真菌常通过孢子生殖，酵母菌出芽生殖。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 539,
        "type": "choice",
        "question": "下列哪种微生物可以用来制作酸奶？（ ）",
        "options": ["酵母菌", "乳酸菌", "醋酸菌", "霉菌"],
        "answer": 1,
        "explanation": "乳酸菌发酵牛奶中的乳糖产生乳酸，使牛奶凝固成酸奶。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 540,
        "type": "choice",
        "question": "下列哪种微生物可以用来制作面包？（ ）",
        "options": ["乳酸菌", "醋酸菌", "酵母菌", "霉菌"],
        "answer": 2,
        "explanation": "酵母菌发酵产生二氧化碳，使面团膨胀，面包松软。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 541,
        "type": "choice",
        "question": "下列哪种微生物可以用来酿酒？（ ）",
        "options": ["乳酸菌", "酵母菌", "醋酸菌", "枯草杆菌"],
        "answer": 1,
        "explanation": "酵母菌在无氧条件下将糖类分解为酒精和二氧化碳，用于酿酒。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 542,
        "type": "choice",
        "question": "下列哪种微生物可以用来制醋？（ ）",
        "options": ["乳酸菌", "酵母菌", "醋酸菌", "霉菌"],
        "answer": 2,
        "explanation": "醋酸菌将酒精氧化为醋酸，用于酿醋。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 543,
        "type": "choice",
        "question": "下列哪种生物属于真菌？（ ）",
        "options": ["大肠杆菌", "蘑菇", "衣藻", "草履虫"],
        "answer": 1,
        "explanation": "蘑菇是大型真菌；大肠杆菌是细菌，衣藻是藻类，草履虫是原生动物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 544,
        "type": "choice",
        "question": "下列哪种生物属于细菌？（ ）",
        "options": ["青霉", "酵母菌", "乳酸菌", "木耳"],
        "answer": 2,
        "explanation": "乳酸菌是细菌；青霉、酵母菌、木耳都是真菌。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 545,
        "type": "choice",
        "question": "下列哪种物质是细菌和真菌在自然界中的作用？（ ）",
        "options": ["作为生产者", "作为消费者", "作为分解者", "作为非生物成分"],
        "answer": 2,
        "explanation": "大多数细菌和真菌是分解者，将动植物遗体分解为无机物，促进物质循环。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 546,
        "type": "choice",
        "question": "下列关于食物链的说法，正确的是（ ）。",
        "options": ["食物链的起点是消费者", "食物链的终点是生产者", "食物链中能量单向流动", "食物链可以无限延长"],
        "answer": 2,
        "explanation": "食物链起点是生产者（如植物），能量沿着食物链单向流动、逐级递减；食物链一般不超过5个环节。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 547,
        "type": "choice",
        "question": "下列食物链中，书写正确的是（ ）。",
        "options": ["草→兔→狼", "草→狼→兔", "阳光→草→兔", "兔→草→狼"],
        "answer": 0,
        "explanation": "食物链从生产者开始，箭头指向捕食者；阳光不是生物，不能作为起点。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 548,
        "type": "choice",
        "question": "生态系统中，生产者主要是指（ ）。",
        "options": ["绿色植物", "动物", "细菌真菌", "人类"],
        "answer": 0,
        "explanation": "生产者能利用太阳能制造有机物，主要是绿色植物；动物是消费者，细菌真菌是分解者。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 549,
        "type": "choice",
        "question": "生态系统中，消费者主要是指（ ）。",
        "options": ["绿色植物", "动物", "细菌真菌", "非生物成分"],
        "answer": 1,
        "explanation": "消费者直接或间接以植物为食，主要是动物。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 550,
        "type": "choice",
        "question": "生态系统中，分解者主要是指（ ）。",
        "options": ["绿色植物", "动物", "细菌真菌", "人类"],
        "answer": 2,
        "explanation": "分解者将动植物遗体分解为无机物，主要是细菌和真菌。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 551,
        "type": "choice",
        "question": "下列哪种生物在生态系统中属于分解者？（ ）",
        "options": ["蚯蚓", "蘑菇", "蝗虫", "老鹰"],
        "answer": 1,
        "explanation": "蘑菇是真菌，能分解有机物，是分解者；蚯蚓是分解者（也有的归为消费者），但教材常将蘑菇作为分解者代表；蝗虫是消费者，老鹰是消费者。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 552,
        "type": "choice",
        "question": "下列关于生态平衡的说法，正确的是（ ）。",
        "options": ["生态系统中各种生物数量保持不变", "生态系统中各种生物数量相对稳定", "人类活动不会破坏生态平衡", "生态平衡是固定不变的"],
        "answer": 1,
        "explanation": "生态平衡是相对稳定的动态平衡，生物数量在一定范围内波动，不是绝对不变。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 553,
        "type": "choice",
        "question": "下列哪种行为会破坏生态平衡？（ ）",
        "options": ["植树造林", "建立自然保护区", "大量使用农药", "退耕还湖"],
        "answer": 2,
        "explanation": "大量使用农药会杀死害虫的同时也杀死天敌，污染环境，破坏生态平衡；其他行为有利于保护生态。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 554,
        "type": "choice",
        "question": "下列关于遗传和变异的叙述，正确的是（ ）。",
        "options": ["生物的所有性状都能遗传", "变异都是有利的", "遗传是普遍存在的，变异也是普遍存在的", "变异不能遗传给后代"],
        "answer": 2,
        "explanation": "遗传和变异都是生物界普遍存在的现象；性状不一定都能遗传（环境影响），变异有有利有害，可遗传变异可传给后代。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 555,
        "type": "choice",
        "question": "下列关于基因的叙述，错误的是（ ）。",
        "options": ["基因是DNA上的片段", "基因控制生物的性状", "基因在细胞核内", "一个DNA分子上只有一个基因"],
        "answer": 3,
        "explanation": "一个DNA分子上有许多个基因。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 556,
        "type": "choice",
        "question": "下列关于DNA的叙述，正确的是（ ）。",
        "options": ["DNA是双螺旋结构", "DNA只存在于细胞核中", "DNA是蛋白质", "DNA不能传递遗传信息"],
        "answer": 0,
        "explanation": "DNA是双螺旋结构，主要存在于细胞核中（线粒体叶绿体也有），是遗传物质，能传递遗传信息。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 557,
        "type": "choice",
        "question": "人类体细胞中的染色体数目是（ ）。",
        "options": ["23条", "23对", "46对", "24对"],
        "answer": 1,
        "explanation": "人类体细胞有23对（46条）染色体，其中22对常染色体，1对性染色体。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 558,
        "type": "choice",
        "question": "男性体细胞中的性染色体组成是（ ）。",
        "options": ["XX", "XY", "X", "Y"],
        "answer": 1,
        "explanation": "男性性染色体为XY，女性为XX。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 559,
        "type": "choice",
        "question": "女性体细胞中的性染色体组成是（ ）。",
        "options": ["XX", "XY", "X", "Y"],
        "answer": 0,
        "explanation": "女性性染色体为XX。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 560,
        "type": "choice",
        "question": "下列关于性别决定的说法，正确的是（ ）。",
        "options": ["生男生女由母亲决定", "生男生女由父亲决定", "生男生女由环境决定", "生男生女由母亲和父亲共同决定"],
        "answer": 1,
        "explanation": "父亲提供X或Y精子，母亲只提供X卵细胞，因此生男生女主要由父亲决定。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 561,
        "type": "choice",
        "question": "下列哪种变异可以遗传给后代？（ ）",
        "options": ["晒黑的皮肤", "锻炼出的肌肉", "镰刀型细胞贫血症", "割双眼皮"],
        "answer": 2,
        "explanation": "镰刀型细胞贫血症是基因突变引起的，属于可遗传变异；晒黑、锻炼、割双眼皮是环境或人为引起，不可遗传。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 562,
        "type": "choice",
        "question": "下列关于生物进化的叙述，错误的是（ ）。",
        "options": ["生物进化是自然选择的结果", "生物进化与变异无关", "生物进化是由简单到复杂", "生物进化是由低等到高等"],
        "answer": 1,
        "explanation": "生物进化以变异为基础，自然选择为动力，没有变异就没有进化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 563,
        "type": "choice",
        "question": "达尔文在加拉帕戈斯群岛发现不同岛屿上的地雀喙形不同，主要原因是（ ）。",
        "options": ["人工选择", "自然选择", "定向变异", "用进废退"],
        "answer": 1,
        "explanation": "不同岛屿的食物类型不同，自然选择使得适合取食该食物的喙形得以保留，形成差异。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 564,
        "type": "choice",
        "question": "下列关于化石的叙述，正确的是（ ）。",
        "options": ["化石是研究生物进化的唯一证据", "越古老的地层中，化石生物越高等", "越古老的地层中，化石生物结构越简单", "化石不会出现在沉积岩中"],
        "answer": 2,
        "explanation": "越古老的地层中，化石生物结构越简单、越低等；化石是重要证据但不是唯一，还有解剖学、分子生物学等证据。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 565,
        "type": "choice",
        "question": "下列关于人类起源的说法，正确的是（ ）。",
        "options": ["人类是由上帝创造的", "人类是由猴子直接进化来的", "人类是由森林古猿进化来的", "人类是由外星人带来的"],
        "answer": 2,
        "explanation": "人类和现代类人猿有共同祖先——森林古猿，经过长期进化形成。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 566,
        "type": "choice",
        "question": "下列哪项不是人类祖先学会使用工具和火的意义？（ ）",
        "options": ["增强了防御能力", "促进了大脑发育", "使人类可以直接吃生肉", "改善了生活环境"],
        "answer": 2,
        "explanation": "学会使用火可以吃熟食，改善营养，促进大脑发育，而不是继续吃生肉。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 567,
        "type": "choice",
        "question": "下列关于地球演化的说法，正确的是（ ）。",
        "options": ["地球初期就有生命", "地球初期温度很低", "原始大气中没有氧气", "原始海洋中没有生命"],
        "answer": 2,
        "explanation": "原始大气主要有氢气、甲烷、氨、水蒸气等，没有氧气；地球初期温度高，生命出现在原始海洋中。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 568,
        "type": "choice",
        "question": "原始生命诞生的场所是（ ）。",
        "options": ["原始大气", "原始海洋", "陆地", "火山口"],
        "answer": 1,
        "explanation": "原始海洋是生命诞生的摇篮，有机分子在海洋中聚合成原始生命。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 569,
        "type": "choice",
        "question": "下列关于能量转化的说法，正确的是（ ）。",
        "options": ["能量可以凭空产生", "能量可以消灭", "能量在转化过程中总量保持不变", "能量转化效率可达100%"],
        "answer": 2,
        "explanation": "能量守恒定律指出，能量不会凭空产生或消灭，只能转化或转移，总量不变；但转化效率不能达到100%。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 570,
        "type": "choice",
        "question": "下列哪种能量转化形式属于化学能转化为电能？（ ）",
        "options": ["干电池放电", "水力发电", "风力发电", "太阳能发电"],
        "answer": 0,
        "explanation": "干电池通过化学反应产生电能；水力、风力、太阳能发电都是机械能或光能转化为电能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 571,
        "type": "choice",
        "question": "下列哪种能量转化形式属于电能转化为机械能？（ ）",
        "options": ["电饭煲煮饭", "电风扇转动", "电灯发光", "手机充电"],
        "answer": 1,
        "explanation": "电风扇的电动机将电能转化为机械能（扇叶转动）；电饭煲转化为热能，电灯转化为光能和热能，手机充电转化为化学能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 572,
        "type": "choice",
        "question": "下列哪种能量转化形式属于光能转化为化学能？（ ）",
        "options": ["光合作用", "太阳能热水器", "太阳能电池", "太阳能路灯"],
        "answer": 0,
        "explanation": "光合作用将光能转化为储存在有机物中的化学能；太阳能热水器转化为热能，太阳能电池转化为电能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 573,
        "type": "choice",
        "question": "下列哪种能量转化形式属于化学能转化为热能？（ ）",
        "options": ["光合作用", "食物被消化", "木炭燃烧", "太阳能热水器"],
        "answer": 2,
        "explanation": "木炭燃烧是化学能转化为热能和光能；光合作用是光能转化学能，食物消化是化学能转其他，太阳能热水器是光能转热能。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 574,
        "type": "choice",
        "question": "下列关于杠杆的说法，正确的是（ ）。",
        "options": ["杠杆必须是直杆", "杠杆的支点必须在中间", "杠杆可以是弯的", "省力杠杆一定省距离"],
        "answer": 2,
        "explanation": "杠杆可以是直的也可以是弯的，支点可以在任意位置；省力杠杆费距离。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 575,
        "type": "choice",
        "question": "使用定滑轮提升重物，下列说法正确的是（ ）。",
        "options": ["可以省力", "可以省距离", "可以改变力的方向", "可以省功"],
        "answer": 2,
        "explanation": "定滑轮不省力也不省距离，但可以改变力的方向；任何机械都不省功。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 576,
        "type": "choice",
        "question": "使用动滑轮提升重物，下列说法正确的是（ ）。",
        "options": ["可以省力", "可以改变力的方向", "可以省距离", "可以省功"],
        "answer": 0,
        "explanation": "动滑轮可以省一半力（不计摩擦和绳重），但费距离，不能改变力的方向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 577,
        "type": "choice",
        "question": "下列哪种机械不能改变力的方向？（ ）",
        "options": ["定滑轮", "动滑轮", "滑轮组", "杠杆"],
        "answer": 1,
        "explanation": "动滑轮不能改变力的方向，只能省力；定滑轮和滑轮组可以改变方向，杠杆可以改变方向。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 578,
        "type": "choice",
        "question": "用滑轮组提升重物，承担重物的绳子段数为n，则拉力F与物重G的关系是（不计摩擦和绳重、动滑轮重）（ ）。",
        "options": ["F = nG", "F = G/n", "F = G", "F = G/2"],
        "answer": 1,
        "explanation": "滑轮组省力规律：F = G/n，n为承担重物的绳子段数。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 579,
        "type": "choice",
        "question": "下列哪种工具是利用杠杆原理工作的？（ ）",
        "options": ["螺丝刀", "汽车方向盘", "起钉锤", "水龙头"],
        "answer": 2,
        "explanation": "起钉锤（羊角锤）是杠杆；螺丝刀、方向盘、水龙头是轮轴。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 580,
        "type": "choice",
        "question": "下列哪种工具是利用轮轴原理工作的？（ ）",
        "options": ["扳手", "镊子", "钓鱼竿", "剪刀"],
        "answer": 0,
        "explanation": "扳手拧螺母时，手柄是轮，螺帽是轴，属轮轴；镊子、钓鱼竿是杠杆，剪刀是杠杆+斜面。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 581,
        "type": "choice",
        "question": "使用斜面时，下列说法正确的是（ ）。",
        "options": ["斜面越长越费力", "斜面越高越省力", "斜面越长越省力", "斜面高度与省力无关"],
        "answer": 2,
        "explanation": "在高度一定时，斜面越长，坡度越小，越省力；斜面越高，坡度越大，越费力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 582,
        "type": "choice",
        "question": "螺丝钉的螺纹越密，拧入时越省力，这是因为（ ）。",
        "options": ["螺纹越密，螺距越小，相当于斜面越长", "螺纹越密，螺距越大，相当于斜面越长", "螺纹越密，摩擦力越小", "螺纹越密，材料越硬"],
        "answer": 0,
        "explanation": "螺纹的螺距小，相当于在相同高度下斜面更长，坡度更小，因此省力。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 583,
        "type": "choice",
        "question": "下列哪种现象不属于物理变化？（ ）",
        "options": ["铁水铸成铁轨", "石蜡熔化", "火药爆炸", "玻璃破碎"],
        "answer": 2,
        "explanation": "火药爆炸是化学变化；铁水铸轨、石蜡熔化、玻璃破碎都是物理变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
{
        "id": 584,
        "type": "choice",
        "question": "下列哪种现象不属于化学变化？（ ）",
        "options": ["铁锅生锈", "木柴燃烧", "食物腐败", "冰棒融化"],
        "answer": 3,
        "explanation": "冰棒融化是物理变化；铁锅生锈、木柴燃烧、食物腐败都是化学变化。",
        "difficulty": 2,
        "grade": 6,
        "category": "其他"
    },
    
  {
    "id": 585,
    "type": "choice",
    "text": "工程师在建造塔桥时，为了保证通航顺畅，通常会采取什么措施？",
    "options": ["降低技术难度", "降低施工成本", "提高桥下净空", "减少净水腐蚀"],
    "answer": 2,
    "explanation": "为了保证大型船只通行，桥梁需要足够的桥下净空，这是工程师常用的设计方法。"
  },
  {
    "id": 586,
    "type": "choice",
    "text": "下列哪项不是工程师在建造塔桥时面临的挑战？",
    "options": ["保证通航顺畅", "降低施工成本", "减少净水腐蚀", "增加桥梁重量"],
    "answer": 3,
    "explanation": "增加桥梁重量通常不是工程师追求的目标，反而会增加成本和难度。"
  },
  {
    "id": 587,
    "type": "choice",
    "text": "下列结构中，最不容易变形的是哪一种？",
    "options": ["正方形", "长方形", "三角形", "圆形"],
    "answer": 2,
    "explanation": "三角形具有稳定性，在受力时不易变形，广泛应用于建筑和桥梁中。"
  },
  {
    "id": 588,
    "type": "choice",
    "text": "为了让塔台更稳固，下列哪种设计是不可取的？",
    "options": ["塔台底座大一点", "在塔台底部加一些重物，做到上轻下重", "做成镂空形状", "塔台顶部大而重，底部小而轻"],
    "answer": 3,
    "explanation": "上重下轻会使塔台重心不稳，容易倾倒，不利于稳固。"
  },
  {
    "id": 589,
    "type": "choice",
    "text": "埃菲尔铁塔在施工中完全依照设计进行，没有任何改动，主要原因是？",
    "options": ["工程庞大，不易改动", "设计合理，无须改动", "技术有限，无法改动", "已有设计，不能改动"],
    "answer": 1,
    "explanation": "埃菲尔铁塔的设计非常精确和合理，施工前进行了详细计算，因此无需改动。"
  },
  {
    "id": 590,
    "type": "choice",
    "text": "下列哪项不属于框架结构的优点？",
    "options": ["节省材料", "抗震效果好", "施工时间长", "使用寿命长"],
    "answer": 2,
    "explanation": "框架结构可以缩短施工工期，而不是延长施工时间。"
  },
  {
    "id": 591,
    "type": "choice",
    "text": "框架结构建筑的主要优点包括空间分隔灵活、自重轻、有利于抗震，以及？",
    "options": ["增加建筑重量", "降低材料强度", "便于标准化施工", "提高施工难度"],
    "answer": 2,
    "explanation": "框架结构的梁柱易于标准化、定型化，便于装配整体式施工。"
  },
  {
    "id": 592,
    "type": "choice",
    "text": "下列哪种形状的模型在地震中抗震能力最强？",
    "options": ["上小下大", "上大下小", "上下一样大", "中间大两头小"],
    "answer": 0,
    "explanation": "上小下大的结构重心低，稳定性好，抗震能力强。"
  },
  {
    "id": 593,
    "type": "choice",
    "text": "2020年12月17日，成功从月面采集约1.7千克月壤返回地球的探测器是？",
    "options": ["嫦娥一号", "嫦娥二号", "嫦娥四号", "嫦娥五号"],
    "answer": 3,
    "explanation": "嫦娥五号完成了中国首次月球采样返回任务。"
  },
  {
    "id": 594,
    "type": "choice",
    "text": "嫦娥工程分为三个阶段，目前中国处于哪个阶段？",
    "options": ["载人登月", "建立月球基地", "无人月球探测", "月球轨道空间站"],
    "answer": 2,
    "explanation": "我国仍处于'无人月球探测'阶段，包括'绕、落、回'三期。"
  },
  {
    "id": 595,
    "type": "choice",
    "text": "在调查校园生物时，合理的调查顺序是？\n① 找校园平面图，将校园分区\n② 设计调查表，记录我们的发现\n③ 选择感兴趣的生物重点调查\n④ 分小组调查每个区域生物的种类和数量，观察生物之间的联系",
    "options": ["①②③④", "①③②④", "①④③②", "①④②③"],
    "answer": 3,
    "explanation": "先分区，再设计表，然后分小组调查，最后重点调查。"
  },
  {
    "id": 596,
    "type": "choice",
    "text": "在调查校园生物时，下列做法不恰当的是？",
    "options": ["借助放大镜观察小生物", "用相机拍照记录", "用捕虫网捕捉小动物带回家慢慢观察", "借助识别软件了解不知名生物"],
    "answer": 2,
    "explanation": "捕捉动物带回家会破坏生态，不符合科学调查原则。"
  },
  {
    "id": 597,
    "type": "choice",
    "text": "蚂蚁保护蚜虫的主要目的是？",
    "options": ["吃到蚜虫分泌的蜜露", "把蚜虫当作食物", "躲避天敌的伤害", "让蚜虫清理垃圾"],
    "answer": 0,
    "explanation": "蚜虫分泌的蜜露是蚂蚁的食物，因此蚂蚁会保护蚜虫。"
  },
  {
    "id": 598,
    "type": "choice",
    "text": "下列哪种二歧分类方法不合理？",
    "options": ["根据植物茎的不同分为木质茎和草质茎", "根据植物叶脉的不同分为网状脉和平行脉", "根据叶片形状的不同分为卵形叶和非卵形叶", "根据叶片边缘形状分为有锯齿和无锯齿"],
    "answer": 1,
    "explanation": "叶脉的二歧分类通常为'平行脉'和'网状脉'，而非'平行脉'和'非平行脉'。"
  },
  {
    "id": 599,
    "type": "choice",
    "text": "在校园中，生物种类最少的场所通常是？",
    "options": ["花坛", "草坪", "教学楼", "操场"],
    "answer": 2,
    "explanation": "教学楼内环境单一，生物种类相对较少。"
  },
  {
    "id": 600,
    "type": "choice",
    "text": "下列描述属于遗传现象的是？",
    "options": ["木槿花在红色叶片中产生", "在三叶草丛中找到一片四叶草", "种瓜得瓜，种豆得豆", "一株丝瓜藤上的丝瓜有一根与众不同"],
    "answer": 2,
    "explanation": "遗传是指生物亲代与子代之间的相似性，'种瓜得瓜'体现了遗传。"
  },
  {
    "id": 601,
    "type": "choice",
    "text": "下列有关化石的说法，不正确的是？",
    "options": ["化石可帮助分析古代生物的生活环境", "化石可帮助了解生物从古到今的变化", "化石可帮助了解生物从古到今的变化", "发现化石后可以据为己有"],
    "answer": 3,
    "explanation": "化石属于国家资源，个人不得私自占有。"
  },
  {
    "id": 602,
    "type": "choice",
    "text": "恐龙属于哪一类动物？",
    "options": ["两栖类", "爬行类", "哺乳类", "鸟类"],
    "answer": 1,
    "explanation": "恐龙是古代爬行动物，已灭绝。"
  },
  {
    "id": 603,
    "type": "choice",
    "text": "科学家通过研究什么来了解恐龙的生活？",
    "options": ["恐龙化石", "恐龙蛋", "恐龙脚印", "以上都是"],
    "answer": 3,
    "explanation": "化石、蛋、脚印等都是研究恐龙的重要证据。"
  },
  {
    "id": 604,
    "type": "choice",
    "text": "始祖鸟的化石特征表明它与哪类动物有亲缘关系？",
    "options": ["爬行类", "哺乳类", "现代鸟类", "两栖类"],
    "answer": 2,
    "explanation": "始祖鸟具有鸟类和爬行类的特征，是鸟类祖先。"
  },
  {
    "id": 605,
    "type": "choice",
    "text": "处于太阳系中心位置、占整个太阳系绝大部分质量的是？",
    "options": ["月球", "太阳", "地球", "木星"],
    "answer": 1,
    "explanation": "太阳质量占太阳系总质量的99.86%。"
  },
  {
    "id": 606,
    "type": "choice",
    "text": "太阳是一颗充满活力的？",
    "options": ["行星", "卫星", "恒星", "彗星"],
    "answer": 2,
    "explanation": "太阳自身发光发热，属于恒星。"
  },
  {
    "id": 607,
    "type": "choice",
    "text": "下列天体不属于太阳系大家庭的是？",
    "options": ["牛郎星", "地球", "天王星", "太阳"],
    "answer": 0,
    "explanation": "牛郎星是恒星，位于太阳系外。"
  },
  {
    "id": 608,
    "type": "choice",
    "text": "根据太阳系资料，下列说法不正确的是？",
    "options": ["太阳系以太阳为中心", "太阳占太阳系质量的99.86%", "太阳系最大的两颗行星是木星和土星", "木星和土星占太阳系质量的90%以上"],
    "answer": 3,
    "explanation": "木星和土星占剩余质量的90%以上，而非整个太阳系。"
  },
  {
    "id": 609,
    "type": "choice",
    "text": "太阳系八颗行星中，体积最大的是？",
    "options": ["地球", "火星", "木星", "土星"],
    "answer": 2,
    "explanation": "木星是太阳系最大的行星。"
  },
  {
    "id": 610,
    "type": "choice",
    "text": "在太阳系中，相邻两颗行星之间距离最大的是？",
    "options": ["地球和火星", "火星和木星", "木星和土星", "土星和天王星"],
    "answer": 1,
    "explanation": "火星和木星之间有小行星带，距离较远。"
  },
  {
    "id": 611,
    "type": "choice",
    "text": "为了便于辨认，人们将星空划分成多少个区域？",
    "options": ["48个", "88个", "108个", "128个"],
    "answer": 1,
    "explanation": "国际天文学联合会将星空划分为88个星座。"
  },
  {
    "id": 612,
    "type": "choice",
    "text": "北斗七星位于哪个星座？",
    "options": ["小熊座", "大熊座", "仙后座", "猎户座"],
    "answer": 1,
    "explanation": "北斗七星是大熊座的一部分。"
  },
  {
    "id": 613,
    "type": "choice",
    "text": "下列关于星座的说法，正确的是？",
    "options": ["星座是人为划分的，星星之间没有物理联系", "星座中看起来大小差不多的星距离我们相等", "星座是古希腊神话的占卜工具", "星座反映了人间事物"],
    "answer": 0,
    "explanation": "星座是人为了辨认星空而划分的，同一星座的星星距离地球不同。"
  },
  {
    "id": 614,
    "type": "choice",
    "text": "假设距离我们10万光年的星球上生活着外星人，他们观察到的星空与我们的星空相比？",
    "options": ["完全相同", "部分相同", "大部分相同", "完全不同"],
    "answer": 3,
    "explanation": "10万光年距离很远，星座形状和位置会发生巨大变化。"
  },
  {
    "id": 615,
    "type": "choice",
    "text": "银河系由多少颗像太阳一样的恒星组成？",
    "options": ["1000~2000颗", "1万~2万颗", "1000亿~2000亿颗", "2000亿~4000亿颗"],
    "answer": 2,
    "explanation": "银河系恒星数量约为1000亿到2000亿颗。"
  },
  {
    "id": 616,
    "type": "choice",
    "text": "\"光年\"是什么单位？",
    "options": ["时间单位", "距离单位", "质量单位", "能量单位"],
    "answer": 1,
    "explanation": "光年指光在一年中走过的距离，是天文学中的距离单位。"
  },
  {
    "id": 617,
    "type": "choice",
    "text": "下列关于宇宙的叙述，正确的是？",
    "options": ["太阳是宇宙的中心", "现在已经确定了宇宙的边界", "宇宙处于不断的发展和运动之中", "宇宙就是星系"],
    "answer": 2,
    "explanation": "宇宙在不断膨胀和演化，没有中心，边界未知。"
  },
  {
    "id": 618,
    "type": "choice",
    "text": "迄今为止，除地球外，人类唯一登陆过的天体是？",
    "options": ["火星", "金星", "月球", "木星"],
    "answer": 2,
    "explanation": "人类已经多次登陆月球，尚未登陆其他天体。"
  },
  {
    "id": 619,
    "type": "choice",
    "text": "我国首位飞上太空的航天员是？",
    "options": ["翟志刚", "刘洋", "杨利伟", "景海鹏"],
    "answer": 2,
    "explanation": "杨利伟于2003年乘坐神舟五号进入太空。"
  },
  {
    "id": 620,
    "type": "choice",
    "text": "埃菲尔铁塔的高度约为？",
    "options": ["200米", "320米", "500米", "800米"],
    "answer": 1,
    "explanation": "埃菲尔铁塔高320米，是当时世界最高建筑。"
  },
  {
    "id": 621,
    "type": "choice",
    "text": "埃菲尔铁塔主要使用的材料是？",
    "options": ["木材", "混凝土", "熟铁", "铝合金"],
    "answer": 2,
    "explanation": "铁塔共用去熟铁7000吨。"
  },
  {
    "id": 622,
    "type": "choice",
    "text": "埃菲尔铁塔每隔多少年油漆一次？",
    "options": ["3年", "5年", "7年", "10年"],
    "answer": 2,
    "explanation": "资料中提到每隔7年油漆一次。"
  },
  {
    "id": 623,
    "type": "choice",
    "text": "框架结构建筑的主要承重构件是？",
    "options": ["墙和柱", "梁和柱", "板和墙", "梁和板"],
    "answer": 1,
    "explanation": "框架结构由梁和柱连接构成承重体系。"
  },
  {
    "id": 624,
    "type": "choice",
    "text": "框架结构有利于抗震的主要原因是？",
    "options": ["重量大", "整体性好、刚度适中", "材料昂贵", "施工简单"],
    "answer": 1,
    "explanation": "现浇混凝土框架整体性好，能有效抵抗地震力。"
  },
  {
    "id": 625,
    "type": "choice",
    "text": "我国住宅建筑的设计工作年限不应低于？",
    "options": ["30年", "50年", "70年", "100年"],
    "answer": 1,
    "explanation": "根据住宅项目规范，设计工作年限不低于50年。"
  },
  {
    "id": 626,
    "type": "choice",
    "text": "下列哪种结构最不容易变形？",
    "options": ["四边形", "五边形", "三角形", "六边形"],
    "answer": 2,
    "explanation": "三角形具有稳定性，受力后不易变形。"
  },
  {
    "id": 627,
    "type": "choice",
    "text": "下列哪种设计能增强塔台的抗风能力？",
    "options": ["增加高度", "做成镂空", "上重下轻", "减少底座面积"],
    "answer": 1,
    "explanation": "镂空结构可以减少风阻，提高抗风能力。"
  },
  {
    "id": 628,
    "type": "choice",
    "text": "嫦娥五号任务实现了中国航天哪四个\"首次\"？",
    "options": ["绕、落、回、探", "月面采样、月面起飞、月球轨道对接、第二宇宙速度返回", "载人登月、建立基地、采样返回、巡视探测", "月球软着陆、巡视、取样、返回"],
    "answer": 1,
    "explanation": "嫦娥五号实现了月面采样、月面起飞、月球轨道无人交会对接和接近第二宇宙速度返回。"
  },
  {
    "id": 629,
    "type": "choice",
    "text": "嫦娥五号的组成部分不包括？",
    "options": ["上升器", "着陆器", "返回器", "推进器"],
    "answer": 3,
    "explanation": "嫦娥五号由上升器、着陆器、返回器和轨道器组成。"
  },
  {
    "id": 630,
    "type": "choice",
    "text": "在调查校园生物时，为什么要分区域调查？",
    "options": ["便于管理", "不同区域生态环境不同，生物种类不同", "减少工作量", "避免重复"],
    "answer": 1,
    "explanation": "校园内不同区域（如花坛、草坪）环境不同，生物分布有差异。"
  },
  {
    "id": 631,
    "type": "choice",
    "text": "下列哪项工具不适合用于校园生物调查？",
    "options": ["放大镜", "相机", "捕虫网（不带走）", "镊子（直接捕捉并伤害生物）"],
    "answer": 3,
    "explanation": "调查时应尽量减少对生物的伤害，不应使用镊子粗暴捕捉。"
  },
  {
    "id": 632,
    "type": "choice",
    "text": "蚜虫分泌的蜜露主要成分是？",
    "options": ["蛋白质", "糖分", "脂肪", "维生素"],
    "answer": 1,
    "explanation": "蜜露含有大量糖分，是蚂蚁喜爱的食物。"
  },
  {
    "id": 633,
    "type": "choice",
    "text": "蚜虫和蚂蚁之间的关系属于？",
    "options": ["寄生", "竞争", "共生", "捕食"],
    "answer": 2,
    "explanation": "双方互利，蚜虫提供蜜露，蚂蚁提供保护，属于共生关系。"
  },
  {
    "id": 634,
    "type": "choice",
    "text": "下列哪种植物属于草本植物？",
    "options": ["松树", "玉米", "苹果树", "杨树"],
    "answer": 1,
    "explanation": "玉米茎秆柔软，属于草本植物；其他为木本植物。"
  },
  {
    "id": 635,
    "type": "choice",
    "text": "下列哪种动物属于昆虫？",
    "options": ["蜘蛛", "蜈蚣", "蚂蚁", "蜗牛"],
    "answer": 2,
    "explanation": "蚂蚁有六条腿、三对足，属于昆虫；蜘蛛是蛛形纲，蜈蚣是多足纲，蜗牛是软体动物。"
  },
  {
    "id": 636,
    "type": "choice",
    "text": "下列哪项不是遗传现象？",
    "options": ["龙生龙，凤生凤", "桂实生桂，桐实生桐", "一母生九子，连母十个样", "种瓜得瓜，种豆得豆"],
    "answer": 2,
    "explanation": "C描述的是变异现象，而非遗传。"
  },
  {
    "id": 637,
    "type": "choice",
    "text": "化石可以帮助我们了解古代生物的哪些信息？",
    "options": ["形态结构", "生活环境", "演化历史", "以上都是"],
    "answer": 3,
    "explanation": "化石提供了古生物的形态、生态和演化等多方面信息。"
  },
  {
    "id": 638,
    "type": "choice",
    "text": "下列哪项不是化石形成需要的基本条件？",
    "options": ["生物具有坚硬部分", "迅速被沉积物掩埋", "长时间高温高压", "处于炎热干燥环境"],
    "answer": 3,
    "explanation": "化石形成需要掩埋和石化作用，不一定需要炎热干燥。"
  },
  {
    "id": 639,
    "type": "choice",
    "text": "下列哪种古生物已经灭绝？",
    "options": ["三叶虫", "银杏", "鲎", "腔棘鱼"],
    "answer": 0,
    "explanation": "三叶虫是古生代海洋动物，已灭绝；其他为活化石。"
  },
  {
    "id": 640,
    "type": "choice",
    "text": "太阳系中离太阳最近的行星是？",
    "options": ["水星", "金星", "地球", "火星"],
    "answer": 0,
    "explanation": "水星是距离太阳最近的行星。"
  },
  {
    "id": 641,
    "type": "choice",
    "text": "太阳系中自转方向与其他行星不同的行星是？",
    "options": ["金星", "木星", "土星", "海王星"],
    "answer": 0,
    "explanation": "金星自东向西自转，与其他行星相反。"
  },
  {
    "id": 642,
    "type": "choice",
    "text": "下列哪个天体属于卫星？",
    "options": ["地球", "月球", "太阳", "彗星"],
    "answer": 1,
    "explanation": "月球是地球的天然卫星。"
  },
  {
    "id": 643,
    "type": "choice",
    "text": "彗星在接近太阳时会出现彗尾，主要原因是？",
    "options": ["太阳风的作用", "彗星自身旋转", "地球引力", "彗星内部燃烧"],
    "answer": 0,
    "explanation": "太阳风将彗星物质吹离形成彗尾。"
  },
  {
    "id": 644,
    "type": "choice",
    "text": "下列哪种现象不能用光年解释？",
    "options": ["星系之间的距离", "恒星之间的距离", "地球到月球的距离", "宇宙的尺度"],
    "answer": 2,
    "explanation": "地球到月球距离约38万千米，用光秒表示更合适，光年太大。"
  },
  {
    "id": 645,
    "type": "choice",
    "text": "银河系的形状像什么？",
    "options": ["球形", "盘子", "哑铃", "不规则"],
    "answer": 1,
    "explanation": "银河系呈盘状，中心有核球，周围有旋臂。"
  },
  {
    "id": 646,
    "type": "choice",
    "text": "太阳位于银河系的哪个位置？",
    "options": ["中心", "银盘边缘", "一条旋臂上", "银晕中"],
    "answer": 2,
    "explanation": "太阳位于银河系的猎户臂上，距银心约2.6万光年。"
  },
  {
    "id": 647,
    "type": "choice",
    "text": "下列哪个不是宇宙中存在的天体？",
    "options": ["恒星", "行星", "黑洞", "地心"],
    "answer": 3,
    "explanation": "地心是地球内部结构，不是天体。"
  },
  {
    "id": 648,
    "type": "choice",
    "text": "人类观测宇宙使用的主要工具是？",
    "options": ["显微镜", "望远镜", "温度计", "地震仪"],
    "answer": 1,
    "explanation": "望远镜是天文学观测的核心工具。"
  },
  {
    "id": 649,
    "type": "choice",
    "text": "下列哪种能源来自太阳？",
    "options": ["风能", "水能", "化石燃料", "以上都是"],
    "answer": 3,
    "explanation": "太阳辐射驱动大气和水循环，化石燃料是古代生物储存的太阳能。"
  },
  {
    "id": 650,
    "type": "choice",
    "text": "埃菲尔铁塔共用去熟铁多少吨？",
    "options": ["5000吨", "7000吨", "9000吨", "11000吨"],
    "answer": 1,
    "explanation": "资料明确提到共用去熟铁7000吨。"
  },
  {
    "id": 651,
    "type": "choice",
    "text": "埃菲尔铁塔的钢铁构件有多少个？",
    "options": ["8000个", "12000个", "18038个", "25000个"],
    "answer": 2,
    "explanation": "钢铁构件共有18038个。"
  },
  {
    "id": 652,
    "type": "choice",
    "text": "埃菲尔铁塔施工中共钻孔多少个？",
    "options": ["100万个", "300万个", "500万个", "700余万个"],
    "answer": 3,
    "explanation": "资料显示共钻孔700余万个。"
  },
  {
    "id": 653,
    "type": "choice",
    "text": "埃菲尔铁塔使用铆钉多少万颗？",
    "options": ["150万", "200万", "250万", "300万"],
    "answer": 2,
    "explanation": "使用铆钉250余万颗。"
  },
  {
    "id": 654,
    "type": "choice",
    "text": "埃菲尔铁塔的设计师是？",
    "options": ["埃菲尔", "达芬奇", "贝聿铭", "高迪"],
    "answer": 0,
    "explanation": "古斯塔夫·埃菲尔设计了埃菲尔铁塔。"
  },
  {
    "id": 655,
    "type": "choice",
    "text": "下列哪种结构属于框架结构？",
    "options": ["土坯房", "砖混结构", "钢筋混凝土框架", "石拱桥"],
    "answer": 2,
    "explanation": "钢筋混凝土框架是典型的框架结构。"
  },
  {
    "id": 656,
    "type": "choice",
    "text": "框架结构的梁和柱连接方式通常要求？",
    "options": ["柔性连接", "刚性连接", "铰接", "滑动连接"],
    "answer": 1,
    "explanation": "框架结构要求梁柱刚性连接，形成整体承重。"
  },
  {
    "id": 657,
    "type": "choice",
    "text": "下列哪项不是框架结构的应用领域？",
    "options": ["住宅", "学校", "单层厂房", "古代木塔"],
    "answer": 3,
    "explanation": "古代木塔是榫卯结构，不是现代意义上的框架结构。"
  },
  {
    "id": 658,
    "type": "choice",
    "text": "采用现浇混凝土框架时，结构的什么较好？",
    "options": ["整体性和刚度", "柔性和延性", "美观性", "保温性"],
    "answer": 0,
    "explanation": "现浇混凝土框架整体性和刚度好，抗震性能优。"
  },
  {
    "id": 659,
    "type": "choice",
    "text": "框架结构建筑的使用寿命通常可达？",
    "options": ["30年", "50年", "70年", "上百年"],
    "answer": 3,
    "explanation": "维护良好的框架结构住宅寿命可达上百年。"
  },
  {
    "id": 660,
    "type": "choice",
    "text": "在校园生物调查中，为什么要设计调查表？",
    "options": ["方便记录数据", "统一标准，避免遗漏", "便于后续分析", "以上都是"],
    "answer": 3,
    "explanation": "调查表有助于系统记录和整理数据。"
  },
  {
    "id": 661,
    "type": "choice",
    "text": "下列哪种行为有利于保护校园生物多样性？",
    "options": ["捕捉蝴蝶制作标本", "为小鸟搭建人工巢箱", "拔掉所有杂草", "喷洒农药杀虫"],
    "answer": 1,
    "explanation": "搭建巢箱有助于鸟类繁殖，增加生物多样性。"
  },
  {
    "id": 662,
    "type": "choice",
    "text": "蚜虫主要危害农作物的哪一部分？",
    "options": ["根", "茎", "叶和嫩芽", "果实"],
    "answer": 2,
    "explanation": "蚜虫吸食植物汁液，主要危害叶片和嫩茎。"
  },
  {
    "id": 663,
    "type": "choice",
    "text": "蚂蚁将蚜虫带回巢穴的目的是？",
    "options": ["饲养蚜虫，持续获取蜜露", "储存食物", "保护蚜虫免受天敌", "清理巢穴"],
    "answer": 0,
    "explanation": "蚂蚁会将蚜虫带回巢穴'放牧'，以便随时取食蜜露。"
  },
  {
    "id": 664,
    "type": "choice",
    "text": "二歧分类法每次将生物分成几类？",
    "options": ["两类", "三类", "四类", "多类"],
    "answer": 0,
    "explanation": "二歧分类法每次按一个特征分成两类，逐级细分。"
  },
  {
    "id": 665,
    "type": "choice",
    "text": "下列哪项属于木本植物？",
    "options": ["狗尾草", "小麦", "杨树", "水稻"],
    "answer": 2,
    "explanation": "杨树茎干坚硬，属于木本植物；其他为草本。"
  },
  {
    "id": 666,
    "type": "choice",
    "text": "下列哪项属于裸子植物？",
    "options": ["松树", "桃树", "玉米", "豌豆"],
    "answer": 0,
    "explanation": "松树种子裸露，无果皮包被，属于裸子植物。"
  },
  {
    "id": 667,
    "type": "choice",
    "text": "下列哪项属于双子叶植物？",
    "options": ["水稻", "小麦", "大豆", "玉米"],
    "answer": 2,
    "explanation": "大豆有两片子叶，属于双子叶植物；其他为单子叶。"
  },
  {
    "id": 668,
    "type": "choice",
    "text": "下列哪项不是动物分类的依据？",
    "options": ["有无脊柱", "体温是否恒定", "繁殖方式", "颜色"],
    "answer": 3,
    "explanation": "颜色易受环境影响，不是稳定的分类依据。"
  },
  {
    "id": 669,
    "type": "choice",
    "text": "下列哪项属于哺乳动物？",
    "options": ["企鹅", "鳄鱼", "蝙蝠", "青蛙"],
    "answer": 2,
    "explanation": "蝙蝠胎生哺乳，属于哺乳动物；企鹅是鸟类，鳄鱼是爬行类，青蛙是两栖类。"
  },
  {
    "id": 670,
    "type": "choice",
    "text": "下列哪项属于鸟类特有的特征？",
    "options": ["胎生", "有羽毛", "用鳃呼吸", "体表有鳞片"],
    "answer": 1,
    "explanation": "羽毛是鸟类独有的特征。"
  },
  {
    "id": 671,
    "type": "choice",
    "text": "遗传和变异是生物界的普遍现象，下列哪项属于变异？",
    "options": ["龙生龙，凤生凤", "种瓜得瓜", "一母生九子，连母十个样", "桂实生桂"],
    "answer": 2,
    "explanation": "变异指亲子代间的差异，C描述了个体差异。"
  },
  {
    "id": 672,
    "type": "choice",
    "text": "下列哪项不是化石的种类？",
    "options": ["实体化石", "模铸化石", "遗迹化石", "活体化石"],
    "answer": 3,
    "explanation": "化石分为实体、模铸、遗迹等，没有'活体化石'这一分类。"
  },
  {
    "id": 673,
    "type": "choice",
    "text": "三叶虫化石通常存在于哪种岩石中？",
    "options": ["岩浆岩", "沉积岩", "变质岩", "花岗岩"],
    "answer": 1,
    "explanation": "化石主要存在于沉积岩中。"
  },
  {
    "id": 674,
    "type": "choice",
    "text": "研究古生物的重要证据是？",
    "options": ["传说", "化石", "古籍", "绘画"],
    "answer": 1,
    "explanation": "化石是古生物存在的直接证据。"
  },
  {
    "id": 675,
    "type": "choice",
    "text": "太阳系中质量最大的行星是？",
    "options": ["土星", "木星", "海王星", "天王星"],
    "answer": 1,
    "explanation": "木星质量是其他行星总和的两倍多。"
  },
  {
    "id": 676,
    "type": "choice",
    "text": "太阳系中体积最大的行星是？",
    "options": ["土星", "木星", "海王星", "天王星"],
    "answer": 1,
    "explanation": "木星体积最大。"
  },
  {
    "id": 677,
    "type": "choice",
    "text": "太阳系中被称为\"红色星球\"的是？",
    "options": ["火星", "金星", "水星", "木星"],
    "answer": 0,
    "explanation": "火星表面富含氧化铁，呈红色。"
  },
  {
    "id": 678,
    "type": "choice",
    "text": "太阳系中温度最高的行星是？",
    "options": ["水星", "金星", "地球", "火星"],
    "answer": 1,
    "explanation": "金星有浓厚的二氧化碳大气，温室效应严重，表面温度最高。"
  },
  {
    "id": 679,
    "type": "choice",
    "text": "太阳系中拥有最宽光环的行星是？",
    "options": ["木星", "土星", "天王星", "海王星"],
    "answer": 1,
    "explanation": "土星的光环最宽最明显。"
  },
  {
    "id": 680,
    "type": "choice",
    "text": "下列哪项不是影响天文观测的因素？",
    "options": ["光污染", "大气湍流", "地球自转", "月球引力"],
    "answer": 3,
    "explanation": "月球引力主要影响潮汐，对光学观测影响较小。"
  },
  {
    "id": 681,
    "type": "choice",
    "text": "北斗七星在天空中的形状像？",
    "options": ["勺子", "十字架", "猎户", "天蝎"],
    "answer": 0,
    "explanation": "北斗七星形似勺子，由七颗亮星组成。"
  },
  {
    "id": 682,
    "type": "choice",
    "text": "北极星位于哪个星座？",
    "options": ["大熊座", "小熊座", "仙后座", "天龙座"],
    "answer": 1,
    "explanation": "北极星是小熊座最亮的星。"
  },
  {
    "id": 683,
    "type": "choice",
    "text": "利用北斗七星可以找到北极星，方法是？",
    "options": ["沿斗口两颗星连线延长5倍", "沿斗柄方向延长", "垂直斗口向上", "垂直斗柄向下"],
    "answer": 0,
    "explanation": "将天璇和天枢连线延长约5倍即可找到北极星。"
  },
  {
    "id": 684,
    "type": "choice",
    "text": "下列哪项不是星座划分的依据？",
    "options": ["亮星连线", "古代神话", "恒星实际距离", "天区划分"],
    "answer": 2,
    "explanation": "星座划分不考虑恒星实际距离，只考虑视线方向。"
  },
  {
    "id": 685,
    "type": "choice",
    "text": "银河系的直径约为多少光年？",
    "options": ["1万光年", "5万光年", "10万光年", "20万光年"],
    "answer": 2,
    "explanation": "银河系银盘直径约10万光年。"
  },
  {
    "id": 686,
    "type": "choice",
    "text": "银河系中太阳系位于？",
    "options": ["银核", "银盘", "银晕", "银冕"],
    "answer": 1,
    "explanation": "太阳位于银河系的银盘内，靠近银盘平面。"
  },
  {
    "id": 687,
    "type": "choice",
    "text": "宇宙大爆炸理论认为宇宙起源于？",
    "options": ["一个奇点", "一片虚无", "无数恒星", "地球"],
    "answer": 0,
    "explanation": "宇宙大爆炸理论认为宇宙从高温高密的奇点膨胀而来。"
  },
  {
    "id": 688,
    "type": "choice",
    "text": "下列哪项证据支持宇宙大爆炸理论？",
    "options": ["宇宙微波背景辐射", "星系红移", "氦元素丰度", "以上都是"],
    "answer": 3,
    "explanation": "三者都是大爆炸理论的重要证据。"
  },
  {
    "id": 689,
    "type": "choice",
    "text": "中国第一个月球探测器是？",
    "options": ["嫦娥一号", "嫦娥二号", "嫦娥三号", "嫦娥四号"],
    "answer": 0,
    "explanation": "嫦娥一号于2007年发射，是中国首颗月球探测器。"
  },
  {
    "id": 690,
    "type": "choice",
    "text": "嫦娥四号实现了人类首次？",
    "options": ["月球正面软着陆", "月球背面软着陆", "月球采样返回", "载人登月"],
    "answer": 1,
    "explanation": "嫦娥四号于2019年实现了人类首次月球背面软着陆。"
  },
  {
    "id": 691,
    "type": "choice",
    "text": "嫦娥五号返回地球时，速度接近？",
    "options": ["第一宇宙速度", "第二宇宙速度", "第三宇宙速度", "光速"],
    "answer": 1,
    "explanation": "嫦娥五号返回器以接近第二宇宙速度（11.2 km/s）再入大气层。"
  },
  {
    "id": 692,
    "type": "choice",
    "text": "月壤中包含的主要矿物是？",
    "options": ["铁矿石", "钛铁矿", "橄榄石", "以上都是"],
    "answer": 3,
    "explanation": "月壤含有多种矿物，包括钛铁矿、橄榄石等。"
  },
  {
    "id": 693,
    "type": "choice",
    "text": "下列哪项不是月球探测的意义？",
    "options": ["开发月球资源", "研究太阳系起源", "建立外星殖民地", "提升航天技术"],
    "answer": 2,
    "explanation": "目前月球探测主要出于科学和技术目的，尚未涉及殖民。"
  },
  {
    "id": 694,
    "type": "choice",
    "text": "在校园生物调查中，为什么要借助识别软件？",
    "options": ["提高辨识准确性", "节省时间", "学习生物知识", "以上都是"],
    "answer": 3,
    "explanation": "识别软件能快速帮助识别未知生物，并学习相关知识。"
  },
  {
    "id": 695,
    "type": "choice",
    "text": "蚜虫的天敌包括？",
    "options": ["瓢虫", "蚂蚁", "蜜蜂", "蝴蝶"],
    "answer": 0,
    "explanation": "瓢虫是蚜虫的重要天敌，以捕食蚜虫为生。"
  },
  {
    "id": 696,
    "type": "choice",
    "text": "蚂蚁为什么会驱赶蚜虫天敌？",
    "options": ["保护蜜露来源", "保护蚜虫生命", "维护生态平衡", "获得蚜虫尸体"],
    "answer": 0,
    "explanation": "蚂蚁为了持续获得蜜露，会保护蚜虫免受天敌攻击。"
  },
  {
    "id": 697,
    "type": "choice",
    "text": "下列哪项不是二歧分类法的优点？",
    "options": ["简单易行", "快速鉴别", "反映亲缘关系", "每次只区分两类"],
    "answer": 2,
    "explanation": "二歧分类法主要是检索工具，不一定反映进化亲缘关系。"
  },
  {
    "id": 698,
    "type": "choice",
    "text": "下列哪项属于单子叶植物？",
    "options": ["花生", "大豆", "小麦", "棉花"],
    "answer": 2,
    "explanation": "小麦有一片子叶，属于单子叶植物；其他为双子叶。"
  },
  {
    "id": 699,
    "type": "choice",
    "text": "下列哪项属于脊椎动物？",
    "options": ["蜗牛", "蚯蚓", "鲤鱼", "蝗虫"],
    "answer": 2,
    "explanation": "鲤鱼有脊柱，属于脊椎动物；其他为无脊椎动物。"
  },
  {
    "id": 700,
    "type": "choice",
    "text": "下列哪项属于恒温动物？",
    "options": ["蛇", "蜥蜴", "麻雀", "青蛙"],
    "answer": 2,
    "explanation": "鸟类和哺乳类是恒温动物，麻雀是鸟类。"
  },
  {
    "id": 701,
    "type": "choice",
    "text": "下列哪项属于卵生哺乳动物？",
    "options": ["鸭嘴兽", "袋鼠", "蝙蝠", "鲸"],
    "answer": 0,
    "explanation": "鸭嘴兽是卵生但哺乳，属于单孔类。"
  },
  {
    "id": 702,
    "type": "choice",
    "text": "化石形成需要多长时间？",
    "options": ["几年", "几十年", "数千年至数万年", "至少一万年以上"],
    "answer": 3,
    "explanation": "化石形成通常需要漫长地质时间，至少一万年以上。"
  },
  {
    "id": 703,
    "type": "choice",
    "text": "下列哪种化石可以反映古生物的活动痕迹？",
    "options": ["实体化石", "遗迹化石", "模铸化石", "化学化石"],
    "answer": 1,
    "explanation": "足迹、粪便等遗迹化石反映了生物的行为。"
  },
  {
    "id": 704,
    "type": "choice",
    "text": "恐龙灭绝最广为接受的原因是？",
    "options": ["小行星撞击", "火山爆发", "气候变化", "疾病流行"],
    "answer": 0,
    "explanation": "小行星撞击假说得到较多证据支持。"
  },
  {
    "id": 705,
    "type": "choice",
    "text": "太阳系中卫星最多的行星是？",
    "options": ["木星", "土星", "天王星", "海王星"],
    "answer": 0,
    "explanation": "木星已知卫星最多（超过90颗），但土星也有不少，木星略多。"
  },
  {
    "id": 706,
    "type": "choice",
    "text": "太阳系中被称为\"冰巨星\"的是？",
    "options": ["木星和土星", "天王星和海王星", "火星和金星", "地球和火星"],
    "answer": 1,
    "explanation": "天王星和海王星主要由冰物质组成，称为冰巨星。"
  },
  {
    "id": 707,
    "type": "choice",
    "text": "太阳系中自转轴倾斜最严重的行星是？",
    "options": ["木星", "土星", "天王星", "海王星"],
    "answer": 2,
    "explanation": "天王星自转轴倾角约98度，几乎是'躺着'自转。"
  },
  {
    "id": 708,
    "type": "choice",
    "text": "下列哪项不是星座的作用？",
    "options": ["辨认星空", "导航定位", "预测命运", "记录天区"],
    "answer": 2,
    "explanation": "星座是科学划分，与占星术预测命运无关。"
  },
  {
    "id": 709,
    "type": "choice",
    "text": "猎户座中最亮的星是？",
    "options": ["参宿四", "参宿七", "天狼星", "织女星"],
    "answer": 1,
    "explanation": "猎户座中最亮的星是参宿七（Rigel）。"
  },
  {
    "id": 710,
    "type": "choice",
    "text": "夏季大三角不包括下列哪颗星？",
    "options": ["织女星", "牛郎星", "天津四", "北极星"],
    "answer": 3,
    "explanation": "夏季大三角由织女、牛郎、天津四组成。"
  },
  {
    "id": 711,
    "type": "choice",
    "text": "光在一年中走过的距离大约是？",
    "options": ["9.46万亿千米", "3亿千米", "1.5亿千米", "100亿千米"],
    "answer": 0,
    "explanation": "一光年约等于9.46×10¹²千米。"
  },
  {
    "id": 712,
    "type": "choice",
    "text": "银河系中心区域存在什么？",
    "options": ["超大质量黑洞", "大量恒星", "星际气体", "以上都是"],
    "answer": 3,
    "explanation": "银心包含超大质量黑洞、密集恒星和气体。"
  },
  {
    "id": 713,
    "type": "choice",
    "text": "下列哪项不是航天器返回地球时需要克服的困难？",
    "options": ["高温", "高压", "黑障", "失重"],
    "answer": 3,
    "explanation": "返回时失重不是主要困难，高温和黑障才是。"
  },
  {
    "id": 714,
    "type": "choice",
    "text": "嫦娥五号采样返回任务中，负责携带样品升空进入月球轨道的是？",
    "options": ["着陆器", "上升器", "轨道器", "返回器"],
    "answer": 1,
    "explanation": "上升器携带样品从月面起飞进入环月轨道。"
  },
  {
    "id": 715,
    "type": "choice",
    "text": "在校园生物调查中，为什么要选择感兴趣的生物重点调查？",
    "options": ["减少工作量", "深入研究", "提高趣味性", "以上都是"],
    "answer": 3,
    "explanation": "重点调查可以深入研究、提高兴趣并提高效率。"
  },
  {
    "id": 716,
    "type": "choice",
    "text": "下列哪项不是保护生物多样性的措施？",
    "options": ["建立自然保护区", "引进外来物种", "禁止乱捕滥杀", "建立基因库"],
    "answer": 1,
    "explanation": "引进外来物种可能破坏本地生态，不是保护措施。"
  },
  {
    "id": 717,
    "type": "choice",
    "text": "蚜虫的口器类型是？",
    "options": ["咀嚼式", "刺吸式", "虹吸式", "舔吸式"],
    "answer": 1,
    "explanation": "蚜虫以刺吸式口器吸食植物汁液。"
  },
  {
    "id": 718,
    "type": "choice",
    "text": "蚂蚁通过什么方式与同伴交流？",
    "options": ["声音", "舞蹈", "信息素", "触角敲击"],
    "answer": 2,
    "explanation": "蚂蚁主要依靠分泌信息素进行化学通讯。"
  },
  {
    "id": 719,
    "type": "choice",
    "text": "下列哪项是植物的营养器官？",
    "options": ["花", "果实", "种子", "根"],
    "answer": 3,
    "explanation": "根、茎、叶是营养器官；花、果实、种子是生殖器官。"
  },
  {
    "id": 720,
    "type": "choice",
    "text": "下列哪项属于变态茎？",
    "options": ["马铃薯", "胡萝卜", "甘薯", "萝卜"],
    "answer": 0,
    "explanation": "马铃薯是块茎，属于变态茎；胡萝卜、甘薯是变态根。"
  },
  {
    "id": 721,
    "type": "choice",
    "text": "下列哪项属于不完全变态昆虫？",
    "options": ["蝴蝶", "蜜蜂", "蝗虫", "甲虫"],
    "answer": 2,
    "explanation": "蝗虫发育过程为卵→若虫→成虫，没有蛹期，属于不完全变态。"
  },
  {
    "id": 722,
    "type": "choice",
    "text": "下列哪项属于两栖动物？",
    "options": ["乌龟", "鳄鱼", "青蛙", "海豚"],
    "answer": 2,
    "explanation": "青蛙幼体用鳃呼吸，成体用肺和皮肤呼吸，属于两栖动物。"
  },
  {
    "id": 723,
    "type": "choice",
    "text": "恐龙化石最早被科学描述是在？",
    "options": ["17世纪", "18世纪", "19世纪", "20世纪"],
    "answer": 2,
    "explanation": "19世纪初期，英国科学家描述了恐龙化石。"
  },
  {
    "id": 724,
    "type": "choice",
    "text": "下列哪项不是研究化石的方法？",
    "options": ["形态比较", "CT扫描", "碳-14定年", "基因测序"],
    "answer": 3,
    "explanation": "化石中DNA难以保存，基因测序很难用于古老化石。"
  },
  {
    "id": 725,
    "type": "choice",
    "text": "太阳系中大气层最厚的行星是？",
    "options": ["木星", "土星", "金星", "地球"],
    "answer": 0,
    "explanation": "木星的大气层非常厚，主要由氢和氦组成。"
  },
  {
    "id": 726,
    "type": "choice",
    "text": "太阳黑子活动周期约为？",
    "options": ["5年", "11年", "22年", "30年"],
    "answer": 1,
    "explanation": "太阳黑子活动周期平均为11年。"
  },
  {
    "id": 727,
    "type": "choice",
    "text": "极光产生的原因是？",
    "options": ["太阳风与地球磁场作用", "月球反射阳光", "地球自转", "大气折射"],
    "answer": 0,
    "explanation": "太阳风带电粒子被地球磁场引导至两极，与大气碰撞产生极光。"
  },
  {
    "id": 728,
    "type": "choice",
    "text": "下列哪项不是天文望远镜的类型？",
    "options": ["折射式", "反射式", "折反射式", "显微式"],
    "answer": 3,
    "explanation": "显微镜用于观察微小物体，不是天文望远镜。"
  },
  {
    "id": 729,
    "type": "choice",
    "text": "哈勃太空望远镜主要观测的是？",
    "options": ["红外光", "紫外光", "可见光", "以上都是"],
    "answer": 3,
    "explanation": "哈勃望远镜可观测紫外、可见光和近红外。"
  },
  {
    "id": 730,
    "type": "choice",
    "text": "中国天眼（FAST）的主要科学目标是？",
    "options": ["寻找脉冲星", "探测中性氢", "搜寻地外文明", "以上都是"],
    "answer": 3,
    "explanation": "FAST主要用于脉冲星、中性氢和地外文明搜索等。"
  },
  {
    "id": 731,
    "type": "choice",
    "text": "下列哪项不是航天员在太空中面临的生理问题？",
    "options": ["肌肉萎缩", "骨质流失", "血压升高", "辐射暴露"],
    "answer": 2,
    "explanation": "失重导致血液上涌，头部血压升高，但全身血压实际上可能下降。"
  },
  {
    "id": 732,
    "type": "choice",
    "text": "下列哪项是空间站的主要功能？",
    "options": ["科学实验", "天文观测", "地球观测", "以上都是"],
    "answer": 3,
    "explanation": "空间站可开展多领域实验和观测。"
  },
  {
    "id": 733,
    "type": "choice",
    "text": "我国第一个空间站核心舱命名为？",
    "options": ["天和", "问天", "梦天", "天宫"],
    "answer": 0,
    "explanation": "天和核心舱于2021年发射，是中国空间站首个舱段。"
  },
  {
    "id": 734,
    "type": "choice",
    "text": "下列哪项不是保护地球生物多样性的重要意义？",
    "options": ["维持生态平衡", "提供食物和药物", "促进物种灭绝", "提供科研价值"],
    "answer": 2,
    "explanation": "保护生物多样性的目的是防止物种灭绝，而不是促进灭绝。"
  }, 

  {
    "id": 735,
    "type": "choice",
    "text": "目前，太阳系中公认的绕太阳公转的行星有几颗？",
    "options": ["5颗", "6颗", "7颗", "8颗"],
    "answer": 3,
    "explanation": "国际天文学联合会将太阳系行星定为8颗，包括水星到海王星。"
  },
  {
    "id": 736,
    "type": "choice",
    "text": "太阳系中体积最大的行星是？",
    "options": ["土星", "木星", "天王星", "海王星"],
    "answer": 1,
    "explanation": "木星的体积和质量都是太阳系行星中最大的。"
  },
  {
    "id": 737,
    "type": "choice",
    "text": "下列关于太阳的说法正确的是？",
    "options": ["太阳是宇宙的中心", "太阳是一颗恒星", "太阳围绕地球公转", "太阳本身不发光"],
    "answer": 1,
    "explanation": "太阳是一颗能自身发光发热的恒星，位于太阳系中心，但不是宇宙中心。"
  },
  {
    "id": 738,
    "type": "choice",
    "text": "2020年6月21日发生的日食，这一天可能是农历的哪一天？",
    "options": ["初一", "初七", "十五", "二十二"],
    "answer": 0,
    "explanation": "日食发生在农历初一，此时月球位于地球和太阳之间。"
  },
  {
    "id": 739,
    "type": "choice",
    "text": "发生日食时，太阳、地球、月球的相对位置是？",
    "options": ["地球在中间", "太阳在中间", "月球在中间", "三者成直角"],
    "answer": 2,
    "explanation": "日食时月球位于太阳和地球之间，三者几乎成一直线。"
  },
  {
    "id": 740,
    "type": "choice",
    "text": "下列物质加入白醋中会产生气泡的是？",
    "options": ["白糖", "食盐", "小苏打", "大米"],
    "answer": 2,
    "explanation": "小苏打（碳酸氢钠）与白醋（醋酸）反应生成二氧化碳气体。"
  },
  {
    "id": 741,
    "type": "choice",
    "text": "下列物质加入水中，不发生明显化学变化的是？",
    "options": ["白糖", "小苏打", "生石灰", "泡腾片"],
    "answer": 0,
    "explanation": "白糖溶于水是物理变化，没有新物质生成。"
  },
  {
    "id": 742,
    "type": "choice",
    "text": "蕨类植物的叶背面常出现褐色斑点，这些斑点主要是？",
    "options": ["病菌感染", "孢子囊群", "虫卵", "枯死组织"],
    "answer": 1,
    "explanation": "蕨类植物通过孢子繁殖，孢子囊群常呈褐色斑点状。"
  },
  {
    "id": 743,
    "type": "choice",
    "text": "人体情绪兴奋时，体内哪种物质的分泌量会增加？",
    "options": ["多巴胺", "胰岛素", "生长激素", "甲状腺素"],
    "answer": 0,
    "explanation": "多巴胺是一种与兴奋、愉悦情绪相关的神经递质。"
  },
  {
    "id": 744,
    "type": "choice",
    "text": "恐惧、紧张时，人体会分泌哪种激素？",
    "options": ["多巴胺", "肾上腺素", "内啡肽", "催产素"],
    "answer": 1,
    "explanation": "肾上腺素在应激状态下分泌，增强心率和能量供应。"
  },
  {
    "id": 745,
    "type": "choice",
    "text": "下列哪项属于化学变化？",
    "options": ["植物进行光合作用", "冰块融化", "玻璃破碎", "水蒸发"],
    "answer": 0,
    "explanation": "光合作用将二氧化碳和水转化为葡萄糖和氧气，生成新物质。"
  },
  {
    "id": 746,
    "type": "choice",
    "text": "紫甘蓝放入白醋中，颜色会变成？",
    "options": ["蓝色", "绿色", "红色", "黄色"],
    "answer": 2,
    "explanation": "紫甘蓝汁液遇酸变红，遇碱变蓝或绿。"
  },
  {
    "id": 747,
    "type": "choice",
    "text": "紫甘蓝放入水中，颜色最可能？",
    "options": ["变为红色", "变为蓝色", "变为黄色", "基本不变"],
    "answer": 3,
    "explanation": "水是中性的，紫甘蓝色素在水中颜色基本保持紫色或蓝紫色。"
  },
  {
    "id": 748,
    "type": "choice",
    "text": "下列成语描述物理变化的是？",
    "options": ["滴水成冰", "火上浇油", "百炼成钢", "蜡炬成灰"],
    "answer": 0,
    "explanation": "滴水成冰只是水的状态变化，没有生成新物质。"
  },
  {
    "id": 749,
    "type": "choice",
    "text": "下列成语描述化学变化的是？",
    "options": ["木已成舟", "铁杵磨针", "火上浇油", "沙里淘金"],
    "answer": 2,
    "explanation": "火上浇油涉及燃烧，生成了二氧化碳和水等新物质。"
  },
  {
    "id": 750,
    "type": "choice",
    "text": "用蜡烛火焰去点燃装有白雾的瓶子，白雾消失的原因是？",
    "options": ["白雾被火焰吸收", "蜡烛燃烧放热使白雾蒸发", "白雾与燃烧产物发生反应", "蜡烛消耗了氧气"],
    "answer": 1,
    "explanation": "白雾是小液滴，受热后蒸发变成水蒸气，白雾消失。"
  },
  {
    "id": 751,
    "type": "choice",
    "text": "下列谚语描述的变化与其他三项不同的是？",
    "options": ["只要功夫深，铁杵磨成针", "野火烧不尽，春风吹又生", "春蚕到死丝方尽，蜡炬成灰泪始干", "爆竹声中一岁除，春风送暖入屠苏"],
    "answer": 0,
    "explanation": "A是物理变化（形状改变），其余三项涉及燃烧或生命活动，是化学变化。"
  },
  {
    "id": 752,
    "type": "choice",
    "text": "下列物质中，不是通过化学变化形成的是？",
    "options": ["石蜡", "煤", "天然气", "沼气"],
    "answer": 0,
    "explanation": "石蜡是从石油中物理分离得到的，煤、天然气、沼气都是化学变化形成的。"
  },
  {
    "id": 753,
    "type": "choice",
    "text": "下列物质中，属于固体的是？",
    "options": ["水", "空气", "食盐", "酒精"],
    "answer": 2,
    "explanation": "食盐在常温下为固体；水、酒精为液体，空气为气体。"
  },
  {
    "id": 754,
    "type": "choice",
    "text": "小苏打和白醋混合产生的气体是？",
    "options": ["氧气", "氢气", "二氧化碳", "氮气"],
    "answer": 2,
    "explanation": "碳酸氢钠与酸反应生成二氧化碳气体。"
  },
  {
    "id": 755,
    "type": "choice",
    "text": "下列化学变化对人类可能造成不良影响的是？",
    "options": ["金属生锈", "光合作用", "食物消化", "合成药物"],
    "answer": 0,
    "explanation": "金属生锈会损坏设备，造成经济损失，属于不良影响。"
  },
  {
    "id": 756,
    "type": "choice",
    "text": "下列哪项是化学变化在工业上的有益应用？",
    "options": ["用不同原料合成药物", "铁器生锈", "食物腐败", "塑料老化"],
    "answer": 0,
    "explanation": "合成药物是化学变化的有益应用，其他三项通常是有害的。"
  },
  {
    "id": 757,
    "type": "choice",
    "text": "下列成语中，涉及物理变化的是？",
    "options": ["火上浇油", "百炼成钢", "水结成冰", "蜡炬成灰"],
    "answer": 2,
    "explanation": "水结成冰是状态变化，没有新物质生成。"
  },
  {
    "id": 758,
    "type": "choice",
    "text": "下列成语中，涉及化学变化的是？",
    "options": ["破釜沉舟", "刻舟求剑", "火上浇油", "积土成山"],
    "answer": 2,
    "explanation": "火上浇油涉及燃烧，是化学变化。"
  },
  {
    "id": 759,
    "type": "choice",
    "text": "蜡烛燃烧时，蜡烛先熔化后燃烧，这一过程属于？",
    "options": ["只有物理变化", "只有化学变化", "先物理后化学", "先化学后物理"],
    "answer": 2,
    "explanation": "熔化是物理变化，燃烧是化学变化。"
  },
  {
    "id": 760,
    "type": "choice",
    "text": "下列哪项变化一定是化学变化？",
    "options": ["颜色改变", "状态改变", "产生气体", "生成沉淀"],
    "answer": 3,
    "explanation": "生成新物质是化学变化的本质，沉淀通常是新物质。"
  },
  {
    "id": 761,
    "type": "choice",
    "text": "下列哪项变化不一定是化学变化？",
    "options": ["燃烧", "生锈", "腐烂", "溶解"],
    "answer": 3,
    "explanation": "溶解通常是物理变化，如糖溶于水。"
  },
  {
    "id": 762,
    "type": "choice",
    "text": "将小苏打加入白醋中，用手触摸容器外壁会感觉？",
    "options": ["变热", "变冷", "无变化", "先热后冷"],
    "answer": 1,
    "explanation": "小苏打与醋酸反应是吸热反应，容器外壁变冷。"
  },
  {
    "id": 763,
    "type": "choice",
    "text": "下列哪项证据不能证明化学变化的发生？",
    "options": ["颜色改变", "状态改变", "发热", "产生气体"],
    "answer": 1,
    "explanation": "状态改变（如融化、沸腾）可能是物理变化。"
  },
  {
    "id": 764,
    "type": "choice",
    "text": "植物光合作用将太阳能转化为？",
    "options": ["化学能", "电能", "热能", "动能"],
    "answer": 0,
    "explanation": "光合作用将太阳能储存在葡萄糖的化学键中。"
  },
  {
    "id": 765,
    "type": "choice",
    "text": "人体情绪与化学物质密切相关，下列哪项被称为'快乐激素'？",
    "options": ["多巴胺", "肾上腺素", "皮质醇", "甲状腺素"],
    "answer": 0,
    "explanation": "多巴胺与愉悦、奖励机制相关。"
  },
  {
    "id": 766,
    "type": "choice",
    "text": "下列哪项化学变化是缓慢氧化？",
    "options": ["铁生锈", "木柴燃烧", "火药爆炸", "天然气燃烧"],
    "answer": 0,
    "explanation": "铁生锈是缓慢氧化，其他是剧烈氧化。"
  },
  {
    "id": 767,
    "type": "choice",
    "text": "下列哪项不是缓慢氧化的例子？",
    "options": ["呼吸作用", "食物腐败", "橡胶老化", "蜡烛燃烧"],
    "answer": 3,
    "explanation": "蜡烛燃烧是剧烈氧化，发光发热明显。"
  },
  {
    "id": 768,
    "type": "choice",
    "text": "小苏打的化学名称是？",
    "options": ["碳酸钠", "碳酸氢钠", "氢氧化钠", "氯化钠"],
    "answer": 1,
    "explanation": "小苏打是碳酸氢钠（NaHCO₃）。"
  },
  {
    "id": 769,
    "type": "choice",
    "text": "白醋的主要成分是？",
    "options": ["醋酸", "柠檬酸", "盐酸", "硫酸"],
    "answer": 0,
    "explanation": "白醋含有约3-5%的醋酸。"
  },
  {
    "id": 770,
    "type": "choice",
    "text": "将下列物质加入白醋中，会产生大量气泡的是？",
    "options": ["面粉", "鸡蛋壳", "白糖", "食盐"],
    "answer": 1,
    "explanation": "鸡蛋壳含有碳酸钙，与酸反应生成二氧化碳。"
  },
  {
    "id": 771,
    "type": "choice",
    "text": "紫甘蓝汁液可以作为？",
    "options": ["酸碱指示剂", "干燥剂", "催化剂", "还原剂"],
    "answer": 0,
    "explanation": "紫甘蓝色素在不同酸碱性溶液中显示不同颜色，可作指示剂。"
  },
  {
    "id": 772,
    "type": "choice",
    "text": "下列哪种变化是化学变化？",
    "options": ["玻璃破碎", "铁水铸锅", "煤炭燃烧", "酒精挥发"],
    "answer": 2,
    "explanation": "煤炭燃烧生成二氧化碳等新物质。"
  },
  {
    "id": 773,
    "type": "choice",
    "text": "下列哪项属于化学变化在生活中的应用？",
    "options": ["用冰箱冷藏食物", "用酵母发酵面团", "用风扇降温", "用筛子分离谷物"],
    "answer": 1,
    "explanation": "发酵过程中酵母将糖转化为酒精和二氧化碳，是化学变化。"
  },
  {
    "id": 774,
    "type": "choice",
    "text": "在日食观测中，下列做法正确的是？",
    "options": ["直接用肉眼观看", "用墨镜观看", "用专业日食眼镜", "用普通望远镜观看"],
    "answer": 2,
    "explanation": "直视太阳会损伤眼睛，必须使用专用防护眼镜。"
  },
  {
    "id": 775,
    "type": "choice",
    "text": "蕨类植物属于？",
    "options": ["藻类植物", "苔藓植物", "蕨类植物", "种子植物"],
    "answer": 2,
    "explanation": "蕨类植物是孢子植物，不开花不结种子。"
  },
  {
    "id": 776,
    "type": "choice",
    "text": "下列哪项是蕨类植物的主要繁殖方式？",
    "options": ["种子", "孢子", "根茎", "嫁接"],
    "answer": 1,
    "explanation": "蕨类植物通过孢子进行繁殖。"
  },
  {
    "id": 777,
    "type": "choice",
    "text": "人体在紧张时分泌的肾上腺素主要作用是？",
    "options": ["促进消化", "放松肌肉", "提高心率", "降低血压"],
    "answer": 2,
    "explanation": "肾上腺素使心率加快、血压升高，为应激反应做准备。"
  },
  {
    "id": 778,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["水结冰", "衣服晒干", "铁生锈", "玻璃破碎"],
    "answer": 2,
    "explanation": "铁生锈生成铁锈（氧化铁），是化学变化。"
  },
  {
    "id": 779,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["食物消化", "木材燃烧", "轮胎爆裂", "铁生锈"],
    "answer": 2,
    "explanation": "轮胎爆裂是物理形变，没有新物质生成。"
  },
  {
    "id": 780,
    "type": "choice",
    "text": "将紫甘蓝汁液滴入肥皂水中，颜色可能变为？",
    "options": ["红色", "绿色", "紫色", "无色"],
    "answer": 1,
    "explanation": "肥皂水呈碱性，紫甘蓝遇碱变绿或蓝。"
  },
  {
    "id": 781,
    "type": "choice",
    "text": "下列哪种气体不支持燃烧？",
    "options": ["氧气", "氢气", "二氧化碳", "甲烷"],
    "answer": 2,
    "explanation": "二氧化碳本身不燃烧也不支持燃烧。"
  },
  {
    "id": 782,
    "type": "choice",
    "text": "小苏打和白醋混合后，把产生的气体通入澄清石灰水，现象是？",
    "options": ["变浑浊", "变红色", "变蓝色", "无变化"],
    "answer": 0,
    "explanation": "二氧化碳使澄清石灰水变浑浊（生成碳酸钙沉淀）。"
  },
  {
    "id": 783,
    "type": "choice",
    "text": "下列哪项是化学变化中常伴随的现象？",
    "options": ["颜色变化", "沉淀产生", "气体放出", "以上都是"],
    "answer": 3,
    "explanation": "化学变化常伴随颜色、状态、气味、热量等变化。"
  },
  {
    "id": 784,
    "type": "choice",
    "text": "下列哪项变化属于缓慢氧化？",
    "options": ["汽油燃烧", "电灯发光", "铁器生锈", "火药爆炸"],
    "answer": 2,
    "explanation": "铁生锈是缓慢氧化，不易察觉放热。"
  },
  {
    "id": 785,
    "type": "choice",
    "text": "下列哪项不是化学变化？",
    "options": ["酒精挥发", "酒精燃烧", "米饭变馊", "火药爆炸"],
    "answer": 0,
    "explanation": "酒精挥发是物理变化，分子间距离增大。"
  },
  {
    "id": 786,
    "type": "choice",
    "text": "下列关于日食的说法，正确的是？",
    "options": ["每月都会发生日食", "日食只能发生在农历十五", "日食是月球挡住了太阳光", "日食时地球在中间"],
    "answer": 2,
    "explanation": "日食是月球运行到日地之间，遮挡阳光形成的。"
  },
  {
    "id": 787,
    "type": "choice",
    "text": "下列关于月食的说法，正确的是？",
    "options": ["月球在中间", "地球在中间", "太阳在中间", "三者成直角"],
    "answer": 1,
    "explanation": "月食时地球位于太阳和月球之间，月球进入地球影子。"
  },
  {
    "id": 788,
    "type": "choice",
    "text": "太阳系中离地球最近的行星是？",
    "options": ["水星", "金星", "火星", "木星"],
    "answer": 1,
    "explanation": "金星是距离地球最近的行星。"
  },
  {
    "id": 789,
    "type": "choice",
    "text": "太阳系中温度最高的行星是？",
    "options": ["水星", "金星", "地球", "火星"],
    "answer": 1,
    "explanation": "金星有浓厚二氧化碳大气，温室效应强烈，表面温度最高。"
  },
  {
    "id": 790,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["葡萄酿酒", "铁水铸成铁锅", "粮食酿酒", "火药爆炸"],
    "answer": 1,
    "explanation": "铁水凝固是物理变化，只是状态改变。"
  },
  {
    "id": 791,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["海水晒盐", "石蜡熔化", "火药爆炸", "玻璃破碎"],
    "answer": 2,
    "explanation": "火药爆炸生成大量新气体，是化学变化。"
  },
  {
    "id": 792,
    "type": "choice",
    "text": "紫甘蓝汁液在酸性溶液中呈？",
    "options": ["红色", "绿色", "蓝色", "黄色"],
    "answer": 0,
    "explanation": "紫甘蓝色素在酸性条件下呈红色。"
  },
  {
    "id": 793,
    "type": "choice",
    "text": "紫甘蓝汁液在碱性溶液中呈？",
    "options": ["红色", "绿色", "紫色", "无色"],
    "answer": 1,
    "explanation": "碱性条件下呈绿色或蓝色。"
  },
  {
    "id": 794,
    "type": "choice",
    "text": "下列物质中，能和白醋反应产生气体的是？",
    "options": ["铜片", "铁钉", "鸡蛋壳", "木炭"],
    "answer": 2,
    "explanation": "鸡蛋壳含碳酸钙，与酸反应生成二氧化碳。"
  },
  {
    "id": 795,
    "type": "choice",
    "text": "下列哪项不属于化学变化？",
    "options": ["食物腐败", "铁生锈", "水蒸发", "纸张燃烧"],
    "answer": 2,
    "explanation": "水蒸发是物理变化。"
  },
  {
    "id": 796,
    "type": "choice",
    "text": "下列哪项属于化学变化？",
    "options": ["冰融化成水", "铁块变成铁水", "铜生成铜绿", "玻璃破碎"],
    "answer": 2,
    "explanation": "铜生铜绿（碱式碳酸铜）是化学变化。"
  },
  {
    "id": 797,
    "type": "choice",
    "text": "日食现象可以证明？",
    "options": ["月球是光源", "地球是球体", "月球绕地球公转", "太阳绕地球公转"],
    "answer": 2,
    "explanation": "日食是由于月球公转到日地之间形成的。"
  },
  {
    "id": 798,
    "type": "choice",
    "text": "在化学变化中，通常不会出现的现象是？",
    "options": ["温度变化", "生成沉淀", "原子种类改变", "颜色变化"],
    "answer": 2,
    "explanation": "化学变化中原子种类不变，只是重新组合。"
  },
  {
    "id": 799,
    "type": "choice",
    "text": "下列哪项变化是放热反应？",
    "options": ["小苏打和白醋反应", "光合作用", "铁生锈", "冰块融化"],
    "answer": 2,
    "explanation": "铁生锈是缓慢放热反应。"
  },
  {
    "id": 800,
    "type": "choice",
    "text": "下列哪项变化是吸热反应？",
    "options": ["小苏打和白醋反应", "蜡烛燃烧", "铁生锈", "火药爆炸"],
    "answer": 0,
    "explanation": "该反应吸热，容器外壁变冷。"
  },
  {
    "id": 801,
    "type": "choice",
    "text": "蕨类植物比苔藓植物更适应陆地环境，主要原因是？",
    "options": ["有真正的根", "有输导组织", "能产生孢子", "以上都是"],
    "answer": 3,
    "explanation": "蕨类有根、茎、叶和输导组织，更适应陆地。"
  },
  {
    "id": 802,
    "type": "choice",
    "text": "下列成语中，涉及化学变化的是？",
    "options": ["磨杵成针", "积叶成书", "火上浇油", "水中捞月"],
    "answer": 2,
    "explanation": "火上浇油涉及燃烧反应。"
  },
  {
    "id": 803,
    "type": "choice",
    "text": "下列成语中，只涉及物理变化的是？",
    "options": ["烟花易冷", "花香四溢", "蜡炬成灰", "百炼成钢"],
    "answer": 1,
    "explanation": "花香四溢是分子扩散，物理变化。"
  },
  {
    "id": 804,
    "type": "choice",
    "text": "人体情绪变化与化学物质有关，其中内啡肽的作用是？",
    "options": ["兴奋", "镇痛", "紧张", "恐惧"],
    "answer": 1,
    "explanation": "内啡肽有镇痛和欣快作用，类似天然吗啡。"
  },
  {
    "id": 805,
    "type": "choice",
    "text": "下列哪项是化学变化在医疗中的应用？",
    "options": ["用酒精擦身降温", "用X光透视", "用药物杀菌", "用纱布包扎"],
    "answer": 2,
    "explanation": "药物杀菌通过化学反应破坏细菌结构。"
  },
  {
    "id": 806,
    "type": "choice",
    "text": "将二氧化碳通入紫色石蕊试液中，颜色变为？",
    "options": ["红色", "蓝色", "紫色", "无色"],
    "answer": 0,
    "explanation": "二氧化碳与水生成碳酸，使石蕊变红。"
  },
  {
    "id": 807,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["烧制陶瓷", "榨取果汁", "酿造酱油", "炼铁"],
    "answer": 1,
    "explanation": "榨取果汁是物理分离过程。"
  },
  {
    "id": 808,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["海水晒盐", "石油分馏", "煤的干馏", "水结冰"],
    "answer": 2,
    "explanation": "煤的干馏生成煤焦油、焦炭等新物质。"
  },
  {
    "id": 809,
    "type": "choice",
    "text": "下列哪项属于化学变化？",
    "options": ["石蜡熔化", "石蜡燃烧", "石蜡挥发", "石蜡凝固"],
    "answer": 1,
    "explanation": "石蜡燃烧生成水和二氧化碳。"
  },
  {
    "id": 810,
    "type": "choice",
    "text": "紫甘蓝汁液在柠檬汁中会变成？",
    "options": ["红色", "绿色", "蓝色", "黄色"],
    "answer": 0,
    "explanation": "柠檬汁含柠檬酸，呈酸性。"
  },
  {
    "id": 811,
    "type": "choice",
    "text": "小苏打和白醋混合后，剩余液体中主要含有？",
    "options": ["醋酸钠", "碳酸钠", "氯化钠", "氢氧化钠"],
    "answer": 0,
    "explanation": "反应生成醋酸钠、水和二氧化碳。"
  },
  {
    "id": 812,
    "type": "choice",
    "text": "下列哪项是化学变化的主要特征？",
    "options": ["状态改变", "形状改变", "生成新物质", "体积改变"],
    "answer": 2,
    "explanation": "有无新物质生成是判断化学变化的根本依据。"
  },
  {
    "id": 813,
    "type": "choice",
    "text": "铁生锈是？",
    "options": ["剧烈氧化", "缓慢氧化", "物理变化", "分解反应"],
    "answer": 1,
    "explanation": "铁生锈是缓慢氧化，不易察觉放热。"
  },
  {
    "id": 814,
    "type": "choice",
    "text": "下列哪项是防止铁生锈的方法？",
    "options": ["涂油漆", "放在潮湿处", "与酸接触", "加热"],
    "answer": 0,
    "explanation": "涂油漆隔绝空气和水，防止生锈。"
  },
  {
    "id": 815,
    "type": "choice",
    "text": "下列哪项变化是化学变化？",
    "options": ["冰块融化", "衣服晒干", "铁器生锈", "玻璃破碎"],
    "answer": 2,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 816,
    "type": "choice",
    "text": "下列哪项变化是物理变化？",
    "options": ["食物腐败", "植物光合作用", "水结成冰", "火药爆炸"],
    "answer": 2,
    "explanation": "水结冰是状态变化。"
  },
  {
    "id": 817,
    "type": "choice",
    "text": "下列哪项是化学变化中放热的现象？",
    "options": ["燃烧", "铁生锈", "中和反应", "以上都是"],
    "answer": 3,
    "explanation": "燃烧、缓慢氧化、中和反应通常放热。"
  },
  {
    "id": 818,
    "type": "choice",
    "text": "人体情绪变化中，哪种物质与压力反应最直接相关？",
    "options": ["多巴胺", "肾上腺素", "血清素", "胰岛素"],
    "answer": 1,
    "explanation": "肾上腺素在应激时分泌，应对压力。"
  },
  {
    "id": 819,
    "type": "choice",
    "text": "蕨类植物一般生活在？",
    "options": ["干旱环境", "潮湿阴凉环境", "强光环境", "盐碱地"],
    "answer": 1,
    "explanation": "蕨类植物喜欢阴湿环境。"
  },
  {
    "id": 820,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["汽油挥发", "汽油燃烧", "食物消化", "铁生锈"],
    "answer": 0,
    "explanation": "汽油挥发是分子扩散，物理变化。"
  },
  {
    "id": 821,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["轮胎爆裂", "铁水铸锅", "火药爆炸", "玻璃切割"],
    "answer": 2,
    "explanation": "火药爆炸生成新气体。"
  },
  {
    "id": 822,
    "type": "choice",
    "text": "日食发生时，下列哪项正确？",
    "options": ["月球在地球影子中", "地球在月球影子中", "太阳在地球影子中", "太阳在月球影子中"],
    "answer": 1,
    "explanation": "日食时地球进入月球的影子。"
  },
  {
    "id": 823,
    "type": "choice",
    "text": "下列哪项不是日食形成的条件？",
    "options": ["月球在初一", "太阳、月球、地球几乎成一直线", "月球在地球和太阳之间", "地球在月球和太阳之间"],
    "answer": 3,
    "explanation": "日食时月球在中间，月食时地球在中间。"
  },
  {
    "id": 824,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["酒精挥发", "酒精燃烧", "水蒸发", "糖溶于水"],
    "answer": 1,
    "explanation": "酒精燃烧生成二氧化碳和水。"
  },
  {
    "id": 825,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["酿酒", "制醋", "榨油", "炼钢"],
    "answer": 2,
    "explanation": "榨油是物理压榨过程。"
  },
  {
    "id": 826,
    "type": "choice",
    "text": "将紫甘蓝汁液滴入白醋中，颜色变为？",
    "options": ["红", "绿", "蓝", "黄"],
    "answer": 0,
    "explanation": "白醋酸性，变红。"
  },
  {
    "id": 827,
    "type": "choice",
    "text": "将紫甘蓝汁液滴入小苏打溶液中，颜色可能变为？",
    "options": ["红", "绿", "紫", "无色"],
    "answer": 1,
    "explanation": "小苏打溶液呈弱碱性。"
  },
  {
    "id": 828,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["海水晒盐", "铁水铸锅", "燃放烟花", "玻璃破碎"],
    "answer": 2,
    "explanation": "烟花燃烧是化学变化。"
  },
  {
    "id": 829,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["食物腐败", "铁生锈", "水沸腾", "木材燃烧"],
    "answer": 2,
    "explanation": "水沸腾是状态变化。"
  },
  {
    "id": 830,
    "type": "choice",
    "text": "在日食时，以下哪项安全观测方法正确？",
    "options": ["直接用望远镜看", "戴普通墨镜", "用X光胶片看", "用专业日食眼镜"],
    "answer": 3,
    "explanation": "专用眼镜能有效滤除紫外线、红外线。"
  },
  {
    "id": 831,
    "type": "choice",
    "text": "太阳系中自转方向与其他行星相反的是？",
    "options": ["金星", "水星", "火星", "木星"],
    "answer": 0,
    "explanation": "金星自东向西自转。"
  },
  {
    "id": 832,
    "type": "choice",
    "text": "下列哪项变化属于化学变化？",
    "options": ["冰块融化", "玻璃破碎", "铁器生锈", "酒精挥发"],
    "answer": 2,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 833,
    "type": "choice",
    "text": "下列哪项变化属于物理变化？",
    "options": ["纸张燃烧", "铁生锈", "水结冰", "食物腐败"],
    "answer": 2,
    "explanation": "水结冰是物理变化。"
  },
  {
    "id": 834,
    "type": "choice",
    "text": "紫甘蓝汁液在肥皂水中呈绿色，说明肥皂水呈？",
    "options": ["酸性", "碱性", "中性", "无法判断"],
    "answer": 1,
    "explanation": "紫甘蓝遇碱变绿。"
  },
  {
    "id": 835,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["瓷器破碎", "铁杵磨针", "火药爆炸", "水结冰"],
    "answer": 2,
    "explanation": "火药爆炸生成新气体。"
  },
  {
    "id": 836,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["粮食酿酒", "蜡烛燃烧", "铁水铸成铁锅", "铁生锈"],
    "answer": 2,
    "explanation": "铁水凝固是物理变化。"
  },
  {
    "id": 837,
    "type": "choice",
    "text": "蕨类植物的叶背面褐色斑点主要作用是？",
    "options": ["吸收水分", "进行光合作用", "释放孢子", "保护叶片"],
    "answer": 2,
    "explanation": "孢子囊群释放孢子进行繁殖。"
  },
  {
    "id": 838,
    "type": "choice",
    "text": "下列哪种植物属于蕨类植物？",
    "options": ["松树", "葫芦藓", "铁线蕨", "荷花"],
    "answer": 2,
    "explanation": "铁线蕨是常见蕨类植物。"
  },
  {
    "id": 839,
    "type": "choice",
    "text": "人体分泌多巴胺的主要部位是？",
    "options": ["肝脏", "大脑", "肾脏", "心脏"],
    "answer": 1,
    "explanation": "多巴胺是中枢神经系统的神经递质。"
  },
  {
    "id": 840,
    "type": "choice",
    "text": "下列哪项变化是化学变化？",
    "options": ["衣服晒干", "水烧开", "铁生锈", "玻璃破碎"],
    "answer": 2,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 841,
    "type": "choice",
    "text": "下列哪项变化是物理变化？",
    "options": ["米饭变馊", "苹果腐烂", "冰块融化", "火药爆炸"],
    "answer": 2,
    "explanation": "冰块融化是状态变化。"
  },
  {
    "id": 842,
    "type": "choice",
    "text": "小苏打和白醋反应属于什么反应类型？",
    "options": ["化合反应", "分解反应", "中和反应", "置换反应"],
    "answer": 2,
    "explanation": "碳酸氢钠与醋酸反应是酸碱中和。"
  },
  {
    "id": 843,
    "type": "choice",
    "text": "下列哪项是中和反应？",
    "options": ["铁生锈", "燃烧", "盐酸与氢氧化钠反应", "光合作用"],
    "answer": 2,
    "explanation": "酸和碱反应生成盐和水，是中和反应。"
  },
  {
    "id": 844,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["葡萄酿酒", "湿衣服晾干", "铁生锈", "纸张燃烧"],
    "answer": 1,
    "explanation": "湿衣服晾干是水蒸发，物理变化。"
  },
  {
    "id": 845,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["水结冰", "石蜡熔化", "铜生锈", "酒精挥发"],
    "answer": 2,
    "explanation": "铜生锈生成铜绿。"
  },
  {
    "id": 846,
    "type": "choice",
    "text": "日食发生时，日、地、月三者的位置关系是？",
    "options": ["日-地-月", "地-日-月", "日-月-地", "月-日-地"],
    "answer": 2,
    "explanation": "太阳-月球-地球成一线。"
  },
  {
    "id": 847,
    "type": "choice",
    "text": "太阳系中最大的行星是？",
    "options": ["土星", "木星", "天王星", "海王星"],
    "answer": 1,
    "explanation": "木星体积最大。"
  },
  {
    "id": 848,
    "type": "choice",
    "text": "下列哪项是缓慢氧化的例子？",
    "options": ["木柴燃烧", "火药爆炸", "铁生锈", "天然气燃烧"],
    "answer": 2,
    "explanation": "铁生锈是缓慢氧化。"
  },
  {
    "id": 849,
    "type": "choice",
    "text": "下列哪项是剧烈氧化的例子？",
    "options": ["铁生锈", "呼吸作用", "橡胶老化", "汽油燃烧"],
    "answer": 3,
    "explanation": "汽油燃烧发光发热，是剧烈氧化。"
  },
  {
    "id": 850,
    "type": "choice",
    "text": "紫甘蓝汁液在纯水中通常呈什么颜色？",
    "options": ["红色", "绿色", "紫色", "蓝色"],
    "answer": 2,
    "explanation": "中性条件下呈紫色或蓝紫色。"
  },
  {
    "id": 851,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["海水晒盐", "石油分馏", "煤燃烧", "水结冰"],
    "answer": 2,
    "explanation": "煤燃烧生成二氧化碳等。"
  },
  {
    "id": 852,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["火药爆炸", "铁生锈", "酒精挥发", "食物消化"],
    "answer": 2,
    "explanation": "酒精挥发是物理变化。"
  },
  {
    "id": 853,
    "type": "choice",
    "text": "蕨类植物比苔藓植物高大的主要原因是？",
    "options": ["有真正的根", "有输导组织", "有叶", "以上都是"],
    "answer": 3,
    "explanation": "根和输导组织有利于吸收和运输水分。"
  },
  {
    "id": 854,
    "type": "choice",
    "text": "下列哪项不是蕨类植物的特征？",
    "options": ["有根茎叶", "用种子繁殖", "生活在阴湿环境", "有输导组织"],
    "answer": 1,
    "explanation": "蕨类用孢子繁殖，不是种子。"
  },
  {
    "id": 855,
    "type": "choice",
    "text": "人体在快乐时分泌的多巴胺属于？",
    "options": ["激素", "酶", "神经递质", "抗体"],
    "answer": 2,
    "explanation": "多巴胺是神经递质，也可作为激素。"
  },
  {
    "id": 856,
    "type": "choice",
    "text": "下列哪项变化是化学变化？",
    "options": ["水蒸发", "铁水铸锅", "铁生锈", "玻璃切割"],
    "answer": 2,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 857,
    "type": "choice",
    "text": "下列哪项变化是物理变化？",
    "options": ["蜡烛燃烧", "食物腐败", "糖溶于水", "铁生锈"],
    "answer": 2,
    "explanation": "糖溶于水是物理变化。"
  },
  {
    "id": 858,
    "type": "choice",
    "text": "小苏打和白醋反应产生的气体能使？",
    "options": ["带火星木条复燃", "澄清石灰水变浑浊", "紫色石蕊变蓝", "酚酞变红"],
    "answer": 1,
    "explanation": "二氧化碳使石灰水变浑浊。"
  },
  {
    "id": 859,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["玻璃破碎", "铁杵磨针", "火药爆炸", "水结冰"],
    "answer": 2,
    "explanation": "火药爆炸生成新物质。"
  },
  {
    "id": 860,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["纸张燃烧", "铁生锈", "酒精挥发", "食物腐败"],
    "answer": 2,
    "explanation": "酒精挥发是物理变化。"
  },
  {
    "id": 861,
    "type": "choice",
    "text": "日食的类型不包括？",
    "options": ["日全食", "日环食", "日偏食", "日晕"],
    "answer": 3,
    "explanation": "日晕是大气光学现象，不是日食。"
  },
  {
    "id": 862,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["水烧开", "冰融化", "铁生锈", "玻璃破碎"],
    "answer": 2,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 863,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["食物消化", "铁生锈", "水结冰", "纸张燃烧"],
    "answer": 2,
    "explanation": "水结冰是状态变化。"
  },
  {
    "id": 864,
    "type": "choice",
    "text": "紫甘蓝汁液在酸性条件下呈红色，这是利用了它的什么性质？",
    "options": ["酸碱指示性", "氧化性", "还原性", "挥发性"],
    "answer": 0,
    "explanation": "紫甘蓝色素随pH变化颜色不同，可作指示剂。"
  },
  {
    "id": 865,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["海水晒盐", "石油分馏", "煤的干馏", "水结冰"],
    "answer": 2,
    "explanation": "煤干馏生成新物质。"
  },
  {
    "id": 866,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["燃放烟花", "铁生锈", "酒精挥发", "食物腐败"],
    "answer": 2,
    "explanation": "酒精挥发是物理变化。"
  },
  {
    "id": 867,
    "type": "choice",
    "text": "人体应激反应时，肾上腺髓质分泌的激素是？",
    "options": ["胰岛素", "生长激素", "肾上腺素", "甲状腺素"],
    "answer": 2,
    "explanation": "肾上腺素在应激时分泌。"
  },
  {
    "id": 868,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["冰块融化", "铁水铸锅", "铜生锈", "酒精挥发"],
    "answer": 2,
    "explanation": "铜生锈生成铜绿。"
  },
  {
    "id": 869,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["粮食酿酒", "蜡烛燃烧", "铁生锈", "水沸腾"],
    "answer": 3,
    "explanation": "水沸腾是状态变化。"
  },
  {
    "id": 870,
    "type": "choice",
    "text": "小苏打和白醋反应属于什么反应？",
    "options": ["化合反应", "分解反应", "置换反应", "复分解反应"],
    "answer": 3,
    "explanation": "两种化合物交换成分，是复分解反应。"
  },
  {
    "id": 871,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["水结冰", "酒精挥发", "铁生锈", "玻璃破碎"],
    "answer": 2,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 872,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["食物腐败", "铁生锈", "汽油燃烧", "汽油挥发"],
    "answer": 3,
    "explanation": "汽油挥发是物理变化。"
  },
  {
    "id": 873,
    "type": "choice",
    "text": "蕨类植物的孢子囊群一般位于叶的？",
    "options": ["正面", "背面", "叶尖", "叶柄"],
    "answer": 1,
    "explanation": "蕨类孢子囊群多生于叶背面。"
  },
  {
    "id": 874,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["水蒸发", "铁生锈", "石蜡熔化", "玻璃破碎"],
    "answer": 1,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 875,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["火药爆炸", "铁生锈", "水结冰", "食物消化"],
    "answer": 2,
    "explanation": "水结冰是状态变化。"
  },
  {
    "id": 876,
    "type": "choice",
    "text": "将二氧化碳通入紫色石蕊试液中，石蕊变红的原因是？",
    "options": ["二氧化碳是酸", "二氧化碳与水生成碳酸", "二氧化碳使石蕊氧化", "二氧化碳使石蕊还原"],
    "answer": 1,
    "explanation": "CO₂ + H₂O → H₂CO₃，碳酸使石蕊变红。"
  },
  {
    "id": 877,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["海水晒盐", "石油分馏", "煤燃烧", "水结冰"],
    "answer": 2,
    "explanation": "煤燃烧生成二氧化碳。"
  },
  {
    "id": 878,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["铁生锈", "食物腐败", "酒精挥发", "纸张燃烧"],
    "answer": 2,
    "explanation": "酒精挥发是物理变化。"
  },
  {
    "id": 879,
    "type": "choice",
    "text": "小苏打的化学式是？",
    "options": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
    "answer": 1,
    "explanation": "小苏打是碳酸氢钠。"
  },
  {
    "id": 880,
    "type": "choice",
    "text": "白醋的pH值最可能的是？",
    "options": ["2-3", "7", "8-9", "12-13"],
    "answer": 0,
    "explanation": "白醋含醋酸，呈酸性，pH约2-3。"
  },
  {
    "id": 881,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["水结冰", "铁生锈", "酒精挥发", "玻璃破碎"],
    "answer": 1,
    "explanation": "铁生锈生成新物质。"
  },
  {
    "id": 882,
    "type": "choice",
    "text": "下列哪项是物理变化？",
    "options": ["火药爆炸", "铁生锈", "水沸腾", "食物腐败"],
    "answer": 2,
    "explanation": "水沸腾是状态变化。"
  },
  {
    "id": 883,
    "type": "choice",
    "text": "日食发生时，月球的影子落在地球上，这可以证明？",
    "options": ["月球是光源", "光沿直线传播", "地球是球体", "太阳是球体"],
    "answer": 1,
    "explanation": "影子是光沿直线传播形成的。"
  },
  {
    "id": 884,
    "type": "choice",
    "text": "下列哪项是化学变化？",
    "options": ["冰块融化", "铁水铸锅", "铜生锈", "酒精挥发"],
    "answer": 2,
    "explanation": "铜生锈生成碱式碳酸铜，是化学变化。"
  },

  {
    "id": 885,
    "type": "judge",
    "text": "三角形框架比四边形框架更稳定。",
    "answer": "对",
    "explanation": "三角形具有稳定性，受力后不易变形，广泛应用于建筑结构中。"
  },
  {
    "id": 886,
    "type": "judge",
    "text": "太阳系中，木星的体积和质量都是最大的。",
    "answer": "对",
    "explanation": "木星是太阳系中体积和质量最大的行星，质量是其他行星总和的两倍多。"
  },
  {
    "id": 887,
    "type": "judge",
    "text": "日食发生时，月球位于地球和太阳之间。",
    "answer": "对",
    "explanation": "日食时月球遮挡太阳光，三者成一直线，月球在中间。"
  },
  {
    "id": 888,
    "type": "judge",
    "text": "所有化学变化都会发光发热。",
    "answer": "错",
    "explanation": "有些化学变化吸热（如小苏打与白醋反应），不一定发光。"
  },
  {
    "id": 889,
    "type": "judge",
    "text": "化石可以帮助我们了解古生物的生活环境和演化历史。",
    "answer": "对",
    "explanation": "化石提供了古生物的形态、生态和演化信息。"
  },
  {
    "id": 890,
    "type": "judge",
    "text": "框架结构的建筑抗震性能较差。",
    "answer": "错",
    "explanation": "框架结构整体性好、刚度适中，具有良好的抗震性能。"
  },
  {
    "id": 891,
    "type": "judge",
    "text": "埃菲尔铁塔在施工过程中进行了多次设计修改。",
    "answer": "错",
    "explanation": "资料显示埃菲尔铁塔完全依照设计施工，没有任何改动。"
  },
  {
    "id": 892,
    "type": "judge",
    "text": "植物光合作用属于物理变化。",
    "answer": "错",
    "explanation": "光合作用将二氧化碳和水转化为葡萄糖和氧气，生成新物质，属于化学变化。"
  },
  {
    "id": 893,
    "type": "judge",
    "text": "银河系的直径约为10万光年。",
    "answer": "对",
    "explanation": "银河系银盘直径约10万光年。"
  },
  {
    "id": 894,
    "type": "judge",
    "text": "保护生物多样性只需要建立自然保护区即可。",
    "answer": "错",
    "explanation": "保护生物多样性需要多种措施，包括立法、教育、减少污染等。"
  },
  {
    "id": 895,
    "type": "judge",
    "text": "小苏打和白醋混合产生的气体能使澄清石灰水变浑浊。",
    "answer": "对",
    "explanation": "反应生成二氧化碳，二氧化碳使澄清石灰水变浑浊。"
  },
  {
    "id": 896,
    "type": "judge",
    "text": "所有昆虫都有三对足。",
    "answer": "对",
    "explanation": "昆虫的共同特征是身体分头胸腹，有三对足（六条腿）。"
  },
  {
    "id": 897,
    "type": "judge",
    "text": "月球是地球的天然卫星，它本身能发光。",
    "answer": "错",
    "explanation": "月球是卫星，本身不发光，反射太阳光。"
  },
  {
    "id": 898,
    "type": "judge",
    "text": "工程建设的成功完全取决于材料的好坏。",
    "answer": "错",
    "explanation": "工程建设需要设计、技术、材料、施工等多方面因素配合。"
  },
  {
    "id": 899,
    "type": "judge",
    "text": "可再生资源包括太阳能、风能、水能等。",
    "answer": "对",
    "explanation": "可再生资源在短时间内可自然恢复，如太阳能、风能、水能。"
  },
  {
    "id": 900,
    "type": "choice",
    "text": "煤的形成主要来自？",
    "options": ["远古植物", "岩浆", "岩石", "微生物"],
    "answer": 0,
    "explanation": "煤是由远古植物在地层中经过复杂化学变化形成的。"
  },
  {
    "id": 901,
    "type": "choice",
    "text": "科学课堂中我们做了很多实验，有时出现假设与结论不一样，我们可以？",
    "options": ["少数服从多数", "重复实验", "只看假设", "只看结论"],
    "answer": 1,
    "explanation": "科学实验需要重复验证，以排除偶然误差。"
  },
  {
    "id": 902,
    "type": "choice",
    "text": "专业公司制订'校园滑梯通道竞标标书'，竞标要点是项目？",
    "options": ["安全和材料", "安全和成本", "成本和工期", "盈利和工期"],
    "answer": 1,
    "explanation": "工程竞标通常优先考虑安全和成本。"
  },
  {
    "id": 903,
    "type": "choice",
    "text": "设计是建造滑梯通道的重要环节，要考虑的条件包括？\n① 滑梯高度 ② 坡度 ③ 承重 ④ 材料 ⑤ 边缘圆角 ⑥ 美观",
    "options": ["①②③④", "①②④⑤", "③④⑤⑥", "①②③④⑤⑥"],
    "answer": 3,
    "explanation": "设计需全面考虑功能、安全、美观等多方面因素。"
  },
  {
    "id": 904,
    "type": "choice",
    "text": "一份优秀的设计图应该是？",
    "options": ["图形和数字的结合", "文字和数字的结合", "数字和标识的结合", "图形、文字、数字及标识的结合"],
    "answer": 3,
    "explanation": "优秀设计图应信息完整，便于施工。"
  },
  {
    "id": 905,
    "type": "choice",
    "text": "专业公司建造一座滑梯通道，一般过程是？",
    "options": ["设计→制作→测试→评估和改进", "制作→设计→评估和改进→测试", "设计→测试→评估和改进→制作", "测试→评估和改进→设计→制作"],
    "answer": 0,
    "explanation": "工程建造遵循'设计-制作-测试-改进'的流程。"
  },
  {
    "id": 906,
    "type": "choice",
    "text": "在实际工程建设的过程中，如果发现原先的设计有问题，应该？",
    "options": ["严格按照设计图建造", "直接改建", "合理修改设计图，再按图建造", "放弃建造"],
    "answer": 2,
    "explanation": "发现问题应科学修改设计，确保安全和功能。"
  },
  {
    "id": 907,
    "type": "choice",
    "text": "滑梯的内壁都很光滑，这是为了？",
    "options": ["增大摩擦力", "减小摩擦力", "增加稳定性", "节约材料"],
    "answer": 1,
    "explanation": "光滑表面减小摩擦力，便于下滑。"
  },
  {
    "id": 908,
    "type": "choice",
    "text": "封闭式管筒状滑梯与开放式斜坡状滑梯相比，最大的优势是？",
    "options": ["使用更安全", "材料更节省", "造型更美观", "承重更强大"],
    "answer": 0,
    "explanation": "封闭式滑梯可以防止小朋友跌落，更安全。"
  },
  {
    "id": 909,
    "type": "choice",
    "text": "我国有很多大型工程，例如'嫦娥'工程、南水北调工程、港珠澳大桥等，这些工程从立项到完工，都需要大量先进技术作支撑。下列说法错误的是？",
    "options": ["工程建设依赖于科学技术的发展", "工程建设能促进科学技术的发展", "科学技术对工程建设有重大影响", "科学技术与工程建设之间没有必然联系"],
    "answer": 3,
    "explanation": "科学技术是工程建设的基础和动力，两者关系密切。"
  },
  {
    "id": 910,
    "type": "choice",
    "text": "下列哪项属于保护生物多样性的措施？",
    "options": ["建立自然保护区", "引进外来物种", "砍伐原始森林", "随意排放污水"],
    "answer": 0,
    "explanation": "自然保护区是保护生物多样性的重要手段；引进外来物种可能破坏生态。"
  },
  {
    "id": 911,
    "type": "choice",
    "text": "下列哪种行为会导致生物多样性减少？",
    "options": ["垃圾分类", "节约用水", "过度捕捞", "植树造林"],
    "answer": 2,
    "explanation": "过度捕捞会使海洋生物资源枯竭，破坏多样性。"
  },
  {
    "id": 912,
    "type": "choice",
    "text": "下列物质的变化，与蓝莓酱腐败相似，有新物质产生的是？",
    "options": ["水结冰", "铁生锈", "玻璃破碎", "酒精挥发"],
    "answer": 1,
    "explanation": "铁生锈生成新物质（氧化铁），与腐败同属化学变化。"
  },
  {
    "id": 913,
    "type": "choice",
    "text": "简易灭火器，瓶子里装白色粉末，注射器里装无色液体，两者混合后要能灭火。那么原料应选择？",
    "options": ["小苏打和白醋", "食盐和水", "白糖和白醋", "食盐和白醋"],
    "answer": 0,
    "explanation": "小苏打与白醋反应生成二氧化碳，二氧化碳能灭火。"
  },
  {
    "id": 914,
    "type": "choice",
    "text": "简易灭火器，瓶子里装白色粉末，注射器里装无色液体，两者混合后要能灭火。这两种物质充分混合后，可以观察到的现象是？",
    "options": ["没有任何现象", "产生蓝色沉淀物", "产生大量气泡", "白色粉末和无色液体全部变成气体"],
    "answer": 2,
    "explanation": "小苏打与白醋反应产生大量二氧化碳气泡。"
  },
  {
    "id": 915,
    "type": "choice",
    "text": "简易灭火器产生的气体能把蜡烛浇灭，说明这种气体？",
    "options": ["比空气轻，支持燃烧", "比空气重，不支持燃烧", "比空气重，支持燃烧", "比空气轻，不支持燃烧"],
    "answer": 1,
    "explanation": "二氧化碳密度比空气大，能覆盖火焰，且不支持燃烧。"
  },
  {
    "id": 916,
    "type": "choice",
    "text": "实验中产生的气体被称为温室气体，能使地球表面热起来，为控制全球变暖，我们要大力推广可再生资源，以下属于可再生资源的是？",
    "options": ["石油和太阳能", "天然气和煤", "石油和水能", "太阳能和风能"],
    "answer": 3,
    "explanation": "太阳能和风能是可再生资源；石油、天然气、煤是不可再生。"
  },
  {
    "id": 917,
    "type": "choice",
    "text": "下列哪项属于物理变化？",
    "options": ["食物消化", "蜡烛燃烧", "水蒸发", "铁生锈"],
    "answer": 2,
    "explanation": "水蒸发是状态变化，没有新物质生成。"
  },
  {
    "id": 918,
    "type": "choice",
    "text": "下列哪项属于化学变化？",
    "options": ["玻璃破碎", "铁水铸锅", "火药爆炸", "酒精挥发"],
    "answer": 2,
    "explanation": "火药爆炸生成新气体，是化学变化。"
  },
  {
    "id": 919,
    "type": "choice",
    "text": "框架结构建筑的主要优点是？",
    "options": ["节省材料、抗震性好", "施工时间长", "保温性能好", "隔音效果好"],
    "answer": 0,
    "explanation": "框架结构自重轻、空间灵活、抗震性好。"
  },
  {
    "id": 920,
    "type": "choice",
    "text": "埃菲尔铁塔在施工中完全依照设计进行，主要原因是？",
    "options": ["工程庞大不易改动", "设计合理无须改动", "技术有限无法改动", "已有设计不能改动"],
    "answer": 1,
    "explanation": "设计精确合理，计算充分，因此无需改动。"
  },
  {
    "id": 921,
    "type": "choice",
    "text": "蚜虫与蚂蚁之间的关系属于？",
    "options": ["寄生", "竞争", "共生", "捕食"],
    "answer": 2,
    "explanation": "蚂蚁保护蚜虫，蚜虫提供蜜露，双方互利共生。"
  },
  {
    "id": 922,
    "type": "choice",
    "text": "下列哪种分类方法属于二歧分类法？",
    "options": ["按植物茎的木质化程度分木本和草本", "按植物颜色分类", "按植物高矮分类", "按植物生长速度分类"],
    "answer": 0,
    "explanation": "二歧分类法每次按一个特征分成两类，木质与草质是典型二歧分类。"
  },
  {
    "id": 923,
    "type": "choice",
    "text": "嫦娥五号任务实现了中国航天的哪项首次？",
    "options": ["载人登月", "月球背面软着陆", "月球采样返回", "月球轨道交会对接"],
    "answer": 2,
    "explanation": "嫦娥五号完成了月球采样返回任务。"
  },
  {
    "id": 924,
    "type": "choice",
    "text": "太阳系中离太阳最近的行星是？",
    "options": ["水星", "金星", "地球", "火星"],
    "answer": 0,
    "explanation": "水星是距离太阳最近的行星。"
  },
  {
    "id": 925,
    "type": "choice",
    "text": "光年是什么单位？",
    "options": ["时间单位", "距离单位", "速度单位", "质量单位"],
    "answer": 1,
    "explanation": "光年指光在一年中走过的距离，是天文学中的距离单位。"
  },
  {
    "id": 926,
    "type": "choice",
    "text": "下列哪种做法不能增强塔台的稳定性？",
    "options": ["上小下大", "上轻下重", "镂空结构", "顶部大而重"],
    "answer": 3,
    "explanation": "顶部大而重会使重心不稳，容易倾倒。"
  },
  {
    "id": 927,
    "type": "choice",
    "text": "下列哪项属于裸子植物？",
    "options": ["桃树", "松树", "水稻", "大豆"],
    "answer": 1,
    "explanation": "松树种子裸露，无果皮包被，属于裸子植物。"
  },
  {
    "id": 928,
    "type": "choice",
    "text": "下列哪项属于哺乳动物？",
    "options": ["企鹅", "鳄鱼", "蝙蝠", "青蛙"],
    "answer": 2,
    "explanation": "蝙蝠胎生哺乳，属于哺乳动物。"
  },
  {
    "id": 929,
    "type": "choice",
    "text": "下列哪项是化石形成的重要条件？",
    "options": ["迅速被沉积物掩埋", "暴露在空气中", "高温熔化", "被动物吞食"],
    "answer": 0,
    "explanation": "迅速掩埋可以防止生物遗体被分解，有利于石化。"
  },
  {
    "id": 930,
    "type": "choice",
    "text": "下列哪项属于可再生能源？",
    "options": ["煤炭", "天然气", "风能", "核燃料"],
    "answer": 2,
    "explanation": "风能可自然再生，属于可再生能源。"
  },
  {
    "id": 931,
    "type": "choice",
    "text": "下列哪项属于化学变化中伴随的现象？",
    "options": ["颜色改变", "产生沉淀", "放出气体", "以上都是"],
    "answer": 3,
    "explanation": "颜色、沉淀、气体等都是化学变化的常见伴随现象。"
  },
  {
    "id": 932,
    "type": "choice",
    "text": "紫甘蓝汁液在酸性溶液中会变成？",
    "options": ["红色", "绿色", "蓝色", "紫色"],
    "answer": 0,
    "explanation": "紫甘蓝中的花青素遇酸变红。"
  },
  {
    "id": 933,
    "type": "choice",
    "text": "小苏打的化学名称是？",
    "options": ["碳酸钠", "碳酸氢钠", "氢氧化钠", "氯化钠"],
    "answer": 1,
    "explanation": "小苏打是碳酸氢钠（NaHCO₃）。"
  },
  {
    "id": 934,
    "type": "choice",
    "text": "下列哪项属于缓慢氧化？",
    "options": ["铁生锈", "汽油燃烧", "火药爆炸", "天然气燃烧"],
    "answer": 0,
    "explanation": "铁生锈是缓慢氧化，不易察觉放热。"
  },
  {
    "id": 935,
    "type": "choice",
    "text": "下列哪项工程属于我国重大航天工程？",
    "options": ["南水北调", "港珠澳大桥", "嫦娥工程", "西气东输"],
    "answer": 2,
    "explanation": "嫦娥工程是我国月球探测工程。"
  },
  {
    "id": 936,
    "type": "choice",
    "text": "下列哪项不是框架结构的优点？",
    "options": ["空间分隔灵活", "抗震性能好", "施工工期长", "节省材料"],
    "answer": 2,
    "explanation": "框架结构可以缩短施工工期，而不是延长。"
  },
  {
    "id": 937,
    "type": "choice",
    "text": "下列哪项是日食发生时的正确观测方法？",
    "options": ["直接用肉眼观看", "戴普通墨镜", "用专业日食眼镜", "用普通望远镜看"],
    "answer": 2,
    "explanation": "专用日食眼镜能有效滤除有害光线，保护眼睛。"
  },
  {
    "id": 938,
    "type": "choice",
    "text": "下列哪项属于遗传现象？",
    "options": ["种瓜得瓜，种豆得豆", "一母生九子，连母十个样", "橘生淮南则为橘，生于淮北则为枳", "龙生九子，各有不同"],
    "answer": 0,
    "explanation": "'种瓜得瓜'体现了亲子代之间的相似性，是遗传。"
  },
  {
    "id": 939,
    "type": "choice",
    "text": "下列哪项属于生物多样性的内涵？",
    "options": ["物种多样性", "遗传多样性", "生态系统多样性", "以上都是"],
    "answer": 3,
    "explanation": "生物多样性包括物种、遗传和生态系统三个层次。"
  },

  {
    "id": 940,
    "type": "choice",
    "text": "下列物品中，具有放大作用的是？",
    "options": ["一块毛玻璃", "装满水的透明球形烧瓶", "厚度为4厘米的云母块", "薄铜片"],
    "answer": 1,
    "explanation": "装满水的球形烧瓶相当于凸透镜，具有放大作用；毛玻璃表面粗糙，云母块和铜片不透光，无放大功能。"
  },
  {
    "id": 941,
    "type": "choice",
    "text": "使用放大镜时，下列说法正确的是？",
    "options": ["放大镜的放大倍数可以无限增大", "放大镜和物体之间的距离改变，放大倍数不变", "放大镜上标注\"10×\"表示放大倍数为10倍", "用高倍放大镜观察同一事物，看到的范围更大"],
    "answer": 2,
    "explanation": "放大镜标注的倍数即放大倍数；放大倍数有限，且随物距变化会改变成像大小；高倍放大镜视野更小。"
  },
  {
    "id": 942,
    "type": "choice",
    "text": "用低倍放大镜和高倍放大镜观察同一片树叶的叶脉，高倍镜下看到的内容会？",
    "options": ["更多、更小", "更少、更大", "更多、更大", "更少、更小"],
    "answer": 1,
    "explanation": "高倍放大镜放大倍数大，视野范围变小，因此看到的局部更大但内容更少。"
  },
  {
    "id": 943,
    "type": "choice",
    "text": "下列哪种观察工具最适合观察病毒的形态？",
    "options": ["放大镜", "光学显微镜", "电子显微镜", "望远镜"],
    "answer": 2,
    "explanation": "病毒尺寸极小，光学显微镜无法看清，必须使用电子显微镜。"
  },
  {
    "id": 944,
    "type": "choice",
    "text": "用显微镜观察洋葱表皮细胞时，若视野太暗，应调节？",
    "options": ["目镜", "物镜", "反光镜和光圈", "细准焦螺旋"],
    "answer": 2,
    "explanation": "反光镜和光圈调节进光量，影响视野亮度。"
  },
  {
    "id": 945,
    "type": "choice",
    "text": "显微镜的目镜放大倍数为10×，物镜为40×，则总放大倍数为？",
    "options": ["50倍", "400倍", "4000倍", "40倍"],
    "answer": 1,
    "explanation": "总放大倍数=目镜倍数×物镜倍数=10×40=400倍。"
  },
  {
    "id": 946,
    "type": "choice",
    "text": "观察洋葱表皮细胞时，在视野左下方发现一个细胞，要想将其移到中央，应往哪个方向移动装片？",
    "options": ["左下方", "右上方", "左上方", "右下方"],
    "answer": 0,
    "explanation": "显微镜成倒像，装片移动方向与视野中物像移动方向相反，故将左下方的物像移到中央需将装片向左下方移动。"
  },
  {
    "id": 947,
    "type": "choice",
    "text": "下列哪种细胞是人体中最长的细胞？",
    "options": ["神经细胞（神经元）", "红细胞", "肌肉细胞", "骨细胞"],
    "answer": 0,
    "explanation": "神经元轴突可长达1米以上，是人体最长的细胞。"
  },
  {
    "id": 948,
    "type": "choice",
    "text": "下列哪种细胞没有细胞核？",
    "options": ["白细胞", "血小板", "成熟的红细胞", "神经细胞"],
    "answer": 2,
    "explanation": "哺乳动物成熟的红细胞无细胞核，以适应运输氧气。"
  },
  {
    "id": 949,
    "type": "choice",
    "text": "用显微镜观察草履虫时，为了限制其运动，可以？",
    "options": ["滴加碘液", "滴加生理盐水", "滴加少量棉花纤维", "加热玻片"],
    "answer": 2,
    "explanation": "棉花纤维可阻挡草履虫快速运动，便于观察。"
  },
  {
    "id": 950,
    "type": "choice",
    "text": "下列关于昼夜交替现象的解释，正确的是？",
    "options": ["太阳绕地球转", "地球绕太阳转的同时自转", "地球自转", "月球绕地球转"],
    "answer": 2,
    "explanation": "昼夜交替主要由地球自转引起。"
  },
  {
    "id": 951,
    "type": "choice",
    "text": "在模拟昼夜交替的实验中，用手电筒照射地球仪，地球仪上被照亮的部分代表？",
    "options": ["黑夜", "白天", "晨昏线", "极昼"],
    "answer": 1,
    "explanation": "被光源照亮的一面为白昼。"
  },
  {
    "id": 952,
    "type": "choice",
    "text": "下列哪种现象是由地球公转引起的？",
    "options": ["昼夜交替", "太阳东升西落", "四季变化", "潮汐"],
    "answer": 2,
    "explanation": "四季变化由地球公转且地轴倾斜引起。"
  },
  {
    "id": 953,
    "type": "choice",
    "text": "地球公转的方向是？",
    "options": ["自东向西", "自西向东", "自南向北", "无规律"],
    "answer": 1,
    "explanation": "地球公转方向与自转相同，自西向东（逆时针）。"
  },
  {
    "id": 954,
    "type": "choice",
    "text": "我国古代将一年分为24个节气，主要依据是？",
    "options": ["月相变化", "太阳在黄道上的位置", "昼夜长短", "气温变化"],
    "answer": 1,
    "explanation": "二十四节气是根据太阳在黄道上的位置划分的。"
  },
  {
    "id": 955,
    "type": "choice",
    "text": "下列哪个城市夏季白昼最长？",
    "options": ["广州", "上海", "北京", "哈尔滨"],
    "answer": 3,
    "explanation": "纬度越高，夏季白昼越长，哈尔滨纬度最高。"
  },
  {
    "id": 956,
    "type": "choice",
    "text": "用小球模拟月球，用大球模拟地球，用光源模拟太阳，做日食模拟实验时，小球应放在？",
    "options": ["大球与光源之间", "大球后面", "光源后面", "任意位置"],
    "answer": 0,
    "explanation": "日食时月球位于地球和太阳之间，挡住太阳光。"
  },
  {
    "id": 957,
    "type": "choice",
    "text": "下列工具中，属于杠杆的是？",
    "options": ["螺丝刀", "剪刀", "轮子", "斜面"],
    "answer": 1,
    "explanation": "剪刀是杠杆，由两个杠杆组合而成。"
  },
  {
    "id": 958,
    "type": "choice",
    "text": "使用镊子夹取物体时，镊子属于？",
    "options": ["省力杠杆", "费力杠杆", "等臂杠杆", "轮轴"],
    "answer": 1,
    "explanation": "镊子的动力臂小于阻力臂，费力但省距离。"
  },
  {
    "id": 959,
    "type": "choice",
    "text": "下列哪句话体现了杠杆原理？",
    "options": ["四两拨千斤", "水滴石穿", "磨刀不误砍柴工", "近朱者赤"],
    "answer": 0,
    "explanation": "\"四两拨千斤\"指利用杠杆省力。"
  },
  {
    "id": 960,
    "type": "choice",
    "text": "古希腊科学家阿基米德曾说：\"给我一个支点，我就能撬起整个地球。\"这句话基于？",
    "options": ["斜面原理", "杠杆原理", "轮轴原理", "滑轮原理"],
    "answer": 1,
    "explanation": "阿基米德是杠杆原理的奠基人。"
  },
  {
    "id": 961,
    "type": "choice",
    "text": "用扳手拧螺丝时，扳手属于？",
    "options": ["杠杆", "轮轴", "滑轮", "斜面"],
    "answer": 1,
    "explanation": "扳手手柄为轮，螺帽为轴，是轮轴。"
  },
  {
    "id": 962,
    "type": "choice",
    "text": "自行车的前叉（车把手）属于？",
    "options": ["轮轴", "杠杆", "斜面", "滑轮"],
    "answer": 0,
    "explanation": "自行车前叉连接车把和前轮，转动车把时是轮轴。"
  },
  {
    "id": 963,
    "type": "choice",
    "text": "下列哪种做法不能省力，但可以改变力的方向？",
    "options": ["定滑轮", "动滑轮", "斜面", "杠杆"],
    "answer": 0,
    "explanation": "定滑轮不省力，但能改变用力方向。"
  },
  {
    "id": 964,
    "type": "choice",
    "text": "使用动滑轮提升重物，可以省力，但？",
    "options": ["不能改变方向", "费距离", "既省力又省距离", "费力"],
    "answer": 0,
    "explanation": "动滑轮省力一半，但不能改变方向，且费距离。"
  },
  {
    "id": 965,
    "type": "choice",
    "text": "下列哪种简单机械是斜面在生活中的应用？",
    "options": ["盘山公路", "钓鱼竿", "滑轮组", "扳手"],
    "answer": 0,
    "explanation": "盘山公路是斜面的变形，延长距离以省力。"
  },
  {
    "id": 966,
    "type": "choice",
    "text": "螺丝钉的螺纹应用了哪种简单机械的原理？",
    "options": ["杠杆", "轮轴", "斜面", "滑轮"],
    "answer": 2,
    "explanation": "螺纹是斜面的变形，旋转时沿斜面上升。"
  },
  {
    "id": 967,
    "type": "choice",
    "text": "用同一斜面拉同一重物，斜面越长，越？",
    "options": ["省力", "费力", "不省力不费力", "省距离"],
    "answer": 0,
    "explanation": "斜面越长，倾角越小，越省力，但费距离。"
  },
  {
    "id": 968,
    "type": "choice",
    "text": "压水井的压杆属于？",
    "options": ["轮轴", "斜面", "杠杆", "滑轮"],
    "answer": 2,
    "explanation": "压水井的压杆是杠杆，支点在支架处。"
  },
  {
    "id": 969,
    "type": "choice",
    "text": "撬动一块大石头时，支点应尽量靠近？",
    "options": ["阻力点", "用力点", "石头中心", "地面"],
    "answer": 0,
    "explanation": "支点靠近阻力点可增大动力臂，更省力。"
  },
  {
    "id": 970,
    "type": "choice",
    "text": "下列哪种工具是杠杆和轮轴的组合？",
    "options": ["剪刀", "螺丝刀", "钓鱼竿", "镊子"],
    "answer": 1,
    "explanation": "螺丝刀手柄是轮轴，刀头是斜面，但整体上常视为轮轴；严格说剪刀是杠杆，但选项中最合适的是螺丝刀。"
  },
  {
    "id": 971,
    "type": "choice",
    "text": "使用定滑轮将重物提升2米，绳子自由端移动的距离是？",
    "options": ["1米", "2米", "4米", "0.5米"],
    "answer": 1,
    "explanation": "定滑轮不改变距离，重物上升距离等于绳子自由端移动距离。"
  },
  {
    "id": 972,
    "type": "choice",
    "text": "使用动滑轮将重物提升2米，绳子自由端移动的距离是？",
    "options": ["1米", "2米", "4米", "0.5米"],
    "answer": 2,
    "explanation": "动滑轮省一半力但费一倍距离，物体上升2米，绳子自由端移动4米。"
  },
  {
    "id": 973,
    "type": "choice",
    "text": "升旗时顶部定滑轮的作用是？",
    "options": ["省力", "省距离", "又省力又省距离", "改变力的作用方向"],
    "answer": 3,
    "explanation": "定滑轮的作用是改变力的作用方向，人向下拉动绳子，国旗向上升高。"
  },
  {
    "id": 974,
    "type": "choice",
    "text": "下列哪种运输工具应用了轮轴原理？",
    "options": ["手推车", "滑板", "雪橇", "木排"],
    "answer": 0,
    "explanation": "手推车车轮是轮轴，车把是杠杆。"
  },
  {
    "id": 975,
    "type": "choice",
    "text": "平板和手推车运送同一重物，手推车更省力是因为？",
    "options": ["减小了摩擦力", "利用了轮轴和杠杆", "增加了推力", "改变了重力方向"],
    "answer": 1,
    "explanation": "手推车车轮（轮轴）和车把（杠杆）共同省力。"
  },
  {
    "id": 976,
    "type": "choice",
    "text": "下列哪种形状的物体最适合做车轮？",
    "options": ["三角形", "正方形", "圆形", "椭圆形"],
    "answer": 2,
    "explanation": "圆形车轮滚动摩擦最小。"
  },
  {
    "id": 977,
    "type": "choice",
    "text": "下列哪种信息存储工具不是基于电磁原理？",
    "options": ["硬盘", "U盘", "磁带", "光盘"],
    "answer": 3,
    "explanation": "光盘使用激光反射，非电磁；硬盘、U盘（闪存）、磁带均为电磁或半导体存储。"
  },
  {
    "id": 978,
    "type": "choice",
    "text": "下列关于工具与技术的说法，不正确的是？",
    "options": ["工具是服务于生产劳动的物质器件", "技术可以改进工具", "不同的工具使用技术相同", "技术发展促进工具革新"],
    "answer": 2,
    "explanation": "不同工具往往应用不同技术。"
  },
  {
    "id": 979,
    "type": "choice",
    "text": "下列哪个物体没有应用磁场的力来获得动力？",
    "options": ["电动机", "发电机", "电磁铁起重机", "电风扇"],
    "answer": 2,
    "explanation": "电磁铁起重机利用电磁铁吸铁，但不产生持续动力；电动机、发电机、电风扇均利用磁场对电流的作用。"
  },
  {
    "id": 980,
    "type": "choice",
    "text": "下列哪种装置能将电能转化为机械能？",
    "options": ["发电机", "电动机", "变压器", "电磁铁"],
    "answer": 1,
    "explanation": "电动机把电能转化为机械能；发电机相反。"
  },
  {
    "id": 981,
    "type": "choice",
    "text": "研究电磁铁磁性强弱与线圈匝数的关系时，应该控制不变的条件是？",
    "options": ["电流大小和铁芯", "线圈匝数", "电流方向", "铁芯粗细"],
    "answer": 0,
    "explanation": "探究匝数影响时，需控制电流和铁芯相同。"
  },
  {
    "id": 982,
    "type": "choice",
    "text": "下列做法不能增强电磁铁磁性的的是？",
    "options": ["增加线圈匝数", "增大电流", "换用更粗的铁芯", "减少线圈匝数"],
    "answer": 3,
    "explanation": "减少匝数会减弱磁性。"
  },
  {
    "id": 983,
    "type": "choice",
    "text": "电磁铁的磁极方向与下列哪项有关？",
    "options": ["电流方向", "线圈匝数", "铁芯粗细", "电流大小"],
    "answer": 0,
    "explanation": "磁极方向由电流方向决定（右手螺旋定则），此外还跟线圈缠绕方向有关。"
  },
  {
    "id": 984,
    "type": "choice",
    "text": "下列哪项实验能验证通电导体在磁场中受力？",
    "options": ["奥斯特实验", "法拉第电磁感应实验", "电动机模型", "电磁铁吸引大头针"],
    "answer": 2,
    "explanation": "电动机模型演示通电线圈在磁场中受力转动；奥斯特实验证明电流产生磁场。"
  },
  {
    "id": 985,
    "type": "choice",
    "text": "发电机的工作原理是？",
    "options": ["电流的磁效应，电生磁", "电磁感应，机械能转化为电能", "通电导体在磁场中受力", "磁化"],
    "answer": 1,
    "explanation": "发电机利用电磁感应，将机械能转化为电能。"
  },
  {
    "id": 986,
    "type": "choice",
    "text": "闭合电路的一部分导体在磁场中做切割磁感线运动时，导体中会产生电流，这种现象称为？",
    "options": ["电磁感应", "电流的磁效应", "磁场对电流的作用", "磁致伸缩"],
    "answer": 0,
    "explanation": "电磁感应定义。"
  },
  {
    "id": 987,
    "type": "choice",
    "text": "如右下图，将一根通电导体垂直放在两个平行金属导轨上，开关闭合后，导体将？",
    "options": ["静止不动", "沿导轨运动", "被磁化", "发热但不动"],
    "answer": 1,
    "explanation": "通电导体在磁场中受到安培力，会运动。"
  },
  {
    "id": 988,
    "type": "choice",
    "text": "下列哪种方法不能改变电磁铁的南北极？",
    "options": ["改变电流方向", "改变线圈绕向", "改变铁芯形状", "改变电源正负极连接"],
    "answer": 2,
    "explanation": "铁芯形状不影响磁极方向，只影响磁性分布。"
  },
  {
    "id": 989,
    "type": "choice",
    "text": "用电磁铁吸引大头针，若将铁芯换成铜芯，会怎样？",
    "options": ["磁性更强", "磁性不变", "无磁性", "磁性减弱但仍有"],
    "answer": 2,
    "explanation": "铜不是铁磁性材料，不会被磁化，电磁铁无磁性。"
  },
  {
    "id": 990,
    "type": "choice",
    "text": "下列哪种设备没有使用电磁铁？",
    "options": ["电铃", "电话听筒", "电炉", "起重机电磁铁"],
    "answer": 2,
    "explanation": "电炉使用电阻发热，无电磁铁。"
  },
  {
    "id": 991,
    "type": "choice",
    "text": "用导线绕在铁钉上制作电磁铁，通电后能吸引回形针，断电后回形针掉落，说明电磁铁？",
    "options": ["有剩磁", "磁性可控制", "需要永久磁铁", "只能吸引铁"],
    "answer": 1,
    "explanation": "电磁铁通电有磁，断电无磁，磁性可控。"
  },
  {
    "id": 992,
    "type": "choice",
    "text": "下列哪项事实表明地球是个磁体？",
    "options": ["小磁针静止时总指向南北", "太阳东升西落", "四季变化", "潮汐"],
    "answer": 0,
    "explanation": "地磁场使小磁针指向南北。"
  },
  {
    "id": 993,
    "type": "choice",
    "text": "地磁北极位于地理的？",
    "options": ["北极附近", "南极附近", "赤道", "不确定"],
    "answer": 1,
    "explanation": "地磁北极在地理南极附近（磁针的N极指向地理北极，所以地磁南极在地理北极附近，注意区分）。实际上地理北极附近是地磁南极。常见混淆：指南针N极指向地理北极，所以地理北极是地磁南极。但题目问\"地磁北极\"指磁体的北极，位于地理南极附近。"
  },
  {
    "id": 994,
    "type": "choice",
    "text": "在奥斯特实验中，导线通电后，小磁针会偏转，说明？",
    "options": ["电流周围存在磁场", "磁能生电", "电和磁无关", "小磁针有磁性"],
    "answer": 0,
    "explanation": "奥斯特实验证明了电流的磁效应。"
  },
  {
    "id": 995,
    "type": "choice",
    "text": "下列哪种方法可以增大电磁铁的磁力？",
    "options": ["减小电流", "减少线圈匝数", "增加铁芯直径", "改用铜芯"],
    "answer": 2,
    "explanation": "增加铁芯直径可增强磁化效果，但增加匝数和电流更有效，本题选项中C正确（增大铁芯截面可提高磁性）。"
  },
  {
    "id": 996,
    "type": "choice",
    "text": "用电磁铁搬运废旧钢铁，断电后钢铁不会立即掉落，最可能的原因是？",
    "options": ["钢铁被卡住", "电磁铁有剩磁", "钢铁质量太小", "电路仍有电流"],
    "answer": 1,
    "explanation": "软铁剩磁小，但若用钢芯或纯铁，可能有剩磁。"
  },
  {
    "id": 997,
    "type": "choice",
    "text": "下列哪种简单机械不能省力但能改变方向？",
    "options": ["定滑轮", "动滑轮", "斜面", "杠杆"],
    "answer": 0,
    "explanation": "定滑轮不省力，改变力的方向。"
  },
  {
    "id": 998,
    "type": "choice",
    "text": "用螺丝刀拧螺丝，螺丝刀手柄越粗，拧起来越？",
    "options": ["省力", "费力", "省距离", "无影响"],
    "answer": 0,
    "explanation": "螺丝刀是轮轴，手柄越粗（轮越大），越省力。"
  },
  {
    "id": 999,
    "type": "choice",
    "text": "下列哪种工具的应用主要为了增大摩擦力？",
    "options": ["轮胎花纹", "轴承滚珠", "润滑油", "滑梯光滑表面"],
    "answer": 0,
    "explanation": "轮胎花纹增大摩擦力，防止打滑。"
  },
  {
    "id": 1000,
    "type": "choice",
    "text": "使用杠杆时，若动力臂（用力点到支点距离）是阻力臂（阻力点到支点距离）的3倍，则动力是阻力的？",
    "options": ["3倍", "1/3", "相等", "无法确定"],
    "answer": 1,
    "explanation": "杠杆平衡条件：动力×动力臂=阻力×阻力臂，动力=阻力×（阻力臂/动力臂）=阻力/3。"
  },
  {
    "id": 1001,
    "type": "choice",
    "text": "下列哪项不是轮轴在生活中的应用？",
    "options": ["方向盘", "门把手", "水龙头", "钓鱼竿"],
    "answer": 3,
    "explanation": "钓鱼竿是费力杠杆。"
  },
  {
    "id": 1002,
    "type": "choice",
    "text": "下列哪种情况斜面省力最多？",
    "options": ["斜面长5米，高1米", "斜面长4米，高1米", "斜面长3米，高1米", "斜面长2米，高1米"],
    "answer": 0,
    "explanation": "斜面越长，倾角越小，越省力。"
  },
  {
    "id": 1003,
    "type": "choice",
    "text": "用相同材料、相同高度的斜面，分别拉同一重物，斜面越长，拉力越？",
    "options": ["大", "小", "不变", "先大后小"],
    "answer": 1,
    "explanation": "斜面越长，坡度越小，拉力越小。"
  },
  {
    "id": 1004,
    "type": "choice",
    "text": "盘山公路修成\"S\"形的主要目的是？",
    "options": ["美观", "减小坡度，省力", "缩短距离", "减少弯道"],
    "answer": 1,
    "explanation": "S形延长距离，减小坡度，使汽车上山更省力。"
  },
  {
    "id": 1005,
    "type": "choice",
    "text": "下列哪种工具不属于简单机械？",
    "options": ["扳手", "螺丝", "电钻", "镊子"],
    "answer": 2,
    "explanation": "电钻是复杂机械，内部包含电动机等。"
  },
  {
    "id": 1006,
    "type": "choice",
    "text": "用撬棍撬起石头，石头很重，为了更容易撬起，应将支点向哪边移？",
    "options": ["靠近石头", "远离石头", "不动", "任意"],
    "answer": 0,
    "explanation": "支点靠近阻力点，动力臂更长，更省力。"
  },
  {
    "id": 1007,
    "type": "choice",
    "text": "以下属于省力杠杆的是？",
    "options": ["订书机", "天平", "跷跷板", "开瓶器"],
    "answer": 3,
    "explanation": "开瓶器动力臂大于阻力臂，省力；订书机、天平、跷跷板通常为等臂或费力。"
  },
  {
    "id": 1008,
    "type": "choice",
    "text": "使用指甲剪时，指甲剪属于？",
    "options": ["省力杠杆", "费力杠杆", "等臂杠杆", "轮轴"],
    "answer": 0,
    "explanation": "指甲剪是省力杠杆（动力臂大于阻力臂）。"
  },
  {
    "id": 1009,
    "type": "choice",
    "text": "下列哪种简单机械中，一定不省力？",
    "options": ["定滑轮", "动滑轮", "斜面", "杠杆"],
    "answer": 0,
    "explanation": "定滑轮不省力，作用是改变力的方向，斜面一定省力，杠杆可能省力也可能费力。"
  },
  {
    "id": 1010,
    "type": "choice",
    "text": "下列工具中，属于费力杠杆的是？",
    "options": ["钳子", "核桃夹", "镊子", "瓶盖起子"],
    "answer": 2,
    "explanation": "镊子动力臂小于阻力臂，费力。"
  },
  {
    "id": 1011,
    "type": "choice",
    "text": "使用羊角锤拔钉子时，羊角锤属于？",
    "options": ["省力杠杆", "费力杠杆", "等臂杠杆", "轮轴"],
    "answer": 0,
    "explanation": "羊角锤拔钉时动力臂大于阻力臂，省力。"
  },
  {
    "id": 1012,
    "type": "choice",
    "text": "下列哪种应用不属于斜面？",
    "options": ["楼梯", "盘山公路", "螺丝钉", "扳手"],
    "answer": 3,
    "explanation": "扳手是轮轴。"
  },
  {
    "id": 1013,
    "type": "choice",
    "text": "在\"研究影响电磁铁磁性强弱的因素\"实验中，下列操作不能改变磁性强弱的是？",
    "options": ["改变线圈匝数", "改变电流大小", "改变电流方向", "改变铁芯粗细"],
    "answer": 2,
    "explanation": "电流方向改变磁极，不改变磁性强弱。"
  },
  {
    "id": 1014,
    "type": "choice",
    "text": "电磁铁与永磁体相比，优点是？",
    "options": ["磁性永久", "磁性可有无、可强弱、可改变极性", "不需要铁芯", "省电"],
    "answer": 1,
    "explanation": "电磁铁磁性可控。"
  },
  {
    "id": 1015,
    "type": "choice",
    "text": "下列四种电磁铁，铁芯相同，线圈匝数相同，电流相同，磁极最强的是？",
    "options": ["无铁芯", "软铁棒", "钢棒", "铝棒"],
    "answer": 1,
    "explanation": "软铁易磁化易退磁，磁化后磁性比钢强（但钢剩磁大，通电时软铁更强）。通常软铁芯电磁铁通电时磁性更强。"
  },
  {
    "id": 1016,
    "type": "choice",
    "text": "发电机模型中，转子转动越快，产生的电流越？",
    "options": ["大", "小", "不变", "先大后小"],
    "answer": 0,
    "explanation": "转速越快，磁通量变化率越大，感应电动势越大。"
  },
  {
    "id": 1017,
    "type": "choice",
    "text": "下列哪种设备是利用磁能工作的？",
    "options": ["电饭煲", "电风扇", "麦克风", "电灯"],
    "answer": 2,
    "explanation": "动圈式麦克风利用声音振动使线圈在磁场中运动产生感应电流。"
  },
  {
    "id": 1018,
    "type": "choice",
    "text": "关于电磁波，下列说法正确的是？",
    "options": ["电磁波不能在真空中传播", "光不是电磁波", "电磁波传播速度等于光速", "电磁波频率越高，波长越长"],
    "answer": 2,
    "explanation": "电磁波在真空中速度等于光速，频率越高波长越短。"
  },
  {
    "id": 1019,
    "type": "choice",
    "text": "下列哪种现象不是利用光的直线传播？",
    "options": ["小孔成像", "影子", "日食", "彩虹"],
    "answer": 3,
    "explanation": "彩虹是光的折射和反射。"
  },
  {
    "id": 1020,
    "type": "choice",
    "text": "用放大镜看物体，物体应放在？",
    "options": ["焦点以内", "焦点上", "焦点和两倍焦距之间", "两倍焦距以外"],
    "answer": 0,
    "explanation": "放大镜是凸透镜，物距小于焦距时成正立放大虚像。"
  },
  {
    "id": 1021,
    "type": "choice",
    "text": "用显微镜观察时，如果物像偏左上方，要将物像移到视野中央，装片应往哪移动？",
    "options": ["左上方", "右上方", "左下方", "右下方"],
    "answer": 0,
    "explanation": "物像移动方向与装片相反。"
  },
  {
    "id": 1022,
    "type": "choice",
    "text": "下列哪种细胞是植物细胞特有的结构？",
    "options": ["细胞膜", "细胞核", "叶绿体", "线粒体"],
    "answer": 2,
    "explanation": "叶绿体是植物细胞进行光合作用的细胞器，动物细胞没有。"
  },
  {
    "id": 1023,
    "type": "choice",
    "text": "制作洋葱表皮临时装片时，滴加碘液的目的是？",
    "options": ["杀死细胞", "染色，便于观察", "保持细胞活性", "防止细胞变形"],
    "answer": 1,
    "explanation": "碘液将细胞核染色，便于观察。"
  },
  {
    "id": 1024,
    "type": "choice",
    "text": "在观察人体口腔上皮细胞实验中，滴加的液体是？",
    "options": ["清水", "生理盐水", "碘液", "酒精"],
    "answer": 1,
    "explanation": "生理盐水维持细胞正常形态。"
  },
  {
    "id": 1025,
    "type": "choice",
    "text": "下列关于细胞的说法，正确的是？",
    "options": ["所有生物都由细胞构成", "病毒是单细胞生物", "细胞是生命活动的基本单位", "植物细胞没有细胞壁"],
    "answer": 2,
    "explanation": "病毒没有细胞结构；植物细胞有细胞壁。"
  },
  {
    "id": 1026,
    "type": "choice",
    "text": "下列哪项不是地球公转产生的现象？",
    "options": ["四季变化", "昼夜长短变化", "五带划分", "潮汐"],
    "answer": 3,
    "explanation": "潮汐主要是月球引力引起。"
  },
  {
    "id": 1027,
    "type": "choice",
    "text": "北半球夏至日，太阳直射点位于？",
    "options": ["赤道", "北回归线", "南回归线", "北极圈"],
    "answer": 1,
    "explanation": "夏至日太阳直射北回归线。"
  },
  {
    "id": 1028,
    "type": "choice",
    "text": "南极地区出现极昼现象时，北半球是？",
    "options": ["春分", "夏至", "秋分", "冬至"],
    "answer": 3,
    "explanation": "南极极昼时，太阳直射南回归线，北半球冬至。"
  },
  {
    "id": 1029,
    "type": "choice",
    "text": "一天中，影子最短的时刻是？",
    "options": ["早晨", "正午", "傍晚", "深夜"],
    "answer": 1,
    "explanation": "正午太阳高度角最大，影子最短。"
  },
  {
    "id": 1030,
    "type": "choice",
    "text": "下列城市中，一年中正午太阳高度角变化最大的是？",
    "options": ["海口（20°N）", "北京（40°N）", "上海（31°N）", "哈尔滨（45°N）"],
    "answer": 3,
    "explanation": "纬度越高，正午太阳高度角年变化幅度越大。"
  },
  {
    "id": 1031,
    "type": "choice",
    "text": "用小球模拟月球，用大球模拟地球，做月食模拟实验时，小球应放在？",
    "options": ["大球与光源之间", "大球后面（远离光源）", "光源后面", "任意位置"],
    "answer": 1,
    "explanation": "月食时地球位于太阳和月球之间，月球进入地球影子。"
  },
  {
    "id": 1032,
    "type": "choice",
    "text": "下列哪种现象不能证明地球是球体？",
    "options": ["麦哲伦环球航行", "月食时地球影子呈弧形", "站在海边看帆船，先见桅杆后见船身", "太阳东升西落"],
    "answer": 3,
    "explanation": "太阳东升西落是地球自转结果，不能直接证明地球形状。"
  },
  {
    "id": 1033,
    "type": "choice",
    "text": "地球公转的周期是？",
    "options": ["一天", "一年", "一个月", "一周"],
    "answer": 1,
    "explanation": "公转周期为365.25天。"
  },
  {
    "id": 1034,
    "type": "choice",
    "text": "下列哪种现象是由于地球自转引起的？",
    "options": ["四季更替", "昼夜交替", "极昼极夜", "正午太阳高度角变化"],
    "answer": 1,
    "explanation": "昼夜交替由自转引起。"
  },
  {
    "id": 1035,
    "type": "choice",
    "text": "在北极点上，观察太阳，一天中太阳的视运动是？",
    "options": ["东升西落", "西升东落", "绕地平线转圈", "不升起"],
    "answer": 2,
    "explanation": "北极点夏半年太阳在地平线上方做圆周运动。"
  },
  {
    "id": 1036,
    "type": "choice",
    "text": "下列四种简单机械中，不能连续转动的是？",
    "options": ["轮轴", "杠杆", "动滑轮", "斜面"],
    "answer": 1,
    "explanation": "杠杆通常在一定角度内摆动，不能连续转动。"
  },
  {
    "id": 1037,
    "type": "choice",
    "text": "下列哪种工具是等臂杠杆？",
    "options": ["天平", "钳子", "剪刀", "起子"],
    "answer": 0,
    "explanation": "天平的左右臂等长。"
  },
  {
    "id": 1038,
    "type": "choice",
    "text": "用剪刀剪硬纸板，将纸板放在靠近剪刀轴处比放在尖端更容易剪断，这是因为？",
    "options": ["阻力臂变小", "动力臂变大", "阻力变小", "动力变大"],
    "answer": 0,
    "explanation": "靠近轴处阻力臂小，更省力。"
  },
  {
    "id": 1039,
    "type": "choice",
    "text": "下列关于电磁铁的说法，错误的是？",
    "options": ["电磁铁的铁芯常用软铁", "电磁铁的磁性强弱与电流大小有关", "电磁铁磁极方向与电流方向无关", "电磁铁在通电时有磁性"],
    "answer": 2,
    "explanation": "磁极方向与电流方向有关。"
  },
  {
    "id": 1040,
    "type": "choice",
    "text": "下列哪种方法可以改变电磁铁的磁极？",
    "options": ["改变电流方向", "改变线圈匝数", "改变电流大小", "改变铁芯材料"],
    "answer": 0,
    "explanation": "电流方向改变，磁极反转。"
  },
  {
    "id": 1041,
    "type": "choice",
    "text": "在探究\"电磁铁磁性强弱与电流大小的关系\"时，应保持什么不变？",
    "options": ["线圈匝数和铁芯", "电流方向", "电源电压", "导线粗细"],
    "answer": 0,
    "explanation": "控制变量法，保持匝数和铁芯相同，改变电流。"
  },
  {
    "id": 1042,
    "type": "choice",
    "text": "用同种铁芯、相同匝数的电磁铁，分别用一节新电池和两节新电池，则用两节新电池的磁性？",
    "options": ["更强", "更弱", "相同", "无法比较"],
    "answer": 0,
    "explanation": "电流越大，磁性越强。"
  },
  {
    "id": 1043,
    "type": "choice",
    "text": "下列设备中，没有利用电磁铁的是？",
    "options": ["电铃", "磁悬浮列车", "电动机", "白炽灯"],
    "answer": 3,
    "explanation": "白炽灯利用电流热效应。"
  },
  {
    "id": 1044,
    "type": "choice",
    "text": "磁悬浮列车利用的是？",
    "options": ["磁铁间的相互作用", "电磁感应", "电流的热效应", "光的反射"],
    "answer": 0,
    "explanation": "利用同名磁极相斥或异名磁极相吸原理。"
  },
  {
    "id": 1045,
    "type": "choice",
    "text": "下列四种装置中，主要将机械能转化为电能的是？",
    "options": ["电动机", "发电机", "电风扇", "电灯"],
    "answer": 1,
    "explanation": "发电机将机械能转化为电能。"
  },
  {
    "id": 1046,
    "type": "choice",
    "text": "下列四种能量转化中，属于化学能转化为电能的是？",
    "options": ["干电池供电", "太阳能电池", "风力发电", "水力发电"],
    "answer": 0,
    "explanation": "干电池内部化学反应产生电能。"
  },
  {
    "id": 1047,
    "type": "choice",
    "text": "太阳能电池板是将太阳能转化为？",
    "options": ["电能", "热能", "化学能", "机械能"],
    "answer": 0,
    "explanation": "太阳能电池直接发电。"
  },
  {
    "id": 1048,
    "type": "choice",
    "text": "下列哪种能源属于可再生能源？",
    "options": ["煤炭", "石油", "天然气", "水能"],
    "answer": 3,
    "explanation": "水能可循环再生。"
  },
  {
    "id": 1049,
    "type": "choice",
    "text": "下列哪项行为会导致能源浪费？",
    "options": ["随手关灯", "夏天空调温度调至26℃", "电视待机不拔插头", "使用节能灯"],
    "answer": 2,
    "explanation": "待机仍消耗电能。"
  },
  {
    "id": 1050,
    "type": "choice",
    "text": "下列哪种简单机械可以在省力的同时省距离？",
    "options": ["斜面", "杠杆", "滑轮组", "没有这种机械"],
    "answer": 3,
    "explanation": "任何机械都不能既省力又省距离，遵循功的原理。"
  },
  {
    "id": 1051,
    "type": "choice",
    "text": "使用任何机械都不能省功，这是因为？",
    "options": ["机械效率低", "能量守恒", "摩擦力存在", "机械设计缺陷"],
    "answer": 1,
    "explanation": "功的原理：使用任何机械都不省功，能量守恒。"
  },
  {
    "id": 1052,
    "type": "choice",
    "text": "下列哪种现象是光的折射？",
    "options": ["水中倒影", "小孔成像", "筷子在水中\"折断\"", "太阳灶"],
    "answer": 2,
    "explanation": "筷子在水中看起来弯折是光的折射。"
  },
  {
    "id": 1053,
    "type": "choice",
    "text": "放大镜的镜片是？",
    "options": ["凹透镜", "凸透镜", "平面镜", "凸面镜"],
    "answer": 1,
    "explanation": "放大镜是凸透镜。"
  },
  {
    "id": 1054,
    "type": "choice",
    "text": "近视眼镜的镜片是？",
    "options": ["凸透镜", "凹透镜", "平面镜", "凹面镜"],
    "answer": 1,
    "explanation": "近视眼镜是凹透镜。"
  },
  {
    "id": 1055,
    "type": "choice",
    "text": "下列哪种显微镜的放大倍数最大？",
    "options": ["光学显微镜", "电子显微镜", "扫描隧道显微镜", "放大镜"],
    "answer": 2,
    "explanation": "扫描隧道显微镜可观察原子级别。"
  },
  {
    "id": 1056,
    "type": "choice",
    "text": "用显微镜观察时，如果视野中光线太强，应选用？",
    "options": ["大光圈和凹面镜", "小光圈和平面镜", "大光圈和平面镜", "小光圈和凹面镜"],
    "answer": 1,
    "explanation": "小光圈和平面镜可减弱光线。"
  },
  {
    "id": 1057,
    "type": "choice",
    "text": "洋葱表皮细胞的基本结构包括细胞壁、细胞膜、细胞质、细胞核，其中起支持和保护作用的是？",
    "options": ["细胞膜", "细胞壁", "细胞核", "液泡"],
    "answer": 1,
    "explanation": "细胞壁主要起支持和保护作用。"
  },
  {
    "id": 1058,
    "type": "choice",
    "text": "下列哪种生物不是由细胞构成的？",
    "options": ["细菌", "酵母菌", "病毒", "霉菌"],
    "answer": 2,
    "explanation": "病毒没有细胞结构。"
  },
  {
    "id": 1059,
    "type": "choice",
    "text": "地球自转的方向是自西向东，从北极上空看呈？",
    "options": ["顺时针", "逆时针", "自东向西", "无规律"],
    "answer": 1,
    "explanation": "从北极看，地球逆时针自转。"
  },
  {
    "id": 1060,
    "type": "choice",
    "text": "从南极上空看，地球自转方向是？",
    "options": ["顺时针", "逆时针", "自西向东", "自东向西"],
    "answer": 0,
    "explanation": "从南极看，顺时针。"
  },
  {
    "id": 1061,
    "type": "choice",
    "text": "地球上产生昼夜现象的原因是？",
    "options": ["地球自转", "地球公转", "地球不发光不透明", "太阳光直射"],
    "answer": 2,
    "explanation": "昼夜现象是由于地球不发光且不透明，一半被照亮；昼夜交替才是自转引起。"
  },
  {
    "id": 1062,
    "type": "choice",
    "text": "地球上四季变化最明显的地区是？",
    "options": ["赤道", "热带", "温带", "寒带"],
    "answer": 2,
    "explanation": "温带四季分明。"
  },
  {
    "id": 1063,
    "type": "choice",
    "text": "北半球冬季时，南半球是？",
    "options": ["春季", "夏季", "秋季", "冬季"],
    "answer": 1,
    "explanation": "南北半球季节相反。"
  },
  {
    "id": 1064,
    "type": "choice",
    "text": "下列哪种简单机械在省力时一定费距离？",
    "options": ["杠杆", "滑轮", "斜面", "所有省力机械"],
    "answer": 3,
    "explanation": "所有省力机械都费距离。"
  },
  {
    "id": 1065,
    "type": "choice",
    "text": "用斧头劈柴，斧头的刃是斜面的应用，目的是？",
    "options": ["省力", "省距离", "改变方向", "增大压强"],
    "answer": 0,
    "explanation": "斜面省力，但劈柴时也增大压强，主要目的是省力。"
  },
  {
    "id": 1066,
    "type": "choice",
    "text": "关于能量守恒，下列说法正确的是？",
    "options": ["能量可以凭空产生", "能量可以凭空消失", "能量在转化和转移过程中总量不变", "能量守恒只适用于机械能"],
    "answer": 2,
    "explanation": "能量守恒是普遍规律。"
  },
  {
    "id": 1067,
    "type": "choice",
    "text": "下列哪种现象中，机械能转化为热能？",
    "options": ["钻木取火", "水电站发电", "风力发电", "太阳能热水器"],
    "answer": 0,
    "explanation": "钻木取火通过摩擦做功，机械能转化为内能。"
  },
  {
    "id": 1068,
    "type": "choice",
    "text": "下列哪种能源最终来源于太阳能？",
    "options": ["风能", "水能", "化石燃料", "以上都是"],
    "answer": 3,
    "explanation": "风、水、化石燃料都间接来自太阳能。"
  },
  {
    "id": 1069,
    "type": "choice",
    "text": "下列哪项措施不能减小摩擦力？",
    "options": ["加润滑油", "变滑动为滚动", "增大压力", "使接触面光滑"],
    "answer": 2,
    "explanation": "增大压力会增大摩擦力。"
  },
  {
    "id": 1070,
    "type": "choice",
    "text": "自行车的刹车装置是通过增大什么来增大摩擦力的？",
    "options": ["接触面粗糙程度", "压力", "接触面积", "速度"],
    "answer": 1,
    "explanation": "刹车皮紧压钢圈，增大压力。"
  },
  {
    "id": 1071,
    "type": "choice",
    "text": "下列哪种工具属于费力但省距离的杠杆？",
    "options": ["钓鱼竿", "羊角锤", "老虎钳", "起子"],
    "answer": 0,
    "explanation": "钓鱼竿费力，但可快速移动鱼。"
  },
  {
    "id": 1072,
    "type": "choice",
    "text": "用扫帚扫地，扫帚是？",
    "options": ["省力杠杆", "费力杠杆", "等臂杠杆", "轮轴"],
    "answer": 1,
    "explanation": "扫帚上端是支点，动力臂短，费力。"
  },
  {
    "id": 1073,
    "type": "choice",
    "text": "下列哪种机械不能连续转动？",
    "options": ["轮轴", "定滑轮", "杠杆", "动滑轮"],
    "answer": 2,
    "explanation": "杠杆摆动，不能连续转动。"
  },
  {
    "id": 1074,
    "type": "choice",
    "text": "下列哪种简单机械可以看作是一个连续旋转的杠杆？",
    "options": ["轮轴", "斜面", "滑轮", "杠杆"],
    "answer": 0,
    "explanation": "轮轴是杠杆的变形，可连续旋转。"
  },
  {
    "id": 1075,
    "type": "choice",
    "text": "用扳手拧螺母时，手握在扳手手柄的末端比握在中间更省力，这是因为？",
    "options": ["动力臂（用力点到支点距离）增大", "阻力臂（阻力点到支点距离）减小", "动力减小", "阻力减小"],
    "answer": 0,
    "explanation": "手柄末端离轴心远，动力臂大。"
  },
  {
    "id": 1076,
    "type": "choice",
    "text": "在斜面上用F1、F2、F3三个力拉同一物体沿斜面匀速上升，其中F1沿斜面向上，F2水平向右，F3竖直向上，最省力的是？",
    "options": ["F1", "F2", "F3", "一样"],
    "answer": 0,
    "explanation": "沿斜面方向拉，斜面原理，力最小。"
  },
  {
    "id": 1077,
    "type": "choice",
    "text": "下列哪种做法不能改变电磁铁的磁性强弱？",
    "options": ["改变线圈匝数", "改变电流大小", "改变铁芯的材料", "改变电源正负极"],
    "answer": 3,
    "explanation": "改变电源正负极改变电流方向，影响磁极，不影响强弱。"
  },
  {
    "id": 1078,
    "type": "choice",
    "text": "电磁铁的铁芯通常用软铁而不用钢，原因是？",
    "options": ["软铁易磁化也易退磁", "软铁不易生锈", "钢太贵", "钢不能磁化"],
    "answer": 0,
    "explanation": "电磁铁需要断电后磁性消失，软铁剩磁小。"
  },
  {
    "id": 1079,
    "type": "choice",
    "text": "下列哪种电器中没有电动机？",
    "options": ["电风扇", "洗衣机", "电冰箱", "电灯"],
    "answer": 3,
    "explanation": "电灯利用热效应，无电动机。"
  },
  {
    "id": 1080,
    "type": "choice",
    "text": "电动机的转动方向与下列哪项有关？",
    "options": ["电流方向", "磁场方向", "电流大小", "电流方向和磁场方向"],
    "answer": 3,
    "explanation": "电动机转动方向由电流方向和磁场方向共同决定。"
  },
  {
    "id": 1081,
    "type": "choice",
    "text": "发电机产生的电流方向与什么有关？",
    "options": ["电流方向", "磁场方向", "AB两者都有关", "线圈匝数"],
    "answer": 2,
    "explanation": "感应电流方向与导体运动方向和磁场方向有关。"
  },
  {
    "id": 1082,
    "type": "choice",
    "text": "下列哪种现象属于电流的热效应？",
    "options": ["电炉发热", "电动机转动", "电磁铁吸引铁钉", "电铃发声"],
    "answer": 0,
    "explanation": "电炉利用电流通过电阻发热。"
  },
  {
    "id": 1083,
    "type": "choice",
    "text": "下列哪种做法不符合安全用电原则？",
    "options": ["不用湿手插拔插头", "电线着火立即用水浇灭", "用电器金属外壳接地", "不超负荷用电"],
    "answer": 1,
    "explanation": "水导电，应切断电源或用干粉灭火器。"
  },
  {
    "id": 1084,
    "type": "choice",
    "text": "家庭电路中，保险丝熔断的原因可能是？",
    "options": ["用电器功率过大", "短路", "电压过高", "以上都是"],
    "answer": 3,
    "explanation": "过载、短路、电压异常都可能导致熔断。"
  },
  {
    "id": 1085,
    "type": "choice",
    "text": "下列关于电磁波的说法，错误的是？",
    "options": ["微波炉利用电磁波加热", "无线电波是电磁波", "电磁波不能在真空中传播", "光是一种电磁波"],
    "answer": 2,
    "explanation": "电磁波可以在真空中传播。"
  },
  {
    "id": 1086,
    "type": "choice",
    "text": "在探究\"电磁铁磁性强弱与线圈匝数关系\"的实验中，需要通过什么来显示磁性强弱？",
    "options": ["吸引大头针的数量", "电流表示数", "铁钉温度", "小磁针偏转角度"],
    "answer": 0,
    "explanation": "吸引大头针数量直观反映磁性大小。"
  },
  {
    "id": 1087,
    "type": "choice",
    "text": "下列哪种方法不能增大电磁铁的磁性？",
    "options": ["增加线圈匝数", "增加电流", "增加铁芯长度", "使用更好的铁芯材料"],
    "answer": 2,
    "explanation": "增加铁芯长度不一定增强磁性，反而可能使磁场分散。"
  },
  {
    "id": 1088,
    "type": "choice",
    "text": "将电磁铁的铁芯换成铝芯，通电后，它能否吸引铁钉？",
    "options": ["能，磁性更强", "能，但磁性减弱", "不能", "有时能有时不能"],
    "answer": 2,
    "explanation": "铝不是铁磁性材料，不能被磁化。"
  },
  {
    "id": 1089,
    "type": "choice",
    "text": "用电磁铁搬运铁块，断电后铁块不掉落，可能原因是？",
    "options": ["铁块太重", "电磁铁有剩磁", "电源未断开", "电路短路"],
    "answer": 1,
    "explanation": "剩磁导致仍有吸引力。"
  },
  {
    "id": 1090,
    "type": "choice",
    "text": "下列哪种工具是测量力的工具？",
    "options": ["弹簧测力计", "天平", "量筒", "温度计"],
    "answer": 0,
    "explanation": "弹簧测力计测力大小。"
  },
  {
    "id": 1091,
    "type": "choice",
    "text": "使用弹簧测力计时，下列做法错误的是？",
    "options": ["使用前调零", "测量时弹簧测力计保持竖直", "读数时视线与指针相平", "可以测量超过量程的力"],
    "answer": 3,
    "explanation": "超过量程会损坏弹簧。"
  },
  {
    "id": 1092,
    "type": "choice",
    "text": "用杠杆提升重物时，若用力点到支点距离不变，增大阻力点到支点距离，则用力情况会？",
    "options": ["增大", "减小", "不变", "无法确定"],
    "answer": 0,
    "explanation": "阻力臂增大，阻力矩增大，需更大动力。"
  },
  {
    "id": 1093,
    "type": "choice",
    "text": "下列关于能量的说法，正确的是？",
    "options": ["静止的物体没有能量", "速度大的物体动能一定大", "被举高的物体具有重力势能", "能量可以创生"],
    "answer": 2,
    "explanation": "重力势能与高度有关；静止物体可能有势能；动能还和质量有关；能量守恒。"
  },
  {
    "id": 1094,
    "type": "choice",
    "text": "骑自行车下坡时，不用蹬车速度也越来越快，这是因为？",
    "options": ["重力势能转化为动能", "动能转化为重力势能", "惯性增大", "摩擦力消失"],
    "answer": 0,
    "explanation": "高度降低，重力势能减小，动能增大。"
  },
  {
    "id": 1095,
    "type": "choice",
    "text": "下列哪种能源是不可再生能源？",
    "options": ["太阳能", "风能", "核能", "地热能"],
    "answer": 2,
    "explanation": "核燃料（铀等）储量有限，不可再生。"
  },
  {
    "id": 1096,
    "type": "choice",
    "text": "太阳能电池板工作时，能量转化是？",
    "options": ["光能→电能", "光能→化学能", "化学能→电能", "热能→电能"],
    "answer": 0,
    "explanation": "光伏效应直接发电。"
  },
  {
    "id": 1097,
    "type": "choice",
    "text": "下列哪种行为有利于节约能源？",
    "options": ["离开教室不关灯", "夏天空调温度调至18℃", "使用节能灯", "电视机长期待机"],
    "answer": 2,
    "explanation": "节能灯省电。"
  },
  {
    "id": 1098,
    "type": "choice",
    "text": "下列哪种变化是物理变化？",
    "options": ["铁生锈", "食物腐败", "水结成冰", "纸张燃烧"],
    "answer": 2,
    "explanation": "水结冰状态变化，无新物质。"
  },
  {
    "id": 1099,
    "type": "choice",
    "text": "下列哪种变化是化学变化？",
    "options": ["酒精挥发", "玻璃破碎", "钢铁熔化", "粮食酿酒"],
    "answer": 3,
    "explanation": "酿酒生成酒精，有新物质。"
  },
  {
    "id": 1100,
    "type": "choice",
    "text": "下列哪种能量转化是机械能转化为热能？",
    "options": ["电炉发热", "汽车刹车时车轮发热", "太阳能热水器", "风力发电"],
    "answer": 1,
    "explanation": "刹车摩擦，摩擦生热是机械能转化为热能。"
  },
  {
    "id": 1101,
    "type": "choice",
    "text": "下列哪种能量转化是热能转化为机械能？",
    "options": ["火箭发射", "电风扇转动", "太阳能电池", "核电站发电"],
    "answer": 0,
    "explanation": "火箭燃料燃烧驱动火箭发射，热能转化为机械能。"
  },
  {
    "id": 1102,
    "type": "choice",
    "text": "下列哪种能源是清洁能源？",
    "options": ["煤", "石油", "天然气", "太阳能"],
    "answer": 3,
    "explanation": "太阳能无污染。"
  },
  {
    "id": 1103,
    "type": "choice",
    "text": "下列哪种镜子对光线有会聚作用？",
    "options": ["凹面镜", "凸面镜", "平面镜", "凹透镜"],
    "answer": 0,
    "explanation": "凹面镜会聚光线。"
  },
  {
    "id": 1104,
    "type": "choice",
    "text": "下列哪种镜子对光线有发散作用？",
    "options": ["凸面镜", "凹面镜", "凸透镜", "平面镜"],
    "answer": 0,
    "explanation": "凸面镜发散光线。"
  },
  {
    "id": 1105,
    "type": "choice",
    "text": "下列哪种透镜对光线有会聚作用？",
    "options": ["凹透镜", "凸透镜", "平面镜", "三棱镜"],
    "answer": 1,
    "explanation": "凸透镜会聚光线。"
  },
  {
    "id": 1106,
    "type": "choice",
    "text": "人眼中的晶状体相当于一个？",
    "options": ["凸透镜", "凹透镜", "平面镜", "凸面镜"],
    "answer": 0,
    "explanation": "晶状体是凸透镜。"
  },
  {
    "id": 1107,
    "type": "choice",
    "text": "近视眼是由于晶状体太厚，折光能力太强，应配戴？",
    "options": ["凸透镜", "凹透镜", "平面镜", "凸面镜"],
    "answer": 1,
    "explanation": "凹透镜发散光线，矫正近视。"
  },
  {
    "id": 1108,
    "type": "choice",
    "text": "远视眼应配戴？",
    "options": ["凸透镜", "凹透镜", "平面镜", "凹面镜"],
    "answer": 0,
    "explanation": "凸透镜会聚光线。"
  },
  {
    "id": 1109,
    "type": "choice",
    "text": "下列哪种物体是光源？",
    "options": ["月亮", "镜子", "点燃的蜡烛", "钻石"],
    "answer": 2,
    "explanation": "光源自身发光，月亮反射太阳光。"
  },
  {
    "id": 1110,
    "type": "choice",
    "text": "放大镜成的是？",
    "options": ["正立放大虚像", "倒立放大实像", "正立缩小虚像", "倒立缩小实像"],
    "answer": 0,
    "explanation": "物距小于f，成正立放大虚像。"
  },
  {
    "id": 1111,
    "type": "choice",
    "text": "下列哪种现象是由于地球自转产生的？",
    "options": ["四季更替", "昼夜长短变化", "太阳东升西落", "正午太阳高度角变化"],
    "answer": 2,
    "explanation": "太阳东升西落是自转的视运动。"
  },
  {
    "id": 1112,
    "type": "choice",
    "text": "下列哪种现象是由于地球公转产生的？",
    "options": ["昼夜交替", "地方时差", "恒星的周年视差", "潮汐"],
    "answer": 2,
    "explanation": "恒星周年视差是地球公转引起的位移。"
  },
  {
    "id": 1113,
    "type": "choice",
    "text": "北半球冬至日，太阳直射点位于？",
    "options": ["赤道", "北回归线", "南回归线", "南极圈"],
    "answer": 2,
    "explanation": "冬至日太阳直射南回归线。"
  },
  {
    "id": 1114,
    "type": "choice",
    "text": "夏至日，北极圈以内出现？",
    "options": ["极昼", "极夜", "昼夜平分", "极光"],
    "answer": 0,
    "explanation": "夏至日北极圈极昼。"
  },
  {
    "id": 1115,
    "type": "choice",
    "text": "下列哪种能源是二次能源？",
    "options": ["煤", "石油", "电能", "天然气"],
    "answer": 2,
    "explanation": "电能由其他能源转化而来。"
  },
  {
    "id": 1116,
    "type": "choice",
    "text": "下列哪种能源是化石能源？",
    "options": ["太阳能", "风能", "天然气", "地热能"],
    "answer": 2,
    "explanation": "天然气是化石燃料。"
  }
];

module.exports = QUESTIONS;