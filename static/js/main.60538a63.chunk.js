(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,a,t){e.exports=t(324)},133:function(e,a,t){},135:function(e,a,t){},324:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),l=t.n(o),i=(t(133),t(14)),c=t(15),s=t(17),m=t(16),u=t(18),d=(t(135),t(22)),p=t(111),h=t.n(p),g=t(112),f=t.n(g),b=t(113),E=t.n(b),v=t(114),y=t.n(v),j=Object(d.createMuiTheme)({palette:{primary:{main:"#eee"}}}),O=Object(d.withStyles)({root:{border:"none",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}},expanded:{margin:"auto"}})(h.a),C=Object(d.withStyles)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{}},expanded:{}})(function(e){return r.a.createElement(f.a,e)});C.muiName="ExpansionPanelSummary";var k=Object(d.withStyles)(function(e){return{root:{padding:2*e.spacing.unit}}})(E.a),x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={expanded:""},t.handleChange=function(e){return function(a,n){t.setState({expanded:!!n&&e})}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.expanded;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/logo-p.png"}),r.a.createElement("img",{src:"/projetoPandora/img/logo-g.png",alt:"Logomarca"}))),r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement(d.MuiThemeProvider,{theme:j},r.a.createElement(O,{style:{backgroundColor:"rgba(0,0,0,0)"},expanded:"panel1"===e,onChange:this.handleChange("panel1")},r.a.createElement(C,{expandIcon:r.a.createElement(y.a,{color:"primary"})},r.a.createElement("h1",null,"Conosco seu sonho ganha for\xe7a")),r.a.createElement(k,null,r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um neg\xf3cio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar l\xe1..."))))),r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/Watching-the-Stars-sm.png"}),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:{width:"100%",zIndex:0}})))}}]),a}(n.Component),w=t(115),N=t.n(w),S=(n.Component,t(116)),I=t(127),T=t(117),B=t.n(T),M=t(118),P=t.n(M),W=t(34),q=t.n(W),F=t(39),z=t.n(F),D=t(120),A=t.n(D),R=t(124),V=t.n(R),$=t(122),H=t.n($),J=t(123),L=t.n(J),U=t(121),G=t.n(U),K=t(119),Q=t.n(K),X=t(24),Y=t.n(X);function Z(e){var a=e.inputRef,t=Object(I.a)(e,["inputRef"]);return r.a.createElement(B.a,Object.assign({},t,{ref:function(e){a(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}function _(e){return r.a.createElement(Q.a,Object.assign({direction:"up"},e))}var ee=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 "},t.handleChange=function(e){return function(a){t.setState(Object(S.a)({},e,a.target.value))}},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.validateForm=function(){!function(e){P.a.post("https://mailer-pandora.herokuapp.com/send",e).then(function(e){"success"===e.data.msg?alert("Sua mensagem foi enviada"):"fail"===e.data.msg&&alert("Oops alguma coisa deu errado ao enviar!")})}({nome:document.getElementById("nome").value,email:document.getElementById("email").value,tel:document.getElementById("tel").value,emp:document.getElementById("empresa").value,mensagem:document.getElementById("mensagem").value}),t.resetForm()},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"resetForm",value:function(){this.setState({open:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 "})}},{key:"render",value:function(){return r.a.createElement("div",{id:"contato",style:{marginBottom:300,marginTop:600}},r.a.createElement(Y.a,{component:"h2",variant:"display3",color:"inherit"},"Entre em contato conosco"),r.a.createElement(z.a,{size:"large",style:{marginBottom:20,marginLeft:"auto",marginRight:"auto",marginTop:20},variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Clique para nos contatar"),r.a.createElement(A.a,{open:this.state.open,TransitionComponent:_,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(G.a,{id:"alert-dialog-slide-title"},"Por favor preencha os campos"),r.a.createElement(H.a,null,r.a.createElement(L.a,{id:"alert-dialog-slide-description"},r.a.createElement("form",{id:"contatoForm",noValidate:!0,autoComplete:"off",style:{display:"flex",flexDirection:"column"}},r.a.createElement(q.a,{id:"nome",name:"nome",label:"Nome",value:this.state.nome,onChange:this.handleChange("nome"),margin:"normal"}),r.a.createElement(q.a,{id:"email",name:"email",label:"Email",value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement(q.a,{id:"tel",name:"tel",label:"Telefone",value:this.state.tel,onChange:this.handleChange("tel"),margin:"normal",InputProps:{inputComponent:Z}}),r.a.createElement(q.a,{name:"empresa",id:"empresa",label:"Empresa",value:this.state.empresa,onChange:this.handleChange("empresa"),margin:"normal"}),r.a.createElement(q.a,{multiline:!0,rowsMax:"5",id:"mensagem",name:"mensagem",label:"Mensagem",value:this.state.mensagem,onChange:this.handleChange("mensagem"),margin:"normal"})))),r.a.createElement(V.a,null,r.a.createElement(z.a,{onClick:this.handleClose,color:"secondary"},"Cancelar"),r.a.createElement(z.a,{color:"primary",onClick:this.validateForm},"Enviar"))))}}]),a}(n.Component),ae=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"sobre",style:this.props.styles.Divs},r.a.createElement("div",{className:"titulo"},r.a.createElement(Y.a,{style:this.props.styles.Typography,component:"h2",variant:"display3",color:"inherit"},"Um pouco sobre nos...")),r.a.createElement("div",{className:"textoEsquerda"},r.a.createElement(Y.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Um texto enorme contando sobre a historia da ag\xeancia,  como ela surgiu, de onde veio a iniciativa, e sobre o processo de encuba\xe7\xe3o, posteriormente essa se\xe7\xe3o pode ser espandida para abranger melhor a tragetoria da empresa."),r.a.createElement("p",null,"Vale a pena ja falar sobre os objetivos nessa se\xe7\xe3o tamb\xe9m, qual nossa meta para com o cliente, nosa vis\xe3o (onde queremos chegar), e nossos valores."))))}}]),a}(n.Component),te=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"servicos",style:this.props.styles.Divs},r.a.createElement("div",{className:"titulo"},r.a.createElement(Y.a,{style:this.props.styles.Typography,component:"h2",variant:"display3",color:"inherit"},"Fazemos por voc\xea")),r.a.createElement("div",{className:"textoDireita"},r.a.createElement(Y.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Aqui na Pandora somos apaixonados por desafios, e pelo que fazemos. Gostamos de ver os resultados transformando a vida de nossos clientes."))))}}]),a}(n.Component),ne=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"})}}]),a}(n.Component),re={Typography:{marginTop:20,marginBottom:20},Divs:{marginTop:600}},oe=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(te,{styles:re}),r.a.createElement(ae,{styles:re}),r.a.createElement(ee,null),r.a.createElement(ne,null))}}]),a}(n.Component),le={Img:{width:"100%",zIndex:0}},ie=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement("h1",null,"Conosco seu sonho ganha for\xe7a"),r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um neg\xf3cio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar l\xe1...")),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:le.Img})))}}]),a}(n.Component),ce=t(67),se=t.n(ce),me=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"corpo"},r.a.createElement("div",{id:"inicio"},r.a.createElement(se.a,{maxWidth:859},r.a.createElement(x,null)),r.a.createElement(se.a,{minWidth:860},r.a.createElement(ie,null))),r.a.createElement(oe,null))}}]),a}(n.Component),ue=t(40),de=t.n(ue),pe=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("img",{src:"/projetoPandora/img/logo-branco-minor.png"}),r.a.createElement("div",{className:"navs"},r.a.createElement(de.a,{href:"#inicio",className:"mlink"},"Inicio"),r.a.createElement(de.a,{href:"#servicos",offset:function(){return 100},className:"mlink"},"Por Voc\xea"),r.a.createElement(de.a,{href:"#sobre",offset:function(){return 100},className:"mlink"},"Sobre N\xf3s"),r.a.createElement(de.a,{href:"#contato",offset:function(){return 200},className:"mlink"},"Contato")))}}]),a}(n.Component),he=t(125),ge=t.n(he),fe=t(66),be=t.n(fe),Ee=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleMenu",value:function(){var e=document.getElementById("check");0==e.checked?e.checked=!0:e.checked=!1}},{key:"render",value:function(){var e=Object(d.createMuiTheme)({palette:{primary:{main:"#6a1b9a",dark:"#4a126b",contrastText:"#fff"},secondary:{main:"#f50057",dark:"#ab003c",contrastText:"#fff"}}});return r.a.createElement(d.MuiThemeProvider,{theme:e},r.a.createElement("div",{className:"app"},r.a.createElement("input",{type:"checkbox",id:"check"}),r.a.createElement("label",{id:"botaoM",for:"check"},r.a.createElement(be.a,{className:"iconeMenu",color:"primary","aria-label":"Menu",onClick:this.toggleMenu.bind(this)},r.a.createElement(ge.a,null))),r.a.createElement(pe,null),r.a.createElement(me,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(322);var ve=t(126),ye=t.n(ve);Object(d.createMuiTheme)({palette:{primary:ye.a,secondary:{main:"#f44336"}}});l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[128,2,1]]]);
//# sourceMappingURL=main.60538a63.chunk.js.map