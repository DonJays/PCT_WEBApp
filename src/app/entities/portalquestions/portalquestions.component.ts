import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import { PortalquestionsService } from '../../../services/portalquestions.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-portalquestions',
  templateUrl: './portalquestions.component.html',
  styleUrls: ['./portalquestions.component.scss']
})
export class PortalquestionsComponent implements OnInit {
  portalqstns: FormGroup;
  golive: FormGroup;
  //goLiveData:any;
  marshacode = localStorage.getItem("marshacode");
  golivedate = localStorage.getItem("golivedate");
  postData: any;
  pms: any;
  ems: any;
  operaversion: number;
  fspms: any;
  //lightspeed: any;
  mbs: any;
  btr: any;
  mgl: any;
  futurerate: any;

  constructor(private fb: FormBuilder, private r: Router, private portaldata: PortalquestionsService) {
    this.createForm();
  }

  createForm() {
    this.portalqstns = this.fb.group({
      //marshacode: [localStorage.getItem("marshacode")],
      //golivedate: [localStorage.getItem("golivedate")],
      marshacode: ({ value: this.marshacode, disabled: true }),
      golivedate: ({ value: this.golivedate, disabled: true }),
      pms: [this.pms],
      ems: [this.ems],
      operaversion: [this.operaversion],
      fspms: [this.fspms],
      //lightspeed: [],
      mbs: [this.mbs],
      btr: [this.btr],
      mgl: [this.mgl],
      futurerate: []
    });
  }


  ngOnInit() {
    console.log("PMS Value", this.pms);
    //$('.initiateprop').click();
    //console.log("portaldata", marshacode, golivedate);
    $('.list-unstyled li').eq(0).addClass('active');
    // Get API Call
    this.portaldata.getPortalData(this.marshacode).subscribe(data => {
      console.log(data);
      this.fspms = data.portal_questions[0].fspms_lightspeed_active;
      this.ems = data.portal_questions[0].ems_active;
      this.operaversion = data.portal_questions[0].opera_ver.toString();
      this.pms = data.portal_questions[0].pms_sys;
      this.mbs = data.portal_questions[0].mbs_credit_active;
      this.btr = data.portal_questions[0].btr_active;
      this.mgl = data.portal_questions[0].mhgl_active;
      this.createForm();
    });
  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  submit(portalqstns) {

    console.log(portalqstns.value);
    this.postData = {
      "doc_type": "portal_questions",
      "marsha_code": this.marshacode,
      "golive_date": this.golivedate,
      "portal_questions": [
        {
          "fspms_lightspeed_active": portalqstns.value.fspms,
          "btr_active": portalqstns.value.btr,
          "opera_ver": portalqstns.value.operaversion,
          "mhgl_active": portalqstns.value.mgl,
          "ems_active": portalqstns.value.ems,
          "pms_sys": portalqstns.value.pms,
          "mbs_credit_active": portalqstns.value.mbs
        }
      ],
      "create_date": ""
    };

    // Post API Call
    // this.portaldata.postPortalData(this.postData).subscribe(data => {
    //   //this.r.navigateByUrl('/sleepingroomtypes');
    //   console.log(data);
    // });
    //this.r.navigateByUrl('/sleepingroomtypes');
  }

}
