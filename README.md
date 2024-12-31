# BookShop Admin Dashboard

A modern, full-featured admin dashboard for managing bookstore operations. Built with React, TypeScript, and Tailwind CSS.

## Features

### Core Functionality

- 📚 **Inventory Management**: Track books, authors, publishers, and stock levels
- 🛒 **Order Processing**: Handle orders, shipping, and invoicing
- 👥 **Customer Management**: Manage customer profiles and order history
- 📊 **Analytics**: Real-time sales, inventory, and performance metrics
- 💰 **Payment Processing**: Handle transactions and refunds
- 🔐 **User Management**: Role-based access control and user authentication

### Technical Features

- 🎨 Responsive design with dark/light theme support
- 📱 Mobile-friendly interface
- 🔍 Advanced search and filtering
- 📈 Data visualization with charts
- 🌐 Multi-currency support
- 🔒 Secure authentication flow

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bookshop-admin.git
cd bookshop-admin
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Auth/         # Authentication components
│   ├── Dashboard/    # Dashboard widgets
│   ├── Inventory/    # Inventory management
│   └── Modal/        # Modal dialogs
├── contexts/         # React context providers
├── data/            # Mock data and constants
├── hooks/           # Custom React hooks
├── pages/           # Main application pages
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Technology Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Build Tool**: Vite
- **State Management**: React Context

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture
- Custom hooks for reusable logic

## Features in Detail

### Inventory Management

- Book catalog with detailed information
- Stock level tracking
- Author and publisher management
- Category organization
- Custom inventory models

### Order Processing

- Order creation and tracking
- Multiple status management
- Shipping address handling
- Invoice generation
- Order history

### Customer Management

- Customer profiles
- Address management
- Order history tracking
- Activity logging

### Analytics & Reporting

- Sales analytics
- Inventory reports
- Customer insights
- Performance metrics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
