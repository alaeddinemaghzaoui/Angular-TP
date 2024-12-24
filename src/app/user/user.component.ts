import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


    Userform = new FormGroup({
    username: new FormControl('' , Validators.required),
    city: new FormControl('tttttttt' , Validators.required)
    });


    addUser() { 
        console.log(this.Userform.value);
    }

    
}