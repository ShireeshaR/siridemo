/*<!-- Aptrinsic Tag-->*/
/*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("tjYaFWn54t9NY2eFX7ymGBDqZrbaVcBw");
  analytics.page();
  }}();*/

(function(n,t,a,e){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-HVJIYHIL2OZA-2");


//var configtwo={ fullDomainCookie: true};
//(function(n,t,a,e,x){
  //var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
  //n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,//"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-ZAS0GCBJSQQV-2",configtwo);


//var configone={ filterUrls: ["*/Contact.HTML"], filterType: "mask"};
//(function(n,t,a,e,x){
  //var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
  //n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-ZAS0GCBJSQQV-2",configone);






function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

/*//<!-- End Aptrinsic Tag-->
//var userId = Math.floor(Math.Random()*Math.floor(5));
//passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": 949191, // Required for logged in app users
    "email": "useremail@gmail.com",
    "firstName": "Vijay",
    "lastName": "Shankar",
    "signUpDate": new Date().getTime(), //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5
    //"userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"BCCI", //Required
    "name":"Board Of cricket control India",
    "Program": "Platinum" // flat custom attributes
 });*/

//alert('hello');

/*Script for Login Validation */

function allowlogin(usermail){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    
    if(a!= "")
    {
        if(a == "username123@gmail.com" || a == "usernamesr@gmail.com"|| a=="username789@gmail.com" || a=="s***a@gainsight.com")
      {
         alert("valid User");
        
         b = a.substr(8, 3);
         alert("Logged in user id :" + b);
            aptrinsic("identify",
                    {
                        //User Fields
                        "id": b, // Required for logged in app users
                        "email": a,
                        "firstName": "username"+b,
                        "lastName": "lastname",
                        "signUpDate": new Date().getTime(), //unix time in ms
                       // "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
                       // "price" : 95.5,
                        "IsActiveUser": true,
                        "subdomain": "http://shireesha123.epizy.com/Index.HTML",
                        "screen_resolution": screen.width + "x" + screen.height,
                        ////
                        //"userHash": "" // optional transient for HMAC identification
                    },
                    {
                        //Account Fields
                        "id":"0017F00001sOm11", //Required
                        "name":"NLIT HTML Website",
                        "Program": "Platinum" // flat custom attributes
                    });
                     window.location = "http://shireesha123.epizy.com/Index.HTML";

      }
    else
        alert("Invalid User,enter \"username123@gmail.com or username456@gmail.com or username789@gmail.com\"");
    }
    else
    alert("enter \"username123@gmail.com or username456@gmail.com or username789@gmail.com\"");

    
      return b;
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function kcbdisplay() 
{
 aptrinsic('bot', 'show',{});
}
