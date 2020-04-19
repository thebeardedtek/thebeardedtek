import './../polyfills';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { ScrollEventModule } from 'ngx-scroll-event';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/widgets/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioCtaComponent } from './components/widgets/portfolio-cta/portfolio-cta.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsPageComponent } from './components/pages/solutions-page/solutions-page.component';
import { PricingWidgetComponent } from './components/widgets/pricing-widget/pricing-widget.component';
import { MaintenanceWidgetComponent } from './components/widgets/maintenance-widget/maintenance-widget.component';
import { PrivacyComponent } from './components/legal/privacy/privacy.component';
import { MarketingComponent } from './components/pages/marketing/marketing.component';
import { PageHeaderComponent } from './components/pages/page-header/page-header.component';
import { TermsComponent } from './components/legal/terms/terms.component';
import { DesignComponent } from './components/widgets/design/design.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';
import { PageHeroComponent } from './components/pages/page-hero/page-hero.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { environment } from '../environments/environment';
import { ClientsPageComponent } from './components/pages/clients-page/clients-page.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { SecurityCtaComponent } from './components/widgets/security-cta/security-cta.component';
import { WebDesignPageComponent } from './components/pages/web-design-page/web-design-page.component';
import { MobileAppsPageComponent } from './components/pages/mobile-apps-page/mobile-apps-page.component';
import * as $ from 'jquery';
import { DemoComponent } from './components/pages/demo/demo.component';
import { PromoComponent } from './components/pages/promo/promo.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ContactWidgetComponent } from './components/widgets/contact-widget/contact-widget.component';
import { ContactHomeComponent } from './components/widgets/contact-home/contact-home.component';
import { LearningComponent } from './components/pages/learning/learning.component';
import { GettingStartedComponent } from './components/pages/getting-started/getting-started.component';
import { SyllabusComponent } from './components/pages/syllabus/syllabus.component';
import { EcoursesComponent } from './components/pages/ecourses/ecourses.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { SocialComponent } from './components/widgets/social/social.component';
import { HomeCtaComponent } from './components/widgets/home-cta/home-cta.component';
import { MainSidebarComponent } from './components/widgets/main-sidebar/main-sidebar.component';
import { ClientDetailsComponent } from './components/pages/clients-page/client-details/client-details/client-details.component';
import { ClientCoursesComponent } from './components/pages/clients-page/client-courses/client-courses/client-courses.component';
import { ClientProfileComponent } from './components/pages/clients-page/client-profile/client-profile/client-profile.component';
import { ClientSecurityComponent } from './components/pages/clients-page/client-security/client-security/client-security.component';
import { ClientPreferencesComponent } from './components/pages/clients-page/client-preferences/client-preferences/client-preferences.component';
import { ClientInboxComponent } from './components/pages/clients-page/client-inbox/client-inbox/client-inbox.component';
import { CoursesSidebarComponent } from './components/widgets/courses-sidebar/courses-sidebar/courses-sidebar.component';
import { LoginModalComponent } from './components/widgets/login-modal/login-modal.component';
import { BannerComponent } from './components/widgets/banner/banner.component';
import { PricingHeaderComponent } from './components/widgets/pricing-widget/pricing-header/pricing-header.component';
import { PricingTableComponent } from './components/widgets/pricing-widget/pricing-table/pricing-table.component';
import { PricingTableQuestionsComponent } from './components/widgets/pricing-widget/pricing-table-questions/pricing-table-questions.component';
import { PricingCtaComponent } from './components/widgets/pricing-widget/pricing-cta/pricing-cta.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ClientLogosComponent } from './components/widgets/client-logos/client-logos.component';
import { ClientTestimonialsComponent } from './components/widgets/client-testimonials/client-testimonials.component';
import { SolutionsCtaComponent } from './components/widgets/solutions-cta/solutions-cta.component';
import { SpinnerComponent } from './components/widgets/spinner/spinner/spinner.component';
import { ClientBillingComponent } from './components/pages/clients-page/client-billing/client-billing/client-billing.component';
import { ClientProjectsComponent } from './components/pages/clients-page/client-projects/client-projects/client-projects.component';
import { TalentedComponent } from './components/pages/talented/talented/talented.component';
// import beardedRoutes from './routes';
import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';
import { WhatIsHtmlComponent } from './components/pages/courses/html/what-is-html/what-is-html.component';
import { AppGuard } from './app.guard';
import { E404Component } from './components/pages/error/e404/e404.component';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const beardedRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', runGuardsAndResolvers: 'always'},
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always'},
  { path: 'pricing', component: PricingPageComponent, runGuardsAndResolvers: 'always'},
  { path: 'mobile-apps', component: MobileAppsPageComponent, runGuardsAndResolvers: 'always'},
  { path: 'web-design', component: WebDesignPageComponent, runGuardsAndResolvers: 'always'},
  { path: 'demo', component: DemoComponent, runGuardsAndResolvers: 'always'},
  { path: 'login', component: LoginModalComponent, runGuardsAndResolvers: 'always'},
  { path: 'clients', component: ClientsPageComponent, runGuardsAndResolvers: 'always', canActivate: [AppGuard]},
  { path: 'portfolio', component: PortfolioPageComponent, runGuardsAndResolvers: 'always'},
  { path: 'security', component: SecurityComponent, runGuardsAndResolvers: 'always'},
  { path: 'privacy', component: PrivacyComponent, runGuardsAndResolvers: 'always'},
  { path: 'promo', component: PromoComponent, runGuardsAndResolvers: 'always'},
  { path: 'promo/:type', component: PromoComponent, runGuardsAndResolvers: 'always'},
  { path: 'terms', component: TermsComponent, runGuardsAndResolvers: 'always'},
  { path: 'contact', component: ContactComponent, runGuardsAndResolvers: 'always'},
  { path: 'learn-to-code', component: LearningComponent, runGuardsAndResolvers: 'always'},
  { path: 'signup/:plan', component: SignupComponent, runGuardsAndResolvers: 'always'},
  { path: 'signup', component: SignupComponent, runGuardsAndResolvers: 'always'},
  { path: 'getting-started', component: GettingStartedComponent, runGuardsAndResolvers: 'always'},
  { path: 'syllabus', component: SyllabusComponent, runGuardsAndResolvers: 'always'},
  { path: 'ecourses', component: EcoursesComponent, runGuardsAndResolvers: 'always'},
  { path: 'ecourses/html/what-is-html', component: WhatIsHtmlComponent, runGuardsAndResolvers: 'always'},
  { path: 'documents', component: DocumentsComponent, runGuardsAndResolvers: 'always'},
  { path: 'marketing', component: MarketingComponent, runGuardsAndResolvers: 'always'},
  { path: 'talented', component: TalentedComponent, runGuardsAndResolvers: 'always'},
  { path: 'e404', component: E404Component, runGuardsAndResolvers: 'always'},

  // { path: 'routeName', component: RouteComponent, runGuardsAndResolvers: 'always', canActivate: [AppGuard]},
  { path: '**', component: HomeComponent, runGuardsAndResolvers: 'always'}
];


const jwtConfig = {
  tokenGetter: tokenGetter,
  whitelistedDomains: ['thebeardedtek.com', 'api.thebeardedtek.com', 'localhost:4200', 'localhost:3000'],
  blacklistedRoutes: []
};

@NgModule({
  declarations: [
    // tslint:disable-next-line: max-line-length
    AppComponent, HeroComponent, PortfolioComponent, HeaderComponent, FooterComponent, PortfolioCtaComponent, SectionHeaderComponent, HomeComponent, SolutionsPageComponent, PricingWidgetComponent, PrivacyComponent, MarketingComponent, PageHeaderComponent, TermsComponent, DesignComponent, PricingPageComponent, PortfolioPageComponent, PageHeroComponent, MaintenanceWidgetComponent, SecurityComponent, ClientsPageComponent, MaintenanceComponent, SecurityCtaComponent, WebDesignPageComponent, MobileAppsPageComponent, DemoComponent, PromoComponent, ContactComponent, ContactWidgetComponent, ContactHomeComponent, LearningComponent, GettingStartedComponent, SyllabusComponent, EcoursesComponent, DocumentsComponent, SocialComponent, HomeCtaComponent, MainSidebarComponent, ClientDetailsComponent, ClientCoursesComponent, ClientProfileComponent, ClientSecurityComponent, ClientPreferencesComponent, ClientInboxComponent, CoursesSidebarComponent, LoginModalComponent, BannerComponent, PricingHeaderComponent, PricingTableComponent, PricingTableQuestionsComponent, PricingCtaComponent, SignupComponent, ClientLogosComponent, ClientTestimonialsComponent, SolutionsCtaComponent, SpinnerComponent, ClientBillingComponent, ClientProjectsComponent, TalentedComponent, WhatIsHtmlComponent, E404Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // tslint:disable-next-line: max-line-length
    RouterModule.forRoot(beardedRoutes, { enableTracing: false, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top'}), HttpClientModule, JwtModule.forRoot({config: jwtConfig}), FormsModule, ReactiveFormsModule, MatNativeDateModule, BrowserAnimationsModule, DemoMaterialModule,
    MatSlideToggleModule, RouterModule, ScrollEventModule
  ],
  providers: [Title, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

