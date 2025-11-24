import React from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../data';
import { BookHeart, ChevronLeft, Star, Quote } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-b from-royal-50 to-transparent rounded-3xl">
        <div className="inline-block p-4 bg-white rounded-full shadow-xl mb-4">
          <BookHeart size={64} className="text-royal-600" />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-royal-900 leading-tight">
          {appData.title}
        </h1>
        <p className="text-xl md:text-2xl text-royal-700 font-serif">
          {appData.subtitle}
        </p>
        <Link 
          to="/weeks" 
          className="inline-flex items-center gap-2 bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          ابدأ الرحلة الآن
          <ChevronLeft />
        </Link>
      </section>

      {/* Intro Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
        <h2 className="text-3xl font-serif font-bold text-royal-800 mb-6 flex items-center gap-2">
          <Star className="text-gold-500" fill="currentColor" />
          لماذا هذه الرحلة؟
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-stone-700">
          {appData.intro.map((para, idx) => (
            <p key={idx} className="flex gap-2">
              <span className="text-gold-500 font-bold">•</span>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Rules Section */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gold-50 p-8 rounded-2xl border-2 border-gold-200">
          <h2 className="text-2xl font-serif font-bold text-gold-800 mb-4">
            قواعد الرحلة
          </h2>
          <ul className="space-y-3">
            {appData.rules.map((rule, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="bg-gold-200 text-gold-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">
                  {idx + 1}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-royal-900 p-8 rounded-2xl text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
          <Quote size={120} className="absolute text-royal-800 -top-4 -right-4 opacity-50" />
          <p className="text-2xl font-serif font-bold relative z-10">
            "ليكن لي كقولك"
          </p>
          <p className="mt-4 text-royal-200 relative z-10">
            شعار الرحلة الذي سيغير حياتك
          </p>
        </div>
      </section>
    </div>
  );
};