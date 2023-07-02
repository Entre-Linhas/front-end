import { CaretLeft, Envelope, Key } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { Context } from "../contexts/Context";
import api from "../apiInstance";
import { Modal } from "../components/Modal";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  var [currentValue, setCurrentValue] = useState<string>("/ContentIm5.jpg");
  const [ error, setError] = useState(false);
  const { auth, setAuth } = useContext(Context);
  const {perfil, setPerfil, setAtividades, atualizarPerfil} = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
      setShowModal(!showModal)
  }

  const formData = {
    email,
    senha
  };
 
  const navigate = useNavigate();



  const handleSubmit = () => {
    api
      .post("/usuarios/login", formData)
      .then((response) => {
        if (response.data) {
          setAuth && setAuth(true);
          setPerfil?.(response.data)
          setAtividades && setAtividades(response.data.trilhas.atividades)
          localStorage.setItem('perfil', JSON.stringify(response.data))
          if (response.data.progresso === null) {
            navigate("/Nivelamento")
          } else {
            navigate("/Trilha")
          }
        } else {
          console.log("vazio");
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        handleModal();
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
            <Button titleBt="Entrar" onClick={handleSubmit} title="Entrar" style={{width: "100%", maxWidth: "55rem"}} />
            <NavLink to="/SignUp" className="dark:text-gray-100" title='cadastrar-se'>
              Cadastrar-me
            </NavLink>
          </div>
        </div>

        <div className="max-[1023px]:hidden flex items-center w-[100%] h-screen">
          <img src={currentValue} className="w-[100%] h-screen object-cover min-[1024px]:object-center" alt="imagens de costureiras" role="imagem ilustrativa de costureiras" />
        </div>



            <Modal _showModal={showModal} _close={handleModal}  >
              <div className="flex flex-col items-center">
              <h1 className="text-center font-semibold text-[2.8rem] dark:text-gray-900 text-custom-salmon">Opa, algo deu errado...</h1>
                <p style={{ width: "-webkit-fill-available"}} className="py-20 text-[2rem]">Os dados inseridos podem estar invalidos, ou você pode ainda não possuir um cadastro conosco.</p>
                <div className="flex gap-10 text-white"> 
                  <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md text-[1.8rem]" onClick={() => setShowModal(!showModal)}>Tentar novamente</button>
                  <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md text-[1.8rem]"><Link to="/signup" title="Realizar cadastro">Registrar</Link></button>
               </div>
              </div>
            </Modal>
      </div>
    </>
  );
}
