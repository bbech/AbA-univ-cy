import React, { useState } from "react";
import SideBar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import QuoteList from "./components/QuoteList";
import PersoList from "./components/PersoList";
import "./App.css";

function App() {

    const [quotes, setQuotes] = useState(new Array<any>());
    const [search, setSearch] = useState('');

    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <SideBar></SideBar>
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 ">
                <NavBar onSearch={(searchQuery : any) => setSearch(searchQuery) } ></NavBar>
                <section className="flex-1 lg:mb-0 lg:min-h-0 lg:min-w-0 ">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                        <QuoteList quotes={quotes} filter={search}></QuoteList>
                        <div className="overflow-auto w-full h-full">
                            <PersoList onClick={(quotesCharacter: any) => setQuotes(quotesCharacter)} filter={search}></PersoList>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default App;
