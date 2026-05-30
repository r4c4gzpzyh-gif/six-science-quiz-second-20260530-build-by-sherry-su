// 小学科学闯关题库 - 核心逻辑
// 所有数据存储在 localStorage 中，无需服务器

// 等级配置
const LEVELS = [
    { level: 1, name: '科学新手', xp: 0, icon: '🌱' },
    { level: 2, name: '探索学徒', xp: 100, icon: '🔍' },
    { level: 3, name: '实验达人', xp: 300, icon: '⚗️' },
    { level: 4, name: '知识学者', xp: 600, icon: '📚' },
    { level: 5, name: '科学博士', xp: 1000, icon: '🎓' },
    { level: 6, name: '发明大师', xp: 1500, icon: '💡' },
    { level: 7, name: '星际科学家', xp: 2200, icon: '🚀' },
    { level: 8, name: '传奇院士', xp: 3000, icon: '🏆' },
];
// 学生白名单 - 只有列表中的学生可以登录
const STUDENT_WHITELIST = {"601": {"1": "曹籽毅", "2": "田奕辰", "3": "陈静汐", "4": "陈念", "5": "陈若萱", "6": "池梓文", "7": "丁玮琦", "8": "方馨", "9": "冯梓霖", "10": "符雨泽", "11": "管歆瑶", "12": "郭潇潇", "13": "郭宇博", "14": "何玥瑶", "15": "侯森晨", "16": "胡斌", "17": "胡诗涵", "18": "黄昊天", "19": "贾沐晨", "20": "曹晨馨", "21": "兰棋宇", "22": "李飞跃", "23": "李羽涵", "24": "凌宇萱", "25": "刘鸿伟", "26": "刘一航", "27": "刘梓煊", "28": "毛馨伊", "29": "施振宇", "30": "杨思哲", "31": "姚铭浩", "32": "周宏玮", "33": "余浩轩", "34": "詹弘毅", "35": "占佳钰", "36": "陶梓豪", "37": "郑金旭", "38": "李宇杭", "39": "夏诚铠", "40": "刘熙宸", "41": "张骏喆", "42": "陈晟睿"}, "602": {"1": "陈孙希睿", "2": "张雨诺", "3": "高晟轩", "4": "刘欢墨", "5": "江宇航", "6": "李嘉佑", "7": "李恬欣", "8": "李运帷", "9": "龙子翊", "10": "张逸轩", "11": "汤恩泽", "12": "任方子淇", "13": "梅雨蒙", "14": "任翔", "15": "尚广驰", "16": "孙博文", "17": "邱诗微", "18": "高宇铠", "19": "王恩泽", "20": "王俊熙", "21": "王洛辰", "22": "周雨萱", "23": "赵一萱", "24": "夏至圻", "25": "项子馨", "26": "苗雨彤", "27": "徐可馨", "28": "杨博均", "29": "杨舒画", "30": "姚宇豪", "31": "余辰希", "32": "余定", "33": "袁紫仪", "34": "张恩", "35": "张诗意", "36": "杜曼青", "37": "陈凯琳", "38": "王赞博"}, "603": {"1": "陈梦涵", "2": "曹欣宇", "3": "冯翌迪", "4": "韩雨馨", "5": "俞子珩", "6": "黄家译", "7": "蒋瑾萱", "8": "李雅志", "9": "李语萱", "10": "柳金鹏", "11": "罗毅馨", "12": "骆钰涵", "13": "朱宇杰", "14": "缪赟希", "15": "潘思越", "16": "任俊宇", "17": "施念", "18": "张诗菡", "19": "王思雯", "20": "王歆雅", "21": "文湘元", "22": "吴菲彤", "23": "薛程格", "24": "杨若菡", "25": "杨悦彤", "26": "叶彬驰", "27": "张郭伊函", "28": "张皓轩", "29": "张书萱", "30": "张筱唯", "31": "张瑛钧", "32": "张哲涵", "33": "赵依冉", "34": "周梦琪", "35": "朱子昂", "36": "朱莉安妮", "37": "许屹诚", "38": "徐甜钰", "39": "谢一戈", "40": "张艺林", "41": "盛钰轩", "42": "傅一帆"}};

// 验证学生信息
function validateStudent(className, studentName, studentId) {
    // 教师登录特殊处理
    if (className === '教师' && studentName === 'admin' && studentId === 'admin') {
        return { valid: true, isTeacher: true };
    }
    
    // 验证班级
    if (!STUDENT_WHITELIST[className]) {
        return { valid: false, message: '班级不存在' };
    }
    
    // 验证学号
    const classStudents = STUDENT_WHITELIST[className];
    if (!classStudents[studentId]) {
        return { valid: false, message: '该班级中没有这个学号' };
    }
    
    // 验证姓名
    if (classStudents[studentId] !== studentName) {
        return { valid: false, message: `学号${studentId}对应的姓名应该是：${classStudents[studentId]}` };
    }
    
    return { valid: true, isTeacher: false };
}


// 全局状态
let currentUser = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizMode = 'practice'; // practice, random, wrong

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否有已登录用户
    const savedUser = localStorage.getItem('scienceQuizUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showPage('home-page');
        updateHomePage();
    }

    // 绑定事件
    bindEvents();
});

// 绑定所有事件
function bindEvents() {
    // 登录
    document.getElementById('start-btn').addEventListener('click', handleLogin);
    
    // 主页按钮
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    document.getElementById('practice-btn').addEventListener('click', () => startQuiz('practice'));
    document.getElementById('random-btn').addEventListener('click', () => startQuiz('random'));
    document.getElementById('wrong-btn').addEventListener('click', showWrongPage);
    document.getElementById('level-btn').addEventListener('click', showLevelPage);
    
    // 刷题页
    document.getElementById('back-btn').addEventListener('click', () => showPage('home-page'));
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    
    // 结果页
    document.getElementById('review-wrong-btn').addEventListener('click', reviewWrongFromResult);
    document.getElementById('back-home-btn').addEventListener('click', () => showPage('home-page'));
    
    // 错题本
    document.getElementById('wrong-back-btn').addEventListener('click', () => showPage('home-page'));
    document.getElementById('clear-wrong-btn').addEventListener('click', clearWrongQuestions);
    
    // 等级页
    document.getElementById('level-back-btn').addEventListener('click', () => showPage('home-page'));
    
    // 教师页面
    document.getElementById('teacher-back-btn').addEventListener('click', () => showPage('login-page'));
    document.getElementById('export-data-btn').addEventListener('click', exportAllData);
    document.getElementById('close-detail-btn').addEventListener('click', closeStudentDetail);
    document.getElementById('student-search-input').addEventListener('input', filterStudentList);
}

// 教师登录入口 - 挂载到window
window.showTeacherPage = showTeacherPage;

// 显示教师页面
function showTeacherPage() {
    currentUser = null;
    localStorage.removeItem('scienceQuizUser');
    showPage('teacher-page');
    updateTeacherPage();
}

// 更新教师页面
function updateTeacherPage() {
    const allStudents = getAllStudents();
    
    // 统计数据
    const summaryEl = document.getElementById('teacher-summary');
    const totalXp = allStudents.reduce((sum, s) => sum + (s.xp || 0), 0);
    const totalAnswered = allStudents.reduce((sum, s) => sum + (s.totalAnswered || 0), 0);
    const avgCorrectRate = allStudents.length > 0 
        ? Math.round(allStudents.reduce((sum, s) => sum + (s.totalAnswered > 0 ? s.correctCount / s.totalAnswered : 0), 0) / allStudents.length * 100) 
        : 0;
    
    summaryEl.innerHTML = `
        <div style="padding: 15px; background: #f0f8ff; border-radius: 10px; text-align: center;">
            <div style="font-size: 28px; font-weight: bold; color: #1976d2;">${allStudents.length}</div>
            <div style="font-size: 13px; color: #666;">注册学生数</div>
        </div>
        <div style="padding: 15px; background: #fff3e0; border-radius: 10px; text-align: center;">
            <div style="font-size: 28px; font-weight: bold; color: #f57c00;">${totalXp}</div>
            <div style="font-size: 13px; color: #666;">总经验值</div>
        </div>
        <div style="padding: 15px; background: #e8f5e9; border-radius: 10px; text-align: center;">
            <div style="font-size: 28px; font-weight: bold; color: #388e3c;">${totalAnswered}</div>
            <div style="font-size: 13px; color: #666;">总做题数</div>
        </div>
        <div style="padding: 15px; background: #fce4ec; border-radius: 10px; text-align: center;">
            <div style="font-size: 28px; font-weight: bold; color: #c2185b;">${avgCorrectRate}%</div>
            <div style="font-size: 13px; color: #666;">平均正确率</div>
        </div>
    `;
    
    // 学生列表
    renderStudentList(allStudents);
}

// 渲染学生列表
function renderStudentList(students) {
    const listEl = document.getElementById('student-list');
    
    if (students.length === 0) {
        listEl.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">暂无学生数据</p>';
        return;
    }
    
    // 按经验值排序
    students.sort((a, b) => (b.xp || 0) - (a.xp || 0));
    
    listEl.innerHTML = students.map((s, index) => {
        const correctRate = s.totalAnswered > 0 
            ? Math.round(s.correctCount / s.totalAnswered * 100) 
            : 0;
        
        return `
            <div style="padding: 15px; border-bottom: 1px solid #eee; cursor: pointer;" onclick="showStudentDetail('${s.id}')">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong style="font-size: 16px;">#${index + 1} ${s.name}</strong>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">
                            ${s.className} | 学号: ${s.studentId}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-weight: bold; color: #667eea;">Lv.${getStudentLevel(s.xp || 0)} ${s.xp || 0} XP</div>
                        <div style="font-size: 12px; color: #999;">正确率 ${correctRate}% | 做题 ${s.totalAnswered || 0}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 搜索筛选学生
function filterStudentList() {
    const keyword = document.getElementById('student-search-input').value.toLowerCase();
    const allStudents = getAllStudents();
    
    const filtered = allStudents.filter(s => 
        s.className.toLowerCase().includes(keyword) || 
        s.name.toLowerCase().includes(keyword)
    );
    
    renderStudentList(filtered);
}

// 显示学生详情
function showStudentDetail(userId) {
    const student = JSON.parse(localStorage.getItem(`user_${userId}`));
    if (!student) return;
    
    const modal = document.getElementById('student-detail-modal');
    const content = document.getElementById('student-detail-content');
    const title = document.getElementById('detail-title');
    
    title.textContent = `📋 ${student.name} 的学习详情`;
    
    const correctRate = student.totalAnswered > 0 
        ? Math.round(student.correctCount / student.totalAnswered * 100) 
        : 0;
    
    content.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #333;">基本信息</h4>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 10px;">
                <p style="margin: 8px 0;"><strong>班级：</strong>${student.className}</p>
                <p style="margin: 8px 0;"><strong>姓名：</strong>${student.name}</p>
                <p style="margin: 8px 0;"><strong>学号：</strong>${student.studentId}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #333;">学习数据</h4>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                <div style="background: #e3f2fd; padding: 12px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 22px; font-weight: bold; color: #1976d2;">${student.xp || 0}</div>
                    <div style="font-size: 12px; color: #666;">总经验值</div>
                </div>
                <div style="background: #e8f5e9; padding: 12px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 22px; font-weight: bold; color: #388e3c;">Lv.${getStudentLevel(student.xp || 0)}</div>
                    <div style="font-size: 12px; color: #666;">当前等级</div>
                </div>
                <div style="background: #fff3e0; padding: 12px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 22px; font-weight: bold; color: #f57c00;">${student.totalAnswered || 0}</div>
                    <div style="font-size: 12px; color: #666;">总做题数</div>
                </div>
                <div style="background: #fce4ec; padding: 12px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 22px; font-weight: bold; color: #c2185b;">${correctRate}%</div>
                    <div style="font-size: 12px; color: #666;">正确率</div>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #333;">错题情况</h4>
            <div style="background: #ffebee; padding: 15px; border-radius: 10px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold; color: #d32f2f;">${(student.wrongQuestions || []).length}</div>
                <div style="font-size: 13px; color: #666;">错题数量</div>
            </div>
        </div>
        
        <div>
            <h4 style="margin-bottom: 10px; color: #333;">登录记录</h4>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 10px;">
                <p style="margin: 8px 0;"><strong>累计登录：</strong>${(student.loginDates || []).length} 天</p>
                <p style="margin: 8px 0;"><strong>最近登录：</strong>${student.lastLoginDate || '无'}</p>
            </div>
        </div>
        
        <div style="margin-top: 20px;">
            <button onclick="deleteStudentData('${student.id}')" style="background: #d32f2f; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">
                🗑️ 删除该学生数据
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// 关闭学生详情
function closeStudentDetail() {
    document.getElementById('student-detail-modal').style.display = 'none';
}

// 获取学生等级
function getStudentLevel(xp) {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xp) {
            return LEVELS[i].level;
        }
    }
    return 1;
}

// 获取所有学生
function getAllStudents() {
    const students = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('user_')) {
            try {
                students.push(JSON.parse(localStorage.getItem(key)));
            } catch (e) {}
        }
    }
    return students;
}

// 导出所有数据
function exportAllData() {
    const students = getAllStudents();
    const data = {
        exportTime: new Date().toISOString(),
        totalStudents: students.length,
        students: students
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `科学题库_学生数据_${new Date().toLocaleDateString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('✅ 数据导出成功！');
}

// 删除学生数据
function deleteStudentData(userId) {
    if (confirm('确定要删除该学生的所有数据吗？此操作不可恢复！')) {
        localStorage.removeItem(`user_${userId}`);
        closeStudentDetail();
        updateTeacherPage();
        alert('✅ 学生数据已删除');
    }
}

// 将教师相关函数挂载到window，确保HTML onclick可以调用
window.showStudentDetail = showStudentDetail;
window.closeStudentDetail = closeStudentDetail;
window.filterStudentList = filterStudentList;
window.exportAllData = exportAllData;
window.deleteStudentData = deleteStudentData;

// 页面切换
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// 登录处理
function handleLogin() {
    const className = document.getElementById('class-name').value.trim();
    const name = document.getElementById('student-name').value.trim();
    const id = document.getElementById('student-id').value.trim();

    // 验证信息
    const validation = validateStudent(className, name, id);
    
    if (!validation.valid) {
        alert('❌ ' + validation.message + '\n\n请检查：班级、姓名、学号是否匹配');
        return;
    }
    
    // 教师登录
    if (validation.isTeacher) {
        showTeacherPage();
        return;
    }

    // 生成用户ID（用班级+姓名+学号作为唯一标识）
    const userId = `${className}_${name}_${id}`;
    
    // 检查是否已有该用户数据
    let userData = localStorage.getItem(`user_${userId}`);
    const today = new Date().toDateString();
    
    if (userData) {
        currentUser = JSON.parse(userData);
        
        // 每日登录奖励：每天第一次登录+1经验
        if (currentUser.lastLoginDate !== today) {
            currentUser.xp += 1;
            currentUser.lastLoginDate = today;
            // 记录登录日期
            if (!currentUser.loginDates) currentUser.loginDates = [];
            if (!currentUser.loginDates.includes(today)) {
                currentUser.loginDates.push(today);
            }
            setTimeout(() => {
                alert('📅 每日登录奖励：+1 经验值！');
            }, 500);
        }
    } else {
        // 新用户（白名单内的首次登录）
        currentUser = {
            id: userId,
            className: className,
            name: name,
            studentId: id,
            totalAnswered: 0,
            correctCount: 0,
            wrongQuestions: [],
            xp: 1, // 首次登录奖励1经验
            currentLevel: 1,
            streakDays: 0,
            lastPracticeDate: null,
            lastLoginDate: today,
            answeredQuestions: [], // 记录做过的题目ID
            loginDates: [today] // 记录所有登录日期
        };
        setTimeout(() => {
            alert(`🎉 欢迎 ${name} 同学！\n首次登录奖励：+1 经验值！`);
        }, 500);
    }

    // 保存登录状态
    saveUserData();
    localStorage.setItem('scienceQuizUser', JSON.stringify(currentUser));
    showPage('home-page');
    updateHomePage();
}

// 退出登录
function handleLogout() {
    if (confirm('确定要退出吗？你的数据会保存在本机上。')) {
        localStorage.removeItem('scienceQuizUser');
        currentUser = null;
        showPage('login-page');
    }
}

// 更新主页数据
function updateHomePage() {
    if (!currentUser) return;

    document.getElementById('welcome-text').textContent = `${currentUser.name}，加油！`;
    
    // 计算当前等级
    const currentLevel = getCurrentLevel();
    const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1);
    const xpForNext = nextLevel ? nextLevel.xp - currentLevel.xp : 0;
    const xpInLevel = currentLevel.xp - LEVELS.find(l => l.level === currentLevel.level).xp;
    const xpNeeded = nextLevel ? nextLevel.xp - LEVELS.find(l => l.level === currentLevel.level).xp : 1;
    const xpPercent = Math.min(100, (xpInLevel / xpNeeded) * 100);

    document.getElementById('level-badge').textContent = `Lv.${currentLevel.level} ${currentLevel.name}`;
    document.getElementById('exp-fill').style.width = `${xpPercent}%`;
    document.getElementById('exp-text').textContent = `${currentUser.xp} XP`;
    
    // 统计数据
    const correctRate = currentUser.totalAnswered > 0 
        ? Math.round((currentUser.correctCount / currentUser.totalAnswered) * 100) 
        : 0;
    
    document.getElementById('total-answered').textContent = currentUser.totalAnswered;
    document.getElementById('correct-rate').textContent = `${correctRate}%`;
    document.getElementById('wrong-count').textContent = currentUser.wrongQuestions.length;
    document.getElementById('streak-days').textContent = currentUser.streakDays;
}

// 获取当前等级
function getCurrentLevel() {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (currentUser.xp >= LEVELS[i].xp) {
            return LEVELS[i];
        }
    }
    return LEVELS[0];
}

// 开始刷题
function startQuiz(mode) {
    quizMode = mode;
    currentQuestionIndex = 0;
    userAnswers = [];

    if (mode === 'practice') {
        // 顺序刷题：按题目顺序
        currentQuiz = [...QUESTIONS];
        document.getElementById('quiz-title').textContent = '顺序刷题';
    } else if (mode === 'random') {
        // 随机刷题：每次20题
        const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
        currentQuiz = shuffled.slice(0, 20);
        document.getElementById('quiz-title').textContent = '随机练习（20题）';
    }

    showPage('quiz-page');
    showQuestion();
}

// 显示当前题目
function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    
    document.getElementById('quiz-progress').textContent = 
        `${currentQuestionIndex + 1}/${currentQuiz.length}`;
    
    document.getElementById('question-type').textContent = 
        question.type === 'choice' ? '单选题' : '判断题';
    
    document.getElementById('question-text').textContent = question.question;

    // 生成选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionEl.dataset.index = index;
        optionEl.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionEl);
    });

    // 如果之前选过，显示选中状态
    const previousAnswer = userAnswers[currentQuestionIndex];
    if (previousAnswer !== undefined) {
        highlightSelectedOption(previousAnswer, question.answer);
    }
}

// 选择选项
function selectOption(index) {
    // 移除其他选中状态
    document.querySelectorAll('.option').forEach(el => {
        el.classList.remove('selected');
    });

    // 添加选中状态
    const selectedEl = document.querySelector(`.option[data-index="${index}"]`);
    selectedEl.classList.add('selected');

    // 保存答案
    userAnswers[currentQuestionIndex] = index;
}

// 高亮显示已选和正确答案
function highlightSelectedOption(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('.option');
    
    options.forEach((el, index) => {
        el.classList.add('show-answer');
        if (index === correctIndex) {
            el.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== correctIndex) {
            el.classList.add('wrong');
        }
    });

    // 显示解析
    const question = currentQuiz[currentQuestionIndex];
    if (question.explanation) {
        const explanationEl = document.createElement('div');
        explanationEl.className = 'explanation';
        explanationEl.innerHTML = `<strong>解析：</strong>${question.explanation}`;
        document.getElementById('options-container').appendChild(explanationEl);
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        // 显示当前题的答案
        const question = currentQuiz[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        if (userAnswer !== undefined) {
            highlightSelectedOption(userAnswer, question.answer);
        }
        
        setTimeout(() => {
            currentQuestionIndex--;
            showQuestion();
        }, 300);
    }
}

// 下一题
function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('请先选择答案！');
        return;
    }

    // 显示当前题的答案
    const question = currentQuiz[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    highlightSelectedOption(userAnswer, question.answer);

    // 延迟一下再跳转，让用户看到对错
    setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 800);
}

// 完成练习
function finishQuiz() {
    let correctCount = 0;
    let wrongCount = 0;
    const newWrongQuestions = [];

    currentQuiz.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.answer;

        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
            // 检查是否已经在错题本中
            if (!currentUser.wrongQuestions.find(q => q.id === question.id)) {
                newWrongQuestions.push({
                    id: question.id,
                    question: question.question,
                    userAnswer: userAnswer,
                    correctAnswer: question.answer,
                    options: question.options,
                    explanation: question.explanation,
                    date: new Date().toISOString()
                });
            }
        }
    });

    // 新经验值算法：做对几题得几个经验值
    const xpEarned = correctCount;
    
    // 更新用户数据
    currentUser.totalAnswered += currentQuiz.length;
    currentUser.correctCount += correctCount;
    currentUser.wrongQuestions = [...currentUser.wrongQuestions, ...newWrongQuestions];
    currentUser.xp += xpEarned;

    // 更新连续打卡
    const today = new Date().toDateString();
    if (currentUser.lastPracticeDate !== today) {
        if (currentUser.lastPracticeDate === new Date(Date.now() - 86400000).toDateString()) {
            currentUser.streakDays++;
        } else {
            currentUser.streakDays = 1;
        }
        currentUser.lastPracticeDate = today;
    }

    // 记录做过的题目
    currentQuiz.forEach(q => {
        if (!currentUser.answeredQuestions.includes(q.id)) {
            currentUser.answeredQuestions.push(q.id);
        }
    });

    // 保存用户数据
    saveUserData();

    // 显示结果
    showResult(correctCount, wrongCount, xpEarned);
}

// 显示结果
function showResult(correct, wrong, xp) {
    const total = correct + wrong;
    const rate = Math.round((correct / total) * 100);

    document.getElementById('result-emoji').textContent = rate >= 80 ? '🎉' : rate >= 60 ? '👍' : '💪';
    document.getElementById('result-title').textContent = 
        rate >= 80 ? '太棒了！' : rate >= 60 ? '不错哦！' : '继续加油！';
    
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = wrong;
    document.getElementById('result-rate').textContent = `${rate}%`;
    document.getElementById('result-xp').textContent = `+${xp}`;

    // 检查是否升级
    const oldLevel = getCurrentLevel();
    const newLevel = LEVELS.find(l => l.level === oldLevel.level + 1);
    if (newLevel && currentUser.xp >= newLevel.xp) {
        setTimeout(() => {
            alert(`🎊 恭喜升级！你现在是 Lv.${newLevel.level} ${newLevel.name}！`);
        }, 500);
    }

    showPage('result-page');
}

// 从结果页查看错题
function reviewWrongFromResult() {
    showWrongPage();
}

// 显示错题本
function showWrongPage() {
    const wrongList = document.getElementById('wrong-list');
    const emptyState = document.getElementById('wrong-empty');

    if (currentUser.wrongQuestions.length === 0) {
        wrongList.innerHTML = '';
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        wrongList.innerHTML = '';

        currentUser.wrongQuestions.forEach(q => {
            const item = document.createElement('div');
            item.className = 'wrong-item';
            
            const userAnswerText = q.options[q.userAnswer] || '未作答';
            const correctAnswerText = q.options[q.correctAnswer];
            
            item.innerHTML = `
                <div class="wrong-question">${q.question}</div>
                <div class="wrong-answer">你的答案：${String.fromCharCode(65 + q.userAnswer)}. ${userAnswerText}</div>
                <div class="correct-answer">正确答案：${String.fromCharCode(65 + q.correctAnswer)}. ${correctAnswerText}</div>
                ${q.explanation ? `<div style="margin-top:10px;font-size:12px;color:#666;">解析：${q.explanation}</div>` : ''}
            `;
            wrongList.appendChild(item);
        });
    }

    showPage('wrong-page');
}

// 清空错题
function clearWrongQuestions() {
    if (confirm('确定要清空所有错题吗？')) {
        currentUser.wrongQuestions = [];
        saveUserData();
        showWrongPage();
    }
}

// 显示等级页面
function showLevelPage() {
    const levelList = document.getElementById('level-list');
    levelList.innerHTML = '';

    const currentLevel = getCurrentLevel();

    LEVELS.forEach(level => {
        const isLocked = currentUser.xp < level.xp;
        const isCurrent = level.level === currentLevel.level;
        
        const item = document.createElement('div');
        item.className = `level-item ${isLocked ? 'locked' : ''} ${isCurrent ? 'current' : ''}`;
        
        item.innerHTML = `
            <span class="level-icon">${level.icon}</span>
            <div class="level-info">
                <h4>Lv.${level.level} ${level.name}</h4>
                <p>需要 ${level.xp} 经验值</p>
            </div>
            ${isCurrent ? '<span style="color:#667eea;font-weight:bold;margin-left:auto;">当前</span>' : ''}
            ${isLocked ? '<span style="margin-left:auto;">🔒</span>' : ''}
        `;
        
        levelList.appendChild(item);
    });

    showPage('level-page');
}

// 保存用户数据
function saveUserData() {
    if (currentUser) {
        localStorage.setItem(`user_${currentUser.id}`, JSON.stringify(currentUser));
        localStorage.setItem('scienceQuizUser', JSON.stringify(currentUser));
        updateHomePage();
    }
}

// 导出数据功能（隐藏功能，按 Ctrl+E）
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'e') {
        const data = {
            user: currentUser,
            allUsers: getAllUsers()
        };
        console.log('导出数据:', data);
        alert('数据已导出到控制台（按F12查看）');
    }
});

// 获取所有用户（用于教师查看）
function getAllUsers() {
    const users = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('user_')) {
            try {
                users.push(JSON.parse(localStorage.getItem(key)));
            } catch (e) {}
        }
    }
    return users;
}
