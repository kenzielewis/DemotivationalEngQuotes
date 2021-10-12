function getQuote() {
  var sunMessage =" \"Everything happens for a reason. Sometimes the reason is you\'re stupid and make bad decisions.\" ";
  var monMessage = " \"Nothing says you\'re a loser more than owning a motivational poster about being a winner.\" ";
  var tuesMessage =" \"Happy people do not wake up for breakfast.\" " ;
  var wedMessage =" \"Just imagine how terrible it might have been if we’d been at all competent.\" ";
  var thursMessage = " \"You can do anything you set your mind to when you have vision, determination, and an endless supply of expendable labor.\" ";
  var friMessage =" \"I\'m sure the universe is full of intelligent life. It's just been too intelligent to come here.\" ";
  var satMessage =" \"Hope is the first step on the road to disappointment.\" ";
  var date = new Date();
  var dayOfWeek = date.getDay();
  if (dayOfWeek==0) {
  dailyMessage = sunMessage;}
  else if (dayOfWeek==1) {
    dailyMessage= monMessage
  }
   else if (dayOfWeek==2) {
    dailyMessage= tuesMessage
  }
   else if (dayOfWeek==3) {
    dailyMessage= wedMessage
  }
   else if (dayOfWeek==4) {
    dailyMessage= thursMessage
  }
   else if (dayOfWeek==5) {
    dailyMessage= friMessage
  }
  else if (dayOfWeek==6) {
    dailyMessage= satMessage
  }
  document.getElementById("mainQuote").innerHTML = dailyMessage;

  if (dayOfWeek==0) {
  dailyAuthour = "― Marion G. Harmon";}
  else if (dayOfWeek==1) {
   dailyAuthour="― Justin Sewell"
  }
   else if (dayOfWeek==2) {
    dailyAuthour= "― Tetiana Liubetska"
  }
   else if (dayOfWeek==3) {
    dailyAuthour= "― Terry Pratchett"
  }
   else if (dayOfWeek==4) {
    dailyAuthour= "― Justin Sewell"
  }
   else if (dayOfWeek==5) {
    dailyAuthour= "―Arthur C. Clarke "
  }
  else if (dayOfWeek==6) {
    dailyAuthour= "― Cassern S. Goto"
  }
document.getElementById("authourQuote").innerHTML = dailyAuthour;
}