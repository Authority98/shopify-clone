/**
 * Product Data
 * 
 * Contains mock product data with realistic information and Unsplash images.
 */

export interface Product {
  id: number
  name: string
  price: number
  description: string
  category: 'clothing' | 'electronics' | 'home'
  rating: number
  images: {
    id: number
    url: string
    alt: string
  }[]
}

export const products: Product[] = [
  // Clothing Category
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'A timeless white t-shirt made from 100% organic cotton. Features a comfortable fit and durable construction.',
    category: 'clothing',
    rating: 4.5,
    images: [
      {
        id: 1001,
        url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820',
        alt: 'Classic white t-shirt front view'
      },
      {
        id: 1002,
        url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        alt: 'Classic white t-shirt on model'
      },
      {
        id: 1003,
        url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
        alt: 'Classic white t-shirt material detail'
      }
    ]
  },
  {
    id: 2,
    name: 'Slim Fit Denim Jeans',
    price: 79.99,
    description: 'Modern slim fit jeans in dark wash denim. Features stretch fabric for comfort and style.',
    category: 'clothing',
    rating: 4.3,
    images: [
      {
        id: 2001,
        url: 'https://images.unsplash.com/photo-1604176354204-9268737828e4',
        alt: 'Slim fit jeans front view'
      },
      {
        id: 2002,
        url: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
        alt: 'Slim fit jeans on model'
      },
      {
        id: 2003,
        url: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb',
        alt: 'Slim fit jeans detail'
      }
    ]
  },
  {
    id: 3,
    name: 'Wool Blend Sweater',
    price: 89.99,
    description: 'Cozy wool blend sweater perfect for cold weather. Features ribbed cuffs and hem.',
    category: 'clothing',
    rating: 4.7,
    images: [
      {
        id: 3001,
        url: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9',
        alt: 'Wool sweater front view'
      },
      {
        id: 3002,
        url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
        alt: 'Wool sweater on model'
      },
      {
        id: 3003,
        url: 'https://images.unsplash.com/photo-1584670747417-594a9412fba5',
        alt: 'Wool sweater texture detail'
      }
    ]
  },

  // Electronics Category
  {
    id: 4,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 249.99,
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    category: 'electronics',
    rating: 4.8,
    images: [
      {
        id: 4001,
        url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        alt: 'Wireless headphones product shot'
      },
      {
        id: 4002,
        url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
        alt: 'Wireless headphones in use'
      },
      {
        id: 4003,
        url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944',
        alt: 'Wireless headphones detail view'
      }
    ]
  },
  {
    id: 5,
    name: 'Smart 4K TV - 55"',
    price: 699.99,
    description: 'Ultra HD Smart TV with HDR and built-in streaming apps. Features crystal-clear picture quality.',
    category: 'electronics',
    rating: 4.6,
    images: [
      {
        id: 5001,
        url: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
        alt: 'Smart TV front view'
      },
      {
        id: 5002,
        url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
        alt: 'Smart TV in modern living room'
      },
      {
        id: 5003,
        url: 'https://images.unsplash.com/photo-1601944177325-f8867652837f',
        alt: 'Smart TV interface display'
      }
    ]
  },
  {
    id: 6,
    name: 'Smartphone Pro Max',
    price: 999.99,
    description: 'Latest flagship smartphone with advanced camera system and all-day battery life.',
    category: 'electronics',
    rating: 4.9,
    images: [
      {
        id: 6001,
        url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab',
        alt: 'Smartphone front view'
      },
      {
        id: 6002,
        url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
        alt: 'Smartphone features display'
      },
      {
        id: 6003,
        url: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e',
        alt: 'Smartphone camera demo'
      }
    ]
  },

  // Home Category
  {
    id: 7,
    name: 'Modern Coffee Table',
    price: 199.99,
    description: 'Sleek modern coffee table with tempered glass top and wooden base.',
    category: 'home',
    rating: 4.4,
    images: [
      {
        id: 7001,
        url: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc',
        alt: 'Modern coffee table in living room'
      },
      {
        id: 7002,
        url: 'https://images.unsplash.com/photo-1567016432779-094069958ea5',
        alt: 'Coffee table styling'
      },
      {
        id: 7003,
        url: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153',
        alt: 'Coffee table detail view'
      }
    ]
  },
  {
    id: 8,
    name: 'Ceramic Plant Pot Set',
    price: 49.99,
    description: 'Set of 3 minimalist ceramic plant pots in varying sizes. Perfect for indoor plants.',
    category: 'home',
    rating: 4.2,
    images: [
      {
        id: 8001,
        url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
        alt: 'Ceramic plant pots set'
      },
      {
        id: 8002,
        url: 'https://images.unsplash.com/photo-1463320726281-696a485928c7',
        alt: 'Plant pots with succulents'
      },
      {
        id: 8003,
        url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
        alt: 'Decorative plant arrangement'
      }
    ]
  },
  {
    id: 9,
    name: 'Luxury Bedding Set',
    price: 159.99,
    description: '100% Egyptian cotton bedding set including duvet cover, fitted sheet, and pillowcases.',
    category: 'home',
    rating: 4.7,
    images: [
      {
        id: 9001,
        url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
        alt: 'Luxury bedding set display'
      },
      {
        id: 9002,
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        alt: 'Bedding in modern bedroom'
      },
      {
        id: 9003,
        url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6',
        alt: 'Bedding detail and texture'
      }
    ]
  }
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3) // Return first 3 products as featured
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  )
} 