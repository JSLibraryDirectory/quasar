!function(){function e(){m.classList.toggle("open"),v.classList.toggle("active")}function t(){var e=l&&l.scrollTop||s.scrollTop,t=d.offsetHeight;if(!k&&f){for(var i,n=0;n<f.length;n++){var o=f[n];if(o.offsetTop>=e+t+100){i||(i=o);break}i=o}i&&a(i.id)}}function i(e){var t=document.createElement("li"),i=e.textContent.replace(/\(.*\)$/,"");return e.id=e.id.replace(/\(.*\)$/,"").replace(/\$/,""),t.innerHTML='<a class="section-link" data-scroll href="#'+e.id+'">'+i+"</a>",t}function n(e){for(var t=[],i=e.nextSibling;i&&"H2"!==i.tagName;)"H3"===i.tagName&&t.push(i),i=i.nextSibling;return t}function o(e,t){var n=document.createElement("ul");return t&&(n.className="menu-sub"),e.forEach(function(e){n.appendChild(i(e))}),n}function a(e){var t=m.querySelector(".section-link.active"),i="string"==typeof e?m.querySelector('.section-link[href="#'+e+'"]'):e;if(i!==t&&(t&&t.classList.remove("active"),i.classList.add("active"),window.themePreview&&!window.themePreview.fullPageDemo)){var n=$(i).attr("href").substring(1),o=$('.content a[data-scroll][href="#'+n+'"]').next();window.themePreview.selectPage(o?o.data("demo"):"")}}function r(e){var t=document.createElement("a");t.href="#"+e.id,t.setAttribute("data-scroll",""),e.parentNode.insertBefore(t,e),t.appendChild(e)}var c=[].forEach,l=(document.getElementById("main"),document.documentElement),s=document.body,d=document.getElementById("header"),m=document.querySelector(".sidebar"),u=document.querySelector(".content"),p=400,w=d.querySelector(".menu-button"),v=document.querySelector(".sidebar-backdrop");if(m){w.addEventListener("click",e),v.addEventListener("click",e);var g=m.querySelector(".sidebar-link.current");if(g){var h,f=[];h=document.createElement("ul"),h.className="menu-sub",g.parentNode.appendChild(h);var b=u.querySelectorAll("h2");b.length?c.call(b,function(e){h.appendChild(i(e));var t=n(e);f.push(e),f.push.apply(f,t),t.length&&h.appendChild(o(t))}):(b=u.querySelectorAll("h3"),c.call(b,function(e){h.appendChild(i(e)),f.push(e)}));var k=!1;h.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("section-link")&&(m.classList.remove("open"),a(e.target),k=!0)},!0),f.forEach(r),smoothScroll.init({speed:p,offset:window.innerWidth>720?100:15,callback:function(){setTimeout(function(){k=!1},100)}})}}(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}})();window.addEventListener("scroll",t),window.addEventListener("resize",t);for(var y=document.links,q=0,x=y.length;q<x;q++)y[q].hostname!==window.location.hostname&&(y[q].target="_blank");window.isMobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)),window.isMobile&&$(".content table").wrap('<div style="overflow-x: auto;"></div>')}();