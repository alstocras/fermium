let pos = 0, dir = 1;
function tick() {
  pos += dir * 1.2;
  if (pos >= trackH - thumbH) dir = -1;
  if (pos <= 0) dir = 1;
  thumb.style.top = pos + 'px';
  requestAnimationFrame(tick);
}
tick();