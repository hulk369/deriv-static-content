var nodemailer = require('nodemailer');

var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'behnaz1rahgozar1@gmail.com',
    pass: 'leultnfaqrxwduxs'
  }
});


var mailOptions = {
   from: 'behnaz1rahgozar1@gmail.com',
   to: 'behnaz@regentmarkets.com',
   subject: 'v3',
   html: `


<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
         <!-- Character encoding -->
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

         <!-- Set 100% scale, allow zoom -->
         <meta name="viewport" content="width=device-width, initial-scale=1">
 
         <!-- Remove default blue colour from links so you can style your own -->
         <meta name="format-detection" content="address=no">
         <meta name="format-detection" content="date=no">
         <meta name="format-detection" content="email=no">
         <meta name="format-detection" content="telephone=no">
         <meta name="x-apple-disable-message-reformatting">
 
         <!-- Prevent iOS 11 from automatically scaling your email -->
         <meta name="x-apple-disable-message-reformatting">
 
         <!-- Enable CSS3 and media queries in Windows Phone 7.5 and higher -->
         <!--[if !mso]><!-->
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <!--<![endif]-->
        
        <!--[if mso]>
            <style type="text/css">
                *, a, p, h1, h2, h3, td {font-family: Arial, sans-serif !important;}
                table {border-collapse: collapse;}
                a {color: #ff444f; font-family: Arial, sans-serif;}
            </style>
        <![endif]-->
        <style type="text/css">
            /* FONTS */
            @media screen {
                /* latin */
                @font-face {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('IBM Plex Sans'), local('IBMPlexSans'), url(https://fonts.gstatic.com/s/ibmplexsans/v7/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('IBM Plex Sans Medium'), local('IBMPlexSans-Medium'), url(https://fonts.gstatic.com/s/ibmplexsans/v7/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdP3pBms.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'), url(https://fonts.gstatic.com/s/ibmplexsans/v7/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
            }
            /* CLIENT-SPECIFIC STYLES */
            body, table, td, a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            table, td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
            img {
                -ms-interpolation-mode: bicubic;
            }
            /* RESET STYLES */
            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
            }
            table {
                border-collapse: collapse !important;
            }
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                font-family: 'IBM Plex Sans', Arial, sans-serif;
            }
            /* iOS BLUE LINKS */
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
            /* ANDROID CENTER FIX */
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
            /* Deriv */
            a, a:visited {
                color: #ff444f;
                text-decoration: none;
            }
            a:hover {text-decoration: underline;}
            a.button {
                text-decoration: none;
                text-align: center;
                line-height: 20px;
                padding: 10px 16px;
                display: inline-block;
                font-weight: bold;
                font-family: 'IBM Plex Sans', Arial, sans-serif; 
                font-size: 14px;
                border-radius: 4px;
                overflow: visible;
                border: 0;
                color: #ffffff;
                background: #ff444f;
            }
            .button:hover {
                background-color: #d43e47;
            }
            a.button-secondary {
                text-decoration: none;
                text-align: center;
                line-height: 20px;
                padding: 8px 14px;
                display: inline-block;
                font-weight: bold;
                font-family: 'IBM Plex Sans', Arial, sans-serif; 
                font-size: 14px;
                border-radius: 4px;
                overflow: visible;
                border: 0;
                color: #ffffff;
                border: 2px solid #ffffff;
                background: transparent;
            }
            h1 {
                font-family: 'IBM Plex Sans', Arial, sans-serif;
                font-size: 48px;
                line-height: 60px;
                font-weight: bold;
                margin: 0;
            }
            h2 {
                font-size: 32px;
                line-height: 40px;
                margin: 0;
            }
            .justify-word {
                text-align: justify;
                text-justify: inter-word;
            }
                        
            @media screen and (max-width: 590px)  {
                .button, .button-secondary {
                    margin: 5px 0 !important;
                }
            }
            /* MOBILE STYLES */
            @media screen and (max-width: 620px) {
                .img-max {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: auto !important;
                }
                .max-width {
                    max-width: 100% !important;
                }
                .mobile-wrapper {
                    width: 100% !important;
                    max-width: 100% !important;
                }
                .mb-lowwidth{
                    width: 70px !important; 
                }
                .mobile-visible {
                    display:inline-block !important;
                }
                .mobile-hide {
                    display:none !important;
                }
                .mobile-nopadding {
                    padding: 0 !important;
                }
                .mobile-side {
                    padding-right: 15px !important;
                    padding-left: 15px !important;
                }
                .mobile-side2 {
                    padding-right: 35px !important;
                    padding-left: 35px !important;
                }
                .mobile-negmargin {
                    margin-top: -15px !important;
                }
                .mobile-center {
                    text-align:center !important;
                }
                .mobile-unvisible {
                    display: none!important;
                } 
                .mobile-bgcolor-gray {
                    background-color: #eeeeee !important;
                }
                .mb-bg-lightgray{
                    background-color: #f5f7fa !important; 
                }
                .mb-padding-top{
                    padding-top: 30px !important;
                }
                .mobile-visible-block {
                    display: block !important;
                }
                .mobile-low-top-padding {
                    padding-top: 1px !important;
                }
                .mb-font-size{
                    font-size: 24px !important;
                }
            }
            @media (prefers-color-scheme: dark ) {
                /* Shows Dark Mode-Only Content, Like Images */
                
                .dark-img { display:block !important; width: auto !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; margin-top:0px !important; visibility:inherit !important; }
                .dark-imglow { display:block !important; width: 100px !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; margin-top:0px !important; visibility:inherit !important; }
        
                /* Hides Light Mode-Only Content, Like Images */
                .light-img { display:none; display:none !important; }
   
                /* Custom Dark Mode Background Color */
                .darkmodeblack { background-color:#0e0e0e !important; }
                .darkmodelowblack { background-color: #202020 !important; }
   
                /* Custom Dark Mode Font Colors */
                 h1, h2, p, span, a, b { color: #ffffff !important; }
                 .darkmodegray { color: #6e6e6e !important; }
                 .darkcolor-subtext{ color: #c2c2c2 !important; }
                 .darkcolor-white{ color: #ffffff !important; }
                 .darkborder{ border-color: #6e6e6e !important; }
   
                /* Custom Dark Mode Text Link Color */
                .link { color: #91ADD4 !important; }
            } 
            /* Shows Dark Mode-Only Content, Like Images */
            [data-ogsc] .dark-img { display:block !important; width: auto !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; margin-top:0px !important; visibility:inherit !important; }
            [data-ogsc] .dark-imglow { display:block !important; width: 100px !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; margin-top:0px !important; visibility:inherit !important; }
            
            /* Hides Light Mode-Only Content, Like Images */
            [data-ogsc] .light-img { display:none; display:none !important; }
  
            /* Custom Dark Mode Background Color */
            [data-ogsc] .darkmodeblack { background-color: #0e0e0e !important;}
            [data-ogsc] .darkmodelowblack { background-color: #202020 !important; }
  
            /* Custom Dark Mode Font Colors */
            [data-ogsc] h1, [data-ogsc] h2, [data-ogsc] p, [data-ogsc] span, [data-ogsc] a, [data-ogsc] b { color: #ffffff !important; }
            [data-ogsc] .darkmodegray { color: #6e6e6e !important; }
            [data-ogsc] .darkcolor-subtext{ color: #c2c2c2 !important; }
            [data-ogsc] .darkcolor-white{ color: #ffffff !important; }
            [data-ogsc] .darkborder{ border-color: #6e6e6e !important; }
  
            /* Custom Dark Mode Text Link Color */
            [data-ogsc] .link { color: #91ADD4 !important; }

            @media (prefers-color-scheme: dark ) and (max-width: 620px)  {
                .dark-lowwidth-m{ display:block !important;width: 70px !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; margin-top:0px !important; visibility:inherit !important;}
                [data-ogsc].dark-lowwidth-m{ display:block !important;width: 70px !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; margin-top:0px !important; visibility:inherit !important; }
            }

        </style>
    </head>
    <body style="background-color: #eeeeee; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">    
             <!-- Email body -->
            <tr>
                <td bgcolor="#eeeeee" align="center" style="padding: 10px 0 0;" class="mobile-nopadding">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" ><tr><td align="center" valign="top" width="600" bgcolor="#ffffff">
                    <![endif]-->
                    <table  border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; max-width: 600px;" class="darkmodeblack">
                        <!-- START HERO -->
                        <tr>
                            <td  align="center" style="padding: 30px 30px 10px;" class="darkmodeblack">
                                <a href="https://www.deriv.com">
                                    <img class="light-img mb-lowwidth" src="https://static.deriv.com/logos/deriv-black.png" width="100" style="display: block;" alt="Deriv.com">
                                    <div class="dark-imglow" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;" align="center">
                                        <img src="https://static.deriv.com/logos/deriv-white.png" width="100" height="18" class="dark-lowwidth-m" alt="Deriv.com" style="color: #ffffff; font-family:'proxima_nova', Helvetica, Arial, sans-serif; text-align:center; font-weight:bold; font-size:36px; line-height:40px; text-decoration: none; margin: 0 auto; padding: 0;" border="0" />
                                    </div>                                   
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#fff" align="center"  class="darkmodeblack">
                                <input type="image" class="g-img" src="https://static.deriv.com/email/images/header/doller-man.png"  width= "82%" style="display: block;outline:none"/>
                            </td>
                        </tr>   
                        <!-- END HERO --> 
                        <tr>
                            <td align="center" style="padding: 20px 90px 20px; background-color: #fff;" class="mobile-side2 darkmodeblack">
                                <p style="font-family: 'IBM Plex Sans', Arial, sans-serif; font-size:30px; line-height: 1.5 ; color: #333333; font-weight: 700;margin:0;" class="mb-font-size darkcolor-subtext">A more refined payment agent list</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding: 10px 30px 0; background-color: #fff;" class="mobile-side darkmodeblack">
                                <p style="font-family: 'IBM Plex Sans', Arial, sans-serif; font-size: 16px; line-height: 1.5 ; color: #333333; font-weight: 400;margin:0;" class="darkcolor-subtext">We’ve improved the list of payment agents (PAs) in the <a href="https://app.deriv.com/cashier/deposit/" style="text-decoration: none; mso-hide:all; color: #ff444f !important;">cashier page</a>. Here’s what’s new:</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding: 0 65px 10px; background-color: #fff;" class="mobile-side darkmodeblack">
                                <ul class="darkcolor-subtext">
                                    <li class="darkcolor-subtext"><p style="font-family: 'IBM Plex Sans', Arial, sans-serif; color: #333333; font-size: 16px; font-weight: 400; line-height: 24px; padding: 3px;margin:0;" class="darkcolor-subtext"><span class="darkcolor-subtext">PAs are listed randomly (not alphabetically anymore). This means that the list is refreshed every time, giving all PAs an equal chance of appearing at the top of the list</p></li>
                                    <li class="darkcolor-subtext"><p style="font-family: 'IBM Plex Sans', Arial, sans-serif; color: #333333; font-size: 16px; font-weight: 400; line-height: 24px; padding: 3px;margin:0;" class="darkcolor-subtext"><span class="darkcolor-subtext">We’ve included details about each PA such as minimum and maximum limits, commission %, and supported payment methods.</p></li>
                                    <li class="darkcolor-subtext"><p style="font-family: 'IBM Plex Sans', Arial, sans-serif; color: #333333; font-size: 16px; font-weight: 400; line-height: 24px; padding: 3px;margin:0;" class="darkcolor-subtext"><span class="darkcolor-subtext">Clients can search for PAs via name and filter the search results by payment methods.</p></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding: 0 30px 45px; background-color: #ffffff;" class="mobile-side darkmodeblack">
                                <p style="font-family: 'IBM Plex Sans', Arial, sans-serif; font-size: 16px; line-height: 1.5 ; color: #333333; font-weight: 400;margin:0;" class="darkcolor-subtext">If you have any questions or issues, <a href="https://deriv.com/?is_livechat_open=true" style="color: #ff444f !important">contact us via live chat</a>.</p>
                            </td>
                        </tr>                  
                    </table>
                    <!--[if (gte mso 9)|(IE)]></td></tr></table>
                    <![endif]-->
                </td>
            </tr>   
            <!-- End Email body-->                                                       
            <!-- FOOTER -->
            <tr>
                <td bgcolor="#eeeeee" align="center" style="padding: 0 0 10px;" class="mobile-nopadding">
                    <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600"><tr><td align="center" valign="top" width="600" bgcolor="#ffffff">
                    <![endif]-->
                    <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="darkmodeblack">
                        <!-- SOCIAL -->
                        <tr>
                            <td align="center" style="padding: 20px 20px 15px; color: #ffffff; font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" class="darkmodeblack">
                                <p style="margin: 0;">
                                    <a href="https://twitter.com/derivdotcom" style="text-decoration: none;">
                                        <img src="https://static.deriv.com/email/images/icons/twitter.png" height="32" width="32" alt="Deriv.com on Twitter" title="Deriv.com on Twitter" />
                                    </a>&nbsp;&nbsp;
                                    <a href="https://www.facebook.com/derivdotcom" style="text-decoration: none;">
                                        <img src="https://static.deriv.com/email/images/icons/facebook.png" height="32" width="32" alt="Deriv.com on Facebook" title="Deriv.com on Facebook" />
                                    </a>&nbsp;&nbsp;
                                    <a href="https://www.instagram.com/deriv_official/" style="text-decoration: none;">
                                        <img src="https://static.deriv.com/email/images/icons/instagram.png" height="32" width="32" alt="Deriv.com on Instagram" title="Deriv.com on Instagram" />
                                    </a>&nbsp;&nbsp;
                                    <a href="https://t.me/derivdotcomofficial" style="text-decoration: none;">
                                        <img src="https://static.deriv.com/email/images/icons/telegram.png" height="32" width="32" alt="Deriv.com on Telegram" title="Deriv.com on Telegram" />
                                    </a>&nbsp;&nbsp;
                                    <a href="https://www.youtube.com/c/Derivdotcom" style="text-decoration: none;">
                                        <img src="https://static.deriv.com/email/images/icons/youtube.png"" height="32" width="32" alt="Deriv.com on Youtube" title="Deriv.com on Youtube" />
                                    </a>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#fff" align="center" style="color: #646464;font-family: 'IBM Plex Sans', Arial, sans-serif;font-size: 12px;font-weight: 500;line-height: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" class="darkmodeblack">
                                <p style="padding: 0px 10px;font-family: 'IBM Plex Sans', Arial, sans-serif; color: #646464; font-size: 12px; font-weight: 400; line-height: 16px; margin: 5px 0px 5px 0px;"><a href="https://www.deriv.com/help-centre" style="color: #ff444f !important">Help Centre</a>&nbsp;&nbsp;&nbsp;<span class="darkmodegray">|</span>&nbsp;&nbsp;&nbsp;<a href="https://www.deriv.com/terms-and-conditions/" style="color: #ff444f !important">Terms and conditions</a>&nbsp;&nbsp;&nbsp;<span class="darkmodegray">|</span>&nbsp;&nbsp;&nbsp;<a href="https://deriv.com/tnc/security-and-privacy.pdf" style="color: #ff444f !important">Security and privacy</a></p>
                                <p style="padding: 0 10px;font-family: 'IBM Plex Sans', Arial, sans-serif; color: #999999; font-size: 12px; font-weight: 400; line-height: 16px; margin: 0px 0px 5px 0px;" class="darkmodegray">No longer want to receive these emails? <a href="https://app.deriv.com/account/personal-details" style="mso-hide:all; color: #ff444f !important;" class="darkcolor-subtext">Unsubscribe</a></p>
                            </td>
                        </tr>                        
                        <tr>
                            <td  align="center" style="padding: 30px;" class="darkmodeblack">
                                <a href="https://www.deriv.com">
                                    <img src="https://static.deriv.com/logos/deriv-gray.png" width="66" height="12"  style="display: block;" alt="Deriv.com">                                   
                                </a>
                            </td>
                        </tr>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                        </td></tr></table>
                    <![endif]-->
                </td>
            </tr>
        </table>
    </body>
    <!-- end message template -->
</html>




`
 }

mail.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
