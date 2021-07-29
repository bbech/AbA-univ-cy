import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function QuoteList(props: any) {
    return (
        <>
            {" "}
            {props.quotes.length > 0 && (
                <div className="border w-full lg:max-w-md flex flex-row lg:flex-col flex-wrap lg:flex-nowrap overflow-auto">
                    <div className="overflow-y-auto overflow-hidden border-r-2 h-full border-gray-400">
                        <div className="px-4 py-2 flex items-center justify-between border-l border-r border-b">
                            <span>
                                Citations de <b>{props.quotes[0]?.character}</b>
                            </span>
                        </div>
                        <div className="pt-3 pb-4 ">
                            {props.quotes.map((item: any) => {
                                return (
                                    (!props.filter ||
                                        item.title
                                            .toUpperCase()
                                            .indexOf(
                                                props.filter.toUpperCase()
                                            )) >= 0 && (
                                        <a href="#"
                                            className="block bg-white py-3 border-t">
                                            <div className="px-4 py-2 flex  justify-between">
                                                <span className="text-sm font-semibold text-gray-900">
                                                    {item.character}
                                                </span>
                                                <span className="text-sm font-semibold text-gray-600">
                                                    {item.episode}
                                                </span>
                                            </div>
                                            <p className="px-4 py-2 text-sm font-semibold text-gray-700">
                                                {item.title}
                                                <ReactAudioPlayer
                                                    src={ "https://kaamelott-soundboard.2ec0b4.fr/sounds/" + item.file }
                                                    controls
                                                />
                                            </p>
                                        </a>
                                    )
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
