import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as classSwiper } from 'swiper';

const CalculadoraPrecificacao: React.FC = () => {
  const [horas, setHoras] = useState<number>(0);
  const [precoHora, setPrecoHora] = useState<number>(0);
  const [precoLinha, setPrecoLinha] = useState<number>(0);
  const [qtdLinha, setQtdLinha] = useState<number>(0);
  const [precoTecido, setPrecoTecido] = useState<number>(0);
  const [qtdTecido, setQtdTecido] = useState<number>(0);
  const [precoBotoes, setPrecoBotoes] = useState<number>(0);
  const [qtdBotoes, setQtdBotoes] = useState<number>(0);
  const [precoProduto, setPrecoProduto] = useState<number>(0);
  const swiperRef = useRef<classSwiper>();

  const calcularPreco = (): void => {
    const custoHoras: number = horas * precoHora;
    const custoLinha: number = precoLinha * qtdLinha;
    const custoTecido: number = precoTecido * qtdTecido;
    const custoBotoes: number = precoBotoes * qtdBotoes;

    const precoProduto: number = custoHoras + custoLinha + custoTecido + custoBotoes;

    changeStep();
    setPrecoProduto(precoProduto);
  };

  const changeStep = () => {
    swiperRef.current?.slideNext();
  }

  const backStep = () => {
    swiperRef.current?.slidePrev();
  }

  return (
    <div className="flex justify-center items-center h-screen dark:text-white">
       
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        // allowSlideClick={false}
        allowTouchMove={false}
        onSwiper={(swi) => swiperRef.current = swi}
      >
        <SwiperSlide>
          <label className="mb-4">
            Horas gastas:
            <input
              type="number"
              value={horas}
              onChange={(e) => setHoras(parseFloat(e.target.value))}
              step={0.5}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>

          <label className="mb-4">
            Preço cobrado por hora:
            <input
              type="number"
              value={precoHora}
              onChange={(e) => setPrecoHora(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>
          <button onClick={changeStep}>Continuar</button>
        </SwiperSlide>

        <SwiperSlide>
          <label className="mb-4">
            Preço da linha (por unidade):
            <input
              type="number"
              value={precoLinha}
              onChange={(e) => setPrecoLinha(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>

          <label className="mb-4">
            Quantidade de linha utilizada:
            <input
              type="number"
              value={qtdLinha}
              onChange={(e) => setQtdLinha(parseFloat(e.target.value))}
              step={1}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>
          <button onClick={backStep}>Voltar</button>
          <button onClick={changeStep}>Continuar</button>
        </SwiperSlide>

        <SwiperSlide>
          <label className="mb-4">
            Preço do tecido (por metro):
            <input
              type="number"
              value={precoTecido}
              onChange={(e) => setPrecoTecido(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>

          <label className="mb-4">
            Quantidade de tecido utilizado (em metros):
            <input
              type="number"
              value={qtdTecido}
              onChange={(e) => setQtdTecido(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>
          <button onClick={changeStep}>Continuar</button>
        </SwiperSlide>

        <SwiperSlide>
          <label className="mb-4">
            Preço dos botões (por unidade):
            <input
              type="number"
              value={precoBotoes}
              onChange={(e) => setPrecoBotoes(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>

          <label className="mb-4">
            Quantidade de botões utilizados:
            <input
              type="number"
              value={qtdBotoes}
              onChange={(e) => setQtdBotoes(parseInt(e.target.value))}
              step={1}
              min={0}
              className="w-full border rounded p-2"
            />
          </label>

          <button onClick={calcularPreco} className="bg-blue-500 text-white py-2 px-4 rounded">
            Calcular
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <h2 className="text-xl font-bold mt-6">Resultado:</h2>

          <p className="text-lg">Preço do Produto: R$ {precoProduto.toFixed(2)}</p>

          <button onClick={backStep} className="bg-blue-500 text-white py-2 px-4 rounded">
            Voltar
          </button>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default CalculadoraPrecificacao;
