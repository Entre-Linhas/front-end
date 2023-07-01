import { FacebookLogo, TwitterLogo, TwitchLogo, InstagramLogo, WhatsappLogo, TelegramLogo } from "@phosphor-icons/react"


export interface RedeSocialProps {
    url: string;
}


export function RedeSocial({ url }: RedeSocialProps) {
    const getLinkingName = new RegExp('https://([^.]+).', 'g').exec(url.replace("www.", "")) || "vazio" // Pegando qual quer Caracters que não sejam https:// e .
   
    const iconName = {
        facebook: <FacebookLogo />,
        twitter: <TwitterLogo />,
        twitch: <TwitchLogo />,
        instagram: <InstagramLogo />,
        whatsapp: <WhatsappLogo />,
        telegram: <TelegramLogo />
    }

    return (
        <div>
            {iconName[getLinkingName !== "vazio" && getLinkingName[1]] || <div className="w-2 h-2 rounded-md bg-gray-400" />}

            <span>{getLinkingName === "vazio" ? "Not found" : getLinkingName[1].charAt(0).toUpperCase() + getLinkingName[1].slice(1).toLowerCase()}</span>
        </div>
    )
}