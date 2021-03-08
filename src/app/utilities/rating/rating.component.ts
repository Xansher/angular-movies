import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();
  previusRate = 0;
  maxRatingArr = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index:number){
    this.selectedRate = index+1;
  }

  handleMouseLeave(){
    if(this.previusRate !==0){
      this.selectedRate=this.previusRate;
      
    }else{
      this.selectedRate = 0;
    }
  
  }
  rate(index:number){
    if(this.securityService.isAuthenticated()){
      this.selectedRate = index+1;
      this.previusRate=this.selectedRate;
      this.onRating.emit(this.selectedRate);
    } else {
      Swal.fire("Error", "You need to log in before voting", "error");
    }
    
  }
}