import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as classSwiper } from 'swiper';
import { RadioButton } from "@phosphor-icons/react";
import { Button } from '../components/Button';

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
    <div className="flex justify-center items-center dark:bg-zinc-700  py-10 px-10">

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        // _containerClasses={"bg-black"}
        allowTouchMove={false}
        onSwiper={(swi) => swiperRef.current = swi}
      >
        <SwiperSlide>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-3">
            <span className=" dark:text-white text-[2.2rem]"> Horas gastas: </span>
            <input
              type="number"
              value={horas}
              onChange={(e) => setHoras(parseFloat(e.target.value))}
              step={0.5}
              min={0}
              className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white" />
          </div>
          <div className="flex flex-col gap-3">
            <span className=" dark:text-white text-[2.2rem]">
              Preço cobrado por hora:
            </span>
            <input
              type="number"
              value={precoHora}
              onChange={(e) => setPrecoHora(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
            />
          </div>
          </div>
          <div className="flex gap-10 justify-center items-center py-10"> 
            <Button titleBt="Continuar" onClick={changeStep} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-3">
            <span className=" dark:text-white text-[2.2rem]">
              Preço da linha (por unidade):
            </span>
            <input
              type="number"
              value={precoLinha}
              onChange={(e) => setPrecoLinha(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className=" dark:text-white text-[2.2rem]">
              Quantidade de linha utilizada:
            </span>
            <input
              type="number"
              value={qtdLinha}
              onChange={(e) => setQtdLinha(parseFloat(e.target.value))}
              step={1}
              min={0}
              className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
            />
          </div>
          </div>
          <div className="flex gap-10 justify-center items-center py-10">
            <Button titleBt="Voltar" onClick={backStep} />
            <Button titleBt="Continuar" onClick={changeStep} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-3">
            <span className=" dark:text-white text-[2.2rem]">
              Preço do tecido (por metro):
            </span>
            <input
              type="number"
              value={precoTecido}
              onChange={(e) => setPrecoTecido(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className=" dark:text-white text-[2.2rem]">
              Quantidade de tecido utilizado (em metros):
            </span>
            <input
              type="number"
              value={qtdTecido}
              onChange={(e) => setQtdTecido(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
            />
          </div>
          </div>
          <div className="flex gap-10 justify-center items-center py-10">
            <Button titleBt="Voltar" onClick={backStep} />
            <Button titleBt="Continuar" onClick={changeStep} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
              <span className=" dark:text-white text-[2.2rem]">
                Preço dos botões (por unidade):
              </span>
              <input
                type="number"
                value={precoBotoes}
                onChange={(e) => setPrecoBotoes(parseFloat(e.target.value))}
                step={0.01}
                min={0}
                className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className=" dark:text-white text-[2.2rem]">
                Quantidade de botões utilizados:
              </span>
              <input
                type="number"
                value={qtdBotoes}
                onChange={(e) => setQtdBotoes(parseInt(e.target.value))}
                step={1}
                min={0}
                className="w-full border rounded-xl px-2 py-2 shadow-lg dark:bg-zinc-800 border-none text-inherit dark:text-white"
              />
            </div>
          </div>
          <div className="py-10 flex gap-10 items-center justify-center">

            <Button titleBt="Voltar" onClick={backStep} />

            <Button titleBt="Calcular" onClick={calcularPreco} />

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-20 items-center py-10">
            <h2 className="font-bold mt-6 dark:text-white text-[2.2rem]">Resultado:</h2>

            <p className="text-[2.2rem] dark:text-white ">Preço mínimo: R$ {precoProduto.toFixed(2)}</p>

            <Button titleBt="Voltar" onClick={backStep} />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default CalculadoraPrecificacao;
