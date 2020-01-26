(this.webpackJsonpdefault_react=this.webpackJsonpdefault_react||[]).push([[0],{22:function(e,t,a){e.exports=a(55)},27:function(e,t,a){},36:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),c=(a(27),a(2)),s=a(5),i=a(6),u=a(8),d=a(7),m=a(9),h=a(3),f=a.n(h),p=function(e){var t=e.handleDelete,a=e.name,n=e.number;return l.a.createElement("li",{id:f()()},a,": ",n,l.a.createElement("button",{onClick:function(){t(f()())},type:"button"},"Delete"))},v=function(e){var t=e.handleFilter,a=e.filter;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Find contacts by name"),l.a.createElement("input",{type:"text",autoComplete:"off",autoFocus:!0,onChange:t,value:a}))},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={contacts:[],name:"",filter:"",number:"",filteredArr:[]},a.handleAdd=function(e){a.setState({name:e.target.value})},a.handleAddNumber=function(e){a.setState({number:e.target.value})},a.handleFilter=function(e){a.setState({filter:e.target.value}),a.filterArr()},a.handleDelete=function(e){var t=a.state.contacts.filter((function(t){return t.id!==e}));a.setState({contacts:t}),console.log(e)},a.filterArr=function(){var e=a.state.contacts.filter((function(e){return e.name.includes(a.state.filter)}));a.setState({filteredArr:e})},a.addContact=function(e){if(a.state.contacts.find((function(e){return e.name===a.state.name})))alert("this name already exist");else{var t;(t=console).log.apply(t,Object(c.a)(a.state.contacts)),console.log(a.state);var n={id:f()(),name:a.state.name,number:a.state.number};a.setState((function(e){return{contacts:[].concat(Object(c.a)(e.contacts),[n]),name:"",number:""}}))}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState((function(e){return{contacts:[].concat(Object(c.a)(e.contacts),Object(c.a)(JSON.parse(localStorage.getItem("contacts"))))}}))}},{key:"componentDidUpdate",value:function(e,t){t.contacts.length!==this.state.contacts.length&&(console.log(t.contacts.length,this.state.contacts.length),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var e=this,t=[];return t=""!==this.state.filter?this.state.filteredArr:this.state.contacts,l.a.createElement("div",null,l.a.createElement("h2",null,"Phonebook"),l.a.createElement("h3",null,"Name"),l.a.createElement("input",{type:"text",onChange:this.handleAdd,value:this.state.name,placeholder:"Name"}),l.a.createElement("h3",null,"Number"),l.a.createElement("input",{type:"text",onChange:this.handleAddNumber,value:this.state.number,placeholder:"Number"}),l.a.createElement("button",{type:"button",onClick:this.addContact},"Add contact"),l.a.createElement("div",null,l.a.createElement("h2",null,"Contacts"),l.a.createElement(v,{handleFilter:this.handleFilter,filter:this.state.filter}),l.a.createElement("ul",null,t.map((function(t){return l.a.createElement(p,{handleDelete:e.handleDelete,name:t.name,number:t.number,key:f()()})})))))}}]),t}(n.Component),g=(a(36),function(e){var t=e.onHandleGetValue,a=e.onHandleSubmit;return l.a.createElement("div",null,l.a.createElement("header",{className:"Searchbar"},l.a.createElement("form",{className:"SearchForm",onSubmit:a},l.a.createElement("button",{type:"submit",className:"SearchForm-button"},l.a.createElement("span",{className:"SearchForm-button-label"},"Search")),l.a.createElement("input",{onChange:t,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}))))}),E=function(e){var t=e.data,a=e.showModal;return l.a.createElement("li",{className:"ImageGalleryItem"},l.a.createElement("img",{onClick:function(){return a(t.largeImageURL)},src:t.webformatURL,alt:"",className:"ImageGalleryItem-image"}))},y=function(e){var t=e.data,a=e.showModal;return l.a.createElement("div",null,l.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return l.a.createElement(E,{showModal:a,data:e,key:e.id})}))))},S=a(21),w=a.n(S),k=a(10),N=a.n(k),O="14480530-c98fbdaaa9be573dc41a56407";N.a.defaults.baseURL="https://pixabay.com/api/";var M=function(){var e,t,a,n=arguments;return w.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"nature",t=n.length>1&&void 0!==n[1]?n[1]:1,l.prev=2,a=N.a.get("?q=".concat(e,"&page=").concat(t,"&key=").concat(O,"&image_type=photo&orientation=horizontal&per_page=12")),l.abrupt("return",a);case 7:l.prev=7,l.t0=l.catch(2),console.log(l.t0);case 10:case"end":return l.stop()}}),null,null,[[2,7]])},j=function(e){var t=e.onHandleLoad;return l.a.createElement("button",{onClick:t,type:"button",className:"Button"},"Load More")},C=function(e){var t=e.hideModal,a=e.show,n=e.url,o=a?"Overlay":"d-none";return l.a.createElement("div",{className:o,onClick:function(e){"IMG"!==e.target.nodeName&&t()}},l.a.createElement("div",{className:"Modal"},l.a.createElement("img",{src:n,alt:"img"})))},A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],value:"",search:"",page:1,show:!1,url:""},a.onHandleLoad=function(){a.setState({page:a.state.page+1})},a.showModal=function(e){a.setState({show:!0,url:e})},a.hideModal=function(){a.setState({show:!1})},a.onHandleGetValue=function(e){var t=e.target.value;a.setState({value:t})},a.onHandleSubmit=function(e){e.preventDefault(),a.setState({search:a.state.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;M().then((function(t){e.setState({data:t.data.hits})})),window.addEventListener("keyup",this.hideModal)}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.search!==this.state.search&&M(this.state.search).then((function(e){a.setState({data:e.data.hits})})),this.state.page>1&&t.page!==this.state.page&&M(this.state.search,this.state.page).then((function(e){a.setState({data:[].concat(Object(c.a)(t.data),Object(c.a)(e.data.hits))})}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.hideModal)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,{onHandleGetValue:this.onHandleGetValue,onHandleSubmit:this.onHandleSubmit}),l.a.createElement(y,{showModal:this.showModal,data:this.state.data}),0!==this.state.data.length?l.a.createElement(j,{onHandleLoad:this.onHandleLoad}):"",l.a.createElement(C,{show:this.state.show,hideModal:this.hideModal,url:this.state.url}))}}]),t}(n.Component),F=function(){return l.a.createElement("div",null,l.a.createElement(A,null),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.6aa380db.chunk.js.map