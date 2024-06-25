import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnualMembersComponent } from './annual-members/annual-members.component';
import { AssociationComponent } from './association/association.component';
import { AwardsForGoodResearchComponent } from './awards-for-good-research/awards-for-good-research.component';
import { BeOurEditorComponent } from './be-our-editor/be-our-editor.component';
import { BinlocationComponent } from './binlocation/binlocation.component';
import { BoughtitemComponent } from './boughtitem/boughtitem.component';
import { BrandnameComponent } from './brandname/brandname.component';
import { CapitalgoodComponent } from './capitalgood/capitalgood.component';
import { CareersInResearchComponent } from './careers-in-research/careers-in-research.component';
import { ContactComponent } from './contact/contact.component';
import { CountryformComponent } from './countryform/countryform.component';
import { CurrencyformComponent } from './currencyform/currencyform.component';
import { CustbilldetailsComponent } from './custbilldetails/custbilldetails.component';
import { CustcontacdetailsComponent } from './custcontacdetails/custcontacdetails.component';
import { CustomerinformationComponent } from './customerinformation/customerinformation.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DutiesComponent } from './duties/duties.component';
import { FollowMembersComponent } from './follow-members/follow-members.component';
import { FooterComponent } from './footer/footer.component';
import { GlimpsesComponent } from './glimpses/glimpses.component';
import { GodownComponent } from './godown/godown.component';
import { GoverningBoardComponent } from './governing-board/governing-board.component';
import { ItemchategoryComponent } from './itemchategory/itemchategory.component';
import { JobworkComponent } from './jobwork/jobwork.component';
import { JournalsComponent } from './journals/journals.component';
import { KesharParvatComponent } from './keshar-parvat/keshar-parvat.component';
import { LoginComponent } from './login/login.component';
import { MachineidelcodeComponent } from './machineidelcode/machineidelcode.component';
import { MachineinfoComponent } from './machineinfo/machineinfo.component';
import { MachinemaintananceComponent } from './machinemaintanance/machinemaintanance.component';
import { MachinetypesComponent } from './machinetypes/machinetypes.component';
import { MembershipComponent } from './membership/membership.component';
import { MissionComponent } from './mission/mission.component';
// import { NoticeComponent } from './notice/notice.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { OurPoliciesComponent } from './our-policies/our-policies.component';
import { ProcessComponent } from './process/process.component';
import { ProductionitemComponent } from './productionitem/productionitem.component';
import { ProductionstatuscodeComponent } from './productionstatuscode/productionstatuscode.component';
import { RegistrationComponent } from './registration/registration.component';
import { StateformComponent } from './stateform/stateform.component';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
import { SupbilldetailsComponent } from './supbilldetails/supbilldetails.component';
import { SupcontactdetailsComponent } from './supcontactdetails/supcontactdetails.component';
import { SuppartydetailsComponent } from './suppartydetails/suppartydetails.component';
import { SupportingOrganizationComponent } from './supporting-organization/supporting-organization.component';
import { TaxinfoComponent } from './taxinfo/taxinfo.component';
import { TransportComponent } from './transport/transport.component';
import { UnitmeasurementComponent } from './unitmeasurement/unitmeasurement.component';
import { VendorbilldetailsComponent } from './vendorbilldetails/vendorbilldetails.component';
import { VendorcontactdetailsComponent } from './vendorcontactdetails/vendorcontactdetails.component';
import { VendorpartydetailsComponent } from './vendorpartydetails/vendorpartydetails.component';
import { VendorwiseprocessComponent } from './vendorwiseprocess/vendorwiseprocess.component';
import { WorkAsReviewerComponent } from './work-as-reviewer/work-as-reviewer.component';
import { WorkForUsComponent } from './work-for-us/work-for-us.component';


const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path: 'registration', component: RegistrationComponent},
  // {path: '', redirectTo:'Login', pathMatch:'full'},
  // {path: 'association', component: AssociationComponent},
  // {path: 'journals', component: JournalsComponent},
  // {path: 'our-policies', component: OurPoliciesComponent},
  // {path: 'membership', component: MembershipComponent},
  // {path: 'online-payment', component: OnlinePaymentComponent},
  // {path: 'downloads', component: DownloadsComponent},
  // {path: 'glimpses', component: GlimpsesComponent},
  // {path: 'mission', component: MissionComponent},
  // {path: 'objective', component: ContactComponent},
  // {path: 'keshar-parvat', component: KesharParvatComponent},
  // {path: 'supporting-organization', component: SupportingOrganizationComponent},
  // {path: 'governing-board', component: GoverningBoardComponent},
  // {path: 'follow-members', component: FollowMembersComponent},
  // {path: 'annual-members', component: AnnualMembersComponent},
  // {path: 'be-our-editor', component: BeOurEditorComponent},
  // {path: 'work-as-reviewer', component: WorkAsReviewerComponent},
  // {path: 'awards-for-good-research', component: AwardsForGoodResearchComponent},
  // {path: 'careers-in-research', component: CareersInResearchComponent},
  // {path: 'work-for-us', component: WorkForUsComponent},
  // {path: 'footer', component: FooterComponent}
  // {path: 'notice', component: NoticeComponent},

  {path: 'currencyform', component: CurrencyformComponent},
  {path: 'countryform', component: CountryformComponent},
  {path: 'stateform', component: StateformComponent},
  {path: '', component: CustomerinformationComponent },
  {path: 'custbilldetails', component: CustbilldetailsComponent},
  {path: 'custcontacdetails', component: CustcontacdetailsComponent},
  {path: 'customerinformation', component: CustomerinformationComponent},

  {path: '', component: SuppartydetailsComponent },
  {path: 'supbilldetails', component: SupbilldetailsComponent},
  {path: 'supcontactdetails', component: SupcontactdetailsComponent},
  {path: 'suppartydetails', component: SuppartydetailsComponent },

  {path: '', component: VendorpartydetailsComponent },
  {path: 'vendorbilldetails', component: VendorbilldetailsComponent},
  {path: 'vendorcontactdetails', component: VendorcontactdetailsComponent},
  {path: 'vendorpartydetails', component: VendorpartydetailsComponent},

  {path: 'storeinfo', component: StoreinfoComponent},
  {path: 'brandname', component: BrandnameComponent},
  {path: 'itemchategory', component: ItemchategoryComponent},
  {path: 'unitmeasurment', component: UnitmeasurementComponent},
  {path: 'binlocation', component: BinlocationComponent},
  {path: 'productionitem', component: ProductionitemComponent},
  {path: 'boughtitem', component: BoughtitemComponent},
  {path: 'jobwork', component: JobworkComponent},
  {path: 'capitalgood', component: CapitalgoodComponent},
  {path: 'duties', component: DutiesComponent},
  {path: 'taxinfo', component: TaxinfoComponent},
  {path: 'transport', component: TransportComponent},
  {path: 'godown', component: GodownComponent},
  {path: 'machinetypes', component: MachinetypesComponent},
  {path: 'machininfo', component: MachineinfoComponent},
  {path: 'machineidelcode', component: MachineidelcodeComponent},
  {path: 'machinemaintanance', component: MachinemaintananceComponent},
  {path: 'productionstatuscode', component: ProductionstatuscodeComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'vendorwiseprocess', component: VendorwiseprocessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
