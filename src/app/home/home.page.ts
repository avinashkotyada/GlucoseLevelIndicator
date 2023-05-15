import { Component } from '@angular/core';
import { HistoryService } from '../history.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  enter_value: number | undefined;
  select_value: string | undefined;
  pre_post: string | undefined;
  constructor(private historyService : HistoryService,private toastController: ToastController) {}

  enterChange(){
    if(this.enter_value && this.select_value) {
      if(this.select_value=="1"){
        if(this.enter_value>=80 && this.enter_value<=100){
          this.pre_post = "Normal"
        }else if(this.enter_value>=101 && this.enter_value<=125){
          this.pre_post = "Impaired Glucose"
        }
        else if(this.enter_value>=126){
          this.pre_post = "Diabetic"
        }else{
          this.pre_post = undefined
        }
      }else if(this.select_value=="2"){
        if(this.enter_value>=170 && this.enter_value<=200){
          this.pre_post = "Normal"
        }else if(this.enter_value>=190 && this.enter_value<=230){
          this.pre_post = "Impaired Glucose"
        }
        else if(this.enter_value>=220 && this.enter_value<=300){
          this.pre_post = "Diabetic"
        }else{
          this.pre_post = undefined
        }
      }else{
        if(this.enter_value>=120 && this.enter_value<=140){
          this.pre_post = "Normal"
        }else if(this.enter_value>=140 && this.enter_value<=160){
          this.pre_post = "Impaired Glucose"
        }
        else if(this.enter_value>=200){
          this.pre_post = "Diabetic"
        }else{
          this.pre_post = undefined
        }
      }
    }else{
      this.pre_post = undefined
    }
  }

  selectChange(){
    if(this.enter_value && this.select_value) {
      if(this.select_value=="1"){
        if(this.enter_value>=80 && this.enter_value<=100){
          this.pre_post = "Normal"
        }else if(this.enter_value>=101 && this.enter_value<=125){
          this.pre_post = "Impaired Glucose"
        }
        else if(this.enter_value>=126){
          this.pre_post = "Diabetic"
        }else{
          this.pre_post = undefined
        }
      }else if(this.select_value=="2"){
        if(this.enter_value>=170 && this.enter_value<=200){
          this.pre_post = "Normal"
        }else if(this.enter_value>=190 && this.enter_value<=230){
          this.pre_post = "Impaired Glucose"
        }
        else if(this.enter_value>=220 && this.enter_value<=300){
          this.pre_post = "Diabetic"
        }else{
          this.pre_post = undefined
        }
      }else{
        if(this.enter_value>=120 && this.enter_value<=140){
          this.pre_post = "Normal"
        }else if(this.enter_value>=140 && this.enter_value<=160){
          this.pre_post = "Impaired Glucose"
        }
        else if(this.enter_value>=200){
          this.pre_post = "Diabetic"
        }else{
          this.pre_post = undefined
        }
      }
    }else{
      this.pre_post = undefined
    }
  }

  async add(){
    if(this.pre_post){
      await this.historyService.addItems({
        timestamp: new Date().getTime(),
        value: this.enter_value,
        select: this.select_value,
        pre_post: this.pre_post
      })
      this.presentToast("Added Successfully")
      this.enter_value= undefined
      this.select_value= undefined
      this.pre_post= undefined
    }else{
      this.presentToast("Doesn't fall in range")
    }
  }

  async presentToast(toaststring: string) {
    const toast = await this.toastController.create({
      message: toaststring,
      duration: 2000
    });
    toast.present();
  }



}
