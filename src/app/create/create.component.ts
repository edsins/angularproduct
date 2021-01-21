import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 productForm=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl(''),
    price:new FormControl(''),
    quantity:new FormControl(''),
    datecreated:new FormControl('')
  })
  constructor(private service:CrudService,private router:ActivatedRoute) { }
 
 ngOnInit(): void {

  }
 
  submitForm(){
    this.service.add(this.productForm.value).subscribe((data)=>
      console.log(data,"Product Added Successfully")
    )
  }

}
