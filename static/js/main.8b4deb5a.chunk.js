(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports=t(337)},142:function(e,a,t){},144:function(e,a,t){},337:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),i=t.n(o),l=(t(142),t(14)),c=t(15),s=t(17),m=t(16),d=t(18),u=(t(144),t(30)),p=t.n(u),h=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:1,width:"90%"}},r.a.createElement("div",{className:"arrow-"+this.props.direction},r.a.createElement(p.a,{href:this.props.link,offset:function(){return e.props.offset}},r.a.createElement("img",{src:"/projetoPandora/img/arrow.png",id:this.props.direction+"f"}),r.a.createElement("img",{src:"/projetoPandora/img/arrow.png",id:this.props.direction+"s"}))))}}]),a}(n.Component),g=t(21),f=t(114),E=t.n(f),b=t(115),v=t.n(b),y=t(116),j=t.n(y),O=t(117),k=t.n(O),C=Object(g.createMuiTheme)({palette:{primary:{main:"#eee"}}}),x=Object(g.withStyles)({root:{border:"none",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}},expanded:{margin:"auto"}})(E.a),w=Object(g.withStyles)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{}},expanded:{}})(function(e){return r.a.createElement(v.a,e)});w.muiName="ExpansionPanelSummary";var N=Object(g.withStyles)(function(e){return{root:{padding:2*e.spacing.unit}}})(j.a),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={expanded:""},t.handleChange=function(e){return function(a,n){t.setState({expanded:!!n&&e})}},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.expanded;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/logo-p.png"}),r.a.createElement("img",{src:"/projetoPandora/img/logo-g.png",alt:"Logomarca"}))),r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement(g.MuiThemeProvider,{theme:C},r.a.createElement(x,{style:{backgroundColor:"rgba(0,0,0,0)"},expanded:"panel1"===e,onChange:this.handleChange("panel1")},r.a.createElement(w,{expandIcon:r.a.createElement(k.a,{color:"primary"})},r.a.createElement("h1",null,"Conosco seu sonho ganha for\xe7a")),r.a.createElement(N,null,r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um neg\xf3cio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar l\xe1..."))))),r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/Watching-the-Stars-sm.png"}),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:{width:"100%",zIndex:0}})),r.a.createElement("div",{style:{"margin-top":"-100px"}},r.a.createElement(h,{direction:"bot",link:"#servicos",offset:"100"})))}}]),a}(n.Component),I=t(118),T=t.n(I),B=(n.Component,t(119)),M=t(71),P=t(5),z=t.n(P),D=t(120),W=t.n(D),q=t(121),F=t.n(q),R=t(37),V=t.n(R),A=t(43),H=t.n(A),$=t(130),J=t.n($),L=t(134),U=t.n(L),G=t(132),Q=t.n(G),K=t(133),X=t.n(K),Y=t(131),Z=t.n(Y),_=t(69),ee=t.n(_),ae=t(23),te=t.n(ae),ne=t(122),re=t.n(ne),oe=t(124),ie=t.n(oe),le=t(125),ce=t.n(le),se=t(128),me=t.n(se),de=t(126),ue=t.n(de),pe=t(127),he=t.n(pe),ge=t(42),fe=t.n(ge),Ee=t(129),be=t.n(Ee),ve=t(68),ye=t.n(ve),je=t(123),Oe=t.n(je),ke={success:re.a,warning:Oe.a,error:ie.a,info:ce.a};function Ce(e){return""!=e&&null!=e}function xe(e){var a=e.inputRef,t=Object(M.a)(e,["inputRef"]);return r.a.createElement(W.a,Object.assign({},t,{ref:function(e){a(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}var we=Object(g.withStyles)(function(e){return{success:{backgroundColor:ue.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:he.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var a=e.classes,t=e.className,n=e.message,o=e.onClose,i=e.variant,l=Object(M.a)(e,["classes","className","message","onClose","variant"]),c=ke[i];return r.a.createElement(ye.a,Object.assign({className:z()(a[i],t),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(c,{className:z()(a.icon,a.iconVariant)}),n),action:[r.a.createElement(fe.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:o},r.a.createElement(me.a,{className:a.icon}))]},l))});function Ne(e){return r.a.createElement(ee.a,Object.assign({direction:"up"},e))}var Se=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,erro:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 ",alerta:"Erro com o formul\xe1rio",variant:"error"},t.handleChange=function(e){return function(a){t.setState(Object(B.a)({},e,a.target.value))}},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.validateForm=function(){var e,a=document.getElementById("nome").value,n=document.getElementById("email").value,r=document.getElementById("tel").value,o=document.getElementById("empresa").value,i=document.getElementById("mensagem").value;if(Ce(a))if(/@/g.test(e=n)&&Ce(e))if("(\u2000\u2000) \u2000\u2000\u2000\u2000-\u2000\u2000\u2000\u2000\u2000"!=r)if(Ce(o))if(Ce(i)){var l={nome:a,email:n,tel:r,emp:o,mensagem:i};t.sendEmail(l),t.resetForm()}else t.setState({erro:!0,alerta:"Mensagem vazia!",variant:"error"});else t.setState({erro:!0,alerta:"Qual a empresa?",variant:"error"});else t.setState({erro:!0,alerta:"Informe um telefone!",variant:"error"});else t.setState({erro:!0,alerta:"Email invalido!",variant:"error"});else t.setState({erro:!0,alerta:"Nome n\xe3o preenchido!",variant:"error"})},t.handleCloseS=function(e,a){"clickaway"!==a&&t.setState({erro:!1})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"resetForm",value:function(){this.setState({open:!1,erro:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 ",alerta:"Erro com o formul\xe1rio",variant:"error"})}},{key:"sendEmail",value:function(e){var a=this;F.a.post("https://mailer-pandora.herokuapp.com/send",e).then(function(e){"success"===e.data.msg?a.setState({variant:"success",erro:!0,alerta:"Recebemos sua mensagem <3"}):"fail"===e.data.msg&&a.setState({erro:!0,alerta:"Oops alguma coisa deu errado :(",variant:"warning"})})}},{key:"render",value:function(){return r.a.createElement("div",{id:"contato",style:{marginBottom:300,marginTop:600}},r.a.createElement("div",{style:{"margin-bottom":"50px"}},r.a.createElement(h,{direction:"top",link:"#sobre",offset:"100"})),r.a.createElement(te.a,{component:"h2",variant:"display3",color:"inherit"},"Entre em contato"),r.a.createElement(H.a,{size:"large",style:{marginBottom:20,marginLeft:"auto",marginRight:"auto",marginTop:20},variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Clique para nos contatar"),r.a.createElement(be.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.erro,autoHideDuration:18e3,onClose:this.handleCloseS},r.a.createElement(we,{onClose:this.handleCloseS,variant:this.state.variant,message:this.state.alerta})),r.a.createElement(J.a,{open:this.state.open,TransitionComponent:Ne,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Z.a,{id:"alert-dialog-slide-title"},"Por favor preencha os campos"),r.a.createElement(Q.a,null,r.a.createElement(X.a,{id:"alert-dialog-slide-description"},r.a.createElement("form",{id:"contatoForm",noValidate:!0,autoComplete:"off",style:{display:"flex",flexDirection:"column"}},r.a.createElement(V.a,{id:"nome",name:"nome",label:"Nome",value:this.state.nome,onChange:this.handleChange("nome"),margin:"normal"}),r.a.createElement(V.a,{id:"email",name:"email",label:"Email",value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement(V.a,{id:"tel",name:"tel",label:"Telefone",value:this.state.tel,onChange:this.handleChange("tel"),margin:"normal",InputProps:{inputComponent:xe}}),r.a.createElement(V.a,{name:"empresa",id:"empresa",label:"Empresa",value:this.state.empresa,onChange:this.handleChange("empresa"),margin:"normal"}),r.a.createElement(V.a,{multiline:!0,rowsMax:"5",id:"mensagem",name:"mensagem",label:"Mensagem",value:this.state.mensagem,onChange:this.handleChange("mensagem"),margin:"normal"})))),r.a.createElement(U.a,null,r.a.createElement(H.a,{onClick:this.handleClose,color:"secondary"},"Cancelar"),r.a.createElement(H.a,{color:"primary",onClick:this.validateForm},"Enviar"))))}}]),a}(n.Component),Ie=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"sobre",style:this.props.styles.Divs},r.a.createElement("div",{style:{"margin-bottom":"50px"}},r.a.createElement(h,{direction:"top",link:"#servicos",offset:"100"})),r.a.createElement("div",{className:"titulo"},r.a.createElement(te.a,{style:this.props.styles.Typography,component:"h2",variant:"display3",color:"inherit"},"Um pouco sobre nos...")),r.a.createElement("div",{className:"textoEsquerda"},r.a.createElement(te.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Um texto enorme contando sobre a historia da ag\xeancia,  como ela surgiu, de onde veio a iniciativa, e sobre o processo de encuba\xe7\xe3o, posteriormente essa se\xe7\xe3o pode ser espandida para abranger melhor a tragetoria da empresa."),r.a.createElement("p",null,"Vale a pena ja falar sobre os objetivos nessa se\xe7\xe3o tamb\xe9m, qual nossa meta para com o cliente, nosa vis\xe3o (onde queremos chegar), e nossos valores."))),r.a.createElement("div",{style:{"margin-top":"50px"}},r.a.createElement(h,{direction:"bot",link:"#contato",offset:"200"})))}}]),a}(n.Component),Te=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"servicos",style:this.props.styles.Divs},r.a.createElement("div",{style:{"margin-bottom":"50px"}},r.a.createElement(h,{direction:"top",link:"#inicio",offset:"0"})),r.a.createElement("div",{className:"titulo"},r.a.createElement(te.a,{style:this.props.styles.Typography,component:"h2",variant:"display3",color:"inherit"},"Fazemos por voc\xea")),r.a.createElement("div",{className:"textoDireita"},r.a.createElement(te.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Aqui na Pandora somos apaixonados por desafios, e pelo que fazemos. Gostamos de ver os resultados transformando a vida de nossos clientes."))),r.a.createElement("div",{style:{"margin-top":"50px"}},r.a.createElement(h,{direction:"bot",link:"#sobre",offset:"100"})))}}]),a}(n.Component),Be=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"})}}]),a}(n.Component),Me={Typography:{marginTop:20,marginBottom:20},Divs:{marginTop:600,display:"flex",flexDirection:"column"}},Pe=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(Te,{styles:Me}),r.a.createElement(Ie,{styles:Me}),r.a.createElement(Se,null),r.a.createElement(Be,null))}}]),a}(n.Component),ze={Img:{width:"100%",zIndex:0}},De=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement("h1",null,"Conosco seu sonho ganha for\xe7a"),r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um neg\xf3cio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar l\xe1...")),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:ze.Img})),r.a.createElement("div",{style:{"margin-top":"-150px"}},r.a.createElement(h,{direction:"bot",link:"#servicos",offset:"100"})))}}]),a}(n.Component),We=t(70),qe=t.n(We),Fe=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"corpo"},r.a.createElement("div",{id:"inicio"},r.a.createElement(qe.a,{maxWidth:859},r.a.createElement(S,null)),r.a.createElement(qe.a,{minWidth:860},r.a.createElement(De,null))),r.a.createElement(Pe,null))}}]),a}(n.Component),Re=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("img",{src:"/projetoPandora/img/logo-branco-minor.png"}),r.a.createElement("div",{className:"navs"},r.a.createElement(p.a,{href:"#inicio",className:"mlink"},"Inicio"),r.a.createElement(p.a,{href:"#servicos",offset:function(){return 100},className:"mlink"},"Por Voc\xea"),r.a.createElement(p.a,{href:"#sobre",offset:function(){return 100},className:"mlink"},"Sobre N\xf3s"),r.a.createElement(p.a,{href:"#contato",offset:function(){return 200},className:"mlink"},"Contato")))}}]),a}(n.Component),Ve=t(135),Ae=t.n(Ve),He=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"toggleMenu",value:function(){var e=document.getElementById("check");0==e.checked?e.checked=!0:e.checked=!1}},{key:"render",value:function(){var e=Object(g.createMuiTheme)({palette:{primary:{main:"#6a1b9a",dark:"#4a126b",contrastText:"#fff"},secondary:{main:"#f50057",dark:"#ab003c",contrastText:"#fff"}}});return r.a.createElement(g.MuiThemeProvider,{theme:e},r.a.createElement("div",{className:"app"},r.a.createElement("input",{type:"checkbox",id:"check"}),r.a.createElement("label",{id:"botaoM",for:"check"},r.a.createElement(fe.a,{className:"iconeMenu",color:"primary","aria-label":"Menu",onClick:this.toggleMenu.bind(this)},r.a.createElement(Ae.a,null))),r.a.createElement(Re,null),r.a.createElement(Fe,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(335);var $e=t(136),Je=t.n($e);Object(g.createMuiTheme)({palette:{primary:Je.a,secondary:{main:"#f44336"}}});i.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,2,1]]]);
//# sourceMappingURL=main.8b4deb5a.chunk.js.map