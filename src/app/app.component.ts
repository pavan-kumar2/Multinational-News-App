
import { Component, HostListener, OnInit } from '@angular/core';
import { SELECTED_COUNTRY } from './shared/country.constants';
import { Meta, Title } from '@angular/platform-browser';
import { NewsApiService } from './services/news-api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Multinational-News-App';

  selectedCountry: string = SELECTED_COUNTRY;

  isScrollTopButton: boolean = false;

  constructor(private metaService: Meta, private titleService: Title, private newsApiService: NewsApiService) { }

  @HostListener('window:scroll', []) onWindowScroll() {

    if (window.scrollY > 200) {
      this.isScrollTopButton = true;
    } else {
      this.isScrollTopButton = false;
    }

  }


  // To make app more SEO-friendly, need to set meta tags dynamically 
  ngOnInit() {
    this.titleService.setTitle('Multinational News App - Global News');
    this.metaService.updateTag({ name: 'description', content: 'Stay updated with the global news from around the world.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Multinational News App - global Updates' });
    this.metaService.updateTag({ property: 'og:description', content: 'Stay updated with the latest news from around the world.' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/images/MN-logo.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://multinational-news-app.netlify.app' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:title', content: 'Multinational News App - global Updates' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'Stay updated with the latest news from around the world.' });
    this.metaService.updateTag({ property: 'twitter:image', content: 'assets/images/MN-logo.png' });

    this.addStructureData();

  }

  addStructureData() {
    this.newsApiService.getFormattedDate()

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = `{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "${this.selectedCountry}",
        "image": "assets/images/MN-logo.png",
        "datePublished": "${this.newsApiService.formateDate}",
        "author": {
          "@type": "Person",
          "name": "Unknown"
        }
      }`

    document.head.appendChild(script);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
