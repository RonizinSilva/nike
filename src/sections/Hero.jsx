// Importação de componentes e recursos necessários
import Button from "../components/Button" // Componente de botão
import { arrowRight } from "../assets/icons" // Ícone de seta para a direita
import { shoes, statistics } from "../contants" // Dados constantes de sapatos e estatísticas
import { bigShoe1 } from "../assets/images" // Imagem do sapato grande
import ShoeCard from "../components/ShoeCard" // Componente de cartão de sapato
import { useState } from "react" // Hook de estado do React

const Hero = () => {
  // Estado local para a imagem do sapato grande
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    // Seção principal da página inicial
    <section id="home" className="flex w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2">
      {/* Parte esquerda da seção: Texto e botão */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-28 pt-28">
        {/* Estilização do texto principal */}
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        {/* Botão de "Shop Now" */}
        <Button label="Shop now" iconURL={arrowRight} />
        
        {/* Exibição de estatísticas */}
        <div className="flex justify-center items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              {/* Estilo para estatísticas */}
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Parte direita da seção: Imagem grande e seleção de sapatos */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {/* Imagem grande do sapato */}
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        {/* Seleção de sapatos em miniatura */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {/* Mapeamento e exibição de cartões de sapato */}
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Exportação do componente Hero
export default Hero
