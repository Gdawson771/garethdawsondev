import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        { email: "", text: "" }
    )

    function handleChange(event) {

        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    function submitData(event) {
        

        const body = JSON.stringify({
            senderName: "gdawson771@gmail.com",
            senderEmail: "gdawson771@gmail.com",
            message: "Hello, em222ail working",
            date: new Date(),
            fileName: "Test_File_Name"
        })
        event.preventDefault();

        /*fetch("https://w5jn79ev5c.execute-api.eu-west-2.amazonaws.com/sendEmail",{
            "mode": "no-cors",
            "method": "POST",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            "body": {
              "senderName": "employer@gmail.com",
              "senderEmail": "gdawson771@gmail.com",
              "message": "Hello, email working",
              "date": "2022-07-31T09:54:27.649Z",
              "fileName": "Test_File_Name"
            }
          })*/
        
                fetch("https://w5jn79ev5c.execute-api.eu-west-2.amazonaws.com/sendEmail",
                    {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: body
                    }).then(data => {
                        console.log("DONE")// Do some stuff here
                        console.log(data)
                    })
                    .catch(err => {
                        console.log("error on fetch")
                        // Catch and display errors
                    })
        
       /*
        fetch("https://4p9g6eejt3.execute-api.eu-west-2.amazonaws.com/sendemail", {
            mode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                senderName: "dehew21161@altcen.com",
                senderEmail: "dehew21161@altcen.com",
                message: "HELLO WORLD THIS IS FROM REACT APP P.S. Lebron the GOAT.",
                base64Data: "base64",
                date: new Date(),
                fileName: "TEST_FILE_NAME",
            }),
        })*/
       // console.log(formData)

    }
    return (
        <form className="Form">
            <input
                className="Form--email"
                type="text"
                placeholder="Email"
                onChange={(event) => handleChange(event)}
                name="email"
                value={formData.email}
            />

            <textarea
                className="Form--text"
                value={formData.text}
                placeholder="your message goes here"
                onChange={(event) => handleChange(event)}
                name="text" />

            <button className="Form--btn" onClick={(event) => submitData(event)}>Send</button>
        </form>
    )
}