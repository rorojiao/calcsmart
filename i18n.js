/* CalcSmart i18n */
const T = {
  // Global
  siteName: { zh: 'CalcSmart 智算', en: 'CalcSmart' },
  home: { zh: '首页', en: 'Home' },
  mortgage: { zh: '房贷计算器', en: 'Mortgage' },
  tax: { zh: '个税计算器', en: 'Tax' },
  bmi: { zh: 'BMI计算器', en: 'BMI' },
  unit: { zh: '单位换算', en: 'Unit' },
  countdown: { zh: '倒计时', en: 'Countdown' },
  calculate: { zh: '计算', en: 'Calculate' },
  reset: { zh: '重置', en: 'Reset' },
  donateTip: { zh: '☕ 觉得好用？打赏一杯咖啡', en: '☕ Find it useful? Buy me a coffee' },
  donateAddr: { zh: 'ETH/USDT 打赏地址:', en: 'ETH/USDT Tip:' },
  footer: { zh: '© 2026 CalcSmart 智算 · 免费在线计算器', en: '© 2026 CalcSmart · Free Online Calculators' },

  // Index
  indexTitle: { zh: '免费在线计算器合集', en: 'Free Online Calculator Collection' },
  indexSub: { zh: '精准、快速、好用的在线计算工具', en: 'Accurate, fast, and easy-to-use online calculators' },
  mortgageDesc: { zh: '等额本息/等额本金，月供与还款明细', en: 'Monthly payment, total interest, amortization' },
  taxDesc: { zh: '2026中国个税，专项扣除，到手工资', en: 'China income tax with deductions' },
  bmiDesc: { zh: '身高体重计算BMI，健康建议', en: 'Calculate BMI with health advice' },
  unitDesc: { zh: '长度、重量、温度等万能换算', en: 'Length, weight, temperature & more' },
  countdownDesc: { zh: '纪念日、倒计时、在一起多少天', en: 'Anniversary, countdown, days together' },

  // Mortgage
  mortgageTitle: { zh: '房贷计算器 — 在线计算月供', en: 'Mortgage Calculator — Monthly Payment' },
  mortgageSub: { zh: '支持等额本息和等额本金两种还款方式', en: 'Equal payment & equal principal methods' },
  loanAmount: { zh: '贷款金额（万元）', en: 'Loan Amount (¥10K)' },
  loanYears: { zh: '贷款年限（年）', en: 'Loan Term (years)' },
  annualRate: { zh: '年利率（%）', en: 'Annual Rate (%)' },
  equalPayment: { zh: '等额本息', en: 'Equal Payment' },
  equalPrincipal: { zh: '等额本金', en: 'Equal Principal' },
  monthlyPayment: { zh: '月供', en: 'Monthly Payment' },
  totalInterest: { zh: '总利息', en: 'Total Interest' },
  totalPayment: { zh: '还款总额', en: 'Total Payment' },
  firstMonth: { zh: '首月月供', en: 'First Month' },
  lastMonth: { zh: '末月月供', en: 'Last Month' },
  month: { zh: '月', en: 'Mo' },
  principal: { zh: '本金', en: 'Principal' },
  interest: { zh: '利息', en: 'Interest' },
  balance: { zh: '余额', en: 'Balance' },
  repaySchedule: { zh: '还款明细表', en: 'Amortization Schedule' },
  paymentChart: { zh: '月供走势图', en: 'Payment Chart' },
  yuan: { zh: '元', en: '¥' },

  // Tax
  taxTitle: { zh: '个人所得税计算器 2026', en: 'Income Tax Calculator 2026' },
  taxSub: { zh: '中国个税计算，输入月薪算到手工资', en: 'China income tax, calculate take-home pay' },
  monthlySalary: { zh: '税前月薪（元）', en: 'Monthly Salary (¥)' },
  socialInsurance: { zh: '五险一金（元/月）', en: 'Social Insurance (¥/mo)' },
  specialDeduction: { zh: '专项附加扣除（元/月）', en: 'Special Deduction (¥/mo)' },
  threshold: { zh: '起征点', en: 'Threshold' },
  taxableIncome: { zh: '应纳税所得额', en: 'Taxable Income' },
  monthlyTax: { zh: '月缴个税', en: 'Monthly Tax' },
  takeHome: { zh: '到手工资', en: 'Take-home Pay' },
  annualTax: { zh: '年缴个税', en: 'Annual Tax' },
  annualTakeHome: { zh: '年到手', en: 'Annual Net' },

  // BMI
  bmiTitle: { zh: 'BMI计算器 — 身体质量指数', en: 'BMI Calculator — Body Mass Index' },
  bmiSub: { zh: '输入身高体重，获取BMI值和健康建议', en: 'Enter height & weight for BMI and health advice' },
  height: { zh: '身高（cm）', en: 'Height (cm)' },
  weight: { zh: '体重（kg）', en: 'Weight (kg)' },
  yourBmi: { zh: '你的BMI', en: 'Your BMI' },
  underweight: { zh: '偏瘦', en: 'Underweight' },
  normal: { zh: '正常', en: 'Normal' },
  overweight: { zh: '偏胖', en: 'Overweight' },
  obese: { zh: '肥胖', en: 'Obese' },
  bmiAdviceUnder: { zh: '建议适当增加营养摄入，加强锻炼', en: 'Consider increasing nutrition and exercise' },
  bmiAdviceNormal: { zh: '体重正常，请继续保持健康生活方式', en: 'Healthy weight! Keep up your lifestyle' },
  bmiAdviceOver: { zh: '建议控制饮食，增加运动量', en: 'Consider diet control and more exercise' },
  bmiAdviceObese: { zh: '建议咨询医生，制定减重计划', en: 'Please consult a doctor for a weight plan' },

  // Unit
  unitTitle: { zh: '万能单位换算器', en: 'Universal Unit Converter' },
  unitSub: { zh: '长度、重量、温度、面积、体积、速度实时换算', en: 'Length, weight, temp, area, volume, speed converter' },
  length: { zh: '长度', en: 'Length' },
  weightCat: { zh: '重量', en: 'Weight' },
  temperature: { zh: '温度', en: 'Temperature' },
  area: { zh: '面积', en: 'Area' },
  volume: { zh: '体积', en: 'Volume' },
  speed: { zh: '速度', en: 'Speed' },

  // Countdown
  countdownTitle: { zh: '纪念日 & 倒计时计算器', en: 'Anniversary & Countdown Calculator' },
  countdownSub: { zh: '计算两个日期之间的天数，生成分享卡片', en: 'Calculate days between dates, generate share cards' },
  startDate: { zh: '开始日期', en: 'Start Date' },
  endDate: { zh: '结束日期（默认今天）', en: 'End Date (default today)' },
  daysCount: { zh: '天', en: 'days' },
  togetherText: { zh: '我们已经在一起', en: "We've been together for" },
  daysUntil: { zh: '距离目标还有', en: 'Days until target:' },
  copyShare: { zh: '复制分享文字', en: 'Copy Share Text' },
  copied: { zh: '已复制！', en: 'Copied!' },
};

let lang = localStorage.getItem('cs_lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

function t(key) { return T[key] ? (T[key][lang] || T[key].en) : key; }

function setLang(l) {
  lang = l;
  localStorage.setItem('cs_lang', l);
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.getAttribute('data-t');
    if (el.tagName === 'INPUT' || el.tagName === 'SELECT') el.placeholder = t(k);
    else el.textContent = t(k);
  });
  document.querySelectorAll('[data-t-title]').forEach(el => {
    document.title = t(el.getAttribute('data-t-title'));
  });
  if (typeof onLangChange === 'function') onLangChange();
}

function toggleLang() {
  setLang(lang === 'zh' ? 'en' : 'zh');
}

document.addEventListener('DOMContentLoaded', () => setLang(lang));

/* Shared: header HTML generator */
function renderHeader(active) {
  const nav = [
    ['index.html', 'home'], ['mortgage.html', 'mortgage'], ['tax.html', 'tax'],
    ['bmi.html', 'bmi'], ['unit.html', 'unit'], ['countdown.html', 'countdown']
  ];
  return `<header class="header"><div class="header-inner">
    <a href="index.html" class="logo">⚡ <span data-t="siteName">CalcSmart</span></a>
    <button class="nav-toggle" onclick="document.querySelector('.nav').classList.toggle('open')">☰</button>
    <nav class="nav">${nav.map(([h,k])=>`<a href="${h}" class="${active===k?'active':''}" data-t="${k}">${t(k)}</a>`).join('')}
    <button class="lang-btn" onclick="toggleLang()">🌐 ${lang==='zh'?'EN':'中文'}</button></nav>
  </div></header>`;
}

function renderFooter() {
  return `<div class="donate"><p data-t="donateTip">${t('donateTip')}</p><p><span data-t="donateAddr">${t('donateAddr')}</span> <code>0xEeD903787Cb86bcCc17777E5C7d10A4c2De43823</code></p></div>
  <footer class="footer" data-t="footer">${t('footer')}</footer>`;
}

function fmt(n) { return n.toLocaleString('zh-CN', {minimumFractionDigits:2, maximumFractionDigits:2}); }
