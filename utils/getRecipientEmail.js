const getRecipientEmail = (users, userLoggedIn) => 
    users?.filter(userTOFilter => userTOFilter !== userLoggedIn.email )


export default getRecipientEmail;