import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;
	showOptionsUser: boolean = false;

	userImg = faker.image.avatar();
    userName = faker.name.fullName();
  	userEmail = faker.internet.email();	
	
	constructor(private router: Router) {}

	ngOnInit(): void {
	}
  
	openMenu() {
		(!this.showMenu) ? this.showMenu = true : this.showMenu = false;
	}

	openOptionsUser() {
		(
			!this.showOptionsUser
		) ? this.showOptionsUser = true : this.showOptionsUser = false;
	}

	startPageFashion(){
		this.router.navigate(['home/fashion']);
	}

	startShoppingcart(){
		this.router.navigate(['home/buy'])
	}
}
