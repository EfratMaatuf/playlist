import './Login.css';
import React from 'react';


const Login = () => {

    return (
        <div id="login">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" className='inputLogin' />
                        <input type="email" name="email" placeholder="Email" className='inputLogin' />
                        <input type="password" name="pswd" placeholder="Password" className='inputLogin' />
                        <button className='buttonLogin'>Sign up</button>
                    </form>
                </div>

                <div class="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" className='inputLogin' />
                        <input type="password" name="pswd" placeholder="Password" className='inputLogin' />
                        <button className='buttonLogin'>Login</button>
                    </form>
                </div>
            </div>
        </div>

    )

}


export default Login;