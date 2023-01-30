import React, { useEffect, useState } from "react";
import QuotesService from "../services/QuotesService";
import { containList, convertToImgUrl } from "../utils/utils";
import Card from "./Card";

export default function PersoList(props: any) {

    const quotesService: QuotesService = new QuotesService();
    const [list, setlist] = useState(new Map<string, Array<any>>());

    useEffect(() => { 
        quotesService.fetchAll().then(data => {
            if(data.size > 0) setlist(data);
        });
    });

    
    return (
        <div className="flex flex-wrap">
            { Array.from(list.keys()).map(item => {
                return <div key={item}> { 
                ( convertToImgUrl(item) != null && containList(props.filter, list.get(item))) && <div>
                    <Card  character={item} onClick={ () => props.onClick(list.get(item)) } onAdd={ () => props.onAdd(item) }></Card>
                </div>
                }
            </div> 
            })}
        </div>
    );
}
