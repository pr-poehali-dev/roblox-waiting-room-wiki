import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("overview");

  const gameplayTips = [
    "Изучите карту и найдите все тайные проходы",
    "Собирайте ресурсы для улучшения своего персонажа",
    "Общайтесь с другими игроками для создания альянсов",
    "Следите за временем - оно ограничено в каждом раунде",
    "Не забывайте проверять обновления игры",
  ];

  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1594693629807-f3c08e63d8b1?q=80&w=800&auto=format&fit=crop",
      title: "Главный зал ожидания",
    },
    {
      url: "https://images.unsplash.com/photo-1587573088697-b4fa10460049?q=80&w=800&auto=format&fit=crop",
      title: "Боевая арена",
    },
    {
      url: "https://images.unsplash.com/photo-1614097396812-4cc46edaf44d?q=80&w=800&auto=format&fit=crop",
      title: "Лобби игроков",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Заголовок */}
      <header className="bg-[#9b87f5]/10 px-4 py-6 border-b border-[#9b87f5]/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icon name="Clock" size={32} className="text-[#9b87f5] mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat']">
              The Waiting Room
            </h1>
          </div>
          <div>
            <Badge className="bg-[#9b87f5] text-white mr-2 text-base">
              Рейтинг: 4.8/5
            </Badge>
            <Badge
              variant="outline"
              className="border-[#9b87f5] text-[#9b87f5] text-base"
            >
              Роблокс
            </Badge>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto px-4 py-8">
        <Tabs
          defaultValue="overview"
          className="w-full"
          onValueChange={setCurrentTab}
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="overview" className="text-lg py-3">
              Обзор
            </TabsTrigger>
            <TabsTrigger value="gameplay" className="text-lg py-3">
              Геймплей
            </TabsTrigger>
            <TabsTrigger value="gallery" className="text-lg py-3">
              Галерея
            </TabsTrigger>
          </TabsList>

          {/* Вкладка Обзор */}
          <TabsContent value="overview" className="animate-fade-in">
            <Card className="bg-[#1A1F2C] border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-3xl font-['Montserrat']">
                  Что такое The Waiting Room?
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Популярный режим в Roblox, захвативший миллионы игроков
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 font-['Roboto']">
                <p className="text-lg leading-relaxed">
                  <span className="text-[#9b87f5] font-semibold">
                    The Waiting Room
                  </span>{" "}
                  — это уникальный режим в платформе Roblox, который сочетает в
                  себе элементы выживания, стратегии и социального
                  взаимодействия. Игроки попадают в таинственное помещение, где
                  должны ждать неизвестное событие, взаимодействуя друг с другом
                  и решая головоломки.
                </p>
                <div className="border-l-4 border-[#9b87f5] pl-4 italic text-lg">
                  "The Waiting Room переосмысливает концепцию ожидания,
                  превращая его в увлекательный игровой процесс с
                  непредсказуемыми поворотами и глубоким лором."
                </div>
                <h3 className="text-2xl font-semibold font-['Montserrat'] text-[#9b87f5]">
                  История создания
                </h3>
                <p className="text-lg leading-relaxed">
                  Режим был создан в 2022 году разработчиком под ником
                  MysteryDev. Изначально задуманный как небольшой эксперимент,
                  The Waiting Room быстро обрел популярность благодаря своей
                  уникальной атмосфере и интригующему геймплею. На сегодняшний
                  день игра имеет более 50 миллионов посещений и активное
                  сообщество.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-[#9b87f5] hover:bg-[#8a76e4] text-lg py-6 px-6">
                  <Icon name="ExternalLink" className="mr-2 h-5 w-5" />
                  Играть сейчас
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Вкладка Геймплей */}
          <TabsContent value="gameplay" className="animate-fade-in">
            <Card className="bg-[#1A1F2C] border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-3xl font-['Montserrat']">
                  Игровой процесс
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Механики и особенности The Waiting Room
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 font-['Roboto']">
                <h3 className="text-2xl font-semibold font-['Montserrat'] text-[#9b87f5]">
                  Основные механики
                </h3>
                <p className="text-lg leading-relaxed">
                  В The Waiting Room игроки попадают в загадочное пространство,
                  где каждые 5 минут происходят различные события. Игровой
                  процесс включает сбор ресурсов, разгадывание головоломок и
                  взаимодействие с другими игроками. Успех зависит от вашей
                  наблюдательности и способности быстро адаптироваться.
                </p>

                <h3 className="text-2xl font-semibold font-['Montserrat'] text-[#9b87f5]">
                  Полезные советы
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gameplayTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-[#9b87f5]/5 p-4 rounded-md hover:bg-[#9b87f5]/10 transition-colors"
                    >
                      <Icon
                        name="CheckCircle"
                        className="text-[#9b87f5] mr-3 mt-1 flex-shrink-0 h-6 w-6"
                      />
                      <p className="text-lg">{tip}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold font-['Montserrat'] text-[#9b87f5]">
                  Режимы игры
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-[#9b87f5]/20 rounded-md p-5 hover:border-[#9b87f5] transition-colors">
                    <h4 className="font-semibold mb-2 text-xl">
                      Обычный режим
                    </h4>
                    <p className="text-base text-gray-300">
                      Классический опыт ожидания с разнообразными событиями
                    </p>
                  </div>
                  <div className="border border-[#9b87f5]/20 rounded-md p-5 hover:border-[#9b87f5] transition-colors">
                    <h4 className="font-semibold mb-2 text-xl">Хардкор</h4>
                    <p className="text-base text-gray-300">
                      Повышенная сложность и уникальные испытания
                    </p>
                  </div>
                  <div className="border border-[#9b87f5]/20 rounded-md p-5 hover:border-[#9b87f5] transition-colors">
                    <h4 className="font-semibold mb-2 text-xl">Кооператив</h4>
                    <p className="text-base text-gray-300">
                      Командная игра с фокусом на совместных действиях
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Вкладка Галерея */}
          <TabsContent value="gallery" className="animate-fade-in">
            <Card className="bg-[#1A1F2C] border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-3xl font-['Montserrat']">
                  Галерея
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Скриншоты из The Waiting Room
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-[#9b87f5]/20 hover:border-[#9b87f5] transition-all hover:scale-105 group"
                    >
                      <div className="relative aspect-video">
                        <img
                          src={screenshot.url}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                          <p className="text-white font-medium text-lg">
                            {screenshot.title}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-[#9b87f5]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            variant="outline"
                            className="bg-black/30 border-white text-white hover:bg-black/50 text-lg"
                          >
                            <Icon name="ZoomIn" className="mr-2 h-5 w-5" />
                            Увеличить
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="outline"
                  className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 text-lg py-5 px-6"
                >
                  <Icon name="Image" className="mr-2 h-5 w-5" />
                  Загрузить больше
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Подвал */}
      <footer className="bg-[#9b87f5]/10 border-t border-[#9b87f5]/20 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p className="mb-2 text-lg">© 2025 The Waiting Room Wiki</p>
          <div className="flex justify-center space-x-4 mt-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#9b87f5] hover:text-white hover:bg-[#9b87f5]/20"
            >
              <Icon name="Github" className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#9b87f5] hover:text-white hover:bg-[#9b87f5]/20"
            >
              <Icon name="Twitter" className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#9b87f5] hover:text-white hover:bg-[#9b87f5]/20"
            >
              <Icon name="Youtube" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
