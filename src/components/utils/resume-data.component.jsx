import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default {
    name:'Shohruzjon Abdivakilov',
    title:'Front-end developer',

    birthday:'11-11-2001',
    email:'abdivakilov1981@gmail.com',
    address:'warsaw, vovidoship',
    phone:'+9989742342',


    socials:{
        Linkedin:{
            link:'https://www.linkedin.com/in/abdivakilov-shohruzjon-3417941a7',
            text:'My linkedin',
            icon:<LinkedInIcon/>,
        },
        Github:{
            link:'https://github.com/shohruzjon-tech',
            text:'Shohruzjon-tech',
            icon:<GitHubIcon/>,
        },
    },
    headerSocials:{
         Linkedin:{
            link:'https://www.linkedin.com/in/abdivakilov-shohruzjon-3417941a7',
            text:'My linkedin',
            icon:<LinkedInIcon/>,
        },
        Github:{
            link:'https://github.com/shohruzjon-tech',
            text:'My github',
            icon:<GitHubIcon/>,
        },
        Facebook:{
            link:'https://www.facebook.com/shohruzjon.abdivakilov/',
            text:'My github',
            icon:<FacebookIcon/>,
        },
        Instagram:{
            link:'https://www.instagram.com/shohruzjon_a/',
            text:'My github',
            icon:<InstagramIcon/>,
        },
    },
    workHistory:{
        work1:{
            title:"Mern-stack developer",
            duriation:'2021 - present',
            description:`As a web and mobile developer, I have worked in a small company in my country. React native and firebase was the main tool creating mobile
                    application. And for the website of the system I worked with React js, Redux,
                   Redux-saga, GraphQL and Apollo , firebase and other tools for data
                   normalization.`
        },
        work2:{
            title:"Front-end developer",
            duriation:'2021 - present',
            description:`As a Front-end developer, I have been  working in Upwork.com and Freelancer.com as  a freelancer.`
        },

    },
    educationHistory:{
        univer1:{
            title:"Vistula University",
            duriation:'2021 - present',
            description:`I am currently taking Computer science courses as my major in the university.`
        },
        univer2:{
            title:"Woosong university",
            duriation:'2019 - 2021',
            description:`Media and Communication arts was my major in the university.`
        },
        univer3:{
            title:"Engineering college",
            duriation:'2017 - 2019',
            description:`I studied in an Engineering college as the part of my High school degree located in Kashkadarya, Uzbekistan and took Computer engineering courses as my major.`
        },
    },

     about:{
        title:'About me',
        text:`
        Experienced Front-end web developer and junior mobile developer finished 
        Media and communication arts in South Korea and taking Bachelor???s degree in 
        Computer Science and familiarity with several languages. Seeking for the position
        of a web developer to utilize teamwork and leadership skills in coordinating the
        effort of developers. Also, bringing exceptional skills in designing, coding, 
        testing, and implementing customization to exceed customer expectations.
        `
    },
   services:{
       title:'My Services',
       types:{
           type1:{
               text:'Massive  experience in web development will help you to increase your business.',
               title:"Web development",
               imgUrl:'https://pic.onlinewebfonts.com/svg/img_486239.png'
           },
           type2:{
               text:'UX/UI design skills always help me to attract more clients.',
               title:"UX/UI design",
               imgUrl:'https://cdn2.iconfinder.com/data/icons/information-technology-5/66/18-512.png'
           },
       
           type3:{
               text:'I deliver your business as fast as possible.',
               title:"Fast Delivery",
               imgUrl:'https://cdn2.iconfinder.com/data/icons/logistics-delivery-4-3/66/166-512.png'
           },
       }
   },

   skills:{
        code:{
           title:"Front-end developer",
           skillSet:{
               react:{
                   title:"React JS",
                   progress:88,
               },
               javaScript:{
                   title:"JavaScript",
                   progress:80,
               },
               html:{
                   title:'HTML',
                   progress:95
               },
               css:{
                   title:'CSS',
                   progress:95,
               },
               scss:{
                   title:"scss",
                   progress:85,
               },
           }
       },
       tools:{
           title:'Tools',
           skillSet:{
               redux:{
                   title:'Redux',
                   progress:85
               },
               graphql:{
                   title:"GraphQL",
                   progress:45
               },
               git:{
                   title:"Git & Github",
                   progress:70
               },
               figma:{
                   title:"Figma",
                   progress:60
               },
               photoshop:{
                   title:"Photoshop",
                   progress:70
               }
           }
       },
       database:{
           title:"Database",
           skillSet:{
               firebase:{
                    title:"Firebase",
                    progress:80
                 },
                mongodb:{
                    title:"MongoDB",
                    progress:40
                }
           },

       }
   },

   portfolios:{
       uzstore:{
           link:'https://uzstore.firebaseapp.com',
           imgUrl:'https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fadmin%2FScreenshot%20(107).png?alt=media&token=c990778c-2d3a-49c2-b9a5-a0006f7df82f',
           title:'UZSTORE MARKET',
           text:'Fully functional e-commerce website for business startup'
       },
       crown:{
           imgUrl:'https://www.freelogoservices.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfM5JXk03U6jkLP2mE1NmkXoBkwyXQgjvBo...fU6KRwF9xRV2lVKJ8s8jiZ6V4kTihpi6W7TZtUKBiE7jScF',
           title:'UZSTOREAPP',
           text:'Mobile application of UZSTORE MARKET  for admin control'
       },
       uzstoreapp:{
           link:'https://my-test-8f997.firebaseapp.com',
           imgUrl:'https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fposter%2Fth%20(2).jpg?alt=media&token=7752ba6f-8253-4137-944f-1d511f674eb9',
           title:'CRWN Clothing ltd',
           text:'Fully functional and stripe payment methods integrated website'
       }
   }
}