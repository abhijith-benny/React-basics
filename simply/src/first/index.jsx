import React from "react";
import ReactDOM from "react-dom/client";
import Message from "./message";

function App(){
    function signup(formData){
        const data = Object.fromEntries(formData);
        const check=formData.getAll("checkbox");
        const alldata={
            ...data,
            check
    }
        console.log(alldata);
    }
    return(
        <main>
            <h1>Hello</h1>
            <form action={signup}>
                <input type="email" placeholder="Enter your email" name="email"/>
                <br/>
                <input type="password" placeholder="Enter your password" name="password"/>
                <br/>
                <fieldset
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "200px"
                    }}
                >
                    <legend 
style={{fontSize: "1.5rem"}}>Signup</legend>
                    <label>
                        <input type="radio" name="radio" value="Option 1" />
                        <span>Option 1</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" value="Option 2" />
                        <span>Option 2</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" value="Option 3" />
                        <span>Option 3</span>
                    </label>
                </fieldset>


                <fieldset
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "200px"
                    }}
                >
                    <legend 
style={{fontSize: "1.5rem"}}>Signup</legend>
                    <label>
                        <input type="checkbox" name="checkbox" value="Option 1" />
                        <span>Option 1</span>
                    </label>
                    <label>
                        <input type="checkbox" name="checkbox" value="Option 2" />
                        <span>Option 2</span>
                    </label>
                    <label>
                        <input type="checkbox" name="checkbox" value="Option 3" />
                        <span>Option 3</span>
                    </label>
                </fieldset>


                <br/>
                <label>
                    Select the color:
                    <select name="color" defaultValue="" required>
                        <option value="" disabled>Select a color</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
            <Message />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);