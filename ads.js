//<!-- PopAds.net Popunder Code for hotstarpremium.tk -->

/*<![CDATA[/* */
var _pop = _pop || [];
_pop.push(["siteId", 3657360]);
_pop.push(["minBid", 0]);
_pop.push(["popundersPerIP", 0]);
_pop.push(["delayBetween", 0]);
_pop.push(["default", false]);
_pop.push(["defaultPerDay", 0]);
_pop.push(["topmostLayer", false]);
(function() {
  var pa = document.createElement("script");
  pa.type = "text/javascript";
  pa.async = true;
  var s = document.getElementsByTagName("script")[0];
  pa.src = "//c1.popads.net/pop.js";
  pa.onerror = function() {
    var sa = document.createElement("script");
    sa.type = "text/javascript";
    sa.async = true;
    sa.src = "//c2.popads.net/pop.js";
    s.parentNode.insertBefore(sa, s);
  };
  s.parentNode.insertBefore(pa, s);
})();
/*]]>/* */
//<!-- PopAds.net Popunder Code End -->

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  adsBlocked(function(blocked) {
    if (blocked) {
      document.getElementById("result").innerHTML = "ads are blocked";
      alert("ad blocker is enabled");
    } else {
      document.getElementById("result").innerHTML = "ads are not blocked";
      alert("ad blocker is disabled");
    }
  });
}

function adsBlocked(callback) {
  var testURL =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

  var myInit = {
    method: "HEAD",
    mode: "no-cors"
  };

  var myRequest = new Request(testURL, myInit);

  fetch(myRequest)
    .then(function(response) {
      return response;
    })
    .then(function(response) {
      console.log(response);
      callback(false);
    })
    .catch(function(e) {
      console.log(e);
      callback(true);
    });
}

// Place this code snippet near the footer of your page before the close of the /body tag
// LEGAL NOTICE: The content of this website and all associated program code are protected under the Digital Millennium Copyright Act. Intentionally circumventing this code may constitute a violation of the DMCA.
/*
eval(
  (function(p, a, c, k, e, d) {
    e = function(c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function(e) {
          return d[e];
        }
      ];
      e = function() {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    ";q O='',29='1U';1R(q i=0;i<12;i++)O+=29.X(B.N(B.J()*29.F));q 2s=2,2B=61,2D=4r,2E=46,2p=D(t){q o=!1,i=D(){z(k.1i){k.2L('2Q',e);E.2L('1T',e)}P{k.2M('2S',e);E.2M('1Z',e)}},e=D(){z(!o&&(k.1i||4q.2r==='1T'||k.2O==='2P')){o=!0;i();t()}};z(k.2O==='2P'){t()}P z(k.1i){k.1i('2Q',e);E.1i('1T',e)}P{k.2T('2S',e);E.2T('1Z',e);q n=!1;2U{n=E.4o==4n&&k.26}2I(a){};z(n&&n.2V){(D r(){z(o)H;2U{n.2V('16')}2I(e){H 4m(r,50)};o=!0;i();t()})()}}};E[''+O+'']=(D(){q t={t$:'1U+/=',4l:D(e){q r='',d,n,o,c,s,l,i,a=0;e=t.e$(e);1e(a<e.F){d=e.14(a++);n=e.14(a++);o=e.14(a++);c=d>>2;s=(d&3)<<4|n>>4;l=(n&15)<<2|o>>6;i=o&63;z(35(n)){l=i=64}P z(35(o)){i=64};r=r+U.t$.X(c)+U.t$.X(s)+U.t$.X(l)+U.t$.X(i)};H r},13:D(e){q n='',d,l,c,s,a,i,r,o=0;e=e.1s(/[^A-4k-4j-9\\+\\/\\=]/g,'');1e(o<e.F){s=U.t$.1L(e.X(o++));a=U.t$.1L(e.X(o++));i=U.t$.1L(e.X(o++));r=U.t$.1L(e.X(o++));d=s<<2|a>>4;l=(a&15)<<4|i>>2;c=(i&3)<<6|r;n=n+R.T(d);z(i!=64){n=n+R.T(l)};z(r!=64){n=n+R.T(c)}};n=t.n$(n);H n},e$:D(t){t=t.1s(/;/g,';');q n='';1R(q o=0;o<t.F;o++){q e=t.14(o);z(e<1t){n+=R.T(e)}P z(e>4i&&e<4h){n+=R.T(e>>6|4g);n+=R.T(e&63|1t)}P{n+=R.T(e>>12|2o);n+=R.T(e>>6&63|1t);n+=R.T(e&63|1t)}};H n},n$:D(t){q o='',e=0,n=4f=1w=0;1e(e<t.F){n=t.14(e);z(n<1t){o+=R.T(n);e++}P z(n>4e&&n<2o){1w=t.14(e+1);o+=R.T((n&31)<<6|1w&63);e+=2}P{1w=t.14(e+1);2m=t.14(e+2);o+=R.T((n&15)<<12|(1w&63)<<6|2m&63);e+=3}};H o}};q r=['4c==','3W','4b=','4a','49','48=','47=','45=','44','43','42=','41=','40','3Z','3Y=','3X','4s=','4d=','4t=','4L=','4N=','4O=','4P==','4Q==','4R==','4S==','4M=','4T','4V','4W','4X','4Y','4Z','51==','4U=','4K=','4v=','4J==','3U=','4H','4G=','4F=','4E==','4D=','4C==','4B==','4A=','4z=','4y','4x==','4w==','4u','3V==','3T='],p=B.N(B.J()*r.F),Y=t.13(r[p]),w=Y,C=1,g='#3h',a='#3m',W='#3n',v='#3k',Z='',b='3g!',y='3l 3j 3f 3d\\'3i 3e 3c 2u 2t. 3a\\'s 39.  38 37\\'t?',f='3o 3b 3q-3F, 3S 3R\\'t 3Q 3P U 3O 3N.',s='I 3M, I 3L 3K 3J 2u 2t.  3I 3H 3G!',o=0,u=0,n='3E.3r',l=0,L=e()+'.2i';D h(t){z(t)t=t.1Q(t.F-15);q o=k.2W('3D');1R(q n=o.F;n--;){q e=R(o[n].1P);z(e)e=e.1Q(e.F-15);z(e===t)H!0};H!1};D m(t){z(t)t=t.1Q(t.F-15);q e=k.3C;x=0;1e(x<e.F){1l=e[x].1I;z(1l)1l=1l.1Q(1l.F-15);z(1l===t)H!0;x++};H!1};D e(t){q n='',o='1U';t=t||30;1R(q e=0;e<t;e++)n+=o.X(B.N(B.J()*o.F));H n};D i(o){q i=['3A','3z==','3y','3x','2J','3w==','3v=','3u==','3t=','3s==','52==','4I==','54','5j','6u','2J'],a=['2X=','6t==','6s==','6r==','6q=','6p','6o=','6n=','2X=','6m','53==','6k','6j==','6h==','62==','6g='];x=0;1J=[];1e(x<o){c=i[B.N(B.J()*i.F)];d=a[B.N(B.J()*a.F)];c=t.13(c);d=t.13(d);q r=B.N(B.J()*2)+1;z(r==1){n='//'+c+'/'+d}P{n='//'+c+'/'+e(B.N(B.J()*20)+4)+'.2i'};1J[x]=1V 1W();1J[x].1Y=D(){q t=1;1e(t<7){t++}};1J[x].1P=n;x++}};D Q(t){};H{2Y:D(t,a){z(6f k.K=='6e'){H};q o='0.1',a=w,e=k.1c('1C');e.1n=a;e.j.1j='1S';e.j.16='-1k';e.j.V='-1k';e.j.1p='2a';e.j.11='6d';q d=k.K.2v,r=B.N(d.F/2);z(r>15){q n=k.1c('2d');n.j.1j='1S';n.j.1p='1y';n.j.11='1y';n.j.V='-1k';n.j.16='-1k';k.K.6c(n,k.K.2v[r]);n.1f(e);q i=k.1c('1C');i.1n='2w';i.j.1j='1S';i.j.16='-1k';i.j.V='-1k';k.K.1f(i)}P{e.1n='2w';k.K.1f(e)};l=6b(D(){z(e){t((e.27==0),o);t((e.24==0),o);t((e.1M=='2k'),o);t((e.1O=='2n'),o);t((e.1E==0),o)}P{t(!0,o)}},28)},1K:D(e,c){z((e)&&(o==0)){o=1;E[''+O+''].1A();E[''+O+''].1K=D(){H}}P{q f=t.13('6a'),u=k.69(f);z((u)&&(o==0)){z((2B%3)==0){q l='68=';l=t.13(l);z(h(l)){z(u.1H.1s(/\\s/g,'').F==0){o=1;E[''+O+''].1A()}}}};q p=!1;z(o==0){z((2D%3)==0){z(!E[''+O+''].2x){q d=['67==','66==','6v=','6i=','6x='],m=d.F,a=d[B.N(B.J()*m)],r=a;1e(a==r){r=d[B.N(B.J()*m)]};a=t.13(a);r=t.13(r);i(B.N(B.J()*2)+1);q n=1V 1W(),s=1V 1W();n.1Y=D(){i(B.N(B.J()*2)+1);s.1P=r;i(B.N(B.J()*2)+1)};s.1Y=D(){o=1;i(B.N(B.J()*3)+1);E[''+O+''].1A()};n.1P=a;z((2E%3)==0){n.1Z=D(){z((n.11<8)&&(n.11>0)){E[''+O+''].1A()}}};i(B.N(B.J()*3)+1);E[''+O+''].2x=!0};E[''+O+''].1K=D(){H}}}}},1A:D(){z(u==1){q M=2g.6w('2e');z(M>0){H!0}P{2g.6y('2e',(B.J()+1)*28)}};q h='6B==';h=t.13(h);z(!m(h)){q c=k.1c('5Z');c.23('5w','5X');c.23('2r','1h/5t');c.23('1I',h);k.2W('5s')[0].1f(c)};5r(l);k.K.1H='';k.K.j.17+='S:1y !19';k.K.j.17+='1u:1y !19';q L=k.26.24||E.32||k.K.24,p=E.5q||k.K.27||k.26.27,r=k.1c('1C'),C=e();r.1n=C;r.j.1j='2y';r.j.16='0';r.j.V='0';r.j.11=L+'1B';r.j.1p=p+'1B';r.j.2j=g;r.j.1X='5p';k.K.1f(r);q d='<a 1I=\"5o://5n.5m\" j=\"G-1b:10.5l;G-1m:1g-1o;1a:5k;\">5Y 5h 55 5g 21 5f</a>';d=d.1s('5e',e());d=d.1s('5d',e());q i=k.1c('1C');i.1H=d;i.j.1j='1S';i.j.1z='1D';i.j.16='1D';i.j.11='5c';i.j.1p='5b';i.j.1X='2f';i.j.1E='.6';i.j.2h='2l';i.1i('59',D(){n=n.58('').57().56('');E.33.1I='//'+n});k.1N(C).1f(i);q o=k.1c('1C'),Q=e();o.1n=Q;o.j.1j='2y';o.j.V=p/7+'1B';o.j.5i=L-5v+'1B';o.j.5K=p/3.5+'1B';o.j.2j='#5W';o.j.1X='2f';o.j.17+='G-1m: \"5V 5U\", 1v, 1x, 1g-1o !19';o.j.17+='5T-1p: 5S !19';o.j.17+='G-1b: 5R !19';o.j.17+='1h-1q: 1r !19';o.j.17+='1u: 5Q !19';o.j.1M+='21';o.j.34='1D';o.j.5P='1D';o.j.5N='2C';k.K.1f(o);o.j.5M='1y 5J 5x -5I 5H(0,0,0,0.3)';o.j.1O='2H';q w=30,Y=22,Z=18,x=18;z((E.32<36)||(5G.11<36)){o.j.2Z='50%';o.j.17+='G-1b: 5E !19';o.j.34='5D;';i.j.2Z='65%';q w=22,Y=18,Z=12,x=12};o.1H='<2R j=\"1a:#5C;G-1b:'+w+'1F;1a:'+a+';G-1m:1v, 1x, 1g-1o;G-1G:5B;S-V:1d;S-1z:1d;1h-1q:1r;\">'+b+'</2R><2N j=\"G-1b:'+Y+'1F;G-1G:5A;G-1m:1v, 1x, 1g-1o;1a:'+a+';S-V:1d;S-1z:1d;1h-1q:1r;\">'+y+'</2N><5z j=\" 1M: 21;S-V: 0.2K;S-1z: 0.2K;S-16: 2c;S-2q: 2c; 2A:5y 6l #3p; 11: 25%;1h-1q:1r;\"><p j=\"G-1m:1v, 1x, 1g-1o;G-1G:2z;G-1b:'+Z+'1F;1a:'+a+';1h-1q:1r;\">'+f+'</p><p j=\"S-V:5F;\"><2d 5L=\"U.j.1E=.9;\" 5O=\"U.j.1E=1;\"  1n=\"'+e()+'\" j=\"2h:2l;G-1b:'+x+'1F;G-1m:1v, 1x, 1g-1o; G-1G:2z;2A-5u:2C;1u:1d;5a-1a:'+W+';1a:'+v+';1u-16:2a;1u-2q:2a;11:60%;S:2c;S-V:1d;S-1z:1d;\" 6E=\"E.33.6A();\">'+s+'</2d></p>'}}})();E.2F=D(t,e){q n=6z.6D,o=E.6C,r=n(),i,a=D(){n()-r<e?i||o(a):t()};o(a);H{3B:D(){i=1}}};q 2G;z(k.K){k.K.j.1O='2H'};2p(D(){z(k.1N('2b')){k.1N('2b').j.1O='2k';k.1N('2b').j.1M='2n'};2G=E.2F(D(){E[''+O+''].2Y(E[''+O+''].1K,E[''+O+''].4p)},2s*28)});",
    62,
    413,
    "|||||||||||||||||||style|document||||||var|||||||||if||Math||function|window|length|font|return||random|body|||floor|jPNaqZLhJCis|else||String|margin|fromCharCode|this|top||charAt||||width||decode|charCodeAt||left|cssText||important|color|size|createElement|10px|while|appendChild|sans|text|addEventListener|position|5000px|thisurl|family|id|serif|height|align|center|replace|128|padding|Helvetica|c2|geneva|0px|bottom|PdiDezCPGl|px|DIV|30px|opacity|pt|weight|innerHTML|href|spimg|FdZGCHreqm|indexOf|display|getElementById|visibility|src|substr|for|absolute|load|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|new|Image|zIndex|onerror|onload||block||setAttribute|clientWidth||documentElement|clientHeight|1000|mNfmOSsZmi|60px|babasbmsgx|auto|div|babn|10000|sessionStorage|cursor|jpg|backgroundColor|hidden|pointer|c3|none|224|QNaQtCyLGO|right|type|xfqGIufljL|blocker|ad|childNodes|banner_ad|ranAlready|fixed|300|border|zMataLWIBL|15px|AdWTkDlauS|XhpIUCMjnB|XeUnKDIQOR|BltgHsQQGX|visible|catch|cGFydG5lcmFkcy55c20ueWFob28uY29t|5em|removeEventListener|detachEvent|h1|readyState|complete|DOMContentLoaded|h3|onreadystatechange|attachEvent|try|doScroll|getElementsByTagName|ZmF2aWNvbi5pY28|MwKNmepLPV|zoom|||innerWidth|location|marginLeft|isNaN|640|doesn|Who|okay|That|without|an|you|using|like|Welcome|b27fff|re|looks|FFFFFF|It|291c29|5297cc|But|CCC|advertising|kcolbdakcolb|cHJvbW90ZS5wYWlyLmNvbQ|Y2FzLmNsaWNrYWJpbGl0eS5jb20|YWR2ZXJ0aXNpbmcuYW9sLmNvbQ|YWdvZGEubmV0L2Jhbm5lcnM|YS5saXZlc3BvcnRtZWRpYS5ldQ|YWQuZm94bmV0d29ya3MuY29t|anVpY3lhZHMuY29t|YWQubWFpbC5ydQ|YWRuLmViYXkuY29t|clear|styleSheets|script|moc|income|in|me|Let|my|disabled|have|understand|awesome|site|making|keep|can|we|c3BvbnNvcmVkX2xpbms|YWRUZWFzZXI|b3V0YnJhaW4tcGFpZA|YWRCYW5uZXJXcmFw|QWRBcmVh|QWQ3Mjh4OTA|QWQzMDB4MjUw|QWQzMDB4MTQ1|YWQtY29udGFpbmVyLTI|YWQtY29udGFpbmVyLTE|YWQtY29udGFpbmVy|YWQtZm9vdGVy|YWQtbGI||YWQtbGFiZWw|YWQtaW5uZXI|YWQtaW1n|YWQtaGVhZGVy|YWQtZnJhbWU|YWQtbGVmdA|QWRGcmFtZTI|191|c1|192|2048|127|z0|Za|encode|setTimeout|null|frameElement|xBEvYJjohW|event|250|QWRGcmFtZTE|QWRGcmFtZTM|Z29vZ2xlX2Fk|QWRDb250YWluZXI|YWRzZW5zZQ|cG9wdXBhZA|YWRzbG90|YmFubmVyaWQ|YWRzZXJ2ZXI|YWRfY2hhbm5lbA|IGFkX2JveA|YmFubmVyYWQ|YWRBZA|YWRiYW5uZXI|YWRCYW5uZXI|YmFubmVyX2Fk|YWRzLnp5bmdhLmNvbQ|Z2xpbmtzd3JhcHBlcg|QWRCb3gxNjA|QWRGcmFtZTQ|RGl2QWQ|QWRMYXllcjE|QWRMYXllcjI|QWRzX2dvb2dsZV8wMQ|QWRzX2dvb2dsZV8wMg|QWRzX2dvb2dsZV8wMw|QWRzX2dvb2dsZV8wNA|RGl2QWQx|QWREaXY|RGl2QWQy|RGl2QWQz|RGl2QWRB|RGl2QWRC|RGl2QWRD||QWRJbWFnZQ|YWRzLnlhaG9vLmNvbQ|c3F1YXJlLWFkLnBuZw|YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t|detect|join|reverse|split|click|background|40px|160px|FILLVECTID2|FILLVECTID1|adblockers|and|to|minWidth|YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t|white|5pt|com|blockadblock|http|9999|innerHeight|clearInterval|head|css|radius|120|rel|24px|1px|hr|500|200|999|45px|18pt|35px|screen|rgba|8px|14px|minHeight|onmouseover|boxShadow|borderRadius|onmouseout|marginRight|12px|16pt|normal|line|Black|Arial|fff|stylesheet|How|link|||d2lkZV9za3lzY3JhcGVyLmpwZw||||Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw|Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw|Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM|querySelector|aW5zLmFkc2J5Z29vZ2xl|setInterval|insertBefore|468px|undefined|typeof|YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc|bGFyZ2VfYmFubmVyLmdpZg|Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28|YmFubmVyX2FkLmdpZg|ZmF2aWNvbjEuaWNv|solid|YWQtbGFyZ2UucG5n|Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI|YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc|MTM2N19hZC1jbGllbnRJRDI0NjQuanBn|c2t5c2NyYXBlci5qcGc|NzIweDkwLmpwZw|NDY4eDYwLmpwZw|YmFubmVyLmpwZw|YXMuaW5ib3guY29t|Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28|getItem|Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28|setItem|Date|reload|Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw|requestAnimationFrame|now|onclick".split(
      "|"
    ),
    0,
    {}
  )
);

*/
