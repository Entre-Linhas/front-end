import { CaretLeft, Envelope, Key } from "@phosphor-icons/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { Context } from "../contexts/Context";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  var [currentValue, setCurrentValue] = useState<string>("/ContentIm5.jpg");
  const [error, setError] = useState(false);
  const { auth, setAuth } = useContext(Context);
  const {perfil, setPerfil} = useContext(Context);
  const formData = {
    email,
    senha
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://dgc6qt23wamgi.cloudfront.net/api/usuarios/login", formData)
      .then((response) => {
        if (response.data) {
          setAuth && setAuth(true);
          setPerfil?.(response.data)
          navigate("/Nivelamento");
        } else {
          console.log("vazio");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  const carouselValues: string[] = [
    "/ContentIm1.jpg",
    "/ContentIm2.jpg",
    "/ContentIm3.jpg",
    "/ContentIm4.jpg",
    "/ContentIm5.jpg"
  ];
  let currentIndex: number = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentValue(carouselValues[currentIndex]);
      currentIndex = (currentIndex + 1) % carouselValues.length;
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="flex">
        <div className="h-screen bg-white flex flex-col p-6 max-[1023px]:w-full sm:w-full min-[1024px]:w-[64rem] min-[1440px]:w-[100rem] min-[1770px]:w-[130rem] dark:bg-zinc-900">
          <header className="w-full">
            <button
              className="flex items-center gap-1 min-[560px]:text-[1.2rem] min-[720px]:text-[1.4rem] dark:text-gray-100"
              onClick={() => navigate(-1)}
            >
              <CaretLeft />
              Voltar
            </button>
          </header>

          <div className="flex flex-col items-center my-auto gap-[1rem]">
            <Logo />

            <h4 className="text-[1.4rem] min-[300px]:text-[1.6rem] min-[360px]:text-[1.8rem] min-[560px]:text-[2.2rem] dark:text-white">
              Olá, boas vindas de volta =)
            </h4>
            <span className="text-[1rem] min-[300px]:text-[1.2rem] min-[360px]:text-[1.4rem] min-[720px]:text-[1.5rem] dark:text-gray-100">
              Estamos contente em vê-lo(a) novamente.
            </span>
            <Input
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
              leftElement={<Envelope className="mr-2 text-zinc-300 " weight="light" size={31} />}
            />
            <Input
              placeholder="Senha"
              onChange={(e: any) => setPassword(e.target.value)}
              leftElement={<Key className="mr-2 text-zinc-300" weight="light" size={31} />}
            />
            <Button title="Entrar" onClick={handleSubmit} />
            <NavLink to="/SignUp" className="dark:text-gray-100">
              Cadastrar-me
            </NavLink>
          </div>
        </div>

        <div className="max-[1023px]:hidden flex items-center w-[100%] h-screen">
          <img src={currentValue} className="w-[100%] h-screen object-cover min-[1024px]:object-center" />
        </div>
      </div>
    </>
  );
}
