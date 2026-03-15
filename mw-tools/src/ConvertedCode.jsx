function ConvertedCode() {
  return (
    <div className="modweeb-generator">
      {/* Checkbox للتحكم بالشاشة الكاملة */}
      <input type="checkbox" id="fullscreenToggle" className="tocI" />

      {/* المودال الخاص بالشاشة الكاملة */}
      <div className="fullscreen-modal">
        <div className="fullscreen-header">
          <div className="fullscreen-title" id="fullscreenTitle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21H3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 21L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span id="fullscreenTitleText">معاينة المقال</span>
          </div>
          <div className="fullscreen-actions" id="fullscreenActions">
            {/* الأزرار ستضاف ديناميكياً */}
          </div>
          <button className="modweeb-gen-btn icon-only fullscreen-close" title="خروج">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21H3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 21L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="fullscreen-content" id="fullscreenContent">
          {/* المحتوى سيضاف ديناميكياً */}
        </div>
      </div>

      <div id="modweebGenStatus" className="modweeb-gen-status" />
      
      <div className="modweeb-gen-header">
        <div className="modweeb-gen-header-content">
          <div className="modweeb-gen-header-actions">
            {/* زر التوليد */}
            <button className="modweeb-gen-btn primary" title="توليد الكود">
              <svg className="line" viewBox="0 0 24 24">
                <path d="M9.00002 13C8.34002 13.33 7.79002 13.82 7.38002 14.43C7.15002 14.78 7.15002 15.22 7.38002 15.57C7.79002 16.18 8.34002 16.67 9.00002 17" />
                <path d="M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17" />
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" />
                <path d="M2.22998 8.01L21.45 8" />
              </svg>
              توليد
            </button>
            
            <button className="modweeb-gen-btn icon-only" title="حفظ تلقائي">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.99001V20.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20.99H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16.99V7.99C4 3.99 6 1.99 10 1.99H14C18 1.99 20 3.99 20 7.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 16.99V12.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className="modweeb-gen-btn primary">
              <svg className="line" viewBox="0 0 24 24">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" />
              </svg>
              نسخ
            </button>

            <button className="modweeb-gen-btn icon-only" title="معاينة">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42 13.98 8.42 12C8.42 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47 3.72 5.18 5.8 2.89 9.4C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="modweeb-gen-btn icon-only" title="الإحصائيات">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="modweeb-gen-btn icon-only" title="عرض الكود">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L6 12L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10L18 12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="modweeb-gen-btn icon-only" title="تنزيل الكود">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16L12 20L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 16.74C22.03 16.19 23 14.69 23 12.06C23 7.56 21.75 6 18 6H6C2.25 6 1 7.56 1 12.06C1 14.69 1.97 16.19 4 16.74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="modweeb-gen-main">
        {/* اللوحة الرئيسية (المحرر) */}
        <div className="modweeb-gen-editor">
          <div className="modweeb-gen-toolbar" id="toolbar">
            {/* مجموعة إضافة العناصر */}
            <div className="modweeb-gen-toolbar-group">
              <button className="modweeb-gen-btn icon-only" title="فقرة">
                <svg className="line" viewBox="0 0 24 24">
                  <path d="M4.87988 4.5C4.87988 3.4 5.77988 2.5 6.87988 2.5H11.9999C14.6199 2.5 16.7499 4.63 16.7499 7.25C16.7499 9.87 14.6199 12 11.9999 12H4.87988V4.5Z" />
                  <path d="M4.87988 12H14.3799C16.9999 12 19.1299 14.13 19.1299 16.75C19.1299 19.37 16.9999 21.5 14.3799 21.5H6.87988C5.77988 21.5 4.87988 20.6 4.87988 19.5V12V12Z" />
                </svg>
              </button>
              <button className="modweeb-gen-btn icon-only" title="صورة">
                <svg className="line" viewBox="0 0 24 24">
                  <path d="M21.6799 16.9599L18.5499 9.64988C17.4899 7.16988 15.5399 7.06988 14.2299 9.42988L12.3399 12.8399C11.3799 14.5699 9.58993 14.7199 8.34993 13.1699L8.12993 12.8899C6.83993 11.2699 5.01993 11.4699 4.08993 13.3199L2.36993 16.7699C1.15993 19.1699 2.90993 21.9999 5.58993 21.9999H18.3499C20.9499 21.9999 22.6999 19.3499 21.6799 16.9599Z" />
                  <path d="M6.96997 8C8.62682 8 9.96997 6.65685 9.96997 5C9.96997 3.34315 8.62682 2 6.96997 2C5.31312 2 3.96997 3.34315 3.96997 5C3.96997 6.65685 5.31312 8 6.96997 8Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="modweeb-gen-blocks" id="blocksContainer" />
        </div>
      </div>

      <input type="file" id="fileInput" style={{ display: 'none' }} accept=".json" />
    </div>
  );
}

export default ConvertedCode;
