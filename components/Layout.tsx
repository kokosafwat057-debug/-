import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-stone-900">
      <header className="bg-royal-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {!isHome && (
              <button 
                onClick={() => navigate(-1)}
                className="p-1 hover:bg-royal-800 rounded-full transition-colors"
                aria-label="رجوع"
              >
                <ArrowRight size={24} />
              </button>
            )}
            <Link to="/" className="flex items-center gap-2 font-serif font-bold text-xl hover:text-gold-300 transition-colors">
              <Heart className="text-gold-400" fill="currentColor" size={24} />
              <span>صوت الملاك</span>
            </Link>
          </div>
          <nav className="flex gap-4">
            <Link to="/weeks" className="text-sm font-semibold hover:text-gold-300 transition-colors flex items-center gap-1">
              <BookOpen size={18} />
              <span className="hidden sm:inline">الأسابيع</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {children}
      </main>

      <footer className="bg-royal-950 text-royal-200 py-8 text-center mt-auto border-t-4 border-gold-500">
        <div className="container mx-auto px-4">
          <p className="font-serif text-lg mb-2">رحلة روحية لقلب مريم</p>
          <p className="text-sm opacity-70 mb-2">© {new Date().getFullYear()} صوت الملاك لقلب مريم</p>
          <p className="text-xs text-royal-400 opacity-60 font-serif">إعداد المهندس كيرلس صفوت شحاته</p>
        </div>
      </footer>
    </div>
  );
};