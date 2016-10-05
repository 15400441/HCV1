import { Component } from '@angular/core';
import { NavParams,NavController,Platform,AlertController} from 'ionic-angular';
import {ManageUserPage} from '../manageUser/manageUser';
import {BrokerDetailPage} from '../manageBroker/brokerDetail';
import {Http , Headers,Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import  {BrokerService} from '../../providers/broker';

@Component({
  templateUrl: 'manageBroker.html',
  //providers: [BrokerService]
})
export class ManageBrokerPage  {
  manageBroker:string='allBrokers'
  name:any;
  email:any;
  brokers: any; //store all brokers get from server
  isAndroid: boolean = false;
  searchBrokers:any;

  constructor( public http:Http , public navCtrl: NavController, navParams: NavParams,platform: Platform,public brokerService :BrokerService, public alertCtrl:AlertController ) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.name='';
    this.email='';
    this.getBrokers();
    this.isAndroid = platform.is('android');
    
  }

  //initialize all brokers and searchBrokers
  getBrokers()
  {
       console.log("get brokers ");
     
       this.brokerService.getBrokers().subscribe(data => {
        console.log(data);
        this.brokers = data;
        this.searchBrokers=this.brokers;
    });
  }

  searchBroker(e)
  {
      
    //reset searchBrokers to all brokers
    this.searchBrokers=this.brokers;
    var val=e.target.value;
    if(val && val.trim()!=''){
      this.searchBrokers=this.searchBrokers.filter((broker)=>{
        return(broker.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  
    //console.log(this.searchBrokers);
  }

  getDetail(broker)
  {

    console.log("go");
    this.navCtrl.push(BrokerDetailPage,{"id":broker.id,"edit":false});
    
  }

  edit(broker)
  {
    console.log("edit");
    this.navCtrl.push(BrokerDetailPage,{"id":broker.id,"edit":true});
  }

  delete(broker)
  {
    
     let prompt = this.alertCtrl.create({
      message: "Are you sure delete this broker?",
      buttons: [
        {
          text: 'Yes',
          handler: data => {
              console.log("delete")
              var id=broker.id;
              

               //actualy delete through http;
               console.log("execute delete");
               this.brokerService.deleteBroker(broker.id).subscribe( (data)=>{
                 if(data.msg!=undefined)
                   alert(data.msg);
                 else{
                    this.searchBrokers=this.searchBrokers.filter((broker)=>{
                    return( broker.id.indexOf(id) == -1)
                     })
                    console.log("delete successfully");
               }
               })

           }
        },

        {
          text: 'Cancel',
          handler: data => {
            return;
          }
        }
      ]
    });
    prompt.present();
  
  }


  onSubmit(f:NgForm) {
    // let's log our findings
    let body=JSON.stringify(f.value);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://192.168.1.130:3000/api/broker/add",body ,options).subscribe( data => {
        console.log(data);
      
    });;
    
  }

 

}





