(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[91,117,162],{190:function(e,t,n){},383:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},51:function(e,t,n){"use strict";n.r(t),n.d(t,"DragItemTypes",(function(){return i}));var i={IMAGE:"image"}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var i=n(11),r=n(12),o=n(6),a=n(14),c=n(13),s=n(365),u=n(0),l=n.n(u),m=(n(190),n(24),n(51)),p=n(761),g=n(762);function h(e){var t=Object(p.a)({item:{type:m.DragItemTypes.IMAGE,rownum:e.rownum,colnum:e.colnum},collect:function(e){return{isDragging:!!e.isDragging()}}}),n=Object(s.a)(t,2),i=(n[0].isDragging,n[1]),r=Object(g.a)({accept:m.DragItemTypes.IMAGE,drop:function(t,n){return e.isMergeable(t.rownum,t.colnum,e.rownum,e.colnum)?e.promptMerge(t.rownum,t.colnum,e.rownum,e.colnum):e.swapTemplateItems(t.rownum,t.colnum,e.rownum,e.colnum)},collect:function(e){return{isOver:!!e.isOver()}}}),o=Object(s.a)(r,2),a=o[0].isOver,c=o[1];return l.a.createElement("div",{style:{height:e.height?e.height:"100%",width:"100%",padding:"0px",borderStyle:"none"},ref:i},l.a.createElement("div",{style:{height:"100%",filter:"blur("+(a?"5px":"0px")+") sepia("+(a?"100%":"0%")+")"},ref:c},e.children))}var d=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={height:e.height,rownum:e.rownum,colnum:e.colnum,img:e.img},r.swapTemplateItems=e.swapTemplateItems.bind(Object(o.a)(r)),r.togglePopupIsOpen=e.togglePopupIsOpen.bind(Object(o.a)(r)),r.sendClickedInfo=e.sendClickedInfo.bind(Object(o.a)(r)),r.isMergeable=e.isMergeable.bind(Object(o.a)(r)),r.promptMerge=e.promptMerge.bind(Object(o.a)(r)),r}return Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({height:e.height,rownum:e.rownum,colnum:e.colnum,img:e.img})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{style:{height:this.state.height?this.state.height:"100%",width:"100%",padding:"0px",borderStyle:"none"},onClick:function(){e.togglePopupIsOpen(),e.sendClickedInfo(e.state.rownum,e.state.colnum,e.state.img)}},l.a.createElement(h,{height:this.state.height,rownum:this.state.rownum,colnum:this.state.colnum,swapTemplateItems:this.swapTemplateItems,style:{positiong:"relative",zIndex:"-1"},isMergeable:this.isMergeable,promptMerge:this.promptMerge},this.props.children)))}}]),n}(l.a.Component)}}]);
//# sourceMappingURL=91.3549790d.chunk.js.map