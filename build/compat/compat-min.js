YUI.add("compat",function(G){if(YUI!==window.YAHOO){YUI._setup();var F=(window.YAHOO)?YUI.merge(window.YAHOO):null;window.YAHOO=YUI;if(F){G.mix(G,F);}}if(G!==YUI){YUI.use("compat");}G.namespace("util","widget","example");G.env=(G.env)?G.mix(G.env,G.Env):G.Env;G.lang=(G.lang)?G.mix(G.lang,G.Lang):G.Lang;G.env.ua=G.UA;G.mix(G.env,{modules:[],listeners:[],getVersion:function(H){return this.Env.modules[H]||null;}});var A=G.lang;G.mix(A,{augmentObject:function(J,I){var H=arguments,K=(H.length>2)?G.Array(H,2,true):null;return G.mix(J,I,(K),K);},augmentProto:function(J,I){var H=arguments,K=(H.length>2)?G.Array(H,2,true):null;return G.mix(J,I,(K),K,1);},extend:G.bind(G.extend,G),merge:G.merge},true);A.augment=A.augmentProto;A.hasOwnProperty=G.Object.owns;G.augmentProto=A.augmentProto;G.mix(G,{register:function(H,L,K){var P=G.Env.modules;if(!P[H]){P[H]={versions:[],builds:[]};}var I=P[H],O=K.version,N=K.build,M=G.Env.listeners;I.name=H;I.version=O;I.build=N;I.versions.push(O);I.builds.push(N);I.mainClass=L;for(var J=0;J<M.length;J=J+1){M[J](I);}if(L){L.VERSION=O;L.BUILD=N;}else{}}});if("undefined"!==typeof YAHOO_config){var C=YAHOO_config.listener,B=G.Env.listeners,E=true,D;if(C){for(D=0;D<B.length;D=D+1){if(B[D]==C){E=false;break;}}if(E){B.push(C);}}}G.register("yahoo",G,{version:"@VERSION@",build:"@BUILD@"});if(G.Event){var F={isSafari:G.UA.webkit,webkit:G.UA.webkit,webkitKeymap:{63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9},isIE:G.UA.ie,_getScrollLeft:function(){return this._getScroll()[1];},_getScrollTop:function(){return this._getScroll()[0];},_getScroll:function(){var H=document.documentElement,I=document.body;if(H&&(H.scrollTop||H.scrollLeft)){return[H.scrollTop,H.scrollLeft];}else{if(I){return[I.scrollTop,I.scrollLeft];}else{return[0,0];}}},getPageX:function(I){var H=I.pageX;if(!H&&0!==H){H=I.clientX||0;if(G.UA.ie){H+=this._getScrollLeft();}}return H;},getCharCode:function(I){var H=I.keyCode||I.charCode||0;if(G.UA.webkit&&(H in G.Event.webkitKeymap)){H=G.Event.webkitKeymap[H];}return H;},getPageY:function(H){var I=H.pageY;if(!I&&0!==I){I=H.clientY||0;if(G.UA.ie){I+=this._getScrollTop();}}return I;},getXY:function(H){return[this.getPageX(H),this.getPageY(H)];},getRelatedTarget:function(I){var H=I.relatedTarget;if(!H){if(I.type=="mouseout"){H=I.toElement;}else{if(I.type=="mouseover"){H=I.fromElement;}}}return this.resolveTextNode(H);},getTime:function(J){if(!J.time){var I=new Date().getTime();try{J.time=I;}catch(H){this.lastError=H;return I;}}return J.time;},stopEvent:function(H){this.stopPropagation(H);this.preventDefault(H);},stopPropagation:function(H){if(H.stopPropagation){H.stopPropagation();}else{H.cancelBubble=true;}},preventDefault:function(H){if(H.preventDefault){H.preventDefault();}else{H.returnValue=false;}},getTarget:function(J,I){var H=J.target||J.srcElement;return this.resolveTextNode(H);},resolveTextNode:function(H){if(H&&3==H.nodeType){return H.parentNode;}else{return H;}},getEl:function(H){return G.get(H);}};G.mix(G.Event,F);G.util.Event=G.Event;G.register("event",G,{version:"@VERSION@",build:"@BUILD@"});}(function(){var N={};var M={HYPHEN:/(-[a-z])/i,ROOT_TAG:/^body|html$/i,OP_SCROLL:/^(?:inline|table-row)$/i};var I=function(P){if(!M.HYPHEN.test(P)){return P;}if(N[P]){return N[P];}var Q=P;while(M.HYPHEN.exec(Q)){Q=Q.replace(RegExp.$1,RegExp.$1.substr(1).toUpperCase());}N[P]=Q;return Q;};var L={get:function(R){if(R){if(R.nodeType||R.item){return R;}if(typeof R==="string"){return document.getElementById(R);}if("length" in R){var S=[];for(var Q=0,P=R.length;Q<P;++Q){S[S.length]=L.get(R[Q]);}return S;}return R;}return null;},isAncestor:function(P,Q){return YUI.DOM.contains(L.get(P),L.get(Q));},inDocument:function(P){return L.isAncestor(G.config.doc.documentElement,P);},batch:function(S,P,R,Q,W){S=(S&&(S.tagName||S.item))?S:L.get(S);if(!S||!P){return false;}if(W){W=G.Array(W);}var Y=(Q)?R:window;var X=function(a){if(W){var Z=O.call(W);Z.unshift(a);return P.apply(Y,Z);}else{return P.call(Y,a,R);}};if(S.tagName||S.length===undefined){return X(S);}var U=[];for(var T=0,V=S.length;T<V;++T){U[U.length]=X(S[T]);}return U;},_addClass:function(Q,P){if(YUI.DOM.hasClass(Q,P)){return false;}YUI.DOM.addClass(Q,P);return true;},_removeClass:function(Q,P){if(!YUI.DOM.hasClass(Q,P)){return false;}YUI.DOM.removeClass(Q,P);return true;},_replaceClass:function(Q,P,R){if(!R||P===R){return false;}YUI.DOM.replaceClass(Q,P,R);return true;},getElementsByClassName:function(S,P,Q){P=P||"*";Q=(Q)?L.get(Q):G.config.doc;var R=[];if(Q){R=G.Selector.query(P+"."+S,Q);}return R;},getElementsBy:function(S,P,Q){P=P||"*";Q=(Q)?L.get(Q):null||document;var R=[];if(Q){R=YUI.DOM.byTag(P,Q,S);}return R;},getViewportWidth:YUI.DOM.winWidth,getViewportHeight:YUI.DOM.winHeight,getDocumentWidth:YUI.DOM.docWidth,getDocumentHeight:YUI.DOM.docHeight,getDocumentScrollTop:YUI.DOM.docScrollY,getDocumentScrollLeft:YUI.DOM.docScrollX,getDocumentHeight:YUI.DOM.docHeight,_guid:function(P,Q){Q=Q||"yui-gen";L._id_counter=L._id_counter||0;if(P&&P.id){return P.id;}var R=Q+L._id_counter++;if(P){P.id=R;}return R;},_region:function(P){if((P.parentNode===null||P.offsetParent===null||YUI.DOM.getStyle(P,"display")=="none")&&P!=P.ownerDocument.body){return false;}return YUI.DOM.region(P);},_ancestorByClass:function(P,Q){return YUI.DOM.ancestor(P,function(R){return YUI.DOM.hasClass(R,Q);});},_ancestorByTag:function(Q,P){P=P.toUpperCase();return YUI.DOM.ancestor(Q,function(R){return R.tagName.toUpperCase()===P;});}};var O=[].slice;var K=function(Q,P){L[P]=function(){var R=O.call(arguments);R[0]=L.get(R[0]);return Q.apply(L,R);};};var J={getAncestorBy:YUI.DOM.ancestor,getAncestorByClassName:L._ancestorByClass,getAncestorByTagName:L._ancestorByTag,getPreviousSiblingBy:YUI.DOM.previous,getPreviousSibling:YUI.DOM.previous,getNextSiblingBy:YUI.DOM.next,getNextSibling:YUI.DOM.next,getFirstChildBy:YUI.DOM.firstChild,getFirstChild:YUI.DOM.firstChild,getLastChildBy:YUI.DOM.lastChild,getLastChild:YUI.DOM.lastChild,getChildrenBy:YUI.DOM.children,getChildren:YUI.DOM.children,insertBefore:function(Q,P){YUI.DOM.insertBefore(L.get(Q),L.get(P));
},insertAfter:function(Q,P){YUI.DOM.insertAfter(L.get(Q),L.get(P));}};G.each(J,K);var H={getStyle:YUI.DOM.getStyle,setStyle:YUI.DOM.setStyle,getXY:YUI.DOM.getXY,setXY:YUI.DOM.setXY,getX:YUI.DOM.getX,getY:YUI.DOM.getY,setX:YUI.DOM.setX,setY:YUI.DOM.setY,getRegion:L._region,hasClass:YUI.DOM.hasClass,addClass:L._addClass,removeClass:L._removeClass,replaceClass:L._replaceClass,generateId:L._guid};G.each(H,function(P,Q){L[Q]=function(S){var R=O.call(arguments,1);return L.batch(S,P,null,null,R);};});G.util.Dom=L;YAHOO.util.Region=function(R,S,P,Q){this.top=R;this[1]=R;this.right=S;this.bottom=P;this.left=Q;this[0]=Q;};YAHOO.util.Region.prototype.contains=function(P){return(P.left>=this.left&&P.right<=this.right&&P.top>=this.top&&P.bottom<=this.bottom);};YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left));};YAHOO.util.Region.prototype.intersect=function(T){var R=Math.max(this.top,T.top);var S=Math.min(this.right,T.right);var P=Math.min(this.bottom,T.bottom);var Q=Math.max(this.left,T.left);if(P>=R&&S>=Q){return new YAHOO.util.Region(R,S,P,Q);}else{return null;}};YAHOO.util.Region.prototype.union=function(T){var R=Math.min(this.top,T.top);var S=Math.max(this.right,T.right);var P=Math.max(this.bottom,T.bottom);var Q=Math.min(this.left,T.left);return new YAHOO.util.Region(R,S,P,Q);};YAHOO.util.Region.prototype.toString=function(){return("Region {"+"top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+"}");};YAHOO.util.Region.getRegion=function(P){return YUI.DOM.region(P);};YAHOO.util.Point=function(P,Q){if(YAHOO.lang.isArray(P)){Q=P[1];P=P[0];}this.x=this.right=this.left=this[0]=P;this.y=this.top=this.bottom=this[1]=Q;};YAHOO.util.Point.prototype=new YAHOO.util.Region();})();},"@VERSION@",{requires:["yui","dom"]});