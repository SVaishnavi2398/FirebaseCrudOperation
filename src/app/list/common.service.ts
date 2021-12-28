import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from './home/product.model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  editProductId: any;
  url = "https://crud2-386fe-default-rtdb.firebaseio.com/products.json"
  editurl = "https://crud2-386fe-default-rtdb.firebaseio.com/products/'+this.editProductId+'.json"
  constructor(private http:HttpClient) { 
  }

  AddProducts(productData:any){
    return this.http.post(this.url, productData.value)
  }
  
  saveProducts(productData:any[]){
    return this.http.put(this.url, productData)
  }
  fetchProducts(){
    return this.http.get(this.url)
  }
  editProducts(productData:any,id:any){
    return this.http.put('https://crud2-386fe-default-rtdb.firebaseio.com/products/'+id+'.json',productData)
  }
  
}

