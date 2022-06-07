import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Contact } from '../Model/model'
import { daten } from './store.Datenbank'

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  create(item: any, reducer_func: string): Observable<string> {
    console.log("create")
    return new Observable((observer) => {
      const source$ = of(Object.assign({}, item /*{ id: uuidv4() }*/ )) // this.reducer(reducer_func, kat)
      source$.subscribe((data: any) => {
        observer.next(data.id)
      }), (error: any) => observer.error(error)
    })
  }

  read(reducer_func: string): Observable<any> {
    console.log("read")
    return new Observable((observer) => {
      const source$ = of(daten) // this.getReducer(reducer_func, {})
      source$.subscribe((data: any) => {
        observer.next(data)
      }, (error: any) => observer.error(error))
    })
  }

  update(kat: any, reducer_func: string): Observable<number> {
    return new Observable((observer) => {
      const source$ = of(200) // this.reducer(reducer_func, kat)
      source$.subscribe((status: any) => {
        observer.next(status)
      }),
        (error: any) => observer.error(error)
    })
  }

  delete(id: string, reducer_func: string): Observable<number> {
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
    console.log("readMessage")
    return this.read('getMessage')
  }

  updateMessage(update: Contact): Observable<number> {
    return this.update(update, 'updateTodo')
  }

  deleteMessage(id: string): Observable<number> {
    return this.delete(id, 'deleteTodo')
  }
}
