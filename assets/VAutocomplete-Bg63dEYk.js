import{u as Ie,b as pe,c as Me,d as Ae,e as ne,f as Pe,g as De,h as Ke}from"./VSelect-2v_UJ195.js";import{x as ce,s as L,g as C,W as j,aI as _e,aJ as ee,aK as Re,b as I,a4 as H,G as Q,v as Le,B as Oe,r as z,aL as Ee,A as Z,aM as Te,m as $,D as ue,a6 as Be,E as Ne,$ as oe,a as b,I as E,aE as Ue,aN as je,aO as ze,aP as $e,aQ as se,aR as ie,aS as He,V as re,aT as Qe,aU as We,aV as Ge,n as Je,aa as Xe,e as Ye}from"./index-CLCJ5dIf.js";import{c as Ze}from"./VAvatar-D0wffX4Q.js";const qe=(e,u,t)=>{if(e==null||u==null)return-1;if(!u.length)return 0;e=e.toString().toLocaleLowerCase(),u=u.toString().toLocaleLowerCase();const c=[];let o=e.indexOf(u);for(;~o;)c.push([o,o+u.length]),o=e.indexOf(u,o+u.length);return c.length?c:-1};function q(e,u){if(!(e==null||typeof e=="boolean"||e===-1))return typeof e=="number"?[[e,e+u.length]]:Array.isArray(e[0])?e:[e]}const el=ce({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function ll(e,u,t){var A;const c=[],o=(t==null?void 0:t.default)??qe,g=t!=null&&t.filterKeys?ee(t.filterKeys):!1,y=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return c;e:for(let F=0;F<e.length;F++){const[x,i=x]=ee(e[F]),P={},p={};let k=-1;if((u||y>0)&&!(t!=null&&t.noFilter)){if(typeof x=="object"){const v=g||Object.keys(i);for(const a of v){const T=Re(i,a),D=(A=t==null?void 0:t.customKeyFilter)==null?void 0:A[a];if(k=D?D(T,u,x):o(T,u,x),k!==-1&&k!==!1)D?P[a]=q(k,u):p[a]=q(k,u);else if((t==null?void 0:t.filterMode)==="every")continue e}}else k=o(x,u,x),k!==-1&&k!==!1&&(p.title=q(k,u));const K=Object.keys(p).length,_=Object.keys(P).length;if(!K&&!_||(t==null?void 0:t.filterMode)==="union"&&_!==y&&!K||(t==null?void 0:t.filterMode)==="intersection"&&(_!==y||!K))continue}c.push({index:F,matches:{...p,...P}})}return c}function tl(e,u,t,c){const o=L([]),g=L(new Map),y=C(()=>j(u));_e(()=>{const F=typeof t=="function"?t():j(t),x=typeof F!="string"&&typeof F!="number"?"":String(F),i=ll(y.value,x,{customKeyFilter:{...e.customKeyFilter,...j(c==null?void 0:c.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),P=j(u),p=[],k=new Map;i.forEach(K=>{let{index:_,matches:v}=K;const a=P[_];p.push(a),k.set(a.value,v)}),o.value=p,g.value=k});function A(F){return g.value.get(F.value)}return{filteredItems:o,filteredMatches:g,getMatches:A}}function al(e,u,t){return t==null||!t.length?u:t.map((c,o)=>{const g=o===0?0:t[o-1][1],y=[I("span",{class:H(`${e}__unmask`)},[u.slice(g,c[0])]),I("span",{class:H(`${e}__mask`)},[u.slice(c[0],c[1])])];return o===t.length-1&&y.push(I("span",{class:H(`${e}__unmask`)},[u.slice(c[1])])),I(Q,null,[y])})}const nl=ce({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...el({filterKeys:["title"]}),...Me(),...ze($e({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...je({transition:!1})},"VAutocomplete"),il=Le()({name:"VAutocomplete",props:nl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,u){let{slots:t}=u;const{t:c}=Oe(),o=z(),g=L(!1),y=L(!0),A=L(!1),F=z(),x=z(),i=L(-1),{items:P,transformIn:p,transformOut:k}=Ie(e),{textColorClasses:K,textColorStyles:_}=Ee(()=>{var l;return(l=o.value)==null?void 0:l.color}),v=Z(e,"search",""),a=Z(e,"modelValue",[],l=>p(l===null?[null]:ee(l)),l=>{const n=k(l);return e.multiple?n:n[0]??null}),T=C(()=>typeof e.counterValue=="function"?e.counterValue(a.value):typeof e.counterValue=="number"?e.counterValue:a.value.length),D=Te(e),{filteredItems:W,getMatches:fe}=tl(e,P,()=>y.value?"":v.value),M=C(()=>e.hideSelected?W.value.filter(l=>!a.value.some(n=>n.value===l.value)):W.value),B=C(()=>!!(e.chips||t.chip)),O=C(()=>B.value||!!t.selection),ve=C(()=>a.value.map(l=>l.props.value)),G=C(()=>{var n;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((n=M.value[0])==null?void 0:n.title))&&M.value.length>0&&!y.value&&!A.value}),N=C(()=>e.hideNoData&&!M.value.length||D.isReadonly.value||D.isDisabled.value),J=Z(e,"menu"),m=C({get:()=>J.value,set:l=>{var n;J.value&&!l&&((n=F.value)!=null&&n.ΨopenChildren.size)||l&&N.value||(J.value=l)}}),le=C(()=>m.value?e.closeText:e.openText),X=z(),de=pe(X,o);function me(l){e.openOnClear&&(m.value=!0),v.value=""}function he(){N.value||(m.value=!0)}function ge(l){N.value||(g.value&&(l.preventDefault(),l.stopPropagation()),m.value=!m.value)}function ye(l){var n;l.key!==" "&&se(l)&&((n=o.value)==null||n.focus())}function Ve(l){var s,d,S,w,r;if(D.isReadonly.value)return;const n=(s=o.value)==null?void 0:s.selectionStart,f=a.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(m.value=!0),["Escape"].includes(l.key)&&(m.value=!1),G.value&&["Enter","Tab"].includes(l.key)&&!a.value.some(V=>{let{value:h}=V;return h===M.value[0].value})&&R(M.value[0]),l.key==="ArrowDown"&&G.value&&((d=X.value)==null||d.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&O.value&&a.value.length>0&&!v.value)return R(a.value[0],!1);if(~i.value){l.preventDefault();const V=i.value;R(a.value[i.value],!1),i.value=V>=f-1?f-2:V}else l.key==="Backspace"&&!v.value&&(i.value=f-1);return}if(e.multiple)if(l.key==="ArrowLeft"){if(i.value<0&&n&&n>0)return;const V=i.value>-1?i.value-1:f-1;if(a.value[V])i.value=V;else{const h=((S=v.value)==null?void 0:S.length)??null;i.value=-1,(w=o.value)==null||w.setSelectionRange(h,h)}}else if(l.key==="ArrowRight"){if(i.value<0)return;const V=i.value+1;a.value[V]?i.value=V:(i.value=-1,(r=o.value)==null||r.setSelectionRange(0,0))}else~i.value&&se(l)&&(i.value=-1)}function ke(l){if(ie(o.value,":autofill")||ie(o.value,":-webkit-autofill")){const n=P.value.find(f=>f.title===l.target.value);n&&R(n)}}function Fe(){var l;e.eager&&((l=x.value)==null||l.calculateVisibleItems())}function Se(){var l;g.value&&(y.value=!0,(l=o.value)==null||l.focus())}function xe(l){g.value=!0,setTimeout(()=>{A.value=!0})}function be(l){A.value=!1}function we(l){(l==null||l===""&&!e.multiple&&!O.value)&&(a.value=[])}const Y=L(!1);function R(l){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const f=a.value.findIndex(d=>(e.valueComparator||He)(d.value,l.value)),s=n??!~f;if(~f){const d=s?[...a.value,l]:[...a.value];d.splice(f,1),a.value=d}else s&&(a.value=[...a.value,l]);e.clearOnSelect&&(v.value="")}else{const f=n!==!1;a.value=f?[l]:[],v.value=f&&!O.value?l.title:"",ue(()=>{m.value=!1,y.value=!0})}}return $(g,(l,n)=>{var f;l!==n&&(l?(Y.value=!0,v.value=e.multiple||O.value?"":String(((f=a.value.at(-1))==null?void 0:f.props.title)??""),y.value=!0,ue(()=>Y.value=!1)):(!e.multiple&&v.value==null&&(a.value=[]),m.value=!1,(e.multiple||O.value)&&(v.value=""),i.value=-1))}),$(v,l=>{!g.value||Y.value||(l&&(m.value=!0),y.value=!l)}),$(m,()=>{if(!e.hideSelected&&m.value&&a.value.length){const l=M.value.findIndex(n=>a.value.some(f=>n.value===f.value));Be&&window.requestAnimationFrame(()=>{var n;l>=0&&((n=x.value)==null||n.scrollToIndex(l))})}}),$(()=>e.items,(l,n)=>{m.value||g.value&&!n.length&&l.length&&(m.value=!0)}),Ne(()=>{const l=!!(!e.hideNoData||M.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),n=a.value.length>0,f=oe.filterProps(e);return b(oe,E({ref:o},f,{modelValue:v.value,"onUpdate:modelValue":[s=>v.value=s,we],focused:g.value,"onUpdate:focused":s=>g.value=s,validationValue:a.externalValue,counterValue:T.value,dirty:n,onChange:ke,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":m.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!O.value,"v-autocomplete--selecting-index":i.value>-1},e.class],style:e.style,readonly:D.isReadonly.value,placeholder:n?void 0:e.placeholder,"onClick:clear":me,"onMousedown:control":he,onKeydown:Ve}),{...t,default:()=>I(Q,null,[b(We,E({ref:F,modelValue:m.value,"onUpdate:modelValue":s=>m.value=s,activator:"parent",contentClass:"v-autocomplete__content",disabled:N.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:Fe,onAfterLeave:Se},e.menuProps),{default:()=>[l&&b(Ae,E({ref:X,selected:ve.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:ye,onFocusin:xe,onFocusout:be,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},de,e.listProps),{default:()=>{var s,d,S;return[(s=t["prepend-item"])==null?void 0:s.call(t),!M.value.length&&!e.hideNoData&&(((d=t["no-data"])==null?void 0:d.call(t))??b(ne,{key:"no-data",title:c(e.noDataText)},null)),b(Pe,{ref:x,renderless:!0,items:M.value,itemKey:"value"},{default:w=>{var ae;let{item:r,index:V,itemRef:h}=w;const te=E(r.props,{ref:h,key:r.value,active:G.value&&V===0?!0:void 0,onClick:()=>R(r,null)});return((ae=t.item)==null?void 0:ae.call(t,{item:r,index:V,props:te}))??b(ne,E(te,{role:"option"}),{prepend:U=>{let{isSelected:Ce}=U;return I(Q,null,[e.multiple&&!e.hideSelected?b(De,{key:r.value,modelValue:Ce,ripple:!1,tabindex:"-1"},null):void 0,r.props.prependAvatar&&b(Ze,{image:r.props.prependAvatar},null),r.props.prependIcon&&b(re,{icon:r.props.prependIcon},null)])},title:()=>{var U;return y.value?r.title:al("v-autocomplete",r.title,(U=fe(r))==null?void 0:U.title)}})}}),(S=t["append-item"])==null?void 0:S.call(t)]}})]}),a.value.map((s,d)=>{function S(h){h.stopPropagation(),h.preventDefault(),R(s,!1)}const w={"onClick:close":S,onKeydown(h){h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),h.stopPropagation(),S(h))},onMousedown(h){h.preventDefault(),h.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},r=B.value?!!t.chip:!!t.selection,V=r?Ge(B.value?t.chip({item:s,index:d,props:w}):t.selection({item:s,index:d})):void 0;if(!(r&&!V))return I("div",{key:s.value,class:H(["v-autocomplete__selection",d===i.value&&["v-autocomplete__selection--selected",K.value]]),style:Je(d===i.value?_.value:{})},[B.value?t.chip?b(Xe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>[V]}):b(Ke,E({key:"chip",closable:e.closableChips,size:"small",text:s.title,disabled:s.props.disabled},w),null):V??I("span",{class:"v-autocomplete__selection-text"},[s.title,e.multiple&&d<a.value.length-1&&I("span",{class:"v-autocomplete__selection-comma"},[Ye(",")])])])})]),"append-inner":function(){var w,r;for(var s=arguments.length,d=new Array(s),S=0;S<s;S++)d[S]=arguments[S];return I(Q,null,[(w=t["append-inner"])==null?void 0:w.call(t,...d),e.menuIcon?b(re,{class:"v-autocomplete__menu-icon",color:(r=o.value)==null?void 0:r.fieldIconColor,icon:e.menuIcon,onMousedown:ge,onClick:Qe,"aria-label":c(le.value),title:c(le.value),tabindex:"-1"},null):void 0])}})}),Ue({isFocused:g,isPristine:y,menu:m,search:v,filteredItems:W,select:R},o)}});export{il as V};
