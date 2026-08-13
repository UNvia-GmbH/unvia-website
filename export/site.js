(function(){
  function menu(){var m=document.getElementById('unvia-menu');if(!m)return;m.style.display=m.style.display==='block'?'none':'block';}
  window.unviaMenu=menu;
  window.unviaMail=function(e){
    e.preventDefault();
    var f=e.target, v=function(n){return (f.elements[n]&&f.elements[n].value||'').trim();};
    var s=f.elements['thema'], thema=s&&s.selectedIndex>0?s.options[s.selectedIndex].text:'';
    var betreff='Projektanfrage'+(thema?' – '+thema:'')+(v('unternehmen')?' | '+v('unternehmen'):'');
    var lines=[v('name')?'Name: '+v('name'):'',v('unternehmen')?'Unternehmen: '+v('unternehmen'):'',v('email')?'E-Mail: '+v('email'):'',thema?'Interesse: '+thema:'','',v('nachricht')];
    window.location.href='mailto:info@unvia.online?subject='+encodeURIComponent(betreff)+'&body='+encodeURIComponent(lines.join('\n'));
    var n=document.getElementById('unvia-sent'); if(n) n.style.display='block';
  };
  var hdr=document.querySelector('header');
  if(hdr) window.addEventListener('scroll',function(){
    var s=window.scrollY>12;
    hdr.style.boxShadow=s?'0 1px 24px rgba(23,24,26,.07)':'none';
    hdr.style.borderBottomColor=s?'#E2DDD5':'#EFEBE4';
  },{passive:true});
  function revealAll(){
    document.querySelectorAll('[data-reveal]').forEach(function(el){el.style.opacity='1';el.style.transform='none';});
    document.querySelectorAll('[data-line]').forEach(function(el){el.style.width='100%';});
  }
  function init(){
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var scrollable=document.documentElement.scrollHeight-window.innerHeight>120;
    if(reduce||!scrollable||!('IntersectionObserver' in window)){revealAll();return;}
    var ease='cubic-bezier(.22,.61,.36,1)';
    var io=new IntersectionObserver(function(en){en.forEach(function(e){
      if(!e.isIntersecting)return; var el=e.target;
      el.style.transitionDelay=(parseFloat(el.getAttribute('data-reveal'))||0)+'s';
      if(el.hasAttribute('data-line')) el.style.width='100%';
      else {el.style.opacity='1';el.style.transform='none';}
      io.unobserve(el);
    });},{threshold:0.12,rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('[data-reveal],[data-line]').forEach(function(el){
      if(el.hasAttribute('data-line')) el.style.transition='width 1.4s '+ease;
      else {el.style.opacity='0';el.style.transform='translateY(26px)';el.style.transition='opacity .9s '+ease+', transform .9s '+ease;}
      io.observe(el);
    });
    setTimeout(revealAll,4000);
  }
  if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded',init);
})();