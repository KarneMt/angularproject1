import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { contactDB } from "../../jsonServerConnection";
import { Contact } from '../Model/model'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private httpClient: HttpClient) {

  }

  create(item: any, reducer_func: string): Observable<string> {
    //console.log("create")
    this.createDb(item).subscribe(succes => true, error => alert(error))
    return new Observable((observer) => {
      const source$ = of(Object.assign({}, item /*{ id: uuidv4() }*/)) // this.reducer(reducer_func, kat)
      source$.subscribe((data: any) => {
        observer.next(data.id)
      }), (error: any) => observer.error(error)
    })
  }

  read(reducer_func: string): Observable<any> {
    //console.log("read")
    return new Observable((observer) => {
      const source$ = of(daten) // this.getReducer(reducer_func, {})
      source$.subscribe((data: any) => {
        observer.next(data)
      }, (error: any) => observer.error(error))
    })
  }

  update(message: any, reducer_func: string): Observable<number> {
    //console.log("update")
    this.updateDb(message).subscribe(succes => true, error => alert(error))
    return new Observable((observer) => {
      const source$ = of(200) // this.reducer(reducer_func, kat)
      source$.subscribe((status: any) => {
        observer.next(status)
      }),
        (error: any) => observer.error(error)
    })
  }

  delete(id: string, reducer_func: string): Observable<number> {
    this.deleteDb(id).subscribe(succes => true, error => alert(error))
    return new Observable((observer) => {
      const source$ = of(200) // this.reducer(reducer_func, id)
      source$.subscribe((status: any) => {
        observer.next(status)
      }), (error: any) => observer.error(error)
    })
  }

  createMessage(insert: Contact): Observable<string> {
    console.log(insert)
    return this.create(insert, 'insertContact')
  }

  readMessages(): Observable<any> {
    //console.log("readMessage")
    return this.read('getMessage')
  }

  updateMessage(update: Contact): Observable<number> {
    return this.update(update, 'updateTodo')
  }

  deleteMessage(id: string): Observable<number> {
    return this.delete(id, 'deleteTodo')
  }


  //DB GET/UPDATE/DELETE/PUT
  createDb(contact: any) {
    return this.httpClient.post(contactDB, contact)
  }

  deleteDb(id: string) {
    return this.httpClient.delete(contactDB+"/"+id)
  }

  updateDb(contact : any)  {
    let id : string = contact.id
    return this.httpClient.put(contactDB+"/"+id, contact)
  }
}

export var daten: any = get()

function get(): any {
  let u: any = []
  fetch(contactDB)
    .then((res: { json: () => any; }) => res.json())
    .then((json: any[]) => {
      json.map((data: any) => {
        u.push(data)
      })
    })
  return u

}
