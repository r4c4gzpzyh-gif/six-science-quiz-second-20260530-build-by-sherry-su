// ========================================
// 小学科学闯关题库 - 云端同步版
// 新增：Supabase云端数据同步 + 教师后台查看所有学生数据
// ========================================

// ===== Supabase配置 =====
const SUPABASE_URL = 'https://cbzaqplpnzjmrbudaomp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiemFxcGxwbnpqbXJidWRhb21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTAyMjIsImV4cCI6MjA5NTcyNjIyMn0.R6B9dJBXUJArehVcu6fhS9ccZD4E2ueWrmMOgTmMMuI';

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

// 学生白名单
const STUDENT_WHITELIST = {
    "601": {"1": "曹籽毅", "2": "田奕辰", "3": "陈静汐", "4": "陈念", "5": "陈若萱", "6": "池梓文", "7": "丁玮琦", "8": "方馨", "9": "冯梓霖", "10": "符雨泽", "11": "管歆瑶", "12": "郭潇潇", "13": "郭宇博", "14": "何玥瑶", "15": "侯森晨", "16": "胡斌", "17": "胡诗涵", "18": "黄昊天", "19": "贾沐晨", "20": "曹晨馨", "21": "兰棋宇", "22": "李飞跃", "23": "李羽涵", "24": "凌宇萱", "25": "刘鸿伟", "26": "刘一航", "27": "刘梓煊", "28": "毛馨伊", "29": "施振宇", "30": "杨思哲", "31": "姚铭浩", "32": "周宏玮", "33": "余浩轩", "34": "詹弘毅", "35": "占佳钰", "36": "陶梓豪", "37": "郑金旭", "38": "李宇杭", "39": "夏诚铠", "40": "刘熙宸", "41": "张骏喆", "42": "陈晟睿"},
    "602": {"1": "陈孙希睿", "2": "张雨诺", "3": "高晟轩", "4": "刘欢墨", "5": "江宇航", "6": "李嘉佑", "7": "李恬欣", "8": "李运帷", "9": "龙子翊", "10": "张逸轩", "11": "汤恩泽", "12": "任方子淇", "13": "梅雨蒙", "14": "任翔", "15": "尚广驰", "16": "孙博文", "17": "邱诗微", "18": "高宇铠", "19": "王恩泽", "20": "王俊熙", "21": "王洛辰", "22": "周雨萱", "23": "赵一萱", "24": "夏至圻", "25": "项子馨", "26": "苗雨彤", "27": "徐可馨", "28": "杨博均", "29": "杨舒画", "30": "姚宇豪", "31": "余辰希", "32": "余定", "33": "袁紫仪", "34": "张恩", "35": "张诗意", "36": "杜曼青", "37": "陈凯琳", "38": "王赞博"},
    "603": {"1": "陈梦涵", "2": "曹欣宇", "3": "冯翌迪", "4": "韩雨馨", "5": "俞子珩", "6": "黄家译", "7": "蒋瑾萱", "8": "李雅志", "9": "李语萱", "10": "柳金鹏", "11": "罗毅馨", "12": "骆钰涵", "13": "朱宇杰", "14": "缪赟希", "15": "潘思越", "16": "任俊宇", "17": "施念", "18": "张诗菡", "19": "王思雯", "20": "王歆雅", "21": "文湘元", "22": "吴菲彤", "23": "薛程格", "24": "杨若菡", "25": "杨悦彤", "26": "叶彬驰", "27": "张郭伊函", "28": "张皓轩", "29": "张书萱", "30": "张筱唯", "31": "张瑛钧", "32": "张哲涵", "33": "赵依冉", "34": "周梦琪", "35": "朱子昂", "36": "朱莉安妮", "37": "许屹诚", "38": "徐甜钰", "39": "谢一戈", "40": "张艺林", "41": "盛钰轩", "42": "傅一帆"}
};

// 全局状态
let currentUser = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizMode = 'practice';
// 新增：记录已经获得经验的题目（防止重复获得）
let xpAwardedQuestions = [];

// ===== 新增：同步数据到Supabase =====
// ===== 同步数据到Supabase（字段名已修正！）=====
async function syncToSupabase(userData) {
    if (!userData || !userData.id) return;
    
    const data = {
        student_id: userData.studentId,
        name: userData.name,
        class: userData.className,
        exp: userData.xp || 0,                         // ✅ 改了：xp → exp
        level: getStudentLevel(userData.xp || 0),
        total_questions: userData.totalAnswered || 0,  // ✅ 改了：total_answered → total_questions
        correct_count: userData.correctCount || 0,
        wrong_count: userData.wrongQuestions ? userData.wrongQuestions.length : 0,
        wrong_questions: JSON.stringify(userData.wrongQuestions || []),
        last_active: new Date().toISOString()
    };
    
    try {
        // 先尝试更新
        let response = await fetch(
            SUPABASE_URL + '/rest/v1/students?class=eq.' + userData.className + 
            '&student_id=eq.' + userData.studentId + 
            '&name=eq.' + encodeURIComponent(userData.name),
            {
                method: 'PATCH',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(data)
            }
        );
        
        // 如果不存在，就插入新记录
        if (response.status === 404) {
            await fetch(SUPABASE_URL + '/rest/v1/students', {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    created_at: new Date().toISOString()
                })
            });
        }
        
        console.log('✅ 数据已同步到云端');
    } catch (err) {
        console.log('同步到云端失败：', err);
    }
}

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
    document.getElementById('sync-cloud-btn').addEventListener('click', syncAllStudentsFromCloud);
    document.getElementById('close-detail-btn').addEventListener('click', closeStudentDetail);
    document.getElementById('student-search-input').addEventListener('input', filterStudentList);
}

// 教师登录入口
window.showTeacherPage = showTeacherPage;

// 显示教师页面
function showTeacherPage() {
    currentUser = null;
    localStorage.removeItem('scienceQuizUser');
    showPage('teacher-page');
    updateTeacherPage();
}

// ===== 新增：从云端同步所有学生数据 =====
async function syncAllStudentsFromCloud() {
    const btn = document.getElementById('sync-cloud-btn');
    btn.textContent = '正在同步...';
    btn.disabled = true;
    
    try {
        const response = await fetch(SUPABASE_URL + '/rest/v1/students?select=*&order=class,student_id', {
            headers: { 'apikey': SUPABASE_KEY }
        });
        
        const students = await response.json();
        
        // 保存到本地
        students.forEach(s => {
            const userId = `${s.class}_${s.name}_${s.student_id}`;
            const localData = {
                id: userId,
                className: s.class,
                name: s.name,
                studentId: s.student_id,
                xp: s.xp || 0,
                totalAnswered: s.total_questions || 0,
                correctCount: s.correct_count || 0,
                wrongQuestions: JSON.parse(s.wrong_questions || '[]'),
                lastActive: s.last_active
            };
            localStorage.setItem(`user_${userId}`, JSON.stringify(localData));
        });
        
        alert(`✅ 同步成功！从云端获取了 ${students.length} 名学生的数据`);
        updateTeacherPage();
    } catch (err) {
        alert('❌ 同步失败：' + err.message);
    }
    
    btn.textContent = '🔄 从云端同步';
    btn.disabled = false;
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
        <div class="summary-item">
            <div class="summary-value">${allStudents.length}</div>
            <div class="summary-label">注册学生数</div>
        </div>
        <div class="summary-item">
            <div class="summary-value">${totalXp}</div>
            <div class="summary-label">总经验值</div>
        </div>
        <div class="summary-item">
            <div class="summary-value">${totalAnswered}</div>
            <div class="summary-label">总做题数</div>
        </div>
        <div class="summary-item">
            <div class="summary-value">${avgCorrectRate}%</div>
            <div class="summary-label">平均正确率</div>
        </div>
    `;
    
    // 学生列表
    renderStudentList(allStudents);
}

// 渲染学生列表
function renderStudentList(students) {
    const listEl = document.getElementById('student-list');
    
    if (students.length === 0) {
        listEl.innerHTML = '<div class="empty-state">暂无学生数据</div>';
        return;
    }
    
    // 按经验值排序
    students.sort((a, b) => (b.xp || 0) - (a.xp || 0));
    
    listEl.innerHTML = students.map((s, index) => {
        const correctRate = s.totalAnswered > 0 
            ? Math.round(s.correctCount / s.totalAnswered * 100) 
            : 0;
        
        return `
            <div class="student-card" onclick="showStudentDetail('${s.id}')">
                <div class="student-rank">#${index + 1}</div>
                <div class="student-info">
                    <div class="student-name">${s.name}</div>
                    <div class="student-meta">${s.className}班 | 学号: ${s.studentId}</div>
                </div>
                <div class="student-stats">
                    <div class="stat">Lv.${getStudentLevel(s.xp || 0)}</div>
                    <div class="stat">${s.xp || 0} XP</div>
                    <div class="stat">正确率 ${correctRate}%</div>
                    <div class="stat">做题 ${s.totalAnswered || 0}</div>
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
        <div class="detail-section">
            <h3>基本信息</h3>
            <p>班级：${student.className}班</p>
            <p>姓名：${student.name}</p>
            <p>学号：${student.studentId}</p>
        </div>
        
        <div class="detail-section">
            <h3>学习数据</h3>
            <p>${student.xp || 0} 总经验值</p>
            <p>Lv.${getStudentLevel(student.xp || 0)} 当前等级</p>
            <p>${student.totalAnswered || 0} 总做题数</p>
            <p>${correctRate}% 正确率</p>
        </div>
        
        <div class="detail-section">
            <h3>错题情况</h3>
            <p>${(student.wrongQuestions || []).length} 错题数量</p>
        </div>
        
        <div class="detail-section">
            <h3>登录记录</h3>
            <p>累计登录：${(student.loginDates || []).length} 天</p>
            <p>最近登录：${student.lastLoginDate || '无'}</p>
        </div>
        
        <button class="danger-btn" onclick="deleteStudentData('${userId}')">🗑️ 删除该学生数据</button>
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

// 将函数挂载到window
window.showStudentDetail = showStudentDetail;
window.closeStudentDetail = closeStudentDetail;
window.filterStudentList = filterStudentList;
window.exportAllData = exportAllData;
window.deleteStudentData = deleteStudentData;
window.syncAllStudentsFromCloud = syncAllStudentsFromCloud;

// 页面切换
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// 登录处理
async function handleLogin() {
    const className = document.getElementById('class-name').value.trim();
    const name = document.getElementById('student-name').value.trim();
    const id = document.getElementById('student-id').value.trim();
    
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
    
    // 生成用户ID
    const userId = `${className}_${name}_${id}`;
    
    // ========== 先从云端拉取数据 ==========
    let cloudData = null;
    try {
        const response = await fetch(
            SUPABASE_URL + '/rest/v1/students?class=eq.' + className + '&student_id=eq.' + id + '&name=eq.' + encodeURIComponent(name),
            { headers: { 'apikey': SUPABASE_KEY } }
        );
        const students = await response.json();
        if (students.length > 0) {
            cloudData = students[0];
        }
    } catch (err) {
        console.log('从云端拉取失败，使用本地数据');
    }

    let userData = localStorage.getItem(`user_${userId}`);
    const today = new Date().toDateString();

    if (cloudData) {
        // 云端有数据，优先用云端的！
        currentUser = {
            id: userId,
            className: cloudData.class,
            name: cloudData.name,
            studentId: cloudData.student_id,
            totalAnswered: cloudData.total_questions || 0,
            correctCount: cloudData.correct_count || 0,
            wrongQuestions: JSON.parse(cloudData.wrong_questions || '[]'),
            xp: cloudData.exp || 0,
            lastLoginDate: today,
            lastPracticeDate: cloudData.last_active,
            answeredQuestions: [],
            loginDates: []
        };
        localStorage.setItem(`user_${userId}`, JSON.stringify(currentUser));
        console.log('✅ 已从云端同步数据');
    } else if (userData) {
        currentUser = JSON.parse(userData);
        
        // 每日登录奖励
        if (currentUser.lastLoginDate !== today) {
            currentUser.xp += 1;
            currentUser.lastLoginDate = today;
            if (!currentUser.loginDates) currentUser.loginDates = [];
            if (!currentUser.loginDates.includes(today)) {
                currentUser.loginDates.push(today);
            }
            setTimeout(() => {
                alert('📅 每日登录奖励：+1 经验值！');
            }, 500);
        }
    } else {
        // 新用户
        currentUser = {
            id: userId,
            className: className,
            name: name,
            studentId: id,
            totalAnswered: 0,
            correctCount: 0,
            wrongQuestions: [],
            xp: 1,
            currentLevel: 1,
            streakDays: 0,
            lastPracticeDate: null,
            lastLoginDate: today,
            answeredQuestions: [],
            loginDates: [today]
        };
        
        setTimeout(() => {
            alert(`🎉 欢迎 ${name} 同学！\n首次登录奖励：+1 经验值！`);
        }, 500);
    }
    
    // 保存登录状态并同步到云端
    saveUserData();
    syncToSupabase(currentUser);
    
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
    
    const currentLevel = getCurrentLevel();
    const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1);
    const xpForNext = nextLevel ? nextLevel.xp - currentLevel.xp : 0;
    const xpInLevel = currentLevel.xp - LEVELS.find(l => l.level === currentLevel.level).xp;
    const xpNeeded = nextLevel ? nextLevel.xp - LEVELS.find(l => l.level === currentLevel.level).xp : 1;
    const xpPercent = Math.min(100, (xpInLevel / xpNeeded) * 100);
    
    document.getElementById('level-badge').textContent = `Lv.${currentLevel.level} ${currentLevel.name}`;
    document.getElementById('exp-fill').style.width = `${xpPercent}%`;
    document.getElementById('exp-text').textContent = `${currentUser.xp} XP`;
    
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
    xpAwardedQuestions = [];
    
    if (mode === 'practice') {
        currentQuiz = [...QUESTIONS];
        document.getElementById('quiz-title').textContent = '顺序刷题';
        
        // 新增：检查是否有保存的进度
        const savedProgress = localStorage.getItem('practiceProgress_' + currentUser.id);
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            // 恢复已获得经验的题目记录
            if (progress.xpAwardedQuestions) {
                xpAwardedQuestions = progress.xpAwardedQuestions;
            }
            // 询问用户是否继续上次的进度
            const continuePractice = confirm(
                `检测到你上次刷到第 ${progress.currentIndex + 1} 题\n\n` +
                `✅ 要从上次停下的地方继续吗？\n` +
                `（点击"确定"继续，点击"取消"从头开始）`
            );
            if (continuePractice) {
                currentQuestionIndex = progress.currentIndex;
            } else {
                // 用户选择从头开始，清除进度
                localStorage.removeItem('practiceProgress_' + currentUser.id);
                xpAwardedQuestions = [];
            }
        }
    } else if (mode === 'random') {
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
    
    document.getElementById('quiz-progress').textContent = `${currentQuestionIndex + 1}/${currentQuiz.length}`;
    document.getElementById('question-type').textContent = question.type === 'choice' ? '单选题' : '判断题';
    document.getElementById('question-text').textContent = question.question;
    
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
    
    const previousAnswer = userAnswers[currentQuestionIndex];
    if (previousAnswer !== undefined) {
        highlightSelectedOption(previousAnswer, question.answer);
    }
}

// 选择选项
function selectOption(index) {
    document.querySelectorAll('.option').forEach(el => {
        el.classList.remove('selected');
    });
    
    const selectedEl = document.querySelector(`.option[data-index="${index}"]`);
    selectedEl.classList.add('selected');
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
    
    const question = currentQuiz[currentQuestionIndex];
    if (question.explanation) {
        const explanationEl = document.createElement('div');
        explanationEl.className = 'explanation';
        explanationEl.innerHTML = `解析：${question.explanation}`;
        document.getElementById('options-container').appendChild(explanationEl);
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
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
    
    const question = currentQuiz[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const isCorrect = userAnswer === question.answer;
    
    // 新增：做对就立即加经验值
    if (isCorrect && !xpAwardedQuestions.includes(question.id)) {
        currentUser.xp += 1;
        xpAwardedQuestions.push(question.id);
        // 更新统计
        currentUser.totalAnswered += 1;
        currentUser.correctCount += 1;
        // 立即保存并同步
        saveUserData();
        syncToSupabase(currentUser);
        updateHomePage();
    } else if (!isCorrect && !xpAwardedQuestions.includes(question.id)) {
        // 做错也要记录到统计
        currentUser.totalAnswered += 1;
        // 添加到错题本
        if (!currentUser.wrongQuestions.find(q => q.id === question.id)) {
            currentUser.wrongQuestions.push({
                id: question.id,
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.answer,
                options: question.options,
                explanation: question.explanation,
                date: new Date().toISOString()
            });
        }
        xpAwardedQuestions.push(question.id);
        // 立即保存并同步
        saveUserData();
        syncToSupabase(currentUser);
        updateHomePage();
    }
    
    highlightSelectedOption(userAnswer, question.answer);
    
    // 新增：保存当前进度（到localStorage）
    if (quizMode === 'practice') {
        localStorage.setItem('practiceProgress_' + currentUser.id, JSON.stringify({
            currentIndex: currentQuestionIndex,
            xpAwardedQuestions: xpAwardedQuestions
        }));
    }
    
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
    // 因为现在每做一题就加经验了，这里只统计显示用
    let correctCount = 0;
    let wrongCount = 0;
    
    currentQuiz.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer === question.answer) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });
    
    // 本次练习获得的总经验（用于显示）
    const xpEarned = correctCount;
    
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
    
    // 保存用户数据并同步到云端
    saveUserData();
    syncToSupabase(currentUser);
    
    // 清空进度保存（因为已经完成了）
    if (quizMode === 'practice') {
        localStorage.removeItem('practiceProgress_' + currentUser.id);
    }
    
    showResult(correctCount, wrongCount, xpEarned);
}

// 显示结果
function showResult(correct, wrong, xp) {
    const total = correct + wrong;
    const rate = Math.round((correct / total) * 100);
    
    document.getElementById('result-emoji').textContent = rate >= 80 ? '🎉' : rate >= 60 ? '👍' : '💪';
    document.getElementById('result-title').textContent = rate >= 80 ? '太棒了！' : rate >= 60 ? '不错哦！' : '继续加油！';
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = wrong;
    document.getElementById('result-rate').textContent = `${rate}%`;
    document.getElementById('result-xp').textContent = `+${xp}`;
    
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
                ${q.explanation ? `<div class="explanation">解析：${q.explanation}</div>` : ''}
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
        syncToSupabase(currentUser);
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
            <span class="level-name">Lv.${level.level} ${level.name}</span>
            <span class="level-xp">需要 ${level.xp} 经验值</span>
            ${isCurrent ? '<span class="current-badge">当前</span>' : ''}
            ${isLocked ? '<span class="lock-icon">🔒</span>' : ''}
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

// 导出数据功能
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'e') {
        const data = {
            user: currentUser,
            allUsers: getAllStudents()
        };
        console.log('导出数据:', data);
        alert('数据已导出到控制台（按F12查看）');
    }
});

// 获取所有用户
function getAllStudents() {
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