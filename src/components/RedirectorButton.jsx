import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    if(props.target === undefined){
        return(
            <div className={`page__button --centralized-text --light-text --root-${props.root}`}> 
                <span>{props.text.toUpperCase()}</span>
                {props.root !== 'post' ? '' : <svg className="page__button-foward" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0781 8.11719C11.9375 8.25781 11.7969 8.29297 11.6211 8.22266C11.4453 8.15234 11.375 8.04688 11.375 7.83594V5.30469H0.546875C0.40625 5.30469 0.300781 5.26953 0.230469 5.19922C0.160156 5.12891 0.125 5.02344 0.125 4.88281V3.75781C0.125 3.6875 0.160156 3.58203 0.230469 3.47656C0.300781 3.40625 0.40625 3.33594 0.546875 3.33594H11.375V0.839844C11.375 0.664062 11.4453 0.523438 11.6211 0.453125C11.7969 0.382812 11.9375 0.417969 12.0781 0.558594L15.5938 4.03906C15.6641 4.14453 15.6992 4.25 15.6992 4.35547C15.6992 4.46094 15.6641 4.56641 15.5938 4.63672L12.0781 8.11719Z" fill="white"/></svg>}
            </div>
        );
    }else{
        return(
            <Link 
                className={`page__button --centralized-text --light-text --root-${props.root}`}
                to={`/${props.target}`}
            >
                <p>
                    <span>{props.text.toUpperCase()}</span>
                    {props.root !== 'post' ? '' : <svg className="page__button-foward" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0781 8.11719C11.9375 8.25781 11.7969 8.29297 11.6211 8.22266C11.4453 8.15234 11.375 8.04688 11.375 7.83594V5.30469H0.546875C0.40625 5.30469 0.300781 5.26953 0.230469 5.19922C0.160156 5.12891 0.125 5.02344 0.125 4.88281V3.75781C0.125 3.6875 0.160156 3.58203 0.230469 3.47656C0.300781 3.40625 0.40625 3.33594 0.546875 3.33594H11.375V0.839844C11.375 0.664062 11.4453 0.523438 11.6211 0.453125C11.7969 0.382812 11.9375 0.417969 12.0781 0.558594L15.5938 4.03906C15.6641 4.14453 15.6992 4.25 15.6992 4.35547C15.6992 4.46094 15.6641 4.56641 15.5938 4.63672L12.0781 8.11719Z" fill="white"/></svg>}
                </p>
            </Link>
        );
    }
}

export default Button;