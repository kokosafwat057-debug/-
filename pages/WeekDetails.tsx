import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { appData } from '../data';
import { Sun, ArrowLeftCircle } from 'lucide-react';

export const WeekDetails: React.FC = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const week = appData.weeks.find(w => w.id === Number(weekId));

  if (!week) return <div>الأسبوع غير موجود</div>;

  return (
    <div className="space-y-8">
      {/* Week Header */}
      <div className="bg-royal-900 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        <h1 className="text-gold-400 font-serif font-bold text-lg mb-2">{week.title}</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{week.theme}</h2>
        <p className="text-royal-100 text-lg leading-relaxed max-w-2xl border-r-4 border-gold-500 pr-4">
          {week.introText}
        </p>
      </div>

      {/* Days Grid */}
      <div>
        <h3 className="text-2xl font-serif font-bold text-royal-900 mb-6 flex items-center gap-2">
          <Sun className="text-gold-500" />
          رحلة الأيام
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {week.days.map((day) => (
            <Link 
              key={day.id} 
              to={`/weeks/${week.id}/days/${day.id}`}
              className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:border-royal-200 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-royal-500 bg-royal-50 px-2 py-1 rounded-full">
                  {day.title}
                </span>
                <ArrowLeftCircle className="text-stone-300 group-hover:text-royal-500 transition-colors" size={20} />
              </div>
              <h4 className="font-bold text-lg text-stone-800 mb-2 group-hover:text-royal-700 transition-colors">
                {day.subTitle}
              </h4>
              <p className="text-stone-500 text-sm line-clamp-2">
                {day.coreIdea}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};