import { Component , ViewChild, OnInit} from '@angular/core';
import { NavController, MenuController,Nav ,NavParams} from 'ionic-angular';
import {ManageUserPage} from '../manageUser/manageUser';
import {Http , Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import  {BrokerService} from '../../providers/broker';


@Component({
  templateUrl: 'brokerDetail.html',
  //providers: [BrokerService]

})
export class BrokerDetailPage implements OnInit {

  
  broker: any;
  edit:boolean; //determine if the broker can be edited
  

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http, public brokerService :BrokerService) {
    
    //initialize attribute
    this.broker={id:"",name:"ini",email:"",phone:"",address:""}
    this.edit=navParams.get("edit");
   
  }

  ngOnInit()
  { 
    var id=this.navParams.get("id");
    this.brokerService.getBroker(id).subscribe( (data)=>{
      this.broker=data;
      console.log(this.broker)
    });
   
     
  }


  goBack() {
    this.navCtrl.pop();
  }


  onSubmit(f:NgForm) {
    console.log("udpate broker");
    f.value.id=this.navParams.get("id");
    let broker=JSON.stringify(f.value);
    this.brokerService.updateBroker(broker).subscribe(data=>{
     console.log(data);

    })   
  }


}


