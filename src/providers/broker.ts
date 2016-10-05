
import {Http , Headers,Response,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BrokerService {

  constructor(public http:Http){

  }
  
  getBrokers():any
  {
       console.log("get Brokers");
       return this.http.get('http://192.168.1.130:3000/api/brokers' ).map(res => res.json());
  }


  getBroker(id):any
  {
     console.log("get Broker");
     // var data={"id":"1","name":"b","phone":"123","email":"emc"}
     //return  data;
     return this.http.get('http://192.168.1.130:3000/api/broker?id='+id).map(res => res.json());
    
  }

  deleteBroker(id):any
  {
    console.log("delete Broker")
    return this.http.get('http://192.168.1.130:3000/api/broker/delete?id='+id).map(res => res.json());
  }


  addBroker(broker):any{
    let body=broker;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://192.168.1.130:3000/api/broker/add",body ,options).map(res => res.json())
    
  }

  updateBroker(broker):any{
    let body=broker;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://192.168.1.130:3000/api/broker/update",body ,options).map(res => res.json())

  }

}





