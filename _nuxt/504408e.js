(window.webpackJsonp=window.webpackJsonp||[]).push([[68,9,17],{373:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("0573e392",content,!0,{sourceMap:!1})},374:function(t,e,o){var content=o(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("006dd662",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o(373)},376:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),n.locals={},t.exports=n},377:function(t,e,o){"use strict";o(374)},378:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,"h1[data-v-12ca906b]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0.75rem}@media (min-width: 768px){h1[data-v-12ca906b]{margin-bottom:2.25rem}h1[data-v-12ca906b]{font-size:1.5rem;line-height:2rem}}h1[data-v-12ca906b]{color:#f3cc39}",""]),n.locals={},t.exports=n},379:function(t,e,o){"use strict";o.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(o(377),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center font-serif"},[o("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"12ca906b",null);e.default=component.exports},380:function(t,e,o){"use strict";o.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},r=(o(375),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},659:function(t,e,o){"use strict";o.r(e);var n=o(380),r=o(379),l=o(101),c=o(76),h=o(63),d={i18n:Object(h.a)({"en-us":{title:"Call for Proposals",intro:"The Call for Proposals is now open. PyCon 2021 Taiwan is accepting talks and tutorials!",importantDates:["Important Dates",["Talks & Tutorial CFP begins: March 1st","Talks & Tutorial CFP ends: Apr 26th, 23:59:59 ({AoE})","Announcement of acceptance: June 27th"],["All talks will be recorded, edited then uploaded to {pyvideo} by the PyCon Taiwan committee, unless the speaker requests otherwise. See more info about the {recording}.","All speakers are required to buy their own conference tickets ({everyoneContributesPolicy})."]],howToSubmit:["How to Submit Your Proposal",["You need to {signUp} for a new account on {main}. With an activated account, you can fill up the speaker profile and create new proposals through the {myPyCon} page.","We encourage you to submit the proposal as early as possible. You are welcomed to submit multiple proposals.","Due to the effects of COVID-19, you can choose to give your talk or tutorial remotely. If we make sure the offline speaking will take place as scheduled, you can still decide whether to come to the meeting venue in person."]],"guidelines-title":"Guidelines for Proposal Submission","guidelines-talks":["Talks",["We accept a broad range of Python-related proposals from academic research to commercial projects, case studies, or soft topics such as running a community, making good communication, mental health, etc. So basically, if you are reading this, just submit your proposal!","We encourage speakers to talk about your own Python package or application, your experience of learning Python or hosting a Python community, etc. Talks on advanced topics are highly welcomed as well. For your inspiration, our committee has suggested that they’d love to see talks on the following topics: FinTech, Community, A.I, Data Analytics, IoT, Machine Learning, Testing, etc.","When considering different topics, you may be interested in reviewing selected speeches over the past few years at PyCon Taiwan.","{previousConfs}","Talks will be lasting either 45 minutes, 30 minutes, or 15 minutes, depends on you, you’ll measure and decide how much time you need. Note that the length of a talk includes setup and Q&A session.","Talks can be given in either English, Mandarin or Taiwanese Hokkien.","If it’s your first time to propose a talk at PyCon Taiwan or a conference in general, please have a look at “{talk}” to learn more about conventions, and it might help you organize your thoughts on your proposal.","This year, we will invite part of the unselected talks to share at the local communities. PyCon Taiwan will partially compensate for your transportation cost."]],"guidelines-tutorials":["Tutorials",["Similar to talks, we don’t pose limitations on tutorial topics. This year, tutorials are free and the length has been changed to 1 hour and 30 minutes. It will be at the same time as the conference. The guideline for tutorial submission is based on the guideline for talks, so make sure you have read “{talk}”. On top of that, We have some special requirements for tutorial submission, please refer to “{tutorial}” for more information."]],reviewProcess:["Proposals Review Process","After the Call for Proposals ends, and before the announcement of acceptance, the PyCon TW 2021 Proposals Review Committee is going to review the proposals and give scores and provide feedback. The process consists of three phases: ",[["Stage 1 Review:","Reviewers are going to score and give feedback. This will last for about 2 to 3 weeks"],["Modification Step:","According to reviewers’ comments, you can modify your proposal through the dashboard. This step lasts for about 1 to 2 weeks"],["Stage 2 Review:","Reviewers are going to re-score and re-give feedback to the modified proposals"]]],modificationStep:["Proposals Review Process",["Between the stage 1 and stage 2 review, you can see the feedback from the reviewer. You may modify your proposal according to reviewers’ comments or feedback. If you want to make your change obvious to the reviewers, you can point out the ID of the comment, and mention about what you’ve modified according to the comment in the “Supplementary” section, e.g. “#4: Updated the time management for xxx phase”","If you have any questions, please contact us at {programMail}"]],inappropriate:["Inappropriate words or images",["Please note that PyCon Taiwan is a conference where the audience comes from different cultural backgrounds. Some jokes may be rude to others. If you want to add some humorous images or words to your speech, please double check if there is any possibility of offense, and refer to our {coc}."]],terms:{recording:"recording release",signUp:"sign up",talk:"How to Propose a Talk?",tutorial:"How to Propose a Tutorial?",coc:"Code of Conduct"},og:{title:"Call for Proposals",description:"The Call for Proposals is now open. PyCon 2021 Taiwan is accepting talks and tutorials!"}},"zh-hant":{title:"稿件募集",intro:"PyCon Taiwan 2021 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！",importantDates:["重要日期",["議程、課程 開放徵稿：3 月 1 日","議程、課程 投稿截止：4 月 26 日 23:59:59 ({AoE})","稿件錄取通知： 6 月 27 日"],["演講（talk）預設將會被錄影、編輯。之後 PyCon Taiwan 會把錄影編輯後上傳至 {pyvideo}，除非講者特別要求。參考{recording}。","每一位講者皆需購買會議門票（{everyoneContributesPolicy}）"]],howToSubmit:["如何提交您的稿件",["您需要先在 {main} {signUp}一個新的帳號。在啟用您的帳號之後，就可以填寫講者資訊，並從 My PyCon 頁面中建立新的投搞。","我們強烈建議您儘早送出您的投稿。","因應 COVID-19 疫情，今年演講與專業課程開放您自行選擇是否採取遠端進行，即使後續疫情穩定，實體會議確定舉辦，您也可以依照自身狀況選擇是否親自前來。"]],"guidelines-title":"稿件提交指南","guidelines-talks":["演講（Talk）",["我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。","若您在金融科技（FinTech）、機器學習（Machine Learning）、物聯網（IoT）、硬體（Sensors, RaspberryPi, Gadgets）等相關領域上有卓越成就與發現，我們誠摯歡迎您的投稿。如果講師有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，也都邀請您投稿到 PyCon Taiwan。當然我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。另外，如果您的演講是關於特定的 Python 套件，請確保它已被廣泛使用，或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。","在考慮不同的主題時，您可能會有興趣回顧過去幾年在 PyCon Taiwan 的演講主題","{previousConfs}","您可以投稿長度為 15 分鐘、 30 分鐘或 45 分鐘的演講，根據您自己評估所需的時間而決定。需要注意的是，議程的時間長度將會包含開場與 Q&A 的時間。","議程可以使用的語言為：英文、中文、台語。","若您是第一次投稿 PyCon Taiwan，請您參考「{talk}」一文，以了解更多相關規範以及協助您組織投稿的想法。","此外，我們會邀請部分未錄取 PyCon Taiwan 的講者到在地社群進行分享，PyCon Taiwan 將提供部分交通補助。"]],"guidelines-tutorials":["專業課程（Tutorial）",["同演講，我們對專業課程的主題並不做任何限制。專業課程為一個半小時的活動，不額外收費，將與 PyCon Taiwan 同時進行，場地待定。投稿課程的方針基於演講，所以請先閱讀「{talk}」一文，除了該文中的事項外，我們對課程投稿本身有額外的規範，請參見「{tutorial}」一文。"]],reviewProcess:["審稿流程","在投稿截止與稿件錄取通知之間是審稿的時段，每篇演講和專業課程的稿件將會由 PyCon Taiwan 的審稿委員會進行評分與評論。審稿分成三個階段：",[["第一階段審稿：","審稿者會依據投稿內容給予評分與評論，此階段大約為期二到三週，在此階段我們不會看到您的名字。"],["修稿階段：","根據第一階段審稿者的評論與建議，您可以修改稿件，此階段大約為期一到二週。"],["第二階段審稿：","審稿者會依據修改後的內容重新評分與評論，此階段大約為期二週。"]]],modificationStep:["修稿階段",["在第一與第二階段審稿之間的修稿階段，您可以依據審稿者給予的評論，修改您的稿件。若您想強調您根據某個評論進行了某個更改，您可以在「補充說明」欄位中指明評論的編號以及說明您所做的修改，例如：「#4: 修改了 xxx 段落的時間分配」。或是如果您對於某個評論持反對意見，也可以依照同樣的方式向審稿者回覆。","如果您有任何疑問，請發送電子郵件至 {programMail}"]],inappropriate:["不適當的言語或圖像",["請注意，PyCon Taiwan 的聽眾來自不同文化背景，某些團體認為有趣的笑話對於其他團體來說可能是無禮的。如果您想在演講過程加入一些幽默的圖像或用詞，請再三檢視是否會有冒犯的可能，並請參考我們的{coc}。"]],terms:{recording:"錄影釋出",signUp:"註冊",talk:"如何投稿演講？",tutorial:"如何投稿專業課程？",coc:"行為準則"},og:{title:"稿件募集",description:"PyCon Taiwan 2021 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！"}}}),name:"PageSpeakingCfp",components:{I18nPageWrapper:n.default,CoreH1:r.default,ExtLink:c.default,LocaleLink:l.default},computed:{myPyConLink:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard")},signUpLink:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/accounts/login")},previousConfLinks:function(){return[["PyCon Taiwan 2020","https://tw.pycon.org/2020/".concat(this.$i18n.locale,"/conference/schedule/")],["PyCon Taiwan 2019","https://tw.pycon.org/2019/".concat(this.$i18n.locale,"/events/schedule/")],["PyCon Taiwan 2018","https://tw.pycon.org/2018/".concat(this.$i18n.locale,"/events/schedule/")],["PyCon Taiwan 2017","https://tw.pycon.org/2017/".concat(this.$i18n.locale,"/events/schedule/")]]}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},f=o(5),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i18n-page-wrapper",[o("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),o("i18n",{attrs:{path:"intro",tag:"p"}}),t._v(" "),o("i18n",{attrs:{path:"importantDates.0",tag:"h2"}}),t._v(" "),o("ul",t._l(t.$t("importantDates.1"),(function(e,i){return o("i18n",{key:"cfp_dates_"+i,attrs:{path:"importantDates.1."+i,tag:"li"},scopedSlots:t._u([{key:"AoE",fn:function(){return[o("ext-link",{attrs:{href:"https://www.timeanddate.com/worldclock/converter.html?iso=20210427T115900&p1=tz_aoe&p2=241&p3=1440",highlight:""}},[t._v("AoE")])]},proxy:!0}],null,!0)})})),1),t._v(" "),t._l(t.$t("importantDates.2"),(function(e,i){return o("i18n",{key:"cfp_dates_description_"+i,attrs:{path:"importantDates.2."+i,tag:"p"},scopedSlots:t._u([{key:"pyvideo",fn:function(){return[o("ext-link",{attrs:{href:"https://pyvideo.org",highlight:""}},[t._v("pyvideo.org")])]},proxy:!0},{key:"recording",fn:function(){return[o("locale-link",{attrs:{to:"/speaking/recording",highlight:""}},[t._v(t._s(t.$t("terms.recording")))])]},proxy:!0},{key:"everyoneContributesPolicy",fn:function(){return[o("ext-link",{attrs:{href:"https://pyfound.blogspot.com/2017/10/psfs-october-board-meeting.html",highlight:""}},[t._v("Everyone Contributes Policy")])]},proxy:!0}],null,!0)})})),t._v(" "),o("i18n",{attrs:{path:"howToSubmit.0",tag:"h2"}}),t._v(" "),t._l(t.$t("howToSubmit.1"),(function(e,i){return o("i18n",{key:"cfp_how_to_submit_"+i,attrs:{path:"howToSubmit.1."+i,tag:"p"},scopedSlots:t._u([{key:"signUp",fn:function(){return[o("ext-link",{attrs:{href:t.signUpLink,highlight:""}},[t._v(t._s(t.$t("terms.signUp")))])]},proxy:!0},{key:"main",fn:function(){return[o("locale-link",{attrs:{to:"/",highlight:""}},[t._v("tw.pycon.org")])]},proxy:!0},{key:"myPyCon",fn:function(){return[o("ext-link",{attrs:{href:t.myPyConLink,highlight:""}},[t._v("My PyCon")])]},proxy:!0}],null,!0)})})),t._v(" "),o("i18n",{attrs:{path:"guidelines-title",tag:"h2"}}),t._v(" "),o("i18n",{attrs:{path:"guidelines-talks.0",tag:"h3"}}),t._v(" "),t._l(t.$t("guidelines-talks.1"),(function(e,i){return o("i18n",{key:"cfp_guidelines_talks_"+i,attrs:{path:"guidelines-talks.1."+i,tag:"p"},scopedSlots:t._u([{key:"previousConfs",fn:function(){return[o("ul",{staticClass:"list-disc"},t._l(t.previousConfLinks,(function(e,n){return o("li",{key:"cfp_previous_conf_"+n},[o("ext-link",{attrs:{href:e[1],highlight:""}},[t._v("\n                        "+t._s(e[0])+"\n                    ")])],1)})),0)]},proxy:!0},{key:"talk",fn:function(){return[o("locale-link",{attrs:{to:"/speaking/talk",highlight:""}},[t._v(t._s(t.$t("terms.talk")))])]},proxy:!0}],null,!0)})})),t._v(" "),o("i18n",{attrs:{path:"guidelines-tutorials.0",tag:"h3"}}),t._v(" "),t._l(t.$t("guidelines-tutorials.1"),(function(e,i){return o("i18n",{key:"cfp_guidelines_tutorials_"+i,attrs:{path:"guidelines-tutorials.1."+i,tag:"p"},scopedSlots:t._u([{key:"talk",fn:function(){return[o("locale-link",{attrs:{to:"/speaking/talk",highlight:""}},[t._v(t._s(t.$t("terms.talk")))])]},proxy:!0},{key:"tutorial",fn:function(){return[o("locale-link",{attrs:{to:"/speaking/tutorial",highlight:""}},[t._v(t._s(t.$t("terms.tutorial")))])]},proxy:!0}],null,!0)})})),t._v(" "),o("i18n",{attrs:{path:"reviewProcess.0",tag:"h2"}}),t._v(" "),o("i18n",{attrs:{path:"reviewProcess.1",tag:"p"}}),t._v(" "),o("ul",{staticClass:"list-disc"},t._l(t.$t("reviewProcess.2"),(function(e,i){return o("li",{key:"cfp_review_process_stage_"+i},[o("b",[t._v(t._s(e[0]))]),t._v("\n            "+t._s(e[1])+"\n        ")])})),0),t._v(" "),o("i18n",{attrs:{path:"modificationStep.0",tag:"h3"}}),t._v(" "),t._l(t.$t("modificationStep.1"),(function(e,i){return o("i18n",{key:"cfp_modification_step_"+i,attrs:{path:"modificationStep.1."+i,tag:"p"},scopedSlots:t._u([{key:"programMail",fn:function(){return[o("ext-link",{attrs:{href:"mailto:program@pycon.tw",highlight:""}},[t._v("\n                program@pycon.tw\n            ")])]},proxy:!0}],null,!0)})})),t._v(" "),o("i18n",{attrs:{path:"inappropriate.0",tag:"h3"}}),t._v(" "),t._l(t.$t("inappropriate.1"),(function(e,i){return o("i18n",{key:"cfp_inappropriate_"+i,attrs:{path:"inappropriate.1."+i,tag:"p"},scopedSlots:t._u([{key:"coc",fn:function(){return[o("locale-link",{attrs:{to:"/about/code-of-conduct",highlight:""}},[t._v(t._s(t.$t("terms.coc")))])]},proxy:!0}],null,!0)})}))],2)}),[],!1,null,"843f9a2e",null);e.default=component.exports}}]);