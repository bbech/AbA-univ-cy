export function convertToImgUrl(name: string) {
    switch(name.trim()) {
        case 'Arthur - Le Roi Burgonde':
            return "/roi-burgonde.jpg"
        // case 'Le Maître d\'armes':
        //     return ""
        case 'Merlin':
            return "/merlin.jpg"
        case 'Arthur':
            return "arthur.jpg"
        // case 'Breccan':
        //     return ""
        case 'Léodagan':
            return "/leodagan.jpg"
        // case 'Attila':
        //     return ""
        case 'Guenièvre':
            return "/guenievre.jpg"
        case 'Bohort':
            return "/bohort.jpg"
        // case 'Le Répurgateur':
        //     return ""
        // case 'Venec':
        //     return ""
        // case 'Le tavernier':
        //     return ""
        // case 'L\'Interprète':
        //     return ""
        case 'Perceval':
            return "/perceval.jpg"
        case 'Dagonet':
            return "/dagonet.jpg"
        case 'Lancelot':
            return "/lancelot.jpg"
        case 'Karadoc':
            return "/karadoc.jpg"
        // case 'Angharad':
        //     return ""
        // case 'Demetra':
        //     return ""
        // case 'L`\'évêque Boniface':
        //     return ""
        // case 'La Dame du Lac':
        //     return ""
        // case 'Yvain':
        //     return ""
        // case 'Arthur - Galessin':
        //     return ""
        // case 'Calogrenant':
        //     return ""
        // case 'Roparzh':
        //     return ""
        // case 'Séli':
        //     return ""
        // case 'Kadoc':
        //     return ""
        // case 'Elias de Kelliwic\'h':
        //     return ""
        // case 'Caius':
        //     return ""
        // case 'Guethenoc':
        //     return ""
        case 'Le Roi Burgonde':
            return "/roi-burgonde.jpg"
        case 'Loth':
            return "/roi-loth.jpg"
        // case 'Kay':
        //     return ""
        // case 'Titus Nipius Glaucia':
        //     return ""
        // case 'Goustan':
        //     return ""
        // case 'Père Blaise':
        //     return ""
        // case 'Jacca':
        //     return ""
        // case 'Grüdü':
        //     return ""
        // case 'Anna':
        //     return ""
        // case 'Appius Manilius':
        //     return ""
        // case 'Spurius Cordius Frontiniu':
        //     return ""
        // case 'Le Barde':
        //     return ""
        // case 'Azénor':
        //     return ""
        // case 'Gauvain':
        //     return ""
        // case 'Narces':
        //     return ""
        // case 'Belt':
        //     return ""
        // case 'Galessin':
        //     return ""
        // case 'Fearmac':
        //     return ""
        // case 'Mévanoui':
        //     return ""
        // case 'Hervé De Rinel':
        //     return ""
        // case 'Urgan':
        //     return ""
        case 'La Duchesse d\'Aquitaine':
            return "/duchess-aquitaine.jpg"
        case 'Le Duc d\'Aquitaine':
            return "/duc-aquitaine.jpg"
        // case 'Ygerne de Tintagel':
        //     return ""
        default: 
            return null;
    }
}

export function containList(filter: string, list: Array<any> | undefined) : boolean {
    return list !== undefined && list.findIndex(item => item.title.toUpperCase().indexOf(filter.toUpperCase()) >= 0) >= 0;
}