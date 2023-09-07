type ValidEmailProps = {
    email: string,
  }
  
  function ValidEmail({ email }: ValidEmailProps) {
    const verifyEmail = (email: string) => {
      const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      return emailRegex.test(email);
    };
  
    return (
      <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        <h3>{ email && (verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
      </div>
    );
  };
  
  export default ValidEmail;
  