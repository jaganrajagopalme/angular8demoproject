import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0
  IncludeLetters=false;
  IncludeNumbers=false;
  IncludeSymbols=false;
  Password ='';
  OnInputLength(value:string)
  {
   const parseValue= parseInt(value);
    if (!isNaN(parseValue))
    {
      this.length=parseValue;
    }
  }
  
  OnLetterchanged()
  {
    //console.log("onchanged of Letterchanged");
    this.IncludeLetters= !(this.IncludeLetters);
  }
  OnNumberChanged()
  {
   // console.log("Number changed trigger")
    this.IncludeNumbers= !this.IncludeNumbers;
  }
  OnSymbolChanged()
  {
   // console.log("symbol changed");
    //console.log(`before changes ${this.IncludeSymbols}`);
    this.IncludeSymbols= !this.IncludeSymbols;  
   // console.log(`aftert changes ${this.IncludeSymbols}`);
  }
  getPassword() {
    return this.Password;
  }
  OnButtonOnClick() {
     
    //Letter
    const letters="abcdefghijlkmnopqrstuvwxyz";
    const numbers="1234567890";
    const symbols="!@#$%^&*()";
    let validChars='';

    if (this.IncludeLetters=true)
    {
      validChars+=letters ;
      
    }
    if (this.IncludeNumbers=true)
    {
      validChars+=numbers ;
      
    } 
    if (this.IncludeSymbols=true)
    {
      validChars+=symbols ;
      
    } 
    let generatedPassword='';
    for( var i =0; i< this.length ; i++)
    {
      const index= Math.floor(Math.random()* validChars.length);
      generatedPassword+= validChars[index];
    }
    this.Password=generatedPassword;
    
  }
  title = 'my-app';
}
