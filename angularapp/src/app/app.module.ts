import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssociationComponent } from './association/association.component';
import { JournalsComponent } from './journals/journals.component';
import { OurPoliciesComponent } from './our-policies/our-policies.component';
import { MembershipComponent } from './membership/membership.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { GlimpsesComponent } from './glimpses/glimpses.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AboutWraJournalsComponent } from './about-wra-journals/about-wra-journals.component';
// import { OurJournalsComponent } from './our-journals/our-journals.component';
// import { InstructionToAuthorsComponent } from './instruction-to-authors/instruction-to-authors.component';
// import { ResearchJournalsOfChemAndEnvirnmentComponent } from './research-journals-of-chem-and-envirnment/research-journals-of-chem-and-envirnment.component';
import { MissionComponent } from './mission/mission.component';
import { ObjectiveComponent } from './objective/objective.component';
import { KesharParvatComponent } from './keshar-parvat/keshar-parvat.component';
import { SupportingOrganizationComponent } from './supporting-organization/supporting-organization.component';
import { GoverningBoardComponent } from './governing-board/governing-board.component';
import { FollowMembersComponent } from './follow-members/follow-members.component';
import { AnnualMembersComponent } from './annual-members/annual-members.component';
import { BeOurEditorComponent } from './be-our-editor/be-our-editor.component';
import { WorkAsReviewerComponent } from './work-as-reviewer/work-as-reviewer.component';
import { WorkForUsComponent } from './work-for-us/work-for-us.component';
import { CareersInResearchComponent } from './careers-in-research/careers-in-research.component';
import { AwardsForGoodResearchComponent } from './awards-for-good-research/awards-for-good-research.component';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CurrencyformComponent } from './currencyform/currencyform.component';
import { CountryformComponent } from './countryform/countryform.component';
import { StateformComponent } from './stateform/stateform.component';
import { CurrencypipePipe } from './currencypipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CustomerinformationComponent } from './customerinformation/customerinformation.component';
import { CustbilldetailsComponent } from './custbilldetails/custbilldetails.component';
import { CustcontacdetailsComponent } from './custcontacdetails/custcontacdetails.component';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
import { BrandnameComponent } from './brandname/brandname.component';
import { ItemchategoryComponent } from './itemchategory/itemchategory.component';
import { SuppartydetailsComponent } from './suppartydetails/suppartydetails.component';
import { SupbilldetailsComponent } from './supbilldetails/supbilldetails.component';
import { SupcontactdetailsComponent } from './supcontactdetails/supcontactdetails.component';
import { VendorpartydetailsComponent } from './vendorpartydetails/vendorpartydetails.component';
import { VendorbilldetailsComponent } from './vendorbilldetails/vendorbilldetails.component';
import { VendorcontactdetailsComponent } from './vendorcontactdetails/vendorcontactdetails.component';
import { UnitmeasurementComponent } from './unitmeasurement/unitmeasurement.component';
import { BinlocationComponent } from './binlocation/binlocation.component';
import { ProductionitemComponent } from './productionitem/productionitem.component';
import { BoughtitemComponent } from './boughtitem/boughtitem.component';
import { JobworkComponent } from './jobwork/jobwork.component';
import { CapitalgoodComponent } from './capitalgood/capitalgood.component';
import { DutiesComponent } from './duties/duties.component';
import { TaxinfoComponent } from './taxinfo/taxinfo.component';
import { TransportComponent } from './transport/transport.component';
import { GodownComponent } from './godown/godown.component';
import { MachinetypesComponent } from './machinetypes/machinetypes.component';
import { MachineinfoComponent } from './machineinfo/machineinfo.component';
import { MachineidelcodeComponent } from './machineidelcode/machineidelcode.component';
import { MachinemaintananceComponent } from './machinemaintanance/machinemaintanance.component';
import { ProductionstatuscodeComponent } from './productionstatuscode/productionstatuscode.component';
import { ProcessComponent } from './process/process.component';
import { VendorwiseprocessComponent } from './vendorwiseprocess/vendorwiseprocess.component';

// import { ServerComponent } from './server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AssociationComponent,
    JournalsComponent,
    OurPoliciesComponent,
    MembershipComponent,
    OnlinePaymentComponent,
    DownloadsComponent,
    GlimpsesComponent,
    ContactComponent,
    AboutWraJournalsComponent,
    // OurJournalsComponent,
    // InstructionToAuthorsComponent,
    // ResearchJournalsOfChemAndEnvirnmentComponent,
    MissionComponent,
    ObjectiveComponent,
    KesharParvatComponent,
    SupportingOrganizationComponent,
    GoverningBoardComponent,
    FollowMembersComponent,
    AnnualMembersComponent,
    BeOurEditorComponent,
    WorkAsReviewerComponent,
    WorkForUsComponent,
    CareersInResearchComponent,
    AwardsForGoodResearchComponent,
    CurrencyformComponent,
    CountryformComponent,
    StateformComponent,
    CurrencypipePipe,
    EmployeedetailsComponent,
    CustomerinformationComponent,
    CustbilldetailsComponent,
    CustcontacdetailsComponent,
    StoreinfoComponent,
    BrandnameComponent,
    ItemchategoryComponent,
    SuppartydetailsComponent,
    SupbilldetailsComponent,
    SupcontactdetailsComponent,
    VendorpartydetailsComponent,
    VendorbilldetailsComponent,
    VendorcontactdetailsComponent,
    UnitmeasurementComponent,
    BinlocationComponent,
    ProductionitemComponent,
    BoughtitemComponent,
    JobworkComponent,
    CapitalgoodComponent,
    DutiesComponent,
    TaxinfoComponent,
    TransportComponent,
    GodownComponent,
    MachinetypesComponent,
    MachineinfoComponent,
    MachineidelcodeComponent,
    MachinemaintananceComponent,
    ProductionstatuscodeComponent,
    ProcessComponent,
    VendorwiseprocessComponent,


  
    
    // ServerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    HttpClientModule,
    // MatPaginator,
    // MatSort,
    // FormsModule,
    MatTableModule,
    // MatToolbar
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
