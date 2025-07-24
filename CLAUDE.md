# Mobile Wedding Invitation

## Overview
This is a modern, responsive mobile wedding invitation web application built with React and TypeScript. The project provides a beautiful, interactive digital wedding invitation that can be easily customized and deployed.

## Technology Stack
- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Emotion (styled components)
- **Maps Integration**: Google Maps (@googlemaps/react-wrapper)
- **Photo Gallery**: react-photoswipe-gallery with PhotoSwipe
- **Backend Services**: Firebase (optional, for guestbook and likes functionality)
- **Animations**: js-confetti for celebratory effects
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## Key Features
- **Responsive Design**: Optimized for mobile viewing
- **Interactive Gallery**: Photo gallery with zoom and swipe functionality
- **Google Maps Integration**: Configurable location display with directions
- **Google Calendar Integration**: Working "Add to Calendar" functionality
- **Guestbook**: Firebase-powered guest message system
- **Account Information**: Payment account details with multiple payment methods
- **Confetti Animation**: Celebratory confetti effects
- **Customizable Content**: JSON-based configuration for easy personalization
- **Fully Internationalized**: All text converted from Korean to English

## Project Structure
```
src/
├── components/          # Reusable UI components
│   └── ErrorBoundary.tsx # Map error handling
├── layout/             # Main layout sections
│   ├── Account/        # Payment account information
│   ├── Contact/        # Host contact details
│   ├── Gallery/        # Photo gallery
│   ├── Guestbook/      # Guest message system
│   ├── Invitation/     # Main invitation content with calendar integration
│   ├── Location/       # Venue location and Google Maps
│   └── Main/           # Hero section
├── assets/             # Images and icons
├── types/              # TypeScript type definitions
└── data.json          # Wedding configuration data
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Configuration Requirements
1. **Environment Variables** (optional): 
   - `VITE_GOOGLE_MAPS_API_KEY` for interactive maps (shows placeholder if not provided)
2. **Wedding Data**: Customize `src/data.json` with wedding details
3. **Images**: Replace photos in `src/assets/images/`
4. **Firebase** (optional): Configure `src/firebase.ts` for guestbook functionality

## Recent Updates & Enhancements

### ✅ **Translation & Internationalization**
- **Complete Korean to English translation** of all user-facing text
- Updated HTML meta tags and page titles
- Translated all component strings, button labels, and form placeholders
- Fixed Korean comments and documentation to English

### ✅ **Maps System Overhaul**
- **Removed Naver Maps dependency** completely 
- **Migrated to Google Maps** using @googlemaps/react-wrapper
- **Configurable location** via data.json (lat, lon, zoom)
- **Single "Open in Google Maps" button** replacing multiple Korean map services
- **Error boundary** for graceful map loading failures
- **Fallback UI** when Google Maps API key not provided

### ✅ **Google Calendar Integration**
- **Working "Add to Google Calendar" button** with pre-filled event details
- **Dynamic event creation** using couple names, wedding message, and venue
- **Proper date/time formatting** for Google Calendar API
- **Opens in new tab** to preserve user experience

### ✅ **UI/UX Fixes**
- **Fixed text overlap issue** in host information display
- **Improved responsive layout** for longer English text
- **Better spacing and alignment** for international names

### ✅ **Data Structure Improvements**
- **Streamlined mapInfo** with Google Maps focus
- **Configurable zoom levels** and coordinates
- **Dynamic URL generation** for map services
- **Cleaner JSON structure** without redundant Korean service URLs

### ✅ **Mobile Responsiveness Enhancements**
- **Fixed text overflow issues** on mobile devices preventing horizontal scrolling
- **Responsive container sizing** with progressive border adjustments (8px → 12px → 20px → 30px)
- **Improved text wrapping** with `word-wrap: break-word` and `overflow-wrap: break-word`
- **Enhanced typography scaling** using `clamp()` for fluid font sizes across all screen sizes
- **Mobile-optimized padding** for all text components and host information display
- **Flex-wrap implementation** for host information to prevent name truncation
- **Hyphenation support** for better text breaking on long words

### ✅ **Image Management System**
- **Comprehensive gallery system** with 12 configurable image slots
- **Main hero image** easily replaceable via import in Main.tsx (currently uses 05.jpg)
- **Structured image imports** in `/src/layout/Gallery/Images.ts` with customizable dimensions
- **Thumbnail and favicon support** via `/public/` directory
- **PhotoSwipe integration** for zoom and swipe gallery functionality
- **Responsive image sizing** with automatic height adjustment

### ✅ **Content Updates**
- **Updated section heading** from "Send Your Wishes" to "Support Us" for better clarity
- **Added first wedding photos** to the gallery system
- **Enhanced user experience** with more intuitive navigation labels

## Configuration Guide

### **Location Setup**
Edit `src/data.json` mapInfo section:
```json
"mapInfo": {
  "address1": "Your Venue Name",
  "address2": "Full Address\nPhone: +1-234-567-8900",
  "lat": 40.7589,     // Latitude coordinates
  "lon": -73.9851,    // Longitude coordinates  
  "zoom": 17          // Map zoom level (10-20)
}
```

### **Wedding Details**
All wedding information is configured in `src/data.json`:
- **Couple names and family information**
- **Event date, time, and venue**
- **Payment account details**
- **Transportation and parking information**

### **Image Management**

#### **Main Hero Image**
The main wedding photo displayed at the top of the invitation:
1. **Current:** Uses `05.jpg` from `/src/assets/images/`
2. **To Change:** 
   - Replace `/src/assets/images/05.jpg` with your main photo, OR
   - Edit `/src/layout/Main/Main.tsx` to use a different image:
   ```typescript
   import mainImg from '@/assets/images/01.jpg'  // Change number
   ```

#### **Gallery Images**
The photo gallery supports up to 12 images with zoom and swipe functionality:
1. **Replace Existing:** Simply replace files in `/src/assets/images/` (01.jpg through 12.jpg)
2. **Add New Images:** 
   - Add photos to `/src/assets/images/`
   - Update `/src/layout/Gallery/Images.ts`:
   ```typescript
   import yourPhoto from '@/assets/images/your-photo.jpg'
   
   const images = [
     {
       alt: 'Wedding Photo',
       source: yourPhoto,
       width: 800,    // Update with actual dimensions
       height: 1200
     }
   ];
   ```

#### **Thumbnail & Favicon**
- **Social Media Thumbnail:** Replace `/public/thumbnail.jpg` (recommended: 1200x630px)
- **Browser Icon:** Replace `/public/favicon.png` (recommended: 32x32px or 64x64px)

#### **Image Size Recommendations**
- **Main Photo:** 400px wide (height auto-adjusts)
- **Gallery Photos:** Various sizes supported, update dimensions in `Images.ts`
- **Optimized formats:** JPG for photos, PNG for icons with transparency

### **Google Maps API (Optional)**
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Create `.env` file: `VITE_GOOGLE_MAPS_API_KEY=your_api_key_here`
3. Without API key: Shows placeholder with "Map will be displayed here"

### ✅ **Docker & Reverse Proxy Setup**
- **Dockerized application** with Docker Compose configuration
- **Caddy reverse proxy** for production deployment with HTTPS support
- **Environment variable configuration** using `MY_URL` for custom domain setup
- **Persistent volumes** for Caddy data and configuration
- **Network isolation** with dedicated Docker network
- **Port mapping**: Application runs on port 3000, Caddy handles 80/443

## Docker Deployment

### **Using Docker Compose**
The project includes a complete Docker setup for production deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Stop the services
docker-compose down
```

### **Environment Configuration**
Create a `.env` file with your domain:
```env
MY_URL=yourdomain.com
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here  # Optional
```

### **Docker Services**
- **our-wedding**: Main React application container
- **caddy**: Reverse proxy with automatic HTTPS via Let's Encrypt
- **Networks**: Isolated bridge network for container communication
- **Volumes**: Persistent storage for SSL certificates and Caddy config

## Deployment Options

### **Docker Deployment (Recommended)**
The project is fully containerized and ready for deployment with Docker Compose. The setup includes:
- Automatic HTTPS with Let's Encrypt via Caddy
- Custom domain configuration via environment variables
- Production-ready reverse proxy setup

### **Static Hosting**
Also compatible with platforms like Vercel, Netlify, or any static hosting service. The application works fully without external API keys, showing appropriate fallbacks.

This is a well-structured, feature-rich wedding invitation template that demonstrates modern React development practices and provides a complete digital wedding solution with international support, modern integrations, and production-ready containerization.