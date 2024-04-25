import logo from "../assets/Logo.svg"
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from "react-icons/io";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

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
                                <input placeholder="Categoria" list="categories" />
                                <datalist id="categories">
                                    <option>Alimentação</option>
                                    <option>Moradia</option>
                                    <option>Transporte</option>
                                    <option>Saúde</option>
                                    <option>Educação</option>
                                    <option>Lazer e entretenimento</option>
                                    <option>Roupas e acessórios</option>
                                    <option>Economias e investimentos</option>
                                    <option>Dívidas</option>
                                    <option>Outros</option>
                                </datalist>
                                <div className="transaction-type">
                                    <input type="radio" id="transaction-plus" name="transaction-type" />
                                    <label className="plus" htmlFor="transaction-plus">
                                        <FaRegArrowAltCircleUp />
                                        <p>Entrada</p>
                                    </label>
                                    <input type="radio" id="transaction-minus" name="transaction-type" />
                                    <label className="minus" htmlFor="transaction-minus">
                                        <FaRegArrowAltCircleDown />
                                        <p>Saída</p>
                                    </label>
                                </div>
                                <button> Adicionar </button>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </header>
    )
}