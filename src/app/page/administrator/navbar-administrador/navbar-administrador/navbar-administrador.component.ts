import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-administrador',
  templateUrl: './navbar-administrador.component.html',
  styleUrls: ['./navbar-administrador.component.css']
})
export class NavbarAdministradorComponent implements OnInit {

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

	startPage(){
		this.router.navigate(['home/roles']);
	}
}
