"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=v(function(z,d){
function g(e,r,i,n,u,c){var t,s,a,o;for(t=r.data,s=r.accessors[0],a=n,o=0;o<e;o++){if(u.call(c,s(t,a),o,a,r))return o;a+=i}return-1}d.exports=g
});var f=v(function(B,l){
var I=require('@stdlib/array-base-arraylike2object/dist'),b=q();function j(e,r,i,n,u,c){var t,s,a;if(e<=0)return-1;if(s=I(r),s.accessorProtocol)return b(e,s,i,n,u,c);for(t=n,a=0;a<e;a++){if(u.call(c,r[t],a,t,r))return a;t+=i}return-1}l.exports=j
});var y=v(function(C,x){
var m=require('@stdlib/strided-base-stride2offset/dist'),O=f();function P(e,r,i,n,u){return O(e,r,i,m(e,i),n,u)}x.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=y(),k=f();R(p,"ndarray",k);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
