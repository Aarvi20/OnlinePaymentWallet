import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {WalletService}   from '../wallet.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   userId:any;
   amount:any;
   aid:any;

  //isShow : boolean= true;
  addWithdrawForm: FormGroup;
  constructor(private walletService:WalletService) {
   // this.userId=this.walletService.userId;
   }

  ngOnInit() {
    this.addWithdrawForm = new FormGroup({
      aid:new FormControl('0'),
      amount: new FormControl('0'),

         
    });
    this.userId=this.walletService.userId;
  }

  onSubmit() {
    console.log(this.addWithdrawForm.value);
    this.amount=this.addWithdrawForm.value.amount;
    this.aid=this.addWithdrawForm.value.aid;
    this.walletService.addMoney(this.userId,this.amount,this.aid);
    // .subscribe();
   // this.isShow = false;
   // this._router.navigate(['/dashboard']);
    
  }

  

}
