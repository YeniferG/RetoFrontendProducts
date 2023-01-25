import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startAdministratorRol(){
    this.router.navigate(['home/productManagement']);
  }

  startUserRol(){
    this.router.navigate(['home/products']);
  }

}
