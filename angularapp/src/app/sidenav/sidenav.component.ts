import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//   List = [
//     {
//       number: '1',
//       name: 'mission'
//     },
//     {
//       number: '2',
//       name: 'objective'
//     },
//     {
//       number: '3',
//       name: 'keshar-parvat'
//     },
//     {
//       number: '4',
//       name: 'supporting-organization'
//     },
//     {
//       number: '5',
//       name: 'governing-board'
//     },
//      {
//       number: '6',
//       name: 'fellow-member'
//     },
//     {
//       number: '7',
//       name: 'annual-member'
//     },
//     {
//       number: '8',
//       name: 'be-our-editors'
//     },
//     {
//       number: '9',
//       name: 'work-as-reviewer'
//     },
//     {
//       number: '10',
//       name: 'award-for-good-research'
//     },
//     {
//       number: '11',
//       name: 'careers-in-research'
//     },
//     {
//       number: '12',
//       name: 'work-for-us'
//     }
//   ]

}


    
        // $(function () {
        //     var Accordion = function (el, multiple) {
        //         this.el = el || {};
        //         // more then one submenu open?
        //         this.multiple = multiple || false;
    
        //         var dropdownlink = this.el.find('.dropdownlink');
        //         dropdownlink.on('click',
        //                 { el: this.el, multiple: this.multiple },
        //                 this.dropdown);
        //     };
    
        //     Accordion.prototype.dropdown = function (e) {
        //         var $el = e.data.el,
        //     $this = $(this),
        //         //this is the ul.submenuItems
        //     $next = $this.next();
    
        //         $next.slideToggle();
        //         $this.parent().toggleClass('open');
    
        //         if (!e.data.multiple) {
        //             //show only one menu at the same time
        //             $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        //         }
        //     }
    
        //     var accordion = new Accordion($('.accordion-menu'), false);
        // })
        
    