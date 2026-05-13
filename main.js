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

const ANIM_CYCLE  = 5000;
const ANIM_SAFETY = 9000;

let animLock    = false;
let animTimers  = [];
let rafIds      = [];
let nextTimer   = null;
let safetyTimer = null;

function addTimer(fn, delay) {
  const id = setTimeout(fn, delay);
  animTimers.push(id);
  return id;
}

function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

function cancelRafs() {
  rafIds.forEach(cancelAnimationFrame);
  rafIds = [];
}

function animDrag(cFx, cFy, cTx, cTy, gFx, gFy, gTx, gTy, dur, onDone) {
  const cdx = cTx - cFx, cdy = cTy - cFy;
  const cp1x = cFx + cdx * 0.12, cp1y = cFy + cdy * 0.04;
  const cp2x = cFx + cdx * 0.78, cp2y = cFy + cdy * 0.58;
  const gdx = gTx - gFx, gdy = gTy - gFy;
  const gp1x = gFx + gdx * 0.12, gp1y = gFy + gdy * 0.04;
  const gp2x = gFx + gdx * 0.78, gp2y = gFy + gdy * 0.58;
  let prevGx = gFx;
  const start = performance.now();
  function tick(now) {
    const raw = Math.min((now - start) / dur, 1);
    const t = easeOutQuart(raw), mt = 1 - t;
    const cx = mt*mt*mt*cFx + 3*mt*mt*t*cp1x + 3*mt*t*t*cp2x + t*t*t*cTx;
    const cy = mt*mt*mt*cFy + 3*mt*mt*t*cp1y + 3*mt*t*t*cp2y + t*t*t*cTy;
    fakeCursor.style.left = cx + 'px';
    fakeCursor.style.top  = cy + 'px';
    const gx = mt*mt*mt*gFx + 3*mt*mt*t*gp1x + 3*mt*t*t*gp2x + t*t*t*gTx;
    const gy = mt*mt*mt*gFy + 3*mt*mt*t*gp1y + 3*mt*t*t*gp2y + t*t*t*gTy;
    const tilt = Math.max(-5, Math.min(5, (gx - prevGx) * 0.65));
    dragGhost.style.left      = gx + 'px';
    dragGhost.style.top       = gy + 'px';
    dragGhost.style.transform = `scale(1) rotate(${tilt}deg)`;
    prevGx = gx;
    if (raw < 1) { const id = requestAnimationFrame(tick); rafIds.push(id); }
    else if (onDone) onDone();
  }
  const id = requestAnimationFrame(tick); rafIds.push(id);
}

function scheduleAnim(delay = ANIM_CYCLE) {
  clearTimeout(nextTimer);
  nextTimer = setTimeout(runAnim, delay);
}

function resetAnim(reschedule = true) {
  animTimers.forEach(clearTimeout);
  animTimers = [];
  cancelRafs();
  clearTimeout(nextTimer);
  clearTimeout(safetyTimer);
  animLock = false;

  fakeCursor.style.transition = 'none';
  fakeCursor.style.opacity    = '0';
  fakeCursor.style.transform  = 'scale(1)';
  fakeCursor.style.left       = '';
  fakeCursor.style.top        = '';

  dragGhost.style.transition  = 'none';
  dragGhost.style.opacity     = '0';
  dragGhost.style.left        = '';
  dragGhost.style.top         = '';
  dragGhost.style.transform   = '';

  bookmarkBar.style.transition = 'none';
  bookmarkBar.classList.remove('visible');

  bmSlot.classList.remove('success');
  bmSlot.innerHTML = SLOT_EMPTY_HTML;
  bmSlot.style.transform  = '';
  bmSlot.style.transition = '';

  dragBtn.style.transition = '';
  dragBtn.classList.remove('is-dimmed');

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
  const ghostW  = dragGhost.offsetWidth  || 120;
  const ghostH  = dragGhost.offsetHeight || 36;

  const cFromX = btnRect.left  + btnRect.width  / 2 - 10;
  const cFromY = btnRect.top   + btnRect.height / 2 - 10;
  const cToX   = slotRect.left + slotRect.width  / 2 - 10;
  const cToY   = slotRect.top  + slotRect.height / 2 - 10;

  const gFromX = btnRect.left  + btnRect.width  / 2 - ghostW / 2;
  const gFromY = btnRect.top   + btnRect.height / 2 - ghostH / 2;
  const gToX   = slotRect.left + slotRect.width  / 2 - ghostW / 2;
  const gToY   = slotRect.top  + slotRect.height / 2 - ghostH / 2;

  fakeCursor.style.transition = 'none';
  fakeCursor.style.left       = cFromX + 'px';
  fakeCursor.style.top        = cFromY + 'px';
  fakeCursor.style.transform  = 'scale(1)';
  fakeCursor.style.opacity    = '0';
  void fakeCursor.offsetHeight;

  dragGhost.style.transition = 'none';
  dragGhost.style.left       = gFromX + 'px';
  dragGhost.style.top        = gFromY + 'px';
  dragGhost.style.transform  = 'scale(1.02) rotate(-3deg)';
  dragGhost.style.opacity    = '0';

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.3s ease';
    fakeCursor.style.opacity    = '1';
  }, 80);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.12s cubic-bezier(0.4,0,0.6,1)';
    fakeCursor.style.transform  = 'scale(0.88)';
  }, 520);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    fakeCursor.style.transform  = 'scale(1)';

    dragBtn.style.transition = 'opacity 0.35s ease';
    dragBtn.classList.add('is-dimmed');

    dragGhost.style.transition = 'opacity 0.22s ease, transform 0.3s cubic-bezier(0.34,1.4,0.64,1)';
    dragGhost.style.opacity    = '1';
    dragGhost.style.transform  = 'scale(1) rotate(0deg)';
    dragGhost.style.boxShadow  = '0 8px 28px rgba(0,0,0,0.18)';
  }, 660);

  addTimer(() => {
    bookmarkBar.style.transition = '';
    bookmarkBar.classList.add('visible');
  }, 840);

  addTimer(() => {
    animDrag(cFromX, cFromY, cToX, cToY, gFromX, gFromY, gToX, gToY, 920, null);
  }, 1080);

  addTimer(() => {
    bmSlot.classList.add('success');
    bmSlot.innerHTML = SLOT_FILLED_HTML;
    bmSlot.style.transition = 'transform 0.12s cubic-bezier(0.4,0,0.2,1)';
    bmSlot.style.transform  = 'scale(1.07) translateZ(0)';

    dragGhost.style.transition = 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.4,0,1,1)';
    dragGhost.style.opacity    = '0';
    dragGhost.style.transform  = 'scale(0.7) rotate(0deg)';
  }, 2040);

  addTimer(() => {
    bmSlot.style.transition = 'transform 0.3s cubic-bezier(0.34,1.55,0.64,1)';
    bmSlot.style.transform  = 'scale(1) translateZ(0)';
  }, 2180);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.11s cubic-bezier(0.4,0,0.6,1)';
    fakeCursor.style.transform  = 'scale(0.88)';
    bmSlot.style.transition     = 'transform 0.11s cubic-bezier(0.4,0,0.6,1)';
    bmSlot.style.transform      = 'scale(0.93) translateZ(0)';
  }, 2520);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    fakeCursor.style.transform  = 'scale(1)';
    bmSlot.style.transition     = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    bmSlot.style.transform      = 'scale(1) translateZ(0)';
    showDemoToast();
  }, 2650);

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.4s ease';
    fakeCursor.style.opacity    = '0';
  }, 3300);

  addTimer(() => {
    dragBtn.style.transition = 'opacity 0.55s ease';
    dragBtn.classList.remove('is-dimmed');
  }, 4400);

  addTimer(() => {
    bmSlot.classList.remove('success');
    bmSlot.innerHTML = SLOT_EMPTY_HTML;
    bmSlot.style.transform  = '';
    bmSlot.style.transition = '';
    bookmarkBar.classList.remove('visible');
    dragGhost.style.transition = 'none';
    dragGhost.style.opacity    = '0';
    clearTimeout(safetyTimer);
    animLock = false;
    scheduleAnim();
  }, 5500);
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