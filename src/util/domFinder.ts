import Connector from './shopConnector';

export default class domFinder {
    static findElement () {
        let newArray = {
            shop: '',
            source: ''
        };
        let sourceDomAttr = domFinder.findConnector();
        let error = false;

        if (!sourceDomAttr){
            return;
        }
        
        Object.keys(sourceDomAttr).forEach((key) => {
            if (!error){
                let link = sourceDomAttr[key][0];
                let what = sourceDomAttr[key][1];
                let nodeHTML = document.querySelector(link);
               

                if (!nodeHTML){
                    error = true;
                    return;
                }
    
                newArray[key] = nodeHTML[what];
            }
        })

        if (error){
            console.log(`[DOMFINDER] Introuvable`);
            return false;
        }

        newArray.shop = window.location.hostname;
        newArray.source = window.location.href;
        return newArray;
    }

    createArray(object){
        return { 
            ...object,
        }
    }

    static findConnector(){
        if (!Connector[window.location.hostname]){
            console.log('[DOMFINDER] Pas de connecteur pour ce site');
            return false;
        }

        return Connector[window.location.hostname]
    }
}

