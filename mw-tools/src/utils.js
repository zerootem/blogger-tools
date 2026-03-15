// utils.js - دوال أداة مولد المقال

// المتغيرات العامة
export let modweebBlocks = [];
export let modweebHistory = [];
export let modweebHistoryIndex = -1;
export let modweebArticleHTML = "";
export let modweebSortableInstance = null;
export let modweebDragEnabled = true;

// دالة حفظ في التاريخ
export function modweebSaveToHistory(skipRender = false) {
  modweebHistory = modweebHistory.slice(0, modweebHistoryIndex + 1);
  modweebHistory.push(JSON.parse(JSON.stringify(modweebBlocks)));
  modweebHistoryIndex++;
  if (modweebHistory.length > 50) {
    modweebHistory.shift();
    modweebHistoryIndex--;
  }
  if (!skipRender) modweebRenderBlocks();
}

// دالة إضافة كتلة جديدة
export function addBlock(type) {
  const newBlock = {
    id: Date.now() + "-" + Math.random().toString(36).substr(2, 5),
    type: type,
    content: "",
    paragraphStyle: "normal",
    dropCapChar: "",
    refSource: "",
    imageUrl: "",
    imageAlt: "",
    imageWidth: "1280",
    imageHeight: "720",
    imageStyle: "standard",
    gridUrls: "",
    scrollHeight: "h150",
    caption: "",
    linkUrl: "",
    linkText: "",
    linkStyle: "extL",
    buttonText: "",
    buttonUrl: "",
    buttonIcon: "",
    downloadFile: "",
    fileName: "",
    fileSize: "",
    quoteStyle: "normal",
    quoteAuthor: "",
    noteStyle: "info",
    alertStyle: "info",
    tableRows: 2,
    tableCols: 2,
    tableData: [["", ""], ["", ""]],
    tableClasses: "bordered stripped hovered",
    steps: ["الخطوة الأولى"],
    codeContent: "",
    codeLanguage: "html",
    codeComment: "",
    codeSource: "",
    tabHtml: "",
    tabCss: "",
    tabJs: "",
    tabJson: "",
    tabHtmlSource: "src/index.html",
    tabCssSource: "src/style.css",
    tabJsSource: "src/main.js",
    tabJsonSource: "src/rules.json",
    summary: "",
    details: "",
    accordions: [{ summary: "", content: "", alt: false }],
    faqItems: [{ question: "", answer: "" }],
    tocLabel: "جدول المحتويات",
    relatedTitle: "قد ترغب في قراءة هذا المنشور:",
    relatedLinks: [{ text: "", url: "" }],
    relatedAutoLabel: "منشورات ذات صلة",
    relatedMax: 6,
    relatedDataLabel: "",
    youtubeId: "",
    ratio: "4/3",
    metaDescription: "",
    thumbnailUrl: "",
    subtitle: "",
    markText: "",
    markClass: "",
    kbdText: "",
    inlineCode: ""
  };
  
  if (type === "faq") {
    newBlock.faqItems = [{ question: "", answer: "" }];
  }
  if (type === "accordionGroup") {
    newBlock.accordions = [{ summary: "", content: "", alt: false }];
  }
  
  modweebBlocks.push(newBlock);
  modweebSaveToHistory();
}

// دالة تحديث كتلة
export function updateBlock(id, field, value) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block) {
    block[field] = value;
    modweebScheduleRender();
  }
}

// دالة جدولة إعادة الرسم
export function modweebScheduleRender() {
  setTimeout(() => {
    modweebRenderBlocks();
  }, 100);
}

// دالة حذف كتلة
export function deleteBlock(id) {
  modweebBlocks = modweebBlocks.filter(b => b.id !== id);
  modweebSaveToHistory();
}

// دالة تحريك كتلة لأعلى/أسفل
export function moveBlock(id, direction) {
  const index = modweebBlocks.findIndex(b => b.id === id);
  if (direction === "up" && index > 0) {
    [modweebBlocks[index], modweebBlocks[index - 1]] = [modweebBlocks[index - 1], modweebBlocks[index]];
    modweebSaveToHistory();
  } else if (direction === "down" && index < modweebBlocks.length - 1) {
    [modweebBlocks[index], modweebBlocks[index + 1]] = [modweebBlocks[index + 1], modweebBlocks[index]];
    modweebSaveToHistory();
  }
}

// دوال الخطوات
export function addStep(id) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block) {
    if (!block.steps) block.steps = [];
    block.steps.push("");
    modweebScheduleRender();
  }
}

export function removeStep(id, index) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.steps && block.steps.length > 1) {
    block.steps.splice(index, 1);
    modweebScheduleRender();
  }
}

export function updateStep(id, index, value) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.steps && block.steps[index] !== undefined) {
    block.steps[index] = value;
    modweebScheduleRender();
  }
}

// دوال الأسئلة الشائعة
export function addFaqItem(id) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block) {
    block.faqItems.push({ question: "", answer: "" });
    modweebScheduleRender();
  }
}

export function removeFaqItem(id, index) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.faqItems && block.faqItems.length > 1) {
    block.faqItems.splice(index, 1);
    modweebScheduleRender();
  }
}

export function updateFaqItem(id, index, field, value) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.faqItems && block.faqItems[index]) {
    block.faqItems[index][field] = value;
    modweebScheduleRender();
  }
}

// دوال الأكورديون
export function addAccordionItem(id) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block) {
    block.accordions.push({ summary: "", content: "", alt: false });
    modweebScheduleRender();
  }
}

export function removeAccordionItem(id, index) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.accordions && block.accordions.length > 1) {
    block.accordions.splice(index, 1);
    modweebScheduleRender();
  }
}

export function updateAccordionItem(id, index, field, value) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.accordions && block.accordions[index]) {
    block.accordions[index][field] = value;
    modweebScheduleRender();
  }
}

// دوال الروابط ذات الصلة
export function addRelatedLink(id) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block) {
    block.relatedLinks.push({ text: "", url: "" });
    modweebScheduleRender();
  }
}

export function removeRelatedLink(id, index) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.relatedLinks && block.relatedLinks.length > 1) {
    block.relatedLinks.splice(index, 1);
    modweebScheduleRender();
  }
}

export function updateRelatedLink(id, index, field, value) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.relatedLinks && block.relatedLinks[index]) {
    block.relatedLinks[index][field] = value;
    modweebScheduleRender();
  }
}

// دالة تحديث بيانات الجدول
export function modweebUpdateTableData(block) {
  const rows = block.tableRows || 2;
  const cols = block.tableCols || 2;
  
  if (!block.tableData) block.tableData = [];
  
  while (block.tableData.length < rows) {
    block.tableData.push(Array(cols).fill(""));
  }
  while (block.tableData.length > rows) {
    block.tableData.pop();
  }
  
  block.tableData.forEach(row => {
    while (row.length < cols) row.push("");
    while (row.length > cols) row.pop();
  });
}

// دالة تحديث خلية جدول
export function updateTableCell(id, row, col, value) {
  const block = modweebBlocks.find(b => b.id === id);
  if (block && block.tableData && block.tableData[row]) {
    block.tableData[row][col] = value;
    modweebScheduleRender();
  }
}

// دالة التراجع
export function undo() {
  if (modweebHistoryIndex > 0) {
    modweebBlocks = JSON.parse(JSON.stringify(modweebHistory[--modweebHistoryIndex]));
    modweebRenderBlocks();
    modweebShowStatus("تم التراجع");
  }
}

// دالة الإعادة
export function redo() {
  if (modweebHistoryIndex < modweebHistory.length - 1) {
    modweebBlocks = JSON.parse(JSON.stringify(modweebHistory[++modweebHistoryIndex]));
    modweebRenderBlocks();
    modweebShowStatus("تم الإعادة");
  }
}

// دالة حفظ في localStorage
export function saveToLocalStorage() {
  localStorage.setItem("modweebGeneratorV2", JSON.stringify({
    blocks: modweebBlocks,
    timestamp: Date.now()
  }));
  modweebShowStatus("تم الحفظ التلقائي");
}

// دالة تحميل من localStorage
export function modweebLoadFromLocalStorage() {
  try {
    const saved = localStorage.getItem("modweebGeneratorV2");
    if (saved) {
      const data = JSON.parse(saved);
      if (data.blocks) {
        modweebBlocks = data.blocks;
        modweebSaveToHistory(true);
        modweebRenderBlocks();
      }
    }
  } catch (e) {}
}

// دالة عرض الحالة
export function modweebShowStatus(message, duration = 1600) {
  const statusEl = document.getElementById("modweebGenStatus");
  if (statusEl) {
    statusEl.textContent = message;
    statusEl.style.display = "block";
    setTimeout(() => {
      statusEl.style.display = "none";
    }, duration);
  }
}

// دالة توليد HTML كامل
export function generateFullHTML() {
  modweebArticleHTML = "";
  for (let i = 0; i < modweebBlocks.length; i++) {
    modweebArticleHTML += modweebRenderPreviewItem(modweebBlocks[i]) + "\n";
  }
  const codeArea = document.getElementById("codeArea");
  if (codeArea) codeArea.textContent = modweebArticleHTML;
  modweebShowStatus("تم توليد الكود");
  return modweebArticleHTML;
}

// دالة نسخ الكود
export function copyCode() {
  if (!modweebArticleHTML) generateFullHTML();
  navigator.clipboard.writeText(modweebArticleHTML).then(() => {
    modweebShowStatus("تم نسخ الكود");
  }).catch(() => {
    modweebShowStatus("فشل النسخ");
  });
}

// دالة نسخ المقال كاملاً
export function copyFullArticle() {
  generateFullHTML();
  copyCode();
}

// دالة تحميل الملف
export function downloadFile() {
  if (!modweebArticleHTML) generateFullHTML();
  const styleTag = document.querySelector("style");
  const styleContent = styleTag ? styleTag.innerHTML : "";
  const fullHTML = `<!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8"><title>مقالة</title><style>${styleContent}</style></head><body>${modweebArticleHTML}</body></html>`;
  const blob = new Blob([fullHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "article.html";
  a.click();
  URL.revokeObjectURL(url);
  modweebShowStatus("تم التحميل");
}

// دالة تحديث الإحصائيات
export function modweebUpdateStats() {
  let words = 0, chars = 0;
  for (let i = 0; i < modweebBlocks.length; i++) {
    const block = modweebBlocks[i];
    if (block.content) {
      const text = block.content;
      words += text.split(/\s+/).filter(w => w.length > 0).length;
      chars += text.length;
    }
  }
  
  const wordEl = document.getElementById("wordCount");
  const charEl = document.getElementById("charCount");
  const timeEl = document.getElementById("readTime");
  
  if (wordEl) wordEl.textContent = words;
  if (charEl) charEl.textContent = chars;
  if (timeEl) timeEl.textContent = Math.ceil(words / 200) + " دقيقة";
}

// دالة تبديل التبويبات
export function switchTab(tab) {
  document.querySelectorAll(".modweeb-gen-tab-content").forEach(el => {
    el.classList.remove("active");
  });
  document.querySelectorAll(".modweeb-gen-tab-btn").forEach(el => {
    el.classList.remove("active");
  });
  document.getElementById(tab + "Tab")?.classList.add("active");
  if (window.event && window.event.target) window.event.target.classList.add("active");
}

// دالة مسح الكل
export function clearAll() {
  modweebBlocks = [];
  modweebHistory = [];
  modweebHistoryIndex = -1;
  modweebRenderBlocks();
  modweebShowStatus("تم المسح");
}

// دوال إضافية (مؤقتة)
export function modweebRenderBlocks() {
  console.log("modweebRenderBlocks called", modweebBlocks);
  modweebUpdateStats();
}

export function modweebRenderPreviewItem(block) {
  return `<div>${block.type} - ${block.content || "..."}</div>`;
}
