(window.webpackJsonp=window.webpackJsonp||[]).push([[64,7,9,11,17],{373:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0573e392",content,!0,{sourceMap:!1})},374:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("74061a1c",content,!0,{sourceMap:!1})},375:function(t,e,n){"use strict";n(373)},376:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),r.locals={},t.exports=r},377:function(t,e,n){"use strict";n(374)},378:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,"h1[data-v-108c89d4]{color:#f3cc39}",""]),r.locals={},t.exports=r},379:function(t,e,n){"use strict";n.r(e);var r={name:"CoreH1",props:{title:{type:String,required:!0}},computed:{langSpacing:function(){return"en-us"===this.$i18n.locale?"tracking-wider":"tracking-widest"}}},o=(n(377),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif whitespace-nowrap"},[n("h1",{class:"py-2 font-semibold leading-loose text-lg mb-3 "+t.langSpacing+" md:text-2xl lg:text-2xl md:mb-9 lg:mb-9"},[t._v("\n        "+t._s(t.title)+"\n    ")])])}),[],!1,null,"108c89d4",null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},o=(n(375),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},381:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6c4e3de6",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";var r=n(3),o=n(383);r({target:"String",proto:!0,forced:n(384)("small")},{small:function(){return o(this,"small","","")}})},383:function(t,e,n){var r=n(35),o=/"/g;t.exports=function(t,e,n,c){var l=String(r(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(c).replace(o,"&quot;")+'"'),d+">"+l+"</"+e+">"}},384:function(t,e,n){var r=n(6);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},385:function(t,e,n){"use strict";n.r(e);n(382);var r=n(28),o={name:"CoreTextButton",components:{ExtLink:r.ExtLink,LocaleLink:r.LocaleLink},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--large":this.large,"--medium":this.medium,"--small":this.small,"--rounded":this.rounded,"--block":this.block,"--is-link":this.isLink}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},c=(n(386),n(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.coreButtonClasses},[t.href?n("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?n("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"1a299152",null);e.default=component.exports},386:function(t,e,n){"use strict";n(381)},387:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".core-button[data-v-1a299152]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:none;background-color:transparent}.core-button.--is-link>a[data-v-1a299152],.core-button[data-v-1a299152]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none}.core-button.--large.--is-link>a[data-v-1a299152], .core-button.--large[data-v-1a299152]:not(.--is-link){height:5rem;border-width:4px;padding-left:4rem;padding-right:4rem;padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.5rem;line-height:2rem;font-weight:700}.core-button.--large.--is-link>a[data-v-1a299152],.core-button.--large[data-v-1a299152]:not(.--is-link){min-width:128px}.core-button.--medium.--is-link>a[data-v-1a299152], .core-button.--medium[data-v-1a299152]:not(.--is-link){height:3rem;border-width:4px;padding-left:1.75rem;padding-right:1.75rem;padding-top:0.875rem;padding-bottom:0.875rem;font-size:1rem;line-height:1.5rem;font-weight:700}.core-button.--medium.--is-link>a[data-v-1a299152],.core-button.--medium[data-v-1a299152]:not(.--is-link){min-width:108px}.core-button.--small.--is-link>a[data-v-1a299152], .core-button.--small[data-v-1a299152]:not(.--is-link){height:2.5rem;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.75rem;line-height:1rem}.core-button.--small.--is-link>a[data-v-1a299152],.core-button.--small[data-v-1a299152]:not(.--is-link){min-width:80px;border-width:3px}.core-button.--rounded.--is-link>a[data-v-1a299152],.core-button.--rounded[data-v-1a299152]:not(.--is-link){border-radius:9999px}.core-button.--primary.--is-link>a[data-v-1a299152],.core-button.--primary[data-v-1a299152]:not(.--is-link){color:#c2a53a;border-color:currentColor}.core-button.--secondary.--is-link>a[data-v-1a299152],.core-button.--secondary[data-v-1a299152]:not(.--is-link){color:#c7c7c7;border-color:currentColor}.core-button.--is-link>a[data-v-1a299152]:hover,.core-button[data-v-1a299152]:not(.--is-link):hover{color:#7568f6;border-color:#7568f6}",""]),r.locals={},t.exports=r},391:function(t,e,n){"use strict";n.r(e);var r={name:"Banner"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex font-serif font-semibold w-full flex-1"},[n("div",{staticClass:"image hidden md:block lg:block w-full md:w-3/6 lg:w-3/6 md:h-64 lg:h-64"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"flex flex-col items-start mx-8 w-full md:w-3/6 lg:w-3/6 text-xs md:text-base lg:text-base"},[t._t("text")],2)])}),[],!1,null,"59be2971",null);e.default=component.exports},394:function(t,e,n){t.exports=n.p+"img/Banner.7f8bcd2.svg"},552:function(t,e,n){t.exports=n.p+"img/TicketsRightCircle.6f9fb0a.svg"},553:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("cc2e0bcc",content,!0,{sourceMap:!1})},604:function(t,e,n){t.exports=n.p+"img/TicketsLeftCircle.bd0b1db.svg"},605:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4MCIgaGVpZ2h0PSIxNDU0IiB2aWV3Qm94PSIwIDAgMTQ0MCA3MjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMjI3NzQ4IiBkPSJNMTQyOS4yNCAxLjkyNTc4QzE1NDcuMTEgMTAuNjU0OCA2NTYuNzg5IDcwLjM2MTkgNjIxLjE0OCAzOTMuODJDNjQyLjk2OCA2NzcuMjggOTguNTYxMyA3NDguMzY2IDAuMDM3NTU3NiA3MTkuNzAxIiBzdHJva2U9IiNGQ0YxODciIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K"},606:function(t,e,n){"use strict";n(553)},607:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".customHighlight[data-v-1f726044]{color:#9387ff}.tickets h2[data-v-1f726044]{text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;margin-top:3.5rem;margin-bottom:2.5rem;font-size:1.25rem;line-height:1.75rem;letter-spacing:0.1em}@media (min-width: 768px){.tickets h2[data-v-1f726044]{font-size:1.5rem;line-height:2rem}}.tickets h2[data-v-1f726044]{color:#f3cc39}.tickets h3[data-v-1f726044]{font-family:Noto Serif TC, -apple-system, serif;font-size:1rem;line-height:1.5rem;font-weight:700}@media (min-width: 768px){.tickets h3[data-v-1f726044]{font-size:1.25rem;line-height:1.75rem}}.tickets h5[data-v-1f726044]{text-align:center;font-size:1rem;line-height:1.5rem}@media (min-width: 640px){.tickets h5[data-v-1f726044]{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 768px){.tickets h5[data-v-1f726044]{font-size:1.25rem;line-height:1.75rem}}.tickets h5[data-v-1f726044]{margin-top:1.5rem;font-weight:700}@media (min-width: 768px){.tickets h5[data-v-1f726044]{margin-top:2rem}}.tickets h5[data-v-1f726044]{color:#c2a53a}.tickets span[data-v-1f726044]{font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.tickets span[data-v-1f726044]{font-size:1rem;line-height:1.5rem}}.tickets ul.list-disc[data-v-1f726044]{padding-left:1rem}@media (min-width: 768px){.tickets ul.list-disc[data-v-1f726044]{padding-left:3.5rem}}.tickets__summary[data-v-1f726044]{padding-bottom:2.25rem}.tickets__summary p[data-v-1f726044]{margin-top:0px;margin-bottom:0px;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.tickets__summary p[data-v-1f726044]{font-size:1rem;line-height:1.5rem}}.tickets .tickets__box[data-v-1f726044]{z-index:10;box-sizing:border-box;height:14rem;border-radius:1.5rem;text-align:center}@media (min-width: 768px){.tickets .tickets__box[data-v-1f726044]{height:18rem}}.tickets .tickets__box[data-v-1f726044]{border:2px solid #c2a53a;box-shadow:6px 6px 0 #c2a53a}.tickets__boxWrapper[data-v-1f726044]{display:grid;gap:2.5rem}@media (min-width: 768px){.tickets__boxWrapper[data-v-1f726044]{grid-template-columns:repeat(2, minmax(0, 1fr))}}.tickets__boxPrice[data-v-1f726044]{margin-top:2rem;margin-bottom:0.75rem;display:flex;justify-content:space-evenly}@media (min-width: 768px){.tickets__boxPrice[data-v-1f726044]{margin-top:2.5rem}.tickets__boxPrice[data-v-1f726044]{margin-bottom:1.5rem}}.tickets__boxPrice[data-v-1f726044]{font-size:0.75rem;line-height:1rem}@media (min-width: 640px){.tickets__boxPrice[data-v-1f726044]{font-size:0.875rem;line-height:1.25rem}}@media (min-width: 768px){.tickets__boxPrice[data-v-1f726044]{font-size:1rem;line-height:1.5rem}}.tickets__boxPrice[data-v-1f726044]{line-height:2.4rem}@media (min-width:768px){.tickets__boxPrice[data-v-1f726044]{line-height:2.85rem}}.tickets__boxPrice .tickets__boxPriceHighlight[data-v-1f726044]{margin-right:0.25rem;font-size:1.5rem;line-height:2rem;font-weight:700}@media (min-width: 768px){.tickets__boxPrice .tickets__boxPriceHighlight[data-v-1f726044]{font-size:1.875rem;line-height:2.25rem}}.tickets__boxPrice .tickets__boxPriceHighlight[data-v-1f726044]{color:#f3cc39}.tickets__financialAid li[data-v-1f726044], .tickets__notices li[data-v-1f726044]{margin-bottom:0.5rem;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.tickets__financialAid li[data-v-1f726044], .tickets__notices li[data-v-1f726044]{font-size:1rem;line-height:1.5rem}}.tickets__individualCircle[data-v-1f726044]{position:absolute;z-index:0;display:none}@media (min-width: 768px){.tickets__individualCircle[data-v-1f726044]{right:0.5rem}.tickets__individualCircle[data-v-1f726044]{display:block}}@media (min-width: 1024px){.tickets__individualCircle[data-v-1f726044]{right:3rem}}.tickets__individualCircle[data-v-1f726044]{top:40rem}.tickets__noticesCircle[data-v-1f726044]{position:absolute;z-index:0;display:none}@media (min-width: 768px){.tickets__noticesCircle[data-v-1f726044]{right:0.5rem}.tickets__noticesCircle[data-v-1f726044]{display:block}}@media (min-width: 1024px){.tickets__noticesCircle[data-v-1f726044]{right:3rem}}.tickets__noticesCircle[data-v-1f726044]{top:107.5rem}.tickets__corporateCircle[data-v-1f726044]{position:absolute;z-index:0;display:none}@media (min-width: 768px){.tickets__corporateCircle[data-v-1f726044]{left:0.5rem}.tickets__corporateCircle[data-v-1f726044]{display:block}}@media (min-width: 1024px){.tickets__corporateCircle[data-v-1f726044]{left:2.5rem}}.tickets__corporateCircle[data-v-1f726044]{top:54rem}.tickets__curveDecorate[data-v-1f726044]{position:absolute;display:none}@media (min-width: 768px){.tickets__curveDecorate[data-v-1f726044]{left:0px}.tickets__curveDecorate[data-v-1f726044]{display:block}}.tickets__curveDecorate[data-v-1f726044]{z-index:-1}@media (min-width:768px){.tickets__curveDecorate[data-v-1f726044]{top:78rem}}@media (min-width:1440px){.tickets__curveDecorate[data-v-1f726044]{top:62rem}}",""]),r.locals={},t.exports=r},637:function(t,e,n){"use strict";n.r(e);var r=n(380),o=n(63),c=Object(o.a)({"en-us":{title:"Online Ticket",pageAbstract:"Welcome to PyCon TW. You can purchase different ticket types, and find the most suitable plan. If you need financial assistance, please read the financial aid section below. ",individualTicket:{title:"Individual",summary:"Tickets are limited. Be sure to get your ticket as soon as possible before they are sold out. We will send out electronic invoices by email after the conference. {highlight} All ticket sales end on September 4th.",pySafe:"The souvenirs of PySafe include stickers, Taiwanese beer glass, T-shirt, and thankful card.",highlight:"We do not provide VAT receipt for individual tickets. ",type:[{name:"Regular",discount:"Regular"},{name:"Regular (with PySafe)",discount:"Regular"}]},corporateTicket:{title:"Corporate",summary:["Provide company name and VAT Number, or N/A if re­im­burse­ment is not required. We will send out electronic invoices by email after the conference. ","{discount}","The sales of corporate tickets ended on September 4th."],pySafe:"The souvenirs of PySafe include stickers, Taiwanese beer glass, T-shirt and thankful card.",type:{name:"Corporate (with PySafe)",discount:"Regular"},discount:"We offer discounts for groups of five or more people. For group purchase, please fill out the {formLink}! ",formLink:"Google form"},notices:{title:"Notices",description:["{reimbursement}","Tickets provide access to the main conference from Oct. 2nd to Oct. 3rd. Events like Tutorials or Sprints might need a separate registration. Be sure to check out the related details on the event's page.","Please provide the valid phone number and email address when purchasing the ticket, so that you won't be missed if we have important announcements. If you have any questions, please send us an e-mail to {organizers}, and we'll reply as soon as possible.","PyCon Taiwan is a paid conference. Everybody, including staffs and speakers, contributes or pays for attending (see PyCon: {everybodyPays}).","You can pay through credit card, PayPal, or bank transfer.","You may ask for a refund not later than ten days before the conference, by contacting us or directly applying with KKTIX."],reimbursement:"If you need reimbursement, please purchase the corporate ticket. VAT receipts are not provided for other ticket types.",everybodyPays:"Everybody Pays"},financialAid:{title:"Financial Aid",description:"All who look for help attending the conference are welcomed to apply for financial aid. {highlight}. More info about applications can be found {financialAidLink}.",financialAidLink:"here",highlight:"Please apply before your purchase"},ticketLinkText:"Buy Ticket"},"zh-hant":{title:"購票",pageAbstract:"歡迎大家參與 PyCon 精彩的議程。不同的身份可以購買不同的票種，每個人都可以找到最適合自己的方案，有興趣的會眾請儘早購買！ 若需要財務補助，請見頁底財務補助申請。",individualTicket:{title:"個人票",summary:"限時限量，請及早購買。電子發票於會後統一以 email 寄送，{highlight} 一般票種販售於 9 月 4 日結束。",pySafe:"PySafe 內容物包含紀念貼紙、紀念酒杯、紀念 T-shirt以及感謝小卡。",highlight:"個人票一律無法使用統一編號。",type:[{name:"一般票",discount:"一般價"},{name:"一般票（附 PySafe）",discount:"一般價"}]},corporateTicket:{title:"企業票",summary:["有統編需求請填寫公司抬頭與統一編號。無統編需求請於抬頭與統編填寫 N/A。企業票的電子發票標示買方統編可用於公司報帳。電子發票於會後統一以 email 寄送。","{discount}","企業票販售於 9 月 4 日結束。"],pySafe:"PySafe 內容物包含紀念貼紙、紀念酒杯、紀念 T- shirt 以及感謝小卡。",type:{name:"企業票（附 PySafe）",discount:"一般價"},discount:"若五人以上購買提供團購優惠，如需團購請填寫{formLink}！",formLink:"表單"},notices:{title:"購票須知",description:["{reimbursement}","上列票種用於報名 10 月 2 日至 3 日的議程活動；tutorial、衝刺開發等其他課程報名方式，請至首頁報名。","報名時請留下正確的聯絡方式以便通知。如有問題請寄信至 {organizers} 洽詢，我們將盡快回應。","PyCon Taiwan 是需付費的活動。所有參加者，包括籌備人員和講者，均需透過貢獻 PyCon Taiwan 社群或是付費而來參加。見{everybodyPays}。","我們提供三種付款方式：信用卡、PayPal、ATM 轉帳。","部份票種（例如個人票）可由 KKTIX 逕行辦理退票，您可於會議十天前聯絡我們。"],reimbursement:"如果需要抬頭和統編，請購買企業票，其他票種無法提供統編。",everybodyPays:"公平付費"},financialAid:{title:"財務補助",description:"歡迎申請大會 Financial Aid 計劃。{highlight}，再依獲得的憑證購買補助用票券。若有意願申請請至{financialAidLink}。",financialAidLink:"財務補助說明頁面",highlight:"請於購票之前先行申請"},ticketLinkText:"線上購票"}}),l=n(379),d=n(391),m=n(76),f=n(101),h=n(394),v=n.n(h),_=n(385),k={i18n:c,name:"PageRegistrationConferenceTickets",components:{CoreH1:l.default,I18nPageWrapper:r.default,Banner:d.default,ExtLink:m.default,LocaleLink:f.default,TextButton:_.default},data:function(){return{ticketsBanner:v.a,individualPrice:["1,500","1,800"],corporatePrice:"3,000",links:{individual:"https://pycontw.kktix.cc/events/2021-individual",corporate:"https://pycontw.kktix.cc/events/2021-corporate",corporateGroup:"https://forms.gle/3DRBk24HBZLMsV7w6",everybodyPays:"http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays"}}},computed:{bannerStyle:function(){return{"background-image":"url(".concat(this.ticketsBanner,")"),"background-repeat":"no-repeat","background-position":"center"}}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("pageAbstract")},{hid:"description",name:"description",content:this.$i18n.t("pageAbstract")}]}}},y=(n(606),n(5)),component=Object(y.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tickets py-10 md:py-24 lg:py24"},[r("banner",{scopedSlots:t._u([{key:"default",fn:function(){return[r("div",{staticClass:"hidden md:block md:w-full md:h-full",style:t.bannerStyle})]},proxy:!0},{key:"text",fn:function(){return[r("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),r("p",{staticClass:"w-full md:w-3/4 leading-6"},[t._v("\n                "+t._s(t.$t("pageAbstract"))+"\n            ")])]},proxy:!0}])}),t._v(" "),r("i18n-page-wrapper",{staticClass:"i18n__custom pt-8 px-8 md:px-57 lg:px-56"},[r("div",{staticClass:"tickets__individual"},[r("h3",[t._v(t._s(t.$t("individualTicket.title")))]),t._v(" "),r("div",{staticClass:"tickets__summary"},[r("i18n",{attrs:{path:"individualTicket.summary",tag:"p"},scopedSlots:t._u([{key:"highlight",fn:function(){return[r("span",{staticClass:"customHighlight"},[t._v("\n                            "+t._s(t.$t("individualTicket.highlight"))+"\n                        ")])]},proxy:!0}])}),t._v(" "),r("p",[t._v(t._s(t.$t("individualTicket.pySafe")))])],1),t._v(" "),r("div",{staticClass:"tickets__boxWrapper"},t._l(t.$t("individualTicket.type"),(function(e,n){return r("div",{key:"ticket_individual_type_"+n,staticClass:"tickets__box"},[r("h5",[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"tickets__boxPrice"},[r("div",[r("p",[t._v(t._s(e.discount))])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"tickets__boxPriceHighlight"},[t._v("\n                                "+t._s(t.individualPrice[n])+"\n                            ")]),t._v(" "),r("p",[t._v("NTD")])])]),t._v(" "),r("text-button",{attrs:{href:t.links.individual,secondary:""}},[t._v(t._s(t.$t("ticketLinkText")))])],1)})),0),t._v(" "),r("img",{staticClass:"tickets__individualCircle",attrs:{src:n(552),alt:"PyConTW Tickets Page Circle Icon"}})]),t._v(" "),r("div",{staticClass:"tickets__corporate"},[r("h3",[t._v(t._s(t.$t("corporateTicket.title")))]),t._v(" "),r("div",{staticClass:"tickets__summary"},[r("p",t._l(t.$t("corporateTicket.summary"),(function(text,e){return r("i18n",{key:"ticket_corporate_summary_"+e,attrs:{path:"corporateTicket.summary."+e,tag:"span"},scopedSlots:t._u([{key:"discount",fn:function(){return[r("i18n",{staticClass:"customHighlight",attrs:{path:"corporateTicket.discount",tag:"span"},scopedSlots:t._u([{key:"formLink",fn:function(){return[r("ext-link",{attrs:{href:t.links.corporateGroup,underline:""}},[t._v(t._s(t.$t("corporateTicket.formLink")))])]},proxy:!0}],null,!0)})]},proxy:!0}],null,!0)})})),1),t._v(" "),r("p",[t._v(t._s(t.$t("corporateTicket.pySafe")))])]),t._v(" "),r("div",{staticClass:"tickets__boxWrapper"},[r("div",{staticClass:"tickets__box"},[r("h5",[t._v(t._s(t.$t("corporateTicket.type.name")))]),t._v(" "),r("div",{staticClass:"tickets__boxPrice"},[r("div",[r("p",[t._v(t._s(t.$t("corporateTicket.type.discount")))])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"tickets__boxPriceHighlight"},[t._v("\n                                "+t._s(t.corporatePrice)+"\n                            ")]),t._v(" "),r("p",[t._v("NTD")])])]),t._v(" "),r("text-button",{attrs:{href:t.links.corporate,secondary:""}},[t._v(t._s(t.$t("ticketLinkText")))])],1)]),t._v(" "),r("img",{staticClass:"tickets__corporateCircle",attrs:{src:n(604),alt:"PyConTW Tickets Page Circle Icon"}})]),t._v(" "),r("div",{staticClass:"tickets__notices"},[r("h2",[t._v(t._s(t.$t("notices.title")))]),t._v(" "),r("ul",{staticClass:"list-disc"},t._l(t.$t("notices.description"),(function(e,n){return r("i18n",{key:"ticket_notice_"+n,attrs:{path:"notices.description."+n,tag:"li"},scopedSlots:t._u([{key:"reimbursement",fn:function(){return[r("li",{staticClass:"customHighlight"},[t._v("\n                            "+t._s(t.$t("notices.reimbursement"))+"\n                        ")])]},proxy:!0},{key:"everybodyPays",fn:function(){return[r("ext-link",{attrs:{href:t.links.everybodyPays,highlight:"",underline:""}},[t._v(t._s(t.$t("notices.everybodyPays")))])]},proxy:!0},{key:"organizers",fn:function(){return[r("ext-link",{attrs:{href:"mailto:organizers＠pycon.tw",highlight:"",underline:""}},[t._v("organizers＠pycon.tw")])]},proxy:!0}],null,!0)})})),1),t._v(" "),r("img",{staticClass:"tickets__curveDecorate",attrs:{src:n(605),alt:"PyConTW Tickets Page Curve Icon"}}),t._v(" "),r("img",{staticClass:"tickets__noticesCircle",attrs:{src:n(552),alt:"PyConTW Tickets Page Circle Icon"}})]),t._v(" "),r("div",{staticClass:"tickets__financialAid"},[r("h2",[t._v(t._s(t.$t("financialAid.title")))]),t._v(" "),r("ul",{staticClass:"list-disc"},[r("i18n",{attrs:{path:"financialAid.description",tag:"li"},scopedSlots:t._u([{key:"highlight",fn:function(){return[r("span",{staticClass:"customHighlight"},[t._v(t._s(t.$t("financialAid.highlight")))])]},proxy:!0},{key:"financialAidLink",fn:function(){return[r("locale-link",{staticClass:"underline",attrs:{to:"/registration/financial-aid",highlight:""}},[t._v(t._s(t.$t("financialAid.financialAidLink")))])]},proxy:!0}])})],1)])])],1)}),[],!1,null,"1f726044",null);e.default=component.exports}}]);