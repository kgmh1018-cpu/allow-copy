// =============================================
// BOOKMARKLET CODE — 여기만 수정
// =============================================
const BOOKMARKLET_CODE = `javascript:(function(){var _m='allow-copy v1.1 | 2026.05.13';var f=0;function unlock(d){if(!d||!d.body)return;try{['contextmenu','selectstart','copy','dragstart'].forEach(function(ev){d.addEventListener(ev,function(e){e.stopPropagation();},true);});try{var st=d.createElement('style');st.textContent='*{user-select:auto!important;-webkit-user-select:auto!important;}';d.head.appendChild(st);}catch(err){}var all=d.querySelectorAll('*');var batch=function(i){var end=Math.min(i+200,all.length);for(;i<end;i++){var tag=all[i].tagName;if(tag!=='SCRIPT'&&tag!=='STYLE'&&tag!=='SVG'&&tag!=='CANVAS'){all[i].style.userSelect='auto';all[i].style.webkitUserSelect='auto';}}if(end<all.length)(window.requestIdleCallback||setTimeout)(function(){batch(end);});};batch(0);}catch(e){f++;}}try{unlock(document);}catch(e){f++;}document.querySelectorAll('iframe').forEach(function(fr){try{unlock(fr.contentDocument);}catch(e){f++;}});try{var old=document.getElementById('__unlock_toast__');if(old)old.remove();var z=parseFloat(getComputedStyle(document.documentElement).zoom)||1;var sc=1/z;var isWarn=f>0;var color=isWarn?'#FF9F0A':'#32D74B';var msg=isWarn?'일부 iframe 제한 ('+f+'개)':'복사 방지 해제 완료';var ns='http://www.w3.org/2000/svg';var svg=document.createElementNS(ns,'svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 14 14');svg.setAttribute('fill','none');if(isWarn){var p1=document.createElementNS(ns,'path');p1.setAttribute('d','M7 2L12.5 12H1.5L7 2Z');p1.setAttribute('stroke','white');p1.setAttribute('stroke-width','1.6');p1.setAttribute('stroke-linecap','round');p1.setAttribute('stroke-linejoin','round');var p2=document.createElementNS(ns,'path');p2.setAttribute('d','M7 6V8.5');p2.setAttribute('stroke','white');p2.setAttribute('stroke-width','1.6');p2.setAttribute('stroke-linecap','round');var ci=document.createElementNS(ns,'circle');ci.setAttribute('cx','7');ci.setAttribute('cy','10.5');ci.setAttribute('r','0.75');ci.setAttribute('fill','white');svg.appendChild(p1);svg.appendChild(p2);svg.appendChild(ci);}else{var p=document.createElementNS(ns,'path');p.setAttribute('d','M2.5 7L5.5 10L11.5 4');p.setAttribute('stroke','white');p.setAttribute('stroke-width','1.8');p.setAttribute('stroke-linecap','round');p.setAttribute('stroke-linejoin','round');svg.appendChild(p);}var t=document.createElement('div');t.id='__unlock_toast__';t.style.cssText='position:fixed;top:24px;left:50%;transform:translateX(-50%) translateY(-10px) scale('+sc+');transform-origin:top center;z-index:2147483647;display:flex;align-items:center;gap:9px;background:rgba(28,28,30,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:0.5px solid rgba(255,255,255,0.12);border-radius:999px;padding:8px 16px 8px 8px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;font-size:13px;font-weight:500;color:#fff;letter-spacing:-0.01em;opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;pointer-events:none;white-space:nowrap;';var ic=document.createElement('span');ic.style.cssText='width:24px;height:24px;border-radius:50%;background:'+color+';display:flex;align-items:center;justify-content:center;flex-shrink:0;';ic.appendChild(svg);var tx=document.createElement('span');tx.textContent=msg;t.appendChild(ic);t.appendChild(tx);document.body.appendChild(t);requestAnimationFrame(function(){requestAnimationFrame(function(){t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0) scale('+sc+')';});});setTimeout(function(){t.style.opacity='0';t.style.transform='translateX(-50%) translateY(-10px) scale('+sc+')';setTimeout(function(){t.remove();},250);},800);}catch(err){alert(f>0?'일부 프레임 제한 ('+f+'개)\n나머지 복사 해제 완료':'복사 방지 해제 완료');}})();`;
const BOOKMARKLET_CODE_ANDROID = `javascript:(function(){var%20_m='allow-copy·v1.1·2026.05.13·m';var%20f=0;function%20u(d){if(!d||!d.body)return;try{['contextmenu','selectstart','copy','dragstart'].forEach(ev=>d.addEventListener(ev,e=>e.stopPropagation(),true));try{var%20s=d.createElement('style');s.textContent='*{user-select:auto!important;-webkit-user-select:auto!important;}';d.head.appendChild(s);}catch(e){}var%20a=d.querySelectorAll('*');var%20b=function(i){var%20n=Math.min(i+200,a.length);for(;i<n;i++){var%20t=a[i].tagName;if(t!=='SCRIPT'&&t!=='STYLE'&&t!=='SVG'&&t!=='CANVAS'){a[i].style.userSelect='auto';a[i].style.webkitUserSelect='auto';}}if(n<a.length)(window.requestIdleCallback||setTimeout)(()=>b(n));};b(0);}catch(e){f++;}}try{u(document);}catch(e){f++;}document.querySelectorAll('iframe').forEach(fr=>{try{u(fr.contentDocument);}catch(e){f++;}});try{var%20old=document.getElementById('__uc__');if(old)old.remove();var%20z=parseFloat(getComputedStyle(document.documentElement).zoom)||1;var%20sc=1/z;var%20w=f>0;var%20t=document.createElement('div');t.id='__uc__';t.style.cssText='position:fixed;top:24px;left:50%;transform:translateX(-50%)%20scale('+sc+');z-index:2147483647;display:flex;align-items:center;gap:8px;background:rgba(28,28,30,0.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:0.5px%20solid%20rgba(255,255,255,0.12);border-radius:999px;padding:7px%2014px%207px%207px;font:500%2013px%20-apple-system,sans-serif;color:#fff;opacity:0;transition:opacity%20.25s;pointer-events:none;white-space:nowrap;';var%20ic=document.createElement('span');ic.textContent=w?'\u26A0':'\u2713';ic.style.cssText='width:22px;height:22px;border-radius:50%;background:'+(w?'#FF9F0A':'#32D74B')+';display:flex;align-items:center;justify-content:center;font-size:11px;';var%20tx=document.createElement('span');tx.textContent=w?'일부%20iframe%20제한%20('+f+'개)':'복사%20방지%20해제%20완료';t.appendChild(ic);t.appendChild(tx);document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';});setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),250);},800);}catch(e){alert(f>0?'일부%20프레임%20제한%20('+f+'개)':'복사%20방지%20해제%20완료');}})();`;
// =============================================

document.getElementById('bookmarklet-link').href = BOOKMARKLET_CODE;

// ── Modal ──
const overlay    = document.getElementById('modalOverlay');
const installBtn = document.getElementById('installBtn');
const closeBtn   = document.getElementById('closeBtn');

function openModal(autoFaqId) {
  overlay.classList.add('open');
  if (autoFaqId) {
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    const target = document.getElementById(autoFaqId);
    if (target) target.classList.add('open');
  }
}

installBtn.addEventListener('click', () => openModal(null));
closeBtn.addEventListener('click',   () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

// ── Mobile hint ──
const mobileHint = document.getElementById('mobileHint');
const ua = navigator.userAgent;
const isIOS     = /iPhone|iPad|iPod/i.test(ua);
const isAndroid = /Android/i.test(ua);

if (isIOS || isAndroid) {
  mobileHint.classList.add('visible');
  mobileHint.addEventListener('click', () => openModal(isIOS ? 'faq3' : 'faq4'));
}

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

// ── Copy button (Android) ──
document.getElementById('copyBtnAndroid').addEventListener('click', () => {
  navigator.clipboard.writeText(BOOKMARKLET_CODE_ANDROID).then(() => {
    const btn = document.getElementById('copyBtnAndroid');
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

const ANIM_CYCLE  = 2500;
const ANIM_SAFETY = 12000;

let animLock    = false;
let animTimers  = [];
let rafIds      = [];
let nextTimer   = null;
let safetyTimer = null;
let isUnlocked  = false; // 이스터에그 발동 여부

function addTimer(fn, delay) {
  const id = setTimeout(fn, delay);
  animTimers.push(id);
  return id;
}

function easeOutQuart(t)   { return 1 - Math.pow(1 - t, 4); }
function easeOutCubic(t)   { return 1 - Math.pow(1 - t, 3); }
function easeInOutSine(t)  { return -(Math.cos(Math.PI * t) - 1) / 2; }

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

function animCursor(toX, toY, dur, easing, onDone) {
  const fromX = parseFloat(fakeCursor.style.left) || 0;
  const fromY = parseFloat(fakeCursor.style.top)  || 0;
  const start = performance.now();
  function tick(now) {
    const raw = Math.min((now - start) / dur, 1);
    const t = easing(raw);
    fakeCursor.style.left = (fromX + (toX - fromX) * t) + 'px';
    fakeCursor.style.top  = (fromY + (toY - fromY) * t) + 'px';
    if (raw < 1) { const id = requestAnimationFrame(tick); rafIds.push(id); }
    else if (onDone) onDone();
  }
  const id = requestAnimationFrame(tick); rafIds.push(id);
}

function animCursorCurve(toX, toY, dur, easing, onTick, onDone) {
  const fromX = parseFloat(fakeCursor.style.left) || 0;
  const fromY = parseFloat(fakeCursor.style.top)  || 0;
  const dx = toX - fromX, dy = toY - fromY;
  const cp1x = fromX + dx * 0.1,  cp1y = fromY + dy * 0.02;
  const cp2x = fromX + dx * 0.75, cp2y = fromY + dy * 0.6;
  const start = performance.now();
  function tick(now) {
    const raw = Math.min((now - start) / dur, 1);
    const t = easing(raw), mt = 1 - t;
    const cx = mt*mt*mt*fromX + 3*mt*mt*t*cp1x + 3*mt*t*t*cp2x + t*t*t*toX;
    const cy = mt*mt*mt*fromY + 3*mt*mt*t*cp1y + 3*mt*t*t*cp2y + t*t*t*toY;
    fakeCursor.style.left = cx + 'px';
    fakeCursor.style.top  = cy + 'px';
    if (onTick) onTick(t);
    if (raw < 1) { const id = requestAnimationFrame(tick); rafIds.push(id); }
    else if (onDone) onDone();
  }
  const id = requestAnimationFrame(tick); rafIds.push(id);
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

function scheduleAnim(delay = ANIM_CYCLE) {
  // 사용자가 설정을 껐거나, 이스터에그가 이미 발동되었다면 애니메이션 영구 중지
  if (prefersReduced.matches || isUnlocked) return;
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

  const demoTextHl = document.getElementById('demoTextHl');
  if (demoTextHl) demoTextHl.style.clipPath = '';
  fakeCursor.classList.remove('wiggle');

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

  const demoTextHl   = document.getElementById('demoTextHl');
  const demoTextWrap = document.getElementById('demoTextWrap');

  bookmarkBar.style.transition = 'none';
  bookmarkBar.style.transform  = 'translateY(0)';
  void bookmarkBar.offsetHeight;
  const slotRect = bmSlot.getBoundingClientRect();
  bookmarkBar.style.transform  = '';
  bookmarkBar.style.transition = '';

  const btnRect  = dragBtn.getBoundingClientRect();
  const wrapRect = demoTextWrap.getBoundingClientRect();
  const ghostW   = dragGhost.offsetWidth  || 120;
  const ghostH   = dragGhost.offsetHeight || 36;

  const textStartX = wrapRect.left - 10;
  const textStartY = wrapRect.top  + wrapRect.height / 2 - 10;
  const textEndX   = wrapRect.right - 10;

  const cBtnX  = btnRect.left  + btnRect.width  / 2 - 10 + 6;
  const cBtnY  = btnRect.top   + btnRect.height / 2 - 10 + 4;
  const cSlotX = slotRect.left + slotRect.width  / 2 - 10 + 5;
  const cSlotY = slotRect.top  + slotRect.height / 2 - 10 - 3;

  const gFromX = btnRect.left  + btnRect.width  / 2 - ghostW / 2;
  const gFromY = btnRect.top   + btnRect.height / 2 - ghostH / 2;
  const gToX   = slotRect.left + slotRect.width  / 2 - ghostW / 2;
  const gToY   = slotRect.top  + slotRect.height / 2 - ghostH / 2;

  const cRetractX = cSlotX + 22;
  const cRetractY = cSlotY + 38;
  const cClickX   = cSlotX + 3;
  const cClickY   = cSlotY + 5;

  fakeCursor.style.transition = 'none';
  fakeCursor.style.left       = (window.innerWidth - 30) + 'px';
  fakeCursor.style.top        = (window.innerHeight - 30) + 'px';
  fakeCursor.style.transform  = 'scale(1)';
  fakeCursor.style.opacity    = '0';
  void fakeCursor.offsetHeight;

  dragGhost.style.transition = 'none';
  dragGhost.style.opacity    = '0';

  if (demoTextHl) demoTextHl.style.clipPath = 'inset(0 100% 0 0 round 6px)';

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.3s ease';
    fakeCursor.style.opacity    = '1';
  }, 80);

  addTimer(() => {
    animCursorCurve(textStartX, textStartY, 700, easeOutQuart, null, null);
  }, 200);

  addTimer(() => {
    animCursor(textEndX, textStartY, 380, easeOutCubic, null);
  }, 1050);

  addTimer(() => {
    animCursor(textStartX, textStartY, 220, easeOutQuart, null);
  }, 1520);

  addTimer(() => {
    fakeCursor.classList.add('wiggle');
  }, 1800);

  addTimer(() => {
    fakeCursor.classList.remove('wiggle');
  }, 2200);

  addTimer(() => {
    animCursorCurve(cBtnX, cBtnY, 700, easeOutQuart, null, null);
  }, 2500);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.12s cubic-bezier(0.4,0,0.6,1)';
    fakeCursor.style.transform  = 'scale(0.88)';
  }, 3200);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    fakeCursor.style.transform  = 'scale(1)';

    dragBtn.style.transition = 'opacity 0.35s ease';
    dragBtn.classList.add('is-dimmed');

    dragGhost.style.left      = gFromX + 'px';
    dragGhost.style.top       = gFromY + 'px';
    dragGhost.style.transform = 'scale(1.02) rotate(-3deg)';
    dragGhost.style.transition = 'opacity 0.22s ease, transform 0.3s cubic-bezier(0.34,1.4,0.64,1)';
    dragGhost.style.opacity   = '1';
    dragGhost.style.transform = 'scale(1) rotate(0deg)';
    dragGhost.style.boxShadow = '0 8px 28px rgba(0,0,0,0.18)';
  }, 3330);

  addTimer(() => {
    bookmarkBar.style.transition = '';
    bookmarkBar.classList.add('visible');
  }, 3520);

  addTimer(() => {
    animDrag(cBtnX, cBtnY, cSlotX, cSlotY, gFromX, gFromY, gToX, gToY, 900, null);
  }, 3740);

  addTimer(() => {
    bmSlot.classList.add('success');
    bmSlot.innerHTML = SLOT_FILLED_HTML;
    bmSlot.style.transition = 'transform 0.12s cubic-bezier(0.4,0,0.2,1)';
    bmSlot.style.transform  = 'scale(1.07) translateZ(0)';

    dragGhost.style.transition = 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.4,0,1,1)';
    dragGhost.style.opacity    = '0';
    dragGhost.style.transform  = 'scale(0.7) rotate(0deg)';
  }, 4680);

  addTimer(() => {
    bmSlot.style.transition = 'transform 0.3s cubic-bezier(0.34,1.55,0.64,1)';
    bmSlot.style.transform  = 'scale(1) translateZ(0)';
  }, 4820);

  addTimer(() => { animCursor(cRetractX, cRetractY, 520, easeInOutSine, null); }, 5020);

  addTimer(() => { animCursor(cClickX, cClickY, 560, easeOutCubic, null); }, 5700);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.11s cubic-bezier(0.4,0,0.6,1)';
    fakeCursor.style.transform  = 'scale(0.88)';
    bmSlot.style.transition     = 'transform 0.11s cubic-bezier(0.4,0,0.6,1)';
    bmSlot.style.transform      = 'scale(0.93) translateZ(0)';
  }, 6350);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    fakeCursor.style.transform  = 'scale(1)';
    bmSlot.style.transition     = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    bmSlot.style.transform      = 'scale(1) translateZ(0)';
    showDemoToast();
  }, 6470);

  addTimer(() => {
    animCursorCurve(textStartX, textStartY, 620, easeOutQuart, null, null);
  }, 6900);

  addTimer(() => {
    animCursorCurve(textEndX, textStartY, 700, easeOutCubic, (t) => {
      if (demoTextHl) demoTextHl.style.clipPath = `inset(0 ${Math.max(0, (1 - t) * 100)}% 0 0 round 6px)`;
    }, null);
  }, 7750);

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.4s ease';
    fakeCursor.style.opacity    = '0';
  }, 9000);

  addTimer(() => {
    bookmarkBar.classList.remove('visible');
  }, 9700);

  addTimer(() => {
    bmSlot.classList.remove('success');
    bmSlot.innerHTML = SLOT_EMPTY_HTML;
    bmSlot.style.transform  = '';
    bmSlot.style.transition = '';
    dragGhost.style.transition = 'none';
    dragGhost.style.opacity    = '0';
    dragBtn.style.transition = 'opacity 0.55s ease';
    dragBtn.classList.remove('is-dimmed');
    clearTimeout(safetyTimer);
    animLock = false;
    scheduleAnim();
  }, 10000);
}

installBtn.addEventListener('click', () => resetAnim(false));
closeBtn.addEventListener('click',   () => scheduleAnim(800));
overlay.addEventListener('click', e => { if (e.target === overlay) scheduleAnim(800); });

document.addEventListener('visibilitychange', () => {
  if (document.hidden) resetAnim(false);
  else scheduleAnim(1500);
});

prefersReduced.addEventListener('change', () => {
  if (prefersReduced.matches) resetAnim(false);
  else scheduleAnim(1500);
});

scheduleAnim(2800);

// --- 드래그 및 복사 방지 로직 통합 ---
let isDraggingBtn = false;

// 1. 물리적 타격감 (눌림 효과)
dragBtn.addEventListener('mousedown', () => dragBtn.classList.add('is-pressed'));
window.addEventListener('mouseup', () => dragBtn.classList.remove('is-pressed'));

// 즐거운 미니 폭죽 파티클 생성기
function createConfetti(el) {
  const container = document.createElement('div');
  container.classList.add('confetti-container');
  el.appendChild(container);

  const colors = ['#32D74B', '#FFD60A', '#0A84FF', '#BF5AF2', '#FF453A'];
  for (let i = 0; i < 8; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // 버튼 테두리 방향으로 랜덤하게 발사 좌표 계산 (반지름 약 15~30px)
    const angle = Math.random() * Math.PI * 2;
    const dist = 15 + Math.random() * 15;
    confetti.style.setProperty('--x', `${Math.cos(angle) * dist}px`);
    confetti.style.setProperty('--y', `${Math.sin(angle) * dist}px`);
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(confetti);
  }
  
  // 애니메이션 종료 후 요소 제거
  setTimeout(() => container.remove(), 550);
}

// 1.5. 클릭 시 북마크릿 실행 방지 및 축하 이펙트 분기 처리
dragBtn.addEventListener('click', (e) => {
  e.preventDefault(); // 어떤 상태든 클릭 시 href 자바스크립트 실행은 방지
  
  if (dragBtn.classList.contains('unlocked')) {
    // [이벤트 해제 후] 즐거운 폭죽 이펙트 무한 반복
    createConfetti(dragBtn);
  } else {
    // [이벤트 해제 전] 도리도리 애니메이션만 실행
    dragBtn.classList.remove('wiggle');
    void dragBtn.offsetWidth;
    dragBtn.classList.add('wiggle');
  }
});

// 2. 드래그 시작 (★ 북마크릿의 차단보다 우선 실행되도록 true 옵션 사용)
document.addEventListener('dragstart', (e) => {
  const btn = e.target.closest('.drag-btn');
  if (btn) {
    isDraggingBtn = true;
    resetAnim(false); // 인자로 false를 주어 드래그 중에는 데모가 절대 다시 켜지지 않도록 완벽 정지
    setTimeout(() => btn.classList.add('is-dimmed'), 0);
    
    const ghost = document.getElementById('custom-drag-ghost');
    if (ghost && e.dataTransfer) {
      e.dataTransfer.setDragImage(ghost, 55, 17);
    }
  }
}, true);

// 3. 드래그 종료 시 원상복구
document.addEventListener('dragend', (e) => {
  const btn = e.target.closest('.drag-btn');
  if (btn) {
    isDraggingBtn = false;
    btn.classList.remove('is-pressed', 'is-dimmed');
    scheduleAnim(1500); // 드래그가 끝난 뒤(버튼을 놓은 뒤) 1.5초 후 자연스럽게 데모 재개
  }
}, true);

// 4. 🚫 금지 마크 대신 ➕ 복사 마크 띄우기 (버튼 끌고 있을 때만)
document.addEventListener('dragover', (e) => {
  if (isDraggingBtn) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; 
  }
}, true);

// 화면 빈 곳에 떨어뜨렸을 때 오작동 방지
document.addEventListener('drop', (e) => {
  if (isDraggingBtn) e.preventDefault();
}, true);

// 5. 기본 복사 방지 (dragstart 분리 후 간소화)
['contextmenu', 'selectstart', 'copy'].forEach(ev => {
  document.addEventListener(ev, e => {
    if (!e.target.closest('.drag-btn')) e.preventDefault();
  }, true);
});

document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';

const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      if (node.tagName === 'STYLE' && node.textContent.includes('user-select:auto!important')) {
        isUnlocked = true;
        
        // 1. 타이머와 프레임 이동 즉시 정지 (위치 고정)
        animTimers.forEach(clearTimeout);
        animTimers = [];
        clearTimeout(nextTimer);
        clearTimeout(safetyTimer);
        cancelRafs();
        
        // 2. 우아한 퇴장을 위한 페이드아웃 헬퍼 함수 (뚝 끊김 방지용 Reflow 강제 발생)
        const fadeOut = (el) => {
          if (!el) return;
          el.style.transition = 'opacity 0.35s ease';
          void el.offsetWidth; // ★ 이 한 줄이 없으면 브라우저가 애니메이션을 생략하고 즉시 지워버립니다!
          el.style.opacity = '0';
        };

        fadeOut(fakeCursor);
        fadeOut(dragGhost);
        
        // 북마크바는 원래 있던 CSS 트랜지션을 활용해 스르륵 위로 올라가며 숨겨지도록 처리
        bookmarkBar.style.transition = ''; 
        bookmarkBar.classList.remove('visible');
        
        // 버튼은 원래 밝기로 부드럽게 복구하고 세련되게 진화
        dragBtn.style.transition = 'opacity 0.35s ease';
        dragBtn.classList.remove('is-dimmed');
        dragBtn.classList.add('unlocked'); // 진화된 스타일 적용 (검은색 배경)
     

        // 파란색 하이라이트 박스도 뚝 끊기지 않고 부드럽게 페이드아웃
        const demoTextHl = document.getElementById('demoTextHl');
        fadeOut(demoTextHl);

        // 3. 주인공 교체 (성공 문구 및 카드 햅틱 효과)
        const card = document.querySelector('.card');
        const bgText = document.querySelector('.demo-text-bg');
        
        const bgHTML = '<div style="display:flex;flex-direction:column;align-items:center;"><span style="display:flex;align-items:center;gap:6px;color:#1d1d1f;font-weight:600;font-size:14px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>텍스트 선택 활성화됨</span><span style="font-size:12px;color:#8e8e93;font-weight:400;margin-top:4px;">이제 자유롭게 복사할 수 있습니다.</span></div>';
        
        if (card) {
          card.classList.remove('card-pulse');
          void card.offsetWidth;
          card.classList.add('card-pulse');
        }
        
        if (bgText) {
          bgText.innerHTML = bgHTML;
          bgText.classList.remove('text-reveal');
          void bgText.offsetWidth;
          bgText.classList.add('text-reveal');
        }
        
        observer.disconnect();
      }
    }
  }
});
observer.observe(document.head, { childList: true });