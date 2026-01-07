import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/3653dabf-971e-4787-874f-fee2d140e143.jpg',
      title: 'Portrait',
    },
    {
      url: 'https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/ae9b25cf-165f-4075-989a-cc015bbcea12.jpg',
      title: 'Landscape',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Фотограф-портретист',
      text: 'Эта книга открыла мне глаза на совершенно новые подходы к работе со светом. Незаменимый ресурс!',
    },
    {
      name: 'Михаил Соколов',
      role: 'Коммерческий фотограф',
      text: 'Практичные советы, которые я сразу начал применять. Качество моих работ выросло на порядок.',
    },
    {
      name: 'Елена Волкова',
      role: 'Свадебный фотограф',
      text: 'Потрясающая книга! Каждая глава — это маленький шедевр с глубокими инсайтами.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/37e44eaf-dec9-4f38-a002-f0e03382e7aa.jpg"
            alt="Book Cover"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-serif text-7xl md:text-9xl font-bold mb-6">
            Искусство Света
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Мастерство фотографии в каждом кадре
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-semibold rounded-none"
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать книгу
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto animate-fade-in">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              О книге
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Более 250 страниц профессиональных техник, секретов композиции и работы со светом от ведущих мастеров фотографии.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Эта книга создана для фотографов, которые хотят вывести своё мастерство на новый уровень.
            </p>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/37e44eaf-dec9-4f38-a002-f0e03382e7aa.jpg"
              alt="Book"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-16">
            Галерея работ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square">
            <img
              src="https://cdn.poehali.dev/projects/109a09cd-b295-42d3-9cd1-41a89616feff/files/3653dabf-971e-4787-874f-fee2d140e143.jpg"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Об авторе
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Александр Светлов — фотограф с 15-летним опытом работы. Его снимки публиковались в National Geographic, Vogue и других ведущих изданиях.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Лауреат международных премий в области фотографии. Проводит мастер-классы по всему миру.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-16">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-none shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="buy" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Заказать книгу
          </h2>
          <p className="text-2xl font-semibold text-accent mb-2">3 990 ₽</p>
          <p className="text-muted-foreground">Бесплатная доставка по России</p>
        </div>
        <Card className="p-8 md:p-12 shadow-2xl border-none bg-secondary/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Имя</label>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Телефон</label>
              <Input
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-lg font-semibold rounded-none"
            >
              Оформить заказ
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </Card>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@artoflight.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-70" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-70" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">О проекте</h3>
              <p className="text-sm opacity-90">
                Издательство профессиональной литературы для фотографов
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-70">
            © 2024 Искусство Света. Все права защищены.
          </div>
        </div>
      </footer>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:opacity-70"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
