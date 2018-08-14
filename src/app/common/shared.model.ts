export class TypeObject {

  public static fromJson<T>(objType: { new(): T; }, json: any) {
    const newObj = new objType();
    const relationships = objType["relationships"] || {};

    // console.log(json);
    for (const prop in json) {
      if (json.hasOwnProperty(prop)) {
        if (newObj[prop] == null) {
          if (Array.isArray(json[prop]) && relationships[prop]) {
            let arr = [];
            json[prop].forEach((a) => {
              let item = this.fromJson(relationships[prop], a);
              arr.push(this.fromJson(relationships[prop], a));
            });
            newObj[prop]=arr;
          }
          else if (relationships[prop] == null) {
            newObj[prop] = json[prop];
          }
          else {
            newObj[prop] = this.fromJson(relationships[prop], json[prop]);
          }
        }
        else {
          console.warn(`Property ${prop} not set because it already existed on the object.`);
        }
      }
    }

    return newObj;
  }

  public isEmpty() {
    for(var key in this) {
      if(this.hasOwnProperty(key))
        return false;
    }
    return true;
  }
}

