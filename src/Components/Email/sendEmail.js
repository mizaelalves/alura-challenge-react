
import emailjs from '@emailjs/browser';
const token = process.env.REACT_APP_ACESS_TOKEN
const user_id= process.env.REACT_APP_USER_ID
const service_id = process.env.REACT_APP_SERVICE_ID
const tamplate_id = process.env.REACT_APP_TAMPLATE_ID




export function sendEmail(form){

  var template_Params = {
    to_email: form,
    from_name: 'Casa Verde'
  };

  emailjs.send(service_id, tamplate_id, template_Params, user_id)
  .then(function(response) {
    alert(JSON.stringify("Email enviado para "+form));
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });

}

