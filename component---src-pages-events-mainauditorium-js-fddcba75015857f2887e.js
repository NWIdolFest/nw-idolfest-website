(self.webpackChunknw_idolfest_website=self.webpackChunknw_idolfest_website||[]).push([[768],{49683:function(e,t,n){"use strict";var a=n(81253),i=n(22122),o=n(67294),l=n(85505),r=n(34621),s=n(83604),d="table",c=o.forwardRef((function(e,t){var n=e.classes,r=e.className,c=e.component,u=void 0===c?d:c,m=e.padding,p=void 0===m?"default":m,h=e.size,g=void 0===h?"medium":h,f=e.stickyHeader,y=void 0!==f&&f,v=(0,a.Z)(e,["classes","className","component","padding","size","stickyHeader"]),w=o.useMemo((function(){return{padding:p,size:g,stickyHeader:y}}),[p,g,y]);return o.createElement(s.Z.Provider,{value:w},o.createElement(u,(0,i.Z)({role:u===d?null:"table",ref:t,className:(0,l.Z)(n.root,r,y&&n.stickyHeader)},v)))}));t.Z=(0,r.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(c)},83604:function(e,t,n){"use strict";var a=n(67294).createContext();t.Z=a},78847:function(e,t,n){"use strict";var a=n(67294).createContext();t.Z=a},86300:function(e,t,n){"use strict";var a=n(22122),i=n(81253),o=n(67294),l=n(85505),r=n(34621),s=n(78847),d={variant:"body"},c="tbody",u=o.forwardRef((function(e,t){var n=e.classes,r=e.className,u=e.component,m=void 0===u?c:u,p=(0,i.Z)(e,["classes","className","component"]);return o.createElement(s.Z.Provider,{value:d},o.createElement(m,(0,a.Z)({className:(0,l.Z)(n.root,r),ref:t,role:m===c?null:"rowgroup"},p)))}));t.Z=(0,r.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},49400:function(e,t,n){"use strict";var a=n(81253),i=n(22122),o=n(67294),l=n(85505),r=n(34621),s=n(81664),d=n(37595),c=n(83604),u=n(78847),m=o.forwardRef((function(e,t){var n,r,d=e.align,m=void 0===d?"inherit":d,p=e.classes,h=e.className,g=e.component,f=e.padding,y=e.scope,v=e.size,w=e.sortDirection,T=e.variant,b=(0,a.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),Z=o.useContext(c.Z),E=o.useContext(u.Z),P=E&&"head"===E.variant;g?(r=g,n=P?"columnheader":"cell"):r=P?"th":"td";var S=y;!S&&P&&(S="col");var M=f||(Z&&Z.padding?Z.padding:"default"),k=v||(Z&&Z.size?Z.size:"medium"),x=T||E&&E.variant,N=null;return w&&(N="asc"===w?"ascending":"descending"),o.createElement(r,(0,i.Z)({ref:t,className:(0,l.Z)(p.root,p[x],h,"inherit"!==m&&p["align".concat((0,s.Z)(m))],"default"!==M&&p["padding".concat((0,s.Z)(M))],"medium"!==k&&p["size".concat((0,s.Z)(k))],"head"===x&&Z&&Z.stickyHeader&&p.stickyHeader),"aria-sort":N,role:n,scope:S},b))}));t.Z=(0,r.Z)((function(e){return{root:(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,d.$n)((0,d.U1)(e.palette.divider,1),.88):(0,d._j)((0,d.U1)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},78475:function(e,t,n){"use strict";var a=n(22122),i=n(81253),o=n(67294),l=n(85505),r=n(34621),s=o.forwardRef((function(e,t){var n=e.classes,r=e.className,s=e.component,d=void 0===s?"div":s,c=(0,i.Z)(e,["classes","className","component"]);return o.createElement(d,(0,a.Z)({ref:t,className:(0,l.Z)(n.root,r)},c))}));t.Z=(0,r.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},4093:function(e,t,n){"use strict";var a=n(22122),i=n(81253),o=n(67294),l=n(85505),r=n(34621),s=n(78847),d={variant:"head"},c="thead",u=o.forwardRef((function(e,t){var n=e.classes,r=e.className,u=e.component,m=void 0===u?c:u,p=(0,i.Z)(e,["classes","className","component"]);return o.createElement(s.Z.Provider,{value:d},o.createElement(m,(0,a.Z)({className:(0,l.Z)(n.root,r),ref:t,role:m===c?null:"rowgroup"},p)))}));t.Z=(0,r.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},99395:function(e,t,n){"use strict";var a=n(22122),i=n(81253),o=n(67294),l=n(85505),r=n(34621),s=n(78847),d=n(37595),c=o.forwardRef((function(e,t){var n=e.classes,r=e.className,d=e.component,c=void 0===d?"tr":d,u=e.hover,m=void 0!==u&&u,p=e.selected,h=void 0!==p&&p,g=(0,i.Z)(e,["classes","className","component","hover","selected"]),f=o.useContext(s.Z);return o.createElement(c,(0,a.Z)({ref:t,className:(0,l.Z)(n.root,r,f&&{head:n.head,footer:n.footer}[f.variant],m&&n.hover,h&&n.selected),role:"tr"===c?null:"row"},g))}));t.Z=(0,r.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,d.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(c)},66900:function(e,t,n){"use strict";var a=n(67294),i=n(12112),o=n(8266),l=(0,i.Z)(o.Z)({textAlign:"center",paddingBottom:"1em"});t.Z=function(e){var t=e.children;return a.createElement(l,null,t)}},20748:function(e,t,n){"use strict";var a=n(67294),i=n(87627),o=n(12112),l=n(78475),r=n(49683),s=n(4093),d=n(99395),c=n(49400),u=n(86300),m=n(77606),p=(0,o.Z)(l.Z)({margin:"0 auto",maxWidth:"100%",paddingBottom:"1em"}),h=(0,i.Z)((function(e){return{mobileSchedule:{display:"none"},panel:{textAlign:"left","& .name":{fontSize:"larger",paddingTop:"1em"},"& .time":{},"& .panelists":{paddingBottom:".5em"},"& .description":{paddingTop:".5em"}},"@media (max-width: 499px)":{mobileSchedule:{display:"block"},desktopSchedule:{display:"none"}}}}));t.Z=function(e){var t=e.panels,n=h();return a.createElement(a.Fragment,null,a.createElement(m.G,{icon:["fas","star"]})," = special guest panel",t.content.map((function(e){return a.createElement("div",{className:n.mobileSchedule},a.createElement("h3",null,e.day),e.panels.map((function(t){return a.createElement("div",{className:n.panel,key:t.title},a.createElement("div",{className:"name"},t.isGuestPanel?a.createElement(a.Fragment,null,a.createElement(m.G,{icon:["fas","star"]}),a.createElement("span",null,"  ")):null," ",t.title),a.createElement("div",{className:"time"},e.day,", ",t.startTime," - ",t.endTime),t.panelists?a.createElement("div",null,a.createElement("span",{className:"panelists"},"Panelists"),": ",t.panelists):null,a.createElement("div",{className:"description"},t.description))})))})),a.createElement("div",{className:n.desktopSchedule},t.content.map((function(e){return a.createElement(a.Fragment,null,a.createElement("h3",null,e.day),a.createElement(p,null,a.createElement(r.Z,{"aria-label":"simple table"},a.createElement(s.Z,{style:{textTransform:"uppercase"}},a.createElement(d.Z,null,a.createElement(c.Z,null,"Panel"),a.createElement(c.Z,null,"Time"),a.createElement(c.Z,null,"Description"))),a.createElement(u.Z,null,e.panels.map((function(e){return a.createElement(d.Z,{key:e.title},a.createElement(c.Z,{width:"25%",component:"th",scope:"panel"},e.isGuestPanel?a.createElement(a.Fragment,null,a.createElement(m.G,{icon:["fas","star"]}),a.createElement("span",null,"  ")):null,""+e.title),a.createElement(c.Z,{width:"20%"},e.startTime,"-",e.endTime),a.createElement(c.Z,null,e.description,e.panelists?a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null)," ",a.createElement("i",null,"Panelists: ",e.panelists)):null))}))))))}))))}},14035:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),i=n(92207),o=n(15583),l=n(86273),r=n(45954),s=n(66900),d=n(20748),c=JSON.parse('{"title":"Main Auditorium Schedule","room":"Main Auditorium","content":[{"day":"Saturday","panels":[{"title":"Opening Ceremonies","description":"Join NW IdolFest\'s staff and guests to kick off the convention!","panelists":"NWIF Staff & Guests","day":"Saturday","startTime":"10:00","endTime":"10:30 AM","isGuestPanel":true},{"title":"Lights, Camera, Idol Outfit!","description":"Have you ever wanted to design your idol outfit, or just need some inspiration to plan what to wear on stage? Then join us for a look at how to construct the perfect costume for you or you group, whether it be under the stage lights or any performance!","panelists":"Jenni Bon","day":"Saturday","startTime":"11:00","endTime":"12:00 PM","isGuestPanel":null},{"title":"Megan Shipman Q&A","description":"Meet Megan Shipman and learn about her work as a voice actor and ADR director for some of your favorite anime!","panelists":"Megan Shipman","day":"Saturday","startTime":"12:00","endTime":"1:00 PM","isGuestPanel":true},{"title":"Megan Shipman Autograph Signing","description":"This is your chance to get an autograph from NWIF guest, Megan Shipman! Note: This event will take place in the vendor hall.","panelists":"Megan Shipman","day":"Saturday","startTime":"1:00","endTime":"2:00 PM","isGuestPanel":true},{"title":"Idol Song Masters: Who Made the Idol Songs We Love?","description":"An introduction to some of the well-known composers in the idol industry and their most noteworthy songs. A great way to learn about new songs or idols you might like!","panelists":"Christelle, Steve","day":"Saturday","startTime":"1:00","endTime":"2:00 PM","isGuestPanel":null},{"title":"RinTaichou Q&A","description":"It\'s time to play 20 (or more) questions with Rintaichou!","panelists":"RinTaichou","day":"Saturday","startTime":"2:00","endTime":"3:00 PM","isGuestPanel":true},{"title":"LGBTQ+ Idol Seminar","description":"Have you ever wanted to delve deeper into the aspects of queer topics within idols?  Come to a civil discussion about queerness among idol fans with an open mind and an open heart.","panelists":"Snowdoes","day":"Saturday","startTime":"3:00","endTime":"4:00 PM","isGuestPanel":null},{"title":"Top 10 Summer Idol Songs","description":"Forget the cold and warm up with a selection of the best summer-themed idol songs of all time! Recommend your favorite songs through an online survey and also discover new ones!","panelists":"Christelle, Steve","day":"Saturday","startTime":"5:00","endTime":"6:30 PM","isGuestPanel":null},{"title":"Northern Lights Music Festival","description":"Join us for a magical night of music under the starry sky! FEATURING:\\n\\nNyaru (virtual) •\\nJenni Bon •\\nAphixSky •\\nAlex Pinku •\\nPhoebe •\\nMikanmaru24\\n","panelists":null,"day":"Saturday","startTime":"8:00","endTime":"12:00 AM","isGuestPanel":true}]},{"day":"Sunday","panels":[{"title":"Auditioning for Anime","description":"Learn from a pro about the ins and outs of auditioning for anime! This workshop-style panel will feature discussion, Q&A, and practice time.","panelists":"Megan Shipman","startTime":"10:00","endTime":"11:00 AM","isGuestPanel":true},{"title":"Love Live! Seminar","description":"Calling all passionate Love Live! fans, new and old. Join a group discussion on all aspects of love live to delve deeper with your fellow fans. Questions will be provided, but feel free to bring your own along with a passionate polite mind headspace.","panelists":"Snowdoes","startTime":"11:00","endTime":"12:00 PM","isGuestPanel":null},{"title":"How to Become a J-Pop idol!","description":"Ever wondered what it takes to become a real-life idol? Hear from former pro idol Amina du Jean about her time in Japan and industry experiences.","panelists":"Amina du Jean","startTime":"12:00","endTime":"1:00 PM","isGuestPanel":true},{"title":"The Wild and Wacky World of Underground Idol","description":"An introductory run through of the vast world of underground (chika) idol as well as the typical Japanese nightlife which is normally associated with this style of idol music. Covering topics from as broad as WACK to as niche as no name literal whos in a concise but informative panel including the typical dos and don\'ts of attending underground idol live.","panelists":"wotagomi","startTime":"1:00","endTime":"2:00 PM","isGuestPanel":null},{"title":"Phoebe Concert","description":"Special guest Phoebe will be taking the stage to share her music. You won\'t want to miss this!","panelists":"Phoebe","startTime":"2:00","endTime":"3:00 PM","isGuestPanel":true},{"title":"Phoebe Meet & Greet","description":"Meet & greet with NWIF guest, Phoebe! Note: This event will take place in the vendor hall.","panelists":"Phoebe","startTime":"3:00","endTime":"4:00 PM","isGuestPanel":true},{"title":"The Wonderful World of Idol Anime","description":"Do you want to learn about idol anime or find a new one to get into?  Join us on a discussion of the many idol shows out there.","panelists":"Bumpmaster","startTime":"3:00","endTime":"4:00 PM","isGuestPanel":null},{"title":"RinTaichou\'s Panel: They Couldn\'t Come Up With A Good Name In Time","description":"To quote Rin\'s Twitter bio: \\"🍁 Love Live Fan, R3BIRTH Namer, Gender Haver, Twitch Partner, 110K YouTube!\\" They may talk about some, none, or all of that in this hour. You\'ll just have to find out!","panelists":"RinTaichou","startTime":"4:00","endTime":"5:00 PM","isGuestPanel":true},{"title":"Closing Ceremonies","description":"OH NO! It\'s over... 😢 Let\'s say goodbye together and start getting excited for next year.","panelists":"NWIF Staff & Guests","startTime":"5:00 PM","endTime":"5:30 PM"}]}]}'),u=function(){return a.createElement(i.Z,null,a.createElement(o.Z,{title:"Main Auditorium Schedule"}),a.createElement(r.Z,{title:"Main Auditorium Schedule"}),a.createElement(l.Z,null,a.createElement(s.Z,null,a.createElement(d.Z,{panels:c}))))}}}]);
//# sourceMappingURL=component---src-pages-events-mainauditorium-js-fddcba75015857f2887e.js.map