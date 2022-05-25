import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { Contact } from '../Model/model'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readMessage = [
    {
      vorname: "Kai Arnek",
      nachname: "Möbert",
      email: "kaiarnekai@gmail.com",
      land: "Deutschland",
      adresse: "Friedenhorster Str. 11",
      stadt: "Berlin",
      plz: "10319",
      beschreibung: "Test1",
      nachricht: "Test1-2",
      id: "3a2d9b93-754d-4fce-9b37-156391f5af62",
      datum: "2022-05-18T13:34:16.036Z" },
    {
      vorname: "Kafdhfdek",
      nachname: "Möbfdhhfdhfdert",
      email: "kaiarnekfdhfhdhfdai@gmail.com",
      land: "Deutschland",
      adresse: "Friedenhfhdhffhdorster Str. 11",
      stadt: "Berfhdhfdlin",
      plz: "1031fhdhfdfhd9",
      beschreibung: "Test2",
      nachricht: "Test2-2",
      id: "3a2d9b93-754d-4fce-9b37-156391f5af62",
      datum: "2022-05-18T13:34:16.036Z" }
  ]

  create(item: any, reducer_func: string): Observable<string> {
    console.log("create")

    return new Observable((observer) => {
      const source$ = of(Object.assign({}, item, { id: uuidv4() })) // this.reducer(reducer_func, kat)
      source$.subscribe((data: any) => {
        observer.next(data.id)
      }), (error: any) => observer.error(error)
    })
  }
  read(reducer_func: string): Observable<any> {
    console.log("read")
    return new Observable((observer) => {
      const source$ = of(this.readMessage) // this.getReducer(reducer_func, {})
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
    console.log("createMessage")
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
