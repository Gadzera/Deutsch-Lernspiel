// EV ZT3 init — data in ev_zt3_g1.js, ev_zt3_g2.js, ev_zt3_w.js, ev_zt3_s.js

(function(){
  if(typeof VWU==='undefined') return;
  var ev=VWU.levels.find(function(l){return l.id==='ev';});
  if(!ev) return;
  var zt3=ev.tests.find(function(t){return t.id==='ev_zt3';});
  if(!zt3) return;
  delete zt3.empty;
  var g=(typeof EV_ZT3_G1!=='undefined'&&typeof EV_ZT3_G2!=='undefined')?EV_ZT3_G1.concat(EV_ZT3_G2):[];
  var w=typeof EV_ZT3_W!=='undefined'?EV_ZT3_W:[];
  var s=typeof EV_ZT3_S!=='undefined'?EV_ZT3_S:[];
  if(!g.length||!w.length||!s.length) return;
  var pick=function(arr){return arr[Math.floor(Math.random()*arr.length)];};
  var gv=pick(g);
  var wv=pick(w);
  var sv=pick(s);
  var passivItems=gv.passiv.map(function(p){
    return {prefix:p.active, sentence:'→ '+p.prefix+' ___', answers:p.answers};
  });
  var grammatikTasks=[
    {type:'fill',ruleKey:'satz_passiv',
     q:'Formen Sie die Sätze ins Passiv um! Verwenden Sie die Vergangenheitsform, wenn nötig!',
     scoring:'4 × 1,5 = 6 P.',perItem:1.5,items:passivItems},
    {type:'praepositionen',ruleKey:'prepositions',
     q:'Setzen Sie die fehlenden Präpositionen wie im Beispiel ein!',
     scoring:'6 × 0,5 = 3 P.',perItem:0.5,
     example:gv.praepositionen.example,
     text:gv.praepositionen.chart+gv.praepositionen.text,
     blanks:gv.praepositionen.blanks},
    {type:'fill',ruleKey:'vwu_genitiv',
     q:'Ergänzen Sie das Nomen in der Klammer im Genitiv!',
     scoring:'6 × 0,5 = 3 P.',perItem:0.5,items:gv.genitiv},
    {type:'fill',ruleKey:'pron_relativ',
     q:'Ergänzen Sie das Relativpronomen bzw. die Präposition mit dem Relativpronomen!',
     scoring:'5 × 0,5 = 2,5 P.',perItem:0.5,items:gv.relativpronomen},
    {type:'fill',ruleKey:'satz_komparativ',
     q:'Ergänzen Sie den Komparativ bzw. Superlativ der Adjektive in Klammern!',
     scoring:'7 × 0,5 = 3,5 P.',perItem:0.5,items:gv.komparativ}
  ];
  var wortschatzTasks=[
    {type:'antonyms',ruleKey:'vwu_wortbildung',
     q:'Ergänzen Sie die fehlenden Begriffe! Achten Sie auf die Wortart!',
     scoring:'6 × 0,5 = 3 P.',perItem:0.5,
     example:{word:'arbeiten → Nomen:',answer:'Arbeit'},
     items:wv.wortarten},
    {type:'antonyms',ruleKey:'vwu_komposita',
     q:'Bilden Sie sinnvolle Komposita und ergänzen Sie den Artikel!',
     scoring:'6 × 0,5 = 3 P.',perItem:0.5,
     example:{word:'Prüfung + Ergebnis →',answer:'das Prüfungsergebnis'},
     items:wv.komposita},
    {type:'antonyms',ruleKey:'vwu_synonyme',
     q:'Finden Sie Synonyme!',
     scoring:'4 × 0,5 = 2 P.',perItem:0.5,
     example:{word:'beginnen →',answer:'anfangen'},
     items:wv.synonyme}
  ];
  zt3.sections=[
    {type:'strukturen',name:'Grammatik',points:18,tasks:grammatikTasks},
    {type:'wortschatz',name:'Wortschatz',points:8,tasks:wortschatzTasks},
    Object.assign({type:'schreiben',name:'Schriftliche Produktion'},sv)
  ];
})();
