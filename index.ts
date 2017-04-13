export interface ICommunicator<T> {
  send: (item: T) => void,
}

export interface IEmail {
  to: string,
  from: string,
  subject: string,
  contents: string,
}

export class Email implements IEmail {
  to: string;
  from: string;
  subject: string;
  contents: string;
  
  constructor(to: string, from: string, subject: string, contents: string) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.contents = contents;
  }
}

export class EmailService implements ICommunicator<IEmail> {
  sender: ICommunicator<IEmail>;
  
  constructor(sender: ICommunicator<IEmail>) {
    this.sender = sender;
  }

  send(item: IEmail) {
    this.sender.send(item);
  }
}