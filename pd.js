﻿var exports="",addthis_config={ui_508_compliant:true,data_track_clickback:true,ui_use_addressbook:true},$=function(){"use strict";if(typeof document.getElementById==="undefined"){return;}var i,element,elements=[];for(i=0;i<arguments.length;i+=1){element=arguments[i];if(typeof(element)==="string"){element=document.getElementById(element);}if(arguments.length===1){return element;}elements.push(element);}return elements;},o={au:$("ctype-auto"),ba:$("beau-tab"),bb:$("modebeautify"),bc:$("beau-char"),bd:$("Beautify"),bf:$("bforce_indent-no"),bg:$("bforce_indent-yes"),bi:$("beautyinput"),bl:$("baselabel"),bn:$("beau-line"),bo:$("baseText"),bq:$("beau-quan"),bs:$("beau-space"),bt:$("diffBase"),bx:$("beautyoutput"),bw:$("beau-other"),bz:$("bo"),ch:$("csvchar"),cn:4,cv:$("ctype-csv"),cz:" ",da:$("diff-tab"),db:$("diffbeautify"),dc:$("diff-char"),dd:$("modediff"),df:$("dforce_indent-no"),dg:$("dforce_indent-yes"),dm:$("diffscolony"),dn:$("diffscolonn"),dp:$("diffwide"),dq:$("diff-quan"),dr:$("diffquotey"),ds:$("diff-space"),dt:$("difftall"),du:$("diffcontentn"),dv:$("diffoutput"),dw:$("diff-other"),dx:$("diffcontenty"),dy:$("diffquoten"),dz:$("diff-line"),hd:$("htmld-yes"),he:$("htmld-no"),hm:$("htmlm-yes"),hn:$("htmlm-no"),ht:$("htmlspecific"),hy:$("html-yes"),hz:$("html-no"),id:$("inscriptd-yes"),ie:$("inscriptd-no"),is:$("inscript-yes"),it:$("inscript-no"),iy:$("incomment-yes"),iz:$("incomment-no"),jd:$("jsindentd-all"),je:$("jsindentd-knr"),js:$("jsindent-all"),jt:$("jsindent-knr"),mb:$("topcoms-no"),mc:$("topcoms-yes"),md:$("Minify"),mi:$("minifyinput"),ml:$("minifyinputlines"),mm:$("modeminify"),mn:$("minifywindiff"),mo:$("minifyoutputsize"),mr:$("minifywinratiosize"),ms:$("minifyinputsize"),mt:$("minifyratiosize"),mu:$("minifyunixdiff"),mw:$("minifywinsize"),mx:$("minifyoutput"),nl:$("newlabel"),nt:$("diffNew"),nx:$("newText"),nz:$("no"),op:$("options"),ps:$("diff-save"),pt:$("ctype-text"),sh:$("hideOptions"),tb:$("buttonTop"),to:$("top"),bcv:"",dcv:"",dqp:$("diffquanp"),dqt:$("difftypep"),htd:$("htmlspecificd"),ind:$("scriptindentd"),ins:$("scriptindent"),bops:$("beauops"),csvp:$("csvcharp"),disp:$("displayOps"),dops:$("diffops"),mops:$("miniops"),context:$("contextSize"),inline:$("inline"),sideby:$("sidebyside"),option:$("option_comment")},recycle=function(){"use strict";var api={},output;api.comments="indent";api.content=false;api.diff="";api.diffview="sidebyside";api.html=false;api.insize=4;api.indent="";api.lang="auto";api.mode="beautify";api.quote=false;api.semicolon=false;api.style="indent";api.topcoms=false;api.force_indent=false;o.bb=$("modebeautify");o.jd=$("jsindentd-all");o.js=$("jsindent-all");o.ch=$("csvchar");o.cv=$("ctype-csv");o.dd=$("modediff");o.mm=$("modeminify");o.pt=$("ctype-text");o.dx=$("diffcontenty");if(o.cv.checked===true){api.lang="csv";}else if(o.pt.checked===true){api.lang="text";}if(o.bb.checked){o.hy=$("html-yes");o.ba=$("beau-tab");o.bn=$("beau-line");o.bw=$("beau-other");o.bc=$("beau-char");o.bi=$("beautyinput");o.bq=$("beau-quan");o.is=$("inscript-yes");o.iz=$("incomment-no");o.bg=$("bforce_indent-yes");if(o.bg.checked){api.force_indent=true;}if(o.ba.checked){o.cz="\t";}else if(o.bn.checked){o.cz="\n";}else if(o.bw.checked){o.cz=o.bc.value;}else{o.cz=" ";}api.inchar=o.cz;if(!isNaN(o.bq.value)){o.cn=Number(o.bq.value);api.insize=o.cn;}if(o.it.checked){api.style="noindent";}if(o.hy.checked){api.html="html-yes";}if(o.iz.checked){api.comments="noindent";}if(o.js.checked){api.indent="allman";}api.source=o.bi.value;api.mode="beautify";if(typeof localStorage!=="undefined"){localStorage.setItem("bi",api.source);}}else if(o.dd.checked){o.context=$("contextSize");o.inline=$("inline");o.bl=$("baselabel");o.nl=$("newlabel");o.hd=$("htmld-yes");o.bo=$("baseText");o.nx=$("newText");o.dn=$("diffscolonn");o.dy=$("diffquoten");o.da=$("diff-tab");o.dw=$("diff-other");o.dz=$("diff-line");o.dc=$("diff-char");o.dq=$("diff-quan");o.du=$("diffcontentn");o.id=$("inscriptd-yes");o.ps=$("diff-save");o.dg=$("dforce_indent-yes");api.difflabel=o.nl.value;api.sourcelabel=o.bl.value;if(o.dg.checked){api.force_indent=true;}if(o.du.checked){api.content=true;}if(o.da.checked){o.cz="\t";}else if(o.dz.checked){o.cz="\n";}else if(o.dw.checked.checked){o.cz=o.dc.value;}else{o.cz=" ";}api.inchar=o.cz;if(!isNaN(o.dq.value)){o.cn=Number(o.dq.value);api.insize=o.cn;}if(!o.id.checked){api.style="noindent";}if(o.hd.checked){api.html="html-yes";}if(o.dy.checked){api.quote=true;}if(o.dn.checked){api.semicolon=true;}if(o.inline.checked){api.diffview="inline";}if(isNaN(o.context.value)){o.context.value="";api.context="";}if(o.jd.checked){api.indent="allman";}if(o.bo.value===""||o.bo.value==="Error: source code is missing."){o.bo.value="Error: source code is missing.";return;}if(o.nx.value===""||o.nx.value==="Error: diff code is missing."){o.nx.value="Error: diff code is missing.";return;}api.source=o.bo.value;api.diff=o.nx.value;api.mode="diff";if(typeof localStorage!=="undefined"){localStorage.setItem("bo",api.source);localStorage.setItem("nx",api.diff);localStorage.setItem("bl",api.sourcelabel);localStorage.setItem("nl",api.difflabel);}}else if(o.mm.checked){o.hm=$("htmlm-yes");o.mc=$("topcoms-yes");o.mi=$("minifyinput");if(o.hm.checked){api.html="html-yes";}if(o.mc.checked){api.topcoms=true;}api.source=o.mi.value;api.mode="minify";if(typeof localStorage!=="undefined"){localStorage.setItem("mi",api.source);}}output=prettydiff(api);if(o.bb.checked){o.bx.value=output[0];o.dv.innerHTML=output[1];}else if(o.dd.checked){if(o.ps.checked){output[2]=output[1]+"<p>This is the generated diff output. Please copy the text output, paste into a text file, and save as a &quot;.html&quot; file.</p><textarea rows='40' cols='80' id='textreport'>";output[0]="<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.1//EN' 'http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd'><html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'><head><title>Pretty Diff - The difference tool</title><meta name='robots' content='index, follow'/> <meta name='DC.title' content='Pretty Diff - The difference tool'/> <link rel='canonical' href='http://prettydiff.com/' type='application/xhtml+xml'/><meta http-equiv='Content-Type' content='application/xhtml+xml;charset=UTF-8'/><meta http-equiv='Content-Style-Type' content='text/css'/><style type='text/css'>body{background-color:#a8b8c8;color:#000;font-family:'Arial';font-size:10px;}button{display:block;font-size:2em;font-weight:bold;margin:1em auto;padding:1em 2em;}button:hover{background:#ccf;}button:active{background:#c00;}h1{font-size:2em;}h1 span{color:#c00;font-size:.5em;}p{clear:both;font-size:1.2em;margin-top:.2em;}#diffoutput{width:100%;}p em{color:#c00;font-weight:bold;}table.diff{border-collapse:collapse;border:.1em solid darkgray;font-size:1em;white-space:pre;}table.diff tbody{font-family:'Courier New',Courier,'Lucida Console',monospace;font-size:1.1em;}table.diff tbody th{font-family:verdana,arial,'Bitstream Vera Sans',helvetica,sans-serif;background:#eed;font-weight:normal;border:.1em solid #bbc;color:#886;padding:.5em .6em 0em 2.4em;text-align:right;vertical-align:top;}table.diff thead{border-bottom:.1em solid #bbc;background:#efefef;font-family:Verdana;}table.diff thead th.texttitle{text-align:left;}table.diff tbody td{letter-spacing:.1em;padding:.5em .5em 0em .5em;vertical-align:top;}table.diff tbody td em{font-style:normal;padding:.05em 0em;margin:0-.09em;}table.diff .empty{background-color:#ddd;}table.diff .replace{background-color:#fd8;}table.diff .replace em{background-color:#ffd;border:.1em solid #963;}table.diff .delete{background-color:#e99;}table.diff .delete em{background-color:#fdd;border:.1em solid #700;}table.diff .equal{background-color:#fff;}table.diff .skip{background-color:#efefef;border:.1em solid #aaa;border-right:.1em solid #bbc;}table.diff .insert{background-color:#9e9;}table.diff .insert em{background-color:#efc;border:1px solid #070;}table.diff th.author{text-align:right;border-top:.1em solid #bbc;background:#efefef;}@media print{html{font-size:.8em;}html table.diff{font-size:.8em;white-space:normal;}}</style></head><body><h1><a href='http://prettydiff.com/'>Pretty Diff - The difference tool</a></h1>"+output[1]+"<p>Accessibility note. &lt;em&gt; tags in the output represent character differences per lines compared.</p>"+output[0]+"</body></html>";o.dv.innerHTML=output[2]+output[0].replace(/\&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;")+"</textarea>";}else{o.dv.innerHTML=output[1]+output[0];}}else if(o.mm.checked){o.mx.value=output[0];o.dv.innerHTML=output[1];}},pd={hideOptions:function(x){"use strict";o.bb=$("modebeautify");o.dd=$("modediff");o.mm=$("modeminify");o.au=$("ctype-auto");o.dt=$("difftall");if(x.innerHTML==="Maximize inputs"){o.op.style.display="none";o.bops.style.display="none";o.dops.style.display="none";o.mops.style.display="none";o.to.style.display="none";o.tb.style.display="none";o.bd.className="tall";o.md.className="tall";o.bt.className="difftall";o.nt.className="difftall";if(window.innerHeight){o.bi.style.height=((window.innerHeight-330)/ 10)+"em";o.mi.style.height=((window.innerHeight-330)/ 10)+"em";o.bx.style.height=((window.innerHeight-330)/ 10)+"em";o.mx.style.height=((window.innerHeight-330)/ 10)+"em";o.bo.style.height=((window.innerHeight-360)/ 10)+"em";o.nx.style.height=((window.innerHeight-360)/ 10)+"em";}else{o.bi.style.height=((window.screen.availHeight-460)/ 10)+"em";o.mi.style.height=((window.screen.availHeight-460)/ 10)+"em";o.bx.style.height=((window.screen.availHeight-460)/ 10)+"em";o.mx.style.height=((window.screen.availHeight-460)/ 10)+"em";o.bo.style.height=((window.screen.availHeight-490)/ 10)+"em";o.nx.style.height=((window.screen.availHeight-490)/ 10)+"em";}o.disp.className="maximized";x.innerHTML="Normal view";}else if(x.innerHTML==="Normal view"){o.op.style.display="block";if(o.bb.checked&&o.au.checked){o.bops.style.display="block";}else if(o.dd.checked){o.dops.style.display="block";}else if(o.mm.checked&&o.au.checked){o.mops.style.display="block";}o.bi.style.height="";o.mi.style.height="";o.bx.style.height="";o.mx.style.height="";o.bo.style.height="";o.nx.style.height="";if(!o.dt.checked){o.bd.className="wide";o.md.className="wide";o.bt.className="wide";o.nt.className="wide";}o.to.style.display="block";o.tb.style.display="block";o.disp.className="default";x.innerHTML="Maximize inputs";}pd.options(x);return false;},prettyvis:function(a){"use strict";var optioncheck=function(){o.au.disabled=false;if(o.pt.checked){o.au.checked=true;}o.cv.disabled=false;o.pt.disabled=true;o.pt.checked=false;};if(a===o.bb){optioncheck();o.bx.setAttribute("name","paste_code");o.mx.removeAttribute("name");if(o.bi.value===""&&o.mi.value!==""){o.bi.value=o.mi.value;}else if(o.bi.value===""&&o.bo.value!==""){o.bi.value=o.bo.value;}o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="block";o.md.style.display="none";o.dops.style.display="none";o.mops.style.display="none";if(o.cv.checked){o.bops.style.display="none";}else{o.bops.style.display="block";}}else if(a===o.mm){optioncheck();o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");if(o.mi.value===""&&o.bi.value!==""){o.mi.value=o.bi.value;}else if(o.mi.value===""&&o.bo.value!==""){o.mi.value=o.bo.value;}if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="none";o.md.style.display="block";o.dops.style.display="none";o.bops.style.display="none";}else if(a===o.dd){o.au.disabled=false;o.cv.disabled=false;o.pt.disabled=false;if(o.bo.value===""&&o.bi.value!==""){o.bo.value=o.bi.value;}else if(o.bo.value===""&&o.mi.value!==""){o.bo.value=o.mi.value;}o.bt.style.display="block";o.nt.style.display="block";o.bd.style.display="none";o.md.style.display="none";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.cv.checked||o.pt.checked){o.dqp.style.display="none";o.dqt.style.display="none";o.db.style.display="none";}else{o.dqp.style.display="block";o.dqt.style.display="block";o.db.style.display="block";}}else if(a===o.dp){o.bt.className="wide";o.nt.className="wide";o.bd.className="wide";o.md.className="wide";}else if(a===o.dt){o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}pd.options(a);},codeOps:function(x){"use strict";o.bb=$("modebeautify");o.dd=$("modediff");o.mm=$("modeminify");o.au=$("ctype-auto");if(o.dd.checked){o.mops.style.display="none";o.bops.style.display="none";if(o.cv.checked||o.pt.checked){o.dqp.style.display="none";o.dqt.style.display="none";o.db.style.display="none";}else{o.dqp.style.display="block";o.dqt.style.display="block";o.db.style.display="block";}}else if(o.bb.checked){o.mops.style.display="none";o.dops.style.display="none";if(o.cv.checked){o.bops.style.display="none";}else{o.bops.style.display="block";}}else if(o.mm.checked){o.bops.style.display="none";o.dops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}if(o.cv.checked){o.csvp.style.display="block";}else{o.csvp.style.display="none";}if(x===false){o.db.style.display="block";}else{o.db.style.display="none";}},indentchar:function(x){"use strict";o.bc=$("beau-char");o.dc=$("diff-char");if(o.bb.checked&&x==="beau-char"){o.bw.checked=true;}else if(o.dd.checked&&x==="diff-char"){o.dw.checked=true;}if(o.bb.checked&&o.bw.checked){o.bc.style.background="#eef8ff";o.bc.style.color="#000";if(o.bc.value="Click me for custom input"){o.bc.value="";}}else if(o.bb.checked){if(o.bc.value===""){o.bc.value="Click me for custom input";o.bc.style.color="#888";}o.bc.style.background="#eee";}else if(o.dd.checked&&o.dw.checked){o.dc.style.background="#eef8ff";o.dc.style.color="#000";if(o.dc.value="Click me for custom input"){o.dc.value="";}}else if(o.dd.checked){if(o.dc.value===""){o.dc.value="Click me for custom input";o.dc.style.color="#888";}o.dc.style.background="#eee";}if(o.bcv!==""){o.bc.value=o.bcv;}if(o.dcv!==""){o.dc.value=o.dcv;}},optionString:[],webtool:[],options:function(x){"use strict";if(typeof localStorage==="undefined"){return;}o.bb=$("modebeautify");o.dd=$("modediff");o.mm=$("modeminify");o.dt=$("difftall");o.sh=$("hideOptions");o.ps=$("diff-save");if(localStorage.getItem("webtool")){pd.optionString=localStorage.getItem("webtool").replace(/prettydiffper/g,"%").replace(/(showhide: (hide|show))|(display: (horizontal|vertical))|(diffsave: (true|false))/g,"").split("prettydiffcsep");}if(x===o.bb){pd.optionString[0]="api.mode: beautify";}else if(x===o.mm){pd.optionString[0]="api.mode: minify";}else if(x===o.dd){pd.optionString[0]="api.mode: diff";}else if(x===o.au){pd.optionString[1]="api.lang: auto";}else if(x===o.pt){pd.optionString[1]="api.lang: text";}else if(x===o.cv){pd.optionString[1]="api.lang: csv";}else if(x===o.ch){pd.optionString[2]="api.csvchar: \""+o.ch.value+"\"";}else if(x===o.bq&&o.bb.checked&&o.bq.value!==""&&!isNaN(Number(o.bq.value))){pd.optionString[3]="api.insize: "+o.bq.value;}else if(x===o.dq&&o.dd.checked&&o.dq.value!==""&&!isNaN(Number(o.dq.value))){pd.optionString[3]="api.insize: "+o.dq.value;}else if(x===o.bc&&o.bb.checked&&o.bw.checked){pd.optionString[4]="api.inchar: \""+o.bc.value+"\"";o.bcv=o.bc.value;}else if(x===o.bw&&o.bb.checked){pd.optionString[4]="api.inchar: \""+o.bc.value+"\"";}else if(x===o.bs&&o.bb.checked){pd.optionString[4]="api.inchar: \" \"";}else if(x===o.ba&&o.bb.checked){pd.optionString[4]="api.inchar: \"\\t\"";}else if(x===o.bn&&o.bb.checked){pd.optionString[4]="api.inchar: \"\\n\"";}else if(x===o.dc&&o.dd.checked&&o.dw.checked){pd.optionString[4]="api.inchar: \""+o.dc.value+"\"";o.dcv=o.dc.value;}else if(x===o.dw&&o.dd.checked){pd.optionString[4]="api.inchar: \""+o.dc.value+"\"";}else if(x===o.ds&&o.dd.checked){pd.optionString[4]="api.inchar: \" \"";}else if(x===o.da&&o.dd.checked){pd.optionString[4]="api.inchar: \"\\t\"";}else if(x===o.dz&&o.dd.checked){pd.optionString[4]="api.inchar: \"\\n\"";}else if(x===o.iy&&o.bb.checked){pd.optionString[5]="api.comments: indent";}else if(x===o.iz&&o.bb.checked){pd.optionString[5]="api.comments: noindent";}else if(x===o.js&&o.bb.checked){pd.optionString[6]="api.indent: allman";}else if(x===o.jt&&o.bb.checked){pd.optionString[6]="api.indent: knr";}else if(x===o.jd&&o.dd.checked){pd.optionString[6]="api.indent: allman";}else if(x===o.je&&o.dd.checked){pd.optionString[6]="api.indent: knr";}else if(x===o.is&&o.bb.checked){pd.optionString[7]="api.style: indent";}else if(x===o.it&&o.bb.checked){pd.optionString[7]="api.stylet: noindent";}else if(x===o.id&&o.dd.checked){pd.optionString[7]="api.style: indent";}else if(x===o.ie&&o.dd.checked){pd.optionString[7]="api.style: noindent";}else if(x===o.hy&&o.bb.checked){pd.optionString[8]="api.html: html-yes";}else if(x===o.hz&&o.bb.checked){pd.optionString[8]="api.html: html-no";}else if(x===o.hm&&o.mm.checked){pd.optionString[8]="api.html: html-yes";}else if(x===o.hn&&o.mm.checked){pd.optionString[8]="api.html: html-no";}else if(x===o.hd&&o.dd.checked){pd.optionString[8]="api.html: html-yes";}else if(x===o.he&&o.dd.checked){pd.optionString[8]="api.html: html-no";}else if(x===o.context){if(o.context.value===""||isNaN(o.context.value)){pd.optionString[9]="api.context: \"\"";}else{pd.optionString[9]="api.context: "+o.context.value;}}else if(x===o.du){pd.optionString[10]="api.content: true";}else if(x===o.dx){pd.optionString[10]="api.content: false";}else if(x===o.dr){pd.optionString[11]="api.quote: false";}else if(x===o.dy){pd.optionString[11]="api.quote: true";}else if(x===o.dm){pd.optionString[12]="api.semicolon: false";}else if(x===o.dn){pd.optionString[12]="api.semicolon: true";}else if(x===o.inline){pd.optionString[13]="api.diffview: inline";}else if(x===o.sideby){pd.optionString[13]="api.diffview: sidebyside";}else if(x===o.mb){pd.optionString[14]="api.topcoms: false";}else if(x===o.mc){pd.optionString[14]="api.topcoms: true";}else if(x===o.bg){pd.optionString[15]="api.force_indent: true";}else if(x===o.dg){pd.optionString[15]="api.force_indent: true";}else if(x===o.bf){pd.optionString[15]="api.force_indent: false";}else if(x===o.df){pd.optionString[15]="api.force_indent: false";}if(o.sh.innerHTML==="Normal view"){pd.webtool[0]="showhide: hide";}else if(o.sh.innerHTML!=="Normal view"){pd.webtool[0]="showhide: show";}if(x===o.dp||!o.dt.checked){pd.webtool[1]="display: horizontal";}else if(x===o.dt||o.dt.checked){pd.webtool[1]="display: vertical";}if((x===o.ps&&o.ps.checked)||o.ps.checked){pd.webtool[2]="diffsave: true";}else if(x===o.ps||!o.ps.checked){pd.webtool[2]="diffsave: false";}o.option.innerHTML=("/*prettydiff.com "+(pd.optionString.join(", ").replace(/(\,\s+\,\s+)+/g,", ")+" */").replace(/((\,? )+\*\/)$/," */")).replace(/^(\/\*prettydiff\.com (\, )+)/,"/*prettydiff.com ").replace(/(\,\s+\,\s+)+/g,", ");if(pd.optionString[0]===""||pd.optionString[0]===undefined){if(o.bb.checked){pd.optionString[0]="api.mode: beautify";}else if(o.mm.checked){pd.optionString[0]="api.mode: minify";}else{pd.optionString[0]="api.mode: diff";}localStorage.setItem("webtool",pd.optionString.concat(pd.webtool).join("prettydiffcsep").replace(/%/g,"prettydiffper"));pd.optionString[0]="";}else{localStorage.setItem("webtool",pd.optionString.concat(pd.webtool).join("prettydiffcsep").replace(/%/g,"prettydiffper"));}},reset:function(){"use strict";pd.optionString=[];o.bi.style.height="";o.mi.style.height="";o.bx.style.height="";o.mx.style.height="";o.bo.style.height="";o.nx.style.height="";o.disp.className="default";o.to.style.display="block";o.op.style.display="block";o.bops.style.display="none";o.dops.style.display="block";o.mops.style.display="none";o.csvp.style.display="none";o.bd.style.display="none";o.bt.style.display="block";o.nt.style.display="block";o.md.style.display="none";o.bt.className="wide";o.nt.className="wide";o.bd.className="wide";o.md.className="wide";o.pt.disabled=true;o.dd.checked=true;o.au.checked=true;o.dp.checked=true;o.option.value="/*prettydiff.com */";o.sh.innerHTML="Maximize inputs";o.bq.value="4";o.bc.value="Click me for custom input";o.bc.style.color="#888";o.bs.checked=true;o.je.checked=true;o.is.checked=true;o.hz.checked=true;o.ds.checked=true;o.dc.value="Click me for custom input";o.dc.style.color="#888";o.mb.checked=true;o.ps.checked=false;o.context.value="";o.dq.value="4";o.dx.checked=true;o.dr.checked=true;o.dm.checked=true;o.sideby.checked=true;o.he.checked=true;o.hn.checked=true;o.id.checked=true;o.jt.checked=true;o.bf.checked=true;o.df.checked=true;if(typeof localStorage!=="undefined"&&localStorage.hasOwnProperty("webtool")){delete localStorage.webtool;}},reload:function(){"use strict";var a,b,c,d,f,g,h;o.bc=$("beau-char");o.dc=$("diff-char");if(typeof localStorage!=="undefined"&&localStorage.hasOwnProperty("webtool")){o.option.innerHTML="/*prettydiff.com "+(localStorage.getItem("webtool").replace(/prettydiffper/g,"%").replace(/(showhide: (hide|show))|(display: (horizontal|vertical))|(diffsave: (true|false))/g,"").replace(/prettydiffcsep/g,", ").replace(/(\,\s+\,\s+)+/g,", ")+" */").replace(/((\,? )+\*\/)$/," */");a=localStorage.getItem("webtool").replace(/prettydiffper/g,"%").split("prettydiffcsep");c=a.length;for(b=0;b<c;b+=1){d=a[b].split(": ");if(d[1]){f=d[1].charAt(0);g=d[1].length-1;h=d[1].charAt(d[1].length-2);if((f==="\""||f==="'")&&f===d[1].charAt(g)&&h!=="\\"){d[1]=d[1].substring(1,g);}if(d[0]==="api.mode"){if(d[1]==="minify"){o.mm.checked=true;o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");o.bt.style.display="none";o.nt.style.display="none";o.md.style.display="block";o.bops.style.display="none";o.dops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}else if(d[1]==="diff"){o.dd.checked=true;o.pt.disabled=false;o.bx.setAttribute("name","paste_code");o.mx.removeAttribute("name");o.bd.style.display="none";o.md.style.display="none";o.bt.style.display="block";o.nt.style.display="block";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.pt.checked||o.cv.checked){o.db.style.display="none";}else{o.db.style.display="block";}if(o.au.checked){o.ind.style.display="block";o.htd.style.display="block";}else{o.ind.style.display="none";o.htd.style.display="none";}}else{o.bb.checked=true;o.bt.style.display="none";o.nt.style.display="none";o.bd.style.display="block";o.dops.style.display="none";o.mops.style.display="none";if(o.au.checked){o.ins.style.display="block";o.ht.style.display="block";o.bops.style.display="block";}else{o.ins.style.display="none";o.ht.style.display="none";o.bops.style.display="none";}}}else if(d[0]==="api.lang"){if(d[1]==="csv"||d[1]==="text"){o.db.style.display="none";o.bops.style.display="none";o.mops.style.display="none";if(o.dd.checked){o.dops.style.display="block";}if(d[1]==="csv"){o.cv.checked=true;}else{o.pt.checked=true;}}else{o.au.checked=true;}}else if(d[0]==="api.csvchar"){o.ch.value=d[1];}else if(d[0]==="api.insize"){o.bq.value=d[1];o.dq.value=d[1];}else if(d[0]==="api.inchar"){if(d[1]===" "){o.bs.checked=true;o.ds.checked=true;o.bc.value="Click me for custom input";o.dc.value="Click me for custom input";o.bc.style.background="#eee";o.dc.style.background="#eee";o.bc.style.color="#888";o.dc.style.color="#888";}else if(d[1]==="\\t"){o.ba.checked=true;o.da.checked=true;o.bc.value="Click me for custom input";o.dc.value="Click me for custom input";o.bc.style.background="#eee";o.dc.style.background="#eee";o.bc.style.color="#888";o.dc.style.color="#888";}else if(d[1]==="\\n"){o.bn.checked=true;o.dz.checked=true;o.bc.value="Click me for custom input";o.dc.value="Click me for custom input";o.bc.style.background="#eee";o.dc.style.background="#eee";o.bc.style.color="#888";o.dc.style.color="#888";}else{o.bw.checked=true;o.dw.checked=true;o.bc.value=d[1];o.dc.value=d[1];o.bc.style.background="#eef8ff";o.dc.style.background="#eef8ff";o.bc.style.color="#000";o.dc.style.color="#000";}}else if(d[0]==="api.comments"&&d[1]==="noindent"){o.iz.checked=true;}else if(d[0]==="api.indent"&&d[1]==="allman"){o.jd.checked=true;o.js.checked=true;}else if(d[0]==="api.style"&&d[1]==="noindent"){o.ie.checked=true;o.it.checked=true;}else if(d[0]==="api.html"&&d[1]==="html-yes"){o.hd.checked=true;o.hm.checked=true;o.hy.checked=true;}else if(d[0]==="api.context"&&!isNaN(d[1])){o.context.value=d[1];}else if(d[0]==="api.content"&&d[1]==="true"){o.du.checked=true;}else if(d[0]==="api.quote"&&d[1]==="true"){o.dy.checked=true;}else if(d[0]==="api.semicolon"&&d[1]==="true"){o.dn.checked=true;}else if(d[0]==="api.diffview"&&d[1]==="inline"){o.inline.checked=true;}else if(d[0]==="api.topcoms"&&d[1]==="true"){o.mc.checked=true;}else if(d[0]==="showhide"&&d[1]==="hide"){pd.hideOptions(o.sh);}else if(d[0]==="display"&&d[1]==="vertical"){o.dt.checked=true;o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}else if(d[0]==="diffsave"&&d[1]==="true"){o.ps.checked=true;}else if(d[0]==="api.force_indent"&&d[1]==="true"){o.bg.checked=true;o.dg.checked=true;}}}if(o.cv.checked){o.csvp.style.display="block";}if(o.cv.checked||o.pt.checked){o.db.style.display="none";}if(o.bw.checked){o.bc.style.backgroundColor="#eef8ff";o.bc.style.color="#000";}if(o.dw.checked){o.dc.style.backgroundColor="#eef8ff";o.dc.style.color="#000";}}else{o.bb=$("modebeautify");o.dd=$("modediff");o.mm=$("modeminify");o.au=$("ctype-auto");if(o.cv.checked){o.csvp.style.display="block";}if(o.mm.checked){o.mx.setAttribute("name","paste_code");o.bx.removeAttribute("name");o.bd.style.display="none";o.md.style.display="block";o.bt.style.display="none";o.nt.style.display="none";o.bops.style.display="none";if(o.au.checked){o.mops.style.display="block";}else{o.mops.style.display="none";}}else if(o.dd.checked){o.pt.disabled=false;o.bd.style.display="none";o.md.style.display="none";o.bt.style.display="block";o.nt.style.display="block";o.dops.style.display="block";o.bops.style.display="none";o.mops.style.display="none";if(o.pt.checked||o.cv.checked){o.db.style.display="none";}else{o.db.style.display="block";}if(o.au.checked){o.ind.style.display="block";o.htd.style.display="block";}else{o.ind.style.display="none";o.htd.style.display="none";}}else if(o.bb.checked){o.dops.style.display="none";o.mops.style.display="none";o.bd.style.display="block";o.md.style.display="none";o.bt.style.display="none";o.nt.style.display="none";if(o.au.checked){o.ins.style.display="block";o.ht.style.display="block";o.bops.style.display="block";}else{o.ins.style.display="none";o.ht.style.display="none";o.bops.style.display="none";}}if(o.dt.checked){o.bt.className="difftall";o.nt.className="difftall";o.bd.className="tall";o.md.className="tall";}if(o.bw.checked){o.bc.style.background="#eef8ff";o.bc.style.color="#000";}if(o.dw.checked){o.dc.style.background="#eef8ff";o.dc.style.color="#000";}}if(typeof localStorage!=="undefined"){if(localStorage.hasOwnProperty("bi")){o.bi.value=localStorage.getItem("bi");}if(localStorage.hasOwnProperty("mi")){o.mi.value=localStorage.getItem("mi");}if(localStorage.hasOwnProperty("bo")){o.bo.value=localStorage.getItem("bo");}if(localStorage.hasOwnProperty("nx")){o.bo.value=localStorage.getItem("nx");}if(localStorage.hasOwnProperty("bl")){o.bo.value=localStorage.getItem("bl");}if(localStorage.hasOwnProperty("nl")){o.bo.value=localStorage.getItem("nl");}if(localStorage.hasOwnProperty("pageCount")){localStorage.setItem("pageCount",Number(localStorage.getItem("pageCount"))+1);}else{localStorage.setItem("pageCount",0);}}if(o.bc.value!==""&&o.bc.value!=="Click me for custom input"){o.bcv=o.bc.value;}if(o.dc.value!==""&&o.dc.value!=="Click me for custom input"){o.dcv=o.dc.value;}}};