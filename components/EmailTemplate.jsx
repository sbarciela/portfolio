function EmailTemplate({name, email, message}){

    return(
        <>
        <h2>Recibiste un mensaje desde tu website</h2>
        <div>Nombre: {name}</div>
        <div>Email: {email}</div>
        <div>Mensaje: {message}</div>
        </>
    )

}

export default EmailTemplate