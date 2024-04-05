import {makeAutoObservable} from "mobx";

class Store {
  public docNumber = "";

  public senderName = "";
  public senderPhone = "";
  public senderCompanyName = '';
  public senderAddress = '';

  constructor() {
    makeAutoObservable(this);
  }

  public setDocNumber = (v: string) => {
    console.log(v)
    this.docNumber = v;
  };

  public setSenderName = (v: string) => {
    this.senderName = v;
  };

  public setSenderPhone = (v: string) => {
    this.senderPhone = v;
  };

  public setSenderCompanyName = (v: string) => {
    this.senderCompanyName = v;
  };

  public setSenderAddress = (v: string) => {
    this.senderAddress = v;
  };
}

export default new Store();
