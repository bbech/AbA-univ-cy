import React from "react";

export default function SideBar(props: any) {
    return (
        <aside className="sm:h-full sm:w-16 w-full h-12 bg-gray-100 text-gray-200">
                <ul className="text-center flex flex-row sm:flex-col w-full">
                    <li className="h-14 border-b border-gray-900 hidden sm:block">
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full w-full hover:bg-gray-700 block p-3"
                        >
                            <img
                                className="object-contain h-full w-full"
                                src={process.env.PUBLIC_URL + '/logo.png'}
                                alt="open-source"
                            />
                        </a>
                    </li>
                    <li
                        className="sm:border-b border-gray-900 flex-1 sm:w-full"
                        title="Inbox"
                    >
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full w-full hover:bg-gray-700 block p-3"
                        >
                            <i className="fas fa-inbox fill-current"> </i>
                        </a>
                    </li>
                    <li
                        className="sm:border-b border-gray-900 flex-1 sm:w-full"
                        title="Settings"
                    >
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full w-full hover:bg-gray-700 block p-3"
                        >
                            <i className="fas fa-cogs fill-current"> </i>
                        </a>
                    </li>
                    <li
                        className="sm:border-b border-gray-900 flex-1 sm:w-full"
                        title="Users"
                    >
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full  w-full hover:bg-gray-700 block p-3"
                        >
                            <i className="fas fa-users fill-current"> </i>
                        </a>
                    </li>
                </ul>
            </aside>
    );
}
