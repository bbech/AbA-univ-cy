

let instance: null | QuotesService = null;

export class QuotesService {

    cacheListQuote: Map<string, Array<any>> = new Map();
    
    constructor() {
        // Make this a singleton
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    fetchAll(): Promise<Map<string, Array<any>>> {
        if(this.cacheListQuote.size > 0) {
            return new Promise((resolve, reject) => {
                resolve(this.cacheListQuote);
            });
        } else {
            return fetch(`${process.env.REACT_APP_API_URL}/quotes`, {
                headers: {
                    'Authorization': 'Bearer my-api-key'
                  }
            })
            .then(response => response.json())
            .then(data => data.reduce((map: Map<string, Array<any>>, obj: any) => {
                if(map.get(obj.character)) {
                    map.get(obj.character)?.push(obj);
                } else {
                    map.set(obj.character,  [obj]);
                }
                return map;
            }, new Map<string, Array<any>>()))
            .then( (data: Map<string, Array<any>>) => {
                this.cacheListQuote = data;
                return data
            });
        }
    }

    addQuote(character: string, quote: any): void {
        fetch(`${process.env.REACT_APP_API_URL}/quotes`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer my-api-key'
            }, 
            body: JSON.stringify(quote)
        })
            .then(response => response.json());
        this.cacheListQuote.get(character)?.push(quote);
    }

}

export default QuotesService;
