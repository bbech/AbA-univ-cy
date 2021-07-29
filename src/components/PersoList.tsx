import React, { useEffect, useState } from "react";
import { containList, convertToImgUrl } from "../utils/utils";
import Card from "./Card";

export default function PersoList(props: any) {

    const [list, setlist] = useState(new Map<string, Array<any>>());

    useEffect(() => { 
        fetch('http://localhost:5001/sounds.98d7c898.json')
        .then(response => response.json())
        .then(data => setlist(data.reduce((map: Map<string, Array<any>>, obj: any) => {
            if(map.get(obj.character)) {
                map.get(obj.character)?.push(obj);
            } else {
                map.set(obj.character,  [obj]);
            }
            return map;
        }, new Map<string, Array<any>>()) ));
    }, []);

    
    return (
        <div className="flex flex-wrap">
            { Array.from(list.keys()).map(item => {
                return <> { 
                ( convertToImgUrl(item) != null && containList(props.filter, list.get(item))) && <div>
                    <Card character={item} onClick={ () => props.onClick(list.get(item)) }></Card>
                </div>
                }
            </>
            })}
        </div>
    );
}
