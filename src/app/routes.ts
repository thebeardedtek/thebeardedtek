import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivacyComponent } from './components/legal/privacy/privacy.component';
import { MarketingComponent } from './components/pages/marketing/marketing.component';
import { TermsComponent } from './components/legal/terms/terms.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { ClientsPageComponent } from './components/pages/clients-page/clients-page.component';
import { WebDesignPageComponent } from './components/pages/web-design-page/web-design-page.component';
import { MobileAppsPageComponent } from './components/pages/mobile-apps-page/mobile-apps-page.component';
import * as $ from 'jquery';
import { DemoComponent } from './components/pages/demo/demo.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LearningComponent } from './components/pages/learning/learning.component';
import { GettingStartedComponent } from './components/pages/getting-started/getting-started.component';
import { SyllabusComponent } from './components/pages/syllabus/syllabus.component';
import { EcoursesComponent } from './components/pages/ecourses/ecourses.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { TalentedComponent } from './components/pages/talented/talented/talented.component';
import { PromoComponent } from './components/pages/promo/promo.component';
import { WhatIsHtmlComponent } from './components/pages/courses/html/what-is-html/what-is-html.component';

// do not remove below
import { AppGuard } from './app.guard';

  const beardedRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', runGuardsAndResolvers: 'always'},
    { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always'},
    { path: 'pricing', component: PricingPageComponent, runGuardsAndResolvers: 'always'},
    { path: 'mobile-apps', component: MobileAppsPageComponent, runGuardsAndResolvers: 'always'},
    { path: 'web-design', component: WebDesignPageComponent, runGuardsAndResolvers: 'always'},
    { path: 'demo', component: DemoComponent, runGuardsAndResolvers: 'always'},
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

    // { path: 'routeName', component: RouteComponent, runGuardsAndResolvers: 'always', canActivate: [AppGuard]},
    { path: '**', component: HomeComponent, runGuardsAndResolvers: 'always'}
  ];

  export default beardedRoutes;
