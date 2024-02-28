const Contact = () => {
  return (
    <div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5190186332275!2d-7.612445924970957!3d33.59183544190202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd62408f3ef9%3A0xf0df71d96535da97!2s7%20Rue%20Bouchaib%20El%20Machrouhi%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1709150151948!5m2!1sfr!2sma"
        width="600"
        height="450"
        style={{ border: "0" }} // Notice the use of curly braces to pass a JavaScript object
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      
    </div>
  );
};

export default Contact;
