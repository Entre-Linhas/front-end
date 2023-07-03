import { FacebookLogo, TwitterLogo, TwitchLogo, InstagramLogo, WhatsappLogo, TelegramLogo } from "@phosphor-icons/react"
import { useEffect } from "react";


export interface RedeSocialProps {
    url: string;
}

type IconName = {
    [key: string]: React.ReactElement;
}

export function RedeSocial({ url }: RedeSocialProps) {
    const getLinkingName = new RegExp('https://([^.]+).', 'g').exec(url.replace("www.", "")) || "vazio" // Pegando qual quer Caracters que não sejam https:// e .
   
    const iconName: IconName = {
        "facebook": <FacebookLogo />,
        "twitter": <TwitterLogo />,
        "twitch": <TwitchLogo />,
        "instagram": <InstagramLogo />,
        "whatsapp": <WhatsappLogo />,
        "telegram": <TelegramLogo />
    }

    return (
        <a href={url} target="_blank" className="flex items-center gap-2">
            {iconName[getLinkingName[1]] || <div className="w-2 h-2 rounded-md bg-gray-400" />}

            <span>{getLinkingName === "vazio" ? "Not found" : getLinkingName[1].charAt(0).toUpperCase() + getLinkingName[1].slice(1).toLowerCase()}</span>
        </a>
    )
}