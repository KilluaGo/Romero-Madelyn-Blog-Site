console.log('hello!')
function Submitform() {
  var name = document.getElementById('name').value
   var email= document.getElementById('email').value
   alert ("Thank you, [" + name + "][" + email + "]. We received your message.")
}