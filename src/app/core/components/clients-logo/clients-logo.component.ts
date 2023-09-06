import { Component, OnInit } from '@angular/core';

interface client {
  image: string;
}

@Component({
  selector: 'app-clients-logo',
  templateUrl: './clients-logo.component.html',
  styleUrls: ['./clients-logo.component.scss'],
})
export class ClientsLogoComponent implements OnInit {
  /**
   * Clients Logo
   */
  clients_logo: client[] = [
    {
      image: 'assets/images/clients/amazon.svg',
    },
    {
      image: 'assets/images/clients/dribble.svg',
    },
    {
      image: 'assets/images/clients/facebook.svg',
    },
    {
      image: 'assets/images/clients/google.svg',
    },
    {
      image: 'assets/images/clients/instagram.svg',
    },
    {
      image: 'assets/images/client/lenovo.svg',
    },
    {
      image: 'assets/images/client/paypal.svg',
    },
    {
      image: 'assets/images/client/shopify.svg',
    },
    {
      image: 'assets/images/client/spotify.svg',
    },
    {
      image: 'assets/images/clients/tinder.svg',
    },
    {
      image: 'assets/images/clients/whatsapp.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
