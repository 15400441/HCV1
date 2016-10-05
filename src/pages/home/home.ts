import { Component ,ViewChild,ElementRef,OnInit,AfterViewChecked } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Http , Headers,Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  
  style:any;
  checkItems:any;
  searchCheckItems:any;
  
  constructor(public navCtrl: NavController, public http:Http) {
    this.style={height: "100%" , width: "100%"}
    this.searchCheckItems=[];
  }

  ngOnInit()
  { 
    
     
     
  }

  getItems()
  {
      var d = new Date();
      var s = d.getSeconds();
      var ms = d.getMilliseconds() ;
      console.log("start load:   "+s+":"+ms)

     this.http.get('http://192.168.1.130:3000/api/checkItems').map(res => res.json()).subscribe(
        data=>{
          this.checkItems=data;
          this.searchCheckItems=data;
        })

  }

  delete()
  {
      this.searchCheckItems=this.searchCheckItems.filter((item)=>{
        return(item.id !="1")
      })

      
  }


  add()
  {
    var s={id:'3005',name:'new service',type:'service',groupName:"g1",status:'danger'};
    this.searchCheckItems=this.searchCheckItems.concat(s);
    this.checkItems.push(s);
  }

  update()
  {
    this.searchCheckItems=this.searchCheckItems.map(function(item){

      if(item.id=="1")
      {
        item.name="updaeService"
      }

      return item;

    })
  }

  test()
  {
  	console.log("test ");
  	window.location.replace("http://192.168.1.130:3000/main");
    
  }

  onLoad() {
  	console.log("load")
    var iFrame:any=document.getElementById('iframeId');
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight + "px";
    console.log( "------------------------------------")
  }


  search(e)
  {
      var d = new Date();
      var s = d.getSeconds();
      var ms = d.getMilliseconds() ;
      console.log("start search:   "+s+":"+ms)
    //reset searchBrokers to all brokers
    this.searchCheckItems=this.checkItems;
    var val=e.target.value;
    console.log("val:"+val);
    if(val.trim()==''){
       console.log("return");
       return;
    }

    else{
      console.log("filter");
      this.searchCheckItems=this.searchCheckItems.filter((item)=>{
        return(item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  
  }


  


  
}


