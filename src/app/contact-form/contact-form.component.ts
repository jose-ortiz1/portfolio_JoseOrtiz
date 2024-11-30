import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  // contact = { name: '', email: '', message: '' };

  // constructor(private http: HttpClient) {}

  // onSubmit() {
  //   this.http.post('http://localhost:3000/contact', this.contact).subscribe({
  //     next: (response) => alert('Message sent successfully!'),
  //     error: (error) => alert('Failed to send message. Please try again.')
  //   });
  // }

}
