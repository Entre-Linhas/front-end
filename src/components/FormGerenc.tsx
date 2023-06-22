import { HTMLAttributes } from "react";
import { X } from "@phosphor-icons/react"


interface FormProps extends HTMLAttributes<HTMLDivElement> {
    childrenForm?: React.ReactNode;
    _showForm: boolean
    _closeForm: () => void;
}

export default function Form ({ childrenForm, _showForm, _closeForm, ...rest }: FormProps) {
    return (
        <div className={`fixed flex items-center justify-center bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 transition-all duration-200 ${!_showForm && "invisible opacity-0"}`}>
        <div className="flex flex-col relative max-w-2xl bg-gray-100 max-h-screenModal rounded-lg shadow-md px-8 py-7" {...rest}>
            <button onClick={_closeForm} className="ml-auto">
                <X />
            </button>
            {childrenForm}
        </div>
    </div>
)

    
}