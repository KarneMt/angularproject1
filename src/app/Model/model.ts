
export interface Contact {
  id: string
  vorname: string
  nachname: string
  beschreibung: string
  email: string
  land: string
  adresse: string
  stadt: string
  plz: string
  nachricht: string
  datum: Date
}

export interface User {
  id: string
  vorname: string
  nachname: string
  adresse: string
  stadt: string
  email: string
  plz: string
  datum: Date
}
