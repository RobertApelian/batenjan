(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"44Ww":function(e,t,a){},ATke:function(e,t,a){},PWyJ:function(e,t,a){e.exports=a.p+"static/seperator-1035c91324c4c97d755f0763377f1d53.png"},RX7p:function(e,t,a){e.exports=a.p+"static/twitter-92dd9ca8c4951fff028cb79b33945e45.png"},RXBc:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),r=a.n(o),n=a("WOgE"),i=a.n(n),s=a("RX7p"),l=a.n(s),p=a("nbSO"),c=a.n(p),u=a("epXN"),m=a.n(u),d=a("g6vj"),g=a.n(d),h=a("ce2G"),f=a.n(h),b=a("PWyJ"),y=a.n(b),w={ArtThumb:i.a,TwitterThumb:l.a,WorkThumb:c.a,ShopThumb:m.a,Fustuk:g.a,FustukBackground:f.a,FustukSeperator:y.a};var k=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this;switch(this.props.page.type){case"main":return r.a.createElement("div",{className:"page-tile-main",style:{backgroundImage:"url("+this.props.page.image+")"},key:this.props.page.title});case"main-text":return r.a.createElement("div",{className:"page-tile-main scrolling-background",style:{backgroundImage:"url("+this.props.page.image+")"},key:this.props.page.title},r.a.createElement("div",{className:"page-tile-description-backdrop"}," ",this.props.page.text," "),r.a.createElement("div",{className:"page-tile-description"}," ",this.props.page.text," "));case"seperator":return r.a.createElement("div",{className:"page-tile-seperator",style:{backgroundImage:"url("+this.props.page.image+")"},key:this.props.page.title},r.a.createElement("i",{className:"page-seperator-title"}," ",this.props.page.title," "));default:return r.a.createElement("div",{className:"page-tile",key:this.props.page.title,onClick:function(){return window.location=e.props.page.url||"/"+e.props.page.title}},r.a.createElement("img",{className:"page-tile-image",src:this.props.page.image,width:"100%"}),r.a.createElement("i",{className:"page-tile-title"}," ",this.props.page.title," "))}},o}(o.Component),v=(a("44Ww"),a("uY+q"),function(e){return r.a.createElement("div",{style:{display:"flex",width:"100%",flexWrap:"wrap"}},e.pages.map((function(e){return r.a.createElement(k,{page:e})})))});var E=function(e){var t,a;function o(){for(var t,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={scrolled:!1},t.componentDidMount=function(){window.addEventListener("scroll",t.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.handleScroll)},t.handleScroll=function(){!1===t.state.scrolled&&0!==window.scrollY?t.setState({scrolled:!0}):0===window.scrollY&&t.setState({scrolled:!1})},t.scrollDown=function(){window.scrollBy({left:0,top:2*window.innerHeight,behavior:"smooth"})},t.scrollUp=function(){window.scrollBy({left:0,top:-2*window.innerHeight,behavior:"smooth"})},t}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){return this.state.scrolled?r.a.createElement("div",{onClick:this.scrollUp,className:"scroller"},"▲ back to top ▲"):r.a.createElement("div",{onClick:this.scrollDown,className:"scroller"},"▼ socials, commissions and more ▼")},o}(o.Component),x=(a("ATke"),[{key:0,title:"fustuk",image:w.Fustuk,type:"main"},{key:1,title:"fustuk-description",type:"main-text",image:w.FustukBackground,text:r.a.createElement("p",null,r.a.createElement("i",null,"Fustuk")," is an upcoming graphic novel written and illustrated by me about family, food, and cultural identity in a diaspora.",r.a.createElement("br",null),"Set in a fantastical version of the Persian Empire, it follows the youngest of three dysfunctional siblings in a family of chefs who strike a deal with a Djinn to save their dying mother — but only if they can step out of the shadow of their legendary father and cook a dish to rival his.",r.a.createElement("br",null),r.a.createElement("br",null),"Follow me on Twitter and Instagram (below) for progress, updates, and lots of art!")},{key:2,title:"",image:w.FustukSeperator,type:"seperator"},{key:3,title:"instagram",image:w.ArtThumb,url:"https://www.instagram.com/robertapelian/",type:"thumb"},{key:4,title:"twitter",image:w.TwitterThumb,url:"https://twitter.com/rob_a_pelican",type:"thumb"},{key:5,title:"shop",image:w.ShopThumb,url:"https://redbubble.com/people/robapelian/shop",type:"thumb"},{key:6,title:"commissions",image:w.WorkThumb,url:"https://ko-fi.com/robertapelian/commissions",type:"thumb"}]);t.default=function(e){return r.a.createElement("div",{style:{backgroundColor:"#343a34",color:"rgb(255,255,255)",height:"100%",fontFamily:"Vulf Mono"}},r.a.createElement(v,{pages:x}),r.a.createElement(E,null))}},WOgE:function(e,t,a){e.exports=a.p+"static/art-dff181e8a32d6563d4d0cc73627003b3.png"},ce2G:function(e,t,a){e.exports=a.p+"static/fustuksamplepages-4860cd0e3948e946e00fed78cf82e8a6.png"},epXN:function(e,t,a){e.exports=a.p+"static/shop-8d1d22ee7f93ffccfb0938cbbaa42d5b.png"},g6vj:function(e,t,a){e.exports=a.p+"static/fustuk2-f52062774bd9670477e6d119f6468ae7.png"},nbSO:function(e,t,a){e.exports=a.p+"static/work-e7533221d8465acd4296146fcabeb62a.png"},"uY+q":function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-e7163a91877cf923804a.js.map