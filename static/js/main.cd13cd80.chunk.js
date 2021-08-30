(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{21:function(e,t,a){e.exports=a(41)},26:function(e,t,a){},27:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),l=(a(26),a(5)),s=a(6),i=a(8),m=a(7),u=(a(27),a(28),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",{className:this.props.mode?"Header dark-mode-el":"Header light-mode-el"},o.a.createElement("h2",null,"Where in the world?"),o.a.createElement("button",{className:this.props.mode?"btn dark-mode-el":"btn light-mode-el",onClick:this.props.changeMode},o.a.createElement("i",{className:this.props.mode?"far fa-moon":"fas fa-moon"}),this.props.modeText))}}]),a}(n.Component)),d=a(10),h=a(1),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Search cols col-lg-5 col-md-5 col-sm-12 col-sx-12"},o.a.createElement("input",{className:this.props.mode?"form-control form-dark-mode":"form-control form-light-mode",type:"text",placeholder:"\ud83d\udd0d  Search for a country ...",onChange:function(t){return e.props.onKeywordChange(t)},onBlur:function(t){return e.props.onFocusOut(t)}}))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Select cols col-lg-3 col-md-5"},o.a.createElement("select",{onChange:function(t){return e.props.onSelectedRegion(t)},onBlur:function(t){return e.props.onFocusOut(t)},id:"inputState",className:this.props.mode?"form-control form-dark-mode":"form-control form-light-mode"},o.a.createElement("option",{value:""},"Filter by region"),o.a.createElement("option",{value:"africa"},"Africa"),o.a.createElement("option",{value:"americas"},"Americas"),o.a.createElement("option",{value:"asia"},"Asia"),o.a.createElement("option",{value:"europe"},"Europe"),o.a.createElement("option",{value:"oceania"},"Oceania")))}}]),a}(n.Component),f=function(e){return o.a.createElement("div",{className:"Card cols col-lg-3 col-md-6 col-sm-12 col-xs-12"},o.a.createElement(d.b,{to:"/details/"+e.title.toLowerCase()},o.a.createElement("div",{className:e.mode?"card h-100 dark-mode-el":"card h-100 light-mode-el"},o.a.createElement("img",{src:e.flagImg,className:"card-img-top",alt:e.title}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.title),o.a.createElement("p",{className:"card-text"},"Population: ",o.a.createElement("span",{className:"grey"},e.populationNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),o.a.createElement("p",{className:"card-text"},"Region: ",o.a.createElement("span",{className:"grey"},e.regionIn)),o.a.createElement("p",{className:"card-text"},"Capital: ",o.a.createElement("span",{className:"grey"},e.capitalCity))))))},E=function(e){return o.a.createElement("div",{className:"row "},e.countriesData&&e.countriesData.map((function(t,a){return o.a.createElement(f,{mode:e.mode,modeText:e.modeText,changeMode:e.changeMode,key:a,id:t.alpha3Code,title:t.name,flagImg:t.flag,populationNum:t.population,regionIn:t.region,capitalCity:t.capital})})))},v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.value,a=n.allCountries.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}));n.setState({countries:a})},n.onFocusOut=function(e){e.target.value=""},n.onSelected=function(e){""===e.target.value?n.setState({countries:n.allCountries}):"africa"===e.target.value?n.setState({countries:n.allCountries.filter((function(e){return"Africa"===e.region}))}):"americas"===e.target.value?n.setState({countries:n.allCountries.filter((function(e){return"Americas"===e.region}))}):"asia"===e.target.value?n.setState({countries:n.allCountries.filter((function(e){return"Asia"===e.region}))}):"europe"===e.target.value?n.setState({countries:n.allCountries.filter((function(e){return"Europe"===e.region}))}):"oceania"===e.target.value&&n.setState({countries:n.allCountries.filter((function(e){return"Oceania"===e.region}))})},n.LoadMore=function(){var e=n.allCountries.slice(0,n.state.n);n.setState({countries:e,n:n.state.n+8})},n.allCountries=[],n.state={countries:[],n:16},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){e.allCountries=t.slice(),e.setState({countries:e.allCountries.slice(0,8)}),console.log(t),console.log(e.allCountries)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"HomePage container-fluid"},o.a.createElement("div",{className:"row search-select"},o.a.createElement(p,{onKeywordChange:this.onChange,onFocusOut:this.onFocusOut,mode:this.props.mode,modeText:this.props.modeText,changeMode:this.props.changeMode}),o.a.createElement(g,{onSelectedRegion:this.onSelected,onFocusOut:this.onFocusOut,mode:this.props.mode,modeText:this.props.modeText,changeMode:this.props.changeMode})),o.a.createElement("div",{className:"Homepage-row"},o.a.createElement(E,{countriesData:this.state.countries,mode:this.props.mode,modeText:this.props.modeText,changeMode:this.props.changeMode})),o.a.createElement("div",{className:"row row-load-more"},o.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-sx-12 d-flex justify-content-center"},o.a.createElement("button",{className:this.props.mode?"btn btn-load-more form-dark-mode":"btn btn-load-more form-light-mode",onClick:this.LoadMore},"Load more"))))}}]),a}(n.Component),y=(a(18),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={country:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/name/".concat(this.props.match.params.currentCountry)).then((function(e){return e.json()})).then((function(t){e.setState({country:t.slice()}),console.log(t)}))}},{key:"render",value:function(){var e=this,t=a(18);return console.log(t.allCountriesList()),o.a.createElement("div",{className:"Details"},o.a.createElement("div",{className:"row row-back"},o.a.createElement("div",{className:"cols col-lg-12 col-md-12 col-sm-12 col-sx-12"},o.a.createElement(d.b,{className:this.props.mode?"btn btn-back form-dark-mode":"btn btn-back form-light-mode",to:"/"},"\u27f5 \xa0 Back "))),o.a.createElement("div",{className:"row row-flag-text"},o.a.createElement("div",{className:"cols col-lg-5 col-md-12 col-sm-12 col-sx-12"},o.a.createElement("img",{className:"img-flag",src:this.state.country.length&&this.state.country[0].flag,alt:this.state.country.name})),o.a.createElement("div",{className:"cols col-lg-5 col-md-12 col-sm-12 col-sx-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"cols col-lg-12 col-md-12 col-sm-12 col-sx-12"},o.a.createElement("h3",null,this.state.country.length&&this.state.country[0].name))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"cols col-lg-6 col-md-12 col-sm-12 col-sx-12 text"},o.a.createElement("p",null,"Native Name: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].nativeName)),o.a.createElement("p",null,"Population: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),o.a.createElement("p",null,"Region: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].region)),o.a.createElement("p",null,"Sub Region: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].subregion)),o.a.createElement("p",null,"Capital: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].capital))),o.a.createElement("div",{className:"cols col-lg-6 col-md-12 col-sm-12 col-xs-12"},o.a.createElement("p",null,"Top Level Domain: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].topLevelDomain[0])),o.a.createElement("p",null,"Currencies: ",o.a.createElement("span",{className:"grey"},this.state.country.length&&this.state.country[0].currencies[0].name)),o.a.createElement("p",null,"Languages: ",this.state.country.length&&this.state.country[0].languages.map((function(e,t){return o.a.createElement("span",{className:"languages grey",key:t},e.name)}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"cols col-lg-12 col-md-12 col-sm-12 col-xs-12"},o.a.createElement("p",null,"Border Countries: ",this.state.country.length&&this.state.country[0].borders.map((function(a,n){return o.a.createElement("span",{className:e.props.mode?"borders grey dark-mode-el":"borders grey light-mode-borders",key:n}," ",t.getCountry(a)," ")}))))))))}}]),n}(n.Component)),N=function(){return o.a.createElement("div",{className:"NotFound"},o.a.createElement("h1",null,"Page Not Found"),o.a.createElement(d.b,{to:"/"},o.a.createElement("button",{className:"btn dark-mode-el"},"\u27f5  Go Back To Home Page")))},b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeMode=function(){n.state.inner?n.setState({inner:!1,innerText:"Dark Mode"}):n.setState({inner:!0,innerText:"Light Mode"})},n.state={inner:!0,innerText:"Light Mode"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(d.a,null,o.a.createElement("div",{className:this.state.inner?"App dark-mode":"App light-mode"},o.a.createElement(u,{mode:this.state.inner,modeText:this.state.innerText,changeMode:this.changeMode}),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",render:function(){return o.a.createElement(v,{mode:e.state.inner,changeMode:e.changeMode})}}),o.a.createElement(h.a,{path:"/details/:currentCountry",render:function(t){return o.a.createElement(y,Object.assign({mode:e.state.inner,changeMode:e.changeMode},t))}}),o.a.createElement(h.a,{component:N}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd13cd80.chunk.js.map