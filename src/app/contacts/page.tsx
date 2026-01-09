import { TerminalHeader } from "@/components/common/terminal-header";
import { ContactInfo } from "@/components/contacts/contact-info";

export default function Contacts() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background max-w-1064 mx-auto pt-8 md:pt-16 px-4 md:px-0 pb-16">
        <TerminalHeader />

        <ContactInfo />
      </div>
    </div>
  );
}
