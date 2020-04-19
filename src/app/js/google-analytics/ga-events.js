// $(document).ready(function(){

//     //MAIN MENU ACTIONS DESKTOP
//     $('#menu-link-all-solutions').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/all-solutions', 'name':'All Solutions', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-web-apps').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/mobile-apps', 'name':'Mobile Apps', 'isMobile':false}
//               console.log('heyyyyy', gtagParameters.link);

//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-web-design').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/web-design', 'name':'Web Design', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-demo').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/demo', 'name':'Demo', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });


//     $('#menu-link-security').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/security', 'name':'Security', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-pricing').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/pricing', 'name':'Pricing', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-portfolio').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/portfolio', 'name':'Portfolio', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-in-the-media').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/in-the-media', 'name':'In The Media', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-schedule-demo').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/demo', 'name':'Schedule Demo', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#menu-link-email').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'mailTo:mark@thebeardedtek.com', 'name':'Email', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });


//     //MOBILE MENU LINKS

//     $('#mobile-menu-link-all-solutions').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/all-solutions', 'name':'All Solutions', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#mobile-menu-link-web-apps').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/mobile-apps', 'name':'Mobile Apps', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#mobile-menu-link-web-design').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/web-design', 'name':'Web Design', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });


//     $('#mobile-menu-link-demo').click(function(){
//             let gtagParameters = {'position':'header', 'component':'menu', 'link':'/demo', 'name':'Demo', 'isMobile':true}
//             ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//         });

//     $('#mobile-menu-link-security').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/security', 'name':'Security', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#mobile-menu-link-pricing').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/pricing', 'name':'Pricing', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#mobile-menu-link-portfolio').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/portfolio', 'name':'Portfolio', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#mobile-menu-link-in-the-media').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/in-the-media', 'name':'In The Media', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#mobile-menu-link-schedule-demo').click(function(){
//         let gtagParameters = {'position':'header', 'component':'menu', 'link':'/demo', 'name':'Schedule Demo', 'isMobile':true}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });


//     //FOOTER MENU LINKS
//     $('#footer-menu-link-terms').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'menu', 'link':'/terms', 'name':'Terms & Conditions', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });

//     $('#footer-menu-link-privacy').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'menu', 'link':'/privacy', 'name':'Privacy Policy', 'isMobile':false}
//         ga('send', 'event', 'Menu', gtagParameters.name, gtagParameters.link);
//     });



//     //SOCIAL MEDIA LINKS
//     $('#footer-social-media-facebook').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'social', 'link':'facebook', 'name':'Facebook Footer Link', 'isMobile':false}
//         ga('send', 'event', 'Social', gtagParameters);
//     });

//     $('#footer-social-media-twitter').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'social', 'link':'twitter', 'name':'Twitter Footer Link', 'isMobile':false}
//         ga('send', 'event', 'Social', gtagParameters);
//     });

//     $('#footer-social-media-instagram').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'social', 'link':'instagram', 'name':'Instagram Footer Link', 'isMobile':false}
//         ga('send', 'event', 'Social', gtagParameters);
//     });

//     $('#footer-social-media-github').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'social', 'link':'github', 'name':'Github Footer Link', 'isMobile':false}
//         ga('send', 'event', 'Social', gtagParameters);
//     });

//     $('#footer-social-media-linkedin').click(function(){
//         let gtagParameters = {'position':'footer', 'component':'social', 'link':'linkedin', 'name':'LinkedIn Footer Link', 'isMobile':false}
//         ga('send', 'event', 'Social', gtagParameters);
//     });





// });
