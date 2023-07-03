import { Acordes } from "../components/Acordes";
import { CaretDown, X, Plus, Coins } from "@phosphor-icons/react";
import { useState } from "react";

interface ProductInputProps {
  title: string;
  total: string;
  qnt: string;
  pricing: string;
}

export const Itens = () => {
  const [display, setDisplay] = useState(false);
  const [product, setProduct] = useState<ProductInputProps[]>([]);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const handleAddProduct = () => {
    setProduct([
      ...product,
      { title: "", total: "", qnt: "", pricing: "" }
    ]);
  };

  const handleRemoveProduct = (index: number) => {
    const newProduct = [...product];
    newProduct.splice(index, 1);
    setProduct(newProduct);
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const newProduct = [...product];
    // newProduct[index][field] = value;
    setProduct(newProduct);
  };

  return (
    <>
      <div className="w-full border solid border-[#CCCCCC] flex flex-col rounded-md shadow-lg">
        <div className="flex flex-wrap items-center justify-between px-5 py-3  ">
          <span className="font-bold px-3">Nome do produto</span>
          <span className="text-[#62B8AF] font-bold">Valor</span>
          <div className="flex">
            <span title="Ver">
              <CaretDown size={24} weight="thin" onClick={handleDisplay} />
            </span>
            <span title="Remover">
              <X size={24} weight="thin" />
            </span>
          </div>
        </div>

        <div className={`m-auto w-[90%] flex flex-col gap-5 py-5 ${display ? "block" : "hidden"}`}>
          {product.map((v: ProductInputProps, i: number) => (
            <div key={i} className="flex border solid border-[#CCCCCC] items-center gap-3 py-3 px-3 rounded-md">
              <span title="Mais">
                <Plus size={32} weight="thin" />
              </span>
              <span>CM total</span>
              <input
                type="text"
                value={v.total}
                className=""
                onChange={(e) => handleInputChange(i, "total", e.target.value)}
              />
            </div>
          ))}

          {/* <div className="flex border solid border-[#CCCCCC] items-center gap-3 py-3 px-3 rounded-md">
            <span title="moeda">
              <Coins size={32} weight="thin" />
            </span>
            <span>CM utilizado</span>
          </div>

          <div className="flex border solid border-[#CCCCCC] items-center gap-3 py-3 px-3 rounded-md">
            <span title="moeda">
              <Coins size={32} weight="thin" />
            </span>
            <span>Preço pago pela linha</span>
          </div> */}

          <button onClick={handleAddProduct}>Adicionar produto</button>
        </div>
      </div>
    </>
  );
};
