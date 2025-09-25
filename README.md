Recipe Book Web Application

A modern, responsive web application built with Next.js, MongoDB, and Material-UI (MUI) that allows users to add, view, search, and manage recipes. Users must sign in to add, edit, or delete their recipes, while anyone can browse and search recipes. The app includes creative features like recipe categories, favorites, ratings, dark mode, and infinite scroll, making it engaging and user-friendly.

Features





User Authentication: Sign up and sign in with email/password. Only authenticated users can add, edit, or delete recipes.



Add Recipes: Users can input recipe name, ingredients, preparation steps, category, and upload an image (stored on Cloudinary).



View Recipes: Display recipes in a card-based, responsive grid with images, author info, and ratings.



Search Functionality: Search recipes by keywords or ingredients using MongoDB text search, with category filtering.



Favorites: Authenticated users can save recipes to their favorites list.



Ratings: Users can rate recipes (1-5 stars), with average ratings displayed.



Dashboard: Authenticated users have a personal dashboard to view their own recipes.



Edit/Delete Recipes: Users can edit or delete their own recipes.



Responsive Design: Built with MUI for a mobile-friendly, polished UI.



Dark Mode: Toggle between light and dark themes.



Infinite Scroll: Load more recipes as users scroll down.



Data Persistence: Recipes and user data stored in MongoDB, with images on Cloudinary.

Tech Stack





Frontend: Next.js (React framework), TypeScript, Material-UI (MUI), Tailwind CSS



Backend: Next.js API routes, MongoDB (via Mongoose)



Authentication: NextAuth.js (email/password provider)



Image Storage: Cloudinary



Deployment: Vercel



Other Libraries: bcryptjs (password hashing), formidable (file uploads)

Prerequisites





Node.js (v18 or higher)



MongoDB Atlas account (for database)



Cloudinary account (for image storage)



Vercel account (for deployment)

Setup Instructions





Clone the Repository:

git clone <your-repo-url>
cd recipe-book



Install Dependencies:

npm install



Set Up Environment Variables: Create a .env.local file in the project root and add the following:

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/recipebook?retryWrites=true&w=majority
NEXTAUTH_SECRET=<your-secret> # Generate with `openssl rand -base64 32`
NEXTAUTH_URL=http://localhost:3000 # Update to production URL on Vercel
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>





Get MONGODB_URI from MongoDB Atlas.



Get Cloudinary credentials from your Cloudinary dashboard.



Run Locally:

npm run dev

Open http://localhost:3000 in your browser.



Deploy to Vercel:





Push the repository to GitHub.



Connect the repository to Vercel via the Vercel dashboard.



Add the above environment variables in Vercel’s project settings.



Deploy the app. Vercel will provide a production URL.

Project Structure

recipe-book/
├── app/                    # Next.js app directory
│   ├── api/                # API routes (auth, recipes, upload, etc.)
│   ├── add-recipe/         # Add recipe page
│   ├── dashboard/          # User dashboard
│   ├── favorites/          # User favorites
│   ├── recipes/[id]/       # Recipe detail page
│   ├── signin/             # Sign-in page
│   ├── signup/             # Sign-up page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable React components
├── lib/                    # Database connection
├── models/                 # Mongoose schemas
├── middleware.ts           # NextAuth middleware
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file

Additional Notes





Validation: Basic client-side validation ensures required fields (name, ingredients, steps) are filled. Enhance server-side validation as needed.



Security: Passwords are hashed with bcrypt. Middleware protects routes like /add-recipe, /dashboard, and /favorites.



Scalability: MongoDB text indexes enable efficient search. Infinite scroll reduces initial load time.



Customization: Add Google OAuth by configuring GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.local and updating app/api/auth/[...nextauth]/route.ts.



Styling: MUI with Tailwind CSS ensures a modern, responsive UI. Customize themes in app/themes.ts.

Future Enhancements





Add recipe comments section.



Implement advanced search (e.g., by cooking time, difficulty).



Add user profiles with avatars.



Support recipe sharing via social media.



Add offline support with a service worker.

Troubleshooting





MongoDB Connection Issues: Ensure MONGODB_URI is correct and your IP is whitelisted in MongoDB Atlas.



Image Upload Failures: Verify Cloudinary credentials and ensure the upload API route is accessible.



Auth Errors: Check NEXTAUTH_SECRET and NEXTAUTH_URL in .env.local.

License

MIT License. Feel free to use, modify, and distribute this code.

Contact

For support or contributions, contact info@unifiedmentor.com or visit unifiedmentor.com.

Happy cooking and coding!