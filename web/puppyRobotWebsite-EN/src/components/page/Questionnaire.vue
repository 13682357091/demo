<template>
    <div id="questionnaire">
        <div class="content">
            <div class="title">PB Product Survey</div>
            <!-- <div class="descrip">这是一份关于小狗机器人公司新产品puppy cube的调查问卷，只需要短短一分钟！我们尊重您的隐私并郑重承诺，您在问卷中反馈的信息仅用于本产品提升，不会以任何理由泄露。请您根据真实的情况填写，感谢您的支持！</div> -->


            <div class="question_container">
                <div v-for="quest in questions" :key="quest.id" class="QA">
                    <div class="question">{{quest.question}}</div><span v-if="quest.isMustChoice" class="must">&nbsp;*</span>
                    <div class="clear"></div>
                    <div class="answer_con">
                        <div v-for="(a, index) in quest.answer" :key="a" v-if="quest.isChoice && !quest.isMultiChoice">
                            <div class="u_answer_style" :id="'single_' + quest.id + '_' + index" @click="singleSelectAnswer( quest, index+1)" >
                                <input type="radio" class="select_style" :id="quest.id + '_' + index" :value="index+1" :name="quest.id" v-model="quest.answered" /><label v-bind:for="quest.id + '_' + index">{{a}}</label>
                                <input type="text" v-if="quest.hasOther && index == (quest.answer.length - 1)" class="answer_line" v-model="quest.other"/>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div v-for="(a, index) in quest.answer" :key="a" v-if="quest.isChoice && quest.isMultiChoice"> 
                            <div class="u_answer_style" :id="'mulit_' + quest.id + '_' + index" @click="multiSelectAnswer(quest, index+1)" >
                                <input type="checkbox" class="select_style" :id="quest.id + '_' + index" :value="index+1" v-model="quest.answered"/><label v-bind:for="quest.id + '_' + index">{{a}}</label>
                                <input type="text" v-if="quest.hasOther && index == (quest.answer.length - 1)" class="answer_line" v-model="quest.other"/>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="u_answer_style" v-if="!quest.isChoice && !quest.isMultiChoice">
                            <input type="text" class="answer_line" v-model="quest.answered"/>
                        </div>
                    </div>
                    <div class="whitespace"></div>
                </div>
            </div>
            <div class="btn_container">
                <button class="btnCmd" id="commitBtn" @click="checkNcommit()">Submit</button>
            </div>

        </div>

    </div>
</template>

<script>
let _ = require('lodash');
import {postQuestionnaire} from './../axios/api';
export default {
    data() {
        return {
            questions: [
                {
                    id: 1,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '1.	What is the single most important feature for this product?',
                    answer: [
                        'a.	Short-throw projector - project a huge HD screen even in close range',
                        'b.	Vertical or horizontal projection - project on any surface for extreme customization',
                        'c.	Ultra-large screen - 23-100 inch HD viewing experience',
                        'd.	Eye-protection mode - automatically turns off when moved to protect retinas',
                        'e.	One-button casting - easily cast from mobile phones, tablets or computers',
                        'f.	10-point AnytouchTM system - create an interactive touchscreen on any surface',
                        'g.	Android OS - access Google Play store and run Android apps',
                        'h.	300ANSI brightness - Incredibly bright screen for viewing during the day or at night',
                        'i.	5,000 mAh built-in battery - experience 2.5 hours of continuous use while on-the-go',
                        'j.	Only 3.5lbs - portable and lightweight enough to take anywhere',
                        'k.	1280x720 resolution - get HD viewing experience on any surface',
                        'l.	Bluetooth and wi-fi compatible - sync devices and easily connect to the web',
                        'm.	Full-range speakers - get high quality sounds',
                        'n.	Keystone correction - project a crystal clear 100” screen from any angle',
                        'o.	Sleek metal design - simple yet elegant design integrates with your home seamlessly.',
                    ],
                    answered:''
                },
                {
                    id: 2,
                    isChoice: true,
                    isMultiChoice: true,
                    isMustChoice: true,
                    hasOther: false,
                    question: '2.	What are the three most important features for this product? (Select three)',
                    answer: [
                        'a.	Short-throw projector - project a huge HD screen even in close range',
                        'b.	Vertical or horizontal projection - project on any surface for extreme customization',
                        'c.	Ultra-large screen - 23-100 inch HD viewing experience',
                        'd.	Eye-protection mode - automatically turns off when moved to protect retinas',
                        'e.	One-button casting - easily cast from mobile phones, tablets or computers',
                        'f.	10-point AnytouchTM system - create an interactive touchscreen on any surface',
                        'g.	Android OS - access Google Play store and run Android apps',
                        'h.	300ANSI brightness - Incredibly bright screen for viewing during the day or at night',
                        'i.	5,000 mAh built-in battery - experience 2.5 hours of continuous use while on-the-go',
                        'j.	Only 3.5lbs - portable and lightweight enough to take anywhere',
                        'k.	1280x720 resolution - get HD viewing experience on any surface',
                        'l.	Bluetooth and wi-fi compatible - sync devices and easily connect to the web',
                        'm.	Full-range speakers - get high quality sounds',
                        'n.	Keystone correction - project a crystal clear 100” screen from any angle',
                        'o.	Sleek metal design - simple yet elegant design integrates with your home seamlessly.',

                    ],
                    answered:[],
                },
                {
                    id: 3,
                    isChoice: true,
                    isMultiChoice: true,
                    isMustChoice: true,
                    hasOther: true,
                    other: '',
                    question: '3.	What factors do you look at when purchasing a projector? (Select as many as you\'d like)',
                    answer: [
                        'a.	I’ve never considered purchasing a projector before.',
                        'b.	What the price is.',
                        'c.	What the brand is.',
                        'd.	How long the projector will last.',
                        'e.	How bright the image is.',
                        'f.	What resolution I can get.',
                        'g.	How large the screen can be.',
                        'h.	Other (please specify) ',

                    ],
                    answered:[]
                },
                {
                    id: 4,
                    isChoice: true,
                    isMultiChoice: true,
                    isMustChoice: true,
                    hasOther: true,
                    other: '',
                    question: '4.	What would you use this product to do? (Select as many as you’d like)',
                    answer: [
                        'a.	Play single-player games',
                        'b.	Play multiplayer games',
                        'c.	Read through recipes',
                        'd.	Watch movies or shows indoors',
                        'e.	Watch movies or shows outdoors',
                        'f.	Present a business presentation',
                        'g.	Work by making any surface a keyboard and mouse',
                        'h.	Other (please specify)',

                    ],
                    answered:[]
                },
                {
                    id: 5,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '5.	What price range do you think this product falls into?',
                    answer: [
                        'a.	Below $500',
                        'b.	$500-$599',
                        'c.	$600-$699',
                        'd.	$700-$799',
                        'e.	$800-$899',
                        'f.	$900-$999',
                        'g.	$1,000-$1,099',
                        'h.	$1,100-$1,199',
                        'i.	$1,200-$1,299',
                        'j.	$1,300-$1,399',
                        'k.	$1,400-$1,499',
                        'l.	$1,500 and above',

                    ],
                    answered:[]
                },
                {
                    id: 6,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '6.	Actually, the product will cost $1499, how likely are you purchase one?',
                    answer: [
                        'a.	Very likely',
                        'b.	Likely',
                        'c.	Unlikely',
                        'd.	Very unlikely',
                    ],
                    answered:[]
                },
                {
                    id: 7,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '7.	How many projectors do you currently own?',
                    answer: [
                        'a.	I do not own a projector.',
                        'b.	1',
                        'c.	2',
                        'd.	3',
                        'e.	4',
                        'f.	5+',
                    ],
                    answered:[]
                },
                {
                    id: 8,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '8.	How many days hours per day do you watch your TV or projector?',
                    answer: [
                        'a.	I do not own a TV or projector.',
                        'b.	0',
                        'c.	1',
                        'd.	2',
                        'e.	3',
                        'f.	4',
                        'g.	5',
                        'h.	6',
                        'i.	7+',

                    ],
                    answered:[]
                },
                {
                    id: 9,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '9.	What is your gender?',
                    answer: [
                        'a.	Male',
                        'b.	Female',
                        'c.	Other',
                    ],
                    answered:''
                },
                {
                    id: 10,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '10.	What is your age range?',
                    answer: [
                        'a.	18 or younger',
                        'b.	19-24',
                        'c.	25-34',
                        'd.	35-44',
                        'e.	45-54',
                        'f.	55-64',
                        'g.	65 or older',

                    ],
                    answered:''
                },
                {
                    id: 11,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '11.	What is your annual household income?',
                    answer: [
                        'a.	$24,999 or less',
                        'b.	$25,000 - $49,999',
                        'c.	$50,000 - $74,999',
                        'd.	$75,000 - $99,999',
                        'e.	$100,000 - $149,999',
                        'f.	$150,000 or more',
                        'g.	I prefer not to answer',
                    ],
                    answered:''
                },
                {
                    id: 12,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: false,
                    question: '12.	What is your current employment status?',
                    answer: [
                        'a.	Employed full-time',
                        'b.	Employed part-time',
                        'c.	Self-employed',
                        'd.	Unemployed',
                        'e.	Not looking for work',
                        'f.	Homemaker',
                        'g.	Retired',
                        'h.	Student',
                        'i.	I prefer not to answer',

                    ],
                    answered:''
                },
                {
                    id: 13,
                    isChoice: true,
                    isMultiChoice: false,
                    isMustChoice: true,
                    hasOther: true,
                    other: '',
                    question: '13.	What is the highest level of education you have completed?',
                    answer: [
                        'a.	Less than High School',
                        'b.	High School',
                        'c.	Some College/University',
                        'd.	Undergraduate Degree',
                        'e.	Masters/Graduate Degree',
                        'f.	Doctorate',
                        'g.	I prefer not to answer',
                        'h.	Other (please specify)',

                    ],
                    answered:''
                },
                {
                    id: 14,
                    isChoice: false,
                    isMultiChoice: false,
                    isMustChoice: false,
                    hasOther: false,
                    question: '14.	If you’re interested in this product, enter your email address and we’ll let you know when we launch.',
                    answered:''
                },
                ]
        }
    },

    methods: {
        checkNcommit: function(){
            let answeredcollection = [];
            let haveNoAnswerQuestion = false;
            let noAnswerNo = '';
            _.forEach(this.questions, function(quest){
                let temp = {};

                _.forEach(quest, function(value, key) {
                    if(key == 'id'){
                        temp.id = value;
                    } else if (key == 'answered') {
                        if(quest.isMustChoice && (!value || (quest.isMultiChoice && !value.length))){
                            noAnswerNo = noAnswerNo + (noAnswerNo? ', ':'') + quest.id;
                            haveNoAnswerQuestion = true;
                        }
                        if (quest.isChoice && quest.isMultiChoice) {
                            if(quest.hasOther) {
                                value.push(quest.other);
                            }
                            temp.answered = value;
                        }

                        if(quest.isChoice && !quest.isMultiChoice) {
                            if(quest.hasOther) {
                                temp.answered = [quest.other];
                            } else {    
                                temp.answered = [value];
                            }
                            
                        }
                    } 
                });
                answeredcollection.push(temp);
            });

            if(haveNoAnswerQuestion) {
                alert('Question NO. ' + noAnswerNo + ' must be answered. Thanks.');
                return;
            }
            document.getElementById('commitBtn').disabled = true;
            var that = this;
            console.log('Save Survey...');
            postQuestionnaire(answeredcollection).then(res=>{
                if(res.status == 200) {
                    alert('Thanks for your cooperation.');
                    this.initAllAnswer();
                    console.log('Save Success...');
                } else {
                     this.errMsg = "unknow error";
                     console.log('error...');
                }
                document.getElementById('commitBtn').disabled = false;
                
            }).catch(err=>{
                console.log(err, 'fail');
                document.getElementById('commitBtn').disabled = false;
            })

            
        },

        singleSelectAnswer: function(quest, answerNo) {
            if(this.checkNum(quest.answered)){
                document.querySelector("#single_" + quest.id + '_' + (quest.answered-1)).style.background = "#ffffff";
            }
            quest.answered = answerNo;
            document.querySelector("#single_" + quest.id + '_' + (answerNo-1)).style.background = "#eeeeee";
        },

        multiSelectAnswer: function(quest, answerNo) {
            if(_.includes(quest.answered, answerNo)){
                let temp = quest.answered;
                document.querySelector("#mulit_" + quest.id + '_' + (answerNo-1)).style.background = "#ffffff";
                var evens = this.removeEle(quest.answered, answerNo);
            } else {
                document.querySelector("#mulit_" + quest.id + '_' + (answerNo-1)).style.background = "#eeeeee";
                quest.answered.push(answerNo);
            }
        },
        removeEle: function(ele, val) { 
            var index = ele.indexOf(val); 
            if (index > -1) { 
                ele.splice(index, 1); 
            } 
        },

        initAllAnswer: function() {
            //  _.forEach(this.questions, function(quest){
            //      if(quest.isMultiChoice) {
            //          quest.answered = [];
            //      } else {
            //          quest.answered = "";
            //      }
            //      quest.other = "";
                 
            //  });
             this.$router.go(0);
             window.scrollTo(0, 0);
        },

        checkNum: function(input){
            var reg = /^[0-9]+.?[0-9]*$/; 
            var num = input;
            if(!reg.test(num)){
                return false;
            } else {
                return true;
            }
        }

    }
}
</script>
<style lang="scss" scoped>
$hachiSMB: 46px;
.hachiheader {
    width: 100%;
    text-align: center;
}

.headerContent {
    width: 1280px;
    margin: 0 auto;
}

#divNews {
    float: left;
    height: $hachiSMB;
    line-height: $hachiSMB;
    margin-right: 10px;
}

.hachiThridMenu {
    height: $hachiSMB;
}

.solutionName {
    float: left;
    font-size: 13pt;
    height: $hachiSMB;
    line-height: $hachiSMB;
}

.hachiHT {
    width: 100%;
    height: $hachiSMB;
}

.headerLine {
    width: 100%;
    height: 1px;
    background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
}

.content {
    width: 100%;
    max-width: 1010px;
    margin: 0 auto;
    padding: 20px 10px;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.descrip {
    margin-top: 20px;
    text-align: left;
    text-indent: 2em;
}

.question_container {
    text-align: left;
    margin-top: 30px;
}

.question {
    float: left;
    font-weight: bold;
    font-size: 22px;
}

.multichoice {
    color: lightskyblue;
    float:left;
}

.must {
    color: red;
    font-size: 22px;
    
}

.whitespace {
    height: 20px;
    width: 100%;
}

.answer_con {
    margin-left: 15px;
    font-size: 18px;
    line-height: 30px;
}

.btn_container {
    margin-top: 50px;
    margin-bottom: 50px;
}

.btnCmd {
    width: 240px;
    height: 40px;
    font-size: 22px;
}

.select_style {
    width: 20px;
    height: 20px;
    cursor: pointer;
    float: left;
    margin-top: 15px;
}

.u_answer_style {
    line-height: 50px;
    cursor: pointer;
    label {
        cursor: pointer;
    }
}

.u_answer_style_selected {
    line-height: 50px;
    background-color: #eeeeee;
    cursor: pointer;
    label {
        cursor: pointer;
    }
}

.answer_line {
    border: none;
    border-bottom: 1px solid #d6d6d6;;
    line-height: 40px;
    font-size: 18px;
    width: 400px;
}

.clear {
    clear:both;
}


</style>

