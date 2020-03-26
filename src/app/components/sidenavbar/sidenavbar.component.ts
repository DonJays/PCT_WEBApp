import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#dismiss, .overlay').on('click', function () {
      $(".list-unstyled li").each(function () {
        $(this).find("span").eq(1).addClass('dsply-none');
      });
      $('#sidebarCollapse').removeClass('dsply-none');
      $('#dismiss').addClass('dsply-none');
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse').on('click', function () {
      $(".list-unstyled li").each(function () {
        $(this).find("span").eq(1).removeClass('dsply-none');
      });
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
      $('#dismiss').removeClass('dsply-none');
      $(this).addClass('dsply-none');
    });

  }

}
