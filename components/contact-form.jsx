export const EmailTemplate = ({
    name,
    email,
    message
  }) => (
    <div>
      <p>Hello Sebastián,</p>
      <p>
          {name} has submitted the contact form on your website. Their
          email is {email}!
          the message is: 
          
      </p>
      <p>
          Regards,
          <br />
          Coffee
      </p>
    </div>
  );