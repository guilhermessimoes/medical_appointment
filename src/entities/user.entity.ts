import { randomUUID } from 'crypto'

type IUser ={
  name: string,
  password: string,
  userName: string
}

export class User {
  name: string
  password: string
  userName: string
  id: string
  isAdmin: boolean

  private constructor(props: IUser) {
    this.name = props.name
    this.password = props.password
    this.userName = props.userName
    this.id = randomUUID()
    this.isAdmin = false
  }

  static create(props: IUser){
    const user = new User(props)
    return user  
  }
}