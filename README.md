# Modern Job Search Dashboard

A modern, responsive job search dashboard built with React and Tailwind CSS. This project features a clean and intuitive interface with multiple interactive components for job searching, career development, and professional networking.

## Features

- **Responsive Navigation Bar**
  - Clean and modern navigation with dropdown menus
  - Profile section with user settings
  - Mobile-friendly design

- **Interactive Dashboard Components**
  - Degree Programs Card
  - Job Search with instant search functionality
  - Contests Section with company partnerships
  - AI Resume Builder
  - View Profile Card
  - Xclusives Section
  - Blog Updates

## Project Structure

```
project-root/
├── public/
│   └── images/          # All project images
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── DegreeCard.tsx
│   │   ├── ContestsCard.tsx
│   │   ├── SearchJobs.tsx
│   │   ├── ViewProfile.tsx
│   │   ├── AIResumeBuilder.tsx
│   │   ├── XclusivesCard.tsx
│   │   └── BlogCard.tsx
│   └── App.tsx         # Main application component
└── package.json
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be located in the `dist` directory.

## Customization

### Images
- Place all your images in the `public/images` directory
- Update image paths in components as needed

### Styling
- All styling is done using Tailwind CSS
- Customize colors, spacing, and other design tokens in `tailwind.config.js`

### Components
Each component is self-contained and can be customized:
- `Navbar.tsx` - Navigation and menu structure
- `DegreeCard.tsx` - Educational programs display
- `ContestsCard.tsx` - Contests and competitions
- `SearchJobs.tsx` - Job search functionality
- `ViewProfile.tsx` - User profile section
- `AIResumeBuilder.tsx` - AI-powered resume tools
- `XclusivesCard.tsx` - Exclusive features
- `BlogCard.tsx` - Blog and news section

## Responsive Design

The dashboard is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large desktop screens

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Your Name - [your-email@example.com]
Project Link: [https://github.com/yourusername/project-name] 