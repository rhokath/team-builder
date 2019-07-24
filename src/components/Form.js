import React, {useState} from "react";

export default function SignupForm({addTeamMember}){
    const [member, setMember]= useState({name: "", role: "", email: ""})

    function handleChange(event){
        const updatedUser = {...member, [event.target.name]: event.target.value};
        setMember(updatedUser);
    };
    function handleSubmit(event){
        const addMember = addTeamMember
        addMember(member)
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
                            value={member.name}
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
                            value={member.role}
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
                            value={member.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </fieldset>
        </form>
    )

}