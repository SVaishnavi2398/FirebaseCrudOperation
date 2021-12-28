import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Product } from './product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productForm:FormGroup;
  file: string = "../../../assets/img/menu-bg.jpg";
  productData:any[]=[];
  editMode:boolean = false;
  editProductId: any;

  constructor(private common:CommonService, private fb: FormBuilder) { }
  dataTitle = "Products List";

  ngOnInit(): void {
    this.productForm= this.fb.group({
      id:['' ,Validators.required],
      name:['', Validators.required],
      file:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
  })
    this.onFetchProduct();
  }

  onFileChange(event:any) {
     if(event.target.files){
      var render=new FileReader()
      render.readAsDataURL(event.target.files[0])
      render.onload=(event:any)=>{
       const file = event.target.result;
        this.productForm.patchValue({
         file : file
        })
      }
    }}
  
  onAddProduct(productData:any){
      if(this.editMode){
        this.editMode = false;
        this.common.editProducts(productData.value,this.editProductId).subscribe(
          (res)=>{
            this.onFetchProduct();
          }
        ) 
      }
      else{
        this.productData.push(productData.value);
        this.common.AddProducts(productData.value).subscribe(
          (res)=>{
          }
        )
        this.onSaveProducts();
      }
  } 
    onSaveProducts(){
    this.common.saveProducts(this.productData).subscribe(
      (res)=>{
        }
    )
  }
  onFetchProduct(){
    this.common.fetchProducts().subscribe(
      (res:any) => {
        console.log(res);
        this.productData=res;
      },
      (err)=>console.log(err)
    )
  }
  onDeleteProduct(id:number){
    if(confirm('Do you want to delete this product?')){
      this.productData.splice(id,1)
          this.onSaveProducts()
  }
}
  onEditProduct(index:any, id:any){
    this.editMode = true;
    this.editProductId = index
      var form = this.productForm.patchValue({
        price: this.productData[index].price,
        category: this.productData[index].category,
        id: this.productData[index].id,
        name: this.productData[index].name,
        file: this.productData[index].file
      })    
      }
}
