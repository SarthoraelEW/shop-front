import { Collection } from './model/Collection';
import { Offer } from './model/Offer';
import { Product } from './model/Product';

export const mockedOffer: Offer = {
  id: 'offer1',
  bannery: 'https://boutiqueponce.fr/cdn/shop/files/BoutiquePonce_Banniere_V3_1920x350.jpg?v=1687101790',
  minimumOfferPrice: 75,
  gifts: ['serviette', 'jeu-de-societe']
};

export const mockedCollections: Collection[] = [
  {
    id: 'collection-1',
    name: 'collections-ephemeres',
    label: 'Collection saisonnières',
    bannery: 'https://boutiqueponce.fr/cdn/shop/files/banner_boutique_ponce_1-42_1920x350.jpg?v=1641850932',
    isThemeCollection: true,
    products: ['chaussettes-noel', 'crewneck-fleur-orange', 'tee-shirt-fleur-lavande', 'serviette', 'cahier']
  },
  {
    id: 'collection-2',
    name: 'collection-fleurs',
    label: 'Collection Fleur',
    bannery: 'https://boutiqueponce.fr/cdn/shop/files/banner_boutique_ponce_1-2_1920x350.jpg?v=1641850870',
    isThemeCollection: true,
    products: [
      'casquette',
      'veste-fleur',
      'hoodie-fleur',
      'tee-shirt-fleur',
      'tee-shirt-ponce-arkestar',
      'chaussettes-fleur',
      'socquettes-fleur',
      'gourde',
      'kit-fleuri',
      'mug',
      'jeu-de-cartes',
      'porte-cle',
      'carnet',
      'bob-fleur',
      'jeu-de-societe'
    ]
  },
  {
    id: 'collection-3',
    name: 'collection-fleurs-de-lombre',
    label: "Collection Fleur de l'ombre",
    bannery: 'https://boutiqueponce.fr/cdn/shop/files/banner_boutique_ponce_1-3_1920x350.jpg?v=1641850885',
    isThemeCollection: true,
    products: [
      'tee-shirt-ombre-arkestar',
      'bonnet-ombre',
      'crewneck-ombre',
      'jogging-ombre',
      'tee-shirt-ombre',
      'chaussettes-ombre',
      'sac',
      'bob-ombre'
    ]
  },
  {
    id: 'collection-4',
    name: 'header',
    label: 'header',
    bannery: '',
    isThemeCollection: false,
    products: ['chaussettes-noel', 'tee-shirt-ombre-arkestar', 'casquette', 'bonnet-ombre']
  }
];

export const mockedProducts: Product[] = [
  {
    id: 'chaussettes-noel',
    name: 'chaussettes-fleur-de-noel',
    label: 'Chaussettes de Noël',
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/files/16_1_1024x1024.jpg?v=1701592360'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 10.4
      }
    ]
  },
  {
    id: 'tee-shirt-ombre-arkestar',
    name: 'copie-de-tee-shirt-ponce-by-arkestar',
    label: `Tee-Shirt "Fleur de l'ombre" by Arkestar`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/files/sofiane_MG_9248_3_1024x1024.jpg?v=1697439844'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 30.9
      }
    ]
  },
  {
    id: 'casquette',
    name: 'casquette-boules',
    label: `Casquette Boules`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/files/theo_A7403202_1_1024x1024.jpg?v=1697439531'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 20.9
      }
    ]
  },
  {
    id: 'bonnet-ombre',
    name: 'bonnet-fleur-de-lombre',
    label: `Bonnet "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/BonnetFond_1024x1024.jpg?v=1665471426'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 20.9
      }
    ]
  },
  {
    id: 'veste-fleur',
    name: 'hoodie-zip',
    label: `Veste Fleur - Doublure Sherpa`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/veste-sherpa_1024x1024.jpg?v=1674460860'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 74.9
      }
    ]
  },
  {
    id: 'hoodie-fleur',
    name: 'hoodie-fleur',
    label: `Hoodie Fleur`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/HoodieFleur_1024x1024.jpg?v=1665473820'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 46.9
      }
    ]
  },
  {
    id: 'crewneck-ombre',
    name: 'crewneck-fleur-de-lombre-gris',
    label: `Crewneck "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/CrewneckOmbre_1024x1024.jpg?v=1665473270'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 46.9
      }
    ]
  },
  {
    id: 'crewneck-fleur-orange',
    name: 'crewneck-dhalloween',
    label: `Crewneck Fleur Orange - édition limitée`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/CrewneckHalloween_1024x1024.jpg?v=1665473548'],
    sale: 39.9,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 49.9
      }
    ]
  },
  {
    id: 'jogging-ombre',
    name: 'jogging-fleur-de-lombre',
    label: `Jogging "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/JoggingPonce_1024x1024.jpg?v=1665475675'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 46.9
      }
    ]
  },
  {
    id: 'tee-shirt-fleur',
    name: 'tee-shirt-fleur',
    label: `Tee-Shirt Fleur`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/TeeShirtFleur_1024x1024.jpg?v=1665477003'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 25.9
      }
    ]
  },
  {
    id: 'tee-shirt-fleur-ponce-arkestar',
    name: 'tee-shirt-arkestar',
    label: `Tee-Shirt Ponce by Arkestar`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/TeeShirtArkestar_1024x1024.jpg?v=1665479227'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 30.9
      }
    ]
  },
  {
    id: 'tee-shirt-ombre',
    name: 'tee-shirt-fleur-de-lombre',
    label: `Tee-Shirt "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/TeeShirtOmbre_1024x1024.jpg?v=1665477523'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 25.9
      }
    ]
  },
  {
    id: 'tee-shirt-fleur-lavande',
    name: 'tee-shirt-fleur-lavande',
    label: `Tee-Shirt Fleur Lavande`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/TeeShirtLavande_1024x1024.png?v=1665478907'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 25.9
      }
    ]
  },
  {
    id: 'chaussettes-fleur',
    name: 'chaussette',
    label: `Chaussettes Fleur`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/Chaussettes_1024x1024.jpg?v=1665472766'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 10.4
      }
    ]
  },
  {
    id: 'chaussettes-ombre',
    name: 'chaussettes-fleur-de-lombre',
    label: `Chaussettes "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/ChaussettesFLeurOmbre_1024x1024.jpg?v=1665472473'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 10.4
      }
    ]
  },
  {
    id: 'socquettes-fleur',
    name: 'socquettes-fleur',
    label: `Socquettes Fleur`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/SocquettesFleur_1024x1024.png?v=1665476666'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 10.4
      }
    ]
  },
  {
    id: 'sac',
    name: 'sac-de-voyage-fleur-de-lombre-gris',
    label: `Sac de voyage "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/SacVoyage_1024x1024.jpg?v=1665476230'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 59.9
      }
    ]
  },
  {
    id: 'kit-fleuri',
    name: 'kit',
    label: `Kit Fleuri`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/files/kit-fleuri_1024x1024.jpg?v=1683297286'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 16.9
      }
    ]
  },
  {
    id: 'mug',
    name: 'mug',
    label: `Mug Kawa`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/MugKawa_1024x1024.jpg?v=1665475896'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 14.9
      }
    ]
  },
  {
    id: 'jeu-de-cartes',
    name: 'jeu-de-carte-ponce',
    label: `Jeu de cartes Ponce by Arkestar`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/JeuCartes_1024x1024.jpg?v=1665475428'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 12.9
      }
    ]
  },
  {
    id: 'porte-cle',
    name: 'porte-cles-fleur',
    label: `Porte-clés Fleur`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/PorteClesFleur_1024x1024.jpg?v=1665476031'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 9.9
      }
    ]
  },
  {
    id: 'carnet',
    name: 'carnet-fleur-ponce',
    label: `Carnet Fleur by Copainduweb`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/CarnetPonce_1024x1024.jpg?v=1665472231'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 19.9
      }
    ]
  },
  {
    id: 'bob-fleur',
    name: 'bob-fleur',
    label: `Bob Fleur`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/Bob_1024x1024.jpg?v=1665471022'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 20.9
      }
    ]
  },
  {
    id: 'bob-ombre',
    name: 'bob-fleur-de-lombre',
    label: `Bob "Fleur de l'ombre"`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/BobFleurDeLombre_1024x1024.png?v=1665470816'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 20.9
      }
    ]
  },
  {
    id: 'serviette',
    name: 'serviette-de-plage-fleur',
    label: `Serviette by Copainduweb`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/ServiettePlage_1024x1024.png?v=1665476477'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 24.9
      }
    ]
  },
  {
    id: 'jeu-de-societe',
    name: 'jeu-de-societe-ponce',
    label: `Le Slowrunner`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/Slowrunner_1024x1024.jpg?v=1665479551'],
    sale: 19.95,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 24.95
      }
    ]
  },
  {
    id: 'cahier',
    name: 'cahier-de-vacances-pour-adultes',
    label: `Cahier de jeux - L'Aventure des Fleurs`,
    description: '',
    images: ['https://boutiqueponce.fr/cdn/shop/products/CahierJeux_1024x1024.png?v=1665471642'],
    sale: null,
    variants: [
      {
        id: '',
        style: '',
        size: '',
        color: '',
        price: 9.95
      }
    ]
  }
];
