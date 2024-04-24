import logo from "../assets/Logo.svg"
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from "react-icons/io";

export const Header = () => {
    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo" />  
                <Dialog.Root>
                    <Dialog.Trigger asChild>  
                        <button> Nova transação </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <div>
                                <Dialog.Title> Nova transação </Dialog.Title>
                                <Dialog.Close>
                                    <IoMdClose />
                                </Dialog.Close>
                            </div>
                            <form>
                                <input placeholder="Nome" />
                                <input placeholder="Valor" />
                                <input placeholder="Categoria" />
                                <button> Adicionar </button>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>              
            </div>
        </header>
    )
}