//https://script.google.com/macros/s/AKfycbyQf2S3Z55vbFDvvL_naSzMrJuzLz4VLES6Q41hTyLhTcYCOL6czEFlUDGR9IQ0129wyw/exec



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyQf2S3Z55vbFDvvL_naSzMrJuzLz4VLES6Q41hTyLhTcYCOL6czEFlUDGR9IQ0129wyw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for Subscribing!"
        setTimeout(function(){
             msg.innerHTML = ""
        },3000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
