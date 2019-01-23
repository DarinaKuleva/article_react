export default function Merge() {

        let hash = {}
        for (let l = 0; l < arguments.length; l++) {
            let arr = arguments[l];
            if (!arr.length) continue;
            for (let i = 0; i < arr.length; i++) {
                let el = arr[i];
                if (!('id' in el)) continue;
                let id = el.id;
                if (!hash[id]) hash[id] = {};
                for (let key in el) {
                    if (el.hasOwnProperty(key))
                        hash[id][key] = el[key];
                }
            }
        }
        let result = [];
        for (let id in hash) {
            if (hash.hasOwnProperty(id)) result.push(hash[id]);
        }
        return result;

}



