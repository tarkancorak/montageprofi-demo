import { BubbleChat } from "flowise-embed-react";

export default function Chat() {
  return (
    <BubbleChat
      chatflowid={process.env.NEXT_PUBLIC_CHATFLOW_ID!}
      apiHost={process.env.NEXT_PUBLIC_CHATFLOW_API_HOST}
      theme={{
        chatWindow: {
          showTitle: true,
          title: "MontageProfi - Demo",
          welcomeMessage:
            "Hallo und willkommen! Wie kann ich Ihnen heute helfen? Ich stehe bereit, um Ihre Fragen zu beantworten oder Ihr Projekt zu unterstützen.",
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
            avatarSrc: "/bot.png",
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
