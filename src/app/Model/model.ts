
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
  creatorID: string
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
  lastUpdate: Date
  password : string
}

export interface Cookie {
  id: string | undefined
  ablauf: Date | undefined
}
