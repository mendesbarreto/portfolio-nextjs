import { Header } from "@/components/common/header";
import { ContactInfo } from "@/components/contacts/contact-info";
import { TerminalBlock } from "@/components/common/terminal-block";

export default function Contacts() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background max-w-1064 mx-auto pt-8 md:pt-16 px-4 md:px-0 pb-16">
        <Header />

        <TerminalBlock title="contacts" className="mb-8 md:mb-16">
          <div className="w-32 h-1 bg-mGreen mb-8"></div>
        </TerminalBlock>

        <ContactInfo />
      </div>
    </div>
  );
}
