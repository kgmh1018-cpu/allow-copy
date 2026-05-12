// =============================================
// BOOKMARKLET CODE — 여기만 수정
// =============================================
const BOOKMARKLET_CODE = `javascript:(function(){var _m='allow-copy v1.0 | 2026.05.12';var f=0;function unlock(d){if(!d||!d.body)return;try{['contextmenu','selectstart','copy','dragstart'].forEach(function(ev){d.addEventListener(ev,function(e){e.stopPropagation();},true);});try{var st=d.createElement('style');st.textContent='*{user-select:auto!important;-webkit-user-select:auto!important;}';d.head.appendChild(st);}catch(err){}var all=d.querySelectorAll('*');var batch=function(i){var end=Math.min(i+200,all.length);for(;i<end;i++){var tag=all[i].tagName;if(tag!=='SCRIPT'&&tag!=='STYLE'&&tag!=='SVG'&&tag!=='CANVAS'){all[i].style.userSelect='auto';all[i].style.webkitUserSelect='auto';}}if(end<all.length)(window.requestIdleCallback||setTimeout)(function(){batch(end);});};batch(0);}catch(e){f++;}}try{unlock(document);}catch(e){f++;}document.querySelectorAll('iframe').forEach(function(fr){try{unlock(fr.contentDocument);}catch(e){f++;}});try{var old=document.getElementById('__unlock_toast__');if(old)old.remove();var z=parseFloat(getComputedStyle(document.documentElement).zoom)||1;var sc=1/z;var isWarn=f>0;var color=isWarn?%27#FF9F0A':'#32D74B';var msg=isWarn?'일부 iframe 제한 ('+f+'개)':'복사 방지 해제 완료';var svgCheck='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';var svgWarn='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2L12.5 12H1.5L7 2Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 6V8.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/><circle cx="7" cy="10.5" r="0.75" fill="white"/></svg>';var t=document.createElement('div');t.id='__unlock_toast__';t.style.cssText='position:fixed;top:24px;left:50%;transform:translateX(-50%) translateY(-10px) scale('+sc+');transform-origin:top center;z-index:2147483647;display:flex;align-items:center;gap:9px;background:rgba(28,28,30,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:0.5px solid rgba(255,255,255,0.12);border-radius:999px;padding:8px 16px 8px 8px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;font-size:13px;font-weight:500;color:#fff;letter-spacing:-0.01em;opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;pointer-events:none;white-space:nowrap;';var ic=document.createElement('span');ic.innerHTML=isWarn?svgWarn:svgCheck;ic.style.cssText='width:24px;height:24px;border-radius:50%;background:'+color+';display:flex;align-items:center;justify-content:center;flex-shrink:0;';var tx=document.createElement('span');tx.textContent=msg;t.appendChild(ic);t.appendChild(tx);document.body.appendChild(t);requestAnimationFrame(function(){t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0) scale('+sc+')';});setTimeout(function(){t.style.opacity='0';t.style.transform='translateX(-50%) translateY(-10px) scale('+sc+')';setTimeout(function(){t.remove();},250);},800);}catch(err){alert(f>0?'일부 프레임 제한 ('+f+'개)\n나머지 복사 해제 완료':'복사 방지 해제 완료');}})();`;
// =============================================

document.getElementById('bookmarklet-link').href = BOOKMARKLET_CODE;
document.getElementById('bookmarklet-link-modal').href = BOOKMARKLET_CODE;

// ── Modal ──
const overlay    = document.getElementById('modalOverlay');
const installBtn = document.getElementById('installBtn');
const closeBtn   = document.getElementById('closeBtn');

installBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn.addEventListener('click',   () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

// ── Accordion ──
document.getElementById('accTrigger').addEventListener('click', () => {
  document.getElementById('accordion').classList.toggle('open');
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

const SLOT_EMPTY_HTML  = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>Allow-Copy`;
const SLOT_FILLED_HTML = `<div style="width:12px;height:12px;border-radius:3px;background:#1d1d1f;flex-shrink:0;"></div>Allow-Copy`;

const ANIM_CYCLE  = 4200;
const ANIM_SAFETY = 5000;

let animLock    = false;
let animTimer   = null;
let safetyTimer = null;

function scheduleAnim(delay = ANIM_CYCLE) {
  clearTimeout(animTimer);
  animTimer = setTimeout(runAnim, delay);
}

function resetAnim(reschedule = true) {
  clearTimeout(animTimer);
  clearTimeout(safetyTimer);
  animLock = false;
  fakeCursor.style.transition  = 'none';
  fakeCursor.style.opacity     = '0';
  fakeCursor.style.transform   = 'scale(1)';
  bookmarkBar.style.transition = 'none';
  bookmarkBar.classList.remove('visible');
  bmSlot.classList.remove('highlight');
  bmSlot.innerHTML = SLOT_EMPTY_HTML;
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
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    t.style.opacity = '0';
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
  const targetX  = slotRect.left + slotRect.width  / 2 - 10;
  const targetY  = slotRect.top  + slotRect.height / 2 - 10;
  bookmarkBar.style.transform  = '';
  bookmarkBar.style.transition = '';

  const btnRect = dragBtn.getBoundingClientRect();
  const startX  = btnRect.left + btnRect.width  / 2 - 10;
  const startY  = btnRect.top  + btnRect.height / 2 - 10;

  fakeCursor.style.transition = 'none';
  fakeCursor.style.transform  = 'scale(1)';
  fakeCursor.style.left       = startX + 'px';
  fakeCursor.style.top        = startY + 'px';
  fakeCursor.style.opacity    = '0';

  setTimeout(() => {
    fakeCursor.style.transition = 'opacity 0.22s ease';
    fakeCursor.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    fakeCursor.style.transition = 'left 0.85s cubic-bezier(0.4,0,0.2,1), top 0.85s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease';
    fakeCursor.style.left = targetX + 'px';
    fakeCursor.style.top  = targetY + 'px';
  }, 500);

  setTimeout(() => {
    bookmarkBar.classList.add('visible');
  }, 700);

  setTimeout(() => {
    bmSlot.classList.add('highlight');
    bmSlot.innerHTML = SLOT_FILLED_HTML;
  }, 1380);

  setTimeout(() => {
    fakeCursor.style.transition = 'transform 0.08s ease, opacity 0.22s ease';
    fakeCursor.style.transform = 'scale(0.78)';
    setTimeout(() => { fakeCursor.style.transform = 'scale(1)'; }, 120);
    showDemoToast();
  }, 1560);

  setTimeout(() => {
    fakeCursor.style.transition = 'opacity 0.22s ease, transform 0.08s ease';
    fakeCursor.style.opacity = '0';
  }, 2700);

  setTimeout(() => {
    bmSlot.classList.remove('highlight');
    bmSlot.innerHTML = SLOT_EMPTY_HTML;
  }, 2900);

  setTimeout(() => {
    bookmarkBar.classList.remove('visible');
    clearTimeout(safetyTimer);
    animLock = false;
    scheduleAnim();
  }, 3200);
}

dragBtn.addEventListener('dragstart', () => resetAnim());
document.getElementById('bookmarklet-link-modal').addEventListener('dragstart', () => resetAnim());

installBtn.addEventListener('click', () => resetAnim(false));
closeBtn.addEventListener('click',   () => scheduleAnim(800));
overlay.addEventListener('click', e => { if (e.target === overlay) scheduleAnim(800); });

document.addEventListener('visibilitychange', () => {
  if (document.hidden) resetAnim(false);
  else scheduleAnim(1500);
});

scheduleAnim(2800);
