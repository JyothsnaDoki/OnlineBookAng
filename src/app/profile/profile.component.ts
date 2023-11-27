
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid!: number;
  user!: User;
  id!:number;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  // ngOnInit(): void {
  //   this.userId = this.route.snapshot.params['userId'];
  //       console.log(this.userId);
  //   this.userService.find(this.userId).subscribe((data: User)=>{
  //     console.log(data);
  //     this.user = data;
  //   });
  // }
  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];
        console.log(this.userid);
    this.userService.find(this.userid).subscribe((data: User)=>{
      console.log(data);
      this.user = data;
    });
    this.route.paramMap.subscribe(params => {
      const userIdParam = params.get('userId');
 
      if (userIdParam !== null && userIdParam !== undefined) {
        this.userid = +userIdParam;
        console.log(this.userid);
 
        this.userService.find(this.userid).subscribe((data: User) => {
          console.log(data);
          this.user = data;
        });
      } else {
        console.error("'userid' parameter is null or undefined");
      }
    });
  }
}