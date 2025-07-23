# 💌 Mobile Wedding Invitation 💌

![demo1.gif](demo1.gif)

This project is a modern, responsive mobile wedding invitation web application built with React and TypeScript. The project provides a beautiful, interactive digital wedding invitation that can be easily customized and deployed.

Built with React 18.2.0 and TypeScript, it uses Vite for fast and convenient development environment. ESLint and Prettier are applied for code quality, and styling is handled with Emotion/styled components.

The gallery uses react-photoswipe-gallery, and the maps integration has been migrated from Naver Maps to Google Maps for international compatibility.

![demo2.gif](demo2.gif)

Cute confetti effects are implemented using js-confetti to add celebratory animations.

## 🚀 Features

- **Responsive Design**: Optimized for mobile viewing
- **Interactive Photo Gallery**: Gallery with zoom and swipe functionality
- **Google Maps Integration**: Configurable location display with directions
- **Google Calendar Integration**: Working "Add to Calendar" functionality
- **Guestbook System**: Firebase-powered guest message system (optional)
- **Payment Account Information**: Multiple payment methods support
- **Confetti Animations**: Celebratory effects for special moments
- **Docker Deployment**: Production-ready containerization with Caddy reverse proxy
- **Fully Internationalized**: Complete English translation from Korean
- **Customizable Content**: JSON-based configuration for easy personalization

## 📋 Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/mhmdksh/our-wedding.git
```

2. Navigate to the project folder:
```bash
cd our-wedding
```

3. Install dependencies:
```bash
npm install
```

4. (Optional) Set up environment variables by creating a `.env` file:
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
MY_URL=yourdomain.com  # For Docker deployment
```

5. (Optional) For guestbook and likes functionality, configure Firebase in `src/firebase.ts`. Refer to [Firebase documentation](https://firebase.google.com/docs/web/setup) for SDK setup.

6. Customize the required files (see customization checklist below).

7. Run the application:
```bash
npm run dev
```

## 🐳 Docker Deployment

For production deployment with automatic HTTPS:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Stop the services
docker-compose down
```

The Docker setup includes:
- **our-wedding**: Main React application container
- **caddy**: Reverse proxy with automatic HTTPS via Let's Encrypt
- **Automatic SSL**: Let's Encrypt certificates managed by Caddy
- **Custom Domain**: Configure via `MY_URL` environment variable

## ✅ Customization Checklist

- [ ] **`src/data.json`**: Update wedding information, couple details, venue, and event details
- [ ] **`index.html`**: Modify favicon, title, and meta tags for SEO and social media sharing
- [ ] **`public/thumbnail.jpg`**: Replace with your wedding thumbnail image
- [ ] **`src/assets/images/`**: Add your gallery photos and update `src/layout/Gallery/Images.ts` with imports and sizing
- [ ] **`.env`**: Add Google Maps API key (`VITE_GOOGLE_MAPS_API_KEY`) for interactive maps
- [ ] **(Optional)** **`src/firebase.ts`**: Configure Firebase SDK for guestbook and likes functionality
- [ ] **(Optional)** **`src/data.json`**: Add payment account details using `kakaopayAccount` and `tossAccount` for Korean payment systems

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Deployment Options

### Docker Deployment (Recommended)
Complete containerized solution with automatic HTTPS and reverse proxy.

### Static Hosting
Compatible with platforms like Vercel, Netlify, or any static hosting service.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmhmdksh%2Four-wedding)

## 🔧 Technology Stack

- **Frontend**: React 18.2.0, TypeScript, Vite
- **Styling**: Emotion (styled components)
- **Maps**: Google Maps (@googlemaps/react-wrapper)
- **Gallery**: react-photoswipe-gallery with PhotoSwipe
- **Backend**: Firebase (optional, for guestbook)
- **Animations**: js-confetti
- **Deployment**: Docker with Caddy reverse proxy
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## 📚 Documentation

For detailed development and configuration information, see [CLAUDE.md](CLAUDE.md).

## 🙏 Acknowledgments

- Original developer: [heejin-hwang](https://github.com/heejin-hwang)
- [react-photoswipe-gallery](https://www.npmjs.com/package/react-photoswipe-gallery) library
- [Google Maps Platform](https://developers.google.com/maps)
- [Firebase](https://firebase.google.com/) for backend services

## 📄 License

This project is distributed under the MIT License. See the LICENSE file for more details.

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mhmdksh/our-wedding&type=Date)](https://star-history.com/#mhmdksh/our-wedding&Date)