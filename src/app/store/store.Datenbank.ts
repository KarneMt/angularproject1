import { HttpClient } from '@angular/common/http';
import { contactDB  } from '../../jsonServerConnection'


export var daten: any = getAll()

//GET all oder mit value 
function getAll(): any {

    let daten: any = []
    fetch(contactDB)
      .then(res => res.json())
      .then(json => {
        json.map((data: any) => {
          daten.push(data)
          console.log(data)
        })
      })
  
  return daten
}

