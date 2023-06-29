import { HTMLAttributes } from "react";
import { X } from "@phosphor-icons/react"


interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    _showModal: boolean
    _close: () => void;
}

export function Modal({ children, _showModal, _close, ...rest }: ModalProps) {
    return (
        <div className={`fixed flex items-center justify-center bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 transition-all duration-200 ${!_showModal && "invisible opacity-0"}`}>
            <div className="flex flex-col relative max-w-2xl max-h-screenModal rounded-lg shadow-md px-8 py-7" {...rest}>
                <button onClick={_close} className="ml-auto">
                    <X />
                </button>
                {children}
            </div>
        </div>
    )
}