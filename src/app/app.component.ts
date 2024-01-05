import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  isNavbarCollapsed = true;

  constructor(private service:ServiceService){}

  experiences: any[] = [];
  projects: any[] =[];

  ngOnInit(): void {
    this.service.getExperience().subscribe(data=>{
      this.experiences=data;
    })

    this.service.getProjects().subscribe(data=>{
      this.projects=data;
    })
  }


  contactInfo = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Gönderilen form:', this.contactInfo);
  }


  
}
