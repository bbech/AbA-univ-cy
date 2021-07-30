import React from "react";
import AuthenticationService from "../services/AuthenticationService";

export default function NavBar(props: any) {
    
    const authenticationService: AuthenticationService =  new AuthenticationService();

    return (
        <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
            <h1 className="font-semibold text-lg">Kaamlott</h1>
            <span className="flex-1"></span>
            <span className="mr-2">
                <input  onChange={$event => props.onSearch($event.target.value)}
                    type="text"
                    placeholder="Search"
                    className="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
                />
            </span>
            { !authenticationService.isLoggedIn() && <>
                    <button className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <i className="fas fa-user fill-current"></i>
                    </button>
                    <div className="ml-auto pl-3 text-center text-gray-400">Bonjour {authenticationService.connecteduser.username}</div>
                </>
            } 
            { authenticationService.isLoggedIn() && <>
                <button type="button" onClick={props.onLogIn} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Se connecter
                </button>
                </>
            }
        </nav>
    );
}
