import { Component, OnInit } from '@angular/core';
import { databaseInstanceFactory } from '@angular/fire/database/database.module';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth: AuthenticationService) {

   }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm){
    console.log(data);

    this.auth.signUp(data.value.email, data.value.password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error.error.message)
      }
    );

    data.reset();
  }

}
