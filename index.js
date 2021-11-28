import React, { useEffect } from "react";
import "./index.css";

// Navin, Kishore, Krishna

const AuthForm = () => {
    useEffect(() => {
        $(document).ready(function(){
            $('.login-info-box').fadeOut();
            $('.login-show').addClass('show-log-panel');
        });


        $('.login-reg-panel input[type="radio"]').on('change', function() {
            if($('#log-login-show').is(':checked')) {
                $('.register-info-box').fadeOut(); 
                $('.login-info-box').fadeIn();
                
                $('.white-panel').addClass('right-log');
                $('.register-show').addClass('show-log-panel');
                $('.login-show').removeClass('show-log-panel');
                
            }
            else if($('#log-reg-show').is(':checked')) {
                $('.register-info-box').fadeIn();
                $('.login-info-box').fadeOut();
                
                $('.white-panel').removeClass('right-log');
                
                $('.login-show').addClass('show-log-panel');
                $('.register-show').removeClass('show-log-panel');
            }
        });
  
    });
    return (
        <div class="login-reg-panel">
			<div class="login-info-box">
				<h2>Have an account?</h2>
				<p>Lorem ipsum dolor sit amet</p>
				<label id="label-register" for="log-reg-show">Login</label>
				<input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" />
			</div>

			<div class="register-info-box">
				<h2>Don't have an account?</h2>
				<p>Lorem ipsum dolor sit amet</p>
				<label id="label-login" for="log-login-show">Register</label>
				<input type="radio" name="active-log-panel" id="log-login-show" />
			</div>

			<div class="white-panel">
				<div class="login-show">
					<h2>LOGIN</h2>
					<form action="" method="POST">
						<input type="email" name="email" placeholder="Email" />
						<input type="password" name="password" placeholder="Password" />
						<input type="submit" value="Login" />
					</form>
					<a href="">Forgot password?</a>
				</div>
				<div class="register-show">
					<h2>REGISTER</h2>
					<form action="" method="POST">
						<input type="text" name="FirstName" placeholder="FirstName" />
						<input type="text" name="lastName" placeholder="LastName" />
						<input type="text" name="email" placeholder="Email" />
						<input type="password" name="password" placeholder="Password" />
						<input type="password" name="confirmPassword" placeholder="Confirm Password" />
						<input type="submit" value="Register" />
					</form>
				</div>
			</div>
		</div>
    );
}

export default AuthForm;
