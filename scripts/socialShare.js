function handleDocumentLoad(){var e=document.getElementById("twitter-share"),t=document.getElementById("facebook-share");e.addEventListener("click",function(){e.href="http://twitter.com/share?text="+document.title.replace('Ryan Simms | ', '')+"&url="+document.URL}),t.addEventListener("click",function(){t.href="https://www.facebook.com/sharer/sharer.php?u="+document.URL})}document.addEventListener("DOMContentLoaded",handleDocumentLoad);