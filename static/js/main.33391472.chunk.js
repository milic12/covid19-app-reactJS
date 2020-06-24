(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3xFBz",card:"Cards_card__1dWa2",inficirani:"Cards_inficirani__3YYF1",izlijeceni:"Cards_izlijeceni__1ANAy",smrtnost:"Cards_smrtnost__1CDpO"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),i=a(6),u=a.n(i),s=a(10),l=a(73),d=a(74),m=a(84),p=a(83),f=a(225),v=a(230),h=a(226),b=a(227),E=a(13),y=a.n(E),j=a(32),g=a.n(j),x=a(33),C=a.n(x),_=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(f.a,{container:!0,spaing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.inficirani)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Inficirani"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),"   ",r.a.createElement(b.a,{variant:"body2",component:"p"},"Broj Aktivnih Slucajeva COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.izlijeceni)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Izlijeceni"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Broj Izlijecenih Slucajeva COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.smrtnost)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Smrtnost"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Broj Smrtnih Slucajeva COVID-19"))))):"Loading..."},O=a(31),S=a(45),w=a(34),k=a.n(w),D="https://covid19.mathdro.id/api",I=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r,c,o,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=a(80),A=a.n(z),V=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,i=e.country,l=Object(n.useState)({}),d=Object(O.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m[0]?r.a.createElement(S.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Inficirani",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Smrtnost",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(S.a,{data:{labels:["Inficirani","Izlijeceni","Smrtnost"],datasets:[{label:"Ljudi",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Trenutacno Stanje u  ".concat(i)}}}):null;return r.a.createElement("div",{className:A.a.container},i?v:f)},J=a(229),U=a(228),Y=a(81),F=a.n(Y),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(J.a,{className:F.a.formControl},r.a.createElement(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Globalo Stanje(Biraj Drzave Pojedinacno)"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},L=a(46),P=a.n(L),M=a(82),T=a.n(M),W=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:P.a.container},r.a.createElement("img",{className:P.a.image,src:T.a,alt:"COVID19"}),r.a.createElement(_,{data:t}),r.a.createElement(V,{data:t,country:a}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1uGta",image:"App_image__2sghJ"}},80:function(e,t,a){e.exports={container:"Chart_container__tcjsY"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3Vedp"}},82:function(e,t,a){e.exports=a.p+"static/media/coronaworld4.dc3deff7.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.33391472.chunk.js.map