// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function clickEvent1() {
  let list = "<lh> Suicidal Thoughts: </lh>"+"<li>Talking about suicide</li>" + "<li>Feeling disconnected from your emotions</li>" + "<li>Preoccupation with death</li>" + "<li>Self-loathing, self-hatred </li>" + "<li> No hope for the future </li>" + "<li>Withdrawing from others.</li>" + "<li>Self-destructive behaviour</li> " + "<br><lh> Self harm:</lh>" + "<li>unexplained cuts, bruises or <br> cigarette burns, usually on their wrists, arms, thighs and chest</li>" + "<li> keeping themselves fully covered at all times, <br> even in hot weather</li>" + "<li>signs of depression,such as low mood,<br> tearfulness or a lack of motivation or interest in anything</li>" + "<li>changes in eating habits </li>" + "<li>signs of alcohol or drug misuse</li>"

document.getElementById("output").innerHTML = list;
document.getElementById("symptoms").innerHTML = "Symptoms of Suicidal thoughts or<br> Self harm  may include:" 
}

function clickEvent2() {
  let list = "<lh> Obsessive Thoughts:</lh>"+"<li>Fear of deliberately harming yourself or others</li>" + "<li>Fear of harming yourself or others by mistake</li>" + "<li>Fear of contamination by disease, infection <br> or an unpleasant substance</li>" + "<li>A need for symmetry or orderliness</li>" + "<lh><br>Compulsive Behaviour:</lh>" + "<li>Cleaning and hand washing</li>" + "<li>Checking – such as checking doors are locked</li> " + "<li>Counting</li>" + "<li>Ordering and arranging</li>" + "<li>Hoarding</li>" + "<li>Asking for reassurance </li>" + "<li>Repeating words in their head</li>" + "<li>Thinking neutralising thoughts to counter <br> the obsessive thoughts</li>" + "<li>Avoiding places and situations that could <br> trigger obsessive thoughts</li>"

document.getElementById("output").innerHTML = list;
document.getElementById("symptoms").innerHTML = "Symptoms of OCD may include:" 
}



function clickEvent3() {
  let list = "<li>worry a lot about a specific area of your body<br> (particularly your face)</li>" + "<li>spend a lot of time comparing your looks with other people's</li>" + "<li>look at yourself in mirrors a lot or avoid mirrors altogether</li>" + "<li>go to a lot of effort to conceal flaws</li>" + "<li>pick at your skin to make it smooth</li>" 

document.getElementById("output").innerHTML = list;
document.getElementById("symptoms").innerHTML = "Symptoms of Body Dysmorphia may include:" 
}




function clickEvent4() {
  let list = "<li>Spending a lot of time worrying about your<br> weight and body shape</li>" + "<li>Avoiding socialising when you think food will be involved</li>" + "<li>Eating very little food or Overeating</li>" + "<li>making yourself sick or taking laxatives after you eat</li>" + "<li> Exercising too much </li>" + "<li>Having very strict habits or routines around food</li>" + "<li>changes in your mood such as being<br> withdrawn, anxious or depressed</li> " + "<br><lh>You may also notice physical signs like:</lh>" + "<li>Feeling cold, tired or dizzy</li>" + "<li>Poor Circulation/ Numbness</li>" + "<li>feeling your heart racing,fainting or feeling faint</li>" + "<li>Drastic weight change</li>" + "<li>not getting your period or other delayed signs of puberty</li>"

document.getElementById("output").innerHTML = list;
document.getElementById("symptoms").innerHTML = "Symptoms of Eating Disorders may include:" 

}

function clickEvent5() {
  let list = "<li>A lack of interest in things</li>" + "<li>Looking for a way to end their life</li>" + "<li>Difficulty concentrating</li>" + "<li>Wanting to avoid people</li>" + "<li> Hallucinations, such as hearing voices <br> &nbsp &nbsp &nbsp or  seeing things others don't </li>" + "<li>Delusions (strong beliefs that others don't share), <br> &nbsp &nbsp &nbspincluding paranoid delusions</li>" + "<li>Disorganised thinking and speech</li>" + "<li>Not wanting to look after yourself.</li>"

document.getElementById("output").innerHTML = list;
document.getElementById("symptoms").innerHTML = "Symptoms of Schizophrenia may include:" 
}


function clickEvent6() {
  let list = "<li>Down, upset or tearful</li>" + "<li>Restless, agitated or irritable</li>" + "<li>Guilty, worthless and down on yourself</li>" + "<li>Empty and numb</li>" + "<li> Isolated and unable to relate to other people </li>" + "<li>Finding no pleasure in life or things <br> &nbsp &nbsp &nbsp you usually enjoy</li>" + "<li>Angry or frustrated over minor things</li>" + "<li>A sense of unreality</li>" + "<li>No self-confidence or self-esteem</li>" + "<li>Hopeless and despairing</li>" + "<li>Feeling tired all the time</li>"

document.getElementById("output").innerHTML = list;
document.getElementById("symptoms").innerHTML = "Symptoms of Depression may include:"
}




function clickEvent7() {
 
  let list = "<li>Feeling light-headed or dizzy</l>" + "<li> A churning feeling in your stomach </li>" + "<li> Pins and needles </li>" + "<li>Feeling restless or unable to sit still </li>" + "<li>Headaches, backache or other aches and pains</li>" + "<li>Faster breathing</li>" + "<li>A fast, thumping or irregular heartbeat</li>" + "<li>Sweating or hot flushes</li>" + "<li>Sleep problems</li>" + "<li>Grinding your teeth, especially at night</li>" + "<li>Nausea</li>" + "<li>Needing the toilet more or less often</li>" + "<li>Changes in your sex drive</li>" + "<li>Having panic attacks</li>"
  document.getElementById("output").innerHTML = list;
  document.getElementById("symptoms").innerHTML = "Symptoms of Anxiety may include:"
}



// <br> &nbsp &nbsp &nbsp
















let prevButton = null;
const wrapper = document.getElementById("section3");
wrapper.addEventListener('click', (e) => {

  const isButton = e.target.nodeName === 'BUTTON'; 
  
  if (!isButton) {
    return;
  }
  
  e.target.classList.add('active');

  if(prevButton !== null) {
    prevButton.classList.remove('active'); 
  }
  
  prevButton = e.target;

});

 function basicPopup(url) {
popupWindow = window.open(url,'popUpWindow','height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
	}
  