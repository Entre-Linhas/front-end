import { HTMLAttributes } from "react";
import { X } from "@phosphor-icons/react"


interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    _showModal: boolean
    _close: () => void;
    _maxWidth?: string
    _Custom?: string
    
}

export function Modal({ children, _showModal, _close, _maxWidth = "w-full max-w-2xl", _Custom = "bg-white", ...rest }: ModalProps) {
    return (
        <div className={`px-5 fixed flex items-center justify-center bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 transition-all duration-200 ${!_showModal && "invisible opacity-0"}`}>
            <div className={`flex flex-col ${_Custom} relative ${_maxWidth} max-h-screenModal rounded-lg shadow-md px-8 py-7 `} {...rest}>
                <button onClick={_close} className="ml-auto">
                    <X className="dark:text-gray-900"/>
                </button>
                {children}
            </div>
        </div>
    )
}