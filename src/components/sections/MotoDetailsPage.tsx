import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Calendar,
  Gauge,
  Settings,
  Fuel,
  Palette,
  Hash,
  MessageSquare,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  Info,
  Calculator,
  Repeat,
  User,
  Mail,
  MessageCircle,
} from "lucide-react";
import { MOCK_MOTOS } from "../../constants";
import { MotoCard } from "../ui/MotoCard";

export const MotoDetailsPage: React.FC<{ openModal?: () => void }> = ({
  openModal,
}) => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<
    "interested" | "details" | "finance" | "trade"
  >("interested");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moto = MOCK_MOTOS.find((m) => m.id === id) || MOCK_MOTOS[0];

  // Mock images for gallery
  const galleryImages = [
    moto.image,
    "https://images.unsplash.com/photo-1558981403-c5f91ad9320e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070&auto=format&fit=crop",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-20 ">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row mb-8">
          <div className="flex-1 bg-black p-8 pt-16 lg:p-12 lg:pt-24 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-white  mt-10  text-3xl md:text-5xl font-black italic uppercase leading-none mb-4 max-w-2xl">
                {moto.name} {moto.model}
              </h1>
              <div className="text-[#ff0000] text-xl font-black italic uppercase tracking-tighter">
                {moto.year}
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] translate-x-1/2"></div>
          </div>
          <div className="lg:w-[300px] bg-[#ff0000] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                Preço
              </div>
              <div className="text-white text-4xl font-black italic leading-none mb-2">
                R$ {moto.price.toLocaleString("pt-BR")}
              </div>
              <div className="text-black text-[10px] font-bold uppercase tracking-widest">
                Financie em até 60x
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/10 skew-y-[-5deg] translate-y-1/2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-8">
            <div className="relative group aspect-[16/10] bg-white overflow-hidden border border-gray-100">
              <img
                src={galleryImages[currentImageIndex]}
                alt={moto.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dynamic Overlay Label */}
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-[10px] font-black uppercase italic tracking-widest">
                Galeria de Fotos
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`aspect-video overflow-hidden border-2 transition-all ${currentImageIndex === idx ? "border-[#ff0000]" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Ficha Técnica */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 border border-gray-100 h-full">
              <h2 className="text-black font-black italic uppercase text-xs tracking-[0.3em] mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#ff0000]"></span>
                DETALHES TÉCNICOS
              </h2>

              <div className="space-y-6">
                <SpecItem
                  icon={<Hash size={18} />}
                  label="Marca"
                  value={moto.brand}
                />
                <SpecItem
                  icon={<Settings size={18} />}
                  label="Modelo"
                  value={moto.model}
                />
                <SpecItem
                  icon={<Calendar size={18} />}
                  label="Ano"
                  value={moto.year}
                />
                <SpecItem
                  icon={<Gauge size={18} />}
                  label="Quilometragem"
                  value={`${moto.mileage} KM`}
                />
                <SpecItem
                  icon={<Settings size={18} />}
                  label="Câmbio"
                  value={moto.transmission}
                />
                <SpecItem
                  icon={<Fuel size={18} />}
                  label="Combustível"
                  value={moto.fuel || "Gasolina"}
                />
                <SpecItem
                  icon={<Palette size={18} />}
                  label="Cor"
                  value={moto.color}
                />

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Placa Final
                  </div>
                  <div className="relative inline-block">
                    <div className="bg-white border-2 border-black rounded-md px-6 py-2 flex items-center gap-2">
                      <div className="w-3 h-2 bg-blue-600 rounded-sm"></div>
                      <span className="font-mono text-xl font-bold tracking-widest text-gray-300">
                        XXX
                      </span>
                      <span className="font-mono text-xl font-bold text-black">
                        {moto.id.slice(-1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <TabButton
              active={activeTab === "interested"}
              onClick={() => setActiveTab("interested")}
              icon={<MessageSquare size={20} />}
              label="Estou Interessado"
            />
            <TabButton
              active={activeTab === "details"}
              onClick={() => setActiveTab("details")}
              icon={<Info size={20} />}
              label="Detalhes"
            />
            <TabButton
              active={activeTab === "finance"}
              onClick={() => setActiveTab("finance")}
              icon={<Calculator size={20} />}
              label="Quero Financiar"
            />
   
          </div>

          <div className="bg-white border border-gray-100 min-h-[400px]">
            {activeTab === "interested" && (
              <InterestedTab moto={moto} openModal={openModal} />
            )}
            {activeTab === "details" && <DetailsTab />}
            {activeTab === "finance" && <FinanceTab moto={moto} />}
          </div>
        </div>

        {/* Related Section */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-black text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
                Você também <br />{" "}
                <span className="text-[#ff0000]">pode gostar:</span>
              </h2>
            </div>
            <Link
              to="/estoque"
              className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] transition-colors flex items-center gap-3 group"
            >
              Ver todo o NOSSO ESTOQUE
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Mobile Carousel / Desktop Grid */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {MOCK_MOTOS.filter((m) => m.id !== id)
              .slice(0, 3)
              .map((m) => (
                <div
                  key={m.id}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
                >
                  <MotoCard moto={m} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#ff0000] group-hover:bg-[#ff0000]/5 transition-all">
      {icon}
    </div>
    <div>
      <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
        {label}
      </div>
      <div className="text-xs font-bold uppercase text-black">{value}</div>
    </div>
  </div>
);

const TabButton = ({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-2 py-6 transition-all border-b-4 ${active ? "bg-white border-[#ff0000] text-[#ff0000]" : "bg-gray-100 border-transparent text-gray-400 hover:bg-gray-50"}`}
  >
    {icon}
    <span className="text-[10px] font-black uppercase tracking-widest">
      {label}
    </span>
  </button>
);

const InterestedTab = ({
  moto,
  openModal,
}: {
  moto: any;
  openModal?: () => void;
}) => (
  <div className="relative overflow-hidden">
    <div className="p-4 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {/* Left Side: Form */}
      <div className="bg-[#1A1A1A] p-6 md:p-12 rounded-[2.5rem] md:rounded-[32px] text-white relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-[#ff0000] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block italic">
            Interesse
          </span>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
            Fale com a <br />{" "}
            <span className="text-[#ff0000]">Nossa Equipe</span>
          </h3>

          <form
            className="space-y-4 md:space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1 italic">
                Nome Completo
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Seu nome aqui"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-[#ff0000] outline-none transition-all font-medium text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1 italic">
                  E-mail
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-[#ff0000] outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1 italic">
                  Telefone
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white focus:border-[#ff0000] outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-[#ff0000] text-white py-4 md:py-5 rounded-2xl font-black italic uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#cc0000] transition-all shadow-xl group mt-2">
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
              Enviar Mensagem
            </button>
          </form>
        </div>
        {/* Background Glow */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff0000]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: WhatsApp CTA */}
      <div className="flex flex-col justify-center items-center text-center p-4 md:p-8">
        <div className="max-w-sm">
          <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-4 leading-tight">
            Prefere que a gente <br className="hidden md:block" /> entre em
            contato?
          </h3>
          <p className="text-gray-500 font-medium mb-8 md:mb-12 text-sm md:text-base">
            Preencha os campos ao lado ou inicie um atendimento agora mesmo pelo
            WhatsApp.
          </p>

          <button
            onClick={openModal}
            className="w-full bg-[#25D366] text-white py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-[#1eb954] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-4 uppercase tracking-tighter italic"
          >
            <MessageCircle size={24} className="md:w-7 md:h-7" />
            INICIAR ATENDIMENTO
          </button>

          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-gray-100 flex flex-col items-center gap-4">
           <div className="relative group">
                  {/* Efeito de Pulsação Online */}
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>

                  {/* Container da Imagem Principal */}
                  <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="Atendente Comercial"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Badge de Status Online (Bolinha Verde) */}
                  <div className="absolute bottom-1.5 right-1.5 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Especialista Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DetailsTab = () => (
  <div className="p-6 md:p-12">
    <h3 className="text-2xl md:text-3xl font-black italic uppercase text-[#ff0000] mb-8">
      Diferenciais
    </h3>
    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
      Acessórios Inclusos:
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[
        "Partida Elétrica",
        "Freio a Disco",
        "Injeção Eletrônica",
        "Painel Digital",
        "ABS",
        "Controle de Tração",
        "Protetor de Motor",
        "Bauleto",
        "Manual do Proprietário",
        "Chave Reserva",
        "Pneus Novos",
        "Revisada",
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 group">
          <CheckCircle2
            size={18}
            className="text-[#ff0000] group-hover:scale-110 transition-transform"
          />
          <span className="text-xs font-bold uppercase text-gray-700">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const FinanceTab = ({ moto }: { moto: any }) => {
  const [downPayment, setDownPayment] = useState(1000);
  const financingAmount = moto.price - downPayment;

  const formatCurrency = (value: number) => {
    return value
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .replace("R$", "R$ ");
  };

  return (
    <div className="p-4 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left Side: Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="relative rounded-[2.5rem] md:rounded-[40px] overflow-hidden aspect-[16/10] ">
            <img
              src="\assets\img\finance.png"
              alt="Financiamento Shineray"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col gap-4 px-2 md:px-0">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none">
              FINANCIAMENTO <br />
              <span className="text-[#ff0000]">{moto.name}</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
              Realize o sonho da sua moto nova com aprovação rápida e as
              melhores taxas de Hortolândia. Simule agora e receba uma proposta
              personalizada em minutos.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 px-2 md:px-0">
            <div className="bg-white border border-gray-100 p-4 md:p-5 rounded-2xl shadow-sm flex items-center gap-4 group hover:shadow-md transition-all">
              <CheckCircle2 className="text-[#ff0000]" size={20} />
              <span className="text-black font-black italic uppercase text-[10px] md:text-xs tracking-tight">
                Aprovação em 30min
              </span>
            </div>
            <div className="bg-white border border-gray-100 p-4 md:p-5 rounded-2xl shadow-sm flex items-center gap-4 group hover:shadow-md transition-all">
              <CheckCircle2 className="text-[#ff0000]" size={20} />
              <span className="text-black font-black italic uppercase text-[10px] md:text-xs tracking-tight">
                Zero de Entrada
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[40px] p-6 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col gap-8 md:gap-10">
          {/* Sliders */}
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="flex flex-col gap-6">
              <label className="text-[#444] text-[10px] font-black uppercase tracking-widest">
                Valor de Entrada
              </label>
              <div className="relative pt-6">
                <div
                  className="absolute -top-4 bg-black text-white px-3 py-1 rounded-md text-[10px] font-black italic transform -translate-x-1/2 transition-all duration-200"
                  style={{ left: `${(downPayment / moto.price) * 100}%` }}
                >
                  {formatCurrency(downPayment)}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
                </div>
                <input
                  type="range"
                  min="0"
                  max={moto.price}
                  step="500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff0000]"
                />
                <div className="flex justify-between mt-2 text-[9px] font-bold text-gray-400 uppercase">
                  <span>R$ 0</span>
                  <span>R$ {moto.price.toLocaleString("pt-BR")}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
                Valor a Financiar:
              </span>
              <span className="text-black font-black italic text-base md:text-lg">
                {formatCurrency(financingAmount)}
              </span>
            </div>
          </div>

          {/* Inputs */}
          <form
            className="flex flex-col gap-5 md:gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">
                Seu Nome
              </label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">
                  Telefone
                </label>
                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">
                  CPF ou CNPJ
                </label>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
                />
              </div>
            </div>

            <button className="mt-4 w-full bg-black text-white py-4 md:py-5 rounded-2xl font-black italic uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#ff0000] transition-all shadow-xl group">
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
              Enviar Proposta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const TradeTab = ({ moto }: { moto: any }) => (
  <div className="p-8 lg:p-12">
    <h3 className="text-3xl font-black italic uppercase text-[#ff0000] mb-4">
      Quero Trocar
    </h3>
    <p className="text-gray-500 text-sm font-medium mb-12">
      Tem uma moto e quer dar como entrada? Preencha os dados abaixo para uma
      pré-avaliação.
    </p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          Dados da sua Moto
        </div>
        <input
          type="text"
          placeholder="Marca / Modelo"
          className="w-full bg-gray-50 border border-gray-100 p-4 text-xs font-bold uppercase outline-none focus:border-[#ff0000]"
        />
        <input
          type="text"
          placeholder="Ano"
          className="w-full bg-gray-50 border border-gray-100 p-4 text-xs font-bold uppercase outline-none focus:border-[#ff0000]"
        />
        <input
          type="text"
          placeholder="KM Atual"
          className="w-full bg-gray-50 border border-gray-100 p-4 text-xs font-bold uppercase outline-none focus:border-[#ff0000]"
        />
      </div>
      <div className="space-y-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          Seus Dados
        </div>
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full bg-gray-50 border border-gray-100 p-4 text-xs font-bold uppercase outline-none focus:border-[#ff0000]"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full bg-gray-50 border border-gray-100 p-4 text-xs font-bold uppercase outline-none focus:border-[#ff0000]"
        />
        <button className="bg-black text-white w-full py-4 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] transition-colors flex items-center justify-center gap-3 mt-4">
          <Repeat size={14} />
          Solicitar Avaliação
        </button>
      </div>
    </form>
  </div>
);
