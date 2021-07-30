import React, { useState } from "react";
import SideBar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import QuoteList from "./components/QuoteList";
import PersoList from "./components/PersoList";
import ModalLogIn from "./components/modal/ModalLogIn";
import ModalAddQuotes from "./components/modal/ModalAddQuotes";
import Notification from "./components/Notification";
import AuthenticationService from "./services/AuthenticationService";
import "./App.css";
import QuotesService from "./services/QuotesService";

function App() {

    const authenticationService: AuthenticationService =  new AuthenticationService();
    const quotesService: QuotesService =  new QuotesService();
    const [quotes, setQuotes] = useState(new Array<any>());
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState('');

    function handleAdd(quotesCharacter: any) {
        if (authenticationService.isLoggedIn()) {
            setShowModal(true);
        } else {
            setSelectedCharacter(quotesCharacter);
            setShowModalAdd(true);
        }
    }    
    
    function handleLgoIn(username: string, password: string) {
        authenticationService.logMeIn(username, password); 
        setShowModal(false);
    }
    
    function handleAddQuote(episode:string, file:string, title:string) {
        quotesService.addQuote(selectedCharacter,     {
            "character": selectedCharacter,
            episode, file, title
        }); 
        setShowModalAdd(false);
    }

    return (
        <div>
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <SideBar></SideBar>
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 ">
                <NavBar onSearch={(searchQuery : any) => setSearch(searchQuery) } onLogIn={() => setShowModal(true)}></NavBar>
                <section className="flex-1 lg:mb-0 lg:min-h-0 lg:min-w-0 ">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                        <QuoteList quotes={quotes} filter={search}></QuoteList>
                        <div className="overflow-auto w-full h-full">
                            <PersoList onClick={(quotesCharacter: any) => setQuotes(quotesCharacter)} 
                                onAdd={(quotesCharacter: any) => handleAdd(quotesCharacter)} 
                                filter={search}></PersoList>
                        </div>
                    </div>
                </section>
            </main>
            { showModal && <ModalLogIn onClose={() => setShowModal(false)} onLogIn={handleLgoIn}></ModalLogIn> }
            { showModalAdd && <ModalAddQuotes character={selectedCharacter} onClose={() => setShowModalAdd(false)} onAdd={handleAddQuote}></ModalAddQuotes> }
        </section>
        { showSuccess && <Notification></Notification> } 
        </div>
    );
}

export default App;


