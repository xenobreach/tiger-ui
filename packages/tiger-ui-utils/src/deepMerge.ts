// ref: https://stackoverflow.com/a/48218209

/**
* Performs a deep merge of objects and returns new object. Does not modify
* objects (immutable) and merges arrays via concatenation.
*
* @param objects - Objects to merge
* @returns {object} New object with merged key/values
*/
export function deepMerge(...objects: any): any {
    const isObject = (obj: any) => obj && typeof obj === 'object';
    
    return objects.reduce((prev: any, obj: any) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];
        
        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        }
        else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = deepMerge(pVal, oVal);
        }
        else {
          prev[key] = oVal;
        }
      });
      
      return prev;
    }, {});
  }