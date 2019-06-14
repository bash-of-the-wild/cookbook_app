(function(e){function t(t){for(var r,a,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)a=o[u],n[a]&&d.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},s=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-danger mb-5"},[i("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Cookbook for the Tasteless")]),e._m(0),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[i("ul",{staticClass:"navbar-nav mr-auto"},[i("li",{staticClass:"nav-item dropdown"},[i("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n            Dropdown\n          ")]),i("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[i("router-link",{staticClass:"dropdown-item",attrs:{to:"/recipes/new"}},[e._v("New Recipe")]),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/signup"}},[e._v("Signup")]),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/login"}},[e._v("Log In")]),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/logout"}},[e._v("Logout")])],1)])]),i("form",{staticClass:"form-inline my-2 my-lg-0"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.titleFilter,expression:"titleFilter"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:e.titleFilter},on:{input:function(t){t.target.composing||(e.titleFilter=t.target.value)}}}),i("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[e._v("Search")])])])],1),i("router-view")],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[i("span",{staticClass:"navbar-toggler-icon"})])}],a={data:function(){return{titleFilter:""}}},o=a,l=i("2877"),c=Object(l["a"])(o,n,s,!1,null,null,null),p=c.exports,u=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-table-index"},[i("div",{staticClass:"container"},[i("h1",[e._v("All Recipes")]),i("div",[e._v("\n      Search by Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.titleFilter,expression:"titleFilter"}],domProps:{value:e.titleFilter},on:{input:function(t){t.target.composing||(e.titleFilter=t.target.value)}}})]),i("table",{staticClass:"table table-striped table-light"},[i("thead",{staticClass:"thead-dark"},[i("tr",[i("th",{attrs:{scope:"col"},on:{click:function(t){return e.setSortAttribute("id")}}},[e._v(e._s(e.isAscending("id"))+" Id")]),i("th",{attrs:{scope:"col"},on:{click:function(t){return e.setSortAttribute("title")}}},[e._v(e._s(e.isAscending("title"))+" Title")]),i("th",{attrs:{scope:"col"},on:{click:function(t){return e.setSortAttribute("prep_time")}}},[e._v(e._s(e.isAscending("prep_time"))+" Prep Time")]),i("th",{attrs:{scope:"col"},on:{click:function(t){return e.setSortAttribute("ingredients")}}},[e._v(e._s(e.isAscending("ingredients"))+" Ingredients")])])]),i("tbody",e._l(e.orderBy(e.filterBy(e.recipes,e.titleFilter,"title"),e.sortAttribute,e.sortAscending),function(t){return i("tr",[i("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),i("td",[e._v(e._s(t.title))]),i("td",[e._v(e._s(t.formatted.prep_time))]),i("td",[e._v(e._s(t.ingredients))])])}),0)])])])},m=[],v=i("a7c6"),f=i.n(v),g=i("bc3a"),_={data:function(){return{recipes:[],titleFilter:"",sortAttribute:"title",sortAscending:1}},created:function(){var e=this;g.get("/api/recipes").then(function(t){e.recipes=t.data})},methods:{setSortAttribute:function(e){this.sortAttribute===e?this.sortAscending*=-1:this.sortAscending=1,this.sortAttribute=e},isAscending:function(e){if(this.sortAttribute===e)return 1===this.sortAscending?"^":"v"}},mixins:[f.a.mixin]},b=_,h=(i("84f7"),Object(l["a"])(b,d,m,!1,null,null,null)),w=h.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-index"},[i("div",{staticClass:"container"},[i("h1",[e._v("All Recipes")]),i("div",[e._v("\n      Search by Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.titleFilter,expression:"titleFilter"}],domProps:{value:e.titleFilter},on:{input:function(t){t.target.composing||(e.titleFilter=t.target.value)}}})]),i("div",[i("button",{staticClass:"btn btn-dark m-1",on:{click:function(t){return e.setSortAttribute("title")}}},[e._v("\n        "+e._s(e.isAscending("title"))+" \n        Sort by Title\n      ")]),i("button",{staticClass:"btn btn-dark m-1",on:{click:function(t){return e.setSortAttribute("prep_time")}}},["prep_time"===e.sortAttribute&&1===e.sortAscending?i("span",[e._v("^")]):"prep_time"===e.sortAttribute&&-1===e.sortAscending?i("span",[e._v("v")]):e._e(),e._v(" \n        Sort by Prep Time\n      ")])]),i("transition-group",{staticClass:"row mt-5",attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOut"}},e._l(e.orderBy(e.filterBy(e.recipes,e.titleFilter,"title"),e.sortAttribute,e.sortAscending),function(t){return i("div",{key:t.id,staticClass:"col-sm-4"},[i("img",{staticClass:"index-recipes-img",attrs:{src:t.image_url,alt:t.title}}),i("h2",[i("router-link",{attrs:{to:"/recipes/"+t.id}},[e._v(e._s(t.title))])],1),i("p",[e._v(e._s(t.prep_time))])])}),0)],1)])},x=[],y=i("bc3a"),A={data:function(){return{recipes:[],titleFilter:"",sortAttribute:"title",sortAscending:1}},created:function(){var e=this;y.get("/api/recipes").then(function(t){e.recipes=t.data})},methods:{setSortAttribute:function(e){this.sortAttribute===e?this.sortAscending*=-1:this.sortAscending=1,this.sortAttribute=e},isAscending:function(e){if(this.sortAttribute===e)return 1===this.sortAscending?"^":"v"}},mixins:[f.a.mixin]},R=A,P=(i("856a"),Object(l["a"])(R,C,x,!1,null,null,null)),S=P.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-new"},[i("h1",[e._v("New Recipe")]),i("ul",e._l(e.errors,function(t){return i("li",[e._v("\n      "+e._s(t)+"\n    ")])}),0),i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("div",[e._v("\n      Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeTitle,expression:"newRecipeTitle"}],domProps:{value:e.newRecipeTitle},on:{input:function(t){t.target.composing||(e.newRecipeTitle=t.target.value)}}})]),i("div",[e._v("\n      Prep Time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipePrepTime,expression:"newRecipePrepTime"}],domProps:{value:e.newRecipePrepTime},on:{input:function(t){t.target.composing||(e.newRecipePrepTime=t.target.value)}}})]),i("div",[e._v("\n      Ingredients: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeIngredients,expression:"newRecipeIngredients"}],domProps:{value:e.newRecipeIngredients},on:{input:function(t){t.target.composing||(e.newRecipeIngredients=t.target.value)}}})]),i("div",[e._v("\n      Directions: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeDirections,expression:"newRecipeDirections"}],domProps:{value:e.newRecipeDirections},on:{input:function(t){t.target.composing||(e.newRecipeDirections=t.target.value)}}})]),i("div",[e._v("\n      Image URL: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeImageUrl,expression:"newRecipeImageUrl"}],domProps:{value:e.newRecipeImageUrl},on:{input:function(t){t.target.composing||(e.newRecipeImageUrl=t.target.value)}}})]),i("input",{attrs:{type:"submit",value:"Create Recipe"}})])])},$=[],k=i("bc3a"),I={data:function(){return{newRecipeTitle:"",newRecipePrepTime:"",newRecipeIngredients:"",newRecipeDirections:"",newRecipeImageUrl:"",errors:[]}},created:function(){},methods:{submit:function(){var e=this;console.log("Create the recipe...");var t={title:this.newRecipeTitle,prep_time:this.newRecipePrepTime,ingredients:this.newRecipeIngredients,directions:this.newRecipeDirections,image_url:this.newRecipeImageUrl};k.post("/api/recipes",t).then(function(t){e.$router.push("/")}).catch(function(t){e.errors=t.response.data.errors})}}},j=I,N=Object(l["a"])(j,T,$,!1,null,null,null),O=N.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-show"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("h2",[e._v(e._s(e.recipe.title))]),i("h3",[e._v("Prep Time: "+e._s(e.recipe.formatted.prep_time))]),i("p",[e._v("Ingredients: ")]),i("ul",e._l(e.recipe.formatted.ingredients,function(t){return i("li",[e._v(e._s(t))])}),0),i("p",[e._v("Directions: ")]),i("ol",e._l(e.recipe.formatted.directions,function(t){return i("li",[e._v(e._s(t))])}),0),i("router-link",{staticClass:"btn btn-warning m-1",attrs:{to:"/recipes/"+e.recipe.id+"/edit"}},[e._v("Edit")]),i("button",{staticClass:"btn btn-my-color m-1",on:{click:function(t){return e.destroyRecipe()}}},[e._v("Delete")])],1),i("div",{staticClass:"col-sm-6"},[i("img",{staticClass:"img-fluid show-recipe-img",attrs:{src:e.recipe.image_url}})])])])])},F=[],E=i("bc3a"),U={data:function(){return{recipe:{id:"",title:"",prep_time:"",ingredients:"",directions:"",formatted:{prep_time:"",ingredients:[],directions:[],created_at:""}}}},created:function(){var e=this;E.get("/api/recipes/"+this.$route.params.id).then(function(t){e.recipe=t.data})},methods:{destroyRecipe:function(){var e=this;E.delete("/api/recipes/"+this.recipe.id).then(function(t){e.$router.push("/")})}}},B=U,L=(i("fd83"),Object(l["a"])(B,D,F,!1,null,null,null)),M=L.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-edit"},[i("h1",[e._v("Edit Recipe")]),i("ul",e._l(e.errors,function(t){return i("li",[e._v("\n      "+e._s(t)+"\n    ")])}),0),i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("div",[e._v("\n      Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),i("div",[e._v("\n      Prep Time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})]),i("div",[e._v("\n      Ingredients: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),i("div",[e._v("\n      Directions: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.directions,expression:"recipe.directions"}],domProps:{value:e.recipe.directions},on:{input:function(t){t.target.composing||e.$set(e.recipe,"directions",t.target.value)}}})]),i("div",[e._v("\n      Image URL: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.image_url,expression:"recipe.image_url"}],domProps:{value:e.recipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.recipe,"image_url",t.target.value)}}})]),i("input",{attrs:{type:"submit",value:"Update Recipe"}})])])},J=[],q=i("bc3a"),G={data:function(){return{errors:[],recipe:{id:"",title:"",prep_time:"",ingredients:"",directions:"",formatted:{prep_time:"",ingredients:[],directions:[],created_at:""}}}},created:function(){var e=this;q.get("/api/recipes/"+this.$route.params.id).then(function(t){e.recipe=t.data})},methods:{submit:function(){var e=this,t={title:this.recipe.title,prep_time:this.recipe.prep_time,ingredients:this.recipe.ingredients,directions:this.recipe.directions,image_url:this.recipe.image_url};q.patch("/api/recipes/"+this.$route.params.id,t).then(function(t){e.$router.push("/recipes/"+e.$route.params.id)})}}},H=G,K=Object(l["a"])(H,z,J,!1,null,null,null),Q=K.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"signup"},[i("div",{staticClass:"container"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Signup")]),i("ul",e._l(e.errors,function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Name:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Email:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password confirmation:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},W=[],X=(i("7f7f"),i("bc3a")),Y=i.n(X),Z={data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};Y.a.post("/api/users",t).then(function(t){e.$router.push("/login")}).catch(function(t){e.errors=t.response.data.errors})}}},ee=Z,te=Object(l["a"])(ee,V,W,!1,null,null,null),ie=te.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("div",{staticClass:"container"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Login")]),i("ul",e._l(e.errors,function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Email:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},ne=[],se={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};Y.a.post("/api/sessions",t).then(function(t){Y.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),e.$router.push("/")}).catch(function(t){e.errors=["Invalid email or password."],e.email="",e.password=""})}}},ae=se,oe=Object(l["a"])(ae,re,ne,!1,null,null,null),le=oe.exports,ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logout"})},pe=[],ue={created:function(){delete Y.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},de=ue,me=Object(l["a"])(de,ce,pe,!1,null,null,null),ve=me.exports;r["a"].use(u["a"]);var fe=new u["a"]({routes:[{path:"/",name:"home",component:S},{path:"/recipes/table",name:"recipes-table-index",component:w},{path:"/recipes",name:"recipes-index",component:S},{path:"/recipes/new",name:"recipes-new",component:O},{path:"/recipes/:id",name:"recipes-show",component:M},{path:"/recipes/:id/edit",name:"recipes-edit",component:Q},{path:"/signup",name:"signup",component:ie},{path:"/login",name:"login",component:le},{path:"/logout",name:"logout",component:ve}]});Y.a.defaults.baseURL="/";var ge=localStorage.getItem("jwt");ge&&(Y.a.defaults.headers.common["Authorization"]="Bearer "+ge),r["a"].config.productionTip=!1,new r["a"]({router:fe,render:function(e){return e(p)}}).$mount("#app")},"684b":function(e,t,i){},"84f7":function(e,t,i){"use strict";var r=i("f8c1"),n=i.n(r);n.a},"856a":function(e,t,i){"use strict";var r=i("91bb"),n=i.n(r);n.a},"91bb":function(e,t,i){},f8c1:function(e,t,i){},fd83:function(e,t,i){"use strict";var r=i("684b"),n=i.n(r);n.a}});
//# sourceMappingURL=app.e9ea3789.js.map