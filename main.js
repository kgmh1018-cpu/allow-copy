// =============================================
// BOOKMARKLET CODE — 여기만 수정
// =============================================
const BOOKMARKLET_CODE = `javascript:(function(){var _m='allow-copy v1.0 | 2026.05.12';var f=0;function unlock(d){if(!d||!d.body)return;try{['contextmenu','selectstart','copy','dragstart'].forEach(function(ev){d.addEventListener(ev,function(e){e.stopPropagation();},true);});try{var st=d.createElement('style');st.textContent='*{user-select:auto!important;-webkit-user-select:auto!important;}';d.head.appendChild(st);}catch(err){}var all=d.querySelectorAll('*');var batch=function(i){var end=Math.min(i+200,all.length);for(;i<end;i++){var tag=all[i].tagName;if(tag!=='SCRIPT'&&tag!=='STYLE'&&tag!=='SVG'&&tag!=='CANVAS'){all[i].style.userSelect='auto';all[i].style.webkitUserSelect='auto';}}if(end<all.length)(window.requestIdleCallback||setTimeout)(function(){batch(end);});};batch(0);}catch(e){f++;}}try{unlock(document);}catch(e){f++;}document.querySelectorAll('iframe').forEach(function(fr){try{unlock(fr.contentDocument);}catch(e){f++;}});try{var old=document.getElementById('__unlock_toast__');if(old)old.remove();var z=parseFloat(getComputedStyle(document.documentElement).zoom)||1;var sc=1/z;var isWarn=f>0;var color=isWarn?%27#FF9F0A':'#32D74B';var msg=isWarn?'일부 iframe 제한 ('+f+'개)':'복사 방지 해제 완료';var svgCheck='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';var svgWarn='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2L12.5 12H1.5L7 2Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 6V8.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/><circle cx="7" cy="10.5" r="0.75" fill="white"/></svg>';var t=document.createElement('div');t.id='__unlock_toast__';t.style.cssText='position:fixed;top:24px;left:50%;transform:translateX(-50%) translateY(-10px) scale('+sc+');transform-origin:top center;z-index:2147483647;display:flex;align-items:center;gap:9px;background:rgba(28,28,30,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:0.5px solid rgba(255,255,255,0.12);border-radius:999px;padding:8px 16px 8px 8px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;font-size:13px;font-weight:500;color:#fff;letter-spacing:-0.01em;opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;pointer-events:none;white-space:nowrap;';var ic=document.createElement('span');ic.innerHTML=isWarn?svgWarn:svgCheck;ic.style.cssText='width:24px;height:24px;border-radius:50%;background:'+color+';display:flex;align-items:center;justify-content:center;flex-shrink:0;';var tx=document.createElement('span');tx.textContent=msg;t.appendChild(ic);t.appendChild(tx);document.body.appendChild(t);requestAnimationFrame(function(){t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0) scale('+sc+')';});setTimeout(function(){t.style.opacity='0';t.style.transform='translateX(-50%) translateY(-10px) scale('+sc+')';setTimeout(function(){t.remove();},250);},800);}catch(err){alert(f>0?'일부 프레임 제한 ('+f+'개)\n나머지 복사 해제 완료':'복사 방지 해제 완료');}})();`;
// =============================================

document.getElementById('bookmarklet-link').href = BOOKMARKLET_CODE;

// ── Modal ──
const overlay    = document.getElementById('modalOverlay');
const installBtn = document.getElementById('installBtn');
const closeBtn   = document.getElementById('closeBtn');

installBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn.addEventListener('click',   () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

// ── FAQ ──
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = document.getElementById(trigger.dataset.target);
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Copy button ──
document.getElementById('copyBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(BOOKMARKLET_CODE).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
        <polyline points="20 6 9 16 4 11"/>
      </svg>
      복사됨`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
        코드 복사`;
    }, 2000);
  });
});

// ── Drag demo animation ──
const fakeCursor  = document.getElementById('fakeCursor');
const bookmarkBar = document.getElementById('bookmarkBar');
const bmSlot      = document.getElementById('bmSlot');
const dragBtn     = document.getElementById('bookmarklet-link');
const dragGhost   = document.getElementById('drag-ghost');
const pageEl      = document.querySelector('.page');

const SLOT_EMPTY_HTML  = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>Allow-Copy`;
const SLOT_FILLED_HTML = `<div style="width:12px;height:12px;border-radius:3px;background:#1d1d1f;flex-shrink:0;"></div>Allow-Copy`;

const ANIM_CYCLE  = 4500;
const ANIM_SAFETY = 5500;

let animLock    = false;
let animTimers  = [];
let nextTimer   = null;
let safetyTimer = null;

function addTimer(fn, delay) {
  const id = setTimeout(fn, delay);
  animTimers.push(id);
  return id;
}

function scheduleAnim(delay = ANIM_CYCLE) {
  clearTimeout(nextTimer);
  nextTimer = setTimeout(runAnim, delay);
}

function resetAnim(reschedule = true) {
  animTimers.forEach(clearTimeout);
  animTimers = [];
  clearTimeout(nextTimer);
  clearTimeout(safetyTimer);
  animLock = false;

  fakeCursor.style.transition = 'none';
  fakeCursor.style.opacity    = '0';
  fakeCursor.style.transform  = 'scale(1) translateZ(0)';

  dragGhost.style.transition  = 'none';
  dragGhost.style.opacity     = '0';

  bookmarkBar.style.transition = 'none';
  bookmarkBar.classList.remove('visible');

  bmSlot.classList.remove('success');
  bmSlot.innerHTML = SLOT_EMPTY_HTML;

  pageEl.classList.remove('is-dimmed');

  const old = document.getElementById('__unlock_toast__');
  if (old) old.remove();

  if (reschedule && !document.hidden) scheduleAnim();
}

function showDemoToast() {
  const old = document.getElementById('__unlock_toast__');
  if (old) old.remove();

  const svgCheck = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const t = document.createElement('div');
  t.id = '__unlock_toast__';
  t.style.cssText = 'position:fixed;top:50px;left:50%;transform:translateX(-50%) translateY(-10px);z-index:2147483647;display:flex;align-items:center;gap:9px;background:rgba(28,28,30,0.88);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:0.5px solid rgba(255,255,255,0.12);border-radius:999px;padding:8px 16px 8px 8px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;font-size:13px;font-weight:500;color:#fff;letter-spacing:-0.01em;opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;pointer-events:none;white-space:nowrap;';

  const ic = document.createElement('span');
  ic.innerHTML = svgCheck;
  ic.style.cssText = 'width:24px;height:24px;border-radius:50%;background:#32D74B;display:flex;align-items:center;justify-content:center;flex-shrink:0;';

  const tx = document.createElement('span');
  tx.textContent = '복사 방지 해제 완료';

  t.appendChild(ic);
  t.appendChild(tx);
  document.body.appendChild(t);

  requestAnimationFrame(() => {
    t.style.opacity   = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    t.style.opacity   = '0';
    t.style.transform = 'translateX(-50%) translateY(-10px)';
    setTimeout(() => t.remove(), 250);
  }, 1400);
}

function runAnim() {
  if (animLock || overlay.classList.contains('open') || document.hidden) {
    scheduleAnim();
    return;
  }
  animLock = true;
  safetyTimer = setTimeout(() => resetAnim(), ANIM_SAFETY);

  bookmarkBar.style.transition = 'none';
  bookmarkBar.style.transform  = 'translateY(0)';
  void bookmarkBar.offsetHeight;
  const slotRect = bmSlot.getBoundingClientRect();
  bookmarkBar.style.transform  = '';
  bookmarkBar.style.transition = '';

  const btnRect = dragBtn.getBoundingClientRect();
  const ghostW  = dragGhost.offsetWidth;
  const ghostH  = dragGhost.offsetHeight;

  const cursorAtBtn  = { x: btnRect.left  + btnRect.width  / 2 - 10, y: btnRect.top  + btnRect.height / 2 - 10 };
  const cursorAtSlot = { x: slotRect.left + slotRect.width / 2 - 10, y: slotRect.top + slotRect.height / 2 - 10 };
  const ghostAtBtn   = { x: btnRect.left  + btnRect.width  / 2 - ghostW / 2, y: btnRect.top  + btnRect.height / 2 - ghostH / 2 };
  const ghostAtSlot  = { x: slotRect.left + slotRect.width / 2 - ghostW / 2, y: slotRect.top + slotRect.height / 2 - ghostH / 2 };

  fakeCursor.style.transition = 'none';
  fakeCursor.style.left       = cursorAtBtn.x + 'px';
  fakeCursor.style.top        = cursorAtBtn.y + 'px';
  fakeCursor.style.transform  = 'scale(1) translateZ(0)';
  fakeCursor.style.opacity    = '0';
  void fakeCursor.offsetHeight;

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.22s ease';
    fakeCursor.style.opacity    = '1';
  }, 30);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.1s ease';
    fakeCursor.style.transform  = 'scale(0.78) translateZ(0)';
  }, 400);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)';
    fakeCursor.style.transform  = 'scale(1) translateZ(0)';
  }, 510);

  addTimer(() => {
    dragGhost.style.transition = 'none';
    dragGhost.style.left       = ghostAtBtn.x + 'px';
    dragGhost.style.top        = ghostAtBtn.y + 'px';
    dragGhost.style.transform  = 'scale(1.08) rotate(-3deg) translateZ(0)';
    dragGhost.style.boxShadow  = '0 16px 40px rgba(0,0,0,0.28)';
    dragGhost.style.opacity    = '0.7';
    void dragGhost.offsetHeight;
    pageEl.classList.add('is-dimmed');
  }, 550);

  addTimer(() => {
    bookmarkBar.style.transition = '';
    bookmarkBar.classList.add('visible');
  }, 700);

  addTimer(() => {
    fakeCursor.style.transition = 'left 0.7s cubic-bezier(0.34,1.56,0.64,1), top 0.7s cubic-bezier(0.34,1.56,0.64,1)';
    fakeCursor.style.left       = cursorAtSlot.x + 'px';
    fakeCursor.style.top        = cursorAtSlot.y + 'px';

    dragGhost.style.transition  = 'left 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.06s, top 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.06s';
    dragGhost.style.left        = ghostAtSlot.x + 'px';
    dragGhost.style.top         = ghostAtSlot.y + 'px';
  }, 800);

  addTimer(() => {
    bmSlot.classList.add('success');
    bmSlot.innerHTML = SLOT_FILLED_HTML;

    dragGhost.style.transition = 'transform 0.28s ease, opacity 0.2s ease';
    dragGhost.style.transform  = 'scale(0.3) translateZ(0)';
    dragGhost.style.opacity    = '0';

    fakeCursor.style.transition = 'transform 0.08s ease';
    fakeCursor.style.transform  = 'scale(0.78) translateZ(0)';
    addTimer(() => {
      fakeCursor.style.transition = 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)';
      fakeCursor.style.transform  = 'scale(1) translateZ(0)';
    }, 100);

    pageEl.classList.remove('is-dimmed');
    showDemoToast();
  }, 1700);

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.22s ease';
    fakeCursor.style.opacity    = '0';
  }, 2200);

  addTimer(() => {
    bmSlot.classList.remove('success');
    bmSlot.innerHTML = SLOT_EMPTY_HTML;
    bookmarkBar.classList.remove('visible');
    dragGhost.style.transition = 'none';
    dragGhost.style.opacity    = '0';
    clearTimeout(safetyTimer);
    animLock = false;
    scheduleAnim();
  }, 2600);
}

dragBtn.addEventListener('dragstart', () => resetAnim());

installBtn.addEventListener('click', () => resetAnim(false));
closeBtn.addEventListener('click',   () => scheduleAnim(800));
overlay.addEventListener('click', e => { if (e.target === overlay) scheduleAnim(800); });

document.addEventListener('visibilitychange', () => {
  if (document.hidden) resetAnim(false);
  else scheduleAnim(1500);
});

scheduleAnim(2800);