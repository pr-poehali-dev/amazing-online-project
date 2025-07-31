import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const blogPosts = [
  {
    id: 1,
    title: "10 трендов веб-дизайна 2024",
    excerpt: "Откройте для себя последние тенденции в мире веб-дизайна и UX/UI, которые будут доминировать в этом году.",
    category: "Дизайн",
    tags: ["веб-дизайн", "тренды", "UX/UI"],
    author: "Анна Дизайнер",
    date: "15 янв 2024",
    readTime: "5 мин",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "React Hooks: полное руководство",
    excerpt: "Изучите все современные React хуки и научитесь использовать их эффективно в своих проектах.",
    category: "Разработка",
    tags: ["React", "JavaScript", "хуки"],
    author: "Максим Кодер",
    date: "12 янв 2024",
    readTime: "8 мин",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "TypeScript для начинающих",
    excerpt: "Пошаговое введение в TypeScript с практическими примерами и лучшими практиками.",
    category: "Разработка",
    tags: ["TypeScript", "JavaScript", "обучение"],
    author: "Елена Программист",
    date: "10 янв 2024",
    readTime: "6 мин",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Маркетинг в социальных сетях",
    excerpt: "Стратегии и инструменты для эффективного продвижения бренда в социальных медиа.",
    category: "Маркетинг",
    tags: ["SMM", "маркетинг", "соцсети"],
    author: "Игорь Маркетолог",
    date: "8 янв 2024",
    readTime: "7 мин",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Искусственный интеллект в бизнесе",
    excerpt: "Как компании используют ИИ для автоматизации процессов и улучшения клиентского опыта.",
    category: "Технологии",
    tags: ["ИИ", "бизнес", "автоматизация"],
    author: "Сергей Инноватор",
    date: "5 янв 2024",
    readTime: "10 мин",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Психология цвета в дизайне",
    excerpt: "Изучаем влияние цветов на восприятие пользователей и эмоциональные реакции.",
    category: "Дизайн",
    tags: ["психология", "цвет", "дизайн"],
    author: "Анна Дизайнер",
    date: "3 янв 2024",
    readTime: "4 мин",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop"
  }
]

const categories = ["Все", "Дизайн", "Разработка", "Маркетинг", "Технологии"]
const popularTags = ["веб-дизайн", "React", "JavaScript", "TypeScript", "ИИ", "маркетинг", "UX/UI", "тренды"]

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Все" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    return matchesCategory && matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AMAZING ONLINE
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
            </nav>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Блог о современных технологиях
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Изучайте последние тренды в веб-разработке, дизайне и цифровом маркетинге. 
              Экспертные статьи, практические руководства и вдохновляющие истории.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Icon name="Rss" size={20} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Popular Tags */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">Популярные теги:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {popularTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Icon name="User" size={14} className="mr-1" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Icon name="Clock" size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="FileX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Статьи не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить фильтры или поисковый запрос
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={48} className="mx-auto text-white mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Подпишитесь на рассылку
            </h3>
            <p className="text-white/90 mb-8">
              Получайте уведомления о новых статьях и эксклюзивном контенте прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Ваш email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" size="lg">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold">AMAZING ONLINE</span>
              </div>
              <p className="text-muted-foreground">
                Ваш источник знаний в мире современных технологий и дизайна.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Дизайн</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Разработка</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Маркетинг</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Технологии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ссылки</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Контакты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Политика</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">RSS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Amazing Online. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}