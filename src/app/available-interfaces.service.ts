import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailableInterfacesService {

  constructor() {
    this.setInterfaceTypes([
      { type: "GigabitEthernet", values: "0/1-24" },
      { type: "FastEthernet", values: "0/1-2" }
    ]);
  }

  private types: any = [{}];

  public setInterfaceTypes(values: { type: string, values: string }[]) {
    this.types = values;
  }

  public getInterfaceTypes(): { type: string, values: string }[] {
    return this.types;
  }

  public getTypes(): string[] {
    let result: string[] = []
    this.types.forEach(e => result.push(e.type));
    return result;
  }

  public getAllInterfacesOfType(type: string): string[] {
    let values = this.types.find(e => e.type == type);
    values = values.split("/");
    let arr = []; //Beinhaltet alle aufgelösten Werte in Subarrays, jedes Subarray stellt einen von / getrennten Bereich dar

    values.forEach(e => {
      let subarr = []; //die Werte des aufzulösenden Bereiches, also alle Werte zwischen start-end
      let boundaries = e.split("-");
      let start: number = parseInt(boundaries[0]);
      let end: number = boundaries.length == 0 ? start : parseInt(boundaries[1]);
      for (; start <= end; start++) {
        subarr.push(start);
      }
      arr.push(subarr);
    });

    values = this.concatParts(arr)[0];
    values = values.map(e => type + " " + e);
    return values;
  }

  private concatParts(result) { //verbindet Teile zu allen möglichen Kombinationen
    while (result.length > 1) {
      let res = [];
      result[0].forEach(e1 => {
        result[1].forEach((e2) => {
          res.push(e1 + "/" + e2);
        })
      });
      result.splice(0, 2);
      result.unshift(res);
    }
    return result;
  }
}
