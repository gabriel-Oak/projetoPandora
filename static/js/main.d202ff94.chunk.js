(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){e.exports=t(297)},125:function(e,a,t){},127:function(e,a,t){},297:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(125),t(15)),i=t(16),m=t(18),u=t(17),s=t(19),d=(t(127),t(22)),h=t(104),b=t.n(h),E=t(105),p=t.n(E),g=t(106),f=t.n(g),v=t(107),j=t.n(v),y=Object(d.createMuiTheme)({palette:{primary:{main:"#eee"}}}),O=Object(d.withStyles)({root:{border:"none",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}},expanded:{margin:"auto"}})(b.a),C=Object(d.withStyles)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{}},expanded:{}})(function(e){return r.a.createElement(p.a,e)});C.muiName="ExpansionPanelSummary";var k=Object(d.withStyles)(function(e){return{root:{padding:2*e.spacing.unit}}})(f.a),x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={expanded:""},t.handleChange=function(e){return function(a,n){t.setState({expanded:!!n&&e})}},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.expanded;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/logo-p.png"}),r.a.createElement("img",{src:"/projetoPandora/img/logo-g.png",alt:"Logomarca"}))),r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement(d.MuiThemeProvider,{theme:y},r.a.createElement(O,{style:{backgroundColor:"rgba(0,0,0,0)"},expanded:"panel1"===e,onChange:this.handleChange("panel1")},r.a.createElement(C,{expandIcon:r.a.createElement(j.a,{color:"primary"})},r.a.createElement("h1",null,"Aqui seu sonho ganha for\xe7a")),r.a.createElement(k,null,r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um negocio tradicional, que vai ser seu foguete para o sucesso, acreditamos nele e queremos te ajudar a chegar la..."))))),r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/Watching-the-Stars-sm.png"}),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:{width:"100%",zIndex:0}})))}}]),a}(n.Component),w=t(108),N=t.n(w),S=(n.Component,t(109)),M=t(119),T=t(110),I=t.n(T),P=t(33),q=t.n(P),B=t(38),W=t.n(B),A=t(112),z=t.n(A),L=t(116),R=t.n(L),$=t(114),H=t.n($),J=t(115),U=t.n(J),V=t(113),D=t.n(V),F=t(111),G=t.n(F),K=t(24),Q=t.n(K);function X(e){var a=e.inputRef,t=Object(M.a)(e,["inputRef"]);return r.a.createElement(I.a,Object.assign({},t,{ref:function(e){a(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}function Y(e){return r.a.createElement(G.a,Object.assign({direction:"up"},e))}var Z=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 "},t.handleChange=function(e){return function(a){t.setState(Object(S.a)({},e,a.target.value))}},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contato"},r.a.createElement(Q.a,{component:"h2",variant:"display3",color:"inherit"},"Entre em contato conosco"),r.a.createElement(W.a,{size:"large",style:{marginBottom:20,marginLeft:"auto",marginRight:"auto",marginTop:20},variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Clique para nos contatar"),r.a.createElement(z.a,{open:this.state.open,TransitionComponent:Y,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(D.a,{id:"alert-dialog-slide-title"},"Por favor preencha os campos"),r.a.createElement(H.a,null,r.a.createElement(U.a,{id:"alert-dialog-slide-description"},r.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{display:"flex",flexDirection:"column"}},r.a.createElement(q.a,{id:"standard-name",label:"Nome",value:this.state.nome,onChange:this.handleChange("nome"),margin:"normal"}),r.a.createElement(q.a,{id:"standard-email",label:"Email",value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement(q.a,{id:"tel",label:"Telefone",value:this.state.tel,onChange:this.handleChange("tel"),margin:"normal",InputProps:{inputComponent:X}}),r.a.createElement(q.a,{id:"empresa",label:"Empresa",value:this.state.empresa,onChange:this.handleChange("empresa"),margin:"normal"}),r.a.createElement(q.a,{multiline:!0,rowsMax:"5",id:"mensagem",label:"Mensagem",value:this.state.mensagem,onChange:this.handleChange("mensagem"),margin:"normal"})))),r.a.createElement(R.a,null,r.a.createElement(W.a,{onClick:this.handleClose,color:"secondary"},"Cancelar"),r.a.createElement(W.a,{color:"primary"},"Enviar"))))}}]),a}(n.Component),_={Typography:{marginTop:20,marginBottom:20}},ee=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"sobre"},r.a.createElement("div",{className:"titulo"},r.a.createElement(Q.a,{style:_.Typography,component:"h2",variant:"display3",color:"inherit"},"Um pouco sobre nos...")),r.a.createElement("div",{className:"textoEsquerda"},r.a.createElement(Q.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Um texto enorme contando sobre a historia da ag\xeancia,  como ela surgiu, de onde veio a iniciativa, e sobre o processo de encuba\xe7\xe3o, posteriormente essa se\xe7\xe3o pode ser espandida para abranger melhor a tragetoria da empresa."),r.a.createElement("p",null,"Vale a pena ja falar sobre os objetivos nessa se\xe7\xe3o tamb\xe9m, qual nossa meta para com o cliente, nosa vis\xe3o (onde queremos chegar), e nossos valores."))))}}]),a}(n.Component),ae=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(ee,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Z,null))}}]),a}(n.Component),te={Img:{width:"100%",zIndex:0}},ne=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement("h1",null,"Aqui seu sonho ganha for\xe7a"),r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um negocio tradicional, que vai ser seu foguete para o sucesso, acreditamos nele e queremos te ajudar a chegar la...")),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:te.Img})))}}]),a}(n.Component),re=t(65),le=t.n(re),ce=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"corpo"},r.a.createElement("div",{id:"inicio"},r.a.createElement(le.a,{maxWidth:859},r.a.createElement(x,null)),r.a.createElement(le.a,{minWidth:860},r.a.createElement(ne,null))),r.a.createElement(ae,null))}}]),a}(n.Component),oe=t(48),ie=t.n(oe),me=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("img",{src:"/projetoPandora/img/logo-branco-minor.png"}),r.a.createElement("div",{className:"navs"},r.a.createElement(ie.a,{href:"#inicio",className:"mlink"},"Inicio"),r.a.createElement(ie.a,{href:"#sobre",className:"mlink"},"Sobre Nos"),r.a.createElement("a",{href:"#",className:"mlink"},"Link 3"),r.a.createElement(ie.a,{href:"#contato",className:"mlink"},"Contato")))}}]),a}(n.Component),ue=t(117),se=t.n(ue),de=t(64),he=t.n(de),be=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"toggleMenu",value:function(){var e=document.getElementById("check");0==e.checked?e.checked=!0:e.checked=!1}},{key:"render",value:function(){var e=Object(d.createMuiTheme)({palette:{primary:{main:"#6a1b9a",dark:"#4a126b",contrastText:"#fff"},secondary:{main:"#f50057",dark:"#ab003c",contrastText:"#fff"}}});return r.a.createElement(d.MuiThemeProvider,{theme:e},r.a.createElement("div",{className:"app"},r.a.createElement("input",{type:"checkbox",id:"check"}),r.a.createElement("label",{id:"botaoM",for:"check"},r.a.createElement(he.a,{className:"iconeMenu",color:"primary","aria-label":"Menu",onClick:this.toggleMenu.bind(this)},r.a.createElement(se.a,null))),r.a.createElement(me,null),r.a.createElement(ce,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(295);var Ee=t(118),pe=t.n(Ee);Object(d.createMuiTheme)({palette:{primary:pe.a,secondary:{main:"#f44336"}}});c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.d202ff94.chunk.js.map