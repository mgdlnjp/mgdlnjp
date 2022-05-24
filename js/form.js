const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sent!';

   const serviceID = 'default_service';
   const templateID = 'jp_template';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    //   btn.value = 'Send Email';
    //   alert('Sent!');
    }, (err) => {
    //   btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});