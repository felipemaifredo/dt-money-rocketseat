import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";

export const Summary = () => {
    return (
       <section className="summary">
            <div className="summary-container">
                <div className="summary-card">
                    <div>
                        <p>Entradas</p>
                        <FaRegArrowAltCircleUp />
                    </div>
                    <p>
                        <strong> R$ 17.400,00 </strong>
                    </p>
                </div>
                <div className="summary-card">
                    <div>
                        <p>Entradas</p>
                        <FaRegArrowAltCircleDown />
                    </div>
                    <p>
                        <strong> R$ 17.400,00 </strong>
                    </p>
                </div>
                <div className="summary-card">
                    <div>
                        <p>Total</p>
                        <LuCircleDollarSign />
                    </div>
                    <p>
                        <strong> R$ 17.400,00 </strong>
                    </p>
                </div>
            </div>
       </section>
    )
}