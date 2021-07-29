import React from "react";
import { convertToImgUrl } from "../utils/utils";

export default function Card(props: any) {
    return ( 
        <> { convertToImgUrl(props.character) != null &&
        <div className="wrapper" onClick={props.onClick}>
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img
                    src={process.env.PUBLIC_URL + convertToImgUrl(props.character)}
                    alt=" random imgee"
                    className=" object-cover object-center rounded-lg shadow-md h-screen" style={{"height" : "33rem"}} />

                <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            </span>
                            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            </div>
                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                            {props.character}
                        </h4>

                        <div className="mt-1">
                            <span className="text-gray-600 text-sm"></span>
                        </div>
                        <div className="mt-4">
                            <span className="text-teal-600 text-md font-semibold">
                            </span>
                            <span className="text-sm text-gray-600">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        }
        </>
    );
}
