(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{H8ex:function(t,e,n){"use strict";n.r(e),n.d(e,"ROUTES",(function(){return d})),n.d(e,"HomeModule",(function(){return p}));var o=n("tyNb"),i=n("ofXK"),r=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.xb({type:t,selectors:[["qpl-testimonial"]],inputs:{company:"company",quote:"quote",quotee:"quotee",quoteeTitle:"quoteeTitle"},decls:12,vars:4,consts:[[1,"card"],[1,"company"],[1,"quote"],[1,"quotee"]],template:function(t,e){1&t&&(r.Gb(0,"div",0),r.Gb(1,"div",1),r.Rb(2),r.Fb(),r.Gb(3,"div",2),r.Rb(4),r.Fb(),r.Gb(5,"div",3),r.Rb(6," - "),r.Gb(7,"b"),r.Rb(8),r.Fb(),r.Rb(9,", "),r.Eb(10,"br"),r.Rb(11),r.Fb(),r.Fb()),2&t&&(r.ub(2),r.Tb(" ",e.company," "),r.ub(2),r.Tb(" ",e.quote," "),r.ub(4),r.Sb(e.quotee),r.ub(3),r.Tb(" ",e.quoteeTitle," "))},styles:[".card[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr auto;width:280px;height:100%;margin-left:10px;padding:15px;border:1px solid #bdcbd6;border-radius:10%;background-color:#bbcad8}.card[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{font-weight:700;text-align:left}.card[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]{text-align:justify;margin-top:15px!important}.card[_ngcontent-%COMP%]   .quotee[_ngcontent-%COMP%]{text-align:right}"]}),t})(),s=(()=>{class t{constructor(){}ngOnInit(){}get imageUrl(){switch(this.service){case"Plastic Fabrication":return"assets/services/plastic_fabrication.webp";case"Bespoke Duct Work":return"assets/services/bespoke_duct_work.webp";case"Laboratory Installations":return"assets/services/laboratory_installations.webp";default:return""}}get imageAltText(){switch(this.service){case"Plastic Fabrication":return"Photo of some plastic pipes.";case"Bespoke Duct Work":return"Photo of some duct work.";case"Laboratory Installations":return"Photo of some laboratory chimneys.";default:return"No image."}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.xb({type:t,selectors:[["qpl-services"]],inputs:{service:"service"},decls:4,vars:3,consts:[["mat-card-image","",1,"service-image",3,"src","alt"]],template:function(t,e){1&t&&(r.Gb(0,"div"),r.Eb(1,"img",0),r.Gb(2,"h3"),r.Rb(3),r.Fb(),r.Fb()),2&t&&(r.ub(1),r.Nb("src",e.imageUrl,r.Pb),r.Nb("alt",e.imageAltText),r.ub(2),r.Sb(e.service))},styles:["img[_ngcontent-%COMP%]{margin-top:10px;border-radius:50%;width:227px;height:187px;border:5px solid #eee}div[_ngcontent-%COMP%]{text-align:center;margin:8px 8px 20px}"]}),t})(),c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.xb({type:t,selectors:[["qpl-map"]],decls:2,vars:0,consts:[[1,"gmap"],["width","100%","height","100%","src","https://maps.google.com/maps?q=Quality%20Plastics%20Ltd%2C%20Pudsey&t=&z=15&ie=UTF8&iwloc=&output=embed"]],template:function(t,e){1&t&&(r.Gb(0,"div",0),r.Eb(1,"iframe",1),r.Fb())},styles:["[_nghost-%COMP%]{max-width:900px;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.gmap[_ngcontent-%COMP%]{background:none!important;height:500px;width:600px}"]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.xb({type:t,selectors:[["qpl-contact"]],decls:21,vars:0,consts:[[1,"address"],[1,"card","card-address"],[1,"hr"],["mat-raised-button","","href","mailto:peter.cusic@gmail.com",1,"contact-button","excluse"],["mat-raised-button","","routerLink","/contact","routerLinkActive","active",1,"contact-button"]],template:function(t,e){1&t&&(r.Gb(0,"div",0),r.Gb(1,"div",1),r.Rb(2," Unit 19 Waterloo Mills "),r.Eb(3,"br"),r.Rb(4," Waterloo Road "),r.Eb(5,"br"),r.Rb(6," Pudsey "),r.Eb(7,"br"),r.Rb(8," Leeds "),r.Eb(9,"br"),r.Rb(10," LS28 8DQ "),r.Eb(11,"br"),r.Eb(12,"hr",2),r.Rb(13," Tel: 07957 980 035 "),r.Eb(14,"br"),r.Gb(15,"a",3),r.Rb(16,"peter.cusic@gmail.com"),r.Fb(),r.Eb(17,"br"),r.Eb(18,"hr",2),r.Gb(19,"a",4),r.Rb(20,"Contact Us"),r.Fb(),r.Fb(),r.Fb())},directives:[o.b,o.a],styles:[".address[_ngcontent-%COMP%]{height:100%;margin-left:15px;text-align:center;line-height:1.5rem}@media (max-width:992px){.address[_ngcontent-%COMP%]{margin-top:20px;margin-left:0}}.card[_ngcontent-%COMP%]{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px;width:280px;background:none}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.xb({type:t,selectors:[["qpl-footer"]],decls:2,vars:0,consts:[[1,"footer"]],template:function(t,e){1&t&&(r.Gb(0,"footer",0),r.Rb(1," \xa9 2020 - Quality Plastics Ltd\n"),r.Fb())},styles:["footer[_ngcontent-%COMP%]{bottom:0;width:100%;text-align:center;padding:20px 0;font-size:1rem}"]}),t})();const d=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.xb({type:t,selectors:[["qpl-layout"]],decls:29,vars:0,consts:[[1,"header"],[1,"info"],[1,"testimonials"],[1,"wrap"],["company","Opti-Pharma Uk Ltd","quote","'I would have no hesitation in recommending Quality Plastics Ltd to any potential project.'","quotee","Keith O'Brien","quoteeTitle","Managing Director"],["company","Mansfield Pollard","quote","'...it was an effortless process in dealing with Peter from start to finish and I would recommend Quality Plastics Ltd for their professionalism in approach and workmanship.'","quotee","Michael Lee","quoteeTitle","Technical Design Engineer"],[1,"hr"],["service","Plastic Fabrication"],["service","Bespoke Duct Work"],["service","Laboratory Installations"],[1,"contact-information"],[1,"contact-information-body"]],template:function(t,e){1&t&&(r.Gb(0,"div",0),r.Gb(1,"h1"),r.Rb(2,"QUALITY PLASTICS LIMITED"),r.Fb(),r.Gb(3,"h3"),r.Rb(4,"PROVIDING BESPOKE & INNOVATIVE SOLUTIONS"),r.Fb(),r.Gb(5,"div",1),r.Rb(6," Quality Plastics Limited have been providing specialist fabrication work and expert ducting installations for over 25 years. The company prides themselves in providing professional plastic welding services, and tailor-made solutions to galvanised and stainless steel ducting projects. With a successful partnership, with some of the industries leading companies, Quality Plastics Limited are proud to represent projects at the cutting edge of technology. "),r.Fb(),r.Fb(),r.Gb(7,"div",2),r.Gb(8,"h2"),r.Rb(9,"TESTIMONIALS"),r.Fb(),r.Gb(10,"div",3),r.Eb(11,"qpl-testimonial",4),r.Eb(12,"qpl-testimonial",5),r.Fb(),r.Fb(),r.Eb(13,"div",6),r.Gb(14,"div"),r.Gb(15,"h2"),r.Rb(16,"OUR SERVICES"),r.Fb(),r.Gb(17,"div",3),r.Eb(18,"qpl-services",7),r.Eb(19,"qpl-services",8),r.Eb(20,"qpl-services",9),r.Fb(),r.Fb(),r.Eb(21,"div",6),r.Gb(22,"div",10),r.Gb(23,"h2"),r.Rb(24,"CONTACT US"),r.Fb(),r.Gb(25,"div",11),r.Eb(26,"qpl-map"),r.Eb(27,"qpl-contact"),r.Fb(),r.Fb(),r.Eb(28,"qpl-footer"))},directives:[a,s,c,b,l],styles:["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase}h1[_ngcontent-%COMP%]{font-size:3rem}h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1rem}.wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.info[_ngcontent-%COMP%]{text-align:justify;margin:20px 10% 0;padding-bottom:40px;display:block;font-size:1rem;line-height:1.5rem}.header[_ngcontent-%COMP%]{background-color:#4e6d8d;color:#fff}.testimonials[_ngcontent-%COMP%]{margin-bottom:40px}.contact-information[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.contact-information[_ngcontent-%COMP%]   .contact-information-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Bb({type:t}),t.\u0275inj=r.Ab({factory:function(e){return new(e||t)},imports:[[i.b,o.c.forChild(d)]]}),t})()}}]);