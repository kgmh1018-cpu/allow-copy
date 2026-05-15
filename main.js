// =============================================
// BOOKMARKLET CODE — 여기만 수정
// =============================================
const BOOKMARKLET_CODE = `javascript:(function(){var _m='allow-copy v1.3 | 2026.05.15';var f=0;function unlock(d){if(!d||!d.body)return;try{['contextmenu','selectstart','copy','dragstart'].forEach(function(ev){d.addEventListener(ev,function(e){e.stopPropagation();},true);});['oncontextmenu','onselectstart','ondragstart','oncopy','onmousedown','onmouseup'].forEach(function(ev){d[ev]=null;if(d.body)d.body[ev]=null;});try{var st=d.createElement('style');st.textContent='body{user-select:text!important;-webkit-user-select:text!important;}';d.head.appendChild(st);}catch(err){}var all=d.querySelectorAll('*');var batch=function(i){var end=Math.min(i+200,all.length);for(;i<end;i++){var tag=all[i].tagName;if(tag!=='SCRIPT'&&tag!=='STYLE'&&tag!=='SVG'&&tag!=='CANVAS'){all[i].style.setProperty('user-select','text','important');all[i].style.setProperty('-webkit-user-select','text','important');}}if(end<all.length)(window.requestIdleCallback||setTimeout)(function(){batch(end);});};batch(0);}catch(e){f++;}}try{unlock(document);}catch(e){f++;}document.querySelectorAll('iframe').forEach(function(fr){try{unlock(fr.contentDocument);}catch(e){f++;}});try{var old=document.getElementById('__unlock_toast__');if(old)old.remove();var z=parseFloat(getComputedStyle(document.documentElement).zoom)||1;var sc=1/z;var isWarn=f>0;var color=isWarn?'#FF9F0A':'#32D74B';var msg=isWarn?'일부 iframe 제한 ('+f+'개)':'복사 방지 해제 완료';var ns='http://www.w3.org/2000/svg';var svg=document.createElementNS(ns,'svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 14 14');svg.setAttribute('fill','none');if(isWarn){var p1=document.createElementNS(ns,'path');p1.setAttribute('d','M7 2L12.5 12H1.5L7 2Z');p1.setAttribute('stroke','white');p1.setAttribute('stroke-width','1.6');p1.setAttribute('stroke-linecap','round');p1.setAttribute('stroke-linejoin','round');var p2=document.createElementNS(ns,'path');p2.setAttribute('d','M7 6V8.5');p2.setAttribute('stroke','white');p2.setAttribute('stroke-width','1.6');p2.setAttribute('stroke-linecap','round');var ci=document.createElementNS(ns,'circle');ci.setAttribute('cx','7');ci.setAttribute('cy','10.5');ci.setAttribute('r','0.75');ci.setAttribute('fill','white');svg.appendChild(p1);svg.appendChild(p2);svg.appendChild(ci);}else{var p=document.createElementNS(ns,'path');p.setAttribute('d','M2.5 7L5.5 10L11.5 4');p.setAttribute('stroke','white');p.setAttribute('stroke-width','1.8');p.setAttribute('stroke-linecap','round');p.setAttribute('stroke-linejoin','round');svg.appendChild(p);}var t=document.createElement('div');t.id='__unlock_toast__';t.style.cssText='position:fixed;top:24px;left:50%;transform:translateX(-50%) translateY(-10px) scale('+sc+');transform-origin:top center;z-index:2147483647;display:flex;align-items:center;gap:9px;background:rgba(28,28,30,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:0.5px solid rgba(255,255,255,0.12);border-radius:999px;padding:8px 16px 8px 8px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;font-size:13px;font-weight:500;color:#fff;letter-spacing:-0.01em;opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;pointer-events:none;white-space:nowrap;';var ic=document.createElement('span');ic.style.cssText='width:24px;height:24px;border-radius:50%;background:'+color+';display:flex;align-items:center;justify-content:center;flex-shrink:0;';ic.appendChild(svg);var tx=document.createElement('span');tx.textContent=msg;t.appendChild(ic);t.appendChild(tx);document.body.appendChild(t);requestAnimationFrame(function(){requestAnimationFrame(function(){t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0) scale('+sc+')';});});setTimeout(function(){t.style.opacity='0';t.style.transform='translateX(-50%) translateY(-10px) scale('+sc+')';setTimeout(function(){t.remove();},250);},800);}catch(err){alert(f>0?'일부 프레임 제한 ('+f+'개)\n나머지 복사 해제 완료':'복사 방지 해제 완료');}})();`;
const BOOKMARKLET_CODE_ANDROID = `javascript:(function(){var%20_m='allow-copy·v1.3·2026.05.15·m';var%20f=0;function%20u(d){if(!d||!d.body)return;try{['contextmenu','selectstart','copy','dragstart'].forEach(ev=>d.addEventListener(ev,e=>e.stopPropagation(),true));['oncontextmenu','onselectstart','ondragstart','oncopy','onmousedown','onmouseup'].forEach(ev=>{d[ev]=null;if(d.body)d.body[ev]=null;});try{var%20s=d.createElement('style');s.textContent='body{user-select:text!important;-webkit-user-select:text!important;}';d.head.appendChild(s);}catch(e){}var%20a=d.querySelectorAll('*');var%20b=function(i){var%20n=Math.min(i+200,a.length);for(;i<n;i++){var%20t=a[i].tagName;if(t!=='SCRIPT'&&t!=='STYLE'&&t!=='SVG'&&t!=='CANVAS'){a[i].style.setProperty('user-select','text','important');a[i].style.setProperty('-webkit-user-select','text','important');}}if(n<a.length)(window.requestIdleCallback||setTimeout)(()=>b(n));};b(0);}catch(e){f++;}}try{u(document);}catch(e){f++;}document.querySelectorAll('iframe').forEach(fr=>{try{u(fr.contentDocument);}catch(e){f++;}});try{var%20old=document.getElementById('__uc__');if(old)old.remove();var%20w=f>0;var%20t=document.createElement('div');t.id='__uc__';t.style.cssText='position:fixed;top:24px;left:50%;transform:translateX(-50%);z-index:2147483647;display:flex;align-items:center;gap:8px;background:rgba(28,28,30,0.9);border-radius:999px;padding:7px%2014px%207px%207px;font:500%2013px%20-apple-system,sans-serif;color:#fff;pointer-events:none;white-space:nowrap;';var%20ic=document.createElement('span');ic.textContent=w?'\\u26A0':'\\u2713';ic.style.cssText='width:22px;height:22px;border-radius:50%;background:'+(w?'#FF9F0A':'#32D74B')+';display:flex;align-items:center;justify-content:center;font-size:11px;';var%20tx=document.createElement('span');tx.textContent=w?'일부%20iframe%20제한%20('+f+'개)':'복사%20방지%20해제%20완료';t.appendChild(ic);t.appendChild(tx);document.body.appendChild(t);setTimeout(()=>t.remove(),800);}catch(e){alert(f>0?'일부%20프레임%20제한%20('+f+'개)':'복사%20방지%20해제%20완료');}})();`;
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

let isOverlayMouseDownBase = false;
overlay.addEventListener('mousedown', e => { isOverlayMouseDownBase = (e.target === overlay); });

installBtn.addEventListener('click', () => openModal(null));
closeBtn.addEventListener('click',   () => overlay.classList.remove('open'));

// ── Scroll fade hint ──
(function() {
  const modalBody = document.querySelector('#viewMain .modal-body');
  const modalBodyWrap = document.querySelector('#viewMain .modal-body-wrap');

  function updateFade() {
    if (!modalBodyWrap) return;
    const hasMore = modalBody.scrollHeight - modalBody.scrollTop - modalBody.clientHeight > 4;
    modalBodyWrap.classList.toggle('has-overflow', hasMore);
  }

  modalBody.addEventListener('scroll', updateFade, { passive: true });

  overlay.addEventListener('transitionend', () => {
    if (overlay.classList.contains('open')) updateFade();
  });
})();

// ── Mobile swipe-down to close (Fixed Premium Architecture) ──
(function() {
  const modal = document.getElementById('modal');
  let startY = 0;
  let isDragging = false;
  let dragMode = 'none'; // 'none' | 'drag' | 'scroll'
  let scrollEl = null;

  modal.addEventListener('touchstart', e => {
    if (window.innerWidth > 640) return;
    
    scrollEl = e.target.closest('.modal-body');
    startY = e.touches[0].clientY;
    isDragging = true;
    dragMode = 'none'; // 터치 시작 시 의도 초기화
    
    modal.style.transition = 'none';
  }, { passive: true });

  modal.addEventListener('touchmove', e => {
    if (!isDragging || window.innerWidth > 640) return;
    
    const currentY = e.touches[0].clientY;
    const dy = currentY - startY;
    
    if (dragMode === 'none') {
      if (Math.abs(dy) > 3) {
        if (!scrollEl || (scrollEl.scrollTop <= 0 && dy > 0)) {
          dragMode = 'drag';
        } else {
          dragMode = 'scroll';
        }
      }
    }
    
    if (dragMode === 'drag') {
      e.preventDefault();
      modal.style.transform = `translateY(${Math.max(0, dy)}px)`;
    }
  }, { passive: false });

  modal.addEventListener('touchend', e => {
    if (!isDragging || window.innerWidth > 640) return;
    isDragging = false;
    modal.style.transition = '';
    
    if (dragMode === 'drag') {
      const dy = e.changedTouches[0].clientY - startY;
      if (dy > 80) {
        overlay.classList.remove('open');
        setTimeout(() => { modal.style.transform = ''; }, 400);
      } else {
        modal.style.transform = '';
      }
    }
  });
})();

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

// ── Copy buttons ──
const SVG_COPY = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>코드 복사`;
const SVG_DONE = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="20 6 9 16 4 11"/></svg>복사됨`;

function setupCopyBtn(id, code) {
  document.getElementById(id).addEventListener('click', () => {
    navigator.clipboard.writeText(code).then(() => {
      const btn = document.getElementById(id);
      btn.classList.remove('copied');
      void btn.offsetWidth;
      btn.classList.add('copied');
      btn.innerHTML = SVG_DONE;
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = SVG_COPY;
      }, 2000);
    });
  });
}

setupCopyBtn('copyBtn', BOOKMARKLET_CODE);
setupCopyBtn('copyBtnAndroid', BOOKMARKLET_CODE_ANDROID);

const FEEDBACK_URL = 'https://script.google.com/macros/s/AKfycbz7_wZNjC2rDutW782xERIU1Q4N82zVXafsLwuF5LM0zpry4TKhODQF6dvi7f--_dNE6w/exec';

// ── Feedback view transition ──
const modalViews      = document.getElementById('modalViews');
const feedbackChip    = document.getElementById('feedbackChip');
const backBtn         = document.getElementById('backBtn');
const closeBtnFb      = document.getElementById('closeBtnFeedback');

function goFeedback() {
  const views = modalViews;
  const feedbackView = document.getElementById('viewFeedback');
  views.style.height = views.offsetHeight + 'px';
  views.classList.add('on-feedback');
  requestAnimationFrame(() => {
    views.style.height = feedbackView.scrollHeight + 'px';
  });
  views.addEventListener('transitionend', function onEnd(e) {
    if (e.propertyName !== 'height') return;
    views.style.height = '';
    views.removeEventListener('transitionend', onEnd);
    document.getElementById('feedbackText').focus();
  });
}
function goMain() {
  const views = modalViews;
  const mainView = document.getElementById('viewMain');
  views.style.height = views.offsetHeight + 'px';
  views.classList.remove('on-feedback');
  requestAnimationFrame(() => {
    views.style.height = mainView.scrollHeight + 'px';
  });
  views.addEventListener('transitionend', function onEnd(e) {
    if (e.propertyName !== 'height') return;
    views.style.height = '';
    views.removeEventListener('transitionend', onEnd);
  });
}

feedbackChip.addEventListener('click', goFeedback);
backBtn.addEventListener('click', goMain);
closeBtnFb.addEventListener('click', () => {
  overlay.classList.remove('open');
  setTimeout(goMain, 400);
});

overlay.addEventListener('click', e => {
  if (e.target === overlay && isOverlayMouseDownBase) {
    overlay.classList.remove('open');
    setTimeout(goMain, 400);
  }
});

document.getElementById('feedbackText').addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('feedbackSend').click();
  }
});

document.getElementById('feedbackSend').addEventListener('click', () => {
  const textEl = document.getElementById('feedbackText');
  const btn    = document.getElementById('feedbackSend');
  const text   = textEl.value.trim();
  if (!text) return;
  
  // 1. 즉시 성공 상태로 전환 (Optimistic UI)
  btn.disabled = true;
  btn.innerHTML = '<svg class="sent-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  btn.classList.add('sent');

  // 2. 백그라운드에서 조용히 전송 (Fire-and-forget)
  fetch(FEEDBACK_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams({ message: text })
  }).catch(() => {}); 

  // 3. 완료 상태를 짧게 보여준 뒤 메인 탭으로 부드럽게 복귀
  setTimeout(() => {
    goMain(); // 모달 전체를 닫지 않고 메인 뷰로 슬라이드 복귀
    
    // 화면 전환 애니메이션이 완전히 끝난 후 조용히 내부 폼 초기화
    setTimeout(() => {
      btn.textContent = '보내기';
      btn.classList.remove('sent');
      btn.disabled = false;
      textEl.value = '';
    }, 400);
  }, 700); // 0.7초 동안 체크 아이콘 표시
});


// ── Drag demo animation ──
const fakeCursor  = document.getElementById('fakeCursor');
const bookmarkBar = document.getElementById('bookmarkBar');
const bmGap       = document.getElementById('bmGap');
const dragBtn     = document.getElementById('bookmarklet-link');
const dragGhost   = document.getElementById('drag-ghost');
const pageEl      = document.querySelector('.page');

const GAP_FILLED_HTML = `<div class="bm-gap-filled" id="bmFilled"><div style="width:14px;height:14px;border-radius:3px;background:#1d1d1f;flex-shrink:0;"></div><span>Allow-Copy</span></div>`;

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
function easeHumanDrag(t)  { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
function easeOutBack(t)    { const c1 = 1.70158; return 1 + (c1 + 1) * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
function easeOutBackSoft(t){ const c1 = 0.6; return 1 + (c1 + 1) * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
function easeInCubic(t)    { return t * t * t; }
function easeOutExpo(t)    { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }

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

  bmGap.classList.remove('is-open', 'is-filled');
  bmGap.innerHTML = '';
  bmGap.style.transition = '';

  dragBtn.style.transition = '';
  dragBtn.classList.remove('is-dimmed', 'wiggle', 'is-pressed');

  const demoTextHl = document.getElementById('demoTextHl');
  if (demoTextHl) demoTextHl.style.clipPath = '';
  fakeCursor.classList.remove('wiggle', 'is-forbidden', 'is-text');

  const old = document.getElementById('__demo_toast__');
  if (old) old.remove();

  if (reschedule && !document.hidden) scheduleAnim();
}

function showDemoToast() {
  const old = document.getElementById('__demo_toast__');
  if (old) old.remove();

  const svgCheck = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const t = document.createElement('div');
  t.id = '__demo_toast__';
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
  
  bmGap.style.transition = 'none';
  bmGap.classList.add('is-open');
  void bookmarkBar.offsetHeight;
  
  const gapRect = bmGap.getBoundingClientRect();
  
  bmGap.classList.remove('is-open');
  bmGap.style.transition = '';
  
  bookmarkBar.style.transform  = '';
  bookmarkBar.style.transition = '';

  const btnRect  = dragBtn.getBoundingClientRect();
  const ghostW   = dragGhost.offsetWidth  || 120;
  const ghostH   = dragGhost.offsetHeight || 36;

  // 텍스트 라인별 실제 렌더링 좌표 정밀 계산 (프리미엄 디테일)
  const textInlineEl = document.querySelector('#demoTextHl span');
  const textRects = textInlineEl.getClientRects(); 
  const firstLine = textRects[0];
  const lastLine = textRects[textRects.length - 1];

  const paddingX = 8;
  const textStartX = firstLine.left - paddingX - 10;
  const textStartY = firstLine.top + (firstLine.height / 2) - 10;
  
  const textEndX   = lastLine.right + paddingX - 10;
  const textEndY   = lastLine.top + (lastLine.height / 2) - 10;

  const ibeamStartX = firstLine.left - 13;
  const ibeamStartY = firstLine.top + firstLine.height * 0.42 - 10;

  const ibeamEndX = lastLine.right + paddingX - 10;
  const ibeamEndY = lastLine.top + lastLine.height * 0.42 - 10;

  const cBtnX  = btnRect.left  + btnRect.width  / 2 - 10 + 6;
  const cBtnY  = btnRect.top   + btnRect.height / 2 - 10 + 4;
  const cSlotX = gapRect.left + gapRect.width  / 2 - 10 + 5;
  const cSlotY = gapRect.top  + gapRect.height / 2 - 10 - 3;

  const gFromX = btnRect.left  + btnRect.width  / 2 - ghostW / 2;
  const gFromY = btnRect.top   + btnRect.height / 2 - ghostH / 2;
  const gToX   = gapRect.left + gapRect.width  / 2 - ghostW / 2;
  const gToY   = gapRect.top  + gapRect.height / 2 - ghostH / 2;

  const cRetractX = cSlotX + 22;
  const cRetractY = cSlotY + 38;
  const cClickX   = cSlotX + 5;
  const cClickY   = cSlotY + 9;

  fakeCursor.style.transition = 'none';
  fakeCursor.style.left       = (window.innerWidth - 30) + 'px';
  fakeCursor.style.top        = (window.innerHeight - 30) + 'px';
  fakeCursor.style.transform  = 'scale(1)';
  fakeCursor.style.opacity    = '0';
  void fakeCursor.offsetHeight;

  dragGhost.style.transition = 'none';
  dragGhost.style.opacity    = '0';

  if (demoTextHl) demoTextHl.style.clipPath = 'inset(0 100% 0 0)';

  addTimer(() => {
    fakeCursor.style.transition = 'opacity 0.3s ease';
    fakeCursor.style.opacity    = '1';
  }, 80);

  addTimer(() => {
    animCursorCurve(textStartX, textStartY - 4, 700, easeOutQuart, null, null);
  }, 200);

  // 1. 전체 텍스트 긁기 (The Full Slip) - 끝까지 드래그해보지만 하이라이트가 안 생김
  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
    fakeCursor.style.transform  = 'scale(0.85)'; // 꾹 누름
  }, 930);
  addTimer(() => {
    // 실제 사람이 하듯 전체 텍스트를 끝까지 빠르게 훑음
    animCursorCurve(textEndX + 8, textEndY + 5, 550, easeOutCubic, null, null);
  }, 980);
  addTimer(() => {
    fakeCursor.style.transform  = 'scale(1)'; // 끝까지 갔는데 안 돼서 당황하며 마우스 뗌
  }, 1530);

  // 2. 분노의 더블클릭 (Aggressive Double Click) - 다시 맨 앞으로 확 돌아가서 강제 선택 시도
  addTimer(() => {
    animCursor(textStartX + 5, textStartY, 220, easeOutQuart, null);
  }, 1650);
  addTimer(() => { fakeCursor.style.transform = 'scale(0.85)'; }, 1870);
  addTimer(() => { fakeCursor.style.transform = 'scale(1)'; }, 1940);
  addTimer(() => { fakeCursor.style.transform = 'scale(0.85)'; }, 2010);
  addTimer(() => { fakeCursor.style.transform = 'scale(1)'; }, 2080);

  // 3. 신경질적인 마우스 흔들기 (Frustrated Jiggle)
  addTimer(() => {
    fakeCursor.classList.add('is-frustrated');
  }, 2150);
  addTimer(() => {
    fakeCursor.classList.remove('is-frustrated');
  }, 2500);

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

    dragGhost.style.transition = 'none';
    dragGhost.style.left      = gFromX + 'px';
    dragGhost.style.top       = gFromY + 'px';
    dragGhost.style.transform = 'scale(0.95) rotate(-2deg)';
    dragGhost.style.opacity   = '0';
    dragGhost.style.boxShadow = '0 16px 32px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)';
    void dragGhost.offsetWidth;
    dragGhost.style.transition = 'opacity 0.15s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    dragGhost.style.opacity   = '1';
    dragGhost.style.transform = 'scale(1.04) rotate(0deg)';
  }, 3330);

  addTimer(() => {
    bookmarkBar.style.transition = '';
    bookmarkBar.classList.add('visible');
  }, 3520);

  addTimer(() => {
    animDrag(cBtnX, cBtnY, cSlotX, cSlotY, gFromX, gFromY, gToX, gToY, 900, null);
  }, 3740);

  addTimer(() => {
    bmGap.innerHTML = '<div class="bm-drop-indicator"></div>';
    bmGap.classList.add('is-open');
    requestAnimationFrame(() => {
      const ind = bmGap.querySelector('.bm-drop-indicator');
      if (ind) ind.classList.add('is-visible');
    });
  }, 4200);

  addTimer(() => {
    bmGap.classList.add('is-filled');
    bmGap.innerHTML = GAP_FILLED_HTML;
    requestAnimationFrame(() => {
      const filled = document.getElementById('bmFilled');
      if (filled) {
        filled.style.transform = 'scale(0.96)';
        filled.classList.add('is-visible');
        requestAnimationFrame(() => {
          filled.style.transform = '';
        });
      }
    });

    dragGhost.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease-out';
    dragGhost.style.transform  = 'scale(0.85) translateY(2px) rotate(0deg)';
    dragGhost.style.opacity    = '0';
  }, 4680);

  addTimer(() => { animCursor(cRetractX, cRetractY, 380, easeInOutSine, null); }, 5020);

  addTimer(() => { animCursor(cClickX, cClickY, 480, easeOutCubic, null); }, 5500);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.11s cubic-bezier(0.4,0,0.6,1)';
    fakeCursor.style.transform  = 'scale(0.88)';
    const filled = document.getElementById('bmFilled');
    if (filled) filled.classList.add('is-clicking');
  }, 6050);

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.22s cubic-bezier(0.34,1.55,0.64,1)';
    fakeCursor.style.transform  = 'scale(1)';
    const filled = document.getElementById('bmFilled');
    if (filled) filled.classList.remove('is-clicking');
    addTimer(showDemoToast, 150);
  }, 6170);

  addTimer(() => {
    animCursorCurve(ibeamStartX, ibeamStartY, 620, easeOutQuart, null, null);
  }, 6720);

  // --- 프리미엄 피날레: 확신에 찬 스윕과 감상(Admire) ---
  addTimer(() => {
    fakeCursor.classList.add('is-text'); // I-beam으로 전환
  }, 7220); 

  addTimer(() => {
    fakeCursor.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    fakeCursor.style.transform  = 'scale(0.85)'; // 부드럽고 확신에 찬 꾹 누름
  }, 7320);

  addTimer(() => {
    animCursorCurve(ibeamEndX, ibeamEndY, 1100, easeOutExpo, (t) => {
      if (demoTextHl) {
        const prog = Math.max(0, Math.min(1, t));
        demoTextHl.style.clipPath = `inset(0 ${100 - prog * 100}% 0 0)`;
      }
    }, null);
  }, 7520);

  addTimer(() => {
    fakeCursor.style.transform  = 'scale(1)'; // 드래그 끝. 마우스 버튼 뗌
  }, 8620);

  // 텍스트 끝 지점(textEndX, textEndY)에서 약 300ms 동안 가만히 머무름
  // 유저가 하이라이트된 텍스트를 정확히 '확인'하는 시선 체류 시간 확보

  addTimer(() => {
    fakeCursor.classList.remove('is-text'); // 다시 화살표로 복귀
  }, 8920);

  addTimer(() => {
    // 감상 후, 마우스를 화면 바깥(우측 하단)으로 휙 던지는 자연스러운 퇴장 (가속 곡선 easeInCubic 사용)
    animCursor(ibeamEndX + 90, ibeamEndY + 70, 550, easeInCubic, null);
  }, 8970);

  addTimer(() => {
    // 휙 빠지는 도중에 Z축으로 멀어지듯 스케일 다운 + 페이드 아웃 (가장 고급스러운 소멸 방식)
    fakeCursor.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    fakeCursor.style.opacity    = '0'; 
    fakeCursor.style.transform  = 'scale(0.8)';
  }, 9170);

  addTimer(() => {
    bookmarkBar.classList.remove('visible');
  }, 9520);

  addTimer(() => {
    bmGap.classList.remove('is-open', 'is-filled');
    bmGap.innerHTML = '';
    dragGhost.style.transition = 'none';
    dragGhost.style.opacity    = '0';
    dragBtn.style.transition = 'opacity 0.55s ease';
    dragBtn.classList.remove('is-dimmed');
    clearTimeout(safetyTimer);
    animLock = false;
    scheduleAnim();
  }, 10320);
}

let isOverlayMouseDownAnim = false;
overlay.addEventListener('mousedown', e => { isOverlayMouseDownAnim = (e.target === overlay); });

installBtn.addEventListener('click', () => resetAnim(false));
closeBtn.addEventListener('click',   () => scheduleAnim(800));
overlay.addEventListener('click', e => { if (e.target === overlay && isOverlayMouseDownAnim) scheduleAnim(800); });

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    scheduleAnim(800);
  }
});

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
    resetAnim(false); 
    setTimeout(() => btn.classList.add('is-dimmed'), 0);
    
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.dropEffect = 'copy';
      
      const ghost = document.getElementById('custom-drag-ghost');
      if (ghost) {
        const ghostWidth = ghost.offsetWidth || 110;
        const ghostHeight = ghost.offsetHeight || 36;
        
        const offsetX = ghostWidth / 2;
        const offsetY = (ghostHeight / 2) - 6;
        
        e.dataTransfer.setDragImage(ghost, offsetX, offsetY);
      }
    }
  }
}, true);

// 3. 드래그 종료 시 원상복구
document.addEventListener('dragend', (e) => {
  const btn = e.target.closest('.drag-btn');
  if (btn) {
    isDraggingBtn = false;
    btn.classList.remove('is-pressed', 'is-dimmed');
    
    btn.classList.add('is-restoring');
    setTimeout(() => btn.classList.remove('is-restoring'), 400);

    scheduleAnim(1500); // 드래그가 끝난 뒤(버튼을 놓은 뒤) 1.5초 후 자연스럽게 데모 재개
  }
}, true);

// 4. 🚫 금지 마크 대신 ➕ 복사 마크 띄우기 (버튼 끌고 있을 때만)
const allowDrop = (e) => {
  if (isDraggingBtn) {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  }
};
// dragover뿐만 아니라, 요소의 가장자리를 통과할 때 발생하는 dragenter도 차단해야 깜빡임이 없음
document.addEventListener('dragover', allowDrop, true);
document.addEventListener('dragenter', allowDrop, true);

// 화면 빈 곳에 떨어뜨렸을 때 오작동 방지
document.addEventListener('drop', (e) => {
  if (isDraggingBtn) e.preventDefault();
}, true);

// 5. 기본 복사 방지 (dragstart 분리 후 간소화)
const _blockHandler = e => {
  if (!e.target.closest('.drag-btn') && !e.target.closest('.modal')) {
    e.preventDefault();
  }
};
['contextmenu', 'selectstart', 'copy'].forEach(ev => {
  document.addEventListener(ev, _blockHandler, true);
});

document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';

const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      if (node.tagName === 'STYLE' && node.textContent.includes('user-select:text!important')) {
        isUnlocked = true;
        
        ['contextmenu', 'selectstart', 'copy'].forEach(ev => {
          document.removeEventListener(ev, _blockHandler, true);
        });
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        
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
        
        const bgHTML = '<div style="display:flex;flex-direction:column;align-items:center;"><span style="display:flex;align-items:center;gap:6px;font-weight:600;font-size:14px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span class="shimmer-text">텍스트 선택 활성화됨</span></span><span style="font-size:12px;color:#8e8e93;font-weight:400;margin-top:4px;">이제 자유롭게 복사할 수 있습니다.</span></div>';
        
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
        
      }
    }
  }
});
observer.observe(document.head, { childList: true });

let lastWindowWidth = window.innerWidth;
let resizeDebounceTimer = null;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  if (currentWidth !== lastWindowWidth) {
    lastWindowWidth = currentWidth;
    clearTimeout(resizeDebounceTimer);

    if (animLock) {
      animTimers.forEach(clearTimeout);
      animTimers = [];
      cancelRafs();
      clearTimeout(nextTimer);
      clearTimeout(safetyTimer);

      fakeCursor.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      fakeCursor.style.opacity = '0';
      
      dragGhost.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      dragGhost.style.opacity = '0';
      
      bookmarkBar.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      bookmarkBar.classList.remove('visible');

      animLock = false;
    }

    resizeDebounceTimer = setTimeout(() => {
      resetAnim(false);
      scheduleAnim(800); 
    }, 400);
  }
});