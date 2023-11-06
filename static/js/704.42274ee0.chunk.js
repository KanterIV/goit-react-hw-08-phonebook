"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[704],{2704:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=n(9439),r=n(2791),s="ContactForm_contactsForm__6k3Pf",c="ContactForm_contactsFormBtn__+ADVC",o="ContactForm_contactsFormInput__jGZ7D",i=n(9434),u=n(6916),l=function(t){return t.contacts.contacts.items},m=function(t){return t.contacts.contacts.isLoading},d=function(t){return t.contacts.contacts.error},h=(0,u.P1)([l,function(t){return t.contacts.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),f=n(6338),p=n(9085),x=n(184),j=function(){var t=(0,r.useState)(""),e=(0,a.Z)(t,2),n=e[0],u=e[1],m=(0,r.useState)(""),d=(0,a.Z)(m,2),h=d[0],j=d[1],v=(0,i.I0)(),C=(0,i.v9)(l),b=function(t){switch(t.target.name){case"name":u(t.target.value);break;case"number":j(t.target.value);break;default:return}};return(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){if(C.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return p.Am.warning("".concat(t.name," is already in contacts"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",toastId:"errorMessage"});v((0,f.uK)(t))}({name:n,number:h}),u(""),j("")},className:s,children:[(0,x.jsxs)("label",{children:["Name",(0,x.jsx)("input",{className:o,onChange:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,placeholder:"Ivan Ivanov",required:!0})]}),(0,x.jsxs)("label",{children:["Phone",(0,x.jsx)("input",{className:o,onChange:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:h,placeholder:"123-45-67",required:!0})]}),(0,x.jsx)("button",{type:"submit",className:c,children:"Add contact"})]}),(0,x.jsx)(p.Ix,{})]})},v="ContactsList_contactsList__7sAfD",C="ContactListItem_contactListItem__A4sXv",b="ContactListItem_deleteBtn__roUYm",g=function(t){var e=t.contactId,n=t.contactName,a=t.contactNumber,r=t.deleteContact;return(0,x.jsxs)("li",{className:C,children:[(0,x.jsx)("p",{children:"".concat(n,": ")}),(0,x.jsx)("span",{children:a}),(0,x.jsx)("button",{className:b,onClick:function(){return r(e)},type:"button",name:e,children:"Delete"})]})},_=function(){var t=(0,i.I0)(),e=(0,i.v9)(h);(0,r.useEffect)((function(){t((0,f.yF)())}),[t]);var n=function(e){t((0,f.GK)(e))};return(0,x.jsx)("ul",{className:v,children:0!==e.length&&e.map((function(t){var e=t.id,a=t.name,r=t.number;return(0,x.jsx)(g,{contactId:e,contactName:a,contactNumber:r,deleteContact:n},e)}))})},I="Filter_filterInput__1Cysk",w=function(){var t=(0,i.I0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("p",{children:"Fined contacts by name"}),(0,x.jsx)("input",{className:I,onChange:function(e){t((0,f.Tv)(e.target.value))},type:"text",name:"filter"})]})},N=n(3430),k=(n(5462),function(){var t=(0,i.v9)(m),e=(0,i.v9)(d);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(w,{}),(0,x.jsx)(_,{}),t&&(0,x.jsx)(N.rj,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0}),e&&(0,x.jsx)(p.Ix,{})]})})}}]);
//# sourceMappingURL=704.42274ee0.chunk.js.map