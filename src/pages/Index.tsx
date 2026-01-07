import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const chapters = [
    {
      icon: 'Target',
      title: 'Психология клиента',
      description: 'Как понять потребности заказчика ещё до встречи и подготовиться к переговорам',
    },
    {
      icon: 'TrendingUp',
      title: 'Ценообразование',
      description: 'Формулы расчёта стоимости услуг, от которых невозможно отказаться',
    },
    {
      icon: 'MessageSquare',
      title: 'Техники убеждения',
      description: '12 проверенных приёмов, которые закрывают 89% сделок',
    },
    {
      icon: 'FileText',
      title: 'Договоры и предоплата',
      description: 'Как защитить себя юридически и получать 50% аванс без возражений',
    },
    {
      icon: 'Users',
      title: 'Работа с возражениями',
      description: 'Готовые скрипты ответов на "дорого", "подумаю" и другие отказы',
    },
    {
      icon: 'Award',
      title: 'Премиум-клиенты',
      description: 'Как привлекать заказчиков с бюджетом от 200 000 ₽',
    },
  ];

  const stats = [
    { value: '250+', label: 'страниц практики' },
    { value: '30+', label: 'реальных кейсов' },
    { value: '12', label: 'шаблонов договоров' },
    { value: '89%', label: 'успешных сделок' },
  ];

  const testimonials = [
    {
      name: 'Дмитрий Ковалёв',
      role: 'Свадебный фотограф, Москва',
      text: 'За 2 месяца после прочтения увеличил средний чек с 35 до 85 тысяч. Техники работают!',
      rating: 5,
    },
    {
      name: 'Анна Морозова',
      role: 'Видеограф, Санкт-Петербург',
      text: 'Наконец-то научилась говорить "нет" неадекватным клиентам. Работаю только с теми, кто ценит.',
      rating: 5,
    },
    {
      name: 'Максим Белов',
      role: 'Коммерческий фотограф',
      text: 'Шаблоны договоров спасли меня от судебных разбирательств. Книга окупилась в первой же сделке.',
      rating: 5,
    },
  ];

  const problems = [
    'Клиенты торгуются до последнего',
    'Работаете за копейки, боясь потерять заказ',
    'Не знаете, как отвечать на возражения',
    'Переделываете проект по 10 раз бесплатно',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Скоро с вами свяжемся.');
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent" />
          <img
            src="https://cdn.poehali.dev/files/Peregovory.jpg"
            alt="Book Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-accent/20 rounded-full text-accent font-semibold">
            Бестселлер 2024
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Переговоры для фотографов и видеографов
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light max-w-3xl mx-auto opacity-90">
            Как заключать сделки с высокой прибылью
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-75 max-w-2xl mx-auto">
            Искусство делового общения: полное руководство по переговорам для создателей визуального контента
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-7 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать книгу за 2 990 ₽
          </Button>
        </div>
      </section>

      <section className="py-20 px-6 bg-destructive/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            Узнаете ли вы себя?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon name="AlertCircle" className="text-destructive mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-foreground">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-2xl font-heading font-semibold mt-12 text-accent">
            Эта книга решит все эти проблемы
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 px-4 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                О книге
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Переговоры — это навык, которому можно научиться
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Большинство фотографов и видеографов — талантливые креаторы, но слабые переговорщики. 
                Из-за этого они теряют до 70% потенциального дохода.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Эта книга написана практиком для практиков. Без воды и теории — только работающие техники, 
                которые можно применить уже на следующей встрече с клиентом.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="font-semibold">Без воды</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="font-semibold">Только практика</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="font-semibold">Реальные кейсы</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/ea4defae-3af9-4f30-bdf6-dd355c8c2583.jpg"
                alt="Professional Negotiation"
                className="w-full h-auto rounded-lg shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Что внутри книги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              6 ключевых разделов, которые изменят ваш подход к переговорам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow bg-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name={chapter.icon} className="text-accent" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{chapter.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{chapter.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            Книга в цифрах
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            Отзывы читателей
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-none shadow-lg bg-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/33d7bdf7-b3e0-4bf8-81c4-8d9f478e4745.jpg"
                alt="Professional Equipment"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                Об авторе
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Кто написал эту книгу
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Автор — практикующий фотограф и бизнес-тренер с 12-летним опытом. 
                Провёл более 2000 коммерческих съёмок и заключил сделок на 50+ миллионов рублей.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                За последние 5 лет обучил техникам переговоров более 3000 фотографов и видеографов по всей России. 
                Средний прирост дохода учеников — 150% за первые 3 месяца.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-accent" size={24} />
                  <span className="font-semibold">Лауреат премии «Бизнес года 2023»</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-accent" size={24} />
                  <span className="font-semibold">3000+ учеников по России</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                  <span className="font-semibold">Рост дохода учеников на 150%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Заказать книгу
            </h2>
            <div className="mb-4">
              <span className="text-5xl md:text-6xl font-heading font-bold text-accent">2 990 ₽</span>
            </div>
            <div className="space-y-2 text-lg opacity-90">
              <p className="flex items-center justify-center gap-2">
                <Icon name="Truck" size={20} />
                Бесплатная доставка по России
              </p>
              <p className="flex items-center justify-center gap-2">
                <Icon name="Lock" size={20} />
                Безопасная оплата
              </p>
              <p className="flex items-center justify-center gap-2">
                <Icon name="Gift" size={20} />
                Бонус: 5 видео-уроков в подарок
              </p>
            </div>
          </div>
          <Card className="p-8 md:p-12 shadow-2xl border-none bg-white/95">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя</label>
                <Input
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-14 text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-14 text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-14 text-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-16 text-xl font-bold shadow-xl hover:scale-105 transition-transform"
              >
                Оформить предзаказ
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="#" className="underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </Card>
          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-3 bg-accent/20 rounded-lg">
              <p className="text-sm font-semibold">
                🔥 Осталось всего 47 экземпляров по акционной цене
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@photo-negotiations.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Send" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">О проекте</h3>
              <p className="text-sm opacity-90">
                Издательство бизнес-литературы для креативных профессий
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-70">
            © 2024 Переговоры для фотографов. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;