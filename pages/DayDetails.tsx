import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { appData } from '../data';
import { 
  BookOpen, 
  Quote, 
  Lightbulb, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles,
  ScrollText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SectionCard: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode; 
  colorClass: string;
}> = ({ title, icon, children, colorClass }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden`}>
    <div className={`${colorClass} p-4 flex items-center gap-3 border-b border-stone-50`}>
      {icon}
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <div className="p-6 text-stone-700 leading-relaxed">
      {children}
    </div>
  </div>
);

export const DayDetails: React.FC = () => {
  const { weekId, dayId } = useParams<{ weekId: string; dayId: string }>();
  const week = appData.weeks.find(w => w.id === Number(weekId));
  const day = week?.days.find(d => d.id === Number(dayId));

  if (!week || !day) return <div>اليوم غير موجود</div>;

  const nextDayId = day.id < 7 ? day.id + 1 : null;
  const prevDayId = day.id > 1 ? day.id - 1 : null;

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-royal-600 font-bold tracking-wider text-sm">{week.title} - {day.title}</span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 leading-normal">
          {day.subTitle}
        </h1>
      </div>

      {/* Core Idea */}
      <div className="bg-royal-50 p-6 rounded-2xl border border-royal-100 text-center">
        <p className="text-xl font-serif text-royal-800">
          "{day.coreIdea}"
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-6">
        {/* Scripture */}
        <SectionCard 
          title="قراءة اليوم" 
          icon={<BookOpen className="text-white" />} 
          colorClass="bg-royal-600 text-white"
        >
          <div className="mb-2 text-sm font-bold text-royal-600 bg-royal-50 inline-block px-2 py-1 rounded">
            {day.scriptureRef}
          </div>
          <p className="font-serif text-lg leading-loose">
            «{day.scriptureText}»
          </p>
        </SectionCard>

        {/* Prayer */}
        <SectionCard 
          title="من صلوات الكنيسة" 
          icon={<ScrollText className="text-gold-700" />} 
          colorClass="bg-gold-100 text-gold-900"
        >
          <p className="font-serif text-xl text-center italic text-gold-900">
            {day.churchPrayer}
          </p>
        </SectionCard>

        {/* Fathers Quote */}
        <SectionCard 
          title="من أقوال الآباء" 
          icon={<Quote className="text-stone-600" />} 
          colorClass="bg-stone-200 text-stone-800"
        >
          <blockquote className="border-r-4 border-stone-400 pr-4 italic">
            "{day.fathersQuote}"
          </blockquote>
        </SectionCard>

        {/* Saint & Meditation */}
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard 
            title="قديس اليوم" 
            icon={<Sparkles className="text-purple-600" />} 
            colorClass="bg-purple-50 text-purple-900"
          >
            <h4 className="font-bold mb-2">{day.saintOfTheDay.name}</h4>
            <p className="text-sm">{day.saintOfTheDay.lesson}</p>
          </SectionCard>

          <SectionCard 
            title="تأمل اليوم" 
            icon={<Lightbulb className="text-amber-600" />} 
            colorClass="bg-amber-50 text-amber-900"
          >
            <p>{day.meditation}</p>
          </SectionCard>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard 
            title="كن خفيف (نشاط)" 
            icon={<HeartHandshake className="text-rose-600" />} 
            colorClass="bg-rose-50 text-rose-900"
          >
            <p>{day.activity}</p>
          </SectionCard>

          <SectionCard 
            title="مهمتك اليوم" 
            icon={<Award className="text-emerald-600" />} 
            colorClass="bg-emerald-50 text-emerald-900"
          >
            <p className="font-bold">{day.challenge}</p>
          </SectionCard>
        </div>

        {/* Evaluation */}
        <div className="bg-stone-900 text-stone-200 p-6 rounded-2xl flex items-start gap-4 shadow-lg">
          <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-2 text-white">تقييم اليوم</h3>
            <p className="text-lg font-serif">{day.evaluationQuestion}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-stone-200">
        {prevDayId ? (
          <Link 
            to={`/weeks/${week.id}/days/${prevDayId}`}
            className="flex items-center gap-2 text-royal-600 hover:text-royal-800 font-bold"
          >
            <ChevronRight />
            اليوم السابق
          </Link>
        ) : (
          <div /> 
        )}

        <Link 
          to={`/weeks/${week.id}`}
          className="text-stone-400 text-sm hover:text-stone-600"
        >
          عودة للأسبوع
        </Link>

        {nextDayId ? (
          <Link 
            to={`/weeks/${week.id}/days/${nextDayId}`}
            className="flex items-center gap-2 text-royal-600 hover:text-royal-800 font-bold"
          >
            اليوم التالي
            <ChevronLeft />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};