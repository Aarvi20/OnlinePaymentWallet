import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  userId="shubhamjha201098@gmail.com";
  walletTransaction:any;
  constructor(private _http:HttpClient,private _router:Router) { }

  addMoney(userId:String,amount:number,account_id:String){
    console.log({userId});
    console.log({amount});
    console.log({account_id});
    this._http.get(`http://localhost:8888/wallet/${userId}/${amount}/${account_id}`)
    .subscribe(data=>{console.log(data)
           this.walletTransaction=data;
     console.log(this.walletTransaction.accountBalance);
     this._router.navigate(['/dashboard']);
    // alert("Money Added Successfully");
},
error=>console.log(error)
 );   
  }

}
