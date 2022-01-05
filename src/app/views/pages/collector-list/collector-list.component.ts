import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-collector-list',
  templateUrl: './collector-list.component.html',
  styleUrls:['./collector-list.component.scss']
})
export class CollectorListComponent implements OnInit {
 

  basicExampleOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  }

  autoPlayExampleOptions: OwlOptions = {
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
  }

  animationFadeoutExampleOptions: OwlOptions = {
    animateOut: 'fadeOut',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
  }

  animateCssExampleOptions: OwlOptions = {
    animateOut: 'animate__animated animate__slideOutDown',
    animateIn: 'animate__animated animate__flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
  }

  slidesStore = [
    {
      id:'1',
      src:'https://developing.pk/wp-content/uploads/2020/12/FB_IMG_1607374503602.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:'2',
      src:'https://d1t78adged64l7.cloudfront.net/images/profile-pics/hospitals/1603434712_sample-6-hospital-facilities-01.png',
      alt:'Image_2',
      title:'Image_3',
    },
    {
      id:'3',
      src:'https://talib.pk/wp-content/uploads/2016/04/PMDC-Recognized-Hospitals-For-House-job-In-Pakistan.jpg',
      alt:'Image_5',
      title:'Image_5',
      height:'55%'
    },
    {
      id:'4',
      src:'https://idc.net.pk/wp-content/uploads/2021/01/swat.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    
   
    {
      id:'5',
      src:'https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2020/11/13/2345861-888894885.jpg?itok=7lX4M63S',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:'6',
      src:'https://developing.pk/wp-content/uploads/2020/12/FB_IMG_1607374503602.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:'7',
      src:'https://d1t78adged64l7.cloudfront.net/images/profile-pics/hospitals/1603434712_sample-6-hospital-facilities-01.png',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:'8',
      src:'https://talib.pk/wp-content/uploads/2016/04/PMDC-Recognized-Hospitals-For-House-job-In-Pakistan.jpg',
      alt:'Image_5',
      title:'Image_5',
      height:'55%'
    },
    {
      id:'9',
      src:'https://idc.net.pk/wp-content/uploads/2021/01/swat.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:'10',
      src:'https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2020/11/13/2345861-888894885.jpg?itok=7lX4M63S',
      alt:'Image_3',
      title:'Image_3'
    },
   
  ]
 

  constructor(private modalService: NgbModal) { }
  router: any;
  showFilters = false;  
  basicModalCloseResult: string = '';

  openBasicModal(content) {
    this.modalService.open(content, {}).result.then((result) => {
    }).catch((res) => {});
  }
  ngOnInit(): void {
  }

}
