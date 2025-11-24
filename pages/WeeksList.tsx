import React from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../data';
import { Calendar, ChevronLeft } from 'lucide-react';

export const WeeksList: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold text-royal-900 mb-2">أسابيع الرحلة</h1>
        <p className="text-stone-600">اختر الأسبوع لتبدأ خطواتك اليومية</p>
      </div>

      <div className="grid gap-6">
        {appData.weeks.map((week) => (
          <Link 
            key={week.id} 
            to={`/weeks/${week.id}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-stone-200 overflow-hidden transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className="bg-royal-600 text-white p-6 md:w-48 flex flex-col items-center justify-center text-center group-hover:bg-royal-700 transition-colors">
              <Calendar size={32} className="mb-2 opacity-80" />
              <span className="font-serif font-bold text-xl">{week.title}</span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-royal-900 mb-2 group-hover:text-royal-700 transition-colors">
                {week.theme}
              </h2>
              <p className="text-stone-600 mb-4 line-clamp-2">
                {week.description}
              </p>
              <div className="flex items-center text-gold-600 font-semibold mt-auto self-end gap-1 group-hover:gap-2 transition-all">
                ادخل للأسبوع
                <ChevronLeft size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};