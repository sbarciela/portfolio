export const EmailTemplate = ({
    name,
    email
  }) => (
    <div>
      <p>Hello Sebastián,</p>
      <p>
          {name} has submitted the contact form on your website. Their
          email is {email}!
      </p>
      <p>
          Regards,
          <br />
          Coffee
      </p>
    </div>
  );​