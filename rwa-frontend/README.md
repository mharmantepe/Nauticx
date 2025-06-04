# 🛥️ NauticX - Yacht Investment Marketplace

NauticX is a revolutionary platform that tokenizes luxury yachts, marina berths, and charter revenues, making yacht investment accessible to global investors while providing liquidity solutions for yacht owners.

## 🎯 Vision

Transform the luxury yacht and maritime industry by creating a transparent, efficient, and accessible marketplace for fractional yacht ownership and investment opportunities.

## 🌟 Key Features

### **Core Functionality**
- ✅ **Yacht Tokenization**: Convert yacht ownership into digital shares
- ✅ **Marina Berth Rights**: Invest in premium marina spots
- ✅ **Charter Income**: Participate in yacht charter revenues
- ✅ **Refit Projects**: Fund yacht renovation and improvement projects
- ✅ **Marketplace**: Global platform for yacht investment opportunities
- ✅ **Portfolio Management**: Track your yacht investments and returns
- ✅ **Smart Contract Integration**: Mock contract client ready for production
- ✅ **Real-time Updates**: Automatic wallet state monitoring and updates

### **Architecture Highlights**
- **Modern Stack**: Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
- **State Management**: Zustand stores for wallet and contract state
- **Type Safety**: Comprehensive TypeScript interfaces matching contract structure
- **Professional UI**: Finance-focused design with Slate color scheme
- **Responsive Design**: Desktop-first approach with mobile optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- [Freighter Wallet](https://freighter.app/) browser extension
- Access to Stellar Testnet

### Installation

```bash
# Clone and install
git clone <repository>
cd rwa-frontend
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Production Build
```bash
npm run build
npm start
```

## 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
# Stellar Network Configuration
NEXT_PUBLIC_STELLAR_NETWORK=testnet  # or mainnet for production

# Contract Configuration
NEXT_PUBLIC_CONTRACT_ID=your_contract_id

# Important: Never commit these values
STELLAR_SECRET_KEY=your_secret_key  # Keep this secure
STELLAR_PUBLIC_KEY=your_public_key
```

### Security Notes
- Never commit your `.env` file
- Keep your Secret Key secure and private
- Use different keys for testnet and mainnet
- Backup your keys securely offline
- Add `.env` to your `.gitignore`

For testing, you can generate new keys using [Stellar Laboratory](https://laboratory.stellar.org/)

## 🏗️ Project Structure

```
rwa-frontend/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Yacht portfolio dashboard
│   ├── marketplace/       # Yacht listings
│   ├── tokenize/         # Yacht tokenization flow
│   └── transfer/         # Share transfer system
├── components/            # Reusable UI components
├── lib/                   # Core utilities
└── stores/               # State management
```

## 📱 Main Features

### Dashboard
- Portfolio value tracking
- Active yacht investments
- Charter revenue monitoring
- Regulatory compliance status
- Quick access to key actions

### Marketplace
- Advanced yacht search with filters:
  - Yacht type (Motor, Sailing, Super)
  - Location (Monaco, Bodrum, Cannes, Miami)
  - Price range
  - Certification (RINA, MCA, CE, ISO)
- Detailed yacht listings
- Investment progress tracking
- Real-time availability updates

### Tokenization Process
1. **Yacht Details**
   - Basic information
   - Location data
   - Ownership history
   
2. **Technical Specifications**
   - Yacht dimensions
   - Engine details
   - Cabin configuration
   - Equipment inventory
   
3. **Documentation**
   - Ownership certificates
   - Regulatory compliance
   - Insurance documents
   
4. **Investment Structure**
   - Token economics
   - Revenue sharing model
   - Maintenance provisions
   
5. **Market Listing**
   - Final verification
   - Publication settings
   - Marketing details

### Share Transfer
- Secure ownership transfer
- KYC/AML verification
- Transaction tracking
- Compliance validation

## 🔒 Security Features

- Stellar blockchain integration
- KYC/AML compliance checks
- Secure wallet connection
- Transaction verification
- Document authenticity validation

## 🔧 Development Roadmap

### **Phase 2: Enhanced Trading** (Planned)
- [ ] Asset marketplace with filtering and search
- [ ] Investment calculator with ROI projections  
- [ ] Order book and trading interface
- [ ] Price charts and market data

### **Phase 3: Tokenization Engine** (Planned)
- [ ] Multi-step asset tokenization wizard
- [ ] Document upload and verification system
- [ ] Legal compliance automation
- [ ] Smart contract deployment interface

### **Phase 4: Advanced Features** (Planned)
- [ ] Admin panel with role-based access
- [ ] Revenue distribution automation
- [ ] Advanced analytics and reporting  
- [ ] Mobile app (React Native)

## 🧪 Testing Strategy

### **Current Implementation**
- **Mock Contract Client**: Simulates all smart contract interactions
- **Test Data**: Realistic asset metadata and balances
- **Validation Testing**: Address format and compliance checking
- **Error Simulation**: Network failures and validation errors

### **Production Preparation**
- [ ] Unit tests for utilities and components
- [ ] Integration tests for wallet and contract interactions
- [ ] E2E tests for critical user flows
- [ ] Smart contract integration testing

## 🐛 Known Issues & Limitations

### **Current Limitations**
- **Simulated Compliance**: Recipient compliance checking is mocked
- **Static Data**: Asset metadata and balances are not live
- **Network Warnings**: Stellar SDK warnings in build (expected)
- **Network Switching**: Users must manually switch networks in Freighter extension

### **Freighter Integration**
The application now uses the official Freighter API for wallet connection:

```typescript
// stores/wallet.ts - Production implementation
import {
  isConnected,
  requestAccess,
  getAddress,
  getNetwork,
  getNetworkDetails,
  WatchWalletChanges
} from '@stellar/freighter-api';

const connect = async () => {
  const connectionResult = await isConnected();
  const accessResult = await requestAccess();
  const networkResult = await getNetworkDetails();
  // Real wallet integration with proper error handling
};
```

**Features:**
- ✅ Real wallet connection detection
- ✅ Automatic network detection (Testnet/Mainnet)
- ✅ Address retrieval and validation
- ✅ Real-time wallet state monitoring
- ✅ Proper error handling and user feedback
- ✅ Automatic disconnection on extension disable

## 📚 Smart Contract Details

### **Asset Metadata Structure**
```typescript
interface AssetMetadata {
  name: string;              // "Luxury Apartment NYC"
  symbol: string;            // "LAPT"  
  asset_type: string;        // "real_estate"
  description: string;       // Asset description
  valuation: string;         // Current USD value (i128)
  last_valuation_date: number; // Unix timestamp
  legal_doc_hash: string;    // Property deed hash
}
```

### **Compliance Data Structure**
```typescript
interface ComplianceData {
  kyc_verified: boolean;     // KYC completion status
  accredited_investor: boolean; // Accreditation status
  jurisdiction: string;      // Legal jurisdiction
  compliance_expiry: number; // Compliance expiration
}
```

## 🛠️ Development

### Environment Setup
```env
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_CONTRACT_ID=[your-contract-id]
```

### Build for Production
```bash
npm run build
npm start
```

### Testing
```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌊 About NauticX

NauticX is revolutionizing yacht ownership and investment through blockchain technology. Our platform makes luxury yacht investment accessible, transparent, and efficient for both yacht owners and investors globally.

## 📞 Support

For support and inquiries:
- Email: support@nauticx.com
- Discord: [NauticX Community]
- Twitter: @NauticX

---

**Built with ❤️ for the future of tokenized real world assets**
