import React, {useState} from "react";

export default function SignupForm(){
    const [user, setUser]= useState({name: "", role: "", email: ""})

    function handleChange(event){
        const updatedUser = {...user, [event.target.name]: event.target.value};
        setUser(updatedUser);
    };
    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Team Sign Up</legend>
                <div>
                    <label>
                     name
                        <input
                            type="text"
                            name="name"
                            placeholder="enter your name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                     role
                        <input
                            type="text"
                            name="role"
                            placeholder="enter your role"
                            value={user.role}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                     email 
                        <input
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </fieldset>
        </form>
    )

}