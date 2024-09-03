import { BubbleChat } from "flowise-embed-react";

export default function Chat() {
  return (
    <BubbleChat
      chatflowid={process.env.NEXT_PUBLIC_CHATFLOW_ID!}
      apiHost={process.env.NEXT_PUBLIC_CHATFLOW_API_HOST}
      theme={{
        button: {
          right: 20,
          bottom: 20,
          size: "large", // small | medium | large | number
          dragAndDrop: true,
          iconColor: "white",
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: "Hallo 👋!",
          tooltipBackgroundColor: "black",
          tooltipTextColor: "white",
          tooltipFontSize: 16,
        },
        chatWindow: {
          showTitle: true,
          title: "MontageProfi - Demo",
          welcomeMessage:
            "Hallo, hier ist Sammy von MontageProfi. Wie kann ich Ihnen heute weiterhelfen?",
          textInput: {
            placeholder: "Bitte Frage eingeben",
            sendButtonColor: "#202A37",
            textColor: "#202A37",
          },
          userMessage: {
            showAvatar: true,
            avatarSrc: "/account.png",
            backgroundColor: "#F4EBC0",
            textColor: "#202A37",
          },
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc: "/assistant.webp",
          },
          footer: {
            showFooter: false,
            company: "METAMARE",
            companyLink: "https://metamare.de/",
          },
        },
      }}
    />
  );
}
