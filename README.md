# Shopify Clone

A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. View the live demo [here](https://shopify-clone-next.netlify.app).

## Features

- 🛍️ Product listing with category filters
- 🔍 Product search functionality
- 🛒 Shopping cart with persistent storage
- 📱 Responsive design with mobile menu
- ⚡ Fast page loads with Next.js
- 💳 Streamlined checkout process
- 🎨 Modern UI with Tailwind CSS
- 🖼️ Product gallery with zoom functionality
- 🔄 Real-time cart updates
- 📦 Multiple product images
- 🎯 Category-based navigation
- 💫 Loading states and animations

## Tech Stack

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- React Context for state management
- Local Storage for cart persistence
- Unsplash for high-quality images

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Authority98/shopify-clone.git
cd shopify-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # React components
│   ├── layout/        # Layout components
│   ├── product/       # Product-related components
│   ├── checkout/      # Checkout components
│   └── ui/            # Reusable UI components
├── lib/               # Utilities and helpers
│   ├── context/       # React context providers
│   └── data/          # Mock data and types
└── styles/            # Global styles
```

## Deployment

### Netlify Deployment

1. Push your code to GitHub
2. Log in to Netlify
3. Click "New site from Git"
4. Choose your repository
5. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Environment Variables

No environment variables are required for basic functionality.

## Features in Detail

- **Product Catalog**: Browse products by category with detailed product pages
- **Shopping Cart**: Add/remove items, update quantities, persistent cart state
- **Search**: Search products by name and description
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Image Gallery**: Multiple product images with zoom functionality
- **Category Filters**: Filter products by category
- **Loading States**: Skeleton loading states for better UX
- **Error Handling**: Proper error handling and user feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI inspiration from [Shopify](https://shopify.com)
